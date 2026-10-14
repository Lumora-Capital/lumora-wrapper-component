import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { LIQUID_GLASS_ENABLED } from './featureFlags';
import {
	GLIDE_SPRING,
	canAnimate,
	prefersReducedMotion,
	springTiming
} from './glassMotion';
import {
	REDUCED_MOTION,
	glassBubbleSx,
	glassLabelSx,
	glassTintSx,
	useGlassAccentRgb,
	GLASS_RADIUS_PX,
	SidebarSurfaceContext
} from './liquidGlass';

/** Marks a rail icon the lens can rest on (any button in the rail is one). */
export const RAIL_ITEM_ATTR = 'data-rail-item';
const RAIL_ITEM_SELECTOR = `[${RAIL_ITEM_ATTR}], button, [role="button"]`;

/**
 * True inside the glass rail. Controls that live in it but are built
 * elsewhere (Ask Nexa, search, notifications) read it to take the rail's
 * glass hover labels.
 */
export const RailGlassContext = React.createContext(false);

/**
 * Tooltip props for a control on the rail: the frosted label pill (no
 * arrow) on the glass rail, nothing otherwise. Spread after `arrow`.
 */
export const useRailTooltipProps = () => {
	const glass = React.useContext(RailGlassContext);
	const theme = useTheme();
	const surface = React.useContext(SidebarSurfaceContext);
	if (!glass) {
		return {};
	}
	return {
		arrow: false,
		slotProps: {
			tooltip: {
				sx: glassLabelSx(theme.palette.mode === 'dark', surface)
			},
			popper: {
				modifiers: [{ name: 'offset', options: { offset: [0, 6] } }]
			}
		}
	};
};

type LensBox = {
	top: number;
	left: number;
	width: number;
	height: number;
	visible: boolean;
	/** Appearing from nothing: placed at once, no glide from the last spot. */
	instant: boolean;
};

export type GlassLensOptions = {
	enabled: boolean;
	isDark: boolean;
	/** The items the lens rests behind, within the container. */
	selector: string;
	/**
	 * A fixed square this many px, centred on each item (the rail: an avatar
	 * sits under the same drop as an icon). Omitted: the item's own box.
	 */
	size?: number;
	radius: number;
	/** How far it leans toward the pointer within an item. */
	lean?: number;
};

const glide = springTiming(GLIDE_SPRING);

/**
 * One drop of glass that rests behind whichever item the pointer (or the
 * keyboard focus) is on — the single hover state of a glass surface. It
 * wells up, glides from item to item on a near-critical spring (a slight
 * stretch, no bounce), leans a little toward the pointer, and shrinks
 * away when the pointer leaves. Used by the rail and the account menu.
 *
 * Spread `containerProps` on the container (it must be the lens's offset
 * parent and clip it, so the spring's overshoot never scrolls anything) and
 * render `lens` as its first child, under the items. The items must paint
 * above it (be positioned) and drop their own hover fill.
 */
