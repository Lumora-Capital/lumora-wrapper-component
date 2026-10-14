import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import type { SidebarLink, SidebarSubLink } from './LumoraWrapper';
import {
	GLIDE_SPRING,
	MORPH_SPRING,
	SETTLE_SPRING,
	canAnimate,
	cancelAnimations,
	gelSwell,
	prefersReducedMotion,
	springTiming
} from './glassMotion';
import {
	REDUCED_MOTION,
	glassBubbleSx,
	POINTER_LIGHT,
	pointerLightRgb,
	useGlassAccentRgb,
	glassLabelSx,
	glassTintSx,
	scrimColor,
	tileIn,
	GLASS_RADIUS_PX
} from './liquidGlass';
import GlassLayer from './GlassLayer';
import { LIQUID_GLASS_ENABLED } from './featureFlags';
import { flattenLeaves, isSubLinkActive } from './sidebarUtils';

/** Compact square tiles in one row; the name shows on hover. */
const TILE_PX = 44;
const TILE_GAP_PX = 4;
const TILE_RADIUS_PX = GLASS_RADIUS_PX;
/** Dock magnification: the tile under the pointer grows to this, its
 * neighbours less the further away they are, up to this far from it. */
const DOCK_MAX_SCALE = 1.4;

/** How far the row may grow leftward, into the panel's own padding. */
const DOCK_LEFT_ROOM_PX = 6;

const PANEL_PADDING_PX = 6;
/** The same corner as every other glass surface. */
const PANEL_RADIUS_PX = GLASS_RADIUS_PX;
/** Space between the rail's edge and the panel. */
const PANEL_GAP_PX = 10;
/** The glass starts as a drop about the size of a rail icon, at the icon's
 * centre (left of the panel by the gap and half a rail button), and grows
 * from there. */
const SEED_SCALE_X = 0.12;
const SEED_SCALE_Y = 0.75;
const SEED_ORIGIN_X_PX = PANEL_GAP_PX + 32;
/** The tiles wait for the glass to take shape, then follow one another. */
const TILE_BASE_DELAY_MS = 90;
const TILE_STAGGER_MS = 22;
/** Above the page, its sticky bars and the docked chat (1140); below the
 * MUI drawers and menus, which close the flyout when they open anyway. */
const SCRIM_Z_INDEX = 1190;
const PANEL_Z_INDEX = 1195;

const morph = springTiming(MORPH_SPRING);
const glide = springTiming(GLIDE_SPRING);
const settle = springTiming(SETTLE_SPRING);

export interface SidebarFlyoutProps {
	/** The open group, or null when closed. */
	group: SidebarLink | null;
	/** `nodeKey` of the open group; tiles replay their entrance when it changes. */
	groupKey: string | null;
	/** The group's icon on the rail; the panel centres on it. */
	anchor: HTMLElement | null;
	/** Viewport x of the rail's right edge: the panel starts past it, the dim
	 * covers everything from it to the right. */
	railEdge: number;
	/** The rail's own surface, in viewport px: the dim covers the whole
	 * window but this shape, so a rail floating off the window's edges is
	 * dimmed around and lit within. Without it the dim starts at `railEdge`. */
	railShape?: RailShape | null;
	activePath?: string;
	/** Opened from the keyboard: the first tile takes focus. */
	focusFirst?: boolean;
	onNavigate: (path: string) => void;
	onClose: (restoreFocus?: boolean) => void;
	/** Hover tracking from `useFlyoutIntent`. */
	panelProps: {
		ref: React.Ref<HTMLDivElement>;
		onMouseEnter: () => void;
		onMouseLeave: () => void;
	};
	accentColor: string;
	activeForegroundColor: string;
	/** Surface the glass falls back to where it cannot blur. */
	solidSurface: string;
}

export type RailShape = {
	left: number;
	top: number;
	width: number;
	height: number;
	radius: number;
};

/** A clip path for the whole window less a rounded rectangle (even-odd). */
const windowLessShape = ({ left, top, width, height, radius }: RailShape) => {
	const r = Math.min(radius, width / 2, height / 2);
	const right = left + width;
	const bottom = top + height;
	const arc = `A ${r} ${r} 0 0 1`;
	return (
		`path(evenodd, 'M 0 0 H 100000 V 100000 H 0 Z ` +
		`M ${left + r} ${top} H ${right - r} ${arc} ${right} ${top + r} ` +
		`V ${bottom - r} ${arc} ${right - r} ${bottom} H ${left + r} ` +
		`${arc} ${left} ${bottom - r} V ${top + r} ${arc} ${left + r} ${top} Z')`
	);
};

/**
 * A group's pages as a row of square glass tiles beside the rail, over a dim
 * of the page. Nested sections are laid out flat, as on the rail.
 *
 * The motion follows Liquid Glass: the glass is not faded in but grows out of
 * the rail icon — starting as the icon's own shape, bending more light (blur,
 * saturation) as it spreads, overshooting a little on a spring and settling —
 * then the tiles lens in. Switching groups glides the same piece of glass to
 * the new icon and reshapes it, stretching as it travels; closing draws it
 * back into the icon.
 */
