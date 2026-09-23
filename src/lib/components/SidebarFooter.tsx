import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export interface SidebarFooterProps {
	/** Icon-only rows (collapsed sidebar and the narrow rails). */
	compact: boolean;
	/** Idle text/icon color on the sidebar surface. */
	color: string;
	/** Row hover background. */
	hoverColor: string;
	showNotifications: boolean;
	notificationCount: number;
	onNotificationsClick?: () => void;
	showProfile: boolean;
	userName?: string;
	userRole?: string;
	userAvatar?: string;
	showSettings: boolean;
	onSettingsClick?: () => void;
	showThemeToggler: boolean;
	theme: 'light' | 'dark';
	onThemeToggle?: () => void;
	onLogout: () => void;
}

/** "USER" -> "User"; "User" when unset. */
const formatRole = (role?: string) =>
	role ? role.charAt(0).toUpperCase() + role.slice(1).toLowerCase() : 'User';

const ellipsis = {
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap'
} as const;

/**
 * Bottom of the sidebar: notifications above the signed-in user. The user row
 * opens a menu with settings, the dark-mode switch and logout.
 */
const SidebarFooter: React.FC<SidebarFooterProps> = ({
	compact,
	color,
	hoverColor,
	showNotifications,
	notificationCount,
	onNotificationsClick,
	showProfile,
	userName = 'User',
	userRole,
	userAvatar,
	showSettings,
	onSettingsClick,
	showThemeToggler,
	theme,
	onThemeToggle,
	onLogout
}) => {
	const [menuAnchor, setMenuAnchor] = React.useState<HTMLElement | null>(
		null
	);
	const closeMenu = () => setMenuAnchor(null);
	const runAndClose = (callback?: () => void) => () => {
		closeMenu();
		callback?.();
	};

	if (!showNotifications && !showProfile) {
		return null;
	}

	const notificationsLabel = notificationCount
		? `Notifications, ${notificationCount} unread`
		: 'Notifications';
	const rowSx = {
		width: '100%',
		gap: 1.5,
		borderRadius: '8px',
		color,
		justifyContent: compact ? 'center' : 'flex-start',
		p: compact ? 1 : '8px 12px',
		'&:hover': { bgcolor: hoverColor },
		'&.Mui-focusVisible': { outline: '2px solid', outlineColor: color }
	} as const;
	const bell = (
		<Badge
			color='error'
			badgeContent={notificationCount}
			invisible={!compact || notificationCount === 0}
			max={99}
		>
			<NotificationsOutlinedIcon />
		</Badge>
	);
	const avatar = (
		<Avatar
			src={userAvatar}
			alt={userName}
			sx={{ width: 32, height: 32, flexShrink: 0, fontSize: 14 }}
		>
			{userName.charAt(0).toUpperCase()}
		</Avatar>
	);

	return (
		<Stack
			spacing={0.5}
			data-testid='sidebar-footer'
			sx={{ width: '100%' }}
		>
			{showNotifications && (
				<Tooltip
					title={compact ? notificationsLabel : ''}
					placement='right'
					arrow
				>
					<ButtonBase
						onClick={onNotificationsClick}
						aria-label={notificationsLabel}
						data-testid='sidebar-notifications'
						sx={rowSx}
					>
						{bell}
						{!compact && (
							<>
								<Typography
									variant='body1'
									sx={{ flexGrow: 1, textAlign: 'left' }}
								>
									Notifications
								</Typography>
								{notificationCount > 0 && (
									<Box
										component='span'
										sx={{
											minWidth: 20,
											height: 20,
											px: 0.75,
											borderRadius: '10px',
											bgcolor: 'error.main',
											color: 'error.contrastText',
											fontSize: 12,
											fontWeight: 600,
											lineHeight: '20px',
											textAlign: 'center'
										}}
									>
										{notificationCount > 99
											? '99+'
											: notificationCount}
									</Box>
								)}
							</>
						)}
					</ButtonBase>
				</Tooltip>
			)}
			{showProfile && (
				<>
					<Tooltip
						title={compact ? userName : ''}
						placement='right'
						arrow
					>
						<ButtonBase
							onClick={event =>
								setMenuAnchor(event.currentTarget)
							}
							aria-label={`Account menu for ${userName}`}
							aria-haspopup='menu'
							aria-expanded={Boolean(menuAnchor)}
							data-testid='sidebar-user'
							sx={rowSx}
						>
							{avatar}
							{!compact && (
								<>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'flex-start',
											minWidth: 0,
											flexGrow: 1
										}}
									>
										<Typography
											variant='body2'
											sx={{
												...ellipsis,
												maxWidth: '100%',
												fontWeight: 600
											}}
										>
											{userName}
										</Typography>
										<Typography
											variant='caption'
											sx={{
												...ellipsis,
												maxWidth: '100%',
												opacity: 0.8
											}}
										>
											{formatRole(userRole)}
										</Typography>
									</Box>
									<UnfoldMoreRoundedIcon
										fontSize='small'
										sx={{ opacity: 0.7 }}
									/>
								</>
							)}
						</ButtonBase>
					</Tooltip>
					<Menu
						anchorEl={menuAnchor}
						open={Boolean(menuAnchor)}
						onClose={closeMenu}
						// Opens beside a compact rail, above a full-width row
						anchorOrigin={
							compact
								? { vertical: 'bottom', horizontal: 'right' }
								: { vertical: 'top', horizontal: 'left' }
						}
						transformOrigin={{
							vertical: 'bottom',
							horizontal: 'left'
						}}
						slotProps={{
							paper: {
								sx: { minWidth: 220, ml: compact ? 1 : 0 }
							}
						}}
					>
						<Box sx={{ px: 2, py: 1 }}>
							<Typography
								variant='body2'
								sx={{ fontWeight: 600 }}
							>
								{userName}
							</Typography>
							<Typography
								variant='caption'
								sx={{ color: 'text.secondary' }}
							>
								{formatRole(userRole)}
							</Typography>
						</Box>
						<Divider />
						{showSettings && (
							<MenuItem onClick={runAndClose(onSettingsClick)}>
								<ListItemIcon>
									<SettingsOutlinedIcon fontSize='small' />
								</ListItemIcon>
								<ListItemText>Settings</ListItemText>
							</MenuItem>
						)}
						{showThemeToggler && (
							// Stays open so the switch visibly flips
							<MenuItem
								onClick={onThemeToggle}
								disabled={!onThemeToggle}
								role='menuitemcheckbox'
								aria-checked={theme === 'dark'}
							>
								<ListItemIcon>
									<DarkModeOutlinedIcon fontSize='small' />
								</ListItemIcon>
								<ListItemText>Dark mode</ListItemText>
								<Switch
									size='small'
									edge='end'
									checked={theme === 'dark'}
									tabIndex={-1}
									inputProps={{ 'aria-hidden': true }}
									sx={{ pointerEvents: 'none' }}
								/>
							</MenuItem>
						)}
						{(showSettings || showThemeToggler) && <Divider />}
						<MenuItem
							onClick={runAndClose(onLogout)}
							// The dark palette's error colors are too dim on the dark menu
							sx={{
								color:
									theme === 'dark'
										? 'hsl(0, 90%, 65%)'
										: 'error.main'
							}}
						>
							<ListItemIcon sx={{ color: 'inherit' }}>
								<LogoutRoundedIcon fontSize='small' />
							</ListItemIcon>
							<ListItemText>Logout</ListItemText>
						</MenuItem>
					</Menu>
				</>
			)}
		</Stack>
	);
};

export default SidebarFooter;
