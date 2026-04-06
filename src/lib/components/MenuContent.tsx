import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import type { SidebarLink, SidebarSubLink } from './LumoraWrapper';

const CLOSE_DELAY_MS = 180;
/** Max width for rail subitem popover; longer labels truncate with ellipsis */
const RAIL_SUBMENU_MAX_WIDTH_PX = 250;

export type MenuContentVariant = 'rail' | 'drawer';

interface MenuContentProps {
	variant: MenuContentVariant;
	mainLinks: SidebarLink[];
	secondaryLinks?: SidebarLink[];
	activePath?: string;
	onLinkClick?: (path: string) => void;
	accentColor?: string;
	/** Popover panel behind sublinks; matches desktop sidebar strip (e.g. contentBackgroundColor). */
	surfaceBackgroundColor?: string;
}

// Parent active if its path or any direct subitem path matches
const isSidebarLinkActive = (link: SidebarLink, activePath?: string) => {
	if (!activePath) {
		return false;
	}
	if (link.path && activePath === link.path) {
		return true;
	}
	return link.subitems?.some(s => s.path === activePath) ?? false;
};

const isSubLinkActive = (sub: SidebarSubLink, activePath?: string) =>
	Boolean(activePath && sub.path === activePath);

// --- Desktop rail: item with hover/keyboard submenu (subitems only in popper; parent uses icon click for path)
type RailSubmenuProps = {
	link: SidebarLink;
	activePath?: string;
	onLinkClick?: (path: string) => void;
	accentColor: string;
	isSecondary: boolean;
	surfaceBackgroundColor: string;
};

