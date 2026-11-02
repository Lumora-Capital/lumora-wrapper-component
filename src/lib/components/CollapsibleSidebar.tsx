import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from 'lucide-react';
import * as React from 'react';
import { cn } from '../utils';
import Brand from './Brand';
import type { SidebarLink, SidebarSubLink } from './LumoraWrapper';
import {
	RAIL_ITEM_ATTR,
	RAIL_ITEM_SELECTOR,
	RailGlassContext,
	useActiveGlass,
	useRailLens
} from './RailLens';
import SidebarFlyout from './SidebarFlyout';
import { GEL_SPRING, springTiming } from './glassMotion';
import {
	REDUCED_MOTION_NONE,
	glassLabel,
	SidebarSurfaceContext
} from './liquidGlass';
import { useIsDark } from './shellTheme';
import {
	deriveGroupTint,
	flattenLeaves,
	getContrastText,
	hasChildren,
	isSidebarLinkActive,
	isInAppClick,
	isSubLinkActive,
	nodeKey
} from './sidebarUtils';
import {
	FLOATING_RAIL_GAP_PX,
	FLOATING_RAIL_ITEM_PX,
	FLOATING_RAIL_WIDTH_PX,
	RAIL_MAX_SCALE,
	resolveSidebarSurface
} from './shellLayout';
import { Separator } from './ui/separator';
import { Tooltip } from './ui/tooltip';
import useFlyoutIntent from './useFlyoutIntent';
import { useDockMagnify } from './useDockMagnify';

const DEFAULT_EXPANDED_WIDTH_PX = 264;
const DEFAULT_COLLAPSED_WIDTH_PX = 72;
/** In-sidebar header height (the brand). */
const HEADER_HEIGHT_PX = 64;
/** Host apps (and the demo's base CSS) often outline every `button:focus`,
 * which lingers after a mouse click — neutralize it on all sidebar icon
 * buttons (same treatment as the navbar hamburger). */
const FOCUS_OUTLINE_FIX =
	'lw:outline-none lw:focus:outline-none lw:focus-visible:outline-none';
/** Chevron indicator size; kept clearly smaller than the item's own icon. */
const CHEVRON_FONT_SIZE_PX = 16;
/** Subtler chevron beneath the icon on the narrow collapsed rail. */
const CHEVRON_FONT_SIZE_RAIL_PX = 14;
/** Left inset (px) of an expanded child row, and how much each further level adds. */
const CHILD_INDENT_PX = 32;
const CHILD_INDENT_STEP_PX = 20;
/** Caption + icon sizing for the narrow (80px) labeled rail, tuned so labels
 * like "Analytics" / "Knowledge" stay legible without overflowing. */
const RAIL_LABEL_FONT_SIZE = '0.7rem';
const railGel = springTiming(GEL_SPRING);
/** MUI's action.hover: the quiet wash a nested row takes on hover. */
const ACTION_HOVER = 'var(--lw-hover-wash)';
/** The text colour on a dark surface (MUI's dark text.primary). */
const DARK_TEXT = '#ffffff';

/**
 * A row's colours at rest (inline, so they can be any runtime colour) and on
 * hover (variables read by important hover classes, which beat the inline
 * rest colours). Leave `hover` out for no change on hover.
 */
const rowColors = (
	rest: { fg?: string; bg?: string },
	hover?: { fg?: string; bg?: string; radius?: string }
): { className: string; style: React.CSSProperties } => ({
	className: cn(
		hover?.bg && 'lw:hover:bg-(--lw-row-hover-bg)!',
		hover?.fg && 'lw:hover:text-(--lw-row-hover-fg)!',
		hover?.radius && 'lw:hover:rounded-(--lw-row-hover-radius)!'
	),
	style: {
		color: rest.fg,
		backgroundColor: rest.bg ?? 'transparent',
		...(hover?.bg ? { '--lw-row-hover-bg': hover.bg } : {}),
		...(hover?.fg ? { '--lw-row-hover-fg': hover.fg } : {}),
		...(hover?.radius ? { '--lw-row-hover-radius': hover.radius } : {})
	} as React.CSSProperties
});

/** A row that is a link when it has a path, else a button. */
type RowProps = React.HTMLAttributes<HTMLElement> & {
	href?: string;
	disabled?: boolean;
	[data: `data-${string}`]: string | undefined;
};
const RowControl = React.forwardRef<HTMLElement, RowProps>(
	({ href, disabled, ...rest }, ref) =>
		href ? (
			<a
				ref={ref as React.Ref<HTMLAnchorElement>}
				href={href}
				{...rest}
			/>
		) : (
			<button
				ref={ref as React.Ref<HTMLButtonElement>}
				type='button'
				disabled={disabled}
				{...rest}
			/>
		)
);
RowControl.displayName = 'RowControl';

/** The expanded rows' frame (MUI ListItemButton). */
const LIST_ROW_CLASS =
	'lw:relative lw:flex lw:w-full lw:min-w-0 lw:grow lw:items-center lw:justify-start lw:text-left lw:no-underline lw:transition-colors lw:duration-150 lw:outline-none lw:focus-visible:bg-selected lw:disabled:opacity-40';
/** The row's leading icon (MUI ListItemIcon); its min-width is per row. */
const LIST_ICON_CLASS =
	'lw:inline-flex lw:shrink-0 lw:text-inherit lw:[&_svg]:size-6';
/** The row's label column (MUI ListItemText). */
const LIST_TEXT_CLASS = 'lw:my-1 lw:min-w-0 lw:flex-auto';
/** The icon-button frame (MUI IconButton). */
const ICON_BUTTON_CLASS = cn(
	'lw:relative lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:p-2 lw:transition-[background-color,border-radius,color] lw:duration-150 lw:disabled:opacity-40 lw:[&_svg]:size-6',
	FOCUS_OUTLINE_FIX
);

/**
 * Row/caption label that ellipsizes when it overflows and reveals the full text
 * as a tooltip only while truncated (same pattern as MenuContent's rail caption).
 * `variant='caption'` + `center` render the stacked caption used beneath icons on
 * the narrow labeled rail.
 */
const TruncatingLabel: React.FC<{
	text: string;
	variant?: 'body1' | 'caption';
	center?: boolean;
	fontSize?: string | number;
	fontWeight?: number;
}> = ({ text, variant = 'body1', center = false, fontSize, fontWeight }) => {
	const ref = React.useRef<HTMLSpanElement>(null);
	const [truncated, setTruncated] = React.useState(false);

	const measure = React.useCallback(() => {
		const el = ref.current;
		if (!el) {
			return;
		}
		setTruncated(el.scrollWidth > el.clientWidth + 0.5);
	}, []);

	React.useLayoutEffect(() => {
		measure();
	}, [measure, text]);

	React.useEffect(() => {
		const el = ref.current;
		if (!el) {
			return undefined;
		}
		const ro = new ResizeObserver(() => measure());
		ro.observe(el);
		return () => ro.disconnect();
	}, [measure]);

	return (
		<Tooltip
			title={text}
			side='right'
			arrow
			delayDuration={400}
			disabled={!truncated}
		>
			<span
				ref={ref}
				className={cn(
					'lw:block lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap lw:text-inherit',
					variant === 'caption'
						? 'lw:text-xs lw:leading-[1.66]'
						: 'lw:text-sm lw:leading-normal',
					center && 'lw:w-full lw:text-center lw:leading-[1.1]'
				)}
				style={{
					...(fontSize ? { fontSize } : {}),
					...(fontWeight ? { fontWeight } : {})
				}}
			>
				{text}
			</span>
		</Tooltip>
	);
};

