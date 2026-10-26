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
	GLASS_RADIUS_PX,
	REDUCED_MOTION,
	glassLabelSx,
	tileIn
} from './liquidGlass';
import { useDockMagnify } from './useDockMagnify';
import { flattenLeaves, isInAppClick, isSubLinkActive } from './sidebarUtils';

/** Each page's icon tile: a step up from the rail's buttons, room for its
 * larger glyph. */
const TILE_PX = 52;
const TILE_ICON_PX = 36;
/** Round tiles: a circle as wide as the tile. */
const TILE_RADIUS_PX = TILE_PX / 2;
const TILE_SELECTOR = '[data-flyout-tile]';
/** A page's column: its tile and its name, one above the other. */
const ROW_GAP_PX = 4;
/** One line of a name: the names' row is never shorter. */
const NAME_LINE_PX = 16;
/** A name wider than this wraps onto two lines (two at most). */
const NAME_MAX_PX = 104;
/** The space between neighbours along each row. */
const ITEM_GAP_PX = 6;
/** Everything else a tile animates, kept while the dock drives its scale. */
const TILE_TRANSITION =
	'background 160ms ease, color 160ms ease, transform 120ms ease';
/** Space between the rail's edge and the tiles' frosted panel. */
const PANEL_GAP_PX = 10;
/** The frosted panel's padding around the tiles. */
const STAGE_PADDING_PX = 10;
/** The tiles well up one after another. */
const TILE_STAGGER_MS = 18;
/** How far the group's rail icon swells as its tiles open: a gentler gel
 * than a press, so moving between groups doesn't jiggle the rail. */