const RailSubmenuRow: React.FC<RailSubmenuProps> = ({
	link,
	activePath,
	onLinkClick,
	accentColor,
	isSecondary,
	surfaceBackgroundColor
}) => {
	const theme = useTheme();
	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
	const [open, setOpen] = React.useState(false);
	const closeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(
		null
	);
	const popoverRef = React.useRef<HTMLDivElement | null>(null);
	const triggerRef = React.useRef<HTMLButtonElement | null>(null);
	const mouseOnTriggerRef = React.useRef(false);
	const focusFirstOnOpenRef = React.useRef(false);
	const menuListId = React.useId();

	const cancelClose = () => {
		if (closeTimerRef.current) {
			clearTimeout(closeTimerRef.current);
			closeTimerRef.current = null;
		}
	};

	const scheduleClose = () => {
		cancelClose();
		closeTimerRef.current = setTimeout(() => {
			setOpen(false);
			closeTimerRef.current = null;
		}, CLOSE_DELAY_MS);
	};

	const handleOpen = () => {
		cancelClose();
		setOpen(true);
	};

	React.useEffect(() => {
		if (!open) {
			return;
		}
		const onDocKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setOpen(false);
				triggerRef.current?.focus();
			}
		};
		document.addEventListener('keydown', onDocKeyDown);
		return () => document.removeEventListener('keydown', onDocKeyDown);
	}, [open]);

	React.useEffect(() => {
		if (!open || !focusFirstOnOpenRef.current) {
			return;
		}
		const t = globalThis.requestAnimationFrame(() => {
			const first = popoverRef.current?.querySelector(
				'[role="menuitem"]'
			) as HTMLElement | null;
			first?.focus();
			focusFirstOnOpenRef.current = false;
		});
		return () => cancelAnimationFrame(t);
	}, [open]);

	const active = isSidebarLinkActive(link, activePath);
	const size = isSecondary ? 48 : 44;
	const inactiveColor = isSecondary ? 'text.secondary' : accentColor;
	// Filled rail look when this parent or one of its subitems is active (not for the whole popover)
	const selectedRailFill = isSecondary ? '#01584F' : accentColor;

	const iconButton = (
		<IconButton
			ref={triggerRef}
			component={link.path ? 'a' : 'button'}
			href={link.path || undefined}
			aria-label={link.text}
			onFocus={() => {
				// Keyboard / programmatic focus: open when pointer did not already enter the trigger
				if (!mouseOnTriggerRef.current) {
					handleOpen();
				}
			}}
			onBlur={(e: React.FocusEvent) => {
				const next = e.relatedTarget as Node | null;
				if (next && popoverRef.current?.contains(next)) {
					return;
				}
				scheduleClose();
			}}
			onKeyDown={(e: React.KeyboardEvent) => {
				if (e.key === 'ArrowDown') {
					e.preventDefault();
					focusFirstOnOpenRef.current = true;
					handleOpen();
				}
			}}
			onClick={(e: React.MouseEvent) => {
				e.preventDefault();
				e.stopPropagation();
				if (link.path) {
					onLinkClick?.(link.path);
				}
			}}
			aria-haspopup='menu'
			aria-expanded={open}
			aria-controls={open ? menuListId : undefined}
			data-testid={`rail-submenu-trigger-${link.text}`}
			sx={{
				width: size,
				height: size,
				color: active ? '#ffffff' : inactiveColor,
				backgroundColor: active ? selectedRailFill : 'transparent',
				borderRadius: active ? '4px' : '50%',
				'&:hover': {
					backgroundColor: active ? selectedRailFill : 'action.hover',
					borderRadius: '4px'
				}
			}}
		>
			{link.icon}
		</IconButton>
	);

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center'
			}}
		>
			<Box
				ref={setAnchorEl}
				data-testid={`rail-submenu-anchor-${link.text}`}
				sx={{ display: 'inline-flex' }}
				onMouseEnter={() => {
					mouseOnTriggerRef.current = true;
					handleOpen();
				}}
				onMouseLeave={() => {
					mouseOnTriggerRef.current = false;
					scheduleClose();
				}}
			>
				<Tooltip title={link.text} placement='right' arrow>
					{iconButton}
				</Tooltip>
			</Box>
			<Popper
				open={open && Boolean(anchorEl)}
				anchorEl={anchorEl}
				placement='right-start'
				modifiers={[{ name: 'offset', options: { offset: [8, 0] } }]}
				sx={{ zIndex: themeArg => themeArg.zIndex.modal }}
			>
				<Paper
					ref={popoverRef}
					elevation={0}
					onMouseEnter={() => {
						cancelClose();
					}}
					onMouseLeave={scheduleClose}
					data-testid={`rail-submenu-panel-${link.text}`}
					sx={{
						bgcolor: surfaceBackgroundColor,
						backgroundImage: 'none',
						borderRadius: '4px',
						border: '1px solid',
						borderColor: 'divider',
						boxShadow: theme.shadows[8],
						maxWidth: RAIL_SUBMENU_MAX_WIDTH_PX,
						minWidth: 0,
						py: 0.5,
						boxSizing: 'border-box'
					}}
				>
					<MenuList
						id={menuListId}
						dense
						autoFocus={false}
						role='menu'
						sx={{
							bgcolor: 'transparent',
							py: 0,
							maxWidth: RAIL_SUBMENU_MAX_WIDTH_PX
						}}
					>
						{link.subitems!.map(sub => (
							<MenuItem
								key={sub.path}
								role='menuitem'
								title={sub.text}
								selected={isSubLinkActive(sub, activePath)}
								onClick={e => {
									e.preventDefault();
									onLinkClick?.(sub.path);
									setOpen(false);
								}}
								sx={{
									borderRadius: '4px',
									mx: 0.5,
									my: 0.125,
									maxWidth: '100%',
									overflow: 'hidden',
									color: isSecondary
										? 'text.secondary'
										: accentColor,
									'& .MuiListItemIcon-root': {
										color: 'inherit',
										minWidth: 36,
										flexShrink: 0,
										'& .MuiSvgIcon-root': {
											color: 'inherit'
										}
									},
									'& .MuiListItemText-root': {
										flex: '1 1 auto',
										minWidth: 0,
										overflow: 'hidden'
									},
									'& .MuiTypography-root': {
										color: 'inherit',
										overflow: 'hidden',
										textOverflow: 'ellipsis',
										whiteSpace: 'nowrap'
									},
									'&:hover': {
										bgcolor: 'action.hover',
										borderRadius: '4px'
									},
									'&.Mui-selected': {
										bgcolor: selectedRailFill,
										color: '#ffffff',
										'&:hover': {
											bgcolor: selectedRailFill
										}
									},
									'&.Mui-focusVisible': {
										bgcolor: 'action.focus'
									}
								}}
							>
								{sub.icon ? (
									<ListItemIcon>{sub.icon}</ListItemIcon>
								) : null}
								<ListItemText
									primary={sub.text}
									primaryTypographyProps={{
										noWrap: true
									}}
								/>
							</MenuItem>
						))}
					</MenuList>
				</Paper>
			</Popper>
		</Box>
	);
};

type RailLeafProps = {
	link: SidebarLink;
	activePath?: string;
	onLinkClick?: (path: string) => void;
	accentColor: string;
	isSecondary: boolean;
};

