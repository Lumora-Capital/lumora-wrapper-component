import * as React from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../utils';
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
	REDUCED_MOTION_NONE,
	glassLabel,
	glassLabelColor,
	tileIn
} from './liquidGlass';
import { RAIL_MAX_SCALE } from './shellLayout';
import { useIsDark, useShellScopeProps } from './shellTheme';
import { fitWithin, useDockMagnify } from './useDockMagnify';
import { flattenLeaves, isInAppClick, isSubLinkActive } from './sidebarUtils';

/** Each page's icon tile: a step up from the rail's buttons, room for its
 * larger glyph (36px: the tile's `[&_svg]:size-9`). */
const TILE_PX = 52;
/** How far the tile under the pointer swells. */
const TILE_MAX_SCALE = 2;
/** The room the tile under the pointer opens either side of it, beyond
 * its growth, pushing its neighbours a little further away. */
const TILE_SPACING_PX = 10;
/** Round tiles: a circle as wide as the tile. */
const TILE_RADIUS_PX = TILE_PX / 2;
const TILE_SELECTOR = '[data-flyout-tile]';
/** A page's column: its tile and its name, one above the other. */
const ROW_GAP_PX = 4;
/** The names' bands above and below the tiles: two lines each, the same
 * either side so the tiles stay level with the rail icon. A longer name
 * bleeds past its band rather than moving the tiles. */
const NAME_BAND_PX = 32;
/** The tiles' row, below the names above them. */
const TILE_TOP_PX = NAME_BAND_PX + ROW_GAP_PX;
/** A name wider than this wraps onto further lines. */
const NAME_MAX_PX = 104;
/** The space between neighbours along each row. */
const ITEM_GAP_PX = 24;
/** Everything else a tile animates, kept while the dock drives its scale. */
const TILE_TRANSITION =
	'background 160ms ease, color 160ms ease, transform 120ms ease';
/** Space between the rail's edge and the tiles' frosted panel. */
const PANEL_GAP_PX = 10;
/** The frosted panel's padding around the tiles. */
const STAGE_PADDING_PX = 10;
/** The group's name, this far above the tiles' row. */
const HEADING_GAP_PX = STAGE_PADDING_PX + 2;
/** The tiles well up one after another. */
const TILE_STAGGER_MS = 18;
/** How far the group's rail icon swells as its tiles open: a gentler gel
 * than a press, so moving between groups doesn't jiggle the rail. */
const ANCHOR_SWELL_SCALE = 1.08;

/** The scroller `el` sits in, if any. */
const scrollerOf = (el: HTMLElement) => {
	for (let box = el.parentElement; box; box = box.parentElement) {
		const { overflowY } = getComputedStyle(box);
		if (overflowY === 'auto' || overflowY === 'scroll') {
			return box;
		}
	}
	return null;
};

/**
 * The anchor's gel, within what its rail's hover swell leaves of the room
 * in its scroller: at the scroller's end the swell takes it all, and the
 * gel on top would scroll the rail for a moment (a scrollbar flash).
 */
const anchorSwellOf = (anchor: HTMLElement) => {
	const scroller = scrollerOf(anchor);
	if (!scroller) {
		return ANCHOR_SWELL_SCALE;
	}
	const fit = fitWithin(anchor, scroller);
	return Math.min(ANCHOR_SWELL_SCALE, fit / Math.min(fit, RAIL_MAX_SCALE));
};
/** Above the page, its sticky bars and the docked chat (1140); below the
 * drawers and menus (1200+), which close the flyout when they open anyway. */
const SCRIM_Z_INDEX = 1190;
const PANEL_Z_INDEX = 1195;
/** The tiles' fade as the flyout closes. */
const EXIT_FADE_MS = 120;
/** The dim's fade in and out. */
const SCRIM_ENTER_MS = 220;
const SCRIM_EXIT_MS = 200;
/** How close the panel may come to the window's top and bottom. */
const VIEWPORT_PADDING_PX = 8;

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
	/** The current page's tile fill, when it should differ from `accentColor`. */
	activeBackgroundColor?: string;
	/** Icons and text on the accent fill. */
	activeForegroundColor: string;
	/** The tiles' and names' surface. */
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
/** The window's side of that clip path. Big enough for any screen, small
 * enough for Chrome: from 16384px up it drops the cut-out without a word,
 * and the rail is dimmed with the page. */
const WINDOW_EXTENT_PX = 8192;

