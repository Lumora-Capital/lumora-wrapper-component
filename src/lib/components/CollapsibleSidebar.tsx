import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRounded from '@mui/icons-material/KeyboardArrowUpRounded';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import ViewSidebarOutlined from '@mui/icons-material/ViewSidebarOutlined';
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
	deriveGroupTint,
	flattenLeaves,
	getContrastText,
	hasChildren,
	isSidebarLinkActive,
	isSubLinkActive,
	nodeKey,
	readStoredCollapsed,
	writeStoredCollapsed
} from './sidebarUtils';

const DEFAULT_EXPANDED_WIDTH_PX = 264;
const DEFAULT_COLLAPSED_WIDTH_PX = 72;
const DEFAULT_PERSIST_KEY = 'lumora:sidebar-collapsed';
const WIDTH_TRANSITION = 'width 200ms ease';
/** In-sidebar header height (collapse toggle + brand). */
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

/** "Toggle sidebar" glyph: a panel with its sidebar on the left. */
const PanelIcon: React.FC<{ className?: string; hidden?: boolean }> = ({
	className,
	hidden = false
}) => (
	<ViewSidebarOutlined
		className={className}
		sx={{ transform: 'scaleX(-1)', display: hidden ? 'none' : undefined }}
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
	onBrandClick?: () => void;
	/** @deprecated Never rendered — the section header row was dropped. */
	sectionTitle?: string;
	/**
	 * Render the 60px in-sidebar header bar (collapse hamburger + brand). Used
	 * by the full-height collapsible layout; off by default so the labeled rail
	 * and existing consumers are unaffected. When on, `topInsetPx` is ignored —
	 * the header itself occupies the top of the surface.
	 */
	showHeaderBar?: boolean;
	/** Header bar background; defaults to the sidebar surface color. */
	headerBackgroundColor?: string;
	/**
	 * Header bar foreground (hamburger + wordmark + logo). Defaults to the idle
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
	// Collapse / expand
	/** Controlled collapsed state. When provided, the owner also persists it. */
	collapsed?: boolean;
	/** Uncontrolled initial state used only when nothing is persisted. */
	defaultCollapsed?: boolean;
	onCollapsedChange?: (collapsed: boolean) => void;
	/** localStorage key for the uncontrolled/persisted state. */
	persistKey?: string;
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
	showHeaderBar = false,
	headerBackgroundColor,
	headerForegroundColor,
	brandColor,
	activeAccentColor: activeAccent = '#01584f',
	groupAccentColor,
	activeForegroundColor,
	foregroundColor,
	surfaceBackgroundColor,
	collapsed: collapsedProp,
	defaultCollapsed = false,
	onCollapsedChange,
	persistKey = DEFAULT_PERSIST_KEY,
	expandedWidth = DEFAULT_EXPANDED_WIDTH_PX,
	collapsedWidth = DEFAULT_COLLAPSED_WIDTH_PX,
	showLabels = false,
	topInsetPx = 0,
	topContent,
	footer
}) => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const isControlled = collapsedProp !== undefined;

	// Uncontrolled: restore the initial value from localStorage on first render
	// (SSR-safe). The collapse toggle lives in the header bar (`showHeaderBar`);
	// controlled owners keep the state and persist it themselves.
	const [internalCollapsed, setInternalCollapsed] = React.useState<boolean>(
		() => readStoredCollapsed(persistKey) ?? defaultCollapsed
	);
	const collapsed = isControlled ? Boolean(collapsedProp) : internalCollapsed;

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
	// Accent-colored chrome (brand title, toggle, logo, inactive icons) uses the
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

	// Header-bar hamburger. Controlled owners persist the state themselves, so
	// only the uncontrolled path writes storage (avoids double-writes).
	const handleToggleCollapsed = () => {
		const next = !collapsed;
		if (!isControlled) {
			setInternalCollapsed(next);
			writeStoredCollapsed(persistKey, next);
		}
		onCollapsedChange?.(next);
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
					...expandedRowSx(active, groupTint, 36),
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
								...FOCUS_OUTLINE_FIX
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
			<Tooltip key={key} title={label} placement='right' arrow>
				{disabled ? <span>{button}</span> : button}
			</Tooltip>
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
				link.text,
				link.icon,
				isSubLinkActive(link, activePath),
				link.path ? () => handleClick(link.path!) : undefined
			)}
		</Box>
	);

	// --- Item dispatch -----------------------------------------------------
	const renderItem = (link: SidebarLink) => {
		if (hasChildren(link)) {
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

	const toggleLabel = collapsed ? 'Expand sidebar' : 'Collapse sidebar';
	// Collapsed, the header only fits one button: it shows the logo and swaps
	// to the panel icon on hover/focus, so the brand stays visible.
	const toggleContent =
		collapsed && logo ? (
			<>
				<Box className='toggle-logo' sx={{ display: 'flex' }}>
					{logo}
				</Box>
				<PanelIcon className='toggle-icon' hidden />
			</>
		) : (
			<PanelIcon />
		);
	const headerBar = showHeaderBar ? (
		<Box
			data-testid='sidebar-header'
			sx={{
				height: HEADER_HEIGHT_PX,
				minHeight: HEADER_HEIGHT_PX,
				flexShrink: 0,
				display: 'flex',
				alignItems: 'center',
				gap: 1.5,
				bgcolor: headerBg,
				justifyContent: collapsed ? 'center' : 'flex-start',
				// Expanded: lines the toggle glyph up with the row icons below
				// (12px panel padding + 12px row padding = 24px, minus the
				// button's own 8px). Collapsed: centered like the rail icons.
				px: collapsed ? 0 : 2
			}}
		>
			<Tooltip title={toggleLabel} placement='right' arrow>
				<IconButton
					aria-label={toggleLabel}
					aria-expanded={!collapsed}
					onClick={handleToggleCollapsed}
					data-testid='sidebar-collapse-toggle'
					disableFocusRipple
					sx={{
						color: headerFg,
						'& svg': { color: 'inherit', fill: 'currentColor' },
						'&:hover, &.Mui-focusVisible': {
							'& .toggle-logo': { display: 'none' },
							'& .toggle-icon': { display: 'block' }
						},
						...FOCUS_OUTLINE_FIX
					}}
				>
					{toggleContent}
				</IconButton>
			</Tooltip>
			{!collapsed && (logo || title) ? (
				<Brand
					logo={logo}
					title={title}
					appName={title || 'App'}
					onClick={onBrandClick}
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
					color={brandColor ?? headerFg}
					testId='sidebar-header-brand'
				/>
			</Box>
		) : null;

	const horizontalPadding = showLabels ? 0.5 : collapsed ? 1 : 1.5;

	return (
		<Box
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
				overflow: 'hidden',
				transition: WIDTH_TRANSITION
			}}
		>
			{headerBar ?? railBrand}
			{topContent ? (
				<Box
					sx={{ flexShrink: 0, px: horizontalPadding, pt: 1, pb: 1 }}
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
					px: horizontalPadding,
					pt: topInsetPx && !showHeaderBar ? `${topInsetPx}px` : 1,
					pb: 2
				}}
			>
				{renderLinkStack(mainLinks)}
				{/* Bottom group, pinned to the bottom by mt:auto. With a footer
				    the divider moves below it, between the links and the user. */}
				{secondaryLinks.length > 0 ? (
					<Box sx={{ mt: 'auto', pt: 2 }}>
						{footer ? null : (
							<Divider sx={{ mb: 1, borderColor: 'divider' }} />
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
		</Box>
	);
};

export default CollapsibleSidebar;