/** The glass rail's group arrow: a right-pointing triangle, its corners
 * rounded 0.5px (a 1px round-joined stroke around the shape). */
const GROUP_ARROW_MASK = `url("data:image/svg+xml,${encodeURIComponent(
	"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`;

/** How far the group arrow sits past its button's right edge: within the
 * floating rail's 10px gutter. */
const GROUP_ARROW_OUTSET_PX = 4;

/**
 * The group arrow's outset beside a scrollbar `bar` px wide. A classic bar
 * takes the gutter the arrow sits in (and clips it), so the arrow draws
 * back by as much, at most to just inside the button's edge: the room
 * there beside the centred icon still keeps it clear.
 */
const groupArrowOutset = (bar: number) =>
	Math.max(0, Math.min(GROUP_ARROW_OUTSET_PX, FLOATING_RAIL_INSET_PX - bar));

/** Small up/down chevron marking a parent on the narrow rails. */
const GroupChevron: React.FC<{ open: boolean; size?: number }> = ({
	open,
	size = CHEVRON_FONT_SIZE_PX
}) => {
	const Icon = open ? ChevronUpIcon : ChevronDownIcon;
	return (
		<Icon
			aria-hidden
			className='lw:shrink-0 lw:opacity-75'
			style={{ width: size, height: size }}
		/>
	);
};

/** Expanded rows: a right chevron that turns down while the group is open. */
const RowChevron: React.FC<{ open: boolean }> = ({ open }) => (
	<ChevronRightIcon
		aria-hidden
		className={cn(
			'lw:size-5! lw:shrink-0 lw:opacity-75 lw:transition-transform lw:duration-150',
			open && 'lw:rotate-90'
		)}
	/>
);

/** Page-link label weight in the expanded panel. */
const ROW_LABEL_WEIGHT = 600;

/** The floating rail spaces everything by one gap: each section boundary
 * (brand, top content, links, bottom group, footer) takes it once in place of
 * its own padding. */
const railGap = `${FLOATING_RAIL_GAP_PX}px`;

/** The floating rail's side padding, matching its top content and footer. */
const FLOATING_RAIL_INSET_PX =
	(FLOATING_RAIL_WIDTH_PX - FLOATING_RAIL_ITEM_PX) / 2;

/**
 * The floating rail scroller's side padding for a bar `bar` px wide. The
 * bar takes the right padding's place; up to the inset the gaps either
 * side of the column stay equal. A wider bar leaves less room than the
 * column needs, so the left padding gives way by the same amount.
 */
const railScrollerPadding = (bar: number) => {
	const overflow = Math.max(0, bar - FLOATING_RAIL_INSET_PX);
	return {
		paddingLeft: `${Math.max(0, FLOATING_RAIL_INSET_PX - overflow)}px`,
		paddingRight: `${Math.max(0, FLOATING_RAIL_INSET_PX - bar)}px`
	};
};

/**
 * Width the scroller's vertical bar actually takes from its content: 0 for
 * overlay bars or while nothing overflows, the bar's width for a classic
 * one. Re-measured as the scroller (or its content box, when a bar
 * appears) changes size.
 */
function useScrollbarWidth(
	scrollRef: React.RefObject<HTMLElement | null>,
	enabled: boolean
) {
	const [width, setWidth] = React.useState(0);
	React.useLayoutEffect(() => {
		const el = scrollRef.current;
		if (!enabled || !el) {
			setWidth(0);
			return;
		}
		const measure = () => {
			const style = getComputedStyle(el);
			const borders =
				parseFloat(style.borderLeftWidth) +
				parseFloat(style.borderRightWidth);
			setWidth(Math.max(0, el.offsetWidth - el.clientWidth - borders));
		};
		measure();
		if (typeof ResizeObserver === 'undefined') return;
		const observer = new ResizeObserver(measure);
		observer.observe(el);
		// The bar appearing shrinks the content, not the scroller itself
		if (el.firstElementChild) observer.observe(el.firstElementChild);
		return () => observer.disconnect();
	}, [scrollRef, enabled]);
	return width;
}

/**
 * Whether the scroller's links are longer than it, at rest: from layout
 * sizes, which a scale or transform on an item never changes. While they
 * fit, the scroller doesn't scroll at all, so a hover swell or gel reaching
 * past its end can't flash its scrollbar.
 */
function useOverflowsAtRest(scrollRef: React.RefObject<HTMLElement | null>) {
	const [overflows, setOverflows] = React.useState(false);
	React.useLayoutEffect(() => {
		const el = scrollRef.current;
		const links = el?.firstElementChild as HTMLElement | null | undefined;
		if (!el || !links) return;
		const measure = () => {
			const style = getComputedStyle(el);
			const content =
				links.offsetHeight +
				parseFloat(style.paddingTop) +
				parseFloat(style.paddingBottom);
			setOverflows(content > el.clientHeight + 0.5);
		};
		measure();
		if (typeof ResizeObserver === 'undefined') return;
		const observer = new ResizeObserver(measure);
		observer.observe(el);
		observer.observe(links);
		return () => observer.disconnect();
	}, [scrollRef]);
	return overflows;
}

/** Gap kept between the active item and the scroller's edge when revealing it. */
const ACTIVE_SCROLL_MARGIN = 8;

/**
 * Keeps the active item inside the links' scroll container: on navigation,
 * on collapse/expand, and whenever the scroller's own height changes (a
 * shorter window). Only scrolls when the item is out of view, so a user who
 * scrolled away isn't yanked back until something changes.
 */
