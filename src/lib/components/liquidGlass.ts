/**
 * Liquid-glass surface and motion for the sidebar flyout: a frosted,
 * translucent panel with a specular rim (the motion is in glassMotion). CSS
 * only — the SVG refraction trick (`backdrop-filter: url(#…)`) is Chromium-only,
 * so the glass is blur + saturation + highlights everywhere.
 */
import { keyframes } from '@emotion/react';
import * as React from 'react';
import { parseColorToRgb, withAlpha } from './sidebarUtils';

/** How much light the glass bends: none at 0, the full material at 1. */
const GLASS_BLUR_PX = 28;
const GLASS_SATURATE_PCT = 180;
export const glassBlur = (amount: 0 | 1) => ({
	backdropFilter: `blur(${amount * GLASS_BLUR_PX}px) saturate(${100 + amount * (GLASS_SATURATE_PCT - 100)}%)`
});

/** Each tile wells up after the one before it. Transform and opacity only:
 * a filter on every tile at once is what makes an entrance stutter. */
export const tileIn = keyframes`
	from {
		opacity: 0;
		transform: translateX(-6px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: none;
	}
`;

export const REDUCED_MOTION = '@media (prefers-reduced-motion: reduce)';

/**
 * Light from the pointer: a soft white spot of `radius` px at the pointer's
 * position on the glass (`--lx` / `--ly`), as strong as `--li` (0 when the
 * pointer is away) times `alpha`. GlassLayer keeps the three variables up
 * to date; without them the spot is off.
 */
const pointerLight = (radius: number, alpha: number, rgb: string) =>
	`radial-gradient(${radius}px circle at var(--lx, -9999px) var(--ly, -9999px), rgba(${rgb}, calc(${alpha} * var(--li, 0))) 0%, rgba(${rgb}, 0) 70%)`;

/** Every corner of the glass UI: rail, items, labels, cards and menus. */
export const GLASS_RADIUS_PX = 6;

/** The Lumora teal, the light's colour when the host sets no accent. */
const LUMORA_TEAL_RGB = '9, 193, 174';

/**
 * The accent the glass takes its light from: the wrapper provides its
 * sidebar accent, so the light matches each platform's colour. A context
 * rather than a prop, so the glass cards in portals (flyout, menus) get it.
 */
export const GlassAccentContext = React.createContext<string | undefined>(
	undefined
);

/** The glass accent as `r, g, b` (teal when unset or not a hex colour). */
export const useGlassAccentRgb = () => {
	const accent = React.useContext(GlassAccentContext);
	const rgb = accent ? parseColorToRgb(accent) : null;
	return rgb ? rgb.join(', ') : LUMORA_TEAL_RGB;
};

/**
 * The pointer's light: white on dark glass; on light glass white would not
 * show, so a soft wash of the accent instead. Kept gentle — a hint of light
 * following the hand, not a spotlight.
 */
export const POINTER_LIGHT = {
	dark: { rim: 0.45, sheen: 0.055 },
	light: { rim: 0.55, sheen: 0.09 }
} as const;
const lightFor = (isDark: boolean) =>
	isDark ? POINTER_LIGHT.dark : POINTER_LIGHT.light;
/** The light's colour as `r, g, b`, from the accent (`useGlassAccentRgb`). */
export const pointerLightRgb = (isDark: boolean, accentRgb: string) =>
	isDark ? '255, 255, 255' : accentRgb;

/**
 * A rim of light around a glass edge: brightest where light would strike a
 * curved edge (top-left, then bottom-right), fading along the sides. Drawn
 * as a 1.25px gradient ring with a mask, so it follows any border radius.
 */
const glassRimSx = (isDark: boolean, accentRgb: string) => ({
	content: '""',
	position: 'absolute',
	inset: 0,
	borderRadius: 'inherit',
	padding: '1.25px',
	pointerEvents: 'none',
	// The rim glints where the pointer is nearest (see GlassLayer's light)
	background: `${pointerLight(140, lightFor(isDark).rim, pointerLightRgb(isDark, accentRgb))}, ${
		isDark
			? 'linear-gradient(140deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 22%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.08) 78%, rgba(255, 255, 255, 0.28) 100%)'
			: 'linear-gradient(140deg, #ffffff 0%, rgba(255, 255, 255, 0.55) 22%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.4) 78%, rgba(255, 255, 255, 0.95) 100%)'
	}`,
	WebkitMask:
		'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
	WebkitMaskComposite: 'xor',
	mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
	maskComposite: 'exclude'
});