const SidebarFlyout: React.FC<SidebarFlyoutProps> = ({
	group,
	groupKey,
	anchor,
	railEdge,
	railShape,
	activePath,
	focusFirst = false,
	onNavigate,
	onClose,
	panelProps,
	accentColor,
	activeForegroundColor,
	solidSurface
}) => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const open = Boolean(group && anchor);

	// Keep the last group while the glass draws back in
	const lastGroup = React.useRef<{
		group: SidebarLink;
		key: string;
	} | null>(null);
	if (group && groupKey) {
		lastGroup.current = { group, key: groupKey };
	}
	const shown = lastGroup.current;

	// The panel lines up with the rail's edge rather than the icon's, centred
	// on the icon. A virtual anchor so Popper places it there.
	const virtualAnchor = React.useMemo(() => {
		if (!anchor) {
			return null;
		}
		return {
			contextElement: anchor,
			getBoundingClientRect: () => {
				const rect = anchor.getBoundingClientRect();
				return {
					x: railEdge,
					y: rect.top,
					left: railEdge,
					right: railEdge,
					top: rect.top,
					bottom: rect.bottom,
					width: 0,
					height: rect.height,
					toJSON: () => ({})
				} as DOMRect;
			}
		};
	}, [anchor, railEdge]);
	const lastAnchor = React.useRef(virtualAnchor);
	if (virtualAnchor) {
		lastAnchor.current = virtualAnchor;
	}

	// The icon swells as its glass opens, like a pressed gel button
	React.useEffect(() => {
		if (anchor) {
			gelSwell(anchor);
		}
	}, [anchor]);

	// Moving from one group to another glides the panel to its new place;
	// the first placement after opening must not slide in from the corner.
	const [settled, setSettled] = React.useState(false);
	React.useEffect(() => {
		if (!open) {
			setSettled(false);
			return undefined;
		}
		let second = 0;
		const first = requestAnimationFrame(() => {
			second = requestAnimationFrame(() => setSettled(true));
		});
		return () => {
			cancelAnimationFrame(first);
			cancelAnimationFrame(second);
		};
	}, [open]);

	const leaves = React.useMemo(
		() =>
			shown ? flattenLeaves(shown.group.subitems, shown.group.icon) : [],
		[shown]
	);
	const rowRef = React.useRef<HTMLDivElement>(null);
	const glassRef = React.useRef<HTMLDivElement>(null);
	const dockFrame = React.useRef(0);
	/** Set by GlassPanel: re-trace the liquid glass around the tiles. */
	const shapeRef = React.useRef<(() => void) | null>(null);

	// Roving focus: one tile in the tab order, arrows move between them
	const tileRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
	const activeIndex = leaves.findIndex(({ sub }) =>
		isSubLinkActive(sub, activePath)
	);
	const [focusIndex, setFocusIndex] = React.useState(0);
	React.useEffect(() => {
		setFocusIndex(Math.max(activeIndex, 0));
		// Reset per group, not per active-path change inside it
	}, [groupKey]);

	React.useEffect(() => {
		if (!open || !focusFirst) {
			return undefined;
		}
		const timer = setTimeout(() => tileRefs.current[0]?.focus());
		return () => clearTimeout(timer);
	}, [open, focusFirst, groupKey]);

	const moveFocus = (index: number) => {
		const next = Math.max(0, Math.min(index, leaves.length - 1));
		setFocusIndex(next);
		tileRefs.current[next]?.focus();
	};

	const onTileKeyDown = (event: React.KeyboardEvent, index: number) => {
		switch (event.key) {
			case 'ArrowRight':
				moveFocus(index + 1);
				break;
			case 'ArrowLeft':
				if (index === 0) {
					onClose(true);
				} else {
					moveFocus(index - 1);
				}
				break;

			case 'Home':
				moveFocus(0);
				break;
			case 'End':
				moveFocus(leaves.length - 1);
				break;
			case 'Tab':
				// Back to the rail rather than into whatever follows <body>
				onClose(true);
				break;
			default:
				return;
		}
		event.preventDefault();
	};

	// Per-item magnification: the hovered (or keyboard-focused) tile grows,
	// the others keep their size and slide aside to make room — anchored on
	// the grown tile, though the panel hangs off the rail, so the row may
	// only spill left into its own padding. Moving to another tile springs
	// the old one back as the new one grows, and the glass flows between
	// them. All of it is `translate` / `scale`, written straight to the
	// elements — no re-render, nothing the compositor cannot do alone.
	const applyDock = (hovered: number | null) => {
		const tiles = tileRefs.current
			.slice(0, leaves.length)
			.filter((t): t is HTMLButtonElement => Boolean(t));
		if (!tiles.length) {
			return;
		}
		const grow =
			hovered !== null &&
			hovered < tiles.length &&
			!prefersReducedMotion();
		const motion = `translate ${glide.duration}ms ${glide.easing}, scale ${glide.duration}ms ${glide.easing}`;
		const centers = tiles.map(tile => tile.offsetLeft + TILE_PX / 2);
		const scales = tiles.map((_, i) =>
			grow && i === hovered ? DOCK_MAX_SCALE : 1
		);
		const extra = grow ? (DOCK_MAX_SCALE - 1) * TILE_PX : 0;
		const first = centers[0] - TILE_PX / 2;
		const last = centers[centers.length - 1] + TILE_PX / 2;
		const anchor = grow
			? Math.min(
					Math.min(
						1,
						Math.max(
							0,
							(centers[hovered!] - first) / (last - first)
						)
					),
					DOCK_LEFT_ROOM_PX / extra
				)
			: 0;
		let cursor = first - extra * anchor;
		tiles.forEach((tile, i) => {
			const width = TILE_PX * scales[i];
			const center = cursor + width / 2;
			cursor += width + TILE_GAP_PX;
			tile.style.transition = `${motion}, background 160ms ease, box-shadow 160ms ease`;
			tile.style.translate = grow ? `${center - centers[i]}px 0` : '';
			tile.style.scale = grow ? String(scales[i]) : '';
			if (grow) {
				tile.style.setProperty('--dock-scale', String(scales[i]));
			} else {
				tile.style.removeProperty('--dock-scale');
			}
		});
		// The glass follows the tiles as they move (see GlassPanel)
		shapeRef.current?.();
	};
	const dockedIndex = React.useRef<number | null>(null);
	// A new group's row starts with nothing grown
	React.useEffect(() => {
		dockedIndex.current = null;
	}, [groupKey]);
	const dock = (hovered: number | null) => {
		if (dockedIndex.current === hovered) {
			return;
		}
		dockedIndex.current = hovered;
		cancelAnimationFrame(dockFrame.current);
		dockFrame.current = requestAnimationFrame(() => applyDock(hovered));
	};
	React.useEffect(() => () => cancelAnimationFrame(dockFrame.current), []);

	// On glass the labels need the theme's text colour to stay legible; the
	// icons keep the accent in light mode, as on the rail.
	const labelColor = theme.palette.text.primary;
	const iconColor = isDark ? theme.palette.text.primary : accentColor;

	return (
		<>
			<Fade in={open} timeout={{ enter: 220, exit: 200 }} unmountOnExit>
				<Box
					data-testid='sidebar-flyout-scrim'
					aria-hidden
					onClick={() => onClose()}
					sx={{
						position: 'fixed',
						top: 0,
						right: 0,
						bottom: 0,
						left: railShape ? 0 : `${railEdge}px`,
						// Clicks in the cut-out reach the rail beneath
						...(railShape
							? { clipPath: windowLessShape(railShape) }
							: {}),
						zIndex: SCRIM_Z_INDEX,
						bgcolor: scrimColor(isDark)
					}}
				/>
			</Fade>
			<Popper
				open={open}
				anchorEl={virtualAnchor ?? lastAnchor.current}
				placement='right'
				transition
				modifiers={[
					{ name: 'offset', options: { offset: [0, PANEL_GAP_PX] } },
					{ name: 'flip', enabled: false },
					{ name: 'preventOverflow', options: { padding: 8 } }
				]}
				sx={{
					zIndex: PANEL_Z_INDEX,
					transition: settled
						? `transform ${glide.duration}ms ${glide.easing}`
						: 'none',
					[REDUCED_MOTION]: { transition: 'none' }
				}}
			>
				{({ TransitionProps }) => (
					<GlassPanel
						in={TransitionProps?.in ?? open}
						onEnter={TransitionProps?.onEnter}
						onExited={TransitionProps?.onExited}
						groupKey={shown?.key ?? null}
						panelProps={panelProps}
						isDark={isDark}
						solidSurface={solidSurface}
						groupText={shown?.group.text}
						glassRef={glassRef}
						shapeRef={shapeRef}
					>
						{shown ? (
							<>
								<Box
									key={shown.key}
									ref={rowRef}
									role='menu'
									aria-label={shown.group.text}
									onPointerLeave={() => dock(null)}
									sx={{
										position: 'relative',
										display: 'flex',
										gap: `${TILE_GAP_PX}px`,
										// No room kept for magnification: a grown tile rises out of
										// the glass, as icons rise out of the Dock
										px: 0
									}}
								>
									{leaves.map(({ sub, icon }, index) => (
										<FlyoutTile
											key={sub.path}
											ref={el => {
												tileRefs.current[index] = el;
											}}
											sub={sub}
											icon={icon}
											index={index}
											active={isSubLinkActive(
												sub,
												activePath
											)}
											tabIndex={
												index === focusIndex ? 0 : -1
											}
											onClick={() => {
												onNavigate(sub.path!);
												onClose();
											}}
											onKeyDown={event =>
												onTileKeyDown(event, index)
											}
											onFocus={event => {
												setFocusIndex(index);
												// A keyboard focus magnifies
												// as a pointer would
												if (
													event.currentTarget.matches(
														':focus-visible'
													)
												) {
													dock(index);
												}
											}}
											onHoverStart={pointerType => {
												if (pointerType !== 'touch') {
													dock(index);
												}
											}}
											accentColor={accentColor}
											activeForegroundColor={
												activeForegroundColor
											}
											labelColor={labelColor}
											iconColor={iconColor}
											isDark={isDark}
										/>
									))}
								</Box>
							</>
						) : null}
					</GlassPanel>
				)}
			</Popper>
		</>
	);
};

