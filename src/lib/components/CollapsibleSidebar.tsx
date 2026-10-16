import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRounded from '@mui/icons-material/KeyboardArrowUpRounded';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import Brand from './Brand';
import type { SidebarLink, SidebarSubLink } from './LumoraWrapper';
import {
	RAIL_ITEM_ATTR,
	RailGlassContext,
	useActiveGlass,
	useRailLens
} from './RailLens';
import SidebarFlyout from './SidebarFlyout';
import { GEL_SPRING, springTiming } from './glassMotion';
import {
	GLASS_RADIUS_PX,
	glassLabelSx,
	SidebarSurfaceContext
} from './liquidGlass';
import {
	deriveGroupTint,
	flattenLeaves,
	getContrastText,
	hasChildren,
	isSidebarLinkActive,
	isSubLinkActive,
	nodeKey
} from './sidebarUtils';
import useFlyoutIntent from './useFlyoutIntent';

const DEFAULT_EXPANDED_WIDTH_PX = 264;
const DEFAULT_COLLAPSED_WIDTH_PX = 72;
/** In-sidebar header height (the brand). */
const HEADER_HEIGHT_PX = 64;
/** Host apps (and the demo's base CSS) often outline every `button:focus`,
 * which lingers after a mouse click — neutralize it on all sidebar icon
 * buttons (same treatment as the navbar hamburger). */
const FOCUS_OUTLINE_FIX = {
	'&:focus, &:focus-visible': { outline: 'none' }
} as const;
/** Chevron indicator size; kept clearly smaller than the item's own icon. */
const CHEVRON_FONT_SIZE_PX = 16;
/** Subtler chevron beneath the icon on the narrow collapsed rail. */
const CHEVRON_FONT_SIZE_RAIL_PX = 14;
/** Left inset of an expanded child row, and how much each further level adds. */
const CHILD_INDENT = 4;
const CHILD_INDENT_STEP = 2.5;
/** Caption + icon sizing for the narrow (80px) labeled rail, tuned so labels
 * like "Analytics" / "Knowledge" stay legible without overflowing. */
const RAIL_LABEL_FONT_SIZE = '0.7rem';
const RAIL_LABEL_ICON_SIZE_PX = 22;
const railGel = springTiming(GEL_SPRING);

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
			placement='right'
			arrow
			enterDelay={400}
			disableHoverListener={!truncated}
			disableFocusListener={!truncated}
			disableTouchListener={!truncated}
		>
			<Typography
				ref={ref}
				component='span'
				variant={variant}
				sx={{
					display: 'block',
					width: center ? '100%' : undefined,
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					color: 'inherit',
					...(fontSize ? { fontSize } : {}),
					...(fontWeight ? { fontWeight } : {}),
					...(center ? { textAlign: 'center', lineHeight: 1.1 } : {})
				}}
			>
				{text}
			</Typography>
		</Tooltip>
	);
};

/** Small up/down chevron marking a parent on the narrow rails. */
const GroupChevron: React.FC<{ open: boolean; size?: number }> = ({
	open,
	size = CHEVRON_FONT_SIZE_PX
}) =>
	open ? (
		<KeyboardArrowUpRounded sx={{ fontSize: size, opacity: 0.75 }} />
	) : (
		<KeyboardArrowDownRounded sx={{ fontSize: size, opacity: 0.75 }} />
	);

/** Expanded rows: a right chevron that turns down while the group is open. */
const RowChevron: React.FC<{ open: boolean }> = ({ open }) => (
	<ChevronRightRounded
		sx={{
			fontSize: 20,
			opacity: 0.75,
			transition: 'transform 150ms ease',
			transform: open ? 'rotate(90deg)' : 'none'
		}}
	/>
);

