/**
 * Authentication utility functions with comprehensive error handling
 * Handles token management, validation, and error recovery
 * Centralized location for all user/session checks
 */

/**
 * Custom error class for authentication-related errors
 */
export class AuthError extends Error {
	code: string;
	originalError: Error | null;
	timestamp: string;

	constructor(
		message: string,
		code: string,
		originalError: Error | null = null
	) {
		super(message);
		this.name = 'AuthError';
		this.code = code;
		this.originalError = originalError;
		this.timestamp = new Date().toISOString();
	}
}

/**
 * Authentication error codes
 */
export const AUTH_ERROR_CODES = {
	STORAGE_ACCESS_DENIED: 'STORAGE_ACCESS_DENIED',
	TOKEN_NOT_FOUND: 'TOKEN_NOT_FOUND',
	TOKEN_INVALID: 'TOKEN_INVALID',
	TOKEN_EXPIRED: 'TOKEN_EXPIRED',
	LOGOUT_FAILED: 'LOGOUT_FAILED',
	UNKNOWN_ERROR: 'UNKNOWN_ERROR'
} as const;

/**
 * Standardized localStorage keys
 */
const STORAGE_KEYS = {
	ACCESS_TOKEN: 'lumoraAccessToken',
	REFRESH_TOKEN: 'lumoraRefreshToken',
	USER: 'lumoraUser'
} as const;

/**
 * Legacy localStorage keys (for migration)
 */
const LEGACY_STORAGE_KEYS = {
	ACCESS_TOKEN: 'accessToken',
	REFRESH_TOKEN: 'refreshToken',
	USER: 'user'
} as const;

/**
 * Migrate old localStorage keys to new standardized keys
 * This ensures backward compatibility during transition
 */
const migrateLegacyKeys = (): void => {
	if (typeof window === 'undefined' || !window.localStorage) {
		return;
	}

	try {
		// Check if legacy keys exist and migrate them
		const legacyAccessToken = localStorage.getItem(
			LEGACY_STORAGE_KEYS.ACCESS_TOKEN
		);
		const legacyRefreshToken = localStorage.getItem(
			LEGACY_STORAGE_KEYS.REFRESH_TOKEN
		);
		const legacyUser = localStorage.getItem(LEGACY_STORAGE_KEYS.USER);

		if (
			legacyAccessToken &&
			!localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)
		) {
			localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, legacyAccessToken);
		}

		if (
			legacyRefreshToken &&
			!localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)
		) {
			localStorage.setItem(
				STORAGE_KEYS.REFRESH_TOKEN,
				legacyRefreshToken
			);
		}

		if (legacyUser && !localStorage.getItem(STORAGE_KEYS.USER)) {
			localStorage.setItem(STORAGE_KEYS.USER, legacyUser);
		}

		// Clear legacy keys after migration
		if (legacyAccessToken || legacyRefreshToken || legacyUser) {
			localStorage.removeItem(LEGACY_STORAGE_KEYS.ACCESS_TOKEN);
			localStorage.removeItem(LEGACY_STORAGE_KEYS.REFRESH_TOKEN);
			localStorage.removeItem(LEGACY_STORAGE_KEYS.USER);
		}
	} catch (error) {
		console.warn('Failed to migrate legacy localStorage keys:', error);
	}
};

/**
 * Safely access localStorage with error handling
 * @param key - The localStorage key to access
 * @returns The value from localStorage or null if error
 */
const safeGetItem = (key: string): string | null => {
	try {
		if (typeof window === 'undefined') {
			console.warn('localStorage access attempted on server side');
			return null;
		}

		if (!window.localStorage) {
			throw new AuthError(
				'localStorage is not available',
				AUTH_ERROR_CODES.STORAGE_ACCESS_DENIED
			);
		}

		return window.localStorage.getItem(key);
	} catch (error) {
		// Check if it's a QuotaExceededError
		if ((error as Error).name === 'QuotaExceededError') {
			console.error('Storage quota exceeded');
			throw new AuthError(
				'Storage quota exceeded. Please clear browser data.',
				AUTH_ERROR_CODES.STORAGE_ACCESS_DENIED,
				error as Error
			);
		}

		// Check if it's a SecurityError (private browsing, etc.)
		if ((error as Error).name === 'SecurityError') {
			console.error(
				'localStorage access denied (private browsing or security settings)'
			);
			throw new AuthError(
				'Access to localStorage is denied. Please check browser settings.',
				AUTH_ERROR_CODES.STORAGE_ACCESS_DENIED,
				error as Error
			);
		}

		// Log other unexpected storage errors
		console.error(
			`Unexpected error accessing localStorage:`,
			(error as Error).name
		);
		throw new AuthError(
			'Failed to access storage',
			AUTH_ERROR_CODES.STORAGE_ACCESS_DENIED,
			error as Error
		);
	}
};

/**
 * Safely set item in localStorage with error handling
 * @param key - The localStorage key
 * @param value - The value to store
 * @returns True if successful, false otherwise
 */