function useKeepActiveInView(
	scrollRef: React.RefObject<HTMLElement | null>,
	activePath: string | undefined,
	collapsed: boolean
) {
	React.useEffect(() => {
		const scroller = scrollRef.current;
		if (!scroller) return;

		const reveal = (behavior: ScrollBehavior) => {
			// The deepest visible active row: a group and its active child are
			// both marked, and a closed group's children measure 0 tall.
			const active = Array.from(
				scroller.querySelectorAll<HTMLElement>('[data-active="true"]')
			)
				.filter(el => el.offsetHeight > 0)
				.pop();
			if (!active) return;
			const view = scroller.getBoundingClientRect();
			const item = active.getBoundingClientRect();
			let delta = 0;
			if (item.top < view.top + ACTIVE_SCROLL_MARGIN) {
				delta = item.top - view.top - ACTIVE_SCROLL_MARGIN;
			} else if (item.bottom > view.bottom - ACTIVE_SCROLL_MARGIN) {
				delta = item.bottom - view.bottom + ACTIVE_SCROLL_MARGIN;
			}
			if (delta !== 0) scroller.scrollBy({ top: delta, behavior });
		};

		const frame = requestAnimationFrame(() => reveal('smooth'));
		// Again once an opening group's Collapse has settled.
		const settle = window.setTimeout(() => reveal('smooth'), 350);
		const observer =
			typeof ResizeObserver === 'undefined'
				? null
				: new ResizeObserver(() => reveal('auto'));
		observer?.observe(scroller);
		return () => {
			cancelAnimationFrame(frame);
			window.clearTimeout(settle);
			observer?.disconnect();
		};
	}, [scrollRef, activePath, collapsed]);
}

export interface CollapsibleSidebarProps {
	mainLinks: SidebarLink[];
	/** Bottom group; rendered after a divider and pinned to the bottom. */
	secondaryLinks?: SidebarLink[];
	activePath?: string;
	onLinkClick?: (path: string) => void;
	/** Called after a row's `action` runs, e.g. to close the mobile menu. */
	onLinkAction?: () => void;
	// Branding (lives inside the sidebar header bar; see `showHeaderBar`)
	/** Brand logo, rendered in the header bar while expanded. */
	logo?: React.ReactNode;
	/** App title wordmark (uppercased); shown in the header bar while expanded. */
	title?: string;
	/** Makes the header-bar brand (title + logo) a button. */
	onBrandClick?: (event: React.MouseEvent<HTMLElement>) => void;
	/** Whether the brand's platform menu is open; left out, it has none. */
	brandMenuOpen?: boolean;
	/** @deprecated Never rendered — the section header row was dropped. */
	sectionTitle?: string;
	/**
	 * Render the 64px in-sidebar header bar (the brand). Used
	 * by the full-height collapsible layout; off by default so the labeled rail
	 * and existing consumers are unaffected. When on, `topInsetPx` is ignored —
	 * the header itself occupies the top of the surface.
	 */
	showHeaderBar?: boolean;
	/** Header bar background; defaults to the sidebar surface color. */
	headerBackgroundColor?: string;
	/**
	 * Header bar foreground (wordmark + logo). Defaults to the idle
	 * accent-on-surface tint (see `foregroundColor`) when the header shares the
	 * sidebar surface, and to auto-contrast from `headerBackgroundColor` when
	 * one is given. Auto-contrast only parses hex colors — set this explicitly
	 * when the header background is a non-hex value.
	 */
	headerForegroundColor?: string;
	/** Wordmark + logo tint in the header; defaults to `headerForegroundColor`. */
	brandColor?: string;
	// Prop-driven accents
	/** Solid background of the highlighted item — shared by the active item and
	 * any item on hover (default '#01584f'). */
	activeAccentColor?: string;
	/** Fill of the highlighted item alone, when it should differ from
	 * `activeAccentColor` (which also tints the idle icons and text). */
	activeBackgroundColor?: string;
	/** The glass rail's group arrow; defaults to the icon colour, softened. */
	groupArrowColor?: string;
	/** Light tint for a parent's child group (default derived). */
	groupAccentColor?: string;
	/** Foreground of the highlighted item (active or hovered); default
	 * auto-contrast from the accent. */
	activeForegroundColor?: string;
	/** Idle (inactive) text/icon color on the surface. Defaults to the accent in
	 * light mode and the theme text color on a dark surface. Set this to tint
	 * idle labels independently of the active highlight (e.g. a light teal on a
	 * dark rail whose active item is a darker solid green). */
	foregroundColor?: string;
	/** Sidebar surface background (default '#ffffff'). */
	surfaceBackgroundColor?: string;
	/**
	 * Flyout panel surface (`submenuMode="flyout"`); defaults to the sidebar
	 * surface. Set it when the rail's own surface is see-through.
	 */
	flyoutSurfaceColor?: string;
	// Collapse / expand
	/** Icon rail when true; the owner decides when (e.g. on hover). */
	collapsed?: boolean;
	/** Expanded width: px, or any CSS width (e.g. '100%' in a bottom sheet). */
	expandedWidth?: number | string;
	collapsedWidth?: number;
	/**
	 * When collapsed, show `link.text` as a caption beneath each icon instead of
	 * icon-only + tooltip. Used by the non-collapsible `rail-labeled` layout.
	 */
	showLabels?: boolean;
	/**
	 * Top padding (px) above the links when there is no header bar, e.g. to
	 * clear a host app's own fixed top bar.
	 */
	topInsetPx?: number;
	/**
	 * Rendered between the brand and the links (e.g. an assistant launcher and
	 * a global search). The owner decides what to show for the collapsed state.
	 */
	topContent?: React.ReactNode;
	/** Pinned below the links, outside the scroll area (e.g. notifications + user). */
	footer?: React.ReactNode;
	/**
	 * How the collapsed icon rail shows a group's pages. `'inline'` (default)
	 * stacks their icons under the group's; `'flyout'` opens them on hover as a
	 * row of glass tiles beside the rail, over a dim of the page, and the rail
	 * labels become hover labels. Applies to the icon-only rail (`collapsed`
	 * without `showLabels`).
	 */
	submenuMode?: 'inline' | 'flyout';
}

