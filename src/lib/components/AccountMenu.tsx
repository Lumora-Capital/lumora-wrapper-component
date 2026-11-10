import { LogOutIcon, MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react';
import * as React from 'react';
import { cn } from '../utils';
import { CountPill } from './UserMenu';
import { MENU_MORPH_SPRING, SETTLE_SPRING, springTiming } from './glassMotion';
import {
	GLASS_RADIUS_PX,
	REDUCED_MOTION_NONE,
	contentIn,
	glassGrow,
	glassBubbleStyle,
	useGlassAccentRgb,
	useSidebarSurface
} from './liquidGlass';
import { useGlassLens } from './RailLens';
import GlassLayer from './GlassLayer';
import { useIsDark } from './shellTheme';
import {
	ShellMenuItem,
	ShellMenuList,
	ShellMenuSeparator,
	focusMenuItem
} from './ShellMenuList';
import { withAlpha } from './sidebarUtils';
import { besideSidebar } from './PlatformMenu';
import { Popover, PopoverAnchor, PopoverContent } from './ui/popover';
import { Separator } from './ui/separator';
import type { HoverPopupContentProps } from './useHoverPopup';
import type { UserMenuItem } from './UserMenu';

/** Host apps often outline every `button:focus`; the focus ring is drawn instead. */
const FOCUS_OUTLINE_FIX = 'lw:outline-none lw:focus:outline-none';

/** Card chrome without glass (Nexa's popover card, the menu's 12px corners). */
const CARD_CLASS =
	'lw:flex lw:flex-col lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]';

const morph = springTiming(MENU_MORPH_SPRING);
const settle = springTiming(SETTLE_SPRING);
/**
 * The rows the glass lens rests behind. The user header only when it is a
 * button (it opens the profile): a static header is not something to press,
 * and the lens would paint over its unpositioned text.
 */
const GLASS_MENU_ITEMS =
	'[role="menuitem"], button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]';

/**
 * Light/Dark toggle: a pill with a sun and a moon, the current mode raised in
 * the accent tint (APG radio group with roving tabindex). It sits inline on
 * the menu's Theme row, which is a non-menuitem <li>, so every key except
 * Tab/Escape is handled here and stopped — otherwise MenuList's arrow
 * traversal and typeahead would walk the radios as if they were menu items.
 */
const ThemeSegments: React.FC<{
	mode: 'light' | 'dark';
	onToggle?: () => void;
	accentColor: string;
	tint: string;
	/** The selected mode as a glass bubble. */
	glass?: boolean;
}> = ({ mode, onToggle, accentColor, tint, glass = false }) => {
	const isDark = useIsDark();
	const accentRgb = useGlassAccentRgb();
	const lightRef = React.useRef<HTMLButtonElement>(null);
	const darkRef = React.useRef<HTMLButtonElement>(null);

	const select = (next: 'light' | 'dark') => {
		if (next !== mode) {
			onToggle?.();
		}
		(next === 'light' ? lightRef : darkRef).current?.focus();
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Tab' || event.key === 'Escape') {
			return;
		}
		event.stopPropagation();
		switch (event.key) {
			case 'ArrowLeft':
			case 'ArrowRight':
			case 'ArrowUp':
			case 'ArrowDown':
				event.preventDefault();
				select(mode === 'light' ? 'dark' : 'light');
				break;
			case 'Home':
				event.preventDefault();
				select('light');
				break;
			case 'End':
				event.preventDefault();
				select('dark');
				break;
			default:
				break;
		}
	};

	const segment = (
		value: 'light' | 'dark',
		label: string,
		Icon: typeof SunIcon,
		ref: React.RefObject<HTMLButtonElement | null>
	) => {
		const selected = mode === value;
		return (
			<button
				type='button'
				ref={ref}
				role='radio'
				aria-checked={selected}
				aria-label={label}
				tabIndex={selected ? 0 : -1}
				onClick={() => select(value)}
				data-testid={`theme-segment-${value}`}
				className={cn(
					'lw:inline-flex lw:h-6 lw:w-8 lw:cursor-pointer lw:items-center lw:justify-center lw:transition-[background-color,color,box-shadow,transform] lw:duration-150 lw:ease-out lw:focus-visible:shadow-[0_0_0_2px_var(--lw-seg-ring)]',
					glass ? 'lw:rounded-md' : 'lw:rounded-full',
					!selected &&
						'lw:text-muted-foreground lw:hover:text-foreground',
					// On glass each mode answers the pointer itself, so the
					// row's lens is not the only thing that moves
					glass && 'lw:hover:scale-[1.06] lw:active:scale-[0.94]',
					glass &&
						!selected &&
						(isDark
							? 'lw:hover:bg-white/12'
							: 'lw:hover:bg-white/75'),
					FOCUS_OUTLINE_FIX
				)}
				style={
					{
						'--lw-seg-ring': withAlpha(accentColor, 0.6),
						// White on dark: the accent is too dim against a dark surface
						...(selected
							? {
									color: isDark ? '#ffffff' : accentColor,
									backgroundColor: tint,
									...(glass
										? glassBubbleStyle(isDark, accentRgb)
										: {})
								}
							: {})
					} as React.CSSProperties
				}
			>
				<Icon className='lw:size-4' />
			</button>
		);
	};

	return (
		<div
			role='radiogroup'
			aria-label='Theme'
			data-testid='theme-segments'
			onKeyDown={handleKeyDown}
			className={cn(
				'lw:flex lw:shrink-0 lw:flex-row lw:gap-0.5 lw:bg-selected lw:p-[3px]',
				glass ? 'lw:rounded-md' : 'lw:rounded-full'
			)}
		>
			{segment('light', 'Light', SunIcon, lightRef)}
			{segment('dark', 'Dark', MoonIcon, darkRef)}
		</div>
	);
};

