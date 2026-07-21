import type { SxProps, Theme } from '@mui/material';
import {
	Box,
	CircularProgress,
	CssBaseline,
	Drawer,
	Grid,
	useMediaQuery,
	useTheme
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getDesignTokens } from '../../themePrimitives';
import { clearAuthTokens, getCurrentUser, isAuthenticated } from '../authUtils';
import { createAxiosClient } from '../axiosClient';
import { validateAndRefreshTokens } from '../tokenValidator';
import AppNavbar from './AppNavbar';
import CardAlert from './CardAlert';
import CollapsibleSidebar from './CollapsibleSidebar';
import MenuContent from './MenuContent';
import MobileSidebar from './MobileSidebar';
import { readStoredCollapsed, writeStoredCollapsed } from './sidebarUtils';

/** Fixed desktop permanent rail width — same with or without `showSidebarRailTitles` so main layout does not shift */
const DESKTOP_RAIL_WIDTH_PX = 100;

/** Fixed width of the non-collapsible `rail-labeled` variant. Narrow rail with
 * labels stacked under the icons (captions/icons are sized down to fit 80px). */
const RAIL_LABELED_WIDTH_PX = 80;

/** Fixed navbar height; the full-height rail-labeled sidebar insets its content
 * by this much so items start below the bar. */
const NAVBAR_HEIGHT_PX = 60;

/** Collapsible sidebar variant widths and persistence key. */
const COLLAPSIBLE_EXPANDED_WIDTH_PX = 264;
const COLLAPSIBLE_COLLAPSED_WIDTH_PX = 72;
const SIDEBAR_PERSIST_KEY = 'lumora:sidebar-collapsed';
const SIDEBAR_TRANSITION = 'width 200ms ease, left 200ms ease';

/** One level of children under a sidebar parent; no further nesting. */
export type SidebarSubLink = {
	text: string;
	path: string;
	icon?: React.ReactNode;
};

// Type for sidebar navigation links (optional path when used only as a group parent)
export type SidebarLink = {
	text: string;
	path?: string;
	icon: React.ReactNode;
	subitems?: SidebarSubLink[];
};

