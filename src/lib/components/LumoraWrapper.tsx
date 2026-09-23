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
import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react';
import { clearAuthTokens, getCurrentUser, isAuthenticated } from '../authUtils';
import { createAxiosClient } from '../axiosClient';
import { getDesignTokens } from '../theme';
import { validateAndRefreshTokens } from '../tokenValidator';
import AssistantButton from './AssistantButton';
import Brand from './Brand';
import CardAlert from './CardAlert';
import CollapsibleSidebar from './CollapsibleSidebar';
import MenuContent from './MenuContent';
import MobileSidebar from './MobileSidebar';
import MobileTopBar from './MobileTopBar';
import SidebarFooter, { type SidebarFooterProps } from './SidebarFooter';
import SidebarSearch from './SidebarSearch';
import {
	deriveGroupTint,
	getContrastText,
	readStoredCollapsed,
	writeStoredCollapsed
} from './sidebarUtils';

/** Fixed desktop permanent rail width — same with or without `showSidebarRailTitles` so main layout does not shift */
const DESKTOP_RAIL_WIDTH_PX = 100;

/** Fixed width of the non-collapsible `rail-labeled` variant. Narrow rail with
 * labels stacked under the icons (captions/icons are sized down to fit 80px). */
const RAIL_LABELED_WIDTH_PX = 80;

/** Height of the mobile-only top bar; the content is offset by it on mobile. */
const MOBILE_BAR_HEIGHT_PX = 56;

/** Collapsible sidebar variant widths and persistence key. */
const COLLAPSIBLE_EXPANDED_WIDTH_PX = 264;
const COLLAPSIBLE_COLLAPSED_WIDTH_PX = 72;
const SIDEBAR_PERSIST_KEY = 'lumora:sidebar-collapsed';
const SIDEBAR_TRANSITION = 'width 200ms ease, left 200ms ease';

/**
 * A child of a sidebar parent. It is a page (`path`), or — with `subitems`
 * of its own — a section grouping pages, which gives an area a third level
 * (`CRM › Marketing › Campaigns`). A section without a path only expands and
 * collapses. Every variant renders the nesting recursively, but the visual
 * design assumes three levels: deeper trees indent further and nothing more.
 */
export type SidebarSubLink = {
	text: string;
	path?: string;
	icon?: React.ReactNode;
	subitems?: SidebarSubLink[];
};

/** A top-level sidebar link. `path` is optional when it only groups `subitems`. */
export type SidebarLink = {
	text: string;
	path?: string;
	icon: React.ReactNode;
	subitems?: SidebarSubLink[];
};