export interface AccountMenuProps {
	open: boolean;
	anchorEl: HTMLElement | null;
	onClose: () => void;
	/** Menu card width (px). */
	width: number;
	renderAvatar: (size: number) => React.ReactNode;
	userName: string;
	userEmail?: string;
	roleLabel?: string;
	accentColor: string;
	/** Low-alpha accent wash (hover / highlighted rows). */
	tint: string;
	// Built in: Theme and Log out — each renders only when
	// its handler/flag is present. Every other row is the host's `menuItems`.
	showThemeToggler: boolean;
	theme: 'light' | 'dark';
	onThemeToggle?: () => void;
	/** Makes the user header a link, with a "View profile" hint on hover. */
	onProfileClick?: () => void;
	/**
	 * Adds a "My AI usage" link beside "View profile". The header then holds
	 * the two as separate links, always shown, instead of being one button.
	 */
	onAiUsageClick?: () => void;
	/** Navigates menu items that carry a `path` and no `onClick`. */
	onLinkClick?: (path: string) => void;
	/** Host rows between Theme and Log out, in the given order. */
	menuItems?: UserMenuItem[];
	onLogout?: () => void;
	/**
	 * Liquid Glass card (the glass sidebar's): frosted, grows out of the
	 * account button on a spring as its blur comes in, and marks the hovered
	 * row with a drop of glass.
	 */
	glass?: boolean;
	/** Hover intent for the menu card (from `useHoverPopup`). */
	contentProps?: HoverPopupContentProps;
	/** Opened by a hover: non-modal, and focus stays where it was. */
	openedByHover?: boolean;
}

/**
 * Account menu for the `panel` sidebar: one Popover whose transparent paper
 * holds the menu card. Escape or an outside click closes it.
 */