/**
 * The glass surface: thick glass rather than a frosted card — a lit rim, a
 * sheen that is brighter at the top as on a curved surface, and depth from
 * inner light. `solid` is what it falls back to where the backdrop cannot be
 * blurred, or the viewer asked for less transparency. (Chromium also bends
 * the backdrop at the edges; see GlassLayer.) The pointer's light takes the
 * accent (`r, g, b`, from `useGlassAccentRgb`).
 */
export const glassSurfaceSx = (
	isDark: boolean,
	solid: string,
	accentRgb = LUMORA_TEAL_RGB
) => ({
	position: 'relative' as const,
	bgcolor: isDark ? 'rgba(30, 36, 48, 0.5)' : 'rgba(255, 255, 255, 0.55)',
	backgroundImage: isDark
		? 'linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 38%, rgba(0, 0, 0, 0.1) 100%)'
		: 'linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 40%, rgba(15, 23, 42, 0.03) 100%)',
	...glassBlur(1),
	WebkitBackdropFilter: glassBlur(1).backdropFilter,
	boxShadow: isDark
		? '0 24px 60px -12px rgba(0, 0, 0, 0.65), 0 0 0 0.5px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 0 24px rgba(255, 255, 255, 0.035)'
		: '0 24px 60px -12px rgba(15, 23, 42, 0.3), 0 2px 8px rgba(15, 23, 42, 0.08), 0 0 0 0.5px rgba(15, 23, 42, 0.1), inset 0 1px 0 #ffffff, inset 0 0 24px rgba(255, 255, 255, 0.45)',
	'&::before': glassRimSx(isDark, accentRgb),
	// Specular glare across the top-left, as light catching a curved edge
	'&::after': {
		content: '""',
		position: 'absolute',
		inset: 0,
		borderRadius: 'inherit',
		pointerEvents: 'none',
		// The pointer's light on the surface, over the fixed glare
		background: `${pointerLight(200, lightFor(isDark).sheen, pointerLightRgb(isDark, accentRgb))}, ${
			isDark
				? 'linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0) 42%)'
				: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 42%)'
		}`
	},
	'@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))':
		{
			bgcolor: solid
		},
	'@media (prefers-reduced-transparency: reduce)': {
		bgcolor: solid,
		backdropFilter: 'none',
		WebkitBackdropFilter: 'none'
	}
});

/** The dim laid over the page while a flyout is open. */
export const scrimColor = (isDark: boolean) =>
	isDark ? 'rgba(0, 0, 0, 0.45)' : 'rgba(15, 23, 42, 0.22)';

/** The small frosted label shown beside a rail icon on hover. */
export const glassLabelSx = (isDark: boolean) => ({
	color: isDark ? '#ffffff' : '#0b1f1c',
	bgcolor: isDark ? 'rgba(30, 36, 48, 0.72)' : 'rgba(255, 255, 255, 0.78)',
	backdropFilter: 'blur(20px) saturate(180%)',
	WebkitBackdropFilter: 'blur(20px) saturate(180%)',
	border: '1px solid',
	borderColor: isDark
		? 'rgba(255, 255, 255, 0.14)'
		: 'rgba(255, 255, 255, 0.8)',
	boxShadow: isDark
		? '0 8px 24px -6px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.16)'
		: '0 8px 24px -6px rgba(15, 23, 42, 0.25), 0 0 0 0.5px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
	borderRadius: `${GLASS_RADIUS_PX}px`,
	px: 1.25,
	py: 0.75,
	fontSize: '0.8125rem',
	fontWeight: 600,
	'@media (prefers-reduced-transparency: reduce)': {
		bgcolor: isDark ? 'rgb(30, 36, 48)' : '#ffffff',
		backdropFilter: 'none',
		WebkitBackdropFilter: 'none'
	}
});

/**
 * A glass card growing out of the control that opened it (CSS only, for
 * menus whose paper mounts afresh each time): a small drop spreading to full
 * size. Transform and opacity only — the blur is at full strength from the
 * first frame, since animating it re-renders the page behind every frame.
 */
export const glassGrow = keyframes`
	from {
		transform: scale(0.16, 0.12);
		opacity: 0;
	}
	30% {
		opacity: 1;
	}
	to {
		transform: none;
		opacity: 1;
	}
`;

/** Content settling in once its glass has taken shape. */
export const contentIn = keyframes`
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
`;

