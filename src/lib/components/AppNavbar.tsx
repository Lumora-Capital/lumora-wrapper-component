import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import type { SxProps, Theme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import MuiToolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';

const Toolbar = styled(MuiToolbar)({
	width: '100%',
	padding: '8px 16px',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: '16px',
	flexShrink: 0
});

interface AppNavbarProps {
	appName?: string;
	pageName?: string;
	onMenuClick?: () => void;
	showMenuButton?: boolean;
	/**
	 * Mobile viewport flag from the wrapper. When true, the profile block and theme
	 * toggle are omitted here because they live in the mobile sidebar instead.
	 */
	isMobile?: boolean;
	/**
	 * Current collapsed state of the sidebar. Only used to label the menu
	 * (hamburger) button as "Expand sidebar" / "Collapse sidebar" when the button
	 * toggles a desktop collapsible sidebar. Leave undefined for the mobile drawer.
	 */
	sidebarCollapsed?: boolean;
	/** Show the logo + app name block. */
	showBrand?: boolean;
	/**
	 * Brand logo node. When provided it is rendered in the brand block (already
	 * sized/tinted by the caller). Falls back to the bundled logo asset otherwise.
	 */
	logo?: React.ReactNode;
	headerStyles?: SxProps<Theme>;
	// Right side content
	userName?: string;
	userEmail?: string;
	userAvatar?: string;
	onProfileClick?: () => void;
	onAccountClick?: () => void;
	onSettingsClick?: () => void;
	showSettings?: boolean;
	onLogout?: () => void;
	showNotifications?: boolean;
	notificationCount?: number;
	onNotificationBellClick?: () => void;
	// Theme toggler props
	theme?: 'dark' | 'light';
	showThemeToggler?: boolean;
	onThemeToggle?: () => void;
	// Search bar props
	showSearchbar?: boolean;
	searchValue?: string;
	onSearchChange?: (value: string) => void;
	onSearchSubmit?: (value: string) => void;
	// Profile props
	showProfile?: boolean;
	userRole?: string;
	// Accent color prop
	accentColor?: string;
	contentBackgroundColor?: string;
	// Navbar styling props
	navbarBackground?: string;
	navbarAccentColor?: string;
	// Custom navbar component
	customNavbar?: React.ComponentType<any>;
	customNavbarProps?: Record<string, any>;
	rightExtraContent?: Array<{
		key: string;
		name: string;
		role: string;
		avatar?: string;
		onClick?: () => void;
		type: 'profile' | 'divider';
		disabled?: boolean;
		tooltip?: string;
	}>;
}

const AppNavbar: React.FC<AppNavbarProps> = ({
	appName = 'Dashboard',
	pageName = 'Home',
	onMenuClick,
	showMenuButton = true,
	isMobile = false,
	sidebarCollapsed,
	showBrand = true,
	logo,
	headerStyles,
	userName = 'User Name',
	userEmail,
	userAvatar,
	onProfileClick,
	onAccountClick,
	onSettingsClick,
	showSettings = true,
	onLogout,
	showNotifications = false,
	notificationCount = 0,
	onNotificationBellClick,
	theme = 'light',
	showThemeToggler = false,
	onThemeToggle,
	showSearchbar = true,
	searchValue,
	onSearchChange,
	onSearchSubmit,
	showProfile = true,
	userRole,
	accentColor = '#01584f',
	contentBackgroundColor = '#f2f9fc',
	navbarBackground = '#ff0000',
	navbarAccentColor = '#000000',
	rightExtraContent = [],
	customNavbar: CustomNavbar,
	customNavbarProps
}) => {
	const isUpMd = useMediaQuery(theme => theme.breakpoints.up('md'));
	const [profileMenuAnchor, setProfileMenuAnchor] =
		React.useState<null | HTMLElement>(null);
	const profileMenuOpen = Boolean(profileMenuAnchor);
	const isDarkTheme = theme === 'dark';
	// Brand chrome (menu button, app name, logo) follows the accent color in light
	// mode; in dark mode the accent is too dim on the dark bar, so fall back to the
	// theme's primary text color — matching the sidebar items and the tinted logo.
	const brandColor = isDarkTheme ? 'text.primary' : accentColor;
	const themeToggleLabel = isDarkTheme
		? 'Switch to light mode'
		: 'Switch to dark mode';
	// When the menu button drives a desktop collapsible sidebar we know its state
	// and can label the action precisely; otherwise it opens the mobile drawer.
	const menuButtonLabel =
		sidebarCollapsed === undefined
			? 'Open navigation menu'
			: sidebarCollapsed
				? 'Expand sidebar'
				: 'Collapse sidebar';

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onSearchChange?.(event.target.value);
	};

	const handleSearchKeyDown = (
		event: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (event.key === 'Enter' && onSearchSubmit && searchValue) {
			onSearchSubmit(searchValue);
		}
	};

	// Format role for display
	const formatRole = (role?: string) => {
		if (!role) return 'User';
		// Convert "USER" to "User", "ADMIN" to "Admin", etc.
		return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
	};

	const handleProfileMenuClick = (event: React.MouseEvent<HTMLElement>) => {
		setProfileMenuAnchor(event.currentTarget);
	};

	const handleProfileMenuClose = () => {
		setProfileMenuAnchor(null);
	};

	const handleMenuItemClick = (callback?: () => void) => {
		callback?.();
		handleProfileMenuClose();
	};

	return (
		<AppBar
			position='fixed'
			sx={{
				boxShadow: 0,
				background: navbarBackground,
				top: 'var(--template-frame-height, 0px)',
				left: 0,
				width: '100%',
				zIndex: 1,
				height: '60px',
				...headerStyles
			}}
		>
			<Toolbar variant='dense' sx={{ height: '100%' }}>
				{/* Left Section: Logo + Search Bar */}
				<Stack
					direction='row'
					sx={{
						alignItems: 'center',
						gap: 2,
						flexShrink: 0,
						flexGrow: 1
					}}
				>
					{showMenuButton && (
						<Tooltip title={menuButtonLabel} placement='bottom'>
							<IconButton
								aria-label={menuButtonLabel}
								onClick={onMenuClick}
								disableFocusRipple
								sx={{
									// Nudge left so the icon centers on the sidebar
									// icon rail (72px wide → 36px center) below it.
									ml: -1,
									color: brandColor,
									'&:hover': {
										backgroundColor: 'action.hover'
									},
									'&:focus, &:focus-visible': {
										outline: 'none'
									}
								}}
							>
								<MenuRoundedIcon />
							</IconButton>
						</Tooltip>
					)}
					{/* Logo */}
					{showBrand && (
						<Stack
							direction='row'
							sx={{
								alignItems: 'center',
								gap: 1,
								flexShrink: 0
							}}
						>
							<Typography
								variant='h6'
								sx={{
									color: brandColor,
									fontWeight: 600,
									fontSize: '20px',
									lineHeight: 1,
									textTransform: 'uppercase'
								}}
							>
								{appName}
							</Typography>
							{logo ? (
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										flexShrink: 0,
										color: brandColor,
										'& svg': {
											color: 'inherit',
											fill: 'currentColor'
										}
									}}
								>
									{logo}
								</Box>
							) : (
								<img
									src='/lumora-logo.svg'
									alt={`${appName} logo`}
									width={24}
									height={24}
									style={{ flexShrink: 0 }}
								/>
							)}
						</Stack>
					)}
					{/* Custom Navbar or Search Bar */}
					{CustomNavbar ? (
						<CustomNavbar {...(customNavbarProps || {})} />
					) : (
						showSearchbar &&
						isUpMd && (
							<TextField
								placeholder='Search for deals or documents...'
								value={searchValue || ''}
								onChange={handleSearchChange}
								onKeyDown={handleSearchKeyDown}
								size='small'
								sx={{
									width: '400px',
									'& .MuiOutlinedInput-root': {
										backgroundColor: contentBackgroundColor,
										borderRadius: '8px',
										'& fieldset': {
											borderColor: 'transparent'
										},
										'&:hover fieldset': {
											borderColor: 'transparent'
										},
										'&.Mui-focused fieldset': {
											borderColor: accentColor
										}
									}
								}}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<SearchRoundedIcon
												sx={{
													color: navbarAccentColor
												}}
											/>
										</InputAdornment>
									)
								}}
							/>
						)
					)}
				</Stack>

				{/* Right Section: Notifications + Profile */}
				<Stack
					direction='row'
					sx={{
						alignItems: 'center',
						gap: 1.5,
						flexShrink: 0
					}}
				>
					{/* Theme Toggler (desktop only; on mobile it lives in the sidebar) */}
					{showThemeToggler && !isMobile && (
						<Tooltip title={themeToggleLabel} placement='bottom'>
							<span>
								<IconButton
									size='small'
									onClick={onThemeToggle}
									disabled={!onThemeToggle}
									aria-label={themeToggleLabel}
									sx={{
										color: navbarAccentColor,
										'&:hover': {
											backgroundColor: 'action.hover'
										}
									}}
								>
									{isDarkTheme ? (
										<LightModeIcon fontSize='small' />
									) : (
										<DarkModeIcon fontSize='small' />
									)}
								</IconButton>
							</span>
						</Tooltip>
					)}
					{/* Notifications */}
					{showNotifications && (
						<Badge
							color='error'
							badgeContent={notificationCount}
							invisible={notificationCount === 0}
							sx={{
								'& .MuiBadge-badge': {
									right: 2,
									top: 2
								}
							}}
						>
							<IconButton
								size='small'
								onClick={onNotificationBellClick}
								aria-label={
									notificationCount
										? `Notifications, ${notificationCount} unread`
										: 'Notifications'
								}
								sx={{ color: navbarAccentColor }}
							>
								<NotificationsOutlinedIcon />
							</IconButton>
						</Badge>
					)}
					{/* Divider */}
					{showNotifications && showProfile && !isMobile && (
						<Divider
							orientation='vertical'
							flexItem
							sx={{
								borderColor: 'rgba(0, 0, 0, 0.12)',
								height: '24px',
								alignSelf: 'center'
							}}
						/>
					)}
					{/* Profile (desktop only; on mobile it lives in the sidebar) */}
					{showProfile && !isMobile && (
						<>
							<Stack
								direction='row'
								onClick={handleProfileMenuClick}
								sx={{
									alignItems: 'center',
									gap: 1,
									cursor: 'pointer',
									borderRadius: '8px',
									padding: '4px 8px',
									'&:hover': {
										backgroundColor: 'action.hover'
									}
								}}
							>
								{userAvatar ? (
									<Avatar
										src={userAvatar}
										sx={{ width: 32, height: 32 }}
									/>
								) : (
									<AccountCircleRoundedIcon
										sx={{
											width: 32,
											height: 32,
											color: navbarAccentColor
										}}
									/>
								)}
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'flex-start',
										minWidth: 0
									}}
								>
									<Typography
										variant='body2'
										sx={{
											color: navbarAccentColor,
											fontWeight: 500,
											lineHeight: 1.2,
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											whiteSpace: 'nowrap',
											maxWidth: '150px'
										}}
									>
										{userName}
									</Typography>
									<Typography
										variant='caption'
										sx={{
											color: navbarAccentColor,
											lineHeight: 1.2,
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											whiteSpace: 'nowrap',
											maxWidth: '150px'
										}}
									>
										{formatRole(userRole)}
									</Typography>
								</Box>
							</Stack>
							<Menu
								anchorEl={profileMenuAnchor}
								open={profileMenuOpen}
								onClose={handleProfileMenuClose}
								transformOrigin={{
									horizontal: 'right',
									vertical: 'top'
								}}
								anchorOrigin={{
									horizontal: 'right',
									vertical: 'bottom'
								}}
								sx={{
									'& .MuiList-root': {
										padding: '4px'
									},
									'& .MuiPaper-root': {
										padding: 0
									},
									'& .MuiDivider-root': {
										margin: '4px -4px'
									}
								}}
							>
								{showSettings && [
									<MenuItem
										key='settings'
										onClick={() =>
											handleMenuItemClick(onSettingsClick)
										}
									>
										Settings
									</MenuItem>,
									<Divider key='settings-divider' />
								]}
								<MenuItem
									onClick={() =>
										handleMenuItemClick(onLogout)
									}
									sx={{
										color: 'error.main',
										'&:hover': {
											color: 'error.dark'
										}
									}}
								>
									<Typography sx={{ flexGrow: 1 }}>
										Logout
									</Typography>
									<LogoutRoundedIcon fontSize='small' />
								</MenuItem>
							</Menu>
						</>
					)}
					{rightExtraContent.length !== 0 &&
						rightExtraContent.map(d => {
							if (d.type === 'divider') {
								return (
									<Divider
										key={d.key}
										orientation='vertical'
										flexItem
										sx={{
											borderColor: 'rgba(0, 0, 0, 0.12)',
											height: '24px',
											alignSelf: 'center'
										}}
									/>
								);
							}

							if (d.type === 'profile') {
								return (
									<Tooltip
										key={d.key}
										title={d.tooltip || ''}
										disableHoverListener={!d.tooltip}
										arrow
									>
										<Stack
											direction='row'
											onClick={
												d.disabled
													? undefined
													: d.onClick
											}
											sx={{
												alignItems: 'center',
												gap: 1,
												cursor: d.disabled
													? 'not-allowed'
													: 'pointer',
												borderRadius: '8px',
												padding: '4px 8px',
												opacity: d.disabled ? 0.5 : 1,
												transition: 'opacity 0.2s',
												...(!d.disabled && {
													'&:hover': {
														backgroundColor:
															'action.hover'
													}
												})
											}}
										>
											{d.avatar ? (
												<Avatar
													src={d.avatar}
													sx={{
														width: 32,
														height: 32
													}}
												/>
											) : (
												<AccountCircleRoundedIcon
													sx={{
														width: 32,
														height: 32,
														color: navbarAccentColor
													}}
												/>
											)}
											<Box
												sx={{
													display: 'flex',
													flexDirection: 'column',
													alignItems: 'flex-start',
													minWidth: 0
												}}
											>
												<Typography
													variant='body2'
													sx={{
														color: navbarAccentColor,
														fontWeight: 500,
														lineHeight: 1.2,
														overflow: 'hidden',
														textOverflow:
															'ellipsis',
														whiteSpace: 'nowrap',
														maxWidth: '150px'
													}}
												>
													{d.name}
												</Typography>
												<Typography
													variant='caption'
													sx={{
														color: navbarAccentColor,
														lineHeight: 1.2,
														overflow: 'hidden',
														textOverflow:
															'ellipsis',
														whiteSpace: 'nowrap',
														maxWidth: '150px'
													}}
												>
													{d.role}
												</Typography>
											</Box>
										</Stack>
									</Tooltip>
								);
							}

							return null;
						})}
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default AppNavbar;
