import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import NotificationBell from './NotificationBell';
import UserMenu, { Identity, type UserMenuOptions } from './UserMenu';

export interface SidebarFooterProps extends UserMenuOptions {
	/** Icon-only (collapsed sidebar and the narrow rails). */
	compact: boolean;
	/** Idle text/icon color on the sidebar surface. */
	color: string;
	/** Hover background, and the user row's background while its menu is open. */
	hoverColor: string;
	showProfile: boolean;
	/**
	 * Unread What's New count. The bell opens the updates drawer, which holds
	 * both tabs, so its badge shows this plus `notificationCount`; the menu's
	 * Notifications entry shows `notificationCount` alone.
	 */
	whatsNewCount?: number;
}

/**
 * Bottom of the sidebar: the signed-in user with the notifications bell beside
 * it. The user opens the user menu.
 */
const SidebarFooter: React.FC<SidebarFooterProps> = ({
	compact,
	color,
	hoverColor,
	showProfile,
	whatsNewCount = 0,
	...menuOptions
}) => {
	const {
		avatarColor,
		showNotifications,
		notificationCount,
		onNotificationsClick,
		userName = 'User',
		userRole,
		userAvatar
	} = menuOptions;
	// The whole footer anchors the menu, so it opens above it at its width
	const footerRef = React.useRef<HTMLDivElement>(null);
	const [menuAnchor, setMenuAnchor] = React.useState<HTMLElement | null>(
		null
	);
	const menuOpen = Boolean(menuAnchor);
	// The menu hangs off the open panel's footer; it goes when the panel
	// shrinks to the rail. Only a change closes it: the rail-labeled footer is
	// always compact and opens its menu from there.
	const wasCompact = React.useRef(compact);
	React.useEffect(() => {
		if (compact && !wasCompact.current) {
			setMenuAnchor(null);
		}
		wasCompact.current = compact;
	}, [compact]);

	if (!showNotifications && !showProfile) {
		return null;
	}

	const focusRing = {
		'&.Mui-focusVisible': { outline: '2px solid', outlineColor: color }
	};

	return (
		<>
			<Stack
				ref={footerRef}
				direction={compact ? 'column' : 'row'}
				spacing={0.5}
				data-testid='sidebar-footer'
				sx={{ width: '100%', alignItems: 'center' }}
			>
				{showProfile && (
					<Tooltip
						title={compact ? userName : ''}
						placement='right'
						arrow
					>
						<ButtonBase
							onClick={() => setMenuAnchor(footerRef.current)}
							aria-label={`Account menu for ${userName}`}
							aria-haspopup='menu'
							aria-expanded={menuOpen}
							data-testid='sidebar-user'
							sx={{
								flex: compact ? '0 0 auto' : '1 1 auto',
								minWidth: 0,
								gap: 1.25,
								p: compact ? 0.5 : '6px 8px',
								justifyContent: 'flex-start',
								borderRadius: '8px',
								color,
								bgcolor: menuOpen ? hoverColor : 'transparent',
								'&:hover': { bgcolor: hoverColor },
								...focusRing
							}}
						>
							<Identity
								name={userName}
								role={userRole}
								avatar={userAvatar}
								avatarColor={avatarColor}
								showText={!compact}
							/>
						</ButtonBase>
					</Tooltip>
				)}
				{showNotifications && (
					<NotificationBell
						count={notificationCount + whatsNewCount}
						onClick={onNotificationsClick}
						color={color}
						hoverColor={hoverColor}
						tooltipPlacement='right'
						testId='sidebar-notifications'
					/>
				)}
			</Stack>
			<UserMenu
				anchorEl={menuAnchor}
				onClose={() => setMenuAnchor(null)}
				// Above a full-width footer (at its width), beside a compact rail
				placement={compact ? 'beside' : 'above'}
				width={compact ? undefined : footerRef.current?.clientWidth}
				{...menuOptions}
			/>
		</>
	);
};

export default SidebarFooter;