/** Room around the panel for the liquid outline to bulge and stretch into. */
const LIQUID_ROOM_Y_PX = 18;
const LIQUID_ROOM_X_PX = 160;
/** Room to the left of the panel, for a bubble at the row's start. */
const LIQUID_ROOM_LEFT_PX = 14;
/** How far apart two shapes may be and still melt into one; also how
 * round the neck where a bubble joins the bar is. */
const LIQUID_GOO_PX = 22;
/** Sampling along the outline: fine across the rounded ends, coarser
 * along the long edges. */
const LIQUID_STEP_PX = 2.5;
const LIQUID_END_STEP_PX = 1;

type TileBox = { left: number; right: number; top: number; bottom: number };
type Blob = { cx: number; cy: number; hx: number; hy: number; r: number };

/** Signed distance from (x, y) to a rounded rectangle: negative inside. */
const roundRectDistance = (x: number, y: number, b: Blob) => {
	const qx = Math.abs(x - b.cx) - b.hx + b.r;
	const qy = Math.abs(y - b.cy) - b.hy + b.r;
	return (
		Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) +
		Math.min(Math.max(qx, qy), 0) -
		b.r
	);
};

/** Smooth union of two distances: shapes closer than `k` melt together,
 * joined by a neck whose curvature, too, is continuous (the cubic form —
 * the quadratic one leaves a faint crease where the neck meets the bar). */
