import KeyboardDoubleArrowLeftRounded from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardDoubleArrowRightRounded from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
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
	readStoredCollapsed,
	writeStoredCollapsed
} from './sidebarUtils';

const DEFAULT_EXPANDED_WIDTH_PX = 264;
const DEFAULT_COLLAPSED_WIDTH_PX = 72;
const DEFAULT_PERSIST_KEY = 'lumora:sidebar-collapsed';
const WIDTH_TRANSITION = 'width 200ms ease';

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
	logo,
	title,
	sectionTitle,
	activeAccentColor = '#01584f',
	groupAccentColor,
	activeForegroundColor,
	surfaceBackgroundColor,
	collapsed: collapsedProp,
	defaultCollapsed = false,
	onCollapsedChange,
	persistKey = DEFAULT_PERSIST_KEY,
	expandedWidth = DEFAULT_EXPANDED_WIDTH_PX,
	collapsedWidth = DEFAULT_COLLAPSED_WIDTH_PX
}) => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const isControlled = collapsedProp !== undefined;

	// Uncontrolled: restore from localStorage on first render (SSR-safe).
	const [internalCollapsed, setInternalCollapsed] = React.useState<boolean>(
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

	const setCollapsed = (next: boolean) => {
		if (!isControlled) {
			setInternalCollapsed(next);
			writeStoredCollapsed(persistKey, next);
		}
		onCollapsedChange?.(next);
	};

	const handleClick = (path: string) => {
		onLinkClick?.(path);
	};

	const toggleGroup = (key: string) => {
		setOpenGroups(prev => ({ ...prev, [key]: !prev[key] }));
	};

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
					color: active ? activeFg : 'text.primary',
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
					primary={link.text}
					primaryTypographyProps={{ noWrap: true }}
				/>
			</ListItemButton>
		);
	};

	const renderExpandedGroup = (link: SidebarLink) => {
		const groupActive = isSidebarLinkActive(link, activePath);
		const parentActive = Boolean(link.path && activePath === link.path);
		const showChildren = groupActive || Boolean(openGroups[link.text]);
		return (
			<Box key={link.text} data-testid={`sidebar-group-${link.text}`}>
				<ListItemButton
					onClick={() =>
						link.path
							? handleClick(link.path)
							: toggleGroup(link.text)
					}
					data-testid={`sidebar-item-${link.text}`}
					data-active={parentActive ? 'true' : 'false'}
					sx={{
						borderRadius: '6px',
						py: 1,
						px: 1.5,
						color: parentActive ? activeFg : 'text.primary',
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
						primary={link.text}
						primaryTypographyProps={{ noWrap: true }}
					/>
				</ListItemButton>
				<Collapse in={showChildren} timeout='auto' unmountOnExit>
					<Box
						data-testid={`sidebar-children-${link.text}`}
						sx={{
							mt: 0.5,
							borderRadius: '6px',
							bgcolor: groupTint,
							py: 0.5
						}}
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
					color: active ? activeFg : 'text.primary',
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
					primary={sub.text}
					primaryTypographyProps={{ noWrap: true }}
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

	const renderCollapsedItem = (link: SidebarLink) => {
		const hasChildren = Boolean(link.subitems?.length);
		const groupActive = isSidebarLinkActive(link, activePath);

		// Active parent → show the whole group inline on the rail.
		if (hasChildren && groupActive) {
			const parentActive = Boolean(link.path && activePath === link.path);
			return (
				<Box
					key={link.text}
					data-testid={`sidebar-group-${link.text}`}
					sx={{
						width: '100%',
						borderRadius: '10px',
						bgcolor: groupTint,
						py: 0.5,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: 0.5
					}}
				>
					{renderCollapsedIcon(
						link.text,
						link.text,
						link.icon,
						parentActive,
						link.path ? () => handleClick(link.path!) : undefined,
						{ insideGroup: true }
					)}
					{link.subitems!.map(sub =>
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
					)}
				</Box>
			);
		}

		// Leaf, or an inactive parent: single icon. A path-less parent expands.
		const onClick = link.path
			? () => handleClick(link.path!)
			: hasChildren
				? () => setCollapsed(false)
				: undefined;
		return renderCollapsedIcon(
			link.text,
			link.text,
			link.icon,
			Boolean(link.path && activePath === link.path),
			onClick
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
				py: 2
			}}
		>
			{/* Header: title (expanded only) + logo (always), logo on the right */}
			<Stack
				direction='row'
				alignItems='center'
				justifyContent={collapsed ? 'center' : 'flex-start'}
				spacing={1.5}
				sx={{ minHeight: 40, px: collapsed ? 0 : 0.5 }}
			>
				{!collapsed && title ? (
					<Typography
						data-testid='sidebar-title'
						variant='h6'
						sx={{
							fontWeight: 700,
							fontSize: '20px',
							lineHeight: 1,
							textTransform: 'uppercase',
							color: accentOnSurface,
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis'
						}}
					>
						{title}
					</Typography>
				) : null}
				{logo ? (
					<Box
						data-testid='sidebar-logo'
						sx={{
							display: 'flex',
							alignItems: 'center',
							flexShrink: 0,
							color: accentOnSurface,
							'& svg': { color: 'inherit', fill: 'currentColor' }
						}}
					>
						{logo}
					</Box>
				) : null}
			</Stack>

			{/* Section title + collapse/expand toggle */}
			<Stack
				direction='row'
				alignItems='center'
				justifyContent={collapsed ? 'center' : 'space-between'}
				sx={{ mt: 2, mb: 1, minHeight: 32 }}
			>
				{!collapsed && sectionTitle ? (
					<Typography
						data-testid='sidebar-section-title'
						variant='caption'
						sx={{
							px: 0.5,
							fontWeight: 600,
							letterSpacing: '0.06em',
							textTransform: 'uppercase',
							color: 'text.primary'
						}}
					>
						{sectionTitle}
					</Typography>
				) : null}
				<Tooltip
					title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
					placement='right'
					arrow
				>
					<IconButton
						size='small'
						aria-label={
							collapsed ? 'Expand sidebar' : 'Collapse sidebar'
						}
						data-testid='sidebar-toggle'
						onClick={() => setCollapsed(!collapsed)}
						disableFocusRipple
						sx={{
							color: accentOnSurface,
							'&:focus, &:focus-visible': { outline: 'none' }
						}}
					>
						{collapsed ? (
							<KeyboardDoubleArrowRightRounded fontSize='small' />
						) : (
							<KeyboardDoubleArrowLeftRounded fontSize='small' />
						)}
					</IconButton>
				</Tooltip>
			</Stack>

			{/* Main links */}
			<Stack spacing={0.5} sx={{ width: '100%' }}>
				{mainLinks.map(link => renderItem(link))}
			</Stack>

			{/* Bottom group */}
			{secondaryLinks.length > 0 ? (
				<Box sx={{ mt: 'auto', pt: 2 }}>
					<Divider sx={{ mb: 1, borderColor: 'divider' }} />
					<Stack spacing={0.5} sx={{ width: '100%' }}>
						{secondaryLinks.map(link => renderItem(link))}
					</Stack>
				</Box>
			) : null}
		</Box>
	);
};

export default CollapsibleSidebar;
