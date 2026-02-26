import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface UserProfileProps {
	userName?: string;
	userEmail?: string;
	userAvatar?: string;
	onLogout?: () => void;
	onProfileClick?: () => void;
	onAccountClick?: () => void;
	onSettingsClick?: () => void;
	showSettings?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({
	userName = 'User Name',
	userEmail = 'user@email.com',
	userAvatar,
	onLogout,
	onProfileClick,
	onAccountClick,
	onSettingsClick,
	showSettings = false
}) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleMenuItemClick = (callback?: () => void) => {
		callback?.();
		handleClose();
	};

	return (
		<>
			<Stack
				direction='row'
				sx={{
					p: 2,
					gap: 1,
					alignItems: 'center',
					borderTop: '1px solid',
					borderColor: 'divider'
				}}
			>
				<Avatar
					sizes='small'
					alt={userName}
					src={userAvatar}
					sx={{ width: 36, height: 36 }}
				/>
				<Box
					sx={{
						mr: 'auto',
						minWidth: 0,
						overflow: 'hidden',
						flex: 1
					}}
				>
					<Typography
						variant='body2'
						sx={{
							fontWeight: 500,
							lineHeight: '16px',
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
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							display: 'block'
						}}
					>
						{userEmail}
					</Typography>
				</Box>
				<IconButton
					size='small'
					onClick={handleClick}
					sx={{ borderColor: 'transparent' }}
				>
					<MoreVertRoundedIcon />
				</IconButton>
			</Stack>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
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
				<MenuItem onClick={() => handleMenuItemClick(onProfileClick)}>
					Profile
				</MenuItem>
				<MenuItem onClick={() => handleMenuItemClick(onAccountClick)}>
					My account
				</MenuItem>
				{showSettings && (
					<>
						<Divider />
						<MenuItem onClick={() => handleMenuItemClick(onSettingsClick)}>
							Settings
						</MenuItem>
					</>
				)}
				<Divider />
				<MenuItem onClick={() => handleMenuItemClick(onLogout)}>
					<Typography sx={{ flexGrow: 1 }}>Logout</Typography>
					<LogoutRoundedIcon fontSize='small' />
				</MenuItem>
			</Menu>
		</>
	);
};

export default UserProfile;
