import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

interface NotificationBellProps {
	count: number;
	onClick?: () => void;
	color: string;
	hoverColor: string;
	tooltipPlacement: 'right' | 'bottom';
	testId: string;
}

/** Bell with the unread badge (sidebar footer and the mobile top bar). */
const NotificationBell: React.FC<NotificationBellProps> = ({
	count,
	onClick,
	color,
	hoverColor,
	tooltipPlacement,
	testId
}) => {
	const label = count ? `Notifications, ${count} unread` : 'Notifications';
	return (
		<Tooltip title={label} placement={tooltipPlacement} arrow>
			<IconButton
				onClick={onClick}
				aria-label={label}
				data-testid={testId}
				sx={{
					color,
					flexShrink: 0,
					borderRadius: '8px',
					'&:hover': { bgcolor: hoverColor },
					'&.Mui-focusVisible': {
						outline: '2px solid',
						outlineColor: color
					}
				}}
			>
				<Badge
					color='error'
					badgeContent={count}
					invisible={count === 0}
					max={99}
					sx={{
						'& .MuiBadge-badge': {
							fontSize: 10,
							height: 16,
							minWidth: 16,
							px: 0.5
						}
					}}
				>
					<NotificationsNoneOutlinedIcon />
				</Badge>
			</IconButton>
		</Tooltip>
	);
};

export default NotificationBell;