const smoothUnion = (a: number, b: number, k: number) => {
	const h = Math.max(k - Math.abs(a - b), 0) / k;
	return Math.min(a, b) - (h * h * h * k) / 6;
};

/**
 * The liquid outline of the panel, as an SVG path in the glass body's
 * coordinates. The panel's bar and a bubble around every tile that has
 * grown past it are melted together like metaballs (a smooth union of
 * their distance fields): the bar stays straight where nothing has grown,
 * each grown tile is held in a bubble of glass, and neighbouring bubbles
 * and the bar flow into one another through rounded necks. The outline is
 * traced column by column from the field, so it has no seam anywhere.
 */
const liquidOutline = (width: number, height: number, tiles: TileBox[]) => {
	const pad = PANEL_PADDING_PX;
	const top = LIQUID_ROOM_Y_PX;
	const mid = LIQUID_ROOM_Y_PX + height / 2;
	const right = Math.max(width, ...tiles.map(tile => tile.right + pad));
	const bar: Blob = {
		cx: right / 2,
		cy: mid,
		hx: right / 2,
		hy: height / 2,
		r: PANEL_RADIUS_PX
	};
	// A bubble around each tile grown past the bar: one at rest, two while
	// one springs back and the next grows, melting into each other and the
	// bar so the glass flows from the old tile to the new.
	const bubbles: Blob[] = tiles
		.filter(tile => tile.bottom - tile.top > TILE_PX * 1.02)
		.map(tile => ({
			cx: (tile.left + tile.right) / 2,
			cy: (tile.top + tile.bottom) / 2 + LIQUID_ROOM_Y_PX,
			hx: (tile.right - tile.left) / 2 + pad,
			hy: (tile.bottom - tile.top) / 2 + pad,
			// Grown or not, the glass keeps its one corner
			r: PANEL_RADIUS_PX
		}));
	const field = (x: number, y: number) =>
		bubbles.reduce(
			(d, bubble) =>
				smoothUnion(d, roundRectDistance(x, y, bubble), LIQUID_GOO_PX),
			roundRectDistance(x, y, bar)
		);
	// The outline's top (dir -1) or bottom (dir 1) at x: bisect from the
	// middle of the bar (inside) to the edge of the room (outside)
	const edgeAt = (x: number, dir: -1 | 1) => {
		let inside = mid;
		let outside = mid + dir * (height / 2 + top);
		if (field(x, inside) > 0) {
			return null;
		}
		for (let i = 0; i < 12; i += 1) {
			const probe = (inside + outside) / 2;
			if (field(x, probe) <= 0) {
				inside = probe;
			} else {
				outside = probe;
			}
		}
		return inside;
	};
	const minX = Math.min(0, ...bubbles.map(b => b.cx - b.hx)) - 2;
	const maxX = Math.max(right, ...bubbles.map(b => b.cx + b.hx)) + 2;
	const tops: Array<[number, number]> = [];
	const bottoms: Array<[number, number]> = [];
	for (let x = minX; x <= maxX; ) {
		const t = edgeAt(x, -1);
		const b = edgeAt(x, 1);
		if (t !== null && b !== null) {
			const px = +(x + LIQUID_ROOM_LEFT_PX).toFixed(1);
			tops.push([px, +t.toFixed(1)]);
			bottoms.push([px, +b.toFixed(1)]);
		}
		const nearEnd =
			x - minX < PANEL_RADIUS_PX + 4 || maxX - x < PANEL_RADIUS_PX + 4;
		x += nearEnd ? LIQUID_END_STEP_PX : LIQUID_STEP_PX;
	}
	if (!tops.length) {
		return '';
	}
	const points = [...tops, ...bottoms.reverse()];
	return `M ${points.map(([x, y]) => `${x} ${y}`).join(' L ')} Z`;
};

