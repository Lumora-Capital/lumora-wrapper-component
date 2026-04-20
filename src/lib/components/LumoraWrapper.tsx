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
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { clearAuthTokens, getCurrentUser, isAuthenticated } from '../authUtils';
import { createAxiosClient } from '../axiosClient';
import { validateAndRefreshTokens } from '../tokenValidator';
import AppNavbar from './AppNavbar';
import CardAlert from './CardAlert';
import MenuContent from './MenuContent';
import MobileSidebar from './MobileSidebar';

/** Fixed desktop permanent rail width — same with or without `showSidebarRailTitles` so main layout does not shift */
const DESKTOP_RAIL_WIDTH_PX = 100;

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
	// Accent color prop
	accentColor?: string;
	contentBackgroundColor?: string;
	// Navbar styling props
	navbarBackground?: string;
	navbarAccentColor?: string;
	// API base URL for axios client
	apiBaseUrl: string;
	// Chat sidebar props
	GlobalChatSidebar?: React.ComponentType;
	useChatSidebar?: () => { isOpen: boolean };
	rightExtraContent?: Array<{
		key: string;
		name: string;
		role: string;
		avatar?: string;
		onClick?: () => void;
		type: 'profile' | 'divider';
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
	accentColor = '#01584f',
	contentBackgroundColor = '#f2f9fc',
	navbarBackground = '#ffffff',
	navbarAccentColor = '#000000',
	GlobalChatSidebar,
	useChatSidebar,
	rightExtraContent,
	customNavbar: CustomNavbar,
	customNavbarProps,
	redirectToLogin,
	apiBaseUrl
}) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	// Keep drawer paper width and main `calc(100% - …)` in sync (fixed rail width)
	let desktopRailWidthPx = 0;
	if (showSidebar && !isMobile) {
		desktopRailWidthPx = DESKTOP_RAIL_WIDTH_PX;
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
					sx={{ color: accentColor }}
				/>
				<Box sx={{ mt: 2, color: 'text.secondary' }}>
					Checking session...
				</Box>
			</Box>
		);
	}

	// Don't render children if no session exists
	// (This state should not be reached as we redirect, but adding as safety)
	if (!hasSession) {
		return null;
	}

	return (
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
					onMenuClick={
						isMobile && showSidebar
							? handleMobileSidebarToggle
							: undefined
					}
					showMenuButton={isMobile && showSidebar}
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
					accentColor={accentColor}
					contentBackgroundColor={contentBackgroundColor}
					navbarBackground={navbarBackground}
					navbarAccentColor={navbarAccentColor}
					rightExtraContent={rightExtraContent}
					customNavbar={CustomNavbar}
					customNavbarProps={customNavbarProps}
				/>
			)}

			{/* Desktop Sidebar */}
			{showSidebar && !isMobile && (
				<Drawer
					variant='permanent'
					sx={{
						width: desktopRailWidthPx,
						flexShrink: 0,
						zIndex: 2, // Higher z-index than app bar
						'& .MuiDrawer-paper': {
							width: desktopRailWidthPx,
							boxSizing: 'border-box',
							bgcolor: contentBackgroundColor,
							borderRight: 'none',
							top: showHeader ? '60px' : 0, // Position below header
							height: showHeader ? 'calc(100vh - 60px)' : '100vh'
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
							pt: 2
						}}
					>
						<MenuContent
							variant='rail'
							mainLinks={sidebarLinks}
							secondaryLinks={secondarySidebarLinks}
							activePath={activePath}
							onLinkClick={onLinkClick}
							accentColor={accentColor}
							surfaceBackgroundColor={contentBackgroundColor}
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
					onLogout={handleLogout}
					onProfileClick={onProfileClick}
					showNotifications={showNotifications}
					notificationCount={notificationCount}
					onNotificationBellClick={
						showNotifications && NotificationSidebarContent
							? () => {
									setMobileSidebarOpen(false);
									setNotificationDrawerOpen(true);
								}
							: undefined
					}
					alertProps={alertProps}
					accentColor={accentColor}
				/>
			)}

			{/* Main Content Area */}
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					m: 1,
					width: isMobile
						? '100%'
						: showSidebar
							? `calc(100% - ${desktopRailWidthPx}px)`
							: '100%',
					mt: showHeader ? '60px' : 0, // Account for AppNavbar height (60px)
					ml: isMobile ? 0 : showSidebar ? 0 : 0, // Offset for sidebar on desktop
					backgroundColor: contentBackgroundColor, // White background for main content
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
	);
};

export default LumoraWrapper;
