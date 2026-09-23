import { default as default_2 } from 'react';
import { PaletteMode } from '@mui/material/styles';
import * as React_2 from 'react';
import { SxProps } from '@mui/material';
import { Theme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

/**
 * Authentication error codes
 */
export declare const AUTH_ERROR_CODES: {
    readonly STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED";
    readonly TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND";
    readonly TOKEN_INVALID: "TOKEN_INVALID";
    readonly TOKEN_EXPIRED: "TOKEN_EXPIRED";
    readonly LOGOUT_FAILED: "LOGOUT_FAILED";
    readonly UNKNOWN_ERROR: "UNKNOWN_ERROR";
};

/**
 * Authentication utility functions with comprehensive error handling
 * Handles token management, validation, and error recovery
 * Centralized location for all user/session checks
 */
/**
 * Custom error class for authentication-related errors
 */
export declare class AuthError extends Error {
    code: string;
    originalError: Error | null;
    timestamp: string;
    constructor(message: string, code: string, originalError?: Error | null);
}

/**
 * Authentication result interface
 */
export declare interface AuthResult {
    isAuthenticated: boolean;
    error: AuthError | null;
}

/**
 * Authentication tokens interface
 */
export declare interface AuthTokens {
    accessToken: string | null;
    refreshToken: string | null;
    user: UserData | null;
}

/**
 * Clear all authentication data from localStorage
 * Clears both standardized and legacy keys for complete cleanup
 * @returns Result of clear operation
 */
export declare const clearAuthTokens: () => StorageResult;

export declare const CollapsibleSidebar: React_2.FC<CollapsibleSidebarProps>;

export declare interface CollapsibleSidebarProps {
    mainLinks: SidebarLink[];
    /** Bottom group; rendered after a divider and pinned to the bottom. */
    secondaryLinks?: SidebarLink[];
    activePath?: string;
    onLinkClick?: (path: string) => void;
    /** Brand logo, rendered in the header bar while expanded. */
    logo?: React_2.ReactNode;
    /** App title wordmark (uppercased); shown in the header bar while expanded. */
    title?: string;
    /** Makes the header-bar brand (title + logo) a button. */
    onBrandClick?: () => void;
    /** @deprecated Never rendered — the section header row was dropped. */
    sectionTitle?: string;
    /**
     * Render the 60px in-sidebar header bar (collapse hamburger + brand). Used
     * by the full-height collapsible layout; off by default so the labeled rail
     * and existing consumers are unaffected. When on, `topInsetPx` is ignored —
     * the header itself occupies the top of the surface.
     */
    showHeaderBar?: boolean;
    /** Header bar background; defaults to the sidebar surface color. */
    headerBackgroundColor?: string;
    /**
     * Header bar foreground (hamburger + wordmark + logo). Defaults to the idle
     * accent-on-surface tint (see `foregroundColor`) when the header shares the
     * sidebar surface, and to auto-contrast from `headerBackgroundColor` when
     * one is given. Auto-contrast only parses hex colors — set this explicitly
     * when the header background is a non-hex value.
     */
    headerForegroundColor?: string;
    /** Solid background of the highlighted item — shared by the active item and
     * any item on hover (default '#01584f'). */
    activeAccentColor?: string;
    /** Light tint for a parent's child group (default derived). */
    groupAccentColor?: string;
    /** Foreground of the highlighted item (active or hovered); default
     * auto-contrast from the accent. */
    activeForegroundColor?: string;
    /** Idle (inactive) text/icon color on the surface. Defaults to the accent in
     * light mode and the theme text color on a dark surface. Set this to tint
     * idle labels independently of the active highlight (e.g. a light teal on a
     * dark rail whose active item is a darker solid green). */
    foregroundColor?: string;
    /** Sidebar surface background (default '#ffffff'). */
    surfaceBackgroundColor?: string;
    /** Controlled collapsed state. When provided, the owner also persists it. */
    collapsed?: boolean;
    /** Uncontrolled initial state used only when nothing is persisted. */
    defaultCollapsed?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
    /** localStorage key for the uncontrolled/persisted state. */
    persistKey?: string;
    expandedWidth?: number;
    collapsedWidth?: number;
    /**
     * When collapsed, show `link.text` as a caption beneath each icon instead of
     * icon-only + tooltip. Used by the non-collapsible `rail-labeled` layout.
     */
    showLabels?: boolean;
    /**
     * Top padding (px) above the links when there is no header bar, e.g. to
     * clear a host app's own fixed top bar.
     */
    topInsetPx?: number;
    /**
     * Rendered between the brand and the links (e.g. a global search). The
     * owner decides what to show for the collapsed state.
     */
    search?: React_2.ReactNode;
    /** Pinned below the links, outside the scroll area (e.g. notifications + user). */
    footer?: React_2.ReactNode;
}

/**
 * Handle authentication errors with user-friendly messages
 * @param error - The error to handle
 * @returns User-friendly error message
 */
export declare const getAuthErrorMessage: (error: Error | AuthError) => string;

/**
 * Get authentication tokens from localStorage
 * Automatically migrates legacy keys if found
 * @returns Authentication data with standardized keys
 * @throws {AuthError} If storage access fails
 */
export declare const getAuthTokens: () => AuthTokens;

/**
 * Get user data from localStorage
 * @returns User data or error
 */
export declare const getCurrentUser: () => UserResult;

/**
 * Lumora design tokens for a light or dark theme. LumoraWrapper builds its
 * own theme from these; host apps can reuse them for a matching outer theme:
 * `createTheme(getDesignTokens(mode))`.
 */
export declare const getDesignTokens: (mode: PaletteMode) => ThemeOptions;

/**
 * Check if user is authenticated
 * @returns Authentication status
 */
export declare const isAuthenticated: () => AuthResult;

/**
 * Log authentication errors for debugging
 * @param error - The error to log
 * @param context - Context where the error occurred
 */
export declare const logAuthError: (error: Error | AuthError, context?: string) => void;

/**
 * LumoraWrapper component provides a consistent layout structure for authenticated pages
 * and handles proactive token refresh to prevent session expiry during active use.
 */
declare const LumoraWrapper: default_2.FC<LumoraWrapperProps>;
export { LumoraWrapper }
export default LumoraWrapper;

export declare interface LumoraWrapperProps {
    children: default_2.ReactNode;
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
    logo?: default_2.ReactNode;
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
    searchComponent?: default_2.ReactNode;
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
    /** Show the user row; clicking it opens settings, dark mode and logout. */
    showProfile?: boolean;
    userName?: string;
    userRole?: string;
    userAvatar?: string;
    onLogout: (error?: Error) => void | Promise<void>;
    /** Show the Settings entry in the user menu. */
    showSettings?: boolean;
    onSettingsClick?: () => void;
    showNotifications?: boolean;
    notificationCount?: number;
    /** Content component for the notification drawer; receives onClose. When provided, the notifications row opens this drawer. */
    NotificationSidebarContent?: default_2.ComponentType<{
        onClose: () => void;
    }>;
    onVerify?: (userData: {
        name: string;
        email: string;
        profilePicture: string;
        role: string;
    }) => void;
    alertProps?: {
        title?: string;
        message?: string;
        buttonText?: string;
        onButtonClick?: () => void;
        show?: boolean;
    };
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
    theme?: 'dark' | 'light';
    /** Show the Dark mode switch in the user menu. */
    showThemeToggler?: boolean;
    onThemeToggle?: () => void;
    apiBaseUrl: string;
    GlobalChatSidebar?: default_2.ComponentType;
    useChatSidebar?: () => {
        isOpen: boolean;
    };
    /** Show the floating Nexa assistant button (bottom-right). */
    showAssistant?: boolean;
    /** Click handler for the assistant button; typically toggles the chat sidebar. */
    onAssistantClick?: () => void;
    /** Highlight the assistant button while the chat is open. */
    assistantActive?: boolean;
    /** Animate the assistant button's ring/beam — only while a chat is ongoing. */
    assistantBusy?: boolean;
    redirectToLogin: () => void;
    /**
     * @deprecated Use `searchComponent`. Still rendered in the search slot
     * (with `customNavbarProps`) when `searchComponent` is not set.
     */
    customNavbar?: default_2.ComponentType<any>;
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

/** A top-level sidebar link. `path` is optional when it only groups `subitems`. */
export declare type SidebarLink = {
    text: string;
    path?: string;
    icon: default_2.ReactNode;
    subitems?: SidebarSubLink[];
};

/**
 * A child of a sidebar parent. It is a page (`path`), or — with `subitems`
 * of its own — a section grouping pages, which gives an area a third level
 * (`CRM › Marketing › Campaigns`). A section without a path only expands and
 * collapses. Every variant renders the nesting recursively, but the visual
 * design assumes three levels: deeper trees indent further and nothing more.
 */
export declare type SidebarSubLink = {
    text: string;
    path?: string;
    icon?: default_2.ReactNode;
    subitems?: SidebarSubLink[];
};

/**
 * Storage result interface
 */
export declare interface StorageResult {
    success: boolean;
    error: AuthError | null;
}

/**
 * Store authentication tokens in localStorage
 * @param accessToken - The access token
 * @param refreshToken - The refresh token
 * @param user - User data object
 * @returns Result of storage operation
 */
export declare const storeAuthTokens: (accessToken: string | null, refreshToken: string | null, user?: UserData | null) => StorageResult;

/**
 * User data interface
 */
export declare interface UserData {
    name?: string;
    email?: string;
    profilePicture?: string;
    role?: string;
    [key: string]: any;
}

/**
 * User result interface
 */
export declare interface UserResult {
    user: UserData | null;
    error: AuthError | null;
}

export { }