/** Fade the glass body's parts, never the body: opacity on an ancestor of
 * a backdrop-filter cuts the blur off from the page behind it. */
const fadeBody = (
	body: HTMLElement,
	[from, to]: [number, number],
	duration: number,
	easing: string
) => {
	Array.from(body.children).forEach(part => {
		if (canAnimate(part)) {
			part.animate([{ opacity: from }, { opacity: to }], {
				duration,
				easing,
				fill: to === 0 ? 'forwards' : 'none'
			});
		}
	});
};

interface GlassPanelProps {
	in: boolean;
	onEnter?: () => void;
	onExited?: () => void;
	groupKey: string | null;
	panelProps: SidebarFlyoutProps['panelProps'];
	isDark: boolean;
	solidSurface: string;
	groupText?: string;
	/** The glass body (layer, rim and shadow), which the motion moves. */
	glassRef: React.RefObject<HTMLDivElement | null>;
	/** Filled with the function that re-traces the glass around the tiles. */
	shapeRef: React.MutableRefObject<(() => void) | null>;
	children: React.ReactNode;
}

/**
 * The panel: a glass body (its own layer, so its shape can morph without
 * distorting the tiles) under the content. Runs the materialize, reshape and
 * dematerialize motion with the Web Animations API; with no motion support
 * (or reduced motion) it simply appears.
 */
