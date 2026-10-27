import type { Breakpoint, Theme } from '@mui/material';
import { GLASS_RADIUS_PX } from './liquidGlass';

/** Fixed desktop permanent rail width — same with or without `showSidebarRailTitles` so main layout does not shift */
export const DESKTOP_RAIL_WIDTH_PX = 100;

/** Fixed width of the non-collapsible `rail-labeled` variant. Narrow rail with
 * labels stacked under the icons (captions/icons are sized down to fit 80px). */
export const RAIL_LABELED_WIDTH_PX = 80;

/** Height of the mobile-only top bar; the content is offset by it on mobile. */
export const MOBILE_BAR_HEIGHT_PX = 56;

/** Collapsible / panel sidebar rail width. */
export const COLLAPSIBLE_COLLAPSED_WIDTH_PX = 72;
/** With flyout submenus the rail is a floating glass capsule, held this far
 * off the window's edges; the page keeps the capsule plus both gutters. */
export const FLOATING_RAIL_WIDTH_PX = 64;
/** Icon buttons on the floating rail: the 64px capsule less a 10px gutter on
 * each edge (8px of it the scrollbar's). */
export const FLOATING_RAIL_ITEM_PX = 44;
/** Glyphs inside those buttons: MUI's own 24px. */
export const FLOATING_RAIL_ICON_PX = 24;
/** One gap between every pair of items down the floating rail — brand, top
 * content, links, bottom group, divider and footer alike. */
export const FLOATING_RAIL_GAP_PX = 4;
export const FLOATING_RAIL_GUTTER_PX = 8;
/** How far the rail's button under the pointer swells (the flyout's tiles
 * go further: there is room around them). */
export const RAIL_MAX_SCALE = 1.4;
export const FLOATING_RAIL_RADIUS_PX = GLASS_RADIUS_PX;

/** Content padding: 16px (2 theme spacing units) on phones, 18px from `md`. */
export const DEFAULT_CONTENT_PADDING = { xs: 2, md: '18px' };

export type SidebarVariant = 'rail' | 'collapsible' | 'rail-labeled' | 'panel';
export type SidebarSubmenu = 'expand' | 'flyout';

type SpacingValue = number | string;
export type ContentPadding =
	| SpacingValue
	| Partial<Record<Breakpoint, SpacingValue>>;

/** Theme spacing units -> px, per breakpoint; CSS strings pass through. */
export const resolveContentPadding = (
	padding: ContentPadding,
	theme: Theme
): string | Record<string, string> => {
	const toCss = (value: SpacingValue) =>
		typeof value === 'number' ? theme.spacing(value) : value;
	if (typeof padding === 'object') {
		return Object.fromEntries(
			Object.entries(padding).map(([bp, value]) => [bp, toCss(value)])
		);
	}
	return toCss(padding);
};

/** Flyout submenus only apply to the sidebars that have a rail. */
export const usesFlyoutSubmenu = (
	sidebarSubmenu: SidebarSubmenu,
	sidebarVariant: SidebarVariant
) =>
	sidebarSubmenu === 'flyout' &&
	(sidebarVariant === 'collapsible' || sidebarVariant === 'panel');

/** Whether the floating glass rail hides at the window's edge (`sidebarAutoHide`). */
export const usesAutoHideRail = (
	sidebarAutoHide: boolean,
	sidebarSubmenu: SidebarSubmenu,
	sidebarVariant: SidebarVariant
) => sidebarAutoHide && usesFlyoutSubmenu(sidebarSubmenu, sidebarVariant);

/** Width the desktop sidebar takes from the page; 0 on phones, without one,
 * or when the rail auto-hides over the page. */
export const getDesktopSidebarWidthPx = ({
	showSidebar,
	isMobile,
	sidebarVariant,
	sidebarSubmenu,
	sidebarAutoHide = false
}: {
	showSidebar: boolean;
	isMobile: boolean;
	sidebarVariant: SidebarVariant;
	sidebarSubmenu: SidebarSubmenu;
	sidebarAutoHide?: boolean;
}) => {
	if (!showSidebar || isMobile) {
		return 0;
	}
	if (sidebarVariant === 'rail-labeled') {
		return RAIL_LABELED_WIDTH_PX;
	}
	if (usesFlyoutSubmenu(sidebarSubmenu, sidebarVariant)) {
		return sidebarAutoHide
			? 0
			: FLOATING_RAIL_WIDTH_PX + 2 * FLOATING_RAIL_GUTTER_PX;
	}
	if (sidebarVariant === 'collapsible' || sidebarVariant === 'panel') {
		return COLLAPSIBLE_COLLAPSED_WIDTH_PX;
	}
	return DESKTOP_RAIL_WIDTH_PX;
};

/** Sidebar surface — mirrors CollapsibleSidebar's own default (theme
 * background.paper in dark mode, white in light). */
export const resolveSidebarSurface = (
	color: string | undefined,
	isDark: boolean
) => color ?? (isDark ? 'hsl(220, 30%, 7%)' : '#ffffff');

export const resolveContentBackground = (
	color: string | undefined,
	isDark: boolean
) => color ?? (isDark ? 'hsl(220, 35%, 9%)' : '#f2f9fc');
