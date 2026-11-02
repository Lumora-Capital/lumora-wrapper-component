/**
 * Liquid-glass surface and motion for the sidebar flyout: a frosted,
 * translucent panel with a specular rim (the motion is in glassMotion). CSS
 * only — the SVG refraction trick (`backdrop-filter: url(#…)`) is Chromium-only,
 * so the glass is blur + saturation + highlights everywhere.
 *
 * What an inline style can carry (colours, gradients, shadows) is returned as
 * a `style`; what it cannot (the rim and glare pseudo-elements, @supports and
 * reduced-transparency fallbacks) lives in styles.css as `lw-glass-*` classes
 * that read the colours from variables set in that style.
 */
import * as React from 'react';
import { LIQUID_GLASS_ENABLED } from './featureFlags';
import { parseColorToRgb, withAlpha } from './sidebarUtils';

/** A class list and inline style for one glass element. */
export type GlassStyle = { className: string; style: React.CSSProperties };

/** Hairline edge of a solid surface (the glass look switched off). */
const solidEdge = (isDark: boolean) =>
	isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.1)';
/** Drop shadow of a solid floating surface. */
const solidShadow = (isDark: boolean) =>
	isDark
		? '0 12px 32px -8px rgba(0, 0, 0, 0.6)'
		: '0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)';

/** Keyframes (styles.css), named for an inline `animation`. Each tile wells
 * up after the one before it. Transform and opacity only: a filter on every
 * tile at once is what makes an entrance stutter. */
export const tileIn = 'lw-tile-in';

/** Classes that drop an inline animation/transition under reduced motion,
 * or shorten it to a fade (styles.css). */
export const REDUCED_MOTION_NONE = 'lw-motion-none';
export const REDUCED_MOTION_FADE = 'lw-motion-fade';
export const REDUCED_MOTION_FADE_FAST = 'lw-motion-fade-fast';

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

/**
 * The sidebar's surface colour, provided by the wrapper: the popups opened
 * from the rail (flyout, menus, search card, labels) take it as their solid
 * colour, so they read as part of the sidebar. A context because they render
 * in portals.
 */
export const SidebarSurfaceContext = React.createContext<string | undefined>(
	undefined
);

/** The sidebar surface, or `fallback` outside the wrapper. */
export const useSidebarSurface = (fallback: string) =>
	React.useContext(SidebarSurfaceContext) ?? fallback;

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

/** Joins the glass classes with the dark modifier. */
const glassClass = (base: string, isDark: boolean) =>
	isDark ? `${base} lw-glass-dark` : base;

/**
 * The glass surface: thick glass rather than a frosted card — a lit rim, a
 * sheen that is brighter at the top as on a curved surface, and depth from
 * inner light (`lw-glass-surface` in styles.css). `solid` is what it falls
 * back to where the backdrop cannot be blurred, or the viewer asked for less
 * transparency. (Chromium also bends the backdrop at the edges; see
 * GlassLayer.) The pointer's light takes the accent (`r, g, b`, from
 * `useGlassAccentRgb`).
 */
export const glassSurface = (
	isDark: boolean,
	solid: string,
	accentRgb = LUMORA_TEAL_RGB
): GlassStyle =>
	LIQUID_GLASS_ENABLED
		? {
				className: glassClass('lw-glass-surface', isDark),
				style: {
					'--lw-glass-solid': solid,
					'--lw-light-rgb': pointerLightRgb(isDark, accentRgb),
					'--lw-rim-alpha': lightFor(isDark).rim,
					'--lw-sheen-alpha': lightFor(isDark).sheen
				} as React.CSSProperties
			}
		: {
				// Solid: the surface colour, a hairline edge and a shadow
				className: 'lw:relative',
				style: {
					backgroundColor: solid,
					boxShadow: `${solidShadow(isDark)}, 0 0 0 1px ${solidEdge(isDark)}`
				}
			};

/** The dim laid over the page while a flyout is open. */
export const scrimColor = (isDark: boolean) =>
	isDark ? 'rgba(0, 0, 0, 0.45)' : 'rgba(15, 23, 42, 0.22)';

/** The small frosted label shown beside a rail icon on hover. */
export const glassLabel = (isDark: boolean, surface?: string): GlassStyle =>
	LIQUID_GLASS_ENABLED
		? { className: glassClass('lw-glass-label', isDark), style: {} }
		: {
				className:
					'lw:rounded-md lw:border lw:border-solid lw:px-2.5 lw:py-1.5 lw:text-[0.8125rem] lw:leading-[1.4] lw:font-semibold',
				style: {
					color: isDark ? '#ffffff' : '#0b1f1c',
					backgroundColor:
						surface ?? (isDark ? 'rgb(30, 36, 48)' : '#ffffff'),
					borderColor: solidEdge(isDark),
					boxShadow: isDark
						? '0 6px 16px -6px rgba(0, 0, 0, 0.6)'
						: '0 6px 16px -6px rgba(15, 23, 42, 0.2)'
				}
			};

/** The label text colour, for text drawn like a label without its card. */
export const glassLabelColor = (isDark: boolean) =>
	isDark ? '#ffffff' : '#0b1f1c';

