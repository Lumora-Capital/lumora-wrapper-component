/**
 * Shared, framework-free helpers for the sidebar components
 * (MenuContent rail/drawer and CollapsibleSidebar).
 */
import type { SidebarLink, SidebarSubLink } from './LumoraWrapper';

/** Parent is active if its own path or any direct subitem path matches. */
export const isSidebarLinkActive = (link: SidebarLink, activePath?: string) => {
	if (!activePath) {
		return false;
	}
	if (link.path && activePath === link.path) {
		return true;
	}
	return link.subitems?.some(s => s.path === activePath) ?? false;
};

export const isSubLinkActive = (sub: SidebarSubLink, activePath?: string) =>
	Boolean(activePath && sub.path === activePath);

/**
 * Pick a readable foreground (white or near-black) for text/icons sitting on
 * top of `color`, using the WCAG relative-luminance formula. Falls back to
 * white when the color cannot be parsed (e.g. a named or gradient value).
 */
export const getContrastText = (color: string): string => {
	const rgb = parseColorToRgb(color);
	if (!rgb) {
		return '#ffffff';
	}
	const [r, g, b] = rgb.map(channel => {
		const c = channel / 255;
		return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
	});
	const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
	return luminance > 0.5 ? '#0b1f1c' : '#ffffff';
};

/**
 * Default light tint for grouped sub-items / hover, derived from the active
 * accent as a low-alpha overlay so it reads as a faint wash of the accent over
 * whatever surface sits behind it. Falls back to a soft green when unparseable.
 */
export const deriveGroupTint = (color: string): string => {
	const rgb = parseColorToRgb(color);
	if (!rgb) {
		return 'rgba(1, 88, 79, 0.12)';
	}
	const [r, g, b] = rgb;
	return `rgba(${r}, ${g}, ${b}, 0.14)`;
};

/** Parse `#rgb` / `#rrggbb` (with or without leading `#`) into [r, g, b]. */
const parseColorToRgb = (color: string): [number, number, number] | null => {
	let hex = color.trim().replace(/^#/, '');
	if (hex.length === 3) {
		hex = hex
			.split('')
			.map(ch => ch + ch)
			.join('');
	}
	if (hex.length !== 6 || /[^0-9a-fA-F]/.test(hex)) {
		return null;
	}
	const value = parseInt(hex, 16);
	return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
};

const isBrowser = () =>
	typeof window !== 'undefined' && Boolean(window.localStorage);

/**
 * Read a persisted collapsed flag. Returns `null` when unset or unavailable so
 * callers can fall back to their own default.
 */
export const readStoredCollapsed = (key: string): boolean | null => {
	if (!isBrowser()) {
		return null;
	}
	try {
		const raw = window.localStorage.getItem(key);
		if (raw === null) {
			return null;
		}
		return raw === 'true';
	} catch (error) {
		console.warn('Failed to read sidebar collapsed state:', error);
		return null;
	}
};

/** Persist the collapsed flag; swallows storage errors (quota, privacy mode). */
export const writeStoredCollapsed = (key: string, value: boolean): void => {
	if (!isBrowser()) {
		return;
	}
	try {
		window.localStorage.setItem(key, value ? 'true' : 'false');
	} catch (error) {
		console.warn('Failed to persist sidebar collapsed state:', error);
	}
};