const ANCHOR_SWELL_SCALE = 1.08;
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
			gelSwell(anchor, ANCHOR_SWELL_SCALE);
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
		// Grown as far as the rail's icons, so the neighbours make room
		carrierSelector: '[role="menuitem"]'
	});

	// The rows are packed by their names' widths (see `zigzagLayout`). Measured
	// before paint, and again if the names change size (a web font
	// arriving).
	const nameRefs = React.useRef<Array<HTMLElement | null>>([]);
	const [nameSizes, setNameSizes] = React.useState<number[][]>([]);
	React.useLayoutEffect(() => {
		const measure = () => {
			const next = leaves.map((_, i) => [
				nameRefs.current[i]?.offsetWidth ?? 0,
				nameRefs.current[i]?.offsetHeight ?? 0
			]);
			setNameSizes(prev =>
				prev.length === next.length &&
				prev.every(([w, h], i) => w === next[i][0] && h === next[i][1])
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
	const layout = zigzagLayout(
		nameSizes.map(([w]) => w),
		leaves.length
	);
	// The names' row: as tall as the tallest name (two lines when one wraps)
	const nameRowPx = Math.max(NAME_LINE_PX, ...nameSizes.map(([, h]) => h));

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
	const labelColor = theme.palette.text.primary;
	const iconColor = isDark ? theme.palette.text.primary : accentColor;

	return (
		<>
			<Fade in={open} timeout={{ enter: 220, exit: 200 }} unmountOnExit>
				<Box
					data-testid='sidebar-flyout-scrim'
					data-flyout-scrim=''
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
						// The flyout's only surface: a wash from the rail across
						// the page, strongest behind the tiles, fading to the right
						background: isDark
							? 'linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)'
							: 'linear-gradient(90deg, rgba(236, 239, 243, 0.97) 0%, rgba(236, 239, 243, 0.9) 30%, rgba(236, 239, 243, 0.6) 55%, rgba(236, 239, 243, 0.2) 100%)'
					}}
				/>
			</Fade>
			<Popper
				open={open}
				anchorEl={virtualAnchor ?? lastAnchor.current}
				placement='right'
				transition
				modifiers={[
					// Both rows centred on the rail icon, a gap from the rail
					{
						name: 'offset',
						options: { offset: [0, PANEL_GAP_PX] }
					},
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
					<FlyoutStage
						in={TransitionProps?.in ?? open}
						onEnter={TransitionProps?.onEnter}
						onExited={TransitionProps?.onExited}
						panelProps={panelProps}
						groupText={shown?.group.text}
					>
						{shown ? (
							<Box
								key={`${shown.key}-heading`}
								aria-hidden
								data-testid='sidebar-flyout-heading'
								sx={{
									// Above the tiles, so they stay centred on the
									// rail icon; the row's name already labels it
									position: 'absolute',
									bottom: '100%',
									left: STAGE_PADDING_PX,
									mb: '2px',
									whiteSpace: 'nowrap',
									pointerEvents: 'none',
									fontSize: '0.75rem',
									fontWeight: 600,
									letterSpacing: '0.08em',
									textTransform: 'uppercase',
									// The pages' own name colour
									color: glassLabelSx(isDark).color
								}}
							>
								{shown.group.text}
							</Box>
						) : null}
						{shown ? (
							<Box
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
								sx={{
									position: 'relative',
									width: layout.width,
									height: TILE_PX + ROW_GAP_PX + nameRowPx,
									// The panel stretches as the dock pushes
									// the pages along, as the Dock's shelf does
									mr: 'var(--dock-spread, 0px)',
									transition: `margin-right ${glide.duration}ms ${glide.easing}`,
									[REDUCED_MOTION]: { transition: 'none' }
								}}
							>
								{leaves.map(({ sub, icon }, index) => (
									<FlyoutTile
										key={sub.path}
										ref={el => {
											tileRefs.current[index] = el;
										}}
										nameRef={el => {
											nameRefs.current[index] = el;
										}}
										tileLeft={layout.tiles[index]}
										nameLeft={layout.names[index]}
										nameRowPx={nameRowPx}
										sub={sub}
										icon={icon}
										index={index}
										active={isSubLinkActive(
											sub,
											activePath
										)}
										tabIndex={index === focusIndex ? 0 : -1}
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
							</Box>
						) : null}
					</FlyoutStage>
				)}
			</Popper>
		</>
	);
};

interface FlyoutStageProps {
	in: boolean;
	onEnter?: () => void;
	onExited?: () => void;
	panelProps: SidebarFlyoutProps['panelProps'];
	groupText?: string;
	children: React.ReactNode;
}

/**
 * Holds the tiles beside the rail — no surface of its own, each tile and
 * name carries its own. Slides in as the tiles well up one after another,
 * fades out on close, then lets Popper unmount.
 */
const FlyoutStage: React.FC<FlyoutStageProps> = ({
	in: inProp,
	onEnter,
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

	// Opening, and reopening while it was still fading out
	React.useLayoutEffect(() => {
		const container = containerRef.current;
		cancelAnimations(container);
		if (inProp) {
			onEnter?.();
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
		container
			.animate([{ opacity: 1 }, { opacity: 0 }], {
				duration: 120,
				easing: 'ease-in',
				fill: 'forwards'
			})
			.finished.then(() => onExited?.())
			.catch(() => undefined);
		// The motion runs per open/close, not per render
	}, [inProp]);

	return (
		<Box
			ref={setContainerRef}
			onMouseEnter={panelProps.onMouseEnter}
			onMouseLeave={panelProps.onMouseLeave}
			data-testid='sidebar-flyout'
			data-group={groupText}
			sx={{
				position: 'relative',
				// No surface of its own: the scrim's gradient sits behind it.
				// A tile the dock grows pops out past it.
				p: `${STAGE_PADDING_PX}px`,
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
			{children}
		</Box>
	);
};

/** Whether a page's name sits above its tile: every other page's, so the
 * rows zigzag. */
const nameOnTopAt = (index: number) => index % 2 === 1;

/**
 * Where each page's tile and name sit, as left edges in the row (tiles in
 * one row, names in the other; see `nameOnTopAt`). A page's tile and name
 * share one centre. Each page sits as close to the
 * one before as both rows allow, so the tighter row keeps the gap and the
 * other row takes up the difference.
 */
const zigzagLayout = (widths: number[], count: number) => {
	const tiles: number[] = [];
	const names: number[] = [];
	let topEnd = -ITEM_GAP_PX;
	let bottomEnd = -ITEM_GAP_PX;
	// The rows interlock (a tile reaches into the other row's band), so
	// neighbouring tiles keep the gap between them too
	let tileEnd = -ITEM_GAP_PX;
	for (let i = 0; i < count; i += 1) {
		const name = widths[i] || TILE_PX;
		const tileOnTop = !nameOnTopAt(i);
		const topWidth = tileOnTop ? TILE_PX : name;
		const bottomWidth = tileOnTop ? name : TILE_PX;
		const centre = Math.max(
			topEnd + ITEM_GAP_PX + topWidth / 2,
			bottomEnd + ITEM_GAP_PX + bottomWidth / 2,
			tileEnd + ITEM_GAP_PX + TILE_PX / 2
		);
		topEnd = centre + topWidth / 2;
		bottomEnd = centre + bottomWidth / 2;
		tileEnd = centre + TILE_PX / 2;
		tiles.push(Math.round(centre - TILE_PX / 2));
		names.push(Math.round(centre - name / 2));
	}
	return { tiles, names, width: Math.round(Math.max(topEnd, bottomEnd, 0)) };
};

interface FlyoutTileProps {
	/** The name's pill, measured to pack the rows. */
	nameRef: React.Ref<HTMLSpanElement>;
	/** Left edges of the tile and the name in the row (`zigzagLayout`). */
	tileLeft: number;
	nameLeft: number;
	/** The height of the names' row: the rows interlock by it. */
	nameRowPx: number;
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
 * one over the other, placed by `zigzagLayout`. The link spans the row but
 * only its tile and name take the pointer, so neighbours never steal each
 * other's hover. A link to the page, so it opens in a new tab too.
 */
const FlyoutTile = React.forwardRef<HTMLAnchorElement, FlyoutTileProps>(
	(
		{
			nameRef,
			tileLeft,
			nameLeft,
			nameRowPx,
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
		const card = glassLabelSx(isDark, surface);
		const enter = {
			animation: `${tileIn} ${morph.duration}ms ${morph.easing} both`,
			animationDelay: `${index * TILE_STAGGER_MS}ms`,
			[REDUCED_MOTION]: { animation: 'none' }
		};
		// The current page: the accent, solid, its icon and text in the
		// accent's foreground — as the current page on the rail
		const fill = {
			background: activeBackgroundColor ?? accentColor,
			color: activeForegroundColor,
			'& .MuiSvgIcon-root': { color: activeForegroundColor }
		};
		// Hovered or focused, the tile and its name take the rail's hover
		// colour — a tint of the accent, whatever the accent is — mixed into
		// the surface so it is solid rather than see-through
		const hover = {
			background: `color-mix(in srgb, ${accentColor} ${isDark ? 20 : 12}%, ${surface})`
		};
		// A name is plain text on the panel: it takes the accent on hover
		// (the light theme's accent; on dark glass, the text colour reads)
		const accentText = isDark ? card.color : accentColor;
		const lit = {
			'& [data-flyout-tile]': active ? {} : hover,
			'& [data-flyout-name]': { color: accentText, fontWeight: 600 }
		};
		// Cards of their own: a surface and a soft shadow, no edge
		const cardSx = {
			...card,
			border: 'none',
			// Lifted a little more than a resting label: they float over
			// the page
			boxShadow: isDark
				? '0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)'
				: '0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)'
		};
		return (
			<ButtonBase
				ref={ref}
				component='a'
				href={sub.path}
				role='menuitem'
				tabIndex={tabIndex}
				aria-current={active ? 'page' : undefined}
				data-testid={`sidebar-subitem-${sub.text}`}
				data-active={active ? 'true' : 'false'}
				onClick={onClick}
				onKeyDown={onKeyDown}
				onFocus={onFocus}
				disableRipple
				sx={{
					position: 'absolute',
					inset: 0,
					display: 'block',
					pointerEvents: 'none',
					'& [data-flyout-tile], & [data-flyout-slot], & [data-flyout-bridge]':
						{
							position: 'absolute',
							pointerEvents: 'auto'
						},
					color: labelColor,
					textDecoration: 'none',
					'&:hover': lit,
					'&.Mui-focusVisible': {
						...lit,
						'& [data-flyout-tile]': {
							...(active ? {} : hover),
							outline: '2px solid',
							outlineColor: accentColor,
							outlineOffset: 2
						}
					},
					'&:active [data-flyout-tile]': { transform: 'scale(0.94)' },
					[REDUCED_MOTION]: {
						'&:active [data-flyout-tile]': { transform: 'none' }
					}
				}}
			>
				{/* The page's whole column, name to tile, is the link: no gap
				    between them (or round the tile's corners) drops the hover.
				    Tiles never share a column, so it reaches no neighbour. */}
				<Box
					data-flyout-bridge=''
					aria-hidden
					sx={{
						left: tileLeft,
						top: 0,
						width: TILE_PX,
						height: '100%'
					}}
				/>
				<Box
					data-flyout-tile=''
					sx={{
						...cardSx,
						left: tileLeft,
						top: nameOnTop ? nameRowPx + ROW_GAP_PX : 0,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						boxSizing: 'border-box',
						width: TILE_PX,
						height: TILE_PX,
						p: 0,
						borderRadius: `${TILE_RADIUS_PX}px`,
						// Grows out of the row, away from its name
						transformOrigin: nameOnTop
							? 'center top'
							: 'center bottom',
						transition: `scale ${glide.duration}ms ${glide.easing}, ${TILE_TRANSITION}`,
						'& .MuiSvgIcon-root': {
							fontSize: TILE_ICON_PX,
							color: iconColor,
							transition: 'color 160ms ease'
						},
						// A host's own glyph (an image in a `role="img"` box)
						// takes the same size
						'& [role="img"], & [role="img"] > img': {
							width: TILE_ICON_PX,
							height: TILE_ICON_PX
						},
						...(active ? fill : {}),
						...enter
					}}
				>
					{icon}
				</Box>
				{/* The name, centred in a row as tall as a tile */}
				<Box
					data-flyout-slot=''
					sx={{
						left: nameLeft,
						top: nameOnTop ? 0 : TILE_PX + ROW_GAP_PX,
						height: nameRowPx,
						display: 'flex',
						// Held against its own tile, not floating mid-row
						alignItems: nameOnTop ? 'flex-end' : 'flex-start'
					}}
				>
					<Box
						component='span'
						ref={nameRef}
						data-flyout-name=''
						data-text={sub.text}
						sx={{
							// No card of its own: text on the panel
							color: card.color,
							px: 1,
							py: 0,
							fontSize: '0.75rem',
							lineHeight: '16px',
							// A long name wraps onto a second line, split
							// evenly, so it stays as compact as its tile
							maxWidth: NAME_MAX_PX,
							textAlign: 'center',
							textWrap: 'balance',
							display: '-webkit-box',
							WebkitBoxOrient: 'vertical',
							WebkitLineClamp: 2,
							overflow: 'hidden',
							fontWeight: active ? 600 : 500,
							// Room for the bold it turns on hover, held from
							// the start, so the measured width (and with it
							// every column after) never moves
							'&::after': {
								content: 'attr(data-text)',
								display: 'block',
								fontWeight: 600,
								height: 0,
								overflow: 'hidden',
								visibility: 'hidden'
							},
							...(active ? { color: accentText } : {}),
							transition: 'color 160ms ease',
							...enter
						}}
					>
						{sub.text}
					</Box>
				</Box>
			</ButtonBase>
		);
	}
);
FlyoutTile.displayName = 'FlyoutTile';

export default SidebarFlyout;
