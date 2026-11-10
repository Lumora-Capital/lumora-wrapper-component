import * as React from 'react';
import { cn } from '../utils';
import AccountMenu from './AccountMenu';
import CollapsibleSidebar from './CollapsibleSidebar';
import type { SidebarLink } from './LumoraWrapper';
import NotificationBell from './NotificationBell';
import { useIsDark } from './shellTheme';
import { resolveSidebarSurface } from './shellLayout';
import { deriveGroupTint, formatRole } from './sidebarUtils';
import { CountBadge } from './ui/badge';
import { UserAvatar } from './UserMenu';
import type { UserMenuItem } from './UserMenu';
import useHoverPopup, { type HoverPopupTriggerProps } from './useHoverPopup';

/** Host apps often outline every `button:focus`; keep the footer clean after a click. */
const FOCUS_OUTLINE_FIX = 'lw:outline-none lw:focus:outline-none';

export interface PanelSidebarProps {
	mainLinks: SidebarLink[];
	secondaryLinks?: SidebarLink[];
	activePath?: string;
	onLinkClick?: (path: string) => void;
	// Header bar (the brand) — forwarded to CollapsibleSidebar
	logo?: React.ReactNode;
	title?: string;
	onBrandClick?: (event: React.MouseEvent<HTMLElement>) => void;
	/** Whether the brand's platform menu is open; left out, it has none. */
	brandMenuOpen?: boolean;
	brandColor?: string;
	headerBackgroundColor?: string;
	headerForegroundColor?: string;
	// Accents (forwarded to the nav list)
	activeAccentColor?: string;
	activeBackgroundColor?: string;
	groupArrowColor?: string;
	groupAccentColor?: string;
	activeForegroundColor?: string;
	foregroundColor?: string;
	surfaceBackgroundColor?: string;
	/** Flyout panel surface; forwarded to CollapsibleSidebar. */
	flyoutSurfaceColor?: string;
	// Collapse / expand (the wrapper opens it on hover)
	collapsed: boolean;
	expandedWidth: number;
	collapsedWidth: number;
	/**
	 * Rendered between the brand and the links: the Ask Nexa launcher and the
	 * host's search, built by the wrapper for the current collapsed state.
	 */
	topContent?: React.ReactNode;
	/** How the rail shows a group's pages; see CollapsibleSidebar. */
	submenuMode?: 'inline' | 'flyout';
	// User footer + account menu (see AccountMenu for item visibility rules)
	/** Idle text/icon color of the footer; defaults to the nav's idle color. */
	color?: string;
	/** Hover tint of the footer, and the user row while its menu is open. */
	hoverColor?: string;
	/** Avatar fill behind the initials fallback; defaults to the accent. */
	avatarColor?: string;
	/** Show the user row (which opens the account menu). */
	showProfile?: boolean;
	userName?: string;
	/** Shown in the account menu header only, under the name. */
	userEmail?: string;
	userRole?: string;
	userAvatar?: string;
	showNotifications?: boolean;
	/** The bell's badge shows this plus `whatsNewCount`. */
	notificationCount?: number;
	onNotificationsClick?: () => void;
	/** Hover intent for the bell (the wrapper's updates drawer). */
	notificationsTriggerProps?: HoverPopupTriggerProps;
	/** The updates drawer is open. */
	notificationsOpen?: boolean;
	whatsNewCount?: number;
	/** Makes the account menu's user header open the profile. */
	onProfileClick?: () => void;
	/** Adds a "My AI usage" link beside "View profile" in the account menu. */
	onAiUsageClick?: () => void;
	/** Host rows in the account menu (Settings, help…), below Theme. */
	menuItems?: UserMenuItem[];
	onLogout?: () => void;
	theme?: 'dark' | 'light';
	showThemeToggler?: boolean;
	onThemeToggle?: () => void;
}

/**
 * The `panel` sidebar variant: the collapsible sidebar (header bar with the
 * brand, the wrapper's Ask Nexa + search as `topContent`,
 * the nav list) with a user footer that opens the account menu — profile
 * header, theme, the host's `menuItems` and log out (see AccountMenu).
 */