/**
 * A glass card growing out of the control that opened it (for menus whose
 * card mounts afresh each time): a small drop spreading to full size.
 * Transform and opacity only — the blur is at full strength from the first
 * frame, since animating it re-renders the page behind every frame.
 */
export const glassGrow = 'lw-glass-grow';

/** Content settling in once its glass has taken shape. */
export const contentIn = 'lw-content-in';

/**
 * A glass bubble: a bright specular spot up and to the left, a rim of
 * light, a faint tinted glow pooling at the bottom where the light refracts,
 * and a soft drop shadow. The hovered tile, and the rail's lens.
 */
export const glassBubbleStyle = (
	isDark: boolean,
	accentRgb = LUMORA_TEAL_RGB,
	glow = `rgba(${accentRgb}, 0.2)`
): React.CSSProperties =>
	LIQUID_GLASS_ENABLED
		? {
				background: isDark
					? 'radial-gradient(circle at 30% 24%, rgba(255, 255, 255, 0.34) 0, rgba(255, 255, 255, 0.12) 22%, rgba(255, 255, 255, 0.06) 55%, rgba(255, 255, 255, 0.03) 100%)'
					: 'radial-gradient(circle at 30% 24%, #ffffff 0, rgba(255, 255, 255, 0.92) 20%, rgba(255, 255, 255, 0.7) 55%, rgba(255, 255, 255, 0.5) 100%)',
				boxShadow: isDark
					? `inset 0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 1.5px 1px rgba(255, 255, 255, 0.28), inset 0 -10px 16px -8px ${glow}, 0 12px 26px -12px rgba(0, 0, 0, 0.85)`
					: `inset 0 0 0 1px rgba(255, 255, 255, 0.95), inset 0 2px 2px #ffffff, inset 0 -10px 16px -8px ${glow}, 0 12px 26px -12px rgba(15, 23, 42, 0.4), 0 1px 3px rgba(15, 23, 42, 0.06)`
			}
		: {
				// Solid: a flat tint of the accent
				background: `rgba(${accentRgb}, ${isDark ? 0.2 : 0.12})`,
				boxShadow: 'none'
			};

/**
 * Tinted glass: a brand colour poured into the glass instead of a flat
 * fill — lit from the top-left, the colour deepening toward the bottom with
 * light pooling there, a bright top rim and a coloured drop shadow. `solid`
 * is the active item (the colour carries the white label); `clear` is a
 * lightly tinted control such as Ask Nexa.
 */
export const glassTintStyle = (
	color: string,
	isDark: boolean,
	strength: 'solid' | 'clear' = 'solid'
): { background: string; boxShadow: string } => {
	if (!LIQUID_GLASS_ENABLED) {
		// Solid: the accent as a flat fill, or a light tint with an edge
		return strength === 'solid'
			? { background: color, boxShadow: 'none' }
			: {
					background: withAlpha(color, isDark ? 0.16 : 0.1),
					boxShadow: `inset 0 0 0 1px ${withAlpha(color, 0.45)}`
				};
	}
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
 * the bottom) instead of an outlined box, glowing with `ring` when focused
 * (`lw-glass-well` in styles.css switches between the three looks).
 */
export const glassWell = (isDark: boolean, ring: string): GlassStyle => {
	const vars = (looks: {
		bg: string;
		shadow: string;
		hoverBg: string;
		focusBg: string;
		focusShadow: string;
	}): GlassStyle => ({
		className: 'lw-glass-well',
		style: {
			'--lw-well-bg': looks.bg,
			'--lw-well-shadow': looks.shadow,
			'--lw-well-hover-bg': looks.hoverBg,
			'--lw-well-focus-bg': looks.focusBg,
			'--lw-well-focus-shadow': looks.focusShadow
		} as React.CSSProperties
	});
	if (!LIQUID_GLASS_ENABLED) {
		// Solid: an outlined field
		const edge = `inset 0 0 0 1px ${solidEdge(isDark)}`;
		const lifted = isDark ? 'rgba(255, 255, 255, 0.06)' : '#ffffff';
		return vars({
			bg: isDark ? 'rgba(255, 255, 255, 0.04)' : '#ffffff',
			shadow: edge,
			hoverBg: lifted,
			focusBg: lifted,
			focusShadow: `${edge}, 0 0 0 3px ${ring}`
		});
	}
	const base = isDark
		? 'inset 0 1px 2px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.06), 0 1px 0 rgba(255, 255, 255, 0.08)'
		: 'inset 0 1px 2px rgba(15, 23, 42, 0.12), inset 0 0 0 1px rgba(15, 23, 42, 0.05), 0 1px 0 #ffffff';
	return vars({
		bg: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.5)',
		shadow: base,
		hoverBg: isDark
			? 'rgba(255, 255, 255, 0.08)'
			: 'rgba(255, 255, 255, 0.7)',
		focusBg: isDark
			? 'rgba(255, 255, 255, 0.08)'
			: 'rgba(255, 255, 255, 0.8)',
		focusShadow: `${base}, 0 0 0 3px ${ring}, 0 0 18px ${ring}`
	});
};
