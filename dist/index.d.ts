import { default as default_2 } from 'react';
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