const GlassPanel: React.FC<GlassPanelProps> = ({
	in: inProp,
	onEnter,
	onExited,
	groupKey,
	panelProps,
	isDark,
	solidSurface,
	groupText,
	glassRef,
	shapeRef,
	children
}) => {
	const containerRef = React.useRef<HTMLDivElement | null>(null);
	const layerRef = React.useRef<HTMLDivElement>(null);
	const rimPathRef = React.useRef<SVGPathElement>(null);
	const glintPathRef = React.useRef<SVGPathElement>(null);
	const glintRef = React.useRef<SVGRadialGradientElement>(null);
	const lightRgb = pointerLightRgb(isDark, useGlassAccentRgb());
	// The rim's glint where the pointer is nearest, from the layer's light
	const onLight = React.useCallback(
		(x: number, y: number, i: number) => {
			glintRef.current?.setAttribute('cx', String(x));
			glintRef.current?.setAttribute('cy', String(y));
			if (glintPathRef.current) {
				glintPathRef.current.style.opacity = String(
					i *
						(isDark
							? POINTER_LIGHT.dark.rim
							: POINTER_LIGHT.light.rim)
				);
			}
		},
		[isDark]
	);
	const shadowPathRef = React.useRef<SVGPathElement>(null);
	const maskPathRef = React.useRef<SVGPathElement>(null);
	const uid = `lumora-flyout-${React.useId().replace(/[^a-zA-Z0-9-]/g, '')}`;

	// The liquid outline: re-traced from where the tiles really are, every
	// frame while they move, until it has been still for a few frames.
	const shapeFrame = React.useRef(0);
	const stillFrames = React.useRef(0);
	const lastShape = React.useRef('');
	const reshape = () => {
		const container = containerRef.current;
		const layer = layerRef.current;
		if (!container || !layer) {
			return false;
		}
		const box = container.getBoundingClientRect();
		const tiles = Array.from(
			container.querySelectorAll('[role="menuitem"]'),
			el => {
				const r = el.getBoundingClientRect();
				return {
					left: r.left - box.left,
					right: r.right - box.left,
					top: r.top - box.top,
					bottom: r.bottom - box.top
				};
			}
		);
		const d = liquidOutline(
			container.offsetWidth,
			container.offsetHeight,
			tiles
		);
		if (d === lastShape.current) {
			return false;
		}
		lastShape.current = d;
		layer.style.clipPath = `path('${d}')`;
		rimPathRef.current?.setAttribute('d', d);
		glintPathRef.current?.setAttribute('d', d);
		shadowPathRef.current?.setAttribute('d', d);
		maskPathRef.current?.setAttribute('d', d);
		return true;
	};
	const follow = () => {
		stillFrames.current = 0;
		if (shapeFrame.current) {
			return;
		}
		const tick = () => {
			stillFrames.current = reshape() ? 0 : stillFrames.current + 1;
			if (stillFrames.current > 8) {
				shapeFrame.current = 0;
				return;
			}
			shapeFrame.current = requestAnimationFrame(tick);
		};
		shapeFrame.current = requestAnimationFrame(tick);
	};
	shapeRef.current = follow;
	React.useLayoutEffect(() => {
		reshape();
		follow();
		return () => {
			cancelAnimationFrame(shapeFrame.current);
			shapeFrame.current = 0;
		};
		// A new group's tiles need a new outline
	}, [groupKey]);

	const contentRef = React.useRef<HTMLDivElement>(null);
	const size = React.useRef<{ width: number; height: number } | null>(null);
	const mounted = React.useRef(false);

	const setContainerRef = (el: HTMLDivElement | null) => {
		containerRef.current = el;
		const { ref } = panelProps;
		if (typeof ref === 'function') {
			ref(el);
		} else if (ref) {
			(ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
		}
	};

	const stopAll = () => {
		cancelAnimations(glassRef.current);
		cancelAnimations(contentRef.current);
		cancelAnimations(containerRef.current);
	};

	// Grow out of the rail icon. Only transform and opacity move, so the
	// browser composites every frame; the glass bends light at full strength
	// from the first frame (animating the blur itself re-renders the page
	// behind it each frame, which is what stutters). The panel is centred on
	// the icon, so the glass grows from a point at the icon's centre.
	const materialize = () => {
		const container = containerRef.current;
		const glass = glassRef.current;
		const content = contentRef.current;
		if (!canAnimate(container) || !glass || !content) {
			return;
		}
		stopAll();
		if (prefersReducedMotion()) {
			container.animate([{ opacity: 0 }, { opacity: 1 }], {
				duration: 160,
				easing: 'ease-out'
			});
			return;
		}
		size.current = null;
		glass.animate(
			[
				{ transform: `scale(${SEED_SCALE_X}, ${SEED_SCALE_Y})` },
				{ transform: 'none' }
			],
			{ duration: morph.duration, easing: morph.easing }
		);
		fadeBody(glass, [0, 1], 160, 'ease-out');
		// The light catches the new edge and sweeps across it
		try {
			layerRef.current?.animate(
				[
					{ opacity: 0, transform: 'translate(-35%, -35%)' },
					{ opacity: 1, transform: 'none' }
				],
				{
					pseudoElement: '::after',
					duration: 760,
					delay: 60,
					easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
					fill: 'backwards'
				}
			);
		} catch {
			// No pseudo-element animation: the highlight is simply there
		}
		content.animate(
			[
				{ opacity: 0, transform: 'translateX(-10px) scale(0.98)' },
				{ opacity: 1, transform: 'none' }
			],
			{
				duration: settle.duration,
				delay: 60,
				easing: settle.easing,
				fill: 'backwards'
			}
		);
	};

	// Draw back into the rail icon, then let Popper unmount
	const dematerialize = () => {
		const container = containerRef.current;
		const glass = glassRef.current;
		const content = contentRef.current;
		if (!canAnimate(container) || !glass || !content) {
			onExited?.();
			return;
		}
		stopAll();
		if (prefersReducedMotion()) {
			container
				.animate([{ opacity: 1 }, { opacity: 0 }], {
					duration: 120,
					fill: 'forwards'
				})
				.finished.then(() => onExited?.())
				.catch(() => undefined);
			return;
		}
		content.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 90,
			easing: 'ease-in',
			fill: 'forwards'
		});
		fadeBody(glass, [1, 0], 200, 'ease-in');
		glass
			.animate(
				[
					{ transform: 'none' },
					{ transform: `scale(${SEED_SCALE_X}, ${SEED_SCALE_Y})` }
				],
				{
					duration: 220,
					easing: 'cubic-bezier(0.5, 0, 0.75, 0)',
					fill: 'forwards'
				}
			)
			.finished.then(() => onExited?.())
			.catch(() => undefined);
	};

	// Opening, and reopening while it was still drawing back in
	React.useLayoutEffect(() => {
		if (!inProp) {
			dematerialize();
			return;
		}
		onEnter?.();
		materialize();
		// The motion runs per open/close, not per render
	}, [inProp]);

	// Remember the glass's size, so a change of group can reshape from it
	React.useLayoutEffect(() => {
		const container = containerRef.current;
		if (!container) {
			return;
		}
		const box = container.getBoundingClientRect();
		const previous = size.current;
		size.current = { width: box.width, height: box.height };
		if (!mounted.current) {
			mounted.current = true;
			return;
		}
		// Another group while open: the same glass reshapes to fit its
		// tiles from the size it had (a scale, so it stays composited),
		// gliding to rest without a bounce.
		const glass = glassRef.current;
		if (
			!inProp ||
			!previous ||
			!canAnimate(glass) ||
			!box.width ||
			!box.height ||
			prefersReducedMotion()
		) {
			return;
		}
		cancelAnimations(glass);
		glass.animate(
			[
				{
					transform: `scale(${previous.width / box.width}, ${previous.height / box.height})`
				},
				{ transform: 'none' }
			],
			{ duration: glide.duration, easing: glide.easing }
		);
		// Only a change of group reshapes the glass
	}, [groupKey]);

	return (
		<Box
			ref={setContainerRef}
			onMouseEnter={panelProps.onMouseEnter}
			onMouseLeave={panelProps.onMouseLeave}
			data-testid='sidebar-flyout'
			data-group={groupText}
			sx={{
				position: 'relative',
				borderRadius: `${PANEL_RADIUS_PX}px`,
				p: `${PANEL_PADDING_PX}px`,
				// Fills the gap to the rail so the pointer can cross it
				// without leaving the flyout
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					bottom: 0,
					left: -PANEL_GAP_PX - 2,
					width: PANEL_GAP_PX + 2
				}
			}}
		>
			{/* The glass body: room around the panel for the liquid outline to
			    bulge into, the outline traced by GlassPanel's shape */}
			<Box
				ref={glassRef}
				aria-hidden
				sx={{
					position: 'absolute',
					top: -LIQUID_ROOM_Y_PX,
					bottom: -LIQUID_ROOM_Y_PX,
					left: -LIQUID_ROOM_LEFT_PX,
					right: -LIQUID_ROOM_X_PX,
					pointerEvents: 'none',
					// The rail icon's centre: the panel is centred on it,
					// one gap plus half the rail's padding to the left
					transformOrigin: `${LIQUID_ROOM_LEFT_PX - SEED_ORIGIN_X_PX}px 50%`,
					willChange: 'transform'
				}}
			>
				<svg
					width='100%'
					height='100%'
					style={{
						position: 'absolute',
						inset: 0,
						overflow: 'visible'
					}}
				>
					<defs>
						<filter
							id={`${uid}-shadow`}
							x='-20%'
							y='-50%'
							width='140%'
							height='200%'
						>
							<feGaussianBlur stdDeviation='14' />
						</filter>
						{/* The shadow only outside the glass, as a box-shadow */}
						<mask
							id={`${uid}-outside`}
							maskUnits='userSpaceOnUse'
							x='-200'
							y='-200'
							width='4000'
							height='1000'
						>
							<rect
								x='-200'
								y='-200'
								width='4000'
								height='1000'
								fill='white'
							/>
							<path ref={maskPathRef} fill='black' />
						</mask>
					</defs>
					<g mask={`url(#${uid}-outside)`}>
						<path
							ref={shadowPathRef}
							transform='translate(0 12)'
							fill={
								isDark
									? 'rgba(0, 0, 0, 0.6)'
									: 'rgba(15, 23, 42, 0.28)'
							}
							filter={`url(#${uid}-shadow)`}
						/>
					</g>
				</svg>
				<GlassLayer
					ref={layerRef}
					isDark={isDark}
					solid={solidSurface}
					refract={false}
					onLight={onLight}
					data-testid='sidebar-flyout-glass'
					sx={{
						position: 'absolute',
						inset: 0,
						borderRadius: 0,
						boxShadow: 'none',
						'&::before': { display: 'none' }
					}}
				/>
				<svg
					width='100%'
					height='100%'
					style={{
						position: 'absolute',
						inset: 0,
						overflow: 'visible'
					}}
				>
					<defs>
						<linearGradient
							id={`${uid}-rim`}
							x1='0'
							y1='0'
							x2='1'
							y2='1'
						>
							<stop
								offset='0'
								stopColor='#ffffff'
								stopOpacity={isDark ? 0.5 : 1}
							/>
							<stop
								offset='0.25'
								stopColor='#ffffff'
								stopOpacity={isDark ? 0.1 : 0.5}
							/>
							<stop
								offset='0.55'
								stopColor='#ffffff'
								stopOpacity={isDark ? 0.04 : 0.2}
							/>
							<stop
								offset='1'
								stopColor='#ffffff'
								stopOpacity={isDark ? 0.3 : 0.9}
							/>
						</linearGradient>
					</defs>
					<path
						ref={rimPathRef}
						fill='none'
						// Solid while the glass look is off: a hairline edge
						stroke={
							LIQUID_GLASS_ENABLED
								? `url(#${uid}-rim)`
								: isDark
									? 'rgba(255, 255, 255, 0.12)'
									: 'rgba(15, 23, 42, 0.1)'
						}
						strokeWidth={LIQUID_GLASS_ENABLED ? '1.25' : '1'}
					/>
					{/* Where the pointer's light catches the rim */}
					<radialGradient
						ref={glintRef}
						id={`${uid}-glint`}
						gradientUnits='userSpaceOnUse'
						cx='-9999'
						cy='-9999'
						r='140'
					>
						<stop
							offset='0'
							stopColor={`rgb(${lightRgb})`}
							stopOpacity='1'
						/>
						<stop
							offset='1'
							stopColor={`rgb(${lightRgb})`}
							stopOpacity='0'
						/>
					</radialGradient>
					<path
						ref={glintPathRef}
						fill='none'
						stroke={`url(#${uid}-glint)`}
						strokeWidth='1.5'
						style={{
							opacity: 0,
							display: LIQUID_GLASS_ENABLED ? undefined : 'none'
						}}
					/>
				</svg>
			</Box>
			<Box ref={contentRef} sx={{ position: 'relative' }}>
				{children}
			</Box>
		</Box>
	);
};

