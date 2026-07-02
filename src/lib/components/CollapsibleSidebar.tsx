import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRounded from '@mui/icons-material/KeyboardArrowUpRounded';
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
import type { SidebarLink, SidebarSubLink } from './LumoraWrapper';
import {
	deriveGroupTint,
	getContrastText,
	isSidebarLinkActive,
	isSubLinkActive,
	readStoredCollapsed
} from './sidebarUtils';

const DEFAULT_EXPANDED_WIDTH_PX = 264;
const DEFAULT_COLLAPSED_WIDTH_PX = 72;
const DEFAULT_PERSIST_KEY = 'lumora:sidebar-collapsed';
const WIDTH_TRANSITION = 'width 200ms ease';
/** Chevron indicator size; kept clearly smaller than the item's own icon. */
const CHEVRON_FONT_SIZE_PX = 16;
/** Subtler chevron beneath the icon on the narrow collapsed rail. */
const CHEVRON_FONT_SIZE_RAIL_PX = 14;

/**
 * Expanded-row label that ellipsizes when it overflows and reveals the full text
 * as a tooltip only while truncated (same pattern as MenuContent's rail caption).
 */
const TruncatingLabel: React.FC<{ text: string }> = ({ text }) => {
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
				variant='body1'
				sx={{
					display: 'block',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					color: 'inherit'
				}}
			>
				{text}
			</Typography>
		</Tooltip>
	);
};

/** Small up/down chevron marking a parent that has a collapsible child group. */
const GroupChevron: React.FC<{ open: boolean; size?: number }> = ({
	open,
	size = CHEVRON_FONT_SIZE_PX
}) =>
	open ? (
		<KeyboardArrowUpRounded sx={{ fontSize: size, opacity: 0.75 }} />
	) : (
		<KeyboardArrowDownRounded sx={{ fontSize: size, opacity: 0.75 }} />
	);

export interface CollapsibleSidebarProps {
	mainLinks: SidebarLink[];
	/** Bottom group; rendered after a divider and pinned to the bottom. */
	secondaryLinks?: SidebarLink[];
	activePath?: string;
	onLinkClick?: (path: string) => void;
	// Branding (lives inside the sidebar header)
	/** Always visible, in both states. */
	logo?: React.ReactNode;
	/** App title; shown only when expanded. */
	title?: string;
	/** Section header above the main links (e.g. "Environment"); expanded only. */
	sectionTitle?: string;
	// Prop-driven accents
	/** Solid background of the active item (default '#01584f'). */
	activeAccentColor?: string;
	/** Light tint for a parent's child group and hover (default derived). */
	groupAccentColor?: string;
	/** Foreground on the active item; default auto-contrast from the accent. */
	activeForegroundColor?: string;
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
	expandedWidth?: number;
	collapsedWidth?: number;
}

