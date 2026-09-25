import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import type { PopoverOrigin } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import * as React from 'react';

/** An extra entry in the user menu, e.g. "What's New". */
export type UserMenuItem = {
	key: string;
	label: string;
	icon?: React.ReactNode;
	/** Count shown as a red pill; hidden when 0 or unset. */
	badge?: number;
	onClick?: () => void;
};

/** What the user menu shows; shared by the sidebar footer and the mobile bar. */
export interface UserMenuOptions {
	/** Avatar fill (initials fallback). */
	avatarColor: string;
	showNotifications: boolean;
	notificationCount: number;
	onNotificationsClick?: () => void;
	userName?: string;
	userRole?: string;
	userAvatar?: string;
	/** Host entries between Notifications and Settings. */
	menuItems?: UserMenuItem[];
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

/** "Gabriel Paet" -> "GP". */
const initials = (name: string) =>
	name
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map(part => part.charAt(0).toUpperCase())
		.join('');

const ellipsis = {
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	maxWidth: '100%'
} as const;

const CountPill: React.FC<{ count?: number }> = ({ count }) =>
	count ? (
		<Box
			component='span'
			sx={{
				minWidth: 22,
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
			{count > 99 ? '99+' : count}
		</Box>
	) : null;

/** The user's avatar: their picture, else initials on `color`. */
export const UserAvatar: React.FC<{
	name: string;
	avatar?: string;
	color: string;
	size?: number;
}> = ({ name, avatar, color, size = 36 }) => (
	<Avatar
		src={avatar}
		alt={name}
		sx={{
			width: size,
			height: size,
			flexShrink: 0,
			fontSize: size * 0.36,
			fontWeight: 600,
			bgcolor: color,
			color: '#ffffff'
		}}
	>
		{initials(name)}
	</Avatar>
);

/** Avatar beside name / role. */
export const Identity: React.FC<{
	name: string;
	role?: string;
	avatar?: string;
	avatarColor: string;
	showText: boolean;
}> = ({ name, role, avatar, avatarColor, showText }) => (
	<>
		<UserAvatar name={name} avatar={avatar} color={avatarColor} />
		{showText && (
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
					sx={{ ...ellipsis, fontWeight: 600, color: 'inherit' }}
				>
					{name}
				</Typography>
				<Typography
					variant='caption'
					sx={{ ...ellipsis, opacity: 0.8, color: 'inherit' }}
				>
					{formatRole(role)}
				</Typography>
			</Box>
		)}
	</>
);

/**
 * `above`: opens upward from a full-width row, left-aligned. `above-end`:
 * upward, right-aligned (the mobile bar's last item). `beside`: to the right
 * of a narrow rail.
 */
type Placement = 'above' | 'above-end' | 'beside';
const ORIGINS: Record<
	Placement,
	{ anchor: PopoverOrigin; transform: PopoverOrigin }
> = {
	above: {
		anchor: { vertical: 'top', horizontal: 'left' },
		transform: { vertical: 'bottom', horizontal: 'left' }
	},
	'above-end': {
		anchor: { vertical: 'top', horizontal: 'right' },
		transform: { vertical: 'bottom', horizontal: 'right' }
	},
	beside: {
		anchor: { vertical: 'bottom', horizontal: 'right' },
		transform: { vertical: 'bottom', horizontal: 'left' }
	}
};

interface UserMenuProps extends UserMenuOptions {
	anchorEl: HTMLElement | null;
	onClose: () => void;
	placement: Placement;
	/** Menu width in px; defaults to 240. */
	width?: number;
}

/**
 * The signed-in user's menu: notifications, host items, settings, the light /
 * dark switch and logout.
 */
const UserMenu: React.FC<UserMenuProps> = ({
	anchorEl,
	onClose,
	placement,
	width,
	avatarColor,
	showNotifications,
	notificationCount,
	onNotificationsClick,
	userName = 'User',
	userRole,
	userAvatar,
	menuItems = [],
	showSettings,
	onSettingsClick,
	showThemeToggler,
	theme,
	onThemeToggle,
	onLogout
}) => {
	const runAndClose = (callback?: () => void) => () => {
		onClose();
		callback?.();
	};

	return (
		<Menu
			anchorEl={anchorEl}
			open={Boolean(anchorEl)}
			onClose={onClose}
			anchorOrigin={ORIGINS[placement].anchor}
			transformOrigin={ORIGINS[placement].transform}
			slotProps={{
				paper: {
					sx: {
						width: width ?? 240,
						maxWidth: 'calc(100vw - 16px)',
						mt: placement === 'beside' ? 0 : -1,
						ml: placement === 'beside' ? 1.5 : 0,
						borderRadius: '10px',
						border: '1px solid',
						borderColor: 'divider',
						boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
					}
				},
				list: { sx: { py: 0.5 } }
			}}
			sx={{
				'& .MuiMenuItem-root': {
					mx: 0.5,
					borderRadius: '6px',
					fontSize: 14
				}
			}}
		>
			<Stack
				direction='row'
				spacing={1.25}
				sx={{ px: 1.5, py: 1, alignItems: 'center' }}
			>
				<Identity
					name={userName}
					role={userRole}
					avatar={userAvatar}
					avatarColor={avatarColor}
					showText
				/>
			</Stack>
			<Divider />
			{showNotifications && (
				<MenuItem onClick={runAndClose(onNotificationsClick)}>
					<ListItemIcon>
						<NotificationsNoneOutlinedIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText>Notifications</ListItemText>
					<CountPill count={notificationCount} />
				</MenuItem>
			)}
			{menuItems.map(item => (
				<MenuItem key={item.key} onClick={runAndClose(item.onClick)}>
					{item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
					<ListItemText inset={!item.icon}>{item.label}</ListItemText>
					<CountPill count={item.badge} />
				</MenuItem>
			))}
			{showSettings && (
				<MenuItem onClick={runAndClose(onSettingsClick)}>
					<ListItemIcon>
						<SettingsOutlinedIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText>Settings</ListItemText>
				</MenuItem>
			)}
			{showThemeToggler && [
				<Divider key='theme-divider' />,
				<Box key='theme' sx={{ px: 1.5, py: 1 }}>
					<Typography
						variant='overline'
						sx={{
							display: 'block',
							lineHeight: 1.5,
							mb: 0.75,
							color: 'text.secondary',
							letterSpacing: '0.08em'
						}}
					>
						— Theme
					</Typography>
					<ToggleButtonGroup
						exclusive
						fullWidth
						size='small'
						aria-label='Theme'
						value={theme}
						// Stays open so the switch visibly flips
						onChange={(_, next) =>
							next && next !== theme && onThemeToggle?.()
						}
						disabled={!onThemeToggle}
						sx={{
							p: 0.5,
							gap: 0.5,
							bgcolor: 'action.hover',
							borderRadius: '8px',
							'& .MuiToggleButton-root': {
								border: 0,
								borderRadius: '6px !important',
								textTransform: 'none',
								fontWeight: 500,
								color: 'text.secondary',
								'&.Mui-selected': {
									bgcolor: 'background.paper',
									color: 'text.primary',
									boxShadow: 1,
									'&:hover': { bgcolor: 'background.paper' }
								}
							}
						}}
					>
						<ToggleButton value='light'>Light</ToggleButton>
						<ToggleButton value='dark'>Dark</ToggleButton>
					</ToggleButtonGroup>
				</Box>
			]}
			<Divider />
			<MenuItem
				onClick={runAndClose(onLogout)}
				// The dark palette's error colors are too dim on the dark menu
				sx={{
					color: theme === 'dark' ? 'hsl(0, 90%, 65%)' : 'error.main'
				}}
			>
				<ListItemIcon sx={{ color: 'inherit' }}>
					<LogoutRoundedIcon fontSize='small' />
				</ListItemIcon>
				<ListItemText>Log out</ListItemText>
			</MenuItem>
		</Menu>
	);
};

export default UserMenu;