const RailLeafRow: React.FC<RailLeafProps> = ({
	link,
	activePath,
	onLinkClick,
	accentColor,
	isSecondary
}) => {
	const active = Boolean(link.path && activePath === link.path);
	const size = isSecondary ? 48 : 44;
	const inactiveColor = isSecondary ? 'text.secondary' : accentColor;
	const activeBg = isSecondary ? '#01584F' : accentColor;

	const iconButton = (
		<IconButton
			component={link.path ? 'a' : 'button'}
			href={link.path || undefined}
			aria-label={link.text}
			onClick={(e: React.MouseEvent) => {
				e.preventDefault();
				e.stopPropagation();
				if (link.path) {
					onLinkClick?.(link.path);
				}
			}}
			disabled={!link.path}
			sx={{
				width: size,
				height: size,
				color: active ? '#ffffff' : inactiveColor,
				backgroundColor: active ? activeBg : 'transparent',
				borderRadius: active ? '4px' : '50%',
				'&:hover': {
					backgroundColor: active ? activeBg : 'action.hover',
					borderRadius: '4px'
				}
			}}
		>
			{link.icon}
		</IconButton>
	);

	return (
		<Tooltip title={link.text} placement='right' arrow>
			{iconButton}
		</Tooltip>
	);
};

type DrawerGroupProps = {
	link: SidebarLink;
	expanded: boolean;
	onToggle: () => void;
	activePath?: string;
	onLinkClick?: (path: string) => void;
	accentColor: string;
	isSecondary: boolean;
};

