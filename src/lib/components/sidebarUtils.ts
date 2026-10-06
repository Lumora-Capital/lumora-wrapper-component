/**
 * Shared, framework-free helpers for the sidebar components
 * (MenuContent rail/drawer and CollapsibleSidebar).
 */
import type * as React from 'react';
import type { SidebarLink, SidebarSubLink } from './LumoraWrapper';

/** Any node of the sidebar tree: a top-level link or a child at any depth. */
export type SidebarNode = SidebarLink | SidebarSubLink;

/** A node with children is a group; the rest are pages (or path-less labels). */
export const hasChildren = (node: SidebarNode): boolean =>
	Boolean(node.subitems?.length);

/**
 * A stable identity for a node, from the texts on its way down from the root
 * (`CRM/Marketing`). Open/closed state is keyed by it, so two sections that
 * share a label under different parents do not share a chevron.
 */
export const nodeKey = (parentKey: string, node: SidebarNode): string =>
	parentKey ? `${parentKey}/${node.text}` : node.text;

/**
 * A node is active when its own path is the current one or any descendant's
 * is — the tinted container follows the current page up through every level.
 */
export const isSidebarLinkActive = (
	link: SidebarNode,
	activePath?: string
): boolean => {
	if (!activePath) {
		return false;
	}
	if (link.path && activePath === link.path) {
		return true;
	}
	return (
		link.subitems?.some(s => isSidebarLinkActive(s, activePath)) ?? false
	);
};

/** The row itself is the current page — its own path, not a descendant's. */
export const isSubLinkActive = (sub: SidebarNode, activePath?: string) =>
	Boolean(activePath && sub.path === activePath);

/**
 * Every page under a group, in order, at any depth, each with the icon it
 * shows: its own, else the nearest ancestor's. The collapsed rail draws a
 * group as a stack of page icons and has no room for a second chevron, so a
 * section's pages are laid out flat beside their cousins.
 */
export const flattenLeaves = (
	subitems: SidebarSubLink[] | undefined,
	fallbackIcon: React.ReactNode
): Array<{ sub: SidebarSubLink; icon: React.ReactNode }> =>
	(subitems ?? []).flatMap(sub => {
		const icon = sub.icon ?? fallbackIcon;
		if (hasChildren(sub)) {
			return flattenLeaves(sub.subitems, icon);
		}
		return sub.path ? [{ sub, icon }] : [];
	});

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

/**
 * New-tab navigation used by the platform switcher's default behavior, so the
 * host app stays open while the other platform loads. `noopener,noreferrer`
 * keeps the new tab from reaching back into this window.
 * SSR-safe; kept as a module export so tests can spy on it (jsdom does not
 * implement navigation).
 */
export const openInNewTab = (url: string): void => {
	if (typeof window === 'undefined') {
		return;
	}
	window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Display label for a stored role: "SUPER_ADMIN" -> "SUPER ADMIN",
 * "admin" -> "ADMIN". Underscores become spaces and the whole label is in
 * capitals (owner, 2026-09-29), so the role reads the same under the user's
 * name, in the account menu and in the classic user menu. Display only — the
 * stored value is untouched.
 */
export const formatRole = (role: string): string =>
	role
		.replace(/_/g, ' ')
		.split(/\s+/)
		.filter(Boolean)
		.join(' ')
		.toUpperCase();