export const useGlassLens = ({
	enabled,
	isDark,
	selector,
	size,
	radius,
	lean = 3
}: GlassLensOptions) => {
	const lensRef = React.useRef<HTMLDivElement>(null);
	const accentRgb = useGlassAccentRgb();
	const [box, setBox] = React.useState<LensBox | null>(null);
	const previousTop = React.useRef<number | null>(null);
	const current = React.useRef<Element | null>(null);

	const placeOn = (container: HTMLElement, item: Element) => {
		current.current = item;
		const r = item.getBoundingClientRect();
		const c = container.getBoundingClientRect();
		const width = size ?? r.width;
		const height = size ?? r.height;
		const next = {
			top: Math.round(r.top - c.top + (r.height - height) / 2),
			left: Math.round(r.left - c.left + (r.width - width) / 2),
			width: Math.round(width),
			height: Math.round(height)
		};
		setBox(prev =>
			prev &&
			prev.visible &&
			prev.top === next.top &&
			prev.left === next.left &&
			prev.width === next.width &&
			prev.height === next.height
				? prev
				: { ...next, visible: true, instant: !prev?.visible }
		);
	};

	const itemFrom = (container: HTMLElement, target: EventTarget | null) => {
		const item = (target as HTMLElement | null)?.closest?.(selector);
		return item && container.contains(item) ? item : null;
	};

	const onMouseOver = (event: React.MouseEvent<HTMLElement>) => {
		if (!enabled) {
			return;
		}
		const item = itemFrom(event.currentTarget, event.target);
		if (item) {
			placeOn(event.currentTarget, item);
		}
	};

	// The keyboard moves the lens as the pointer does
	const onFocus = (event: React.FocusEvent<HTMLElement>) => {
		if (!enabled) {
			return;
		}
		const item = itemFrom(event.currentTarget, event.target);
		if (item && (event.target as HTMLElement).matches(':focus-visible')) {
			placeOn(event.currentTarget, item);
		}
	};

	// Lean toward the pointer, like a drop drawn by a fingertip. Written
	// straight to the element: no render per mouse move.
	const onMouseMove = (event: React.MouseEvent<HTMLElement>) => {
		const el = lensRef.current;
		const item = current.current;
		if (!enabled || !el || !item || !lean || prefersReducedMotion()) {
			return;
		}
		const r = item.getBoundingClientRect();
		const toward = (offset: number, extent: number) =>
			Math.max(-1, Math.min(1, offset / (extent / 2))) * lean;
		el.style.transform = `translate(${toward(event.clientX - (r.left + r.width / 2), r.width)}px, ${toward(event.clientY - (r.top + r.height / 2), r.height)}px)`;
	};

	const hide = () => {
		current.current = null;
		if (lensRef.current) {
			lensRef.current.style.transform = '';
		}
		setBox(prev => (prev?.visible ? { ...prev, visible: false } : prev));
	};

	const onBlur = (event: React.FocusEvent<HTMLElement>) => {
		const next = event.relatedTarget as Node | null;
		if (!next || !event.currentTarget.contains(next)) {
			// Only when nothing in the container is still hovered
			if (!event.currentTarget.matches(':hover')) {
				hide();
			}
		}
	};

	React.useEffect(() => {
		const el = lensRef.current;
		if (!box?.visible) {
			previousTop.current = null;
			return;
		}
		const from = previousTop.current;
		previousTop.current = box.top;
		if (!canAnimate(el) || prefersReducedMotion()) {
			return;
		}
		// Wells up from a slightly smaller drop, without a wobble
		if (from === null || box.instant) {
			el.animate([{ scale: '0.85' }, { scale: '1' }], {
				duration: glide.duration,
				easing: glide.easing
			});
			return;
		}
		// A slight stretch along the way, in proportion to the distance
		// travelled, settling round as it lands (no squash, no bounce)
		const stretch = Math.min(Math.abs(box.top - from) / 600, 0.08);
		if (!stretch) {
			return;
		}
		el.animate(
			[
				{ scale: '1 1' },
				{ scale: `${1 - stretch / 2} ${1 + stretch}`, offset: 0.35 },
				{ scale: '1 1' }
			],
			{ duration: glide.duration, easing: 'ease-out' }
		);
	}, [box?.top, box?.visible, box?.instant]);

	const lens =
		enabled && box ? (
			<Box
				ref={lensRef}
				aria-hidden
				data-glass-lens=''
				data-visible={box.visible ? 'true' : 'false'}
				sx={{
					...glassBubbleSx(isDark, accentRgb),
					...(LIQUID_GLASS_ENABLED
						? {
								backdropFilter: 'blur(8px) saturate(170%)',
								WebkitBackdropFilter: 'blur(8px) saturate(170%)'
							}
						: {}),
					borderRadius: `${radius}px`,
					position: 'absolute',
					top: 0,
					left: 0,
					width: box.width,
					height: box.height,
					// Placed with `translate`, which the browser applies before
					// `scale`: the well-up and stretch then scale the drop in
					// place instead of scaling its offset. `transform` carries
					// only the lean.
					translate: `${box.left}px ${box.top}px`,
					// Shrinks away as it fades; wells back up on return
					scale: box.visible ? '1' : '0.7',
					opacity: box.visible ? 1 : 0,
					pointerEvents: 'none',
					transition: box.instant
						? 'opacity 160ms ease, scale 220ms ease, transform 260ms ease-out'
						: `translate ${glide.duration}ms ${glide.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease, transform 260ms ease-out`,
					[REDUCED_MOTION]: { transition: 'opacity 160ms ease' }
				}}
			/>
		) : null;

	return {
		lens,
		// A scroll inside the container moves the items out from under it
		containerProps: enabled
			? {
					onMouseOver,
					onMouseMove,
					onMouseLeave: hide,
					onFocus,
					onBlur,
					onScrollCapture: hide
				}
			: {}
	};
};

/** The rail's lens: one size for every control, centred on it. */
export const useRailLens = (enabled: boolean, isDark: boolean) => {
	const lens = useGlassLens({
		enabled,
		isDark,
		selector: RAIL_ITEM_SELECTOR,
		size: 46,
		radius: GLASS_RADIUS_PX
	});
	return {
		...lens,
		lens: lens.lens
			? React.cloneElement(lens.lens, {
					'data-testid': 'sidebar-rail-lens'
				} as Record<string, unknown>)
			: null
	};
};

/**
 * `item`'s box in `container`'s coordinates, from layout offsets rather than
 * the painted rect: an item mid-press (scaled) or a rail mid-animation
 * would otherwise skew the drop. Scrolled ancestors are taken into account.
 * Falls back to the painted rect when `container` is not on the item's
 * offset-parent chain (or there is no layout, as in tests).
 */
const layoutBoxWithin = (item: HTMLElement, container: HTMLElement) => {
	let top = 0;
	let left = 0;
	let el: HTMLElement | null = item;
	while (el && el !== container) {
		top += el.offsetTop;
		left += el.offsetLeft;
		const parent = el.offsetParent as HTMLElement | null;
		for (
			let p: HTMLElement | null = el.parentElement;
			p && p !== container;
			p = p.parentElement
		) {
			top -= p.scrollTop;
			left -= p.scrollLeft;
			if (p === parent) {
				break;
			}
		}
		el = parent;
	}
	if (el === container && item.offsetWidth) {
		return {
			top: Math.round(top),
			left: Math.round(left),
			width: item.offsetWidth,
			height: item.offsetHeight
		};
	}
	const r = item.getBoundingClientRect();
	const c = container.getBoundingClientRect();
	return {
		top: Math.round(r.top - c.top),
		left: Math.round(r.left - c.left),
		width: Math.round(r.width),
		height: Math.round(r.height)
	};
};