interface FlyoutTileProps {
	sub: SidebarSubLink;
	icon: React.ReactNode;
	index: number;
	active: boolean;
	tabIndex: number;
	onClick: () => void;
	onKeyDown: (event: React.KeyboardEvent) => void;
	onFocus: (event: React.FocusEvent<HTMLButtonElement>) => void;
	/** The pointer arrived on the tile. */
	onHoverStart: (pointerType: string) => void;
	accentColor: string;
	activeForegroundColor: string;
	labelColor: string;
	iconColor: string;
	isDark: boolean;
}

/**
 * One compact square tile: the page's icon, its name in a glass pill that
 * pops up beneath it on hover or focus. Hovered, it becomes a glass bubble
 * and wobbles as it lands.
 */
const FlyoutTile = React.forwardRef<HTMLButtonElement, FlyoutTileProps>(
	(
		{
			sub,
			icon,
			index,
			active,
			tabIndex,
			onClick,
			onKeyDown,
			onFocus,
			onHoverStart,
			accentColor,
			activeForegroundColor,
			labelColor,
			iconColor,
			isDark
		},
		ref
	) => {
		const accentRgb = useGlassAccentRgb();
		// The glow follows the pointer across the tile, as light from a
		// fingertip; written to CSS variables so moving does not re-render.
		const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
			const rect = event.currentTarget.getBoundingClientRect();
			event.currentTarget.style.setProperty(
				'--mx',
				`${((event.clientX - rect.left) / rect.width) * 100}%`
			);
			event.currentTarget.style.setProperty(
				'--my',
				`${((event.clientY - rect.top) / rect.height) * 100}%`
			);
		};
		// A bubble landing: squash, stretch, settle. On `transform`, which
		// the browser applies inside the dock's `scale`, so the two compose.
		const onMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
			const el = event.currentTarget;
			if (!canAnimate(el) || prefersReducedMotion()) {
				return;
			}
			el.animate(
				[
					{ transform: 'scale(1, 1)' },
					{ transform: 'scale(1.1, 0.9)', offset: 0.22 },
					{ transform: 'scale(0.95, 1.06)', offset: 0.5 },
					{ transform: 'scale(1.02, 0.99)', offset: 0.75 },
					{ transform: 'scale(1, 1)' }
				],
				{ duration: 560, easing: 'ease-out' }
			);
		};
		// The name at a constant size, however much the dock has grown the tile
		const nameShown = {
			opacity: 1,
			scale: 'calc(1 / var(--dock-scale, 1))'
		};
		const bubble = {
			...glassBubbleSx(isDark, accentRgb),
			'&::before': { opacity: 1 },
			'& [data-tile-name]': nameShown
		};
		return (
			<ButtonBase
				ref={ref}
				role='menuitem'
				tabIndex={tabIndex}
				aria-current={active ? 'page' : undefined}
				data-testid={`sidebar-subitem-${sub.text}`}
				data-active={active ? 'true' : 'false'}
				onClick={onClick}
				onKeyDown={onKeyDown}
				onFocus={onFocus}
				onPointerMove={onPointerMove}
				onMouseEnter={onMouseEnter}
				onPointerEnter={event => onHoverStart(event.pointerType)}
				disableRipple
				sx={{
					position: 'relative',
					flexShrink: 0,
					width: TILE_PX,
					height: TILE_PX,
					borderRadius: `${TILE_RADIUS_PX}px`,
					color: active ? activeForegroundColor : labelColor,
					bgcolor: active ? accentColor : 'transparent',
					// The current page is tinted glass, not a flat fill
					...(active ? glassTintSx(accentColor, isDark) : {}),
					transition: `translate ${glide.duration}ms ${glide.easing}, scale ${glide.duration}ms ${glide.easing}, background 160ms ease, box-shadow 160ms ease`,
					// Wells up into place, each after the one before
					animation: `${tileIn} ${morph.duration}ms ${morph.easing} both`,
					animationDelay: `${TILE_BASE_DELAY_MS + index * TILE_STAGGER_MS}ms`,
					'& .MuiSvgIcon-root': {
						fontSize: 22,
						color: active ? activeForegroundColor : iconColor
					},
					'&::before': {
						content: '""',
						position: 'absolute',
						inset: 0,
						borderRadius: 'inherit',
						pointerEvents: 'none',
						opacity: 0,
						transition: 'opacity 160ms ease',
						// The pointer's glow on the tile (glass look only)
						background: LIQUID_GLASS_ENABLED
							? `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, ${isDark ? 0.18 : 0.7}), transparent 65%)`
							: 'none'
					},
					// The current page keeps its accent fill; it still glows
					'&:hover': active
						? {
								'&::before': { opacity: 1 },
								'& [data-tile-name]': nameShown
							}
						: bubble,
					'&:active': { transform: 'scale(0.9)' },
					'&.Mui-focusVisible': {
						...(active ? {} : bubble),
						'& [data-tile-name]': nameShown,
						outline: '2px solid',
						outlineColor: accentColor,
						outlineOffset: 2
					},
					[REDUCED_MOTION]: {
						animation: 'none',
						transition: 'none',
						'&:active': { transform: 'none' }
					}
				}}
			>
				<Box sx={{ position: 'relative', display: 'flex' }}>{icon}</Box>
				{/* The name: a glass pill beneath the tile on hover or focus */}
				<Box
					component='span'
					data-tile-name
					sx={{
						...glassLabelSx(isDark),
						position: 'absolute',
						top: '100%',
						left: '50%',
						translate: '-50% 8px',
						transformOrigin: 'top center',
						whiteSpace: 'nowrap',
						pointerEvents: 'none',
						opacity: 0,
						scale: 'calc(0.6 / var(--dock-scale, 1))',
						transition: `opacity 140ms ease, scale ${glide.duration}ms ${glide.easing}`,
						zIndex: 1,
						[REDUCED_MOTION]: { transition: 'opacity 140ms ease' }
					}}
				>
					{sub.text}
				</Box>
			</ButtonBase>
		);
	}
);
FlyoutTile.displayName = 'FlyoutTile';

export default SidebarFlyout;