const windowLessShape = ({ left, top, width, height, radius }: RailShape) => {
	const r = Math.min(radius, width / 2, height / 2);
	const right = left + width;
	const bottom = top + height;
	const arc = `A ${r} ${r} 0 0 1`;
	return (
		`path(evenodd, 'M 0 0 H ${WINDOW_EXTENT_PX} V ${WINDOW_EXTENT_PX} H 0 Z ` +
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
	activeBackgroundColor,
	activeForegroundColor,
	solidSurface
}) => {
	const isDark = useIsDark();
	const scope = useShellScopeProps();
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
	// on the icon. The last anchor is kept while the panel fades out.
	const lastAnchor = React.useRef<{
		anchor: HTMLElement;
		railEdge: number;
	} | null>(null);
	if (anchor) {
		lastAnchor.current = { anchor, railEdge };
	}

	// Mounted while open and while its tiles fade out (FlyoutStage reports
	// when they have); the dim keeps its own fade
	const [mounted, setMounted] = React.useState(open);
	if (open && !mounted) {
		setMounted(true);
	}
	const [scrimMounted, setScrimMounted] = React.useState(open);
	if (open && !scrimMounted) {
		setScrimMounted(true);
	}
	React.useEffect(() => {
		if (open) {
			return undefined;
		}
		const timer = setTimeout(() => setScrimMounted(false), SCRIM_EXIT_MS);
		return () => clearTimeout(timer);
	}, [open]);

	// Where the panel sits: past the rail's edge, centred on the icon, kept
	// inside the window's height (what Popper's offset + preventOverflow did)
	const panelRef = React.useRef<HTMLDivElement>(null);
	const [position, setPosition] = React.useState<{ x: number; y: number }>({
		x: 0,
		y: 0
	});
	const place = React.useCallback(() => {
		const last = lastAnchor.current;
		const panel = panelRef.current;
		if (!last || !panel) {
			return;
		}
		const rect = last.anchor.getBoundingClientRect();
		const height = panel.offsetHeight;
		const x = Math.round(last.railEdge + PANEL_GAP_PX);
		const centred = rect.top + rect.height / 2 - height / 2;
		const max = window.innerHeight - height - VIEWPORT_PADDING_PX;
		const y = Math.round(
			Math.max(VIEWPORT_PADDING_PX, Math.min(centred, max))
		);
		setPosition(prev => (prev.x === x && prev.y === y ? prev : { x, y }));
	}, []);
	React.useLayoutEffect(() => {
		if (!mounted) {
			return undefined;
		}
		place();
		window.addEventListener('resize', place);
		window.addEventListener('scroll', place, true);
		const observer =
			typeof ResizeObserver === 'undefined' || !panelRef.current
				? null
				: new ResizeObserver(place);
		if (observer && panelRef.current) {
			observer.observe(panelRef.current);
		}
		return () => {
			window.removeEventListener('resize', place);
			window.removeEventListener('scroll', place, true);
			observer?.disconnect();
		};
	}, [mounted, place, anchor, railEdge, groupKey]);

	// The icon swells as its glass opens, like a pressed gel button
	React.useEffect(() => {
		if (!anchor) {
			return;
		}
		const scale = anchorSwellOf(anchor);
		if (scale > 1.001) {
			gelSwell(anchor, scale);
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
	// The Dock's magnification along the row, as strong as the rail's: the
	// tiles themselves swell around the pointer, icon and all, growing away
	// from their names, and the pages beside them slide aside
	const magnify = useDockMagnify(rowRef, {
		enabled: open,
		axis: 'x',
		itemSelector: TILE_SELECTOR,
		transition: TILE_TRANSITION,
		// A bigger swell than the rail's: the tiles are the destination
		maxScale: TILE_MAX_SCALE,
		// The neighbours make room as it grows, and a little more
		carrierSelector: '[role="menuitem"]',
		spacing: TILE_SPACING_PX,
		// Only the tile under the pointer swells; the rest keep their size
		hoveredOnly: true
	});

	// The heading moves only when a tile would reach it: one that grows up
	// out of the row (its name below it) and, slid along by the dock, still
	// sits under the heading's span. It follows the scales the dock writes,
	// watched from the moment it mounts (the row remounts per group, so a ref
	// callback rather than an effect).
	const stopFollowing = React.useRef<() => void>(undefined);
	const headingRef = React.useCallback((heading: HTMLElement | null) => {
		stopFollowing.current?.();
		stopFollowing.current = undefined;
		const row = heading?.parentElement;
		if (!heading || !row || typeof MutationObserver === 'undefined') {
			return;
		}
		const follow = () => {
			// Centred on the row: its left edge is half its width before the
			// point it is placed at
			const headingLeft = heading.offsetLeft - heading.offsetWidth / 2;
			const headingRight = headingLeft + heading.offsetWidth;
			let rise = 0;
			// Reaches the heading if it sits under its span and above its gap
			const reach = (left: number, width: number, top: number) => {
				if (left < headingRight && left + width > headingLeft) {
					rise = Math.max(rise, -top - HEADING_GAP_PX);
				}
			};
			row.querySelectorAll<HTMLElement>(TILE_SELECTOR).forEach(tile => {
				const scale = parseFloat(tile.style.scale) || 1;
				// How far it grows past each edge, about its centre
				const growth = ((scale - 1) * TILE_PX) / 2;
				const page = tile.closest<HTMLElement>('[role="menuitem"]');
				const slide = parseFloat(page?.style.translate ?? '') || 0;
				reach(
					tile.offsetLeft + slide - growth,
					scale * TILE_PX,
					tile.offsetTop - growth
				);
				const name =
					page?.querySelector<HTMLElement>('[data-flyout-name]');
				const slot = name?.parentElement;
				if (name && slot && tile.dataset.flyoutNameSide === 'above') {
					reach(
						slot.offsetLeft + slide,
						name.offsetWidth,
						slot.offsetTop + name.offsetTop - growth
					);
				}
			});
			const next = rise > 0 ? `0 ${(-rise).toFixed(1)}px` : '';
			// It is inside the row it watches: write only a change
			if (heading.style.translate !== next) {
				heading.style.translate = next;
			}
		};
		const observer = new MutationObserver(follow);
		observer.observe(row, {
			subtree: true,
			attributes: true,
			attributeFilter: ['style']
		});
		stopFollowing.current = () => observer.disconnect();
	}, []);

	// The pages are spaced by their names' widths (see `alternatingLayout`).
	// Measured before paint, and again if the names change size (a web font
	// arriving).
	const nameRefs = React.useRef<Array<HTMLElement | null>>([]);
	const [nameWidths, setNameWidths] = React.useState<number[]>([]);
	React.useLayoutEffect(() => {
		const measure = () => {
			const next = leaves.map(
				(_, i) => nameRefs.current[i]?.offsetWidth ?? 0
			);
			setNameWidths(prev =>
				prev.length === next.length &&
				prev.every((w, i) => w === next[i])
					? prev
					: next
			);
		};
		measure();
		if (typeof ResizeObserver === 'undefined') {
			return undefined;
		}
		const observer = new ResizeObserver(measure);
		nameRefs.current
			.slice(0, leaves.length)
			.forEach(el => el && observer.observe(el));
		return () => observer.disconnect();
	}, [leaves]);
	const layout = alternatingLayout(nameWidths, leaves.length);

	// Roving focus: one tile in the tab order, arrows move between them
	const tileRefs = React.useRef<Array<HTMLAnchorElement | null>>([]);
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

			case ' ':
				// A link answers Enter only; a menu item answers Space too
				tileRefs.current[index]?.click();
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

	// On glass the labels need the theme's text colour to stay legible; the
	// icons keep the accent in light mode, as on the rail.
	const labelColor = 'var(--lw-text-primary)';
	const iconColor = isDark ? '#ffffff' : accentColor;

	return (
		<>
			{scrimMounted ? (
				<div
					data-testid='sidebar-flyout-scrim'
					data-flyout-scrim=''
					data-state={open ? 'open' : 'closed'}
					aria-hidden
					onClick={() => onClose()}
					className={cn(
						'lw:fixed lw:inset-y-0 lw:right-0',
						open
							? 'lw:animate-in lw:fade-in-0'
							: 'lw:animate-out lw:fade-out-0 lw:[animation-fill-mode:forwards]'
					)}
					style={{
						left: railShape ? 0 : `${railEdge}px`,
						// Clicks in the cut-out reach the rail beneath
						...(railShape
							? { clipPath: windowLessShape(railShape) }
							: {}),
						zIndex: SCRIM_Z_INDEX,
						animationDuration: `${open ? SCRIM_ENTER_MS : SCRIM_EXIT_MS}ms`,
						// The flyout's only surface: a wash from the rail across
						// the page, strongest behind the tiles, fading to the right
						background: isDark
							? 'linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)'
							: 'linear-gradient(90deg, rgba(236, 239, 243, 0.97) 0%, rgba(236, 239, 243, 0.9) 30%, rgba(236, 239, 243, 0.6) 55%, rgba(236, 239, 243, 0.2) 100%)'
					}}
				/>
			) : null}
			{mounted && typeof document !== 'undefined'
				? createPortal(
						<div
							ref={panelRef}
							{...scope}
							className={cn(
								'lw:fixed lw:top-0 lw:left-0',
								REDUCED_MOTION_NONE
							)}
							style={{
								zIndex: PANEL_Z_INDEX,
								transform: `translate(${position.x}px, ${position.y}px)`,
								transition: settled
									? `transform ${glide.duration}ms ${glide.easing}`
									: 'none'
							}}
						>
							<FlyoutStage
								in={open}
								onExited={() => setMounted(false)}
								panelProps={panelProps}
								groupText={shown?.group.text}
							>
								{shown ? (
									<div
										key={shown.key}
										ref={rowRef}
										role='menu'
										aria-label={shown.group.text}
										{...magnify.containerProps}
										onBlur={event => {
											if (
												!event.currentTarget.contains(
													event.relatedTarget as Node | null
												)
											) {
												magnify.settle();
											}
										}}
										className={cn(
											'lw:relative',
											REDUCED_MOTION_NONE
										)}
										style={{
											width: layout.width,
											height:
												TILE_TOP_PX +
												TILE_PX +
												ROW_GAP_PX +
												NAME_BAND_PX,
											// The panel stretches as the dock pushes
											// the pages along, as the Dock's shelf does
											marginRight:
												'var(--dock-spread, 0px)',
											// In step with the pages it makes room for
											transition: `margin-right var(--dock-scale-timing, ${glide.duration}ms ${glide.easing})`
										}}
									>
										<span
											ref={headingRef}
											aria-hidden
											data-testid='sidebar-flyout-heading'
											// Above the tiles and centred over them, so
											// they stay centred on the rail icon; the
											// row's name already labels it. It rises only
											// when a swelling tile would reach it (see the
											// callback on `headingRef`)
											className={cn(
												'lw:pointer-events-none lw:absolute lw:bottom-full lw:left-1/2 lw:-translate-x-1/2 lw:text-[1.125rem] lw:leading-normal lw:font-bold lw:tracking-[0.08em] lw:whitespace-nowrap lw:uppercase',
												REDUCED_MOTION_NONE
											)}
											style={{
												marginBottom: HEADING_GAP_PX,
												transition: `translate var(--dock-scale-timing, ${glide.duration}ms ${glide.easing})`,
												// The pages' own name colour
												color: glassLabelColor(isDark)
											}}
										>
											{shown.group.text}
										</span>
										{leaves.map(({ sub, icon }, index) => (
											<FlyoutTile
												key={sub.path}
												ref={el => {
													tileRefs.current[index] =
														el;
												}}
												nameRef={el => {
													nameRefs.current[index] =
														el;
												}}
												tileLeft={layout.tiles[index]}
												nameLeft={layout.names[index]}
												sub={sub}
												icon={icon}
												index={index}
												active={isSubLinkActive(
													sub,
													activePath
												)}
												tabIndex={
													index === focusIndex
														? 0
														: -1
												}
												onClick={event => {
													// Anything but a plain click is the browser's: a new tab
													if (!isInAppClick(event)) {
														return;
													}
													event.preventDefault();
													onNavigate(sub.path!);
													onClose();
												}}
												onKeyDown={event =>
													onTileKeyDown(event, index)
												}
												onFocus={event => {
													setFocusIndex(index);
													// A keyboard focus magnifies as a
													// pointer resting on the tile would
													const tile =
														event.currentTarget.querySelector(
															TILE_SELECTOR
														);
													if (
														tile &&
														event.currentTarget.matches(
															':focus-visible'
														)
													) {
														magnify.swellOn(tile);
													}
												}}
												accentColor={accentColor}
												activeBackgroundColor={
													activeBackgroundColor
												}
												activeForegroundColor={
													activeForegroundColor
												}
												labelColor={labelColor}
												iconColor={iconColor}
												surface={solidSurface}
												isDark={isDark}
											/>
										))}
									</div>
								) : null}
							</FlyoutStage>
						</div>,
						document.body
					)
				: null}
		</>
	);
};

interface FlyoutStageProps {
	in: boolean;
	onExited?: () => void;
	panelProps: SidebarFlyoutProps['panelProps'];
	groupText?: string;
	children: React.ReactNode;
}

/**
 * Holds the tiles beside the rail — no surface of its own, each tile and
 * name carries its own. Slides in as the tiles well up one after another,
 * fades out on close, then reports `onExited` so the panel unmounts.
 */
const FlyoutStage: React.FC<FlyoutStageProps> = ({
	in: inProp,
	onExited,
	panelProps,
	groupText,
	children
}) => {
	const containerRef = React.useRef<HTMLDivElement | null>(null);

	const setContainerRef = (el: HTMLDivElement | null) => {
		containerRef.current = el;
		const { ref } = panelProps;
		if (typeof ref === 'function') {
			ref(el);
		} else if (ref) {
			(ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
		}
	};

	// Whether it is meant to be open now: a close that ends late or is
	// cancelled still unmounts, unless it has been reopened since
	const inRef = React.useRef(inProp);
	inRef.current = inProp;

	// Opening, and reopening while it was still fading out
	React.useLayoutEffect(() => {
		const container = containerRef.current;
		cancelAnimations(container);
		if (inProp) {
			if (canAnimate(container) && !prefersReducedMotion()) {
				container.animate(
					[
						{ opacity: 0, transform: 'translateX(-8px)' },
						{ opacity: 1, transform: 'none' }
					],
					{ duration: settle.duration, easing: settle.easing }
				);
			}
			return;
		}
		if (!canAnimate(container)) {
			onExited?.();
			return;
		}
		// The tiles unmount only on onExited, so it must come: not only
		// when the fade finishes, but when it is cancelled or never reports
		// back (a navigation or a hidden tab mid-fade), else the tiles stayed
		// on the page with the dim already gone
		let exited = false;
		const exit = () => {
			if (!exited && !inRef.current) {
				exited = true;
				onExited?.();
			}
		};
		const fallback = setTimeout(exit, EXIT_FADE_MS + 100);
		container
			.animate([{ opacity: 1 }, { opacity: 0 }], {
				duration: EXIT_FADE_MS,
				easing: 'ease-in',
				fill: 'forwards'
			})
			.finished.then(exit, exit);
		return () => clearTimeout(fallback);
		// The motion runs per open/close, not per render
	}, [inProp]);

	return (
		<div
			ref={setContainerRef}
			onMouseEnter={panelProps.onMouseEnter}
			onMouseLeave={panelProps.onMouseLeave}
			data-testid='sidebar-flyout'
			data-group={groupText}
			// No surface of its own: the scrim's gradient sits behind it. A
			// tile the dock grows pops out past it. The ::before fills the gap
			// to the rail (PANEL_GAP_PX + 2) so the pointer can cross it
			// without leaving the flyout.
			className="lw:relative lw:before:absolute lw:before:inset-y-0 lw:before:left-[-12px] lw:before:w-3 lw:before:content-['']"
			style={{ padding: STAGE_PADDING_PX }}
		>
			{children}
		</div>
	);
};

/** Whether a page's name sits above its tile: every other page's, so the
 * names alternate above and below one level row of tiles. */
const nameOnTopAt = (index: number) => index % 2 === 1;

/**
 * Where each page's tile and name sit, as left edges in the row (tiles in
 * one row, names alternating above and below it; see `nameOnTopAt`). A
 * page's tile and name share one centre. Each page sits as close to the one
 * before as its tile and its band of names allow: a long name reaches over
 * its neighbours' columns, whose names are in the other band.
 */
const alternatingLayout = (widths: number[], count: number) => {
	const tiles: number[] = [];
	const names: number[] = [];
	let tileEnd = -ITEM_GAP_PX;
	let topEnd = -ITEM_GAP_PX;
	let bottomEnd = -ITEM_GAP_PX;
	for (let i = 0; i < count; i += 1) {
		const name = widths[i] || TILE_PX;
		const onTop = nameOnTopAt(i);
		const bandEnd = onTop ? topEnd : bottomEnd;
		const centre = Math.max(
			tileEnd + ITEM_GAP_PX + TILE_PX / 2,
			bandEnd + ITEM_GAP_PX + name / 2
		);
		tileEnd = centre + TILE_PX / 2;
		if (onTop) {
			topEnd = centre + name / 2;
		} else {
			bottomEnd = centre + name / 2;
		}
		tiles.push(Math.round(centre - TILE_PX / 2));
		names.push(Math.round(centre - name / 2));
	}
	return {
		tiles,
		names,
		width: Math.round(Math.max(tileEnd, topEnd, bottomEnd, 0))
	};
};

interface FlyoutTileProps {
	/** The name's pill, measured to pack the rows. */
	nameRef: React.Ref<HTMLSpanElement>;
	/** Left edges of the tile and the name in the row (`alternatingLayout`). */
	tileLeft: number;
	nameLeft: number;
	sub: SidebarSubLink;
	icon: React.ReactNode;
	index: number;
	active: boolean;
	tabIndex: number;
	onClick: (event: React.MouseEvent) => void;
	onKeyDown: (event: React.KeyboardEvent) => void;
	onFocus: (event: React.FocusEvent<HTMLAnchorElement>) => void;
	accentColor: string;
	activeBackgroundColor?: string;
	activeForegroundColor: string;
	labelColor: string;
	iconColor: string;
	/** The flyout's surface, for the tile and its name. */
	surface: string;
	isDark: boolean;
}

/**
 * One page: its icon on a tile and its name on a pill, each its own card,
 * one over the other, placed by `alternatingLayout`. The link spans the row but
 * only its tile and name take the pointer, so neighbours never steal each
 * other's hover. A link to the page, so it opens in a new tab too.
 */
const FlyoutTile = React.forwardRef<HTMLAnchorElement, FlyoutTileProps>(
	(
		{
			nameRef,
			tileLeft,
			nameLeft,
			sub,
			icon,
			index,
			active,
			tabIndex,
			onClick,
			onKeyDown,
			onFocus,
			accentColor,
			activeBackgroundColor,
			activeForegroundColor,
			labelColor,
			iconColor,
			surface,
			isDark
		},
		ref
	) => {
		const nameOnTop = nameOnTopAt(index);
		const card = glassLabel(isDark, surface);
		const nameColor = glassLabelColor(isDark);
		const enter: React.CSSProperties = {
			animation: `${tileIn} ${morph.duration}ms ${morph.easing} both`,
			animationDelay: `${index * TILE_STAGGER_MS}ms`
		};
		// A name is plain text on the panel: the current page's takes the
		// accent (the light theme's accent; on dark glass, the text colour
		// reads). On hover it only turns bold, keeping its colour
		const accentText = isDark ? nameColor : accentColor;
		const vars = {
			// Hovered or focused, the tile and its name take the rail's hover
			// colour — a tint of the accent, whatever the accent is — mixed
			// into the surface so it is solid rather than see-through
			'--lw-tile-hover': `color-mix(in srgb, ${accentColor} ${isDark ? 20 : 12}%, ${surface})`,
			'--lw-tile-outline': accentColor,
			// The current page's icon takes the accent's foreground
			'--lw-tile-icon': active ? activeForegroundColor : iconColor
		} as React.CSSProperties;
		return (
			<a
				ref={ref}
				href={sub.path}
				role='menuitem'
				tabIndex={tabIndex}
				aria-current={active ? 'page' : undefined}
				data-testid={`sidebar-subitem-${sub.text}`}
				data-active={active ? 'true' : 'false'}
				onClick={onClick}
				onKeyDown={onKeyDown}
				onFocus={onFocus}
				className='lw:group/tile lw:pointer-events-none lw:absolute lw:inset-0 lw:block lw:no-underline lw:outline-none'
				style={{ ...vars, color: labelColor }}
			>
				{/* The page's whole column, name to tile, is the link: no gap
				    between them (or round the tile's corners) drops the hover.
				    Tiles never share a column, so it reaches no neighbour. */}
				<span
					data-flyout-bridge=''
					aria-hidden
					className='lw:pointer-events-auto lw:absolute lw:top-0 lw:block lw:h-full'
					style={{ left: tileLeft, width: TILE_PX }}
				/>
				<span
					data-flyout-tile=''
					data-flyout-name-side={nameOnTop ? 'above' : 'below'}
					// Lit with the swell (the page the dock marks
					// `data-dock-hovered`, which may not be the one under the
					// pointer as the last shrinks away); by a plain hover only
					// while nothing swells (reduced motion)
					className={cn(
						card.className,
						'lw:pointer-events-auto lw:absolute lw:box-border lw:flex lw:items-center lw:justify-center lw:rounded-full lw:p-0',
						'lw:[&_svg]:size-9 lw:[&_svg]:text-(--lw-tile-icon) lw:[&_svg]:transition-colors lw:[&_svg]:duration-150',
						// A host's own glyph (an image in a `role="img"` box)
						// takes the same size
						'lw:[&_[role=img]]:size-9 lw:[&_[role=img]>img]:size-9',
						!active &&
							'lw:group-has-[[data-dock-hovered]]/tile:bg-(--lw-tile-hover)! lw:[[role=menu]:not(:has([data-dock-hovered]))_[role=menuitem]:hover_&]:bg-(--lw-tile-hover)! lw:group-focus-visible/tile:bg-(--lw-tile-hover)!',
						'lw:group-focus-visible/tile:outline-2 lw:group-focus-visible/tile:outline-offset-2 lw:group-focus-visible/tile:outline-(--lw-tile-outline) lw:group-focus-visible/tile:outline-solid',
						'lw:group-active/tile:[transform:scale(0.94)] lw:motion-reduce:group-active/tile:[transform:none]',
						REDUCED_MOTION_NONE
					)}
					style={{
						...card.style,
						// Cards of their own: a surface and a soft shadow, no
						// edge, lifted a little more than a resting label
						border: 'none',
						boxShadow: isDark
							? '0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)'
							: '0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)',
						left: tileLeft,
						top: TILE_TOP_PX,
						width: TILE_PX,
						height: TILE_PX,
						borderRadius: TILE_RADIUS_PX,
						// Grows about its centre, so the row stays level; its
						// name moves aside to clear it (see the name's slot)
						transformOrigin: 'center',
						transition: `scale ${glide.duration}ms ${glide.easing}, ${TILE_TRANSITION}`,
						// The current page: the accent, solid, its icon and text in
						// the accent's foreground — as the current page on the rail
						...(active
							? {
									background:
										activeBackgroundColor ?? accentColor,
									color: activeForegroundColor
								}
							: {}),
						...enter
					}}
				>
					{icon}
				</span>
				{/* The name, in its band above or below the tiles */}
				<span
					data-flyout-slot=''
					className={cn(
						'lw:pointer-events-auto lw:absolute lw:flex',
						REDUCED_MOTION_NONE
					)}
					style={{
						left: nameLeft,
						top: nameOnTop ? 0 : TILE_TOP_PX + TILE_PX + ROW_GAP_PX,
						height: NAME_BAND_PX,
						// Held against its own tile, not floating mid-band; a
						// name too long for the band bleeds away from the tile
						alignItems: nameOnTop ? 'flex-end' : 'flex-start',
						// Pushed away from its tile by as much as the tile
						// grows towards it (`--dock-scale`, on the page)
						translate: `0 calc((var(--dock-scale, 1) - 1) * ${
							nameOnTop ? -TILE_PX / 2 : TILE_PX / 2
						}px)`,
						transition: `translate var(--dock-scale-timing, ${glide.duration}ms ${glide.easing})`
					}}
				>
					<span
						ref={nameRef}
						data-flyout-name=''
						data-text={sub.text}
						// No card of its own: text on the panel. A long name
						// wraps, split evenly, so it stays as compact as its
						// tile; never cut short. The ::after holds room for the
						// bold it turns on hover, so the measured width (and
						// with it every column after) never moves.
						className={cn(
							'lw:block lw:px-2 lw:py-0 lw:text-center lw:text-[0.75rem] lw:leading-4 lw:text-balance lw:transition-colors lw:duration-150',
							'lw:after:invisible lw:after:block lw:after:h-0 lw:after:overflow-hidden lw:after:font-semibold lw:after:content-[attr(data-text)]',
							active ? 'lw:font-semibold' : 'lw:font-medium',
							'lw:group-has-[[data-dock-hovered]]/tile:font-semibold lw:[[role=menu]:not(:has([data-dock-hovered]))_[role=menuitem]:hover_&]:font-semibold lw:group-focus-visible/tile:font-semibold',
							REDUCED_MOTION_NONE
						)}
						style={{
							maxWidth: NAME_MAX_PX,
							color: active ? accentText : nameColor,
							...enter
						}}
					>
						{sub.text}
					</span>
				</span>
			</a>
		);
	}
);
FlyoutTile.displayName = 'FlyoutTile';

export default SidebarFlyout;
