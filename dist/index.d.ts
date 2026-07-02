import { default as default_2 } from 'react';
import * as React_2 from 'react';
import { SxProps } from '@mui/material';
import { Theme } from '@mui/material';

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
    /** Always visible, in both states. */
    logo?: React_2.ReactNode;
    /** App title; shown only when expanded. */
    title?: string;
    /** Section header above the main links (e.g. "Environment"); expanded only. */
    sectionTitle?: string;
    /** Solid background of the active item (default '#01584f'). */
    activeAccentColor?: string;
    /** Light tint for a parent's child group and hover (default derived). */
    groupAccentColor?: string;
    /** Foreground on the active item; default auto-contrast from the accent. */
    activeForegroundColor?: string;
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
    appName?: string;
    pageName?: string;
    showHeader?: boolean;
    showSidebar?: boolean;
    /** When true on desktop (`md`+), rail shows `link.text` under each icon (drawer width is unchanged). */
    showSidebarRailTitles?: boolean;
    /**
     * Desktop sidebar layout. `'rail'` (default) is the fixed icon rail; `'collapsible'`
     * is a full-height panel that toggles between expanded (logo + title + labels) and a
     * collapsed icon rail, persisting its state to localStorage. Mobile is unaffected.
     */
    sidebarVariant?: 'rail' | 'collapsible';
    /** Brand logo shown in the navbar; defaults to the Lumora logo. */
    logo?: default_2.ReactNode;
    /**
     * @deprecated No longer rendered. The sidebar header (brand + section label)
     * was moved to the navbar; this prop is accepted but ignored.
     */
    sidebarSectionTitle?: string;
    /** Surface background of the collapsible sidebar (default '#ffffff'). */
    sidebarBackgroundColor?: string;
    /** Light accent tint for grouped sub-items and hover (collapsible sidebar). */
    groupAccentColor?: string;
    /** Foreground for active items; defaults to auto-contrast from `accentColor`. */
    activeSidebarForegroundColor?: string;
    enableRefreshToken?: boolean;
    activePath?: string;
    onLinkClick?: (path: string) => void;
    userName?: string;
    userEmail?: string;
    userAvatar?: string;
    onLogout: (error?: Error) => void | Promise<void>;
    onProfileClick?: () => void;
    onAccountClick?: () => void;
    onSettingsClick?: () => void;
    showSettings?: boolean;
    showNotifications?: boolean;
    notificationCount?: number;
    /** Content component for the notification drawer; receives onClose. When provided, navbar bell opens this drawer. */
    NotificationSidebarContent?: default_2.ComponentType<{
        onClose: () => void;
    }>;
    showSearchbar?: boolean;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    onSearchSubmit?: (value: string) => void;
    showProfile?: boolean;
    userRole?: string;
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
    headerStyles?: SxProps<Theme>;
    sidebarStyles?: SxProps<Theme>;
    contentStyles?: SxProps<Theme>;
    accentColor?: string;
    contentBackgroundColor?: string;
    navbarBackground?: string;
    navbarAccentColor?: string;
    theme?: 'dark' | 'light';
    showThemeToggler?: boolean;
    onThemeToggle?: () => void;
    apiBaseUrl: string;
    GlobalChatSidebar?: default_2.ComponentType;
    useChatSidebar?: () => {
        isOpen: boolean;
    };
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
    customNavbar?: default_2.ComponentType<any>;
    customNavbarProps?: Record<string, any>;
    redirectToLogin: () => void;
}

export declare type SidebarLink = {
    text: string;
    path?: string;
    icon: default_2.ReactNode;
    subitems?: SidebarSubLink[];
};

/** One level of children under a sidebar parent; no further nesting. */
export declare type SidebarSubLink = {
    text: string;
    path: string;
    icon?: default_2.ReactNode;
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