const AccountMenu: React.FC<AccountMenuProps> = ({
	open,
	anchorEl,
	onClose,
	width,
	renderAvatar,
	userName,
	userEmail,
	roleLabel,
	accentColor,
	tint,
	showThemeToggler,
	theme: themeMode,
	onThemeToggle,
	onProfileClick,
	onAiUsageClick,
	onLinkClick,
	menuItems = [],
	onLogout,
	glass = false,
	contentProps,
	openedByHover = false
}) => {
	const isDark = useIsDark();
	const surface = useSidebarSurface(isDark ? 'hsl(220, 30%, 7%)' : '#ffffff');
	const listRef = React.useRef<HTMLUListElement>(null);
	// Hangs past the rail, like the platform menu, so it never covers rail items
	const anchorRef = React.useMemo(
		() => ({
			current: anchorEl && {
				contextElement: anchorEl,
				getBoundingClientRect: () => besideSidebar(anchorEl)
			}
		}),
		[anchorEl]
	);
	const menuLens = useGlassLens({
		enabled: glass,
		isDark,
		selector: GLASS_MENU_ITEMS,
		radius: GLASS_RADIUS_PX
	});

	const closeMenuThen = (callback?: () => void) => {
		onClose();
		callback?.();
	};

	// Host rows: their own handler, else navigation to their path.
	const handleMenuItem = (item: UserMenuItem) => {
		onClose();
		if (item.onClick) {
			item.onClick();
		} else if (item.path) {
			onLinkClick?.(item.path);
		}
	};

	// Compact rows: 32px, 14px text, a 32px icon column.
	const itemClass = cn(
		'lw:min-h-8 lw:gap-1 lw:px-3 lw:py-1.5 lw:text-sm lw:leading-5',
		glass
			? 'lw:rounded-md'
			: 'lw:rounded-lg lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)'
	);
	const iconClass =
		'lw:flex lw:min-w-8 lw:shrink-0 lw:items-center lw:[&_svg]:size-5';

	// "View profile · My AI usage": with onAiUsageClick the header has two
	// destinations, so each is its own link and the header itself is static.
	const linkClass = cn(
		'lw:cursor-pointer lw:rounded-sm lw:text-xs lw:leading-[18px] lw:font-semibold lw:tracking-[0.02em] lw:hover:underline lw:hover:underline-offset-2 lw:focus-visible:shadow-[0_0_0_2px_var(--lw-link-ring)]',
		FOCUS_OUTLINE_FIX
	);
	// White on dark: the accent is too dim against a dark surface
	const linkColor = isDark ? '#ffffff' : accentColor;
	const headerLinks = onAiUsageClick ? (
		<div
			data-testid='account-menu-links'
			className='lw:mt-0.5 lw:flex lw:flex-row lw:items-center lw:gap-1.5'
		>
			{onProfileClick ? (
				<>
					<button
						type='button'
						onClick={() => closeMenuThen(onProfileClick)}
						data-testid='account-menu-view-profile'
						className={linkClass}
						style={{ color: linkColor }}
					>
						View profile
					</button>
					<span aria-hidden className='lw:text-xs lw:text-faint'>
						·
					</span>
				</>
			) : null}
			<button
				type='button'
				onClick={() => closeMenuThen(onAiUsageClick)}
				data-testid='account-menu-ai-usage'
				className={linkClass}
				style={{ color: linkColor }}
			>
				My AI usage
			</button>
		</div>
	) : null;

	// Name / email / role. With onProfileClick the whole row opens the
	// profile and the role line swaps to "View profile" on hover / focus.
	// It sits outside the menu list, so it's reached with Tab.
	const userHeader = (
		<div className='lw:flex lw:flex-row lw:items-center lw:gap-2.5 lw:p-3'>
			{renderAvatar(36)}
			<div className='lw:min-w-0 lw:flex-1'>
				{/* name / email / role */}
				<p className='lw:truncate lw:text-sm lw:leading-5 lw:font-semibold lw:text-foreground'>
					{userName}
				</p>
				{userEmail ? (
					<p
						data-testid='account-menu-email'
						className='lw:truncate lw:text-xs lw:leading-[18px] lw:text-muted-foreground'
					>
						{userEmail}
					</p>
				) : null}
				{roleLabel ? (
					<span
						data-role
						data-testid='account-menu-role'
						className='lw:block lw:truncate lw:text-xs lw:leading-[1.66] lw:tracking-[0.02em] lw:text-muted-foreground'
					>
						{roleLabel}
					</span>
				) : null}
				{headerLinks}
				{onProfileClick && !onAiUsageClick ? (
					<span
						data-hint
						data-testid='account-menu-view-profile'
						className='lw:truncate lw:text-xs lw:leading-[1.66] lw:font-semibold lw:tracking-[0.02em] lw:underline lw:underline-offset-2'
						style={{ color: linkColor }}
					>
						View profile
					</span>
				) : null}
			</div>
		</div>
	);

	return (
		<Popover
			open={open && Boolean(anchorEl)}
			onOpenChange={next => {
				if (!next) {
					onClose();
				}
			}}
			modal={!openedByHover}
		>
			<PopoverAnchor
				virtualRef={anchorRef as unknown as React.RefObject<HTMLElement>}
			/>
			<PopoverContent
				{...contentProps}
				unstyled
				side='top'
				align='start'
				sideOffset={8}
				collisionPadding={16}
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
				{/* Menu card */}
				<div
					data-testid='account-menu'
					data-glass={glass ? 'true' : undefined}
					className={cn(
						glass
							? // The rows give up their own hover fill: one drop of
								// glass (the lens) glides behind whichever is hovered
								'lw:relative lw:rounded-md'
							: CARD_CLASS
					)}
					style={
						{
							width,
							minWidth: width,
							'--lw-menu-tint': tint,
							'--lw-link-ring': withAlpha(accentColor, 0.6)
						} as React.CSSProperties
					}
				>
					{glass ? (
						<GlassLayer
							isDark={isDark}
							solid={surface}
							className={cn(
								'lw:absolute lw:inset-0 lw:origin-bottom-left lw:rounded-[inherit]',
								REDUCED_MOTION_NONE
							)}
							style={{
								animation: `${glassGrow} ${morph.duration}ms ${morph.easing} both`
							}}
						/>
					) : null}
					<div
						{...menuLens.containerProps}
						className={
							glass
								? cn(
										'lw:relative lw:flex lw:flex-col lw:overflow-hidden lw:rounded-[inherit]',
										REDUCED_MOTION_NONE
									)
								: 'lw:contents'
						}
						style={
							glass
								? {
										animation: `${contentIn} ${settle.duration}ms ${settle.easing} 70ms both`
									}
								: undefined
						}
					>
						{menuLens.lens}
						{onProfileClick && !onAiUsageClick ? (
							<button
								type='button'
								onClick={() => closeMenuThen(onProfileClick)}
								data-testid='account-menu-header'
								className={cn(
									'lw:group lw:relative lw:block lw:w-full lw:cursor-pointer lw:text-left lw:transition-colors lw:duration-150 lw:[&_[data-hint]]:hidden lw:hover:[&_[data-hint]]:block lw:hover:[&_[data-role]]:hidden lw:focus-visible:[&_[data-hint]]:block lw:focus-visible:[&_[data-role]]:hidden',
									!glass &&
										'lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)',
									FOCUS_OUTLINE_FIX
								)}
							>
								{userHeader}
							</button>
						) : (
							<div
								data-testid='account-menu-header'
								className='lw:relative'
							>
								{userHeader}
							</div>
						)}
						<Separator className='lw:relative' />
						{/* Theme row: above the list, not in it. It's not a menu
						    item, and the list would otherwise walk it with the
						    arrows. The toggle is reached with Tab / Shift+Tab. */}
						{showThemeToggler ? (
							<div
								data-testid='menu-item-theme'
								// Paints above the glass lens resting behind it.
								// The 32px pill is taller than a text line; trim
								// the vertical padding so the row is 40px.
								className={cn(
									itemClass,
									'lw:relative lw:mx-1 lw:mt-1 lw:flex lw:items-center lw:py-1 lw:hover:bg-transparent'
								)}
							>
								<span
									className={cn(
										iconClass,
										'lw:text-muted-foreground'
									)}
								>
									<SunMoonIcon />
								</span>
								<span className='lw:flex-1 lw:text-foreground'>
									Theme
								</span>
								<ThemeSegments
									glass={glass}
									mode={themeMode}
									onToggle={onThemeToggle}
									accentColor={accentColor}
									tint={tint}
								/>
							</div>
						) : null}
						{/* One list so ArrowUp/Down spans every item; dividers are
						    separators, which the arrows skip. */}
						<ShellMenuList
							ref={listRef}
							className={cn(
								'lw:px-1 lw:pb-1',
								showThemeToggler ? 'lw:pt-0' : 'lw:pt-1'
							)}
						>
							{menuItems.map(item => (
								<ShellMenuItem
									key={item.key}
									onClick={() => handleMenuItem(item)}
									data-testid={`menu-item-${item.key}`}
									className={cn(
										itemClass,
										'lw:text-foreground'
									)}
								>
									<span
										className={cn(
											iconClass,
											'lw:text-muted-foreground'
										)}
									>
										{item.icon}
									</span>
									<span className='lw:flex-1'>
										{item.label}
									</span>
									<CountPill count={item.badge} />
								</ShellMenuItem>
							))}
							{onLogout ? <ShellMenuSeparator /> : null}
							{onLogout ? (
								<ShellMenuItem
									onClick={() => closeMenuThen(onLogout)}
									data-testid='menu-item-logout'
									className={cn(
										itemClass,
										'lw:text-destructive'
									)}
								>
									<span className={iconClass}>
										<LogOutIcon />
									</span>
									Log out
								</ShellMenuItem>
							) : null}
						</ShellMenuList>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default AccountMenu;
