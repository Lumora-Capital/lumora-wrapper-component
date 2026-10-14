import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import * as React from 'react';
import { glassSurfaceSx } from './liquidGlass';

/** How far in from the edge the glass bends light, and how hard. */
const EDGE_PX = 14;
const STRENGTH_PX = 18;
/** Clearer than the frosted fallback, so the bending shows through. */
const REFRACT_BLUR = 'blur(12px) saturate(180%) brightness(1.04)';

/**
 * Only Chromium renders an SVG filter as a backdrop-filter; elsewhere the
 * `url()` would drop the whole backdrop, so the frosted glass stays as is.
 */
const supportsRefraction = (() => {
	if (typeof navigator === 'undefined') {
		return false;
	}
	const brands = (
		navigator as Navigator & {
			userAgentData?: { brands?: Array<{ brand: string }> };
		}
	).userAgentData?.brands;
	return Boolean(brands?.some(({ brand }) => /Chromium/.test(brand)));
})();

/**
 * A displacement map the size of the glass: neutral (no shift) in the middle,
 * rising to full shift over the last `edge` px on each side — red drives the
 * horizontal shift, green the vertical — so the backdrop bends toward the
 * centre near the edges, as through the curved rim of a thick lens.
 */
const displacementMap = (width: number, height: number, edge: number) => {
	const ex = Math.min(0.45, edge / width);
	const ey = Math.min(0.45, edge / height);
	const svg =
		`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">` +
		'<defs>' +
		`<linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${ex}" stop-color="#800000"/><stop offset="${1 - ex}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient>` +
		`<linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${ey}" stop-color="#008000"/><stop offset="${1 - ey}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient>` +
		'</defs>' +
		'<rect width="100%" height="100%" fill="url(#x)"/>' +
		'<rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/>' +
		'</svg>';
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

export interface GlassLayerProps {
	isDark: boolean;
	/** Surface where the backdrop cannot be blurred. */
	solid: string;
	sx?: SxProps<Theme>;
	'data-testid'?: string;
	/**
	 * Bend the backdrop at the edges (Chromium). Off for a layer whose shape
	 * is a clip path rather than its box: the bending follows the box.
	 */
	refract?: boolean;
	/** Light from the pointer on the surface and rim (default on). */
	light?: boolean;
	/**
	 * Called each frame the light moves, with its position on the layer and
	 * strength (0–1) — for a rim drawn outside the layer (the flyout's).
	 */
	onLight?: (x: number, y: number, strength: number) => void;
}

/** How near the pointer must come before the glass catches its light. */
const LIGHT_REACH_PX = 140;
/** How quickly the light follows the pointer, and fades in and out, per
 * frame: a little behind, as light through a thick lens. */
const LIGHT_FOLLOW = 0.22;
const LIGHT_FADE = 0.14;

/**
 * Light from the pointer on a glass element: tracks the pointer across the
 * page (it is usually over the glass's content, not the glass) and eases
 * `--lx` / `--ly` (its position on the element) and `--li` (its strength:
 * 1 over the glass, fading to 0 by LIGHT_REACH_PX away) toward it each
 * frame. Written straight to the element; nothing re-renders.
 */
const useGlassLight = (
	elRef: React.RefObject<HTMLElement | null>,
	enabled: boolean,
	onLight?: (x: number, y: number, strength: number) => void
) => {
	const onLightRef = React.useRef(onLight);
	onLightRef.current = onLight;
	React.useEffect(() => {
		if (!enabled || typeof document === 'undefined') {
			return undefined;
		}
		if (
			typeof window.matchMedia === 'function' &&
			window.matchMedia('(prefers-reduced-transparency: reduce)').matches
		) {
			return undefined;
		}
		const target = { x: 0, y: 0, i: 0 };
		const current = { x: 0, y: 0, i: 0 };
		let frame = 0;
		const apply = () => {
			const el = elRef.current;
			if (!el) {
				return;
			}
			el.style.setProperty('--lx', `${current.x.toFixed(1)}px`);
			el.style.setProperty('--ly', `${current.y.toFixed(1)}px`);
			el.style.setProperty('--li', current.i.toFixed(3));
			onLightRef.current?.(current.x, current.y, current.i);
		};
		const tick = () => {
			current.x += (target.x - current.x) * LIGHT_FOLLOW;
			current.y += (target.y - current.y) * LIGHT_FOLLOW;
			current.i += (target.i - current.i) * LIGHT_FADE;
			const settled =
				Math.abs(target.x - current.x) < 0.3 &&
				Math.abs(target.y - current.y) < 0.3 &&
				Math.abs(target.i - current.i) < 0.003;
			if (settled) {
				current.x = target.x;
				current.y = target.y;
				current.i = target.i;
			}
			apply();
			frame = settled ? 0 : requestAnimationFrame(tick);
		};
		const kick = () => {
			if (!frame) {
				frame = requestAnimationFrame(tick);
			}
		};
		const onMove = (event: PointerEvent) => {
			const el = elRef.current;
			if (event.pointerType === 'touch' || !el) {
				return;
			}
			const r = el.getBoundingClientRect();
			if (!r.width || !r.height) {
				return;
			}
			// On the element's own (untransformed) scale, so the light sits
			// under the pointer while the glass is scaling
			target.x = ((event.clientX - r.left) * el.offsetWidth) / r.width;
			target.y = ((event.clientY - r.top) * el.offsetHeight) / r.height;
			const dx = Math.max(
				r.left - event.clientX,
				0,
				event.clientX - r.right
			);
			const dy = Math.max(
				r.top - event.clientY,
				0,
				event.clientY - r.bottom
			);
			target.i = Math.max(0, 1 - Math.hypot(dx, dy) / LIGHT_REACH_PX);
			// Arriving from the dark: appear where the pointer is, then fade up
			if (current.i < 0.01) {
				current.x = target.x;
				current.y = target.y;
			}
			kick();
		};
		const onLeave = () => {
			target.i = 0;
			kick();
		};
		document.addEventListener('pointermove', onMove, { passive: true });
		document.documentElement.addEventListener('mouseleave', onLeave);
		return () => {
			cancelAnimationFrame(frame);
			document.removeEventListener('pointermove', onMove);
			document.documentElement.removeEventListener('mouseleave', onLeave);
		};
	}, [elRef, enabled]);
};

/**
 * The glass body of a panel: an absolutely positioned layer under its
 * content (so its shape can scale and morph without distorting the content).
 * Thick-glass material everywhere; in Chromium the backdrop is also bent at
 * the edges by an SVG displacement filter sized to the layer.
 */
const GlassLayer = React.forwardRef<HTMLDivElement, GlassLayerProps>(
	(
		{
			isDark,
			solid,
			sx,
			'data-testid': testId,
			refract: allowRefract = true,
			light = true,
			onLight
		},
		ref
	) => {
		const elRef = React.useRef<HTMLDivElement | null>(null);
		useGlassLight(elRef, light, onLight);
		const filterId = `lumora-glass-${React.useId().replace(/[^a-zA-Z0-9-]/g, '')}`;
		const [size, setSize] = React.useState<{
			width: number;
			height: number;
		} | null>(null);
		const observer = React.useRef<ResizeObserver | null>(null);

		const setRef = React.useCallback(
			(el: HTMLDivElement | null) => {
				elRef.current = el;
				if (typeof ref === 'function') {
					ref(el);
				} else if (ref) {
					ref.current = el;
				}
				observer.current?.disconnect();
				observer.current = null;
				if (
					!el ||
					!allowRefract ||
					!supportsRefraction ||
					typeof ResizeObserver === 'undefined'
				) {
					return;
				}
				// Layout size, not the transformed one: a scale animation
				// must not regenerate the map every frame
				const measure = () => {
					const width = el.offsetWidth;
					const height = el.offsetHeight;
					setSize(prev =>
						prev?.width === width && prev.height === height
							? prev
							: width && height
								? { width, height }
								: null
					);
				};
				observer.current = new ResizeObserver(measure);
				observer.current.observe(el);
				measure();
			},
			[ref, allowRefract]
		);

		const map = React.useMemo(
			() =>
				size ? displacementMap(size.width, size.height, EDGE_PX) : null,
			[size]
		);
		const refract = allowRefract && Boolean(map && size);

		return (
			<>
				{refract ? (
					<svg
						aria-hidden
						width='0'
						height='0'
						style={{ position: 'absolute', pointerEvents: 'none' }}
					>
						<filter
							id={filterId}
							x='0'
							y='0'
							width={size!.width}
							height={size!.height}
							filterUnits='userSpaceOnUse'
							primitiveUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'
						>
							<feImage
								href={map!}
								x='0'
								y='0'
								width={size!.width}
								height={size!.height}
								preserveAspectRatio='none'
								result='map'
							/>
							<feGaussianBlur
								in='map'
								stdDeviation={EDGE_PX / 3}
								result='softMap'
							/>
							<feDisplacementMap
								in='SourceGraphic'
								in2='softMap'
								scale={STRENGTH_PX}
								xChannelSelector='R'
								yChannelSelector='G'
							/>
						</filter>
					</svg>
				) : null}
				<Box
					ref={setRef}
					aria-hidden
					data-testid={testId}
					data-refract={refract ? 'true' : undefined}
					sx={[
						glassSurfaceSx(isDark, solid),
						refract
							? {
									backdropFilter: `url(#${filterId}) ${REFRACT_BLUR}`,
									'@media (prefers-reduced-transparency: reduce)':
										{ backdropFilter: 'none' }
								}
							: {},
						...(Array.isArray(sx) ? sx : [sx])
					]}
				/>
			</>
		);
	}
);
GlassLayer.displayName = 'GlassLayer';

export default GlassLayer;
