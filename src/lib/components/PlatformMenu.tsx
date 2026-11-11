import { CheckIcon } from 'lucide-react';
import * as React from 'react';
import { cn } from '../utils';
import GlassLayer from './GlassLayer';
import { MENU_MORPH_SPRING, SETTLE_SPRING, springTiming } from './glassMotion';
import {
	GLASS_RADIUS_PX,
	REDUCED_MOTION_NONE,
	contentIn,
	glassGrow,
	useSidebarSurface
} from './liquidGlass';
import { useGlassLens } from './RailLens';
import { useIsDark } from './shellTheme';
import { ShellMenuItem, ShellMenuList, focusMenuItem } from './ShellMenuList';
import { Popover, PopoverAnchor, PopoverContent } from './ui/popover';
import useHoverPopup, { type HoverPopupContentProps } from './useHoverPopup';

/** One entry of the platform switcher opened from the sidebar logo. */
export type LumoraPlatform = {
	/** Stable id; `currentPlatformKey` matches against it. */
	key: string;
	name: string;
	/** One line under the name, e.g. what the platform is for. */
	description?: string;
	/** The platform's colour, shown as its dot (and its tick when current). */
	accentColor?: string;
	/**
	 * Home page, opened in this tab when the platform is chosen and the host
	 * passes no `onPlatformSelect`.
	 */
	url?: string;
};

const morph = springTiming(MENU_MORPH_SPRING);
const settle = springTiming(SETTLE_SPRING);
const MENU_MIN_WIDTH_PX = 240;
/** Space between the sidebar's edge and the menu. */
const SIDEBAR_GAP_PX = 8;
// The visible surface: the glass capsule, or the hover panel (which widens
// over the rail), else the sidebar itself
const SIDEBAR_SURFACE =
	'[data-rail-surface], [data-testid="sidebar-hover-panel"], aside';

/**
 * The box a menu opens beside: the trigger's, moved past the visible
 * sidebar's right edge so the menu covers page content, never rail items, and
 * sits level with its trigger. Outside a sidebar (the phone top bar) it is the
 * trigger's own box.
 */
export const besideSidebar = (anchor: HTMLElement): DOMRect => {
	const logo = anchor.getBoundingClientRect();
	const sidebar = anchor.closest(SIDEBAR_SURFACE);
	if (!sidebar) {
		return logo;
	}
	const left = sidebar.getBoundingClientRect().right + SIDEBAR_GAP_PX;
	return new DOMRect(left, logo.top, 0, logo.height);
};

/** Card chrome without glass (Nexa's popover card, the menu's 12px corners). */
const CARD_CLASS =
	'lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]';

export interface PlatformMenuProps {
	anchorEl: HTMLElement | null;
	onClose: () => void;
	platforms: LumoraPlatform[];
	currentKey?: string;
	onSelect: (platform: LumoraPlatform) => void;
	/** Accent for the current platform's tick when it has no colour of its own. */
	accentColor: string;
	/** A Liquid Glass card (the glass rail's) in place of the plain one. */
	glass?: boolean;
	/** Hover intent for the menu card (from `useHoverPopup`). */
	contentProps?: HoverPopupContentProps;
	/** Opened by a hover: non-modal, and focus stays where it was. */
	openedByHover?: boolean;
}

/**
 * The platform dropdown under the sidebar logo: each platform with its
 * colour dot and description, the current one ticked. On the glass rail it
 * is a glass card that grows out of the logo, with one drop of glass gliding
 * behind the hovered row, like the account menu.
 */