const PanelSidebar: React.FC<PanelSidebarProps> = ({
	mainLinks,
	secondaryLinks = [],
	activePath,
	onLinkClick,
	logo,
	title,
	onBrandClick,
	brandMenuOpen,
	brandColor,
	headerBackgroundColor,
	headerForegroundColor,
	activeAccentColor = '#01584f',
	activeBackgroundColor,
	groupArrowColor,
	groupAccentColor,
	activeForegroundColor,
	foregroundColor,
	surfaceBackgroundColor,
	flyoutSurfaceColor,
	collapsed,
	expandedWidth,
	collapsedWidth,
	topContent,
	submenuMode,
	color,
	hoverColor,
	avatarColor,
	showProfile = true,
	userName = 'User',
	userEmail,
	userRole,
	userAvatar,
	showNotifications = true,
	notificationCount = 0,
	onNotificationsClick,
	notificationsTriggerProps,
	notificationsOpen,
	whatsNewCount = 0,
	onProfileClick,
	onAiUsageClick,
	menuItems,
	onLogout,
	theme: themeMode = 'light',
	showThemeToggler = true,
	onThemeToggle
}) => {
	const isDark = useIsDark();
	const surface = resolveSidebarSurface(surfaceBackgroundColor, isDark);
	// Footer chrome follows the nav's idle color unless the owner sets one
	const fg =
		color ?? foregroundColor ?? (isDark ? '#ffffff' : activeAccentColor);
	const tint =
		hoverColor ?? groupAccentColor ?? deriveGroupTint(activeAccentColor);
	const avatarFill = avatarColor ?? activeAccentColor;

	const footerRef = React.useRef<HTMLButtonElement>(null);
	const [menuOpen, setMenuOpen] = React.useState(false);
	const accountHover = useHoverPopup({
		open: menuOpen,
		onOpen: () => setMenuOpen(true),
		onClose: () => setMenuOpen(false)
	});

	// Display only: "SUPER_ADMIN" -> "Super Admin". The stored role is untouched.
	const roleLabel = userRole ? formatRole(userRole) : undefined;
	const renderAvatar = (size: number) => (
		<UserAvatar
			name={userName}
			avatar={userAvatar}
			color={avatarFill}
			size={size}
		/>
	);

	// --- User footer ---------------------------------------------------------
	// The bell opens the updates drawer, which holds both the Notifications and
	// the What's New tab, so its badge counts both. The account menu's entries
	// show each count on its own.
	const bellCount = notificationCount + whatsNewCount;
	// The flyout rail never expands, so the bell cannot wait for the
	// expanded footer: it stays on the rail, above the avatar
	const railOnly = collapsed && submenuMode === 'flyout';
	const bell = showNotifications ? (
		<NotificationBell
			count={bellCount}
			onClick={onNotificationsClick}
			triggerProps={notificationsTriggerProps}
			active={notificationsOpen}
			color={fg}
			hoverColor={tint}
			tooltipPlacement='right'
			testId='panel-notifications'
		/>
	) : null;

	const userButton = showProfile ? (
		<button
			type='button'
			ref={footerRef}
			onClick={() => setMenuOpen(true)}
			{...accountHover.triggerProps}
			aria-haspopup='menu'
			aria-expanded={menuOpen}
			aria-label='Account menu'
			data-testid='panel-user-button'
			className={cn(
				'lw:flex lw:min-w-0 lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-[10px] lw:hover:bg-(--lw-footer-tint)',
				collapsed ? 'lw:flex-[0_0_auto]' : 'lw:flex-1',
				// On the flyout rail the 36px avatar fills a 44px button,
				// matching the rail's icon buttons
				railOnly ? 'lw:p-1' : 'lw:p-1.5',
				menuOpen ? 'lw:bg-(--lw-footer-tint)' : 'lw:bg-transparent',
				FOCUS_OUTLINE_FIX
			)}
			style={{ '--lw-footer-tint': tint } as React.CSSProperties}
		>
			{collapsed && !railOnly && showNotifications ? (
				// Collapsed: no room for the bell, so unread shows as a dot
				<CountBadge
					dot
					count={bellCount}
					className='lw:rounded-full'
					// The dot sits on the avatar's edge, as MUI's circular overlap
					badgeClassName='lw:top-[14%] lw:right-[14%]'
				>
					{renderAvatar(36)}
				</CountBadge>
			) : (
				renderAvatar(collapsed ? 36 : 40)
			)}
			{!collapsed ? (
				<span className='lw:block lw:min-w-0 lw:text-left'>
					<span
						className='lw:block lw:truncate lw:text-sm lw:leading-[1.3] lw:font-semibold'
						style={{ color: fg }}
					>
						{userName}
					</span>
					{roleLabel ? (
						<span
							data-testid='panel-user-role'
							className='lw:block lw:truncate lw:text-xs lw:leading-[1.3] lw:tracking-[0.02em] lw:opacity-85'
							style={{ color: fg }}
						>
							{roleLabel}
						</span>
					) : null}
				</span>
			) : null}
		</button>
	) : null;

	// Collapsed, the bell folds into the avatar's dot (unless there is no user
	// row); on the flyout rail it stacks above the avatar instead
	const showBell = Boolean(bell) && (!collapsed || railOnly || !userButton);
	const footer =
		userButton || showBell ? (
			<div
				className={cn(
					'lw:flex lw:items-center lw:justify-center lw:gap-1',
					railOnly ? 'lw:flex-col' : 'lw:flex-row'
				)}
			>
				{railOnly && showBell ? bell : null}
				{userButton}
				{!railOnly && showBell ? bell : null}
			</div>
		) : undefined;

	return (
		<div
			data-testid='panel-sidebar'
			data-collapsed={collapsed ? 'true' : 'false'}
			className='lw:flex lw:min-h-0 lw:flex-auto lw:flex-col'
		>
			<CollapsibleSidebar
				mainLinks={mainLinks}
				secondaryLinks={secondaryLinks}
				activePath={activePath}
				onLinkClick={onLinkClick}
				showHeaderBar
				logo={logo}
				title={title}
				onBrandClick={onBrandClick}
				brandMenuOpen={brandMenuOpen}
				brandColor={brandColor}
				headerBackgroundColor={headerBackgroundColor}
				headerForegroundColor={headerForegroundColor}
				activeAccentColor={activeAccentColor}
				activeBackgroundColor={activeBackgroundColor}
				groupArrowColor={groupArrowColor}
				groupAccentColor={groupAccentColor}
				activeForegroundColor={activeForegroundColor}
				foregroundColor={foregroundColor}
				surfaceBackgroundColor={surface}
				flyoutSurfaceColor={flyoutSurfaceColor}
				collapsed={collapsed}
				expandedWidth={expandedWidth}
				collapsedWidth={collapsedWidth}
				topContent={topContent}
				footer={footer}
				submenuMode={submenuMode}
			/>
			{showProfile ? (
				<AccountMenu
					open={menuOpen}
					anchorEl={footerRef.current}
					onClose={() => setMenuOpen(false)}
					width={Math.max(expandedWidth - 16, 240)}
					renderAvatar={renderAvatar}
					userName={userName}
					userEmail={userEmail}
					roleLabel={roleLabel}
					accentColor={activeAccentColor}
					tint={tint}
					showThemeToggler={showThemeToggler}
					theme={themeMode}
					onThemeToggle={onThemeToggle}
					onProfileClick={onProfileClick}
					onAiUsageClick={onAiUsageClick}
					onLinkClick={onLinkClick}
					menuItems={menuItems}
					onLogout={onLogout}
					glass={submenuMode === 'flyout'}
					contentProps={accountHover.contentProps}
					openedByHover={accountHover.openedByHover}
				/>
			) : null}
		</div>
	);
};

export default PanelSidebar;
