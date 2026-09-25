import type { Breakpoint, SxProps, Theme } from '@mui/material';
import {
	Box,
	CircularProgress,
	CssBaseline,
	Drawer,
	Grid,
	Stack,
	SwipeableDrawer,
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
import ChatPopup from './ChatPopup';
import CollapsibleSidebar from './CollapsibleSidebar';
import MenuContent from './MenuContent';
import MobileBottomNav, {
	MOBILE_BOTTOM_NAV_HEIGHT_PX
} from './MobileBottomNav';
import MobileSearchSheet from './MobileSearchSheet';
import MobileTopBar from './MobileTopBar';
import NotificationBell from './NotificationBell';
import SidebarFooter, { type SidebarFooterProps } from './SidebarFooter';
import type { UserMenuItem } from './UserMenu';
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

/** Width of the drawer-mode links drawer (capped at 85% of the screen). */
const MOBILE_DRAWER_WIDTH_PX = 300;

/** Collapsible sidebar variant widths and persistence key. */
const COLLAPSIBLE_EXPANDED_WIDTH_PX = 288;
const COLLAPSIBLE_COLLAPSED_WIDTH_PX = 72;
const SIDEBAR_PERSIST_KEY = 'lumora:sidebar-collapsed';
const SIDEBAR_TRANSITION = 'width 200ms ease, left 200ms ease';

/** Floating Nexa button (52px) plus a 16px gap, kept clear by the chat popup. */
const FLOATING_ASSISTANT_CLEARANCE_PX = 68;

/** Content padding in theme spacing units: 16px on phones, 40px from `md`. */
const DEFAULT_CONTENT_PADDING = { xs: 2, md: 5 };

type SpacingValue = number | string;
export type ContentPadding =
	| SpacingValue
	| Partial<Record<Breakpoint, SpacingValue>>;

/** Mac shows ⌘, everything else Ctrl. */
const isApplePlatform = () =>
	typeof navigator !== 'undefined' &&
	/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

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

/** A quick action shown at the end of a sidebar row, e.g. "New request". */
export type SidebarLinkAction = {
	/** Accessible name and tooltip. */
	label: string;
	icon: React.ReactNode;
	onClick: () => void;
};

/** A top-level sidebar link. `path` is optional when it only groups `subitems`. */
export type SidebarLink = {
	text: string;
	path?: string;
	icon: React.ReactNode;
	subitems?: SidebarSubLink[];
	/**
	 * A button at the end of the row (links without `subitems`), for an action
	 * next to the page, like opening a request popup beside the requests list.
	 * Shown in the expanded sidebar and the mobile menu; the narrow rails have
	 * no room for it, so also offer it elsewhere (e.g. `userMenuItems`).
	 */
	action?: SidebarLinkAction;
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
	/**
	 * Phones (below `md`). `bottom-bar` (default): a bar pinned to the bottom
	 * with Menu (the links drawer), Search, Nexa and the user menu, so the main
	 * actions are one tap away; notifications sit at the top right. `drawer`: a hamburger in the
	 * top bar opening a drawer that holds everything.
	 */
	mobileNavigation?: 'bottom-bar' | 'drawer';
	/**
	 * Pages pinned in the mobile bottom bar between Menu and Nexa, e.g. the
	 * app's main list. One keeps the bar at an even five items with Nexa in
	 * the middle; at most two are shown. Each needs a `path`; it highlights
	 * from `activePath` and navigates through `onLinkClick`.
	 */
	mobileBottomBarLinks?: SidebarLink[];
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
	/**
	 * Wordmark and default-logo tint, when it should differ from the sidebar
	 * text (e.g. a teal CENTRA over dark-gray links).
	 */
	brandColor?: string;
	/**
	 * Padding around the page content: theme spacing units, a single CSS
	 * length, or per breakpoint. Defaults to 16px on phones and 40px from `md`. Pass `0`
	 * for pages that fill the whole content area. To take a single block (e.g.
	 * a page header) edge to edge while keeping the padding, wrap it in
	 * `FullBleedSection`; the value is also exposed as `--lumora-content-padding`.
	 */
	contentPadding?: ContentPadding;
	/** Extra entries in the user menu between Notifications and Settings, e.g. "What's New". */
	userMenuItems?: UserMenuItem[];
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
	// Nexa chat panel
	/** The chat UI, shown while `useChatSidebar().isOpen` is true. */
	GlobalChatSidebar?: React.ComponentType;
	/** Hook (called every render) reporting whether the chat is open. */
	useChatSidebar?: () => { isOpen: boolean };
	/**
	 * `floating` (default): the chat opens as a popup card over the page, so
	 * the content keeps its full width. `inline`: a column beside the content
	 * that narrows it (the previous behavior).
	 */
	chatPanelMode?: 'floating' | 'inline';
	/** Floating popup corner: `right` (default) or `left`, beside the sidebar. */
	chatPanelPosition?: 'left' | 'right';
	/** Floating popup width in px (default 420). Full screen on phones. */
	chatPanelWidth?: number;
	/** Called on Esc while the floating chat is open; usually closes it. */
	onChatClose?: () => void;
	// Assistant (chat) launcher
	/** Show the Nexa assistant launcher. */
	showAssistant?: boolean;
	/**
	 * `sidebar` (default): an "Ask Nexa" button under the brand (an icon on the
	 * collapsed and narrow rails). `floating`: a button in the bottom-right corner.
	 */
	assistantPlacement?: 'sidebar' | 'floating';
	/**
	 * Letter that opens Nexa with ⌘ (Mac) / Ctrl, shown as a hint on the
	 * button. Defaults to 'j'; `false` turns the shortcut off.
	 */
	assistantShortcut?: string | false;
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

/** Theme spacing units -> px, per breakpoint; CSS strings pass through. */
const resolveContentPadding = (padding: ContentPadding, theme: Theme) => {
	const toCss = (value: SpacingValue) =>
		typeof value === 'number' ? theme.spacing(value) : value;
	if (typeof padding === 'object') {
		return Object.fromEntries(
			Object.entries(padding).map(([bp, value]) => [bp, toCss(value)])
		);
	}
	return toCss(padding);
};

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
	mobileNavigation = 'bottom-bar',
	mobileBottomBarLinks,
	logo,
	onBrandClick,
	searchComponent,
	brandColor,
	contentPadding = DEFAULT_CONTENT_PADDING,
	userMenuItems,
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
	chatPanelMode = 'floating',
	chatPanelPosition = 'right',
	chatPanelWidth = 420,
	onChatClose,
	showAssistant = false,
	assistantPlacement = 'sidebar',
	assistantShortcut = 'j',
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
	// Hover / pressed tint for the sidebar chrome: the group tint when the
	// host sets one, else a wash of the idle color
	const sidebarChromeHover =
		groupAccentColor ?? deriveGroupTint(sidebarChromeFg);
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
	const resolvedBrandColor = brandColor ?? sidebarHeaderFg;
	const headerLogo = logo ?? renderMaskLogo(resolvedBrandColor);
	const railLogo = logo ?? renderMaskLogo(brandColor ?? sidebarChromeFg);
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
	const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
	const useBottomBar = isMobile && mobileNavigation === 'bottom-bar';
	// Room the bottom bar takes, including the phone's home-indicator inset
	const bottomBarSpace = `calc(${MOBILE_BOTTOM_NAV_HEIGHT_PX}px + env(safe-area-inset-bottom, 0px))`;
	const [notificationDrawerOpen, setNotificationDrawerOpen] = useState(false);
	const [isCheckingSession, setIsCheckingSession] = useState(true);
	const [hasSession, setHasSession] = useState(false);
	const chatSidebarHook = useChatSidebar?.();
	const isChatOpen = chatSidebarHook?.isOpen ?? false;
	const showInlineChat =
		chatPanelMode === 'inline' && isChatOpen && Boolean(GlobalChatSidebar);
	const onVerifyRef = useRef(onVerify);
	const hasLoadedUserDataRef = useRef(false);

	const axiosClient = useMemo(
		() => createAxiosClient(apiBaseUrl),
		[apiBaseUrl]
	);

	useEffect(() => {
		onVerifyRef.current = onVerify;
	}, [onVerify]);

	// ⌘/Ctrl + letter opens Nexa. Read the handler through a ref so the
	// listener is not re-bound on every render.
	const onAssistantClickRef = useRef(onAssistantClick);
	onAssistantClickRef.current = onAssistantClick;
	const shortcutKey =
		showAssistant && assistantShortcut
			? assistantShortcut.toLowerCase()
			: null;
	useEffect(() => {
		if (!shortcutKey) {
			return undefined;
		}
		const onKeyDown = (event: KeyboardEvent) => {
			if (
				(event.metaKey || event.ctrlKey) &&
				!event.altKey &&
				!event.shiftKey &&
				event.key.toLowerCase() === shortcutKey &&
				onAssistantClickRef.current
			) {
				event.preventDefault();
				onAssistantClickRef.current();
			}
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [shortcutKey]);

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
			setMobileSearchOpen(false);
			setNotificationDrawerOpen(true);
		});
	// Notifications + user; `compact` for the collapsed and narrow rails.
	const footerProps: Omit<
		SidebarFooterProps,
		'compact' | 'color' | 'hoverColor'
	> = {
		avatarColor: resolvedSidebarAccent,
		menuItems: userMenuItems,
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
	const shortcutKeys = shortcutKey
		? [isApplePlatform() ? '⌘' : 'Ctrl', shortcutKey.toUpperCase()]
		: undefined;
	const renderAssistant = (compact: boolean) =>
		showAssistant && assistantPlacement === 'sidebar' ? (
			<AssistantButton
				variant={compact ? 'sidebar-icon' : 'sidebar'}
				onClick={onAssistantClick}
				active={assistantActive}
				busy={assistantBusy}
				shortcutKeys={shortcutKeys}
				accentColor={sidebarChromeFg}
			/>
		) : null;
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
		) : null;
	// Under the brand: Ask Nexa, then the host's search
	const renderTopContent = (mode: 'full' | 'expand' | 'popover') => {
		const assistant = renderAssistant(mode !== 'full');
		const search = renderSearch(mode);
		return assistant || search ? (
			<Stack
				spacing={1.5}
				sx={{ alignItems: mode === 'full' ? 'stretch' : 'center' }}
			>
				{assistant}
				{search}
			</Stack>
		) : undefined;
	};
	const resolvedContentPadding = resolveContentPadding(
		contentPadding,
		muiNativeTheme
	);

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
						// With the bottom bar, the drawer opens from its Menu item
						onMenuClick={
							showSidebar && !useBottomBar
								? () => setMobileSidebarOpen(true)
								: undefined
						}
						appName={appName}
						logo={headerLogo}
						onBrandClick={onBrandClick}
						background={resolvedSidebarHeaderBg}
						color={sidebarHeaderFg}
						brandColor={resolvedBrandColor}
						endContent={
							showNotifications ? (
								<NotificationBell
									count={notificationCount}
									onClick={openNotifications}
									color={sidebarHeaderFg}
									hoverColor={sidebarChromeHover}
									tooltipPlacement='bottom'
									testId='mobile-notifications'
								/>
							) : undefined
						}
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
							borderRight: '1px solid',
							borderColor: 'divider',
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
							brandColor={resolvedBrandColor}
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
							topContent={renderTopContent(
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
									color={brandColor ?? sidebarChromeFg}
									testId='sidebar-header-brand'
								/>
							</Box>
							{renderTopContent('popover')}
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

				{/* Mobile: the links, in the same sidebar as desktop (expanded).
				    Bottom-bar mode: a sheet rising from the bottom, within thumb
				    reach. Drawer mode: a left drawer that also holds Nexa, search
				    and the user. */}
				{showSidebar && isMobile && (
					<SwipeableDrawer
						anchor={useBottomBar ? 'bottom' : 'left'}
						open={mobileSidebarOpen}
						onOpen={() => setMobileSidebarOpen(true)}
						onClose={() => setMobileSidebarOpen(false)}
						disableSwipeToOpen
						sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
						slotProps={{
							paper: {
								'aria-label': 'Navigation',
								sx: {
									bgcolor: resolvedSidebarSurface,
									backgroundImage: 'none',
									...(useBottomBar
										? {
												maxHeight: 'min(80vh, 640px)',
												borderTopLeftRadius: '16px',
												borderTopRightRadius: '16px',
												pb: 'env(safe-area-inset-bottom, 0px)'
											}
										: { maxWidth: '85vw' })
								}
							} as object
						}}
					>
						{useBottomBar && (
							// Grab handle: the sheet can be swiped down to close
							<Box
								aria-hidden='true'
								sx={{
									width: 36,
									height: 4,
									borderRadius: '2px',
									bgcolor: 'divider',
									mx: 'auto',
									mt: 1,
									mb: 0.5,
									flexShrink: 0
								}}
							/>
						)}
						<CollapsibleSidebar
							mainLinks={sidebarLinks}
							secondaryLinks={secondarySidebarLinks}
							activePath={activePath}
							onLinkClick={path => {
								onLinkClick?.(path);
								setMobileSidebarOpen(false);
							}}
							// A row action (e.g. a request popup) opens over the page
							onLinkAction={() => setMobileSidebarOpen(false)}
							collapsed={false}
							expandedWidth={
								useBottomBar ? '100%' : MOBILE_DRAWER_WIDTH_PX
							}
							activeAccentColor={resolvedSidebarAccent}
							groupAccentColor={groupAccentColor}
							activeForegroundColor={activeSidebarForegroundColor}
							foregroundColor={sidebarForegroundColor}
							surfaceBackgroundColor={resolvedSidebarSurface}
							topInsetPx={useBottomBar ? 8 : 0}
							topContent={
								useBottomBar
									? undefined
									: renderTopContent('full')
							}
							footer={
								useBottomBar ? undefined : renderFooter(false)
							}
						/>
						{alertProps?.show && <CardAlert {...alertProps} />}
					</SwipeableDrawer>
				)}

				{useBottomBar && searchNode && (
					<MobileSearchSheet
						open={mobileSearchOpen}
						onClose={() => setMobileSearchOpen(false)}
						search={searchNode}
					/>
				)}

				{useBottomBar && (
					<MobileBottomNav
						{...footerProps}
						pinnedLinks={mobileBottomBarLinks}
						activePath={activePath}
						onLinkClick={onLinkClick}
						onMenuClick={
							showSidebar
								? () => setMobileSidebarOpen(true)
								: undefined
						}
						menuOpen={mobileSidebarOpen}
						onSearchClick={
							searchNode
								? () => setMobileSearchOpen(true)
								: undefined
						}
						searchOpen={mobileSearchOpen}
						showAssistant={showAssistant}
						onAssistantClick={onAssistantClick}
						assistantActive={assistantActive}
						showProfile={showProfile}
						background={resolvedSidebarSurface}
						color={sidebarChromeFg}
						activeColor={resolvedSidebarAccent}
						activeBackground={sidebarChromeHover}
					/>
				)}

				{/* Main Content Area */}
				<Box
					component='main'
					sx={{
						flexGrow: 1,
						'--lumora-content-padding': resolvedContentPadding,
						// Where sticky page elements should pin (below the mobile bar)
						'--lumora-sticky-top': isMobile
							? `${MOBILE_BAR_HEIGHT_PX}px`
							: '0px',
						p: 'var(--lumora-content-padding)',
						width: desktopSidebarWidthPx
							? `calc(100% - ${desktopSidebarWidthPx}px)`
							: '100%',
						transition: SIDEBAR_TRANSITION,
						mt: isMobile ? `${MOBILE_BAR_HEIGHT_PX}px` : 0,
						// Keep the last content clear of the bottom bar
						...(useBottomBar && {
							pb: `calc(var(--lumora-content-padding) + ${bottomBarSpace})`
						}),
						backgroundColor: resolvedContentBg,
						...contentStyles
					}}
				>
					{chatPanelMode === 'inline' ? (
						<Grid container spacing={3}>
							<Grid
								size={{
									xs: 12,
									md: showInlineChat ? 8.5 : 12
								}}
								sx={{
									display: 'flex',
									flexDirection: 'column'
								}}
							>
								{children}
							</Grid>
							{showInlineChat && GlobalChatSidebar && (
								<Grid
									size={{ xs: 12, md: 3.5 }}
									sx={{
										display: 'flex',
										flexDirection: 'column',
										// Sticks in view and fills the viewport minus the
										// main area's 24px padding above and below
										position: {
											xs: 'static',
											md: 'sticky'
										},
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
					) : (
						children
					)}
				</Box>

				{chatPanelMode === 'floating' && GlobalChatSidebar && (
					<ChatPopup
						open={isChatOpen}
						position={chatPanelPosition}
						width={chatPanelWidth}
						sidebarWidthPx={desktopSidebarWidthPx}
						// Sits above the floating Nexa button when there is one
						bottomOffsetPx={
							showAssistant && assistantPlacement === 'floating'
								? FLOATING_ASSISTANT_CLEARANCE_PX
								: 0
						}
						fullScreen={isMobile}
						fullScreenBottom={useBottomBar ? bottomBarSpace : '0px'}
						onClose={onChatClose}
					>
						<GlobalChatSidebar />
					</ChatPopup>
				)}

				{showAssistant &&
					assistantPlacement === 'floating' &&
					!useBottomBar && (
						<AssistantButton
							variant='floating'
							shortcutKeys={shortcutKeys}
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