/** Page-link label weight in the expanded panel. */
const ROW_LABEL_WEIGHT = 600;

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
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const labelSurface = React.useContext(SidebarSurfaceContext);
	const useFlyout = submenuMode === 'flyout' && collapsed && !showLabels;
	const flyout = useFlyoutIntent(useFlyout);
	const navRef = React.useRef<HTMLElement>(null);
	const railLens = useRailLens(useFlyout, isDark, flyout.state?.key ?? null);
	const activeGlass = useActiveGlass({
		enabled: useFlyout,
		isDark,
		color: activeAccent,
		containerRef: navRef
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

	const activeFg = activeForegroundColor ?? getContrastText(activeAccent);
	// The highlighted look: accent fill + active foreground. Applied to the
	// active item in every variant, and — in the rail-labeled layout only
	// (`showLabels`) — to any hovered item, so active and hover match there.
	// The collapsible variant keeps its original subtle idle-hover tint instead.
	// `highlightSx` targets expanded rows, which set an explicit icon color.
	const highlightSx = {
		bgcolor: activeAccent,
		color: activeFg,
		'& .MuiListItemIcon-root': { color: activeFg }
	};
	// The same look for the collapsed labeled icon buttons (the icon uses
	// currentColor and the caption inherits), plus the highlight's rounded corner.
	const iconHighlightSx = {
		bgcolor: activeAccent,
		color: activeFg,
		borderRadius: '8px'
	};
	const groupTint = groupAccentColor ?? deriveGroupTint(activeAccent);
	// Surface defaults to white in light mode and the theme's paper (dark chrome)
	// in dark mode; overridable via surfaceBackgroundColor.
	const surface =
		surfaceBackgroundColor ??
		(isDark ? theme.palette.background.paper : '#ffffff');
	// Accent-colored chrome (brand title, logo, inactive icons) uses the
	// brand accent in light mode (per the mockup); in dark mode the accent is too
	// dim on the dark surface, so fall back to the theme's primary text color.
	// `foregroundColor` overrides this so idle labels can be tinted independently
	// of the active highlight (e.g. teal idle labels over a dark-green active pill).
	const accentOnSurface =
		foregroundColor ?? (isDark ? 'text.primary' : activeAccent);
	// Header bar chrome. Without a custom header background the header is part
	// of the sidebar surface, so the brand keeps the same accent-on-surface tint
	// as the idle nav chrome (auto-contrast would paint a black brand on the
	// default white surface). A custom header background switches to
	// auto-contrast, which falls back to white for non-hex values (see the
	// headerForegroundColor prop doc). The dark-mode fallback is the resolved
	// theme color rather than the 'text.primary' token so the divider below can
	// still parse it.
	const headerBg = headerBackgroundColor ?? surface;
	const headerFg =
		headerForegroundColor ??
		(headerBackgroundColor
			? getContrastText(headerBg)
			: (foregroundColor ??
				(isDark ? theme.palette.text.primary : activeAccent)));
	// Hairline separating the header from the nav list — the foreground at low
	// alpha so it stays legible on any header color.
	const headerDivider = deriveGroupTint(headerFg);

	const handleClick = (path: string) => {
		onLinkClick?.(path);
	};

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
	const expandedRowSx = (
		active: boolean,
		idleHoverBg: string,
		iconMinWidth: number
	) => ({
		color: active ? activeFg : accentOnSurface,
		bgcolor: active ? activeAccent : 'transparent',
		'& .MuiListItemIcon-root': {
			color: active ? activeFg : accentOnSurface,
			minWidth: iconMinWidth
		},
		'&:hover': active || showLabels ? highlightSx : { bgcolor: idleHoverBg }
	});
	// Page rows set `selected`; override MUI's default selected styling.
	const selectedRowSx = {
		'&.Mui-selected': {
			bgcolor: activeAccent
		},
		'&.Mui-selected:hover': highlightSx
	};

	const renderExpandedLeaf = (link: SidebarLink) => {
		const active = isSubLinkActive(link, activePath);
		const row = (
			<ListItemButton
				key={link.text}
				disabled={!link.path}
				selected={active}
				onClick={() => link.path && handleClick(link.path)}
				data-testid={`sidebar-item-${link.text}`}
				data-active={active ? 'true' : 'false'}
				sx={{
					borderRadius: '8px',
					py: 1.25,
					px: 1.5,
					// Room for the action button laid over the row's end
					...(link.action && { pr: 6 }),
					...(link.subtitle && { py: 1 }),
					// A two-line row usually leads with a larger avatar; give it room
					...expandedRowSx(
						active,
						groupTint,
						link.subtitle ? 48 : 36
					),
					...selectedRowSx
				}}
			>
				<ListItemIcon>{link.icon}</ListItemIcon>
				<ListItemText
					disableTypography
					primary={
						<TruncatingLabel
							text={link.text}
							fontWeight={ROW_LABEL_WEIGHT}
						/>
					}
					secondary={
						link.subtitle ? (
							<Box
								component='span'
								sx={{ display: 'block', opacity: 0.85 }}
							>
								<TruncatingLabel
									text={link.subtitle}
									fontSize='0.8125rem'
								/>
							</Box>
						) : undefined
					}
					sx={link.subtitle ? { my: 0 } : undefined}
				/>
			</ListItemButton>
		);
		if (!link.action) {
			return row;
		}
		const { action } = link;
		// A sibling of the row button, not nested in it: two separate controls
		return (
			<Box key={link.text} sx={{ position: 'relative' }}>
				{row}
				<Tooltip title={action.label} placement='right' arrow>
					<IconButton
						aria-label={action.label}
						data-testid={`sidebar-action-${link.text}`}
						onClick={() => {
							action.onClick();
							onLinkAction?.();
						}}
						size='small'
						sx={{
							position: 'absolute',
							right: 8,
							top: '50%',
							transform: 'translateY(-50%)',
							width: 30,
							height: 30,
							borderRadius: '6px',
							border: '1px solid',
							borderColor: active
								? 'rgba(255, 255, 255, 0.35)'
								: groupTint,
							color: active ? activeFg : accentOnSurface,
							'&:hover': {
								bgcolor: active
									? 'rgba(255, 255, 255, 0.15)'
									: groupTint
							},
							'& .MuiSvgIcon-root': { fontSize: 18 },
							// No lingering outline after a click; a clear ring for keyboard focus
							'&:focus:not(.Mui-focusVisible)': {
								outline: 'none'
							},
							'&.Mui-focusVisible': {
								outline: '2px solid',
								outlineColor: active
									? activeFg
									: accentOnSurface,
								outlineOffset: 1
							}
						}}
					>
						{action.icon}
					</IconButton>
				</Tooltip>
			</Box>
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

		return (
			<Box
				key={link.text}
				data-testid={`sidebar-group-${link.text}`}
				sx={{
					borderRadius: '8px',
					bgcolor: groupActive ? groupTint : 'transparent'
				}}
			>
				{/* Clicking the parent row toggles its child group open/closed. */}
				<ListItemButton
					onClick={() => toggleGroup(key, open)}
					data-testid={`sidebar-item-${link.text}`}
					data-active={parentActive ? 'true' : 'false'}
					aria-expanded={open}
					sx={{
						borderRadius: '8px',
						py: 1.25,
						px: 1.5,
						...expandedRowSx(parentActive, groupTint, 36)
					}}
				>
					<ListItemIcon>{link.icon}</ListItemIcon>
					<ListItemText
						disableTypography
						primary={
							<TruncatingLabel
								text={link.text}
								fontWeight={ROW_LABEL_WEIGHT}
							/>
						}
					/>
					<RowChevron open={open} />
				</ListItemButton>
				<Collapse in={open} timeout='auto' unmountOnExit>
					<Box
						data-testid={`sidebar-children-${link.text}`}
						sx={{ pb: 0.5 }}
					>
						{link.subitems!.map(sub =>
							renderExpandedChild(sub, key, 1)
						)}
					</Box>
				</Collapse>
			</Box>
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
		const indent = CHILD_INDENT + (depth - 1) * CHILD_INDENT_STEP;

		if (hasChildren(sub)) {
			const sectionActive = isSidebarLinkActive(sub, activePath);
			const rowActive = isSubLinkActive(sub, activePath);
			const open = isGroupOpen(sub, key);
			return (
				<Box key={key} data-testid={`sidebar-group-${sub.text}`}>
					<ListItemButton
						onClick={() => toggleGroup(key, open)}
						data-testid={`sidebar-subitem-${sub.text}`}
						data-active={sectionActive ? 'true' : 'false'}
						aria-expanded={open}
						sx={{
							borderRadius: '8px',
							mx: 0.5,
							py: 0.75,
							pl: indent,
							...expandedRowSx(rowActive, 'action.hover', 32)
						}}
					>
						{sub.icon ? (
							<ListItemIcon>{sub.icon}</ListItemIcon>
						) : null}
						<ListItemText
							disableTypography
							primary={
								<TruncatingLabel
									text={sub.text}
									fontWeight={ROW_LABEL_WEIGHT}
								/>
							}
						/>
						<RowChevron open={open} />
					</ListItemButton>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box data-testid={`sidebar-children-${sub.text}`}>
							{sub.subitems!.map(child =>
								renderExpandedChild(child, key, depth + 1)
							)}
						</Box>
					</Collapse>
				</Box>
			);
		}

		const active = isSubLinkActive(sub, activePath);
		return (
			<ListItemButton
				key={key}
				selected={active}
				disabled={!sub.path}
				onClick={() => sub.path && handleClick(sub.path)}
				data-testid={`sidebar-subitem-${sub.text}`}
				data-active={active ? 'true' : 'false'}
				sx={{
					borderRadius: '8px',
					mx: 0.5,
					py: 0.75,
					pl: indent,
					...expandedRowSx(active, 'action.hover', 32),
					...selectedRowSx
				}}
			>
				{sub.icon ? <ListItemIcon>{sub.icon}</ListItemIcon> : null}
				<ListItemText
					disableTypography
					primary={
						<TruncatingLabel
							text={sub.text}
							fontWeight={ROW_LABEL_WEIGHT}
						/>
					}
				/>
			</ListItemButton>
		);
	};

	// --- Collapsed rows ----------------------------------------------------
	const renderCollapsedIcon = (
		key: string,
		label: string,
		icon: React.ReactNode,
		active: boolean,
		onClick: (() => void) | undefined,
		options?: { insideGroup?: boolean; testId?: string }
	) => {
		const disabled = !onClick;
		const button = (
			<IconButton
				aria-label={label}
				disabled={disabled}
				onClick={onClick}
				onMouseEnter={useFlyout ? flyout.onRailLeafEnter : undefined}
				{...(useFlyout ? { [RAIL_ITEM_ATTR]: '' } : {})}
				data-testid={options?.testId ?? `sidebar-item-${label}`}
				data-active={active ? 'true' : 'false'}
				sx={
					showLabels
						? {
								display: 'flex',
								flexDirection: 'column',
								gap: 0.25,
								width: '100%',
								maxWidth: '100%',
								height: 'auto',
								// 8px padding on all sides of the item container.
								p: 1,
								borderRadius: '8px',
								color: active ? activeFg : accentOnSurface,
								bgcolor: active ? activeAccent : 'transparent',
								'& .MuiSvgIcon-root': {
									fontSize: RAIL_LABEL_ICON_SIZE_PX
								},
								'&:hover': iconHighlightSx,
								...FOCUS_OUTLINE_FIX
							}
						: {
								// Icon-only collapsed rail (collapsible variant):
								// original hover — accent when active, else a subtle
								// tint; no foreground change.
								width: 44,
								height: 44,
								color: active ? activeFg : accentOnSurface,
								bgcolor: active ? activeAccent : 'transparent',
								borderRadius: active ? '8px' : '50%',
								'&:hover': {
									bgcolor: active
										? activeAccent
										: options?.insideGroup
											? 'action.hover'
											: groupTint,
									borderRadius: '8px'
								},
								...FOCUS_OUTLINE_FIX,
								...(useFlyout ? glassRailIconSx(active) : {})
							}
				}
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
			</IconButton>
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
				placement='right'
				arrow={!useFlyout}
				{...(useFlyout ? glassTooltipProps : {})}
			>
				{disabled ? <span>{button}</span> : button}
			</Tooltip>
		);
	};

	// --- Flyout rail -------------------------------------------------------
	// The glass rail holds the lens, so every control on it — links, Ask
	// Nexa, search, notifications, the account — hovers the same way: no
	// tint of its own, the lens gliding behind it. An active or highlighted
	// control keeps its fill.
	const glassRailSx = {
		position: 'relative' as const,
		'& :is(button, [role="button"]):not([data-active="true"]):not([data-rail-keep-fill]):hover':
			{
				bgcolor: 'transparent'
			},
		// The rail's content paints above the lens, which is its first layer
		'& > :not([data-glass-lens], [data-active-glass])': {
			position: 'relative'
		}
	};
	// Icons on the glass rail: one rounded shape for every state, no hover
	// tint of their own (the lens glides behind them), and a gel squish on
	// press that springs back.
	const glassRailIconSx = (active: boolean) => ({
		borderRadius: `${GLASS_RADIUS_PX}px`,
		// The active item's glass is one drop that glides between items
		// (useActiveGlass); the item itself stays clear
		...(active ? { bgcolor: 'transparent' } : {}),
		transition: `transform ${railGel.duration}ms ${railGel.easing}, background-color 160ms ease`,
		'&:hover': { bgcolor: 'transparent' },
		'&:active': { transform: 'scale(0.88)', transitionDuration: '90ms' },
		'@media (prefers-reduced-motion: reduce)': {
			transition: 'none',
			'&:active': { transform: 'none' }
		}
	});
	// The flyout rail's hover labels: frosted pills, no arrow.
	const glassTooltipProps = {
		slotProps: {
			tooltip: { sx: glassLabelSx(isDark, labelSurface) },
			popper: {
				modifiers: [{ name: 'offset', options: { offset: [0, 6] } }]
			}
		}
	};

	// A group on the flyout rail: its icon alone, with a small corner notch
	// marking that it holds pages. Hovering (or clicking) opens the flyout;
	// the icon stays highlighted while it is open, and takes the accent when
	// the current page is one of its pages.
	const renderFlyoutGroup = (link: SidebarLink) => {
		const groupActive = isSidebarLinkActive(link, activePath);
		const key = nodeKey('', link);
		const open = flyout.state?.key === key;
		return (
			<Box
				key={link.text}
				data-testid={`sidebar-group-${link.text}`}
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<IconButton
					{...flyout.triggerProps(key)}
					aria-label={link.text}
					aria-haspopup='menu'
					aria-expanded={open}
					data-testid={`sidebar-item-${link.text}`}
					data-active={groupActive ? 'true' : 'false'}
					data-open={open ? 'true' : 'false'}
					{...{ [RAIL_ITEM_ATTR]: '' }}
					sx={{
						position: 'relative',
						width: 44,
						height: 44,
						color: groupActive ? activeFg : accentOnSurface,
						// Open, the rail's hover lens stays on it (useRailLens)
						// rather than a fill of its own under the lens
						bgcolor: groupActive ? activeAccent : 'transparent',
						...glassRailIconSx(groupActive),
						'&::after': {
							content: '""',
							position: 'absolute',
							right: 5,
							bottom: 5,
							borderStyle: 'solid',
							borderWidth: '0 0 5px 5px',
							borderColor:
								'transparent transparent currentColor transparent',
							opacity: 0.55
						},
						...FOCUS_OUTLINE_FIX
					}}
				>
					{link.icon}
				</IconButton>
			</Box>
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

		const parentIconButton = (
			<IconButton
				aria-label={link.text}
				aria-expanded={open}
				onClick={() => toggleGroup(key, open)}
				data-testid={`sidebar-item-${link.text}`}
				data-active={parentActive ? 'true' : 'false'}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: showLabels ? 0.25 : 0,
					width: showLabels ? '100%' : 44,
					maxWidth: '100%',
					// 8px padding on all sides of the labeled item container.
					...(showLabels ? { p: 1 } : { py: 0.75 }),
					borderRadius: '10px',
					color: parentActive ? activeFg : accentOnSurface,
					bgcolor: parentActive ? activeAccent : 'transparent',
					// rail-labeled: active AND hover share the highlight. collapsible:
					// original behavior — accent only when active; the outer pill
					// supplies the idle-hover tint, so the button stays transparent.
					'&:hover': showLabels
						? { bgcolor: activeAccent, color: activeFg }
						: {
								bgcolor: parentActive
									? activeAccent
									: 'transparent'
							},
					...FOCUS_OUTLINE_FIX
				}}
			>
				{/* Size only the item's own icon; the chevron below stays smaller. */}
				{showLabels ? (
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							'& .MuiSvgIcon-root': {
								fontSize: RAIL_LABEL_ICON_SIZE_PX
							}
						}}
					>
						{link.icon}
					</Box>
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
			</IconButton>
		);

		// With a visible caption the tooltip is redundant.
		const parentButton = showLabels ? (
			parentIconButton
		) : (
			<Tooltip title={link.text} placement='right' arrow>
				{parentIconButton}
			</Tooltip>
		);

		return (
			<Box
				key={link.text}
				data-testid={`sidebar-group-${link.text}`}
				sx={{
					width: '100%',
					borderRadius: '10px',
					py: 0.5,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 0.5,
					// The active group's container stays tinted. collapsible tints
					// the whole group on hover (original); rail-labeled leaves hover
					// highlighting to the individual items.
					bgcolor: groupActive ? groupTint : 'transparent',
					...(showLabels ? {} : { '&:hover': { bgcolor: groupTint } })
				}}
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
									() => handleClick(sub.path!),
									{
										insideGroup: true,
										testId: `sidebar-subitem-${sub.text}`
									}
								)
						)
					: null}
			</Box>
		);
	};

	// Collapsed leaf: a single icon (with a tooltip, or a caption when
	// `showLabels`). Wrapped in a full-width, center-justified row so it lines up
	// with the (full-width) group items regardless of the Stack's alignment or
	// any host-app icon-button styles.
	const renderCollapsedLeaf = (link: SidebarLink) => (
		<Box
			key={link.text}
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center'
			}}
		>
			{renderCollapsedIcon(
				link.text,
				link.subtitle ? `${link.text} · ${link.subtitle}` : link.text,
				link.icon,
				isSubLinkActive(link, activePath),
				link.path ? () => handleClick(link.path!) : undefined,
				{ testId: `sidebar-item-${link.text}` }
			)}
		</Box>
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
		<Stack
			spacing={0.5}
			sx={{
				width: '100%',
				alignItems: collapsed ? 'center' : 'stretch'
			}}
		>
			{links.map(renderItem)}
		</Stack>
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
				activeForegroundColor={activeFg}
				solidSurface={flyoutSurfaceColor ?? surface}
			/>
		);
	};

	const headerBar = showHeaderBar ? (
		<Box
			data-testid='sidebar-header'
			sx={{
				height: HEADER_HEIGHT_PX,
				minHeight: HEADER_HEIGHT_PX,
				flexShrink: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: headerBg
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
		</Box>
	) : null;

	// Without the header bar (the labeled rail), the logo alone sits on top.
	const railBrand =
		!showHeaderBar && logo ? (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexShrink: 0,
					pt: 2,
					pb: 1
				}}
			>
				<Brand
					logo={logo}
					appName={title || 'App'}
					onClick={onBrandClick}
					menuOpen={brandMenuOpen}
					color={brandColor ?? headerFg}
					testId='sidebar-header-brand'
				/>
			</Box>
		) : null;

	const horizontalPadding = showLabels ? 0.5 : collapsed ? 1 : 1.5;

	return (
		<RailGlassContext.Provider value={useFlyout}>
			<Box
				ref={navRef}
				{...railLens.containerProps}
				component='nav'
				aria-label='Main sidebar'
				data-testid='collapsible-sidebar'
				data-collapsed={collapsed ? 'true' : 'false'}
				data-labeled={showLabels ? 'true' : 'false'}
				sx={{
					width,
					minWidth: width,
					height: '100%',
					boxSizing: 'border-box',
					bgcolor: surface,
					display: 'flex',
					flexDirection: 'column',
					// Lets the sidebar shrink inside a flex-column host so siblings
					// (e.g. an alert card below it) stay within the viewport.
					flex: '1 1 auto',
					minHeight: 0,
					// Snaps to its width; an owner that animates the switch (the
					// wrapper's hover panel) clips it from a container, so the
					// rows never reflow mid-animation.
					overflow: 'hidden',
					...(useFlyout ? glassRailSx : {})
				}}
			>
				{railLens.lens}
				{activeGlass.glass}
				{headerBar ?? railBrand}
				{topContent ? (
					<Box
						sx={{
							flexShrink: 0,
							px: horizontalPadding,
							pt: 1,
							pb: 1
						}}
					>
						{topContent}
					</Box>
				) : null}
				{/* Scroll container; flex column keeps the bottom group's mt:auto
			    pinning intact. */}
				<Box
					sx={{
						flex: '1 1 auto',
						minHeight: 0,
						display: 'flex',
						flexDirection: 'column',
						overflowY: 'auto',
						overflowX: 'hidden',
						// Scrollbar shows only while the pointer is inside (or a
						// keyboard user tabs in). Not :focus-within, since a
						// clicked link keeps focus and would pin it on. On the
						// icon rail the gutter is reserved on both edges so the
						// icons never shift and stay centred with the brand and
						// footer.
						...(useFlyout
							? { scrollbarGutter: 'stable both-edges' }
							: {}),
						scrollbarWidth: 'thin',
						scrollbarColor: 'transparent transparent',
						// Safari only honours the thumb rule once the bar
						// itself is styled.
						'&::-webkit-scrollbar': { width: 8 },
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: 'transparent',
							borderRadius: 4
						},
						'&:hover, &:has(:focus-visible)': {
							scrollbarColor: theme =>
								`${theme.palette.divider} transparent`,
							'&::-webkit-scrollbar-thumb': {
								backgroundColor: theme => theme.palette.divider
							}
						},
						// On the icon rail the two gutters stand in for the
						// padding, leaving room for the 44px items. (The inline
						// collapsed rail keeps it: its open groups tint the
						// full row width.)
						px: useFlyout ? 0 : horizontalPadding,
						pt:
							topInsetPx && !showHeaderBar
								? `${topInsetPx}px`
								: 1,
						pb: 2
					}}
				>
					{renderLinkStack(mainLinks)}
					{/* Bottom group, pinned to the bottom by mt:auto. With a footer
				    the divider moves below it, between the links and the user. */}
					{secondaryLinks.length > 0 ? (
						<Box sx={{ mt: 'auto', pt: 2 }}>
							{footer ? null : (
								<Divider
									sx={{ mb: 1, borderColor: 'divider' }}
								/>
							)}
							{renderLinkStack(secondaryLinks)}
						</Box>
					) : null}
				</Box>
				{footer ? (
					<Box sx={{ flexShrink: 0, px: horizontalPadding, pb: 1.5 }}>
						<Box
							sx={{
								borderTop: `1px solid ${headerDivider}`,
								pt: 1.5
							}}
						>
							{footer}
						</Box>
					</Box>
				) : null}
				{useFlyout ? renderFlyout() : null}
			</Box>
		</RailGlassContext.Provider>
	);
};

export default CollapsibleSidebar;