// Interface for LumoraWrapper props
export interface LumoraWrapperProps {
	children: React.ReactNode;
	sidebarLinks?: SidebarLink[];
	secondarySidebarLinks?: SidebarLink[];
	// Header props
	appName?: string;
	pageName?: string;
	showHeader?: boolean;
	showSidebar?: boolean;
	/** When true on desktop (`md`+), rail shows `link.text` under each icon (drawer width is unchanged). */
	showSidebarRailTitles?: boolean;
	/**
	 * Desktop sidebar layout. `'rail'` (default) is the fixed icon rail; `'collapsible'`
	 * is a full-height panel that toggles between expanded (logo + title + labels) and a
	 * collapsed icon rail, persisting its state to localStorage; `'rail-labeled'` is a
	 * fixed narrow rail with the label stacked under each icon that never collapses
	 * (no toggle). Mobile is unaffected.
	 */
	sidebarVariant?: 'rail' | 'collapsible' | 'rail-labeled';
	/** Brand logo shown in the navbar; defaults to the Lumora logo. */
	logo?: React.ReactNode;
	/**
	 * @deprecated No longer rendered. The sidebar header (brand + section label)
	 * was moved to the navbar; this prop is accepted but ignored.
	 */
	sidebarSectionTitle?: string;
	/** Surface background of the collapsible sidebar (default '#ffffff'). */
	sidebarBackgroundColor?: string;
	/** Light accent tint for grouped sub-items and hover (collapsible sidebar). */
	groupAccentColor?: string;
	/** Foreground of the highlighted sidebar item (active or hovered); defaults
	 * to auto-contrast from the sidebar accent. */
	activeSidebarForegroundColor?: string;
	enableRefreshToken?: boolean;
	activePath?: string;
	onLinkClick?: (path: string) => void;
	// User profile props
	userName?: string;
	userEmail?: string;
	userAvatar?: string;
	onLogout: (error?: Error) => void | Promise<void>;
	onProfileClick?: () => void;
	onAccountClick?: () => void;
	onSettingsClick?: () => void;
	showSettings?: boolean;
	// Notification props
	showNotifications?: boolean;
	notificationCount?: number;
	/** Content component for the notification drawer; receives onClose. When provided, navbar bell opens this drawer. */
	NotificationSidebarContent?: React.ComponentType<{ onClose: () => void }>;
	// Search bar props
	showSearchbar?: boolean;
	searchValue?: string;
	onSearchChange?: (value: string) => void;
	onSearchSubmit?: (value: string) => void;
	// Profile props
	showProfile?: boolean;
	userRole?: string;
	// User data callback
	onVerify?: (userData: {
		name: string;
		email: string;
		profilePicture: string;
		role: string;
	}) => void;
	// Alert card props
	alertProps?: {
		title?: string;
		message?: string;
		buttonText?: string;
		onButtonClick?: () => void;
		show?: boolean;
	};
	// Styling props
	style?: SxProps<Theme>;
	headerStyles?: SxProps<Theme>;
	sidebarStyles?: SxProps<Theme>;
	contentStyles?: SxProps<Theme>;
	/**
	 * Brand accent used by the navbar (app name / logo / menu button) and as the
	 * default for the sidebar accent. Defaults to '#01584f'.
	 */
	accentColor?: string;
	/**
	 * Accent for the sidebar — the solid fill of the highlighted item, shared by
	 * the active item and any item on hover. Independent of the navbar brand
	 * accent; defaults to `accentColor`.
	 */
	sidebarAccentColor?: string;
	/**
	 * Idle (inactive) text/icon color for sidebar items, independent of the
	 * active fill. Lets idle labels be tinted (e.g. a light teal) while the
	 * active item uses a darker solid fill. Defaults to the sidebar accent in
	 * light mode / the theme text color on a dark surface.
	 */
	sidebarForegroundColor?: string;
	contentBackgroundColor?: string;
	// Navbar styling props
	navbarBackground?: string;
	navbarAccentColor?: string;
	// Theme mode
	theme?: 'dark' | 'light';
	showThemeToggler?: boolean;
	onThemeToggle?: () => void;
	// API base URL for axios client
	apiBaseUrl: string;
	// Chat sidebar props
	GlobalChatSidebar?: React.ComponentType;
	useChatSidebar?: () => { isOpen: boolean };
	// Assistant (chat) launcher in the navbar
	/** Show the Nexa assistant icon (animated border) in the navbar. */
	showAssistant?: boolean;
	/** Click handler for the assistant icon; typically toggles the chat sidebar. */
	onAssistantClick?: () => void;
	/** Highlight the assistant icon while the chat is open. */
	assistantActive?: boolean;
	/** Animate the assistant icon's ring/beam — only while a chat is ongoing. */
	assistantBusy?: boolean;
	rightExtraContent?: Array<{
		key: string;
		name: string;
		role: string;
		avatar?: string;
		onClick?: () => void;
		type: 'profile' | 'divider';
		disabled?: boolean;
		tooltip?: string;
	}>;
	// Custom navbar component (replaces search bar)
	customNavbar?: React.ComponentType<any>;
	customNavbarProps?: Record<string, any>;
	// Redirect to login function
	redirectToLogin: () => void;
}

/**
 * LumoraWrapper component provides a consistent layout structure for authenticated pages
 * and handles proactive token refresh to prevent session expiry during active use.
 */