const PlatformMenu: React.FC<PlatformMenuProps> = ({
	anchorEl,
	onClose,
	platforms,
	currentKey,
	onSelect,
	accentColor,
	glass = false,
	contentProps,
	openedByHover = false
}) => {
	const isDark = useIsDark();
	const open = Boolean(anchorEl);
	// Beside the logo in a sidebar; under it in the phone top bar
	const inSidebar = Boolean(anchorEl?.closest(SIDEBAR_SURFACE));
	const surface = useSidebarSurface(isDark ? 'hsl(220, 30%, 7%)' : '#ffffff');
	const listRef = React.useRef<HTMLUListElement>(null);
	const anchorRef = React.useMemo(
		() => ({
			current: anchorEl && {
				// Lets floating-ui follow the anchor's scroll parents and resizes
				contextElement: anchorEl,
				getBoundingClientRect: () => besideSidebar(anchorEl)
			}
		}),
		[anchorEl]
	);
	const lens = useGlassLens({
		enabled: glass,
		isDark,
		selector: '[role="menuitem"]',
		radius: GLASS_RADIUS_PX
	});

	const rows = (
		<ShellMenuList
			ref={listRef}
			aria-label='Switch platform'
			data-testid='platform-menu-list'
			className='lw:p-1'
		>
			{platforms.map(platform => {
				const current = platform.key === currentKey;
				const color = platform.accentColor ?? accentColor;
				return (
					<ShellMenuItem
						key={platform.key}
						selected={current}
						onClick={() => onSelect(platform)}
						data-testid={`platform-item-${platform.key}`}
						className={cn(
							// Compact: 14px name over a 12px description.
							'lw:px-3 lw:py-1.5',
							glass
								? // Glass: the tick marks the current platform and
									// the lens is the only hover fill
									'lw:rounded-md'
								: 'lw:rounded-lg lw:hover:bg-accent lw:focus-visible:bg-accent lw:data-[selected=true]:bg-selected'
						)}
					>
						<span className='lw:flex lw:min-w-6 lw:shrink-0 lw:items-center'>
							<span
								aria-hidden
								className='lw:block lw:size-2.5 lw:rounded-full'
								style={{
									backgroundColor: color,
									boxShadow: glass
										? `0 0 0 3px ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.7)'}`
										: 'none'
								}}
							/>
						</span>
						<span className='lw:min-w-0 lw:flex-auto'>
							<span className='lw:block lw:text-sm lw:leading-5 lw:font-semibold lw:text-foreground'>
								{platform.name}
							</span>
							{platform.description ? (
								<span className='lw:block lw:text-xs lw:leading-[18px] lw:text-muted-foreground'>
									{platform.description}
								</span>
							) : null}
						</span>
						{current ? (
							<CheckIcon
								data-testid='platform-current'
								className='lw:ml-3 lw:size-[18px] lw:shrink-0'
								style={{ color }}
							/>
						) : null}
					</ShellMenuItem>
				);
			})}
		</ShellMenuList>
	);

	return (
		<Popover
			open={open}
			onOpenChange={next => {
				if (!next) {
					onClose();
				}
			}}
			modal={!openedByHover}
		>
			<PopoverAnchor
				virtualRef={
					anchorRef as unknown as React.RefObject<HTMLElement>
				}
			/>
			<PopoverContent
				unstyled
				side={inSidebar ? 'right' : 'bottom'}
				align='start'
				sideOffset={inSidebar ? 0 : 8}
				collisionPadding={16}
				{...contentProps}
				// The menu sits inside the brand button in React's tree; its
				// clicks would bubble up and reopen it
				onClick={event => event.stopPropagation()}
				onInteractOutside={event => {
					contentProps?.onInteractOutside(event);
					// A press on the brand button pins the menu rather than closing it
					if (
						event.target instanceof Node &&
						anchorEl?.contains(event.target)
					) {
						event.preventDefault();
					}
				}}
				onOpenAutoFocus={event => {
					event.preventDefault();
					if (!openedByHover) {
						focusMenuItem(listRef.current);
					}
				}}
				onCloseAutoFocus={event => {
					event.preventDefault();
					if (!openedByHover) {
						anchorEl?.focus?.();
					}
				}}
				className='lw:max-w-[calc(100vw-32px)]'
			>
				<div
					data-testid='platform-menu'
					data-glass={glass ? 'true' : undefined}
					className={glass ? 'lw:relative lw:rounded-md' : CARD_CLASS}
					style={{ minWidth: MENU_MIN_WIDTH_PX }}
				>
					{glass ? (
						<>
							<GlassLayer
								isDark={isDark}
								solid={surface}
								className={cn(
									'lw:absolute lw:inset-0 lw:origin-top-left lw:rounded-[inherit]',
									REDUCED_MOTION_NONE
								)}
								style={{
									animation: `${glassGrow} ${morph.duration}ms ${morph.easing} both`
								}}
							/>
							<div
								{...lens.containerProps}
								className={cn(
									'lw:relative lw:overflow-hidden lw:rounded-[inherit]',
									REDUCED_MOTION_NONE
								)}
								style={{
									animation: `${contentIn} ${settle.duration}ms ${settle.easing} 70ms both`
								}}
							>
								{lens.lens}
								{rows}
							</div>
						</>
					) : (
						rows
					)}
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default PlatformMenu;

/**
 * The logo as the platform dropdown's toggle: a small corner notch on the
 * mark, and the dropdown itself. The hover sidebar counts anything in its React tree as
 * inside it, so a menu rendered from here keeps the sidebar open under it.
 * The wrapper can draw the logo in more than one place (sidebar, phone top
 * bar); each copy opens the menu only for a click on its own brand.
 * A mouse resting on the logo opens it too; the menu is this span's child in
 * React's tree, so moving from logo to menu doesn't count as leaving.
 */
export const PlatformSwitcherLogo: React.FC<
	PlatformMenuProps & {
		children: React.ReactNode;
		/** Open the menu against `anchor` (the brand button). */
		onOpen: (anchor: HTMLElement) => void;
		/** Open on hover; off where the rail widens on hover and moves the logo. */
		hoverOpen?: boolean;
	}
> = ({ children, anchorEl, onOpen, hoverOpen = false, ...menuProps }) => {
	const ref = React.useRef<HTMLSpanElement>(null);
	const ownsAnchor = Boolean(
		anchorEl && ref.current && anchorEl.contains(ref.current)
	);
	const hover = useHoverPopup({
		open: ownsAnchor,
		// The brand button anchors the menu, as a click on it does
		onOpen: trigger => onOpen(trigger.closest('button') ?? trigger),
		onClose: menuProps.onClose
	});
	return (
		<span
			ref={ref}
			{...(hoverOpen ? hover.triggerProps : {})}
			data-testid='platform-switcher-logo'
			className="lw:relative lw:inline-flex lw:items-center lw:justify-center lw:p-1.5 lw:after:absolute lw:after:right-px lw:after:bottom-px lw:after:border-solid lw:after:[border-width:0_0_5px_5px] lw:after:[border-color:transparent_transparent_currentColor_transparent] lw:after:opacity-55 lw:after:content-['']"
		>
			{children}
			<PlatformMenu
				{...menuProps}
				anchorEl={ownsAnchor ? anchorEl : null}
				contentProps={hover.contentProps}
				openedByHover={hover.openedByHover}
			/>
		</span>
	);
};