const safeSetItem = (key: string, value: string): boolean => {
	try {
		if (typeof window === 'undefined') {
			console.warn('localStorage write attempted on server side');
			return false;
		}

		if (!window.localStorage) {
			throw new AuthError(
				'localStorage is not available',
				AUTH_ERROR_CODES.STORAGE_ACCESS_DENIED
			);
		}

		window.localStorage.setItem(key, value);
		return true;
	} catch (error) {
		if ((error as Error).name === 'QuotaExceededError') {
			console.error('Storage quota exceeded');
			throw new AuthError(
				'Storage quota exceeded. Please clear browser data.',
				AUTH_ERROR_CODES.STORAGE_ACCESS_DENIED,
				error as Error
			);
		}

		if ((error as Error).name === 'SecurityError') {
			console.error(
				'localStorage write denied (private browsing or security settings)'
			);
			throw new AuthError(
				'Access to localStorage is denied. Please check browser settings.',
				AUTH_ERROR_CODES.STORAGE_ACCESS_DENIED,
				error as Error
			);
		}

		console.error(
			'Unexpected error writing to localStorage:',
			(error as Error).name
		);
		throw new AuthError(
			'Failed to write to storage',
			AUTH_ERROR_CODES.STORAGE_ACCESS_DENIED,
			error as Error
		);
	}
};

/**
 * Safely remove item from localStorage with error handling
 * @param key - The localStorage key to remove
 * @returns True if successful, false otherwise
 */
const safeRemoveItem = (key: string): boolean => {
	try {
		if (typeof window === 'undefined') {
			console.warn('localStorage removal attempted on server side');
			return false;
		}

		if (!window.localStorage) {
			console.warn('localStorage is not available');
			return false;
		}

		window.localStorage.removeItem(key);
		return true;
	} catch (error) {
		// Silently fail for remove operations - not critical
		if ((error as Error).name !== 'SecurityError') {
			console.warn(`Could not remove localStorage key "${key}"`);
		}
		return false;
	}
};

/**
 * User data interface
 */
export interface UserData {
	name?: string;
	email?: string;
	profilePicture?: string;
	role?: string;
	[key: string]: any;
}

/**
 * Authentication tokens interface
 */
export interface AuthTokens {
	accessToken: string | null;
	refreshToken: string | null;
	user: UserData | null;
}

/**
 * Authentication result interface
 */
export interface AuthResult {
	isAuthenticated: boolean;
	error: AuthError | null;
}

/**
 * Storage result interface
 */
export interface StorageResult {
	success: boolean;
	error: AuthError | null;
}

/**
 * User result interface
 */
export interface UserResult {
	user: UserData | null;
	error: AuthError | null;
}

/**
 * Get authentication tokens from localStorage
 * Automatically migrates legacy keys if found
 * @returns Authentication data with standardized keys
 * @throws {AuthError} If storage access fails
 */
export const getAuthTokens = (): AuthTokens => {
	try {
		// Migrate legacy keys on first access
		migrateLegacyKeys();

		const accessToken = safeGetItem(STORAGE_KEYS.ACCESS_TOKEN);
		const refreshToken = safeGetItem(STORAGE_KEYS.REFRESH_TOKEN);
		const userStr = safeGetItem(STORAGE_KEYS.USER);

		let user: UserData | null = null;
		if (userStr) {
			try {
				user = JSON.parse(userStr) as UserData;
			} catch (parseError) {
				// Only log if there's actual data that failed to parse
				// Don't log for empty/null values which is normal on first visit
				if (userStr && userStr !== 'null' && userStr !== 'undefined') {
					console.warn(
						'Invalid user data in localStorage, clearing:',
						userStr.substring(0, 50)
					);
				}
				// Clear invalid user data
				safeRemoveItem(STORAGE_KEYS.USER);
			}
		}

		return {
			accessToken,
			refreshToken,
			user
		};
	} catch (error) {
		if (error instanceof AuthError) {
			throw error;
		}
		throw new AuthError(
			'Failed to retrieve authentication tokens',
			AUTH_ERROR_CODES.UNKNOWN_ERROR,
			error as Error
		);
	}
};

/**
 * Check if user is authenticated
 * @returns Authentication status
 */
export const isAuthenticated = (): AuthResult => {
	try {
		const { accessToken, refreshToken } = getAuthTokens();

		// User is considered authenticated if they have at least one valid token
		const authenticated = !!(accessToken || refreshToken);

		if (!authenticated) {
			return {
				isAuthenticated: false,
				error: new AuthError(
					'No authentication tokens found',
					AUTH_ERROR_CODES.TOKEN_NOT_FOUND
				)
			};
		}

		return {
			isAuthenticated: true,
			error: null
		};
	} catch (error) {
		console.error('Authentication check failed:', error);
		return {
			isAuthenticated: false,
			error:
				error instanceof AuthError
					? error
					: new AuthError(
							'Authentication check failed',
							AUTH_ERROR_CODES.UNKNOWN_ERROR,
							error as Error
						)
		};
	}
};

