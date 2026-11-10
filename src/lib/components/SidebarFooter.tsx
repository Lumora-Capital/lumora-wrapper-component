import * as React from 'react';
import { cn } from '../utils';
import NotificationBell from './NotificationBell';
import { Tooltip } from './ui/tooltip';
import useHoverPopup from './useHoverPopup';
import UserMenu, { Identity, type UserMenuOptions } from './UserMenu';

export interface SidebarFooterProps extends UserMenuOptions {
	/** Icon-only (collapsed sidebar and the narrow rails). */
	compact: boolean;
	/** Idle text/icon color on the sidebar surface. */
	color: string;
	/** Hover background, and the user row's background while its menu is open. */
	hoverColor: string;
	showProfile: boolean;
	/** Open the user menu on hover; off where the panel expands under the pointer (the menu would close or freeze narrow). */
	hoverOpen?: boolean;
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
	hoverOpen = false,
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
	const menuHover = useHoverPopup({
		open: menuOpen,
		onOpen: () => setMenuAnchor(footerRef.current),
		onClose: () => setMenuAnchor(null)
	});
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

	return (
		<>
			<div
				ref={footerRef}
				data-testid='sidebar-footer'
				className={cn(
					'lw:flex lw:w-full lw:items-center lw:gap-1',
					compact ? 'lw:flex-col' : 'lw:flex-row'
				)}
			>
				{showProfile && (
					<Tooltip
						title={compact ? userName : ''}
						side='right'
						arrow
						disabled={menuOpen}
					>
						<button
							type='button'
							onClick={() => setMenuAnchor(footerRef.current)}
							{...(hoverOpen ? menuHover.triggerProps : {})}
							aria-label={`Account menu for ${userName}`}
							aria-haspopup='menu'
							aria-expanded={menuOpen}
							data-testid='sidebar-user'
							className={cn(
								'lw:inline-flex lw:min-w-0 lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-lg lw:text-left lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-fg)',
								// 4px around the avatar, on the glass rail too
								compact
									? 'lw:flex-none lw:p-1'
									: 'lw:flex-auto lw:px-2 lw:py-1.5'
							)}
							style={
								{
									color,
									'--lw-fg': color,
									'--lw-hover': hoverColor,
									...(menuOpen
										? { backgroundColor: hoverColor }
										: {})
								} as React.CSSProperties
							}
						>
							<Identity
								name={userName}
								role={userRole}
								avatar={userAvatar}
								avatarColor={avatarColor}
								showText={!compact}
							/>
						</button>
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
			</div>
			<UserMenu
				anchorEl={menuAnchor}
				onClose={() => setMenuAnchor(null)}
				// Above a full-width footer (at its width), beside a compact rail
				placement={compact ? 'beside' : 'above'}
				width={compact ? undefined : footerRef.current?.clientWidth}
				contentProps={menuHover.contentProps}
				openedByHover={menuHover.openedByHover}
				{...menuOptions}
			/>
		</>
	);
};

export default SidebarFooter;