const LumoraWrapper: React.FC<LumoraWrapperProps> = ({
	children,
	sidebarLinks = [],
	secondarySidebarLinks = [],
	appName = 'Dashboard',
	pageName = 'Home',
	showHeader = true,
	showSidebar = true,
	showSidebarRailTitles = false,
	sidebarVariant = 'rail',
	logo,
	sidebarBackgroundColor,
	groupAccentColor,
	activeSidebarForegroundColor,
	enableRefreshToken = false,
	activePath,
	onLinkClick,
	userName,
	userEmail,
	userAvatar,
	onLogout,
	onProfileClick,
	onAccountClick,
	onSettingsClick,
	showSettings = true,
	showNotifications = true,
	notificationCount = 0,
	NotificationSidebarContent,
	showSearchbar = true,
	searchValue,
	onSearchChange,
	onSearchSubmit,
	showProfile = true,
	userRole,
	onVerify,
	alertProps,
	style,
	headerStyles,
	sidebarStyles,
	contentStyles,
	accentColor,
	sidebarAccentColor,
	sidebarForegroundColor,
	contentBackgroundColor,
	navbarBackground,
	navbarAccentColor,
	theme: themeMode = 'light',
	showThemeToggler = false,
	onThemeToggle,
	GlobalChatSidebar,
	useChatSidebar,
	showAssistant = false,
	onAssistantClick,
	assistantActive = false,
	assistantBusy = false,
	rightExtraContent,
	customNavbar: CustomNavbar,
	customNavbarProps,
	redirectToLogin,
	apiBaseUrl
}) => {
	const muiNativeTheme = useTheme();
	const isMobile = useMediaQuery(muiNativeTheme.breakpoints.down('md'));
	const muiTheme = useMemo(
		() => createTheme(getDesignTokens(themeMode)),
		[themeMode]
	);
	const isDark = themeMode === 'dark';
	const resolvedAccentColor = accentColor ?? '#01584f';
	// Sidebar accent is independent of the navbar brand accent, falling back to it.
	const resolvedSidebarAccent = sidebarAccentColor ?? resolvedAccentColor;
	const resolvedContentBg =
		contentBackgroundColor ?? (isDark ? 'hsl(220, 35%, 9%)' : '#f2f9fc');
	const resolvedNavbarBg =
		navbarBackground ?? (isDark ? 'hsl(220, 30%, 7%)' : '#ffffff');
	const resolvedNavbarAccent =
		navbarAccentColor ?? (isDark ? '#ffffff' : '#000000');
	const useCollapsibleSidebar = sidebarVariant === 'collapsible';
	// Non-collapsible narrow rail with labels — rendered by CollapsibleSidebar
	// pinned in its shrunk state with captions on.
	const useRailLabeledSidebar = sidebarVariant === 'rail-labeled';
	const rendersCollapsibleComponent =
		useCollapsibleSidebar || useRailLabeledSidebar;
	// The rail-labeled sidebar runs the full viewport height (top:0), so the
	// navbar starts at its right edge instead of spanning the whole width.
	const railLabeledFullHeight =
		useRailLabeledSidebar && showSidebar && !isMobile;
	// Default logo tinted to the sidebar accent via a CSS mask, so it stays in
	// sync when the accent color is overridden. Consumers can pass their own.
	const resolvedLogo = logo ?? (
		<Box
			role='img'
			aria-label={`${appName} logo`}
			sx={{
				width: 28,
				height: 28,
				flexShrink: 0,
				// Accent in light mode; a legible light fill in dark mode.
				bgcolor: isDark ? '#ffffff' : resolvedAccentColor,
				maskImage: 'url(/lumora-logo.svg)',
				maskRepeat: 'no-repeat',
				maskPosition: 'center',
				maskSize: 'contain',
				WebkitMaskImage: 'url(/lumora-logo.svg)',
				WebkitMaskRepeat: 'no-repeat',
				WebkitMaskPosition: 'center',
				WebkitMaskSize: 'contain'
			}}
		/>
	);
	// Collapsible sidebar collapsed state is owned here so the navbar/content
	// offsets stay in sync with the sidebar width. Restored from localStorage.
	const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(
		() => readStoredCollapsed(SIDEBAR_PERSIST_KEY) ?? false
	);
	const handleSidebarCollapsedChange = (next: boolean) => {
		setSidebarCollapsed(next);
		writeStoredCollapsed(SIDEBAR_PERSIST_KEY, next);
	};
	// Keep sidebar, drawer paper width and main `calc(100% - …)` in sync.
	let desktopSidebarWidthPx = 0;
	if (showSidebar && !isMobile) {
		if (useRailLabeledSidebar) {
			desktopSidebarWidthPx = RAIL_LABELED_WIDTH_PX;
		} else if (useCollapsibleSidebar) {
			desktopSidebarWidthPx = sidebarCollapsed
				? COLLAPSIBLE_COLLAPSED_WIDTH_PX
				: COLLAPSIBLE_EXPANDED_WIDTH_PX;
		} else {
			desktopSidebarWidthPx = DESKTOP_RAIL_WIDTH_PX;
		}
	}
	const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
	const [notificationDrawerOpen, setNotificationDrawerOpen] = useState(false);
	const [isCheckingSession, setIsCheckingSession] = useState(true);
	const [hasSession, setHasSession] = useState(false);
	const [userData, setUserData] = useState<{
		name: string;
		email: string;
		profilePicture: string;
		role: string;
	} | null>(null);
	const chatSidebarHook = useChatSidebar?.();
	const isChatOpen = chatSidebarHook?.isOpen ?? false;
	const onVerifyRef = useRef(onVerify);
	const hasLoadedUserDataRef = useRef(false);

	// Create axios client instance with the provided API base URL
	const axiosClient = useMemo(
		() => createAxiosClient(apiBaseUrl),
		[apiBaseUrl]
	);

	// Update ref when callback changes
	useEffect(() => {
		onVerifyRef.current = onVerify;
	}, [onVerify]);

	// Handle mobile sidebar toggle for responsive design
	const handleMobileSidebarToggle = () => {
		setMobileSidebarOpen(!mobileSidebarOpen);
	};

	// Handle mobile sidebar close
	const handleMobileSidebarClose = () => {
		setMobileSidebarOpen(false);
	};

	// Wrap logout handler to clear user data
	// IMPORTANT: Call onLogout FIRST so parent can call logout API before tokens are cleared
	const handleLogout = (error?: Error) => {
		// Call parent logout handler FIRST (this will call the logout API)
		// The parent's logout handler will clear tokens via authApi.logout()
		// Handle both sync and async onLogout handlers
		const result = onLogout(error);

		// If onLogout returns a promise, handle it
		if (result instanceof Promise) {
			result
				.then(() => {
					// Clear user data state after logout API is called
					setUserData(null);
				})
				.catch((logoutError: unknown) => {
					console.error('Error in logout handler:', logoutError);
					// Still clear user data even if there's an error
					setUserData(null);
				});
		} else {
			// Synchronous handler, clear user data immediately
			setUserData(null);
		}
	};

	// Session checking: validate that user has a refresh token and user data before rendering
	useEffect(() => {
		const checkSession = () => {
			try {
				// Check authentication status using centralized utility
				const { isAuthenticated: authenticated, error: authError } =
					isAuthenticated();

				if (!authenticated) {
					// No valid tokens found, clear all tokens and redirect to login
					console.log('No session found, redirecting to login');
					clearAuthTokens();
					redirectToLogin();
					return;
				}

				// Get user data using centralized utility (only once)
				if (!hasLoadedUserDataRef.current) {
					const { user, error: userError } = getCurrentUser();

					if (user && !userError) {
						const parsedUserData = {
							name: user.name || '',
							email: user.email || '',
							profilePicture: user.profilePicture || '',
							role: user.role || ''
						};
						setUserData(parsedUserData);
						hasLoadedUserDataRef.current = true;
						// Call callback if provided (using ref to avoid dependency issues)
						if (onVerifyRef.current) {
							onVerifyRef.current(parsedUserData);
						}
					} else if (userError) {
						console.error('Error getting user data:', userError);
					}
				}

				// Session exists, mark as authenticated
				setHasSession(true);
			} catch (error) {
				console.error('Error checking session:', error);
				// On error, clear tokens and redirect to login for safety
				clearAuthTokens();
				redirectToLogin();
			} finally {
				setIsCheckingSession(false);
			}
		};

		checkSession();
	}, [redirectToLogin]);

	// Initial token validation when component mounts and refresh is enabled
	// Note: Token refresh is now handled automatically by axiosClient interceptors
	useEffect(() => {
		if (!enableRefreshToken) {
			return;
		}

		// Validate tokens on mount only
		validateAndRefreshTokens(axiosClient, redirectToLogin);
	}, [enableRefreshToken, axiosClient]);

	// Show loading state while checking session
	if (isCheckingSession) {
		return (
			<ThemeProvider theme={muiTheme}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						minHeight: '100vh',
						backgroundColor: 'background.default'
					}}
				>
					<CircularProgress
						size={60}
						thickness={4}
						sx={{ color: resolvedAccentColor }}
					/>
					<Box sx={{ mt: 2, color: 'text.secondary' }}>
						Checking session...
					</Box>
				</Box>
			</ThemeProvider>
		);
	}

	// Don't render children if no session exists
	// (This state should not be reached as we redirect, but adding as safety)
	if (!hasSession) {
		return null;
	}

	return (
		<ThemeProvider theme={muiTheme}>
			<Box
				sx={{
					display: 'flex',
					minHeight: '100vh',
					...style
				}}
			>
				<CssBaseline />

				{/* Header */}
				{showHeader && (
					<AppNavbar
						appName={appName}
						pageName={pageName}
						isMobile={isMobile}
						onMenuClick={
							isMobile
								? showSidebar
									? handleMobileSidebarToggle
									: undefined
								: useCollapsibleSidebar && showSidebar
									? () =>
											handleSidebarCollapsedChange(
												!sidebarCollapsed
											)
									: undefined
						}
						showMenuButton={
							showSidebar && (isMobile || useCollapsibleSidebar)
						}
						sidebarCollapsed={
							!isMobile && useCollapsibleSidebar
								? sidebarCollapsed
								: undefined
						}
						showBrand={true}
						leftOffsetPx={
							railLabeledFullHeight ? RAIL_LABELED_WIDTH_PX : 0
						}
						logo={resolvedLogo}
						headerStyles={headerStyles}
						userName={userName}
						userEmail={userEmail}
						userAvatar={userAvatar}
						onProfileClick={onProfileClick}
						onAccountClick={onAccountClick}
						onSettingsClick={onSettingsClick}
						showSettings={showSettings}
						onLogout={handleLogout}
						showNotifications={showNotifications}
						notificationCount={notificationCount}
						onNotificationBellClick={
							showNotifications && NotificationSidebarContent
								? () => setNotificationDrawerOpen(true)
								: undefined
						}
						showSearchbar={showSearchbar && !CustomNavbar}
						searchValue={searchValue}
						onSearchChange={onSearchChange}
						onSearchSubmit={onSearchSubmit}
						showProfile={showProfile}
						userRole={userRole}
						accentColor={resolvedAccentColor}
						contentBackgroundColor={resolvedContentBg}
						navbarBackground={resolvedNavbarBg}
						navbarAccentColor={resolvedNavbarAccent}
						theme={themeMode}
						showThemeToggler={showThemeToggler}
						onThemeToggle={onThemeToggle}
						rightExtraContent={rightExtraContent}
						customNavbar={CustomNavbar}
						customNavbarProps={customNavbarProps}
						showAssistant={showAssistant}
						onAssistantClick={onAssistantClick}
						assistantActive={assistantActive}
						assistantBusy={assistantBusy}
					/>
				)}

				{/* Desktop Sidebar — collapsible / rail-labeled variants (both
				    rendered by CollapsibleSidebar) */}
				{showSidebar && !isMobile && rendersCollapsibleComponent && (
					<Box
						component='aside'
						sx={{
							width: desktopSidebarWidthPx,
							minWidth: desktopSidebarWidthPx,
							flexShrink: 0,
							zIndex: 2,
							position: 'sticky',
							// rail-labeled spans the full viewport height with the
							// navbar inset to its right; the collapsible panel sits
							// below the fixed 60px navbar.
							top: railLabeledFullHeight
								? 0
								: showHeader
									? '60px'
									: 0,
							mt: railLabeledFullHeight
								? 0
								: showHeader
									? '60px'
									: 0,
							alignSelf: 'flex-start',
							height: railLabeledFullHeight
								? '100vh'
								: showHeader
									? 'calc(100vh - 60px)'
									: '100vh',
							transition: SIDEBAR_TRANSITION,
							...sidebarStyles
						}}
					>
						<CollapsibleSidebar
							mainLinks={sidebarLinks}
							secondaryLinks={secondarySidebarLinks}
							activePath={activePath}
							onLinkClick={onLinkClick}
							activeAccentColor={resolvedSidebarAccent}
							groupAccentColor={groupAccentColor}
							activeForegroundColor={activeSidebarForegroundColor}
							foregroundColor={sidebarForegroundColor}
							surfaceBackgroundColor={sidebarBackgroundColor}
							// rail-labeled is pinned shrunk with captions and no toggle.
							collapsed={
								useRailLabeledSidebar ? true : sidebarCollapsed
							}
							onCollapsedChange={
								useRailLabeledSidebar
									? undefined
									: handleSidebarCollapsedChange
							}
							showLabels={useRailLabeledSidebar}
							// Full-height rail-labeled: inset content below the
							// navbar so the first item clears the bar.
							topInsetPx={
								railLabeledFullHeight && showHeader
									? NAVBAR_HEIGHT_PX
									: 0
							}
							expandedWidth={COLLAPSIBLE_EXPANDED_WIDTH_PX}
							collapsedWidth={
								useRailLabeledSidebar
									? RAIL_LABELED_WIDTH_PX
									: COLLAPSIBLE_COLLAPSED_WIDTH_PX
							}
						/>
						{/* Full alert card only in the wide (expanded) collapsible
						    panel — never in the narrow labeled rail. */}
						{useCollapsibleSidebar &&
							alertProps?.show &&
							!sidebarCollapsed && <CardAlert {...alertProps} />}
					</Box>
				)}

				{/* Desktop Sidebar — fixed rail variant */}
				{showSidebar && !isMobile && !rendersCollapsibleComponent && (
					<Drawer
						variant='permanent'
						sx={{
							width: desktopSidebarWidthPx,
							flexShrink: 0,
							zIndex: 2, // Higher z-index than app bar
							'& .MuiDrawer-paper': {
								width: desktopSidebarWidthPx,
								boxSizing: 'border-box',
								bgcolor: resolvedContentBg,
								borderRight: 'none',
								top: showHeader ? '60px' : 0, // Position below header
								height: showHeader
									? 'calc(100vh - 60px)'
									: '100vh'
							},
							...sidebarStyles
						}}
					>
						<Box
							sx={{
								overflow: 'auto',
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								pt: 2,
								// Inset rail content from drawer edges (esp. left) so items do not sit flush
								px: 1.5,
								boxSizing: 'border-box'
							}}
						>
							<MenuContent
								variant='rail'
								mainLinks={sidebarLinks}
								secondaryLinks={secondarySidebarLinks}
								activePath={activePath}
								onLinkClick={onLinkClick}
								accentColor={resolvedSidebarAccent}
								surfaceBackgroundColor={resolvedContentBg}
								railShowTitles={showSidebarRailTitles}
							/>
							{alertProps?.show && <CardAlert {...alertProps} />}
						</Box>
					</Drawer>
				)}

				{/* Mobile Sidebar */}
				{showSidebar && isMobile && (
					<MobileSidebar
						open={mobileSidebarOpen}
						onClose={handleMobileSidebarClose}
						mainLinks={sidebarLinks}
						secondaryLinks={secondarySidebarLinks}
						activePath={activePath}
						onLinkClick={onLinkClick}
						userName={userName}
						userEmail={userEmail}
						userAvatar={userAvatar}
						userRole={userRole}
						onLogout={handleLogout}
						onProfileClick={onProfileClick}
						theme={themeMode}
						showThemeToggler={showThemeToggler}
						onThemeToggle={onThemeToggle}
						alertProps={alertProps}
						accentColor={resolvedSidebarAccent}
						groupAccentColor={groupAccentColor}
					/>
				)}

				{/* Main Content Area */}
				<Box
					component='main'
					sx={{
						flexGrow: 1,
						p: 3,
						width: isMobile
							? '100%'
							: showSidebar
								? `calc(100% - ${desktopSidebarWidthPx}px)`
								: '100%',
						transition: SIDEBAR_TRANSITION,
						mt: showHeader ? '60px' : 0, // Account for AppNavbar height (60px)
						ml: isMobile ? 0 : showSidebar ? 0 : 0, // Offset for sidebar on desktop
						backgroundColor: resolvedContentBg,
						mb: 0,
						mr: 0,
						...contentStyles
					}}
				>
					<Grid container spacing={3}>
						<Grid
							size={{
								xs: 12,
								md: isChatOpen && GlobalChatSidebar ? 8.5 : 12
							}}
							sx={{
								display: 'flex',
								flexDirection: 'column'
							}}
						>
							{children}
						</Grid>
						{isChatOpen && GlobalChatSidebar && (
							<Grid
								size={{ xs: 12, md: 3.5 }}
								sx={{
									display: 'flex',
									flexDirection: 'column',
									position: { xs: 'static', md: 'sticky' },
									top: {
										xs: 'auto',
										md: showHeader ? '60px' : '0px'
									}, // Stick below navbar
									alignSelf: 'flex-start',
									height: {
										xs: 'auto',
										md: showHeader
											? 'calc(100vh - 60px - 24px - 8px)'
											: 'calc(100vh - 24px - 8px)'
									}, // Viewport - navbar - top padding - top margin
									maxHeight: {
										xs: 'none',
										md: showHeader
											? 'calc(100vh - 60px - 24px - 8px)'
											: 'calc(100vh - 24px - 8px)'
									} // Viewport - navbar - top padding - top margin
								}}
							>
								<GlobalChatSidebar />
							</Grid>
						)}
					</Grid>
				</Box>

				{/* Notification sidebar drawer (container + toggle only; content from host) */}
				{showNotifications && NotificationSidebarContent && (
					<Drawer
						anchor='right'
						open={notificationDrawerOpen}
						onClose={() => setNotificationDrawerOpen(false)}
						slotProps={{
							paper: { sx: { width: 380, maxWidth: '100vw' } }
						}}
					>
						<NotificationSidebarContent
							onClose={() => setNotificationDrawerOpen(false)}
						/>
					</Drawer>
				)}
			</Box>
		</ThemeProvider>
	);
};

export default LumoraWrapper;
