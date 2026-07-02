import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CardAlert from './CardAlert';
import type { SidebarLink } from './LumoraWrapper';
import MenuContent from './MenuContent';

interface MobileSidebarProps {
	open: boolean;
	onClose: () => void;
	mainLinks: SidebarLink[];
	secondaryLinks?: SidebarLink[];
	activePath?: string;
	onLinkClick?: (path: string) => void;
	userName?: string;
	userEmail?: string;
	userAvatar?: string;
	userRole?: string;
	onLogout?: () => void;
	onProfileClick?: () => void;
	/** Theme mode; used to label and icon the theme toggle in the header. */
	theme?: 'dark' | 'light';
	showThemeToggler?: boolean;
	onThemeToggle?: () => void;
	alertProps?: {
		title?: string;
		message?: string;
		buttonText?: string;
		onButtonClick?: () => void;
		show?: boolean;
	};
	accentColor?: string;
	/** Light accent tint for the active parent group and hover in the menu. */
	groupAccentColor?: string;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
	open,
	onClose,
	mainLinks,
	secondaryLinks = [],
	activePath,
	onLinkClick,
	userName = 'User Name',
	userAvatar,
	userRole,
	onLogout,
	theme = 'light',
	showThemeToggler = false,
	onThemeToggle,
	alertProps,
	accentColor = '#01584f',
	groupAccentColor
}) => {
	const isDarkTheme = theme === 'dark';
	const themeToggleLabel = isDarkTheme
		? 'Switch to light mode'
		: 'Switch to dark mode';

	// Match the navbar profile: "USER" -> "User", default to "User" when unset.
	const formatRole = (role?: string) => {
		if (!role) return 'User';
		return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
	};

	const handleLinkClick = (path: string) => {
		onLinkClick?.(path);
		onClose(); // Close mobile sidebar when link is clicked
	};

	return (
		<Drawer
			anchor='left'
			open={open}
			onClose={onClose}
			sx={{
				zIndex: theme => theme.zIndex.drawer + 1,
				'& .MuiDrawer-paper': {
					backgroundImage: 'none',
					backgroundColor: 'background.paper'
				}
			}}
		>
			<Stack
				sx={{
					maxWidth: '70dvw',
					height: '100%'
				}}
			>
				<Stack
					direction='row'
					sx={{ p: 2, gap: 1, alignItems: 'center' }}
				>
					<Stack
						direction='row'
						sx={{
							gap: 1,
							alignItems: 'center',
							flexGrow: 1,
							p: 1,
							minWidth: 0
						}}
					>
						<Avatar
							sizes='small'
							alt={userName}
							src={userAvatar}
							sx={{ width: 40, height: 40, flexShrink: 0 }}
						/>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								minWidth: 0
							}}
						>
							<Typography
								component='p'
								variant='subtitle1'
								sx={{
									fontWeight: 600,
									lineHeight: 1.2,
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap'
								}}
							>
								{userName}
							</Typography>
							<Typography
								variant='caption'
								sx={{
									color: 'text.secondary',
									lineHeight: 1.2,
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap'
								}}
							>
								{formatRole(userRole)}
							</Typography>
						</Box>
					</Stack>
					{showThemeToggler && (
						<Tooltip title={themeToggleLabel} placement='bottom'>
							<span>
								<IconButton
									size='small'
									onClick={onThemeToggle}
									disabled={!onThemeToggle}
									aria-label={themeToggleLabel}
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
				</Stack>
				<Divider />
				<Stack sx={{ flexGrow: 1 }}>
					<MenuContent
						variant='drawer'
						mainLinks={mainLinks}
						secondaryLinks={secondaryLinks}
						activePath={activePath}
						onLinkClick={handleLinkClick}
						accentColor={accentColor}
						groupAccentColor={groupAccentColor}
					/>
					<Divider />
				</Stack>
				{alertProps?.show && <CardAlert {...alertProps} />}
				<Stack sx={{ p: 2 }}>
					<Button
						variant='outlined'
						fullWidth
						startIcon={<LogoutRoundedIcon />}
						onClick={onLogout}
					>
						Logout
					</Button>
				</Stack>
			</Stack>
		</Drawer>
	);
};

export default MobileSidebar;