export interface LumoraWrapperProps {
	children: React.ReactNode;
	sidebarLinks?: SidebarLink[];
	secondarySidebarLinks?: SidebarLink[];
	/** Brand wordmark in the sidebar header (and the mobile top bar). */
	appName?: string;
	showSidebar?: boolean;
	/** When true on desktop (`md`+), rail shows `link.text` under each icon (drawer width is unchanged). */
	showSidebarRailTitles?: boolean;
	/**
	 * Desktop sidebar layout. `'rail'` (default) is the fixed icon rail; `'collapsible'`
	 * is a full-height panel with its own 60px header (hamburger toggle + brand) that
	 * switches between expanded (icon + label rows) and a collapsed icon rail,
	 * persisting its state to localStorage; `'rail-labeled'` is a fixed narrow rail
	 * with the label stacked under each icon that never collapses (no toggle).
	 * Every variant runs the full height with the brand on top and notifications
	 * + user at the bottom. Mobile always uses a drawer behind a slim top bar.
	 */
	sidebarVariant?: 'rail' | 'collapsible' | 'rail-labeled';
	/** Brand logo; defaults to the Lumora logo. */
	logo?: React.ReactNode;
	/**
	 * Called when the brand block (app name + logo) is clicked. When omitted
	 * the brand is static. Typical use: navigate to the app's landing page.
	 */
	onBrandClick?: () => void;
	/**
	 * The app's global search, rendered in the sidebar under the brand and
	 * above the links. When the sidebar is collapsed it becomes a search icon
	 * that expands the sidebar and focuses the first input inside it; on the
	 * fixed narrow rails the icon opens it in a popover.
	 */
	searchComponent?: React.ReactNode;
	/** Surface background of the collapsible sidebar (default '#ffffff'). */
	sidebarBackgroundColor?: string;
	/**
	 * Background of the collapsible sidebar's 60px header block (hamburger +
	 * brand) and the mobile top bar. Defaults to the sidebar surface color, in
	 * which case the brand keeps the sidebar accent tint; setting a custom
	 * background switches the brand to auto-contrast against it.
	 */
	sidebarHeaderBackgroundColor?: string;
	/** Light accent tint for grouped sub-items and hover (collapsible sidebar). */
	groupAccentColor?: string;
	/** Foreground of the highlighted sidebar item (active or hovered); defaults
	 * to auto-contrast from the sidebar accent. */
	activeSidebarForegroundColor?: string;
	enableRefreshToken?: boolean;
	activePath?: string;
	onLinkClick?: (path: string) => void;
	// User (bottom of the sidebar)
	/** Show the user row; clicking it opens settings, dark mode and logout. */
	showProfile?: boolean;
	userName?: string;
	userRole?: string;
	userAvatar?: string;
	onLogout: (error?: Error) => void | Promise<void>;
	/** Show the Settings entry in the user menu. */
	showSettings?: boolean;
	onSettingsClick?: () => void;
	// Notifications (above the user)
	showNotifications?: boolean;
	notificationCount?: number;
	/** Content component for the notification drawer; receives onClose. When provided, the notifications row opens this drawer. */
	NotificationSidebarContent?: React.ComponentType<{ onClose: () => void }>;
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
	sidebarStyles?: SxProps<Theme>;
	contentStyles?: SxProps<Theme>;
	/**
	 * Brand accent; the default for the sidebar accent and the logo tint.
	 * Defaults to '#01584f'.
	 */
	accentColor?: string;
	/**
	 * Accent for the sidebar — the solid fill of the highlighted item, shared by
	 * the active item and any item on hover. Defaults to `accentColor`.
	 */
	sidebarAccentColor?: string;
	/**
	 * Idle (inactive) text/icon color for sidebar items, the search icon, the
	 * notifications row and the user row. Defaults to the sidebar accent in
	 * light mode / white on a dark surface.
	 */
	sidebarForegroundColor?: string;
	contentBackgroundColor?: string;
	// Theme mode
	theme?: 'dark' | 'light';
	/** Show the Dark mode switch in the user menu. */
	showThemeToggler?: boolean;
	onThemeToggle?: () => void;
	// API base URL for axios client
	apiBaseUrl: string;
	// Chat sidebar props
	GlobalChatSidebar?: React.ComponentType;
	useChatSidebar?: () => { isOpen: boolean };
	// Assistant (chat) launcher
	/** Show the floating Nexa assistant button (bottom-right). */
	showAssistant?: boolean;
	/** Click handler for the assistant button; typically toggles the chat sidebar. */
	onAssistantClick?: () => void;
	/** Highlight the assistant button while the chat is open. */
	assistantActive?: boolean;
	/** Animate the assistant button's ring/beam — only while a chat is ongoing. */
	assistantBusy?: boolean;
	// Redirect to login function
	redirectToLogin: () => void;
	/**
	 * @deprecated Use `searchComponent`. Still rendered in the search slot
	 * (with `customNavbarProps`) when `searchComponent` is not set.
	 */
	customNavbar?: React.ComponentType<any>;
	/** @deprecated See `customNavbar`. */
	customNavbarProps?: Record<string, any>;
	/** @deprecated Accepted but ignored; there is no header on desktop. */
	showHeader?: boolean;
	/** @deprecated Accepted but ignored; there is no header on desktop. */
	headerStyles?: SxProps<Theme>;
	/** @deprecated Accepted but ignored; pass your own `searchComponent`. */
	showSearchbar?: boolean;
	/** @deprecated Accepted but ignored; pass your own `searchComponent`. */
	searchValue?: string;
	/** @deprecated Accepted but ignored; pass your own `searchComponent`. */
	onSearchChange?: (value: string) => void;
	/** @deprecated Accepted but ignored; pass your own `searchComponent`. */
	onSearchSubmit?: (value: string) => void;
	/** @deprecated Accepted but ignored; there is no navbar. */
	navbarBackground?: string;
	/** @deprecated Accepted but ignored; there is no navbar. */
	navbarAccentColor?: string;
	/** @deprecated Accepted but ignored; there is no navbar. */
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
	/** @deprecated Accepted but ignored. */
	pageName?: string;
	/** @deprecated Accepted but ignored; the user row shows name and role. */
	userEmail?: string;
	/** @deprecated Accepted but ignored; the user menu has no profile entry. */
	onProfileClick?: () => void;
	/** @deprecated Accepted but ignored; the user menu has no account entry. */
	onAccountClick?: () => void;
	/** @deprecated Accepted but ignored; the sidebar has no section title. */
	sidebarSectionTitle?: string;
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
	showSidebar = true,
	showSidebarRailTitles = false,
	sidebarVariant = 'rail',
	logo,
	onBrandClick,
	searchComponent,
	sidebarBackgroundColor,
	sidebarHeaderBackgroundColor,
	groupAccentColor,
	activeSidebarForegroundColor,
	enableRefreshToken = false,
	activePath,
	onLinkClick,
	showProfile = true,
	userName,
	userRole,
	userAvatar,
	onLogout,
	showSettings = true,
	onSettingsClick,
	showNotifications = true,
	notificationCount = 0,
	NotificationSidebarContent,
	onVerify,
	alertProps,
	style,
	sidebarStyles,
	contentStyles,
	accentColor,
	sidebarAccentColor,
	sidebarForegroundColor,
	contentBackgroundColor,
	theme: themeMode = 'light',
	showThemeToggler = false,
	onThemeToggle,
	GlobalChatSidebar,
	useChatSidebar,
	showAssistant = false,
	onAssistantClick,
	assistantActive = false,
	assistantBusy = false,
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
	const resolvedSidebarAccent = sidebarAccentColor ?? resolvedAccentColor;
	const resolvedContentBg =
		contentBackgroundColor ?? (isDark ? 'hsl(220, 35%, 9%)' : '#f2f9fc');
	const useCollapsibleSidebar = sidebarVariant === 'collapsible';
	// Non-collapsible narrow rail with labels — rendered by CollapsibleSidebar
	// pinned in its shrunk state with captions on.
	const useRailLabeledSidebar = sidebarVariant === 'rail-labeled';
	const rendersCollapsibleComponent =
		useCollapsibleSidebar || useRailLabeledSidebar;
	// Resolved sidebar surface — mirrors CollapsibleSidebar's own default
	// (theme background.paper in dark mode, white in light) so wrapper-level
	// chrome (aside strip, header fallback) can't drift from the component.
	const resolvedSidebarSurface =
		sidebarBackgroundColor ?? (isDark ? 'hsl(220, 30%, 7%)' : '#ffffff');
	const resolvedSidebarHeaderBg =
		sidebarHeaderBackgroundColor ?? resolvedSidebarSurface;
	// Idle chrome on the sidebar surface: search icon, notifications, user.
	// Always a hex value so the hover tint can be derived from it.
	const sidebarChromeFg =
		sidebarForegroundColor ?? (isDark ? '#ffffff' : resolvedSidebarAccent);
	const sidebarChromeHover = deriveGroupTint(sidebarChromeFg);
	// Header brand tint. With no custom header background the header is part
	// of the sidebar surface, so the brand keeps the idle chrome tint. A custom
	// header background switches to auto-contrast so the brand stays legible.
	const sidebarHeaderFg = sidebarHeaderBackgroundColor
		? getContrastText(resolvedSidebarHeaderBg)
		: sidebarChromeFg;
	// Default logo via a CSS mask so it can be tinted per surface. Consumers
	// can pass their own `logo` node instead.
	const renderMaskLogo = (tint: string) => (
		<Box
			role='img'
			aria-label={`${appName} logo`}
			sx={{
				width: 28,
				height: 28,
				flexShrink: 0,
				bgcolor: tint,
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
	const headerLogo = logo ?? renderMaskLogo(sidebarHeaderFg);
	const railLogo = logo ?? renderMaskLogo(sidebarChromeFg);
	// Collapsible sidebar collapsed state is owned here so the content offset
	// stays in sync with the sidebar width. Restored from localStorage.
	const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(
		() => readStoredCollapsed(SIDEBAR_PERSIST_KEY) ?? false
	);
	const handleSidebarCollapsedChange = (next: boolean) => {
		setSidebarCollapsed(next);
		writeStoredCollapsed(SIDEBAR_PERSIST_KEY, next);
	};
	// Set when the collapsed rail's search icon expands the sidebar, so the
	// search field takes focus once it is rendered at full width.
	const [focusSearch, setFocusSearch] = useState(false);
	const clearFocusSearch = useCallback(() => setFocusSearch(false), []);
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
	const chatSidebarHook = useChatSidebar?.();
	const isChatOpen = chatSidebarHook?.isOpen ?? false;
	const onVerifyRef = useRef(onVerify);
	const hasLoadedUserDataRef = useRef(false);

	const axiosClient = useMemo(
		() => createAxiosClient(apiBaseUrl),
		[apiBaseUrl]
	);

	useEffect(() => {
		onVerifyRef.current = onVerify;
	}, [onVerify]);

	// The host owns logout (API call + clearing tokens); an async handler's
	// rejection is logged here so it never surfaces as an unhandled rejection.
	const handleLogout = (error?: Error) => {
		const result = onLogout(error);
		if (result instanceof Promise) {
			result.catch((logoutError: unknown) => {
				console.error('Error in logout handler:', logoutError);
			});
		}
	};

	// Session checking: validate that user has a refresh token and user data before rendering
	useEffect(() => {
		const checkSession = () => {
			try {
				const { isAuthenticated: authenticated } = isAuthenticated();

				if (!authenticated) {
					// No valid tokens found, clear all tokens and redirect to login
					console.log('No session found, redirecting to login');
					clearAuthTokens();
					redirectToLogin();
					return;
				}

				// Load the stored user once and hand it to the host
				if (!hasLoadedUserDataRef.current) {
					const { user, error: userError } = getCurrentUser();

					if (user && !userError) {
						const parsedUserData = {
							name: user.name || '',
							email: user.email || '',
							profilePicture: user.profilePicture || '',
							role: user.role || ''
						};
						hasLoadedUserDataRef.current = true;
						// Read through a ref so a new callback identity does not re-run the check
						onVerifyRef.current?.(parsedUserData);
					} else if (userError) {
						console.error('Error getting user data:', userError);
					}
				}

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

	// Proactive check on mount; refreshes during use are handled by the
	// axios client's 401 interceptor.
	useEffect(() => {
		if (!enableRefreshToken) {
			return;
		}

		validateAndRefreshTokens(axiosClient, redirectToLogin);
	}, [enableRefreshToken, axiosClient]);

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

	// Unreachable in practice (we redirect), but never render without a session
	if (!hasSession) {
		return null;
	}

	const searchNode =
		searchComponent ??
		(CustomNavbar ? <CustomNavbar {...customNavbarProps} /> : null);
	const openNotifications =
		NotificationSidebarContent &&
		(() => {
			setMobileSidebarOpen(false);
			setNotificationDrawerOpen(true);
		});
	// Notifications + user; `compact` for the collapsed and narrow rails.
	const footerProps: Omit<
		SidebarFooterProps,
		'compact' | 'color' | 'hoverColor'
	> = {
		showNotifications,
		notificationCount,
		onNotificationsClick: openNotifications,
		showProfile,
		userName,
		userRole,
		userAvatar,
		showSettings,
		onSettingsClick,
		showThemeToggler,
		theme: themeMode,
		onThemeToggle,
		onLogout: handleLogout
	};
	const renderFooter = (compact: boolean) => (
		<SidebarFooter
			{...footerProps}
			compact={compact}
			color={sidebarChromeFg}
			hoverColor={sidebarChromeHover}
		/>
	);
	const renderSearch = (mode: 'full' | 'expand' | 'popover') =>
		searchNode ? (
			<SidebarSearch
				search={searchNode}
				mode={mode}
				onExpand={() => {
					handleSidebarCollapsedChange(false);
					setFocusSearch(true);
				}}
				autoFocus={focusSearch}
				onAutoFocused={clearFocusSearch}
				color={sidebarChromeFg}
				hoverColor={sidebarChromeHover}
			/>
		) : undefined;

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

				{isMobile && (
					<MobileTopBar
						height={MOBILE_BAR_HEIGHT_PX}
						onMenuClick={
							showSidebar
								? () => setMobileSidebarOpen(true)
								: undefined
						}
						appName={appName}
						logo={headerLogo}
						onBrandClick={onBrandClick}
						background={resolvedSidebarHeaderBg}
						color={sidebarHeaderFg}
					/>
				)}

				{/* Desktop Sidebar — collapsible / rail-labeled variants (both
				    rendered by CollapsibleSidebar), full viewport height. */}
				{showSidebar && !isMobile && rendersCollapsibleComponent && (
					<Box
						component='aside'
						sx={{
							width: desktopSidebarWidthPx,
							minWidth: desktopSidebarWidthPx,
							flexShrink: 0,
							zIndex: 2,
							position: 'sticky',
							top: 0,
							alignSelf: 'flex-start',
							height: '100vh',
							// Flex column so the sidebar shrinks to fit siblings
							// (the alert card) instead of pushing them off-screen.
							display: 'flex',
							flexDirection: 'column',
							// Keep the strip behind any bottom sibling on-brand.
							bgcolor: useCollapsibleSidebar
								? resolvedSidebarSurface
								: undefined,
							transition: SIDEBAR_TRANSITION,
							...sidebarStyles
						}}
					>
						<CollapsibleSidebar
							mainLinks={sidebarLinks}
							secondaryLinks={secondarySidebarLinks}
							activePath={activePath}
							onLinkClick={onLinkClick}
							showHeaderBar={useCollapsibleSidebar}
							logo={headerLogo}
							title={appName}
							onBrandClick={onBrandClick}
							headerBackgroundColor={
								useCollapsibleSidebar
									? resolvedSidebarHeaderBg
									: undefined
							}
							headerForegroundColor={
								useCollapsibleSidebar
									? sidebarHeaderFg
									: undefined
							}
							activeAccentColor={resolvedSidebarAccent}
							groupAccentColor={groupAccentColor}
							activeForegroundColor={activeSidebarForegroundColor}
							foregroundColor={sidebarForegroundColor}
							surfaceBackgroundColor={resolvedSidebarSurface}
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
							expandedWidth={COLLAPSIBLE_EXPANDED_WIDTH_PX}
							collapsedWidth={
								useRailLabeledSidebar
									? RAIL_LABELED_WIDTH_PX
									: COLLAPSIBLE_COLLAPSED_WIDTH_PX
							}
							search={renderSearch(
								useRailLabeledSidebar
									? 'popover'
									: sidebarCollapsed
										? 'expand'
										: 'full'
							)}
							footer={renderFooter(
								useRailLabeledSidebar || sidebarCollapsed
							)}
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
							zIndex: 2,
							'& .MuiDrawer-paper': {
								width: desktopSidebarWidthPx,
								boxSizing: 'border-box',
								bgcolor: resolvedContentBg,
								borderRight: 'none'
							},
							...sidebarStyles
						}}
					>
						<Box
							sx={{
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								pt: 2,
								// Inset rail content from drawer edges (esp. left) so items do not sit flush
								px: 1.5,
								boxSizing: 'border-box'
							}}
						>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									mb: 1.5
								}}
							>
								<Brand
									logo={railLogo}
									appName={appName}
									onClick={onBrandClick}
									color={sidebarChromeFg}
									testId='sidebar-header-brand'
								/>
							</Box>
							{renderSearch('popover')}
							<Box
								sx={{
									flex: '1 1 auto',
									minHeight: 0,
									overflowY: 'auto',
									display: 'flex',
									flexDirection: 'column',
									mt: 1
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
								{alertProps?.show && (
									<CardAlert {...alertProps} />
								)}
							</Box>
							<Box sx={{ py: 1.5 }}>{renderFooter(true)}</Box>
						</Box>
					</Drawer>
				)}

				{/* Mobile Sidebar */}
				{showSidebar && isMobile && (
					<MobileSidebar
						open={mobileSidebarOpen}
						onClose={() => setMobileSidebarOpen(false)}
						mainLinks={sidebarLinks}
						secondaryLinks={secondarySidebarLinks}
						activePath={activePath}
						onLinkClick={onLinkClick}
						search={searchNode}
						footer={
							// The drawer sits on the theme paper, not the sidebar surface
							<SidebarFooter
								{...footerProps}
								compact={false}
								color='text.primary'
								hoverColor='action.hover'
							/>
						}
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
						width: desktopSidebarWidthPx
							? `calc(100% - ${desktopSidebarWidthPx}px)`
							: '100%',
						transition: SIDEBAR_TRANSITION,
						mt: isMobile ? `${MOBILE_BAR_HEIGHT_PX}px` : 0,
						backgroundColor: resolvedContentBg,
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
									// Sticks in view and fills the viewport minus the
									// main area's 24px padding above and below
									position: { xs: 'static', md: 'sticky' },
									top: { xs: 'auto', md: '24px' },
									alignSelf: 'flex-start',
									height: {
										xs: 'auto',
										md: 'calc(100vh - 48px)'
									},
									maxHeight: {
										xs: 'none',
										md: 'calc(100vh - 48px)'
									}
								}}
							>
								<GlobalChatSidebar />
							</Grid>
						)}
					</Grid>
				</Box>

				{showAssistant && (
					<AssistantButton
						onClick={onAssistantClick}
						active={assistantActive}
						busy={assistantBusy}
					/>
				)}

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