const DrawerExpandableRow: React.FC<DrawerGroupProps> = ({
	link,
	expanded,
	onToggle,
	activePath,
	onLinkClick,
	accentColor,
	isSecondary
}) => {
	const active = isSidebarLinkActive(link, activePath);
	const inactiveColor = isSecondary ? 'text.secondary' : accentColor;
	const activeBg = isSecondary ? '#01584F' : accentColor;

	return (
		<>
			<ListItemButton
				onClick={onToggle}
				sx={{
					py: 1.5,
					px: 2,
					color: active ? '#ffffff' : inactiveColor,
					bgcolor: active ? activeBg : 'transparent',
					'&:hover': {
						bgcolor: active ? activeBg : 'action.hover'
					}
				}}
				data-testid={`drawer-expand-trigger-${link.text}`}
			>
				<ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
					{link.icon}
				</ListItemIcon>
				<ListItemText primary={link.text} />
				{expanded ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<Box component='nav' aria-label={link.text}>
					{link.path ? (
						<ListItemButton
							sx={{ pl: 4, py: 1 }}
							onClick={() =>
								link.path && onLinkClick?.(link.path)
							}
							selected={Boolean(
								activePath && activePath === link.path
							)}
							data-testid={`drawer-parent-path-${link.text}`}
						>
							<ListItemText primary={link.text} />
						</ListItemButton>
					) : null}
					{link.subitems!.map(sub => (
						<ListItemButton
							key={sub.path}
							sx={{ pl: 4, py: 1 }}
							onClick={() => onLinkClick?.(sub.path)}
							selected={isSubLinkActive(sub, activePath)}
						>
							{sub.icon ? (
								<ListItemIcon sx={{ minWidth: 36 }}>
									{sub.icon}
								</ListItemIcon>
							) : null}
							<ListItemText primary={sub.text} />
						</ListItemButton>
					))}
				</Box>
			</Collapse>
		</>
	);
};

type DrawerLeafProps = {
	link: SidebarLink;
	activePath?: string;
	onLinkClick?: (path: string) => void;
	accentColor: string;
	isSecondary: boolean;
};

const DrawerLeafRow: React.FC<DrawerLeafProps> = ({
	link,
	activePath,
	onLinkClick,
	accentColor,
	isSecondary
}) => {
	const active = Boolean(link.path && activePath === link.path);
	const inactiveColor = isSecondary ? 'text.secondary' : accentColor;
	const activeBg = isSecondary ? '#01584F' : accentColor;

	return (
		<ListItemButton
			disabled={!link.path}
			onClick={() => link.path && onLinkClick?.(link.path)}
			sx={{
				py: 1.5,
				px: 2,
				color: active ? '#ffffff' : inactiveColor,
				bgcolor: active ? activeBg : 'transparent',
				'&:hover': {
					bgcolor: active ? activeBg : 'action.hover'
				}
			}}
		>
			<ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
				{link.icon}
			</ListItemIcon>
			<ListItemText primary={link.text} />
		</ListItemButton>
	);
};

const RailDivider = () => (
	<Box
		sx={{
			width: '100%',
			display: 'flex',
			justifyContent: 'center'
		}}
	>
		<Divider sx={{ width: '60%', borderColor: 'divider' }} />
	</Box>
);

const MenuContent: React.FC<MenuContentProps> = ({
	variant,
	mainLinks,
	secondaryLinks = [],
	activePath,
	onLinkClick,
	accentColor = '#01584f',
	surfaceBackgroundColor: surfaceBackgroundColorProp
}) => {
	const theme = useTheme();
	const railSubmenuSurface =
		surfaceBackgroundColorProp ?? theme.palette.background.paper;

	const handleLinkClick = (path: string) => {
		if (onLinkClick) {
			onLinkClick(path);
		}
	};

	const [drawerExpandedMain, setDrawerExpandedMain] = React.useState<
		Record<number, boolean>
	>({});
	const [drawerExpandedSecondary, setDrawerExpandedSecondary] =
		React.useState<Record<number, boolean>>({});

	const toggleDrawerMain = (index: number) => {
		setDrawerExpandedMain(prev => ({
			...prev,
			[index]: !prev[index]
		}));
	};

	const toggleDrawerSecondary = (index: number) => {
		setDrawerExpandedSecondary(prev => ({
			...prev,
			[index]: !prev[index]
		}));
	};

	const renderRailLink = (link: SidebarLink, isSecondary: boolean) => {
		if (link.subitems?.length) {
			return (
				<RailSubmenuRow
					link={link}
					activePath={activePath}
					onLinkClick={handleLinkClick}
					accentColor={accentColor}
					isSecondary={isSecondary}
					surfaceBackgroundColor={railSubmenuSurface}
				/>
			);
		}
		return (
			<RailLeafRow
				link={link}
				activePath={activePath}
				onLinkClick={handleLinkClick}
				accentColor={accentColor}
				isSecondary={isSecondary}
			/>
		);
	};

	const renderDrawerLink = (
		link: SidebarLink,
		index: number,
		isSecondary: boolean
	) => {
		if (link.subitems?.length) {
			const expanded = isSecondary
				? Boolean(drawerExpandedSecondary[index])
				: Boolean(drawerExpandedMain[index]);
			const onToggle = () =>
				isSecondary
					? toggleDrawerSecondary(index)
					: toggleDrawerMain(index);
			return (
				<DrawerExpandableRow
					link={link}
					expanded={expanded}
					onToggle={onToggle}
					activePath={activePath}
					onLinkClick={handleLinkClick}
					accentColor={accentColor}
					isSecondary={isSecondary}
				/>
			);
		}
		return (
			<DrawerLeafRow
				link={link}
				activePath={activePath}
				onLinkClick={handleLinkClick}
				accentColor={accentColor}
				isSecondary={isSecondary}
			/>
		);
	};

	if (variant === 'drawer') {
		return (
			<Stack
				sx={{
					flexGrow: 1,
					width: '100%',
					alignItems: 'stretch',
					pt: 2,
					gap: 0
				}}
			>
				<Stack sx={{ width: '100%' }}>
					{mainLinks.map((link, index) => (
						<React.Fragment key={index}>
							{renderDrawerLink(link, index, false)}
							{index < mainLinks.length - 1 ? (
								<RailDivider />
							) : null}
						</React.Fragment>
					))}
				</Stack>
				{secondaryLinks.length > 0 ? (
					<>
						<Box
							sx={{
								width: '100%',
								my: 2,
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<Divider
								sx={{ width: '60%', borderColor: 'divider' }}
							/>
						</Box>
						<Box sx={{ mt: 'auto', pb: 2 }}>
							<Stack sx={{ width: '100%' }}>
								{secondaryLinks.map((link, index) => (
									<React.Fragment key={index}>
										{renderDrawerLink(link, index, true)}
										{index < secondaryLinks.length - 1 ? (
											<RailDivider />
										) : null}
									</React.Fragment>
								))}
							</Stack>
						</Box>
					</>
				) : null}
			</Stack>
		);
	}

	// variant === 'rail'
	return (
		<Stack
			sx={{
				flexGrow: 1,
				justifyContent: 'flex-start',
				alignItems: 'center',
				pt: 2,
				gap: 1
			}}
		>
			{mainLinks.map((link, index) => (
				<React.Fragment key={index}>
					{renderRailLink(link, false)}
					{index < mainLinks.length - 1 ? <RailDivider /> : null}
				</React.Fragment>
			))}
			{secondaryLinks.length > 0 ? (
				<>
					<Box
						sx={{
							width: '100%',
							my: 2,
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<Divider
							sx={{ width: '60%', borderColor: 'divider' }}
						/>
					</Box>
					<Box sx={{ mt: 'auto', pb: 2 }}>
						<Stack gap={1} alignItems='center'>
							{secondaryLinks.map((link, index) => (
								<React.Fragment key={index}>
									{renderRailLink(link, true)}
									{index < secondaryLinks.length - 1 ? (
										<RailDivider />
									) : null}
								</React.Fragment>
							))}
						</Stack>
					</Box>
				</>
			) : null}
		</Stack>
	);
};

export default MenuContent;