type ActiveBox = {
	top: number;
	left: number;
	width: number;
	height: number;
	visible: boolean;
	instant: boolean;
};

/**
 * The rail's current page as one drop of tinted glass that glides to the
 * new item when the page changes — the same spring, stretch and settle as
 * the hover lens — instead of each item filling itself. It finds the item
 * by `data-active="true"` on a rail item, and keeps its place on resize.
 *
 * Render `glass` in the rail just after the hover lens (under the items);
 * the items drop their own active fill.
 */
export const useActiveGlass = ({
	enabled,
	isDark,
	color,
	containerRef
}: {
	enabled: boolean;
	isDark: boolean;
	color: string;
	containerRef: React.RefObject<HTMLElement | null>;
}) => {
	const glassRef = React.useRef<HTMLDivElement>(null);
	const [box, setBox] = React.useState<ActiveBox | null>(null);
	const previousTop = React.useRef<number | null>(null);

	const measure = React.useCallback(
		(instant: boolean) => {
			const container = containerRef.current;
			if (!enabled || !container) {
				return;
			}
			const item = container.querySelector(
				`[${RAIL_ITEM_ATTR}][data-active="true"]`
			);
			if (!item) {
				setBox(prev =>
					prev?.visible ? { ...prev, visible: false } : prev
				);
				return;
			}
			const next = layoutBoxWithin(item as HTMLElement, container);
			setBox(prev =>
				prev &&
				prev.visible &&
				prev.top === next.top &&
				prev.left === next.left &&
				prev.width === next.width &&
				prev.height === next.height
					? prev
					: {
							...next,
							visible: true,
							instant: instant || !prev?.visible
						}
			);
		},
		[enabled, containerRef]
	);

	// After every render of the rail, before paint: a page change never
	// shows the drop in its old place, and neither does anything else that
	// moves the items (links arriving late, a control above them appearing).
	// Unchanged, the measure keeps the same box and costs no render.
	React.useLayoutEffect(() => {
		measure(false);
	});

	// Changes the rail's own render does not see: the rail resizing, or its
	// items moving or switching active from inside (a child's own state)
	React.useEffect(() => {
		const container = containerRef.current;
		if (!enabled || !container) {
			return undefined;
		}
		let frame = 0;
		const schedule = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => measure(false));
		};
		const resize =
			typeof ResizeObserver === 'undefined'
				? null
				: new ResizeObserver(() => measure(true));
		resize?.observe(container);
		const mutation =
			typeof MutationObserver === 'undefined'
				? null
				: new MutationObserver(schedule);
		// Not `style`: the hover lens writes its lean there on every move
		mutation?.observe(container, {
			subtree: true,
			childList: true,
			attributes: true,
			attributeFilter: ['data-active', 'class', 'hidden']
		});
		return () => {
			cancelAnimationFrame(frame);
			resize?.disconnect();
			mutation?.disconnect();
		};
	}, [enabled, containerRef, measure]);

	// Gliding to a new page: stretch along the way, squash as it lands
	React.useEffect(() => {
		const el = glassRef.current;
		if (!box?.visible) {
			previousTop.current = null;
			return;
		}
		const from = previousTop.current;
		previousTop.current = box.top;
		if (
			from === null ||
			box.instant ||
			!canAnimate(el) ||
			prefersReducedMotion()
		) {
			return;
		}
		const stretch = Math.min(Math.abs(box.top - from) / 600, 0.08);
		if (!stretch) {
			return;
		}
		el.animate(
			[
				{ scale: '1 1' },
				{ scale: `${1 - stretch / 2} ${1 + stretch}`, offset: 0.35 },
				{ scale: '1 1' }
			],
			{ duration: glide.duration, easing: 'ease-out' }
		);
	}, [box?.top, box?.visible, box?.instant]);

	const glass =
		enabled && box ? (
			<Box
				ref={glassRef}
				aria-hidden
				data-active-glass=''
				data-testid='sidebar-rail-active'
				data-visible={box.visible ? 'true' : 'false'}
				sx={{
					...glassTintSx(color, isDark),
					borderRadius: `${GLASS_RADIUS_PX}px`,
					position: 'absolute',
					top: 0,
					left: 0,
					width: box.width,
					height: box.height,
					translate: `${box.left}px ${box.top}px`,
					scale: box.visible ? '1' : '0.7',
					opacity: box.visible ? 1 : 0,
					pointerEvents: 'none',
					transition: box.instant
						? 'opacity 160ms ease, scale 220ms ease'
						: `translate ${glide.duration}ms ${glide.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale 220ms ease`,
					[REDUCED_MOTION]: { transition: 'opacity 160ms ease' }
				}}
			/>
		) : null;

	return { glass };
};