/**
 * A glass bubble: a bright specular spot up and to the left, a rim of
 * light, a faint tinted glow pooling at the bottom where the light refracts,
 * and a soft drop shadow. The hovered tile, and the rail's lens.
 */
export const glassBubbleSx = (
	isDark: boolean,
	accentRgb = LUMORA_TEAL_RGB,
	glow = `rgba(${accentRgb}, 0.2)`
) => ({
	background: isDark
		? 'radial-gradient(circle at 30% 24%, rgba(255, 255, 255, 0.34) 0, rgba(255, 255, 255, 0.12) 22%, rgba(255, 255, 255, 0.06) 55%, rgba(255, 255, 255, 0.03) 100%)'
		: 'radial-gradient(circle at 30% 24%, #ffffff 0, rgba(255, 255, 255, 0.92) 20%, rgba(255, 255, 255, 0.7) 55%, rgba(255, 255, 255, 0.5) 100%)',
	boxShadow: isDark
		? `inset 0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 1.5px 1px rgba(255, 255, 255, 0.28), inset 0 -10px 16px -8px ${glow}, 0 12px 26px -12px rgba(0, 0, 0, 0.85)`
		: `inset 0 0 0 1px rgba(255, 255, 255, 0.95), inset 0 2px 2px #ffffff, inset 0 -10px 16px -8px ${glow}, 0 12px 26px -12px rgba(15, 23, 42, 0.4), 0 1px 3px rgba(15, 23, 42, 0.06)`
});

/**
 * Tinted glass: a brand colour poured into the glass instead of a flat
 * fill — lit from the top-left, the colour deepening toward the bottom with
 * light pooling there, a bright top rim and a coloured drop shadow. `solid`
 * is the active item (the colour carries the white label); `clear` is a
 * lightly tinted control such as Ask Nexa.
 */
export const glassTintSx = (
	color: string,
	isDark: boolean,
	strength: 'solid' | 'clear' = 'solid'
) => {
	const [top, middle, bottom] =
		strength === 'solid' ? [0.95, 0.74, 0.9] : [0.34, 0.12, 0.24];
	const sheen = isDark
		? strength === 'solid'
			? 0.3
			: 0.22
		: strength === 'solid'
			? 0.26
			: 0.7;
	return {
		background: `radial-gradient(120% 90% at 28% 10%, rgba(255, 255, 255, ${sheen}) 0%, rgba(255, 255, 255, 0) 52%), linear-gradient(165deg, ${withAlpha(color, top)} 0%, ${withAlpha(color, middle)} 55%, ${withAlpha(color, bottom)} 100%)`,
		boxShadow: [
			`inset 0 1px 1px rgba(255, 255, 255, ${strength === 'solid' ? 0.5 : 0.75})`,
			`inset 0 0 0 1px ${withAlpha(color, strength === 'solid' ? 0.55 : 0.4)}`,
			`inset 0 -8px 14px -8px rgba(255, 255, 255, ${isDark ? 0.18 : 0.35})`,
			`0 8px 18px -8px ${withAlpha(color, isDark ? 0.7 : 0.55)}`
		].join(', ')
	};
};

/**
 * A field set into glass: a recessed well (shadowed at the top edge, lit at
 * the bottom) instead of an outlined box, glowing with `ring` when focused.
 */
export const glassWellSx = (isDark: boolean, ring: string) => {
	const base = isDark
		? 'inset 0 1px 2px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.06), 0 1px 0 rgba(255, 255, 255, 0.08)'
		: 'inset 0 1px 2px rgba(15, 23, 42, 0.12), inset 0 0 0 1px rgba(15, 23, 42, 0.05), 0 1px 0 #ffffff';
	const fill = isDark
		? 'rgba(255, 255, 255, 0.05)'
		: 'rgba(255, 255, 255, 0.5)';
	return {
		rest: {
			background: fill,
			boxShadow: base,
			borderRadius: `${GLASS_RADIUS_PX}px`,
			transition: 'box-shadow 180ms ease, background 180ms ease'
		},
		hover: {
			background: isDark
				? 'rgba(255, 255, 255, 0.08)'
				: 'rgba(255, 255, 255, 0.7)'
		},
		focus: {
			background: isDark
				? 'rgba(255, 255, 255, 0.08)'
				: 'rgba(255, 255, 255, 0.8)',
			boxShadow: `${base}, 0 0 0 3px ${ring}, 0 0 18px ${ring}`
		}
	};
};