const CollapsibleSidebar: React.FC<CollapsibleSidebarProps> = ({
	mainLinks,
	secondaryLinks = [],
	activePath,
	onLinkClick,
	activeAccentColor = '#01584f',
	groupAccentColor,
	activeForegroundColor,
	surfaceBackgroundColor,
	collapsed: collapsedProp,
	defaultCollapsed = false,
	persistKey = DEFAULT_PERSIST_KEY,
	expandedWidth = DEFAULT_EXPANDED_WIDTH_PX,
	collapsedWidth = DEFAULT_COLLAPSED_WIDTH_PX
}) => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const isControlled = collapsedProp !== undefined;

	// Uncontrolled: restore the initial value from localStorage on first render
	// (SSR-safe). The collapse toggle now lives in the navbar, so this component
	// only reads the state — it no longer mutates it.
	const [internalCollapsed] = React.useState<boolean>(
		() => readStoredCollapsed(persistKey) ?? defaultCollapsed
	);
	const collapsed = isControlled ? Boolean(collapsedProp) : internalCollapsed;

	// Path-less group parents can be manually expanded; active groups auto-open.
	const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>(
		{}
	);

	const activeAccent = activeAccentColor;
	const activeFg = activeForegroundColor ?? getContrastText(activeAccent);
	const groupTint = groupAccentColor ?? deriveGroupTint(activeAccent);
	// Surface defaults to white in light mode and the theme's paper (dark chrome)
	// in dark mode; overridable via surfaceBackgroundColor.
	const surface =
		surfaceBackgroundColor ??
		(isDark ? theme.palette.background.paper : '#ffffff');
	// Accent-colored chrome (brand title, toggle, logo, inactive icons) uses the
	// brand accent in light mode (per the mockup); in dark mode the accent is too
	// dim on the dark surface, so fall back to the theme's primary text color.
	const accentOnSurface = isDark ? 'text.primary' : activeAccent;

	const handleClick = (path: string) => {
		onLinkClick?.(path);
	};

	// Explicit toggle: pass the group's current open state so an auto-opened
	// active group can also be collapsed by the user.
	const toggleGroup = (key: string, open: boolean) => {
		setOpenGroups(prev => ({ ...prev, [key]: !open }));
	};

	// Active groups auto-open; once the user toggles, their choice wins.
	const isGroupOpen = (link: SidebarLink) =>
		openGroups[link.text] ?? isSidebarLinkActive(link, activePath);

	// --- Expanded rows -----------------------------------------------------
	const renderExpandedLeaf = (link: SidebarLink) => {
		const active = Boolean(link.path && activePath === link.path);
		return (
			<ListItemButton
				key={link.text}
				disabled={!link.path}
				selected={active}
				onClick={() => link.path && handleClick(link.path)}
				data-testid={`sidebar-item-${link.text}`}
				data-active={active ? 'true' : 'false'}
				sx={{
					borderRadius: '6px',
					py: 1,
					px: 1.5,
					color: active ? activeFg : accentOnSurface,
					bgcolor: active ? activeAccent : 'transparent',
					'& .MuiListItemIcon-root': {
						color: active ? activeFg : accentOnSurface,
						minWidth: 36
					},
					'&:hover': {
						bgcolor: active ? activeAccent : groupTint
					},
					'&.Mui-selected, &.Mui-selected:hover': {
						bgcolor: activeAccent
					}
				}}
			>
				<ListItemIcon>{link.icon}</ListItemIcon>
				<ListItemText
					disableTypography
					primary={<TruncatingLabel text={link.text} />}
				/>
			</ListItemButton>
		);
	};

	const renderExpandedGroup = (link: SidebarLink) => {
		// The tinted group container is reserved for the active group (the current
		// URL is the parent or one of its sub-items); a merely toggled-open group
		// reveals its children without the accent background.
		const groupActive = isSidebarLinkActive(link, activePath);
		const parentActive = Boolean(link.path && activePath === link.path);
		// Clicking the parent row toggles its child group open/closed.
		const open = isGroupOpen(link);

		return (
			<Box
				key={link.text}
				data-testid={`sidebar-group-${link.text}`}
				sx={{
					borderRadius: '6px',
					bgcolor: groupActive ? groupTint : 'transparent'
				}}
			>
				<ListItemButton
					onClick={() => toggleGroup(link.text, open)}
					data-testid={`sidebar-item-${link.text}`}
					data-active={parentActive ? 'true' : 'false'}
					aria-expanded={open}
					sx={{
						borderRadius: '6px',
						py: 1,
						px: 1.5,
						color: parentActive ? activeFg : accentOnSurface,
						bgcolor: parentActive ? activeAccent : 'transparent',
						'& .MuiListItemIcon-root': {
							color: parentActive ? activeFg : accentOnSurface,
							minWidth: 36
						},
						'&:hover': {
							bgcolor: parentActive ? activeAccent : groupTint
						}
					}}
				>
					<ListItemIcon>{link.icon}</ListItemIcon>
					<ListItemText
						disableTypography
						primary={<TruncatingLabel text={link.text} />}
					/>
					<GroupChevron open={open} />
				</ListItemButton>
				<Collapse in={open} timeout='auto' unmountOnExit>
					<Box
						data-testid={`sidebar-children-${link.text}`}
						sx={{ pb: 0.5 }}
					>
						{link.subitems!.map(sub => renderExpandedChild(sub))}
					</Box>
				</Collapse>
			</Box>
		);
	};

	const renderExpandedChild = (sub: SidebarSubLink) => {
		const active = isSubLinkActive(sub, activePath);
		return (
			<ListItemButton
				key={sub.path}
				selected={active}
				onClick={() => handleClick(sub.path)}
				data-testid={`sidebar-subitem-${sub.text}`}
				data-active={active ? 'true' : 'false'}
				sx={{
					borderRadius: '6px',
					mx: 0.5,
					py: 0.75,
					pl: 4,
					color: active ? activeFg : accentOnSurface,
					bgcolor: active ? activeAccent : 'transparent',
					'& .MuiListItemIcon-root': {
						color: active ? activeFg : accentOnSurface,
						minWidth: 32
					},
					'&:hover': {
						bgcolor: active ? activeAccent : 'action.hover'
					},
					'&.Mui-selected, &.Mui-selected:hover': {
						bgcolor: activeAccent
					}
				}}
			>
				{sub.icon ? <ListItemIcon>{sub.icon}</ListItemIcon> : null}
				<ListItemText
					disableTypography
					primary={<TruncatingLabel text={sub.text} />}
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
				sx={{
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
					}
				}}
			>
				{icon}
			</IconButton>
		);
		return (
			<Tooltip key={key} title={label} placement='right' arrow>
				{disabled ? <span>{button}</span> : button}
			</Tooltip>
		);
	};

	// A collapsed parent group: the parent icon with a small chevron beneath it
	// marking that it has children. The icon + chevron share one button so the
	// active (solid) and hover (tint) background covers the chevron too. Clicking
	// toggles the inline stack of child icons.
	const renderCollapsedGroup = (link: SidebarLink, open: boolean) => {
		const groupActive = isSidebarLinkActive(link, activePath);
		const parentActive = Boolean(link.path && activePath === link.path);

		const parentButton = (
			<Tooltip title={link.text} placement='right' arrow>
				<IconButton
					aria-label={link.text}
					aria-expanded={open}
					onClick={() => toggleGroup(link.text, open)}
					data-testid={`sidebar-item-${link.text}`}
					data-active={parentActive ? 'true' : 'false'}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 0,
						width: 44,
						py: 0.75,
						borderRadius: '10px',
						color: parentActive ? activeFg : accentOnSurface,
						bgcolor: parentActive ? activeAccent : 'transparent',
						// The outer pill supplies the hover tint; keep only the
						// solid active fill on the button itself.
						'&:hover': {
							bgcolor: parentActive ? activeAccent : 'transparent'
						}
					}}
				>
					{link.icon}
					<GroupChevron
						open={open}
						size={CHEVRON_FONT_SIZE_RAIL_PX}
					/>
				</IconButton>
			</Tooltip>
		);

		return (
			<Box
				data-testid={`sidebar-group-${link.text}`}
				sx={{
					width: '100%',
					borderRadius: '10px',
					py: 0.5,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 0.5,
					// The active group's pill stays tinted; any group tints on hover.
					bgcolor: groupActive ? groupTint : 'transparent',
					'&:hover': { bgcolor: groupTint }
				}}
			>
				{parentButton}
				{open
					? link.subitems!.map(sub =>
							renderCollapsedIcon(
								sub.path,
								sub.text,
								sub.icon ?? link.icon,
								isSubLinkActive(sub, activePath),
								() => handleClick(sub.path),
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

	const renderCollapsedItem = (link: SidebarLink) => {
		const hasChildren = Boolean(link.subitems?.length);

		if (hasChildren) {
			// Clicking the parent toggles its inline child stack on the rail;
			// active groups start open.
			return (
				<React.Fragment key={link.text}>
					{renderCollapsedGroup(link, isGroupOpen(link))}
				</React.Fragment>
			);
		}

		// Leaf: single icon with a label tooltip. Wrapped in a full-width,
		// center-justified row so it lines up with the (full-width) group items
		// regardless of the Stack's alignment or any host-app icon-button styles.
		return (
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
					Boolean(link.path && activePath === link.path),
					link.path ? () => handleClick(link.path!) : undefined
				)}
			</Box>
		);
	};

	// --- Item dispatch -----------------------------------------------------
	const renderItem = (link: SidebarLink) => {
		if (collapsed) {
			return renderCollapsedItem(link);
		}
		if (link.subitems?.length) {
			return renderExpandedGroup(link);
		}
		return renderExpandedLeaf(link);
	};

	const width = collapsed ? collapsedWidth : expandedWidth;

	return (
		<Box
			component='nav'
			aria-label='Main sidebar'
			data-testid='collapsible-sidebar'
			data-collapsed={collapsed ? 'true' : 'false'}
			sx={{
				width,
				minWidth: width,
				height: '100%',
				boxSizing: 'border-box',
				bgcolor: surface,
				display: 'flex',
				flexDirection: 'column',
				overflowX: 'hidden',
				overflowY: 'auto',
				transition: WIDTH_TRANSITION,
				px: collapsed ? 1 : 2,
				pt: 1,
				pb: 2
			}}
		>
			{/* Main links */}
			<Stack
				spacing={0.5}
				sx={{
					width: '100%',
					alignItems: collapsed ? 'center' : 'stretch'
				}}
			>
				{mainLinks.map(link => renderItem(link))}
			</Stack>

			{/* Bottom group */}
			{secondaryLinks.length > 0 ? (
				<Box sx={{ mt: 'auto', pt: 2 }}>
					<Divider sx={{ mb: 1, borderColor: 'divider' }} />
					<Stack
						spacing={0.5}
						sx={{
							width: '100%',
							alignItems: collapsed ? 'center' : 'stretch'
						}}
					>
						{secondaryLinks.map(link => renderItem(link))}
					</Stack>
				</Box>
			) : null}
		</Box>
	);
};

export default CollapsibleSidebar;