/**
 * Store authentication tokens in localStorage
 * @param accessToken - The access token
 * @param refreshToken - The refresh token
 * @param user - User data object
 * @returns Result of storage operation
 */
export const storeAuthTokens = (
	accessToken: string | null,
	refreshToken: string | null,
	user: UserData | null = null
): StorageResult => {
	try {
		if (!accessToken && !refreshToken) {
			throw new AuthError(
				'At least one token must be provided',
				AUTH_ERROR_CODES.TOKEN_INVALID
			);
		}

		if (accessToken) {
			safeSetItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
		}

		if (refreshToken) {
			safeSetItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
		}

		if (user) {
			safeSetItem(STORAGE_KEYS.USER, JSON.stringify(user));
		}

		return {
			success: true,
			error: null
		};
	} catch (error) {
		console.error('Failed to store authentication tokens:', error);
		return {
			success: false,
			error:
				error instanceof AuthError
					? error
					: new AuthError(
							'Failed to store tokens',
							AUTH_ERROR_CODES.UNKNOWN_ERROR,
							error as Error
						)
		};
	}
};

/**
 * Clear all authentication data from localStorage
 * Clears both standardized and legacy keys for complete cleanup
 * @returns Result of clear operation
 */
export const clearAuthTokens = (): StorageResult => {
	try {
		// Clear standardized keys
		const tokensToRemove = [
			STORAGE_KEYS.ACCESS_TOKEN,
			STORAGE_KEYS.REFRESH_TOKEN,
			STORAGE_KEYS.USER,
			// Also clear legacy keys for complete cleanup
			LEGACY_STORAGE_KEYS.ACCESS_TOKEN,
			LEGACY_STORAGE_KEYS.REFRESH_TOKEN,
			LEGACY_STORAGE_KEYS.USER
		];
		const results = tokensToRemove.map(token => safeRemoveItem(token));

		// Check if all removals were successful
		const allSuccessful = results.every(result => result);

		if (!allSuccessful) {
			console.warn('Some tokens could not be removed from localStorage');
		}

		return {
			success: true,
			error: null
		};
	} catch (error) {
		console.error('Failed to clear authentication tokens:', error);
		return {
			success: false,
			error:
				error instanceof AuthError
					? error
					: new AuthError(
							'Failed to clear tokens',
							AUTH_ERROR_CODES.LOGOUT_FAILED,
							error as Error
						)
		};
	}
};

/**
 * Get user data from localStorage
 * @returns User data or error
 */
export const getCurrentUser = (): UserResult => {
	try {
		const { user } = getAuthTokens();
		return {
			user,
			error: null
		};
	} catch (error) {
		console.error('Failed to get current user:', error);
		return {
			user: null,
			error:
				error instanceof AuthError
					? error
					: new AuthError(
							'Failed to retrieve user data',
							AUTH_ERROR_CODES.UNKNOWN_ERROR,
							error as Error
						)
		};
	}
};

/**
 * Handle authentication errors with user-friendly messages
 * @param error - The error to handle
 * @returns User-friendly error message
 */
export const getAuthErrorMessage = (error: Error | AuthError): string => {
	if (!(error instanceof AuthError)) {
		return 'An unexpected error occurred. Please try again.';
	}

	switch (error.code) {
		case AUTH_ERROR_CODES.STORAGE_ACCESS_DENIED:
			return 'Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.';

		case AUTH_ERROR_CODES.TOKEN_NOT_FOUND:
			return 'You are not logged in. Please sign in to continue.';

		case AUTH_ERROR_CODES.TOKEN_INVALID:
			return 'Your session is invalid. Please sign in again.';

		case AUTH_ERROR_CODES.TOKEN_EXPIRED:
			return 'Your session has expired. Please sign in again.';

		case AUTH_ERROR_CODES.LOGOUT_FAILED:
			return 'Failed to log out properly. Please clear your browser cache and try again.';

		case AUTH_ERROR_CODES.UNKNOWN_ERROR:
		default:
			return 'An unexpected error occurred. Please try again or contact support if the problem persists.';
	}
};

/**
 * Log authentication errors for debugging
 * @param error - The error to log
 * @param context - Context where the error occurred
 */
export const logAuthError = (
	error: Error | AuthError,
	context: string = 'Unknown'
): void => {
	const errorDetails: {
		context: string;
		message: string;
		code: string;
		timestamp: string;
		stack?: string;
		originalError?: {
			name: string;
			message: string;
		};
	} = {
		context,
		message: error.message,
		code: error instanceof AuthError ? error.code : 'UNKNOWN',
		timestamp:
			error instanceof AuthError
				? error.timestamp
				: new Date().toISOString(),
		stack: error.stack
	};

	if (error instanceof AuthError && error.originalError) {
		errorDetails.originalError = {
			name: error.originalError.name,
			message: error.originalError.message
		};
	}

	// Use console.warn instead of console.error to avoid triggering Next.js error overlay
	// Authentication errors are expected scenarios and shouldn't show as console errors
	console.warn('[Auth Error]', errorDetails);

	// In production, you could send this to an error tracking service
	// Example: sendToErrorTracking(errorDetails);
};
