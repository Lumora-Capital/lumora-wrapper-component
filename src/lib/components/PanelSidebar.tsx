import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import AccountMenu from './AccountMenu';
import CollapsibleSidebar from './CollapsibleSidebar';
import type { LumoraPlatform, SidebarLink } from './LumoraWrapper';
import NotificationBell from './NotificationBell';
import { deriveGroupTint, formatRole } from './sidebarUtils';
import { UserAvatar } from './UserMenu';
import type { UserMenuItem } from './UserMenu';

/** Host apps often outline every `button:focus`; keep the footer clean after a click. */
const FOCUS_OUTLINE_FIX = {
	'&:focus, &:focus-visible': { outline: 'none' }
} as const;

export interface PanelSidebarProps {
	mainLinks: SidebarLink[];
	secondaryLinks?: SidebarLink[];
	activePath?: string;
	onLinkClick?: (path: string) => void;
	// Header bar (the brand) — forwarded to CollapsibleSidebar
	logo?: React.ReactNode;
	title?: string;
	onBrandClick?: () => void;
	brandColor?: string;
	headerBackgroundColor?: string;
	headerForegroundColor?: string;
	// Accents (forwarded to the nav list)
	activeAccentColor?: string;
	groupAccentColor?: string;
	activeForegroundColor?: string;
	foregroundColor?: string;
	surfaceBackgroundColor?: string;
	// Collapse / expand (the wrapper opens it on hover)
	collapsed: boolean;
	expandedWidth: number;
	collapsedWidth: number;
	/**
	 * Rendered between the brand and the links: the Ask Nexa launcher and the
	 * host's search, built by the wrapper for the current collapsed state.
	 */
	topContent?: React.ReactNode;
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
	whatsNewCount?: number;
	/** Makes the account menu's user header open the profile. */
	onProfileClick?: () => void;
	/** Host rows in the account menu (Settings, help…), below Theme. */
	menuItems?: UserMenuItem[];
	platforms?: LumoraPlatform[];
	currentPlatformKey?: string;
	onPlatformSelect?: (platform: LumoraPlatform) => void;
	onLogout?: () => void;
	theme?: 'dark' | 'light';
	showThemeToggler?: boolean;
	onThemeToggle?: () => void;
}

/**
 * The `panel` sidebar variant: the collapsible sidebar (header bar with the
 * brand, the wrapper's Ask Nexa + search as `topContent`,
 * the nav list) with a user footer that opens the account menu — profile
 * header, theme, the host's `menuItems`, the Lumora Platforms switcher and
 * log out (see AccountMenu).
 */
const PanelSidebar: React.FC<PanelSidebarProps> = ({
	mainLinks,
	secondaryLinks = [],
	activePath,
	onLinkClick,
	logo,
	title,
	onBrandClick,
	brandColor,
	headerBackgroundColor,
	headerForegroundColor,
	activeAccentColor = '#01584f',
	groupAccentColor,
	activeForegroundColor,
	foregroundColor,
	surfaceBackgroundColor,
	collapsed,
	expandedWidth,
	collapsedWidth,
	topContent,
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
	whatsNewCount = 0,
	onProfileClick,
	menuItems,
	platforms,
	currentPlatformKey,
	onPlatformSelect,
	onLogout,
	theme: themeMode = 'light',
	showThemeToggler = true,
	onThemeToggle
}) => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const surface =
		surfaceBackgroundColor ??
		(isDark ? theme.palette.background.paper : '#ffffff');
	// Footer chrome follows the nav's idle color unless the owner sets one
	const fg =
		color ??
		foregroundColor ??
		(isDark ? theme.palette.text.primary : activeAccentColor);
	const tint =
		hoverColor ?? groupAccentColor ?? deriveGroupTint(activeAccentColor);
	const avatarFill = avatarColor ?? activeAccentColor;

	const footerRef = React.useRef<HTMLButtonElement>(null);
	const [menuOpen, setMenuOpen] = React.useState(false);
	// The menu hangs off the open panel's footer; it goes when the panel does
	React.useEffect(() => {
		if (collapsed) {
			setMenuOpen(false);
		}
	}, [collapsed]);

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
	const bell = showNotifications ? (
		<NotificationBell
			count={bellCount}
			onClick={onNotificationsClick}
			color={fg}
			hoverColor={tint}
			tooltipPlacement='right'
			testId='panel-notifications'
		/>
	) : null;

	const userButton = showProfile ? (
		<ButtonBase
			ref={footerRef}
			onClick={() => setMenuOpen(true)}
			aria-haspopup='menu'
			aria-expanded={menuOpen}
			aria-label='Account menu'
			data-testid='panel-user-button'
			sx={{
				flex: collapsed ? '0 0 auto' : 1,
				minWidth: 0,
				justifyContent: 'flex-start',
				gap: 1.25,
				p: 0.75,
				borderRadius: '10px',
				bgcolor: menuOpen ? tint : 'transparent',
				'&:hover': { bgcolor: tint },
				...FOCUS_OUTLINE_FIX
			}}
		>
			{collapsed && showNotifications ? (
				// Collapsed: no room for the bell, so unread shows as a dot
				<Badge
					color='error'
					variant='dot'
					overlap='circular'
					invisible={!bellCount}
				>
					{renderAvatar(36)}
				</Badge>
			) : (
				renderAvatar(collapsed ? 36 : 40)
			)}
			{!collapsed ? (
				<Box sx={{ minWidth: 0, textAlign: 'left' }}>
					<Typography
						noWrap
						sx={{ fontWeight: 600, color: fg, lineHeight: 1.3 }}
					>
						{userName}
					</Typography>
					{roleLabel ? (
						<Typography
							noWrap
							variant='caption'
							data-testid='panel-user-role'
							sx={{
								display: 'block',
								color: fg,
								opacity: 0.85,
								letterSpacing: '0.02em',
								lineHeight: 1.3
							}}
						>
							{roleLabel}
						</Typography>
					) : null}
				</Box>
			) : null}
		</ButtonBase>
	) : null;

	// Collapsed, the bell folds into the avatar's dot (unless there is no user row)
	const showBell = Boolean(bell) && (!collapsed || !userButton);
	const footer =
		userButton || showBell ? (
			<Stack
				direction='row'
				sx={{
					alignItems: 'center',
					gap: 0.5,
					justifyContent: 'center'
				}}
			>
				{userButton}
				{showBell ? bell : null}
			</Stack>
		) : undefined;

	return (
		<Box
			data-testid='panel-sidebar'
			data-collapsed={collapsed ? 'true' : 'false'}
			sx={{
				flex: '1 1 auto',
				minHeight: 0,
				display: 'flex',
				flexDirection: 'column'
			}}
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
				brandColor={brandColor}
				headerBackgroundColor={headerBackgroundColor}
				headerForegroundColor={headerForegroundColor}
				activeAccentColor={activeAccentColor}
				groupAccentColor={groupAccentColor}
				activeForegroundColor={activeForegroundColor}
				foregroundColor={foregroundColor}
				surfaceBackgroundColor={surface}
				collapsed={collapsed}
				expandedWidth={expandedWidth}
				collapsedWidth={collapsedWidth}
				topContent={topContent}
				footer={footer}
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
					onLinkClick={onLinkClick}
					menuItems={menuItems}
					platforms={platforms}
					currentPlatformKey={currentPlatformKey}
					onPlatformSelect={onPlatformSelect}
					onLogout={onLogout}
				/>
			) : null}
		</Box>
	);
};

export default PanelSidebar;
