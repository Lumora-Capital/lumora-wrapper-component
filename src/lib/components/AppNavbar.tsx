import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
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
		name: string;
		role: string;
		avatar?: string;
		onClick?: () => void;
		type: 'profile' | 'divider';
	}>;
}

const AppNavbar: React.FC<AppNavbarProps> = ({
	appName = 'Dashboard',
	pageName = 'Home',
	onMenuClick,
	showMenuButton = true,
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
					{showMenuButton && !isUpMd && (
						<IconButton
							aria-label='menu'
							onClick={onMenuClick}
							sx={{
								color: navbarAccentColor,
								'&:hover': {
									backgroundColor: 'action.hover'
								}
							}}
						>
							<MenuRoundedIcon />
						</IconButton>
					)}
					{/* Logo */}
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
								color: navbarAccentColor,
								fontWeight: 600,
								fontSize: '20px',
								lineHeight: 1,
								textTransform: 'uppercase'
							}}
						>
							{appName}
						</Typography>
						<img
							src='/lumora-logo.svg'
							alt='NEXA Logo'
							width={24}
							height={24}
							style={{ flexShrink: 0 }}
						/>
					</Stack>
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
					{/* Notifications */}
					{showNotifications && (
						<Badge
							color='error'
							variant='dot'
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
								sx={{ color: navbarAccentColor }}
							>
								<NotificationsOutlinedIcon />
							</IconButton>
						</Badge>
					)}
					{/* Divider */}
					{showNotifications && showProfile && (
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
					{/* Profile */}
					{showProfile && (
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
								{showSettings && (
									<>
										<MenuItem
											onClick={() =>
												handleMenuItemClick(onSettingsClick)
											}
										>
											Settings
										</MenuItem>
										<Divider />
									</>
								)}
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
									<Stack
										direction='row'
										onClick={d.onClick}
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
										{d.avatar ? (
											<Avatar
												src={d.avatar}
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
												{d.name}
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
												{d.role}
											</Typography>
										</Box>
									</Stack>
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