const CollapsibleSidebar: React.FC<CollapsibleSidebarProps> = ({
	mainLinks,
	secondaryLinks = [],
	activePath,
	onLinkClick,
	onLinkAction,
	logo,
	title,
	onBrandClick,
	brandMenuOpen,
	showHeaderBar = false,
	headerBackgroundColor,
	headerForegroundColor,
	brandColor,
	activeAccentColor: activeAccent = '#01584f',
	activeBackgroundColor,
	groupArrowColor,
	groupAccentColor,
	activeForegroundColor,
	foregroundColor,
	surfaceBackgroundColor,
	flyoutSurfaceColor,
	collapsed = false,
	expandedWidth = DEFAULT_EXPANDED_WIDTH_PX,
	collapsedWidth = DEFAULT_COLLAPSED_WIDTH_PX,
	showLabels = false,
	topInsetPx = 0,
	topContent,
	footer,
	submenuMode = 'inline'
}) => {
	const isDark = useIsDark();
	const labelSurface = React.useContext(SidebarSurfaceContext);
	const useFlyout = submenuMode === 'flyout' && collapsed && !showLabels;
	const flyout = useFlyoutIntent(useFlyout);
	const navRef = React.useRef<HTMLElement>(null);
	// The links, inside their scroll container. The active drop lives here, so
	// it scrolls with its item and is clipped with the links instead of
	// resting on the footer when a short window scrolls the rail.
	const linksRef = React.useRef<HTMLDivElement>(null);
	const scrollRef = React.useRef<HTMLDivElement>(null);
	useKeepActiveInView(scrollRef, activePath, collapsed);
	const railScrollbarPx = useScrollbarWidth(scrollRef, useFlyout);
	const linksOverflow = useOverflowsAtRest(scrollRef);
	const railLens = useRailLens(useFlyout, isDark, flyout.state?.key ?? null);
	// The Dock's magnification down the rail, as the flyout's tiles have it:
	// each button swells whole around the pointer, its hover lens and
	// current-page fill with it (RailLens). Less than the tiles, and in
	// place: nothing slides, so the rail's groups never run into each other
	const railMagnify = useDockMagnify(navRef, {
		enabled: useFlyout,
		axis: 'y',
		itemSelector: RAIL_ITEM_SELECTOR,
		maxScale: RAIL_MAX_SCALE,
		// One button's pitch: the one under the pointer swells, its
		// neighbours only as the pointer crosses over to them
		reach: FLOATING_RAIL_ITEM_PX + FLOATING_RAIL_GAP_PX,
		// Only 4px of padding at the scroller's ends: the first and last
		// buttons swell less, or the last would scroll the rail
		boundsRef: scrollRef,
		transition: `transform ${railGel.duration}ms ${railGel.easing}, background-color 160ms ease`
	});
	// Both settle when the rail scrolls its items out from under them
	const railContainerProps = {
		...railLens.containerProps,
		...railMagnify.containerProps,
		...(useFlyout
			? {
					onScrollCapture: () => {
						railLens.containerProps.onScrollCapture?.();
						railMagnify.settle();
					}
				}
			: {})
	};
	const activeFill = activeBackgroundColor ?? activeAccent;
	const activeGlass = useActiveGlass({
		enabled: useFlyout,
		isDark,
		color: activeFill,
		containerRef: linksRef
	});
	const { close: closeFlyout } = flyout;
	// A navigation from anywhere (a tile, the browser's back) closes it
	React.useEffect(() => {
		closeFlyout();
	}, [activePath, closeFlyout]);

	// User-toggled open state per group, keyed by `nodeKey`; groups the user
	// hasn't touched follow the active path (see `isGroupOpen`).
	const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>(
		{}
	);

	const activeFg = activeForegroundColor ?? getContrastText(activeFill);
	// The highlighted look: accent fill + active foreground. Applied to the
	// active item in every variant, and — in the rail-labeled layout only
	// (`showLabels`) — to any hovered item, so active and hover match there.
	// The collapsible variant keeps its original subtle idle-hover tint instead.
	const highlight = { bg: activeFill, fg: activeFg };
	const groupTint = groupAccentColor ?? deriveGroupTint(activeAccent);
	// Surface defaults to white in light mode and the shell's dark paper in
	// dark mode; overridable via surfaceBackgroundColor.
	const surface = resolveSidebarSurface(surfaceBackgroundColor, isDark);
	// Accent-colored chrome (brand title, logo, inactive icons) uses the
	// brand accent in light mode (per the mockup); in dark mode the accent is too
	// dim on the dark surface, so fall back to the theme's primary text color.
	// `foregroundColor` overrides this so idle labels can be tinted independently
	// of the active highlight (e.g. teal idle labels over a dark-green active pill).
	const accentOnSurface =
		foregroundColor ?? (isDark ? 'var(--lw-text-primary)' : activeAccent);
	// Header bar chrome. Without a custom header background the header is part
	// of the sidebar surface, so the brand keeps the same accent-on-surface tint
	// as the idle nav chrome (auto-contrast would paint a black brand on the
	// default white surface). A custom header background switches to
	// auto-contrast, which falls back to white for non-hex values (see the
	// headerForegroundColor prop doc). The dark-mode fallback is a real colour
	// rather than the text token so the divider below can still parse it.
	const headerBg = headerBackgroundColor ?? surface;
	const headerFg =
		headerForegroundColor ??
		(headerBackgroundColor
			? getContrastText(headerBg)
			: (foregroundColor ?? (isDark ? DARK_TEXT : activeAccent)));
	// Hairline separating the header from the nav list — the foreground at low
	// alpha so it stays legible on any header color.
	const headerDivider = deriveGroupTint(headerFg);

	const handleClick = (path: string) => {
		onLinkClick?.(path);
	};

	// A page row is a real link, so it can be opened in a new tab (isInAppClick)
	const pageLinkProps = (path: string | undefined) =>
		path
			? {
					href: path,
					onClick: (event: React.MouseEvent) => {
						if (isInAppClick(event)) {
							event.preventDefault();
							handleClick(path);
						}
					}
				}
			: {};

	// Explicit toggle: pass the group's current open state so an auto-opened
	// active group can also be collapsed by the user.
	const toggleGroup = (key: string, open: boolean) => {
		setOpenGroups(prev => ({ ...prev, [key]: !open }));
	};

	// Active groups auto-open; once the user toggles, their choice wins. Keyed
	// by the node's path of texts so a nested section has a chevron of its own.
	const isGroupOpen = (link: SidebarLink | SidebarSubLink, key: string) =>
		openGroups[key] ?? isSidebarLinkActive(link, activePath);

	// --- Expanded rows -----------------------------------------------------
	// Colors shared by every expanded row. rail-labeled: active AND hover share
	// the highlight. collapsible: keep the original subtle idle-hover tint
	// (`idleHoverBg`), with the accent only when active.
	const expandedRowColors = (active: boolean, idleHoverBg: string) =>
		rowColors(
			{
				fg: active ? activeFg : accentOnSurface,
				bg: active ? activeFill : undefined
			},
			active || showLabels ? highlight : { bg: idleHoverBg }
		);

	const renderExpandedLeaf = (link: SidebarLink) => {
		const active = isSubLinkActive(link, activePath);
		const colors = expandedRowColors(active, groupTint);
		const row = (
			<RowControl
				key={link.text}
				disabled={!link.path}
				{...pageLinkProps(link.path)}
				data-testid={`sidebar-item-${link.text}`}
				data-active={active ? 'true' : 'false'}
				data-selected={active ? 'true' : undefined}
				className={cn(
					LIST_ROW_CLASS,
					'lw:rounded-lg lw:px-3',
					link.subtitle ? 'lw:py-2' : 'lw:py-2.5',
					// Room for the action button laid over the row's end
					link.action && 'lw:pr-12',
					colors.className
				)}
				style={colors.style}
			>
				{/* A two-line row usually leads with a larger avatar; give it room */}
				<span
					className={LIST_ICON_CLASS}
					style={{ minWidth: link.subtitle ? 48 : 36 }}
				>
					{link.icon}
				</span>
				<span
					className={cn(LIST_TEXT_CLASS, link.subtitle && 'lw:my-0')}
				>
					<TruncatingLabel
						text={link.text}
						fontWeight={ROW_LABEL_WEIGHT}
					/>
					{link.subtitle ? (
						<span className='lw:block lw:opacity-85'>
							<TruncatingLabel
								text={link.subtitle}
								fontSize='0.8125rem'
							/>
						</span>
					) : null}
				</span>
			</RowControl>
		);
		if (!link.action) {
			return row;
		}
		const { action } = link;
		const actionFg = active ? activeFg : accentOnSurface;
		// A sibling of the row button, not nested in it: two separate controls
		return (
			<div key={link.text} className='lw:relative'>
				{row}
				<Tooltip title={action.label} side='right' arrow>
					<button
						type='button'
						aria-label={action.label}
						data-testid={`sidebar-action-${link.text}`}
						onClick={() => {
							action.onClick();
							onLinkAction?.();
						}}
						className={cn(
							'lw:absolute lw:top-1/2 lw:right-2 lw:inline-flex lw:size-[30px] lw:-translate-y-1/2 lw:items-center lw:justify-center lw:rounded-md lw:border lw:border-solid lw:transition-colors lw:[&_svg]:size-[18px]',
							'lw:hover:bg-(--lw-action-hover-bg)',
							// No lingering outline after a click; a clear ring for keyboard focus
							'lw:focus:outline-none lw:focus-visible:outline-2 lw:focus-visible:outline-offset-1 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-action-ring)'
						)}
						style={
							{
								borderColor: active
									? 'rgba(255, 255, 255, 0.35)'
									: groupTint,
								color: actionFg,
								'--lw-action-hover-bg': active
									? 'rgba(255, 255, 255, 0.15)'
									: groupTint,
								'--lw-action-ring': actionFg
							} as React.CSSProperties
						}
					>
						{action.icon}
					</button>
				</Tooltip>
			</div>
		);
	};

	const renderExpandedGroup = (link: SidebarLink) => {
		// The tinted group container is reserved for the active group (the current
		// URL is the parent or one of its sub-items); a merely toggled-open group
		// reveals its children without the accent background.
		const groupActive = isSidebarLinkActive(link, activePath);
		const parentActive = isSubLinkActive(link, activePath);
		const key = nodeKey('', link);
		const open = isGroupOpen(link, key);
		const colors = expandedRowColors(parentActive, groupTint);

		return (
			<div
				key={link.text}
				data-testid={`sidebar-group-${link.text}`}
				className='lw:rounded-lg'
				style={{
					backgroundColor: groupActive ? groupTint : 'transparent'
				}}
			>
				{/* Clicking the parent row toggles its child group open/closed. */}
				<RowControl
					onClick={() => toggleGroup(key, open)}
					data-testid={`sidebar-item-${link.text}`}
					data-active={parentActive ? 'true' : 'false'}
					aria-expanded={open}
					className={cn(
						LIST_ROW_CLASS,
						'lw:rounded-lg lw:px-3 lw:py-2.5',
						colors.className
					)}
					style={colors.style}
				>
					<span className={LIST_ICON_CLASS} style={{ minWidth: 36 }}>
						{link.icon}
					</span>
					<span className={LIST_TEXT_CLASS}>
						<TruncatingLabel
							text={link.text}
							fontWeight={ROW_LABEL_WEIGHT}
						/>
					</span>
					<RowChevron open={open} />
				</RowControl>
				{open ? (
					<div
						data-testid={`sidebar-children-${link.text}`}
						className='lw:pb-1 lw:animate-in lw:fade-in-0'
					>
						{link.subitems!.map(sub =>
							renderExpandedChild(sub, key, 1)
						)}
					</div>
				) : null}
			</div>
		);
	};

	/**
	 * A child at `depth` levels under a top-level parent (1 = direct child).
	 * A child with children of its own is a section: a row with a chevron that
	 * folds its pages, indented one step further. The tint stays on the
	 * top-level group; a section marks itself only by its chevron.
	 */
	const renderExpandedChild = (
		sub: SidebarSubLink,
		parentKey: string,
		depth: number
	): React.ReactNode => {
		const key = nodeKey(parentKey, sub);
		const indent = CHILD_INDENT_PX + (depth - 1) * CHILD_INDENT_STEP_PX;
		const childRowClass = cn(
			LIST_ROW_CLASS,
			'lw:mx-1 lw:w-[calc(100%-8px)] lw:rounded-lg lw:py-1.5 lw:pr-4'
		);

		if (hasChildren(sub)) {
			const sectionActive = isSidebarLinkActive(sub, activePath);
			const rowActive = isSubLinkActive(sub, activePath);
			const open = isGroupOpen(sub, key);
			const colors = expandedRowColors(rowActive, ACTION_HOVER);
			return (
				<div key={key} data-testid={`sidebar-group-${sub.text}`}>
					<RowControl
						onClick={() => toggleGroup(key, open)}
						data-testid={`sidebar-subitem-${sub.text}`}
						data-active={sectionActive ? 'true' : 'false'}
						aria-expanded={open}
						className={cn(childRowClass, colors.className)}
						style={{ ...colors.style, paddingLeft: indent }}
					>
						{sub.icon ? (
							<span
								className={LIST_ICON_CLASS}
								style={{ minWidth: 32 }}
							>
								{sub.icon}
							</span>
						) : null}
						<span className={LIST_TEXT_CLASS}>
							<TruncatingLabel
								text={sub.text}
								fontWeight={ROW_LABEL_WEIGHT}
							/>
						</span>
						<RowChevron open={open} />
					</RowControl>
					{open ? (
						<div
							data-testid={`sidebar-children-${sub.text}`}
							className='lw:animate-in lw:fade-in-0'
						>
							{sub.subitems!.map(child =>
								renderExpandedChild(child, key, depth + 1)
							)}
						</div>
					) : null}
				</div>
			);
		}

		const active = isSubLinkActive(sub, activePath);
		const colors = expandedRowColors(active, ACTION_HOVER);
		return (
			<RowControl
				key={key}
				disabled={!sub.path}
				{...pageLinkProps(sub.path)}
				data-testid={`sidebar-subitem-${sub.text}`}
				data-active={active ? 'true' : 'false'}
				data-selected={active ? 'true' : undefined}
				className={cn(childRowClass, colors.className)}
				style={{ ...colors.style, paddingLeft: indent }}
			>
				{sub.icon ? (
					<span className={LIST_ICON_CLASS} style={{ minWidth: 32 }}>
						{sub.icon}
					</span>
				) : null}
				<span className={LIST_TEXT_CLASS}>
					<TruncatingLabel
						text={sub.text}
						fontWeight={ROW_LABEL_WEIGHT}
					/>
				</span>
			</RowControl>
		);
	};

	// --- Flyout rail -------------------------------------------------------
	// Icons on the glass rail: one rounded shape for every state, no hover
	// tint of their own (the lens glides behind them), and a gel squish on
	// press that springs back. The active item's glass is one drop that
	// glides between items (useActiveGlass); the item itself stays clear.
	const GLASS_RAIL_ICON_CLASS = cn(
		'lw:rounded-md! lw:[&_svg]:size-6 lw:hover:bg-transparent! lw:active:[transform:scale(0.88)] lw:active:duration-[90ms] lw:motion-reduce:active:[transform:none]',
		REDUCED_MOTION_NONE
	);
	const glassRailIconStyle = (active: boolean): React.CSSProperties => ({
		...(active ? { backgroundColor: 'transparent' } : {}),
		transition: `transform ${railGel.duration}ms ${railGel.easing}, background-color 160ms ease`
	});
	// The flyout rail's hover labels: frosted pills, no arrow.
	const glassTooltip = glassLabel(isDark, labelSurface);

	// --- Collapsed rows ----------------------------------------------------
	const renderCollapsedIcon = (
		key: string,
		label: string,
		icon: React.ReactNode,
		active: boolean,
		path: string | undefined,
		options?: { insideGroup?: boolean; testId?: string }
	) => {
		const disabled = !path;
		const colors = showLabels
			? rowColors(
					{
						fg: active ? activeFg : accentOnSurface,
						bg: active ? activeFill : undefined
					},
					highlight
				)
			: // Icon-only collapsed rail (collapsible variant): original
				// hover — accent when active, else a subtle tint; no
				// foreground change. The glass rail has no hover of its own.
				rowColors(
					{
						fg: active ? activeFg : accentOnSurface,
						bg: active ? activeFill : undefined
					},
					useFlyout
						? undefined
						: {
								bg: active
									? activeFill
									: options?.insideGroup
										? ACTION_HOVER
										: groupTint,
								radius: '8px'
							}
				);
		const size = useFlyout ? FLOATING_RAIL_ITEM_PX : 44;
		const button = (
			<RowControl
				aria-label={label}
				disabled={disabled}
				{...pageLinkProps(path)}
				onMouseEnter={useFlyout ? flyout.onRailLeafEnter : undefined}
				{...(useFlyout ? { [RAIL_ITEM_ATTR]: '' } : {})}
				data-testid={options?.testId ?? `sidebar-item-${label}`}
				data-active={active ? 'true' : 'false'}
				className={cn(
					ICON_BUTTON_CLASS,
					colors.className,
					showLabels
						? // 8px padding on all sides of the item container.
							'lw:flex lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:gap-0.5 lw:rounded-lg lw:p-2 lw:[&_svg]:size-[22px]'
						: active
							? 'lw:rounded-lg'
							: 'lw:rounded-full',
					!showLabels && useFlyout && GLASS_RAIL_ICON_CLASS
				)}
				style={{
					...colors.style,
					...(showLabels ? {} : { width: size, height: size }),
					...(!showLabels && useFlyout
						? glassRailIconStyle(active)
						: {})
				}}
			>
				{icon}
				{showLabels ? (
					<TruncatingLabel
						text={label}
						variant='caption'
						center
						fontSize={RAIL_LABEL_FONT_SIZE}
					/>
				) : null}
			</RowControl>
		);
		// With visible captions the tooltip is redundant (the caption keeps its
		// own truncation-only tooltip); disabled buttons still need the span wrapper.
		if (showLabels) {
			return disabled ? (
				<span key={key}>{button}</span>
			) : (
				<React.Fragment key={key}>{button}</React.Fragment>
			);
		}
		return (
			<Tooltip
				key={key}
				title={label}
				side='right'
				arrow={!useFlyout}
				{...(useFlyout
					? {
							contentClassName: glassTooltip.className,
							contentStyle: glassTooltip.style,
							sideOffset: 6
						}
					: {})}
			>
				{disabled ? <span>{button}</span> : button}
			</Tooltip>
		);
	};

	// A group on the flyout rail: its icon alone, with a small arrow on its
	// right edge pointing to where its pages open. Hovering (or clicking) opens the flyout;
	// the icon stays highlighted while it is open, and takes the accent when
	// the current page is one of its pages.
	const renderFlyoutGroup = (link: SidebarLink) => {
		const groupActive = isSidebarLinkActive(link, activePath);
		const key = nodeKey('', link);
		const open = flyout.state?.key === key;
		return (
			<div
				key={link.text}
				data-testid={`sidebar-group-${link.text}`}
				className='lw:flex lw:w-full lw:justify-center'
			>
				<button
					type='button'
					{...flyout.triggerProps(key)}
					aria-label={link.text}
					aria-haspopup='menu'
					aria-expanded={open}
					data-testid={`sidebar-item-${link.text}`}
					data-active={groupActive ? 'true' : 'false'}
					data-open={open ? 'true' : 'false'}
					{...{ [RAIL_ITEM_ATTR]: '' }}
					className={cn(
						ICON_BUTTON_CLASS,
						GLASS_RAIL_ICON_CLASS,
						// The icon stays centred, in line with every other icon
						// down the rail; the arrow sits in the room beside it,
						// just past the button, in the rail's side gutter (drawn
						// back inside it when the scrollbar takes that gutter).
						// Pointed at, or its pages already out, it has said its piece
						"lw:after:pointer-events-none lw:after:absolute lw:after:top-1/2 lw:after:h-[8px] lw:after:w-[5px] lw:after:-translate-y-1/2 lw:after:content-[''] lw:after:transition-opacity lw:after:duration-150 lw:after:right-(--lw-arrow-right) lw:after:bg-(--lw-arrow-bg) lw:after:opacity-(--lw-arrow-opacity) lw:after:[mask:var(--lw-arrow-mask)] lw:hover:after:opacity-0 lw:data-[open=true]:after:opacity-0"
					)}
					style={
						{
							width: FLOATING_RAIL_ITEM_PX,
							height: FLOATING_RAIL_ITEM_PX,
							color: groupActive ? activeFg : accentOnSurface,
							// Open, the rail's hover lens stays on it (useRailLens)
							// rather than a fill of its own under the lens
							backgroundColor: groupActive
								? activeFill
								: 'transparent',
							...glassRailIconStyle(groupActive),
							'--lw-arrow-right': `${-groupArrowOutset(railScrollbarPx)}px`,
							'--lw-arrow-bg': groupArrowColor ?? 'currentColor',
							'--lw-arrow-opacity': groupArrowColor ? 1 : 0.55,
							'--lw-arrow-mask': `${GROUP_ARROW_MASK} center / contain no-repeat`
						} as React.CSSProperties
					}
				>
					{link.icon}
				</button>
			</div>
		);
	};

	// A collapsed parent group: the parent icon with a small chevron beneath it
	// marking that it has children. The icon + chevron share one button so the
	// active (solid) and hover (tint) background covers the chevron too. Clicking
	// toggles the inline stack of child icons; active groups start open.
	const renderCollapsedGroup = (link: SidebarLink) => {
		const groupActive = isSidebarLinkActive(link, activePath);
		const parentActive = isSubLinkActive(link, activePath);
		const key = nodeKey('', link);
		const open = isGroupOpen(link, key);
		// rail-labeled: active AND hover share the highlight. collapsible:
		// original behavior — accent only when active; the outer pill
		// supplies the idle-hover tint, so the button stays transparent.
		const colors = rowColors(
			{
				fg: parentActive ? activeFg : accentOnSurface,
				bg: parentActive ? activeFill : undefined
			},
			showLabels
				? highlight
				: { bg: parentActive ? activeFill : 'transparent' }
		);

		const parentIconButton = (
			<button
				type='button'
				aria-label={link.text}
				aria-expanded={open}
				onClick={() => toggleGroup(key, open)}
				data-testid={`sidebar-item-${link.text}`}
				data-active={parentActive ? 'true' : 'false'}
				className={cn(
					ICON_BUTTON_CLASS,
					colors.className,
					'lw:flex lw:max-w-full lw:flex-col lw:rounded-[10px]',
					// 8px padding on all sides of the labeled item container.
					showLabels
						? 'lw:w-full lw:gap-0.5 lw:p-2'
						: 'lw:w-11 lw:px-2 lw:py-1.5'
				)}
				style={colors.style}
			>
				{/* Size only the item's own icon; the chevron below stays smaller. */}
				{showLabels ? (
					<span className='lw:flex lw:items-center lw:justify-center lw:[&_svg]:size-[22px]'>
						{link.icon}
					</span>
				) : (
					link.icon
				)}
				{showLabels ? (
					<TruncatingLabel
						text={link.text}
						variant='caption'
						center
						fontSize={RAIL_LABEL_FONT_SIZE}
					/>
				) : null}
				<GroupChevron open={open} size={CHEVRON_FONT_SIZE_RAIL_PX} />
			</button>
		);

		// With a visible caption the tooltip is redundant.
		const parentButton = showLabels ? (
			parentIconButton
		) : (
			<Tooltip title={link.text} side='right' arrow>
				{parentIconButton}
			</Tooltip>
		);
		// The active group's container stays tinted. collapsible tints the
		// whole group on hover (original); rail-labeled leaves hover
		// highlighting to the individual items.
		const pill = rowColors(
			{ bg: groupActive ? groupTint : undefined },
			showLabels ? undefined : { bg: groupTint }
		);

		return (
			<div
				key={link.text}
				data-testid={`sidebar-group-${link.text}`}
				className={cn(
					'lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-1 lw:rounded-[10px] lw:py-1',
					pill.className
				)}
				style={pill.style}
			>
				{parentButton}
				{/* Pages at every depth, flat: the rail has no room for a
				    second chevron, so a section's pages sit beside their
				    cousins with the section's icon when they have none. */}
				{open
					? flattenLeaves(link.subitems, link.icon).map(
							({ sub, icon }) =>
								renderCollapsedIcon(
									sub.path!,
									sub.text,
									icon,
									isSubLinkActive(sub, activePath),
									sub.path,
									{
										insideGroup: true,
										testId: `sidebar-subitem-${sub.text}`
									}
								)
						)
					: null}
			</div>
		);
	};

	// Collapsed leaf: a single icon (with a tooltip, or a caption when
	// `showLabels`). Wrapped in a full-width, center-justified row so it lines up
	// with the (full-width) group items regardless of the stack's alignment or
	// any host-app icon-button styles.
	const renderCollapsedLeaf = (link: SidebarLink) => (
		<div key={link.text} className='lw:flex lw:w-full lw:justify-center'>
			{renderCollapsedIcon(
				link.text,
				link.subtitle ? `${link.text} · ${link.subtitle}` : link.text,
				link.icon,
				isSubLinkActive(link, activePath),
				link.path,
				{ testId: `sidebar-item-${link.text}` }
			)}
		</div>
	);

	// --- Item dispatch -----------------------------------------------------
	const renderItem = (link: SidebarLink) => {
		if (hasChildren(link)) {
			if (useFlyout) {
				return renderFlyoutGroup(link);
			}
			return collapsed
				? renderCollapsedGroup(link)
				: renderExpandedGroup(link);
		}
		return collapsed ? renderCollapsedLeaf(link) : renderExpandedLeaf(link);
	};

	const renderLinkStack = (links: SidebarLink[]) => (
		<div
			className={cn(
				'lw:flex lw:w-full lw:flex-col lw:gap-1',
				collapsed ? 'lw:items-center' : 'lw:items-stretch'
			)}
		>
			{links.map((link, index) =>
				link.dividerAfter && index < links.length - 1 ? (
					<React.Fragment key={link.text}>
						{renderItem(link)}
						<Separator
							data-testid={`sidebar-divider-${link.text}`}
							className='lw:self-stretch'
							style={{
								marginBlock: useFlyout ? railGap : '8px',
								width: 'auto'
							}}
						/>
					</React.Fragment>
				) : (
					renderItem(link)
				)
			)}
		</div>
	);

	const width = collapsed ? collapsedWidth : expandedWidth;

	const renderFlyout = () => {
		const { state } = flyout;
		const group = state
			? ([...mainLinks, ...secondaryLinks].find(
					link => hasChildren(link) && nodeKey('', link) === state.key
				) ?? null)
			: null;
		// Measured while open only, when the rail has long been mounted. The
		// rail's surface is the owner's (`data-rail-surface`, e.g. the
		// wrapper's floating glass capsule), else the nav itself.
		const railEdge = group
			? (navRef.current?.getBoundingClientRect().right ?? collapsedWidth)
			: collapsedWidth;
		const surfaceEl = group
			? ((navRef.current?.closest('[data-rail-surface]') as
					| HTMLElement
					| null
					| undefined) ?? navRef.current)
			: null;
		const surfaceRect = surfaceEl?.getBoundingClientRect();
		const railShape =
			surfaceEl && surfaceRect
				? {
						left: surfaceRect.left,
						top: surfaceRect.top,
						width: surfaceRect.width,
						height: surfaceRect.height,
						radius:
							parseFloat(
								getComputedStyle(surfaceEl).borderTopRightRadius
							) || 0
					}
				: null;
		return (
			<SidebarFlyout
				group={group}
				groupKey={group ? state!.key : null}
				anchor={group ? flyout.getTrigger(state!.key) : null}
				railEdge={railEdge}
				railShape={railShape}
				activePath={activePath}
				focusFirst={state?.focusFirst}
				onNavigate={handleClick}
				onClose={flyout.close}
				panelProps={flyout.flyoutProps}
				accentColor={activeAccent}
				activeBackgroundColor={activeBackgroundColor}
				activeForegroundColor={activeFg}
				solidSurface={flyoutSurfaceColor ?? surface}
			/>
		);
	};

	const headerBar = showHeaderBar ? (
		<div
			data-testid='sidebar-header'
			className={cn(
				'lw:flex lw:shrink-0 lw:items-center lw:justify-center',
				// On the floating rail the logo sits 12px from the top and
				// 12px above Nexa — a section apart, wider than the 4px
				// between items
				useFlyout && 'lw:py-3'
			)}
			style={{
				backgroundColor: headerBg,
				...(useFlyout
					? {}
					: { height: HEADER_HEIGHT_PX, minHeight: HEADER_HEIGHT_PX })
			}}
		>
			{logo || title ? (
				<Brand
					logo={logo}
					// Collapsed, only the logo fits
					title={collapsed ? undefined : title}
					appName={title || 'App'}
					onClick={onBrandClick}
					menuOpen={brandMenuOpen}
					color={brandColor ?? headerFg}
					testId='sidebar-header-brand'
				/>
			) : null}
		</div>
	) : null;

	// Without the header bar (the labeled rail), the logo alone sits on top.
	const railBrand =
		!showHeaderBar && logo ? (
			<div
				className='lw:flex lw:shrink-0 lw:justify-center lw:pt-4'
				style={{ paddingBottom: useFlyout ? railGap : '8px' }}
			>
				<Brand
					logo={logo}
					appName={title || 'App'}
					onClick={onBrandClick}
					menuOpen={brandMenuOpen}
					color={brandColor ?? headerFg}
					testId='sidebar-header-brand'
				/>
			</div>
		) : null;

	// The floating rail's 6px matches its scrollbar gutters, so the top
	// content and footer line up with the links.
	const horizontalPaddingPx = showLabels
		? 4
		: useFlyout
			? 6
			: collapsed
				? 8
				: 12;

	// Scrollbar shows only while the pointer is inside (or a keyboard user
	// tabs in). Not :focus-within, since a clicked link keeps focus and would
	// pin it on. Chrome lets `scrollbar-width`/`-color` override the
	// ::-webkit-scrollbar rules, and its `thin` is 11px — too wide for the
	// floating rail, so there only browsers without those rules (Firefox) get
	// them; Chrome and Safari draw the 6px bar. Safari only honours the thumb
	// rule once the bar itself is styled.
	const scrollbarClass = cn(
		useFlyout
			? 'lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-width:thin] lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-color:transparent_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-1.5'
			: 'lw:[scrollbar-width:thin] lw:[scrollbar-color:transparent_transparent] lw:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-2',
		'lw:[&::-webkit-scrollbar-thumb]:rounded-[4px] lw:[&::-webkit-scrollbar-thumb]:bg-transparent lw:[&:hover::-webkit-scrollbar-thumb]:bg-border lw:[&:has(:focus-visible)::-webkit-scrollbar-thumb]:bg-border'
	);

	return (
		<RailGlassContext.Provider value={useFlyout}>
			<nav
				ref={navRef}
				{...railContainerProps}
				aria-label='Main sidebar'
				data-testid='collapsible-sidebar'
				data-collapsed={collapsed ? 'true' : 'false'}
				data-labeled={showLabels ? 'true' : 'false'}
				className={cn(
					// Lets the sidebar shrink inside a flex-column host so siblings
					// (e.g. an alert card below it) stay within the viewport.
					// Snaps to its width; an owner that animates the switch (the
					// wrapper's hover panel) clips it from a container, so the
					// rows never reflow mid-animation.
					'lw:box-border lw:flex lw:h-full lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-hidden',
					// The glass rail holds the lens, so every control on it — links,
					// Ask Nexa, search, notifications, the account — hovers the same
					// way: no tint of its own, the lens gliding behind it. An active
					// or highlighted control keeps its fill. The rail's content
					// paints above the lens, which is its first layer; not the
					// flyout's backdrop, which is fixed over the whole window.
					useFlyout &&
						'lw:relative lw:[&_:is(button,a,[role=button]):not([data-active=true]):not([data-rail-keep-fill]):hover]:bg-transparent! lw:[&>:not([data-glass-lens],[data-active-glass],[data-flyout-scrim])]:relative'
				)}
				style={{ width, minWidth: width, backgroundColor: surface }}
			>
				{railLens.lens}
				{headerBar ?? railBrand}
				{topContent ? (
					<div
						className='lw:shrink-0'
						style={{
							paddingInline: horizontalPaddingPx,
							paddingBlock: useFlyout ? 0 : 8
						}}
					>
						{topContent}
					</div>
				) : null}
				{/* Scroll container; flex column keeps the bottom group's mt:auto
			    pinning intact. */}
				<div
					ref={scrollRef}
					data-testid='sidebar-links-scroller'
					className={cn(
						'lw:flex lw:min-h-0 lw:flex-auto lw:flex-col',
						scrollbarClass
					)}
					style={{
						overflowY: linksOverflow ? 'auto' : 'hidden',
						overflowX: 'hidden',
						// On the floating rail the bar (when it takes space at all)
						// stands in for the right padding, and the left padding
						// follows it, so the 44px column keeps equal gaps in the
						// capsule whether the bar is classic, overlay or absent.
						// (The inline collapsed rail keeps its padding: its open
						// groups tint the full row width.)
						...(useFlyout
							? railScrollerPadding(railScrollbarPx)
							: { paddingInline: horizontalPaddingPx }),
						paddingTop:
							topInsetPx && !showHeaderBar
								? `${topInsetPx}px`
								: useFlyout
									? railGap
									: '8px',
						paddingBottom: useFlyout ? railGap : '16px'
					}}
				>
					{/* Offset parent for the active drop, inside the padding
					    so its offsets match the items'. Grows to fill,
					    keeping the bottom group's mt:auto pinning. */}
					<div
						ref={linksRef}
						className='lw:relative lw:flex lw:flex-[1_0_auto] lw:flex-col'
					>
						{activeGlass.glass}
						{renderLinkStack(mainLinks)}
						{/* Bottom group, pinned to the bottom by mt:auto. With a footer
				    the divider moves below it, between the links and the user. */}
						{secondaryLinks.length > 0 ? (
							<div
								className='lw:mt-auto'
								style={{
									paddingTop: useFlyout ? railGap : '16px'
								}}
							>
								{footer ? null : (
									<Separator
										style={{
											marginBottom: useFlyout
												? railGap
												: '8px'
										}}
									/>
								)}
								{renderLinkStack(secondaryLinks)}
							</div>
						) : null}
					</div>
				</div>
				{footer ? (
					<div
						className={cn(
							'lw:shrink-0 lw:pb-3',
							useFlyout && 'lw:[&_button_svg]:size-6'
						)}
						style={{ paddingInline: horizontalPaddingPx }}
					>
						<div
							style={{
								borderTop: `1px solid ${headerDivider}`,
								paddingTop: useFlyout ? railGap : '12px'
							}}
						>
							{footer}
						</div>
					</div>
				) : null}
				{useFlyout ? renderFlyout() : null}
			</nav>
		</RailGlassContext.Provider>
	);
};

export default CollapsibleSidebar;
