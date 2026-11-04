import { MenuIcon, SearchIcon } from 'lucide-react';
import * as React from 'react';
import { cn } from '../utils';
import type { SidebarLink } from './LumoraWrapper';
import NexaLogo from './NexaLogo';
import { isInAppClick, isSidebarLinkActive } from './sidebarUtils';
import UserMenu, { UserAvatar, type UserMenuOptions } from './UserMenu';

/** Bar height above the safe-area inset; the content is padded by it. */
export const MOBILE_BOTTOM_NAV_HEIGHT_PX = 64;

/** Pinned links beyond this are dropped, so labels stay readable. */
const MAX_PINNED_LINKS = 2;

interface MobileBottomNavProps extends UserMenuOptions {
	/** Sidebar pages pinned between Menu and Nexa; links without a path are skipped. */
	pinnedLinks?: SidebarLink[];
	activePath?: string;
	onLinkClick?: (path: string) => void;
	/** Opens the navigation drawer; hidden when there is no sidebar. */
	onMenuClick?: () => void;
	menuOpen: boolean;
	/** Opens the search sheet; hidden without a search component. */
	onSearchClick?: () => void;
	searchOpen: boolean;
	showAssistant: boolean;
	/** The assistant's name: its caption, and "Ask <name>" for screen readers. */
	assistantLabel?: string;
	onAssistantClick?: () => void;
	assistantActive: boolean;
	showProfile: boolean;
	background: string;
	/** Idle icon + label color. */
	color: string;
	/** Color of the current page / open panel. */
	activeColor: string;
	/** Pill behind the active item's icon. */
	activeBackground: string;
}

const Item: React.FC<{
	label: string;
	icon: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	active: boolean;
	color: string;
	activeColor: string;
	activeBackground: string;
	ariaLabel?: string;
	haspopup?: 'menu' | 'dialog';
	/** A page link: marks the current page for screen readers. */
	isPage?: boolean;
	/** The page's path: the item is then a real link, so it opens in a new tab too. */
	href?: string;
	testId: string;
}> = ({
	label,
	icon,
	onClick,
	active,
	color,
	activeColor,
	activeBackground,
	ariaLabel,
	haspopup,
	isPage = false,
	href,
	testId
}) => {
	const className = cn(
		'lw:flex lw:h-full lw:min-w-0 lw:flex-[1_1_0] lw:cursor-pointer lw:flex-col lw:items-center lw:justify-center lw:gap-0.5 lw:border-0 lw:bg-transparent lw:p-0 lw:no-underline lw:outline-none lw:select-none',
		'lw:focus-visible:outline-2 lw:focus-visible:outline-offset-[-4px] lw:focus-visible:outline-(--lw-item-active) lw:focus-visible:outline-solid'
	);
	const style = {
		color: active ? activeColor : color,
		'--lw-item-active': activeColor
	} as React.CSSProperties;
	const content = (
		<>
			<span
				className='lw:flex lw:h-7 lw:min-w-12 lw:items-center lw:justify-center lw:rounded-[14px] lw:transition-colors lw:duration-150 lw:[&>svg]:size-6'
				style={{
					backgroundColor: active ? activeBackground : 'transparent'
				}}
			>
				{icon}
			</span>
			<span
				className={cn(
					'lw:text-[11px] lw:leading-[1.2] lw:text-inherit',
					active ? 'lw:font-semibold' : 'lw:font-medium'
				)}
			>
				{label}
			</span>
		</>
	);
	const shared = {
		onClick,
		'aria-label': ariaLabel ?? label,
		'aria-haspopup': haspopup,
		'aria-expanded': haspopup ? active : undefined,
		'aria-current': isPage && active ? ('page' as const) : undefined,
		'data-testid': testId,
		className,
		style
	};
	return href ? (
		<a href={href} {...shared}>
			{content}
		</a>
	) : (
		<button type='button' {...shared}>
			{content}
		</button>
	);
};

/**
 * Mobile navigation bar pinned to the bottom of the screen, so the actions
 * used most sit under the thumb: the navigation drawer, any pinned pages,
 * Ask Nexa, search and the user menu. Notifications sit in the top bar.
 */
const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
	onMenuClick,
	menuOpen,
	onSearchClick,
	searchOpen,
	showAssistant,
	assistantLabel = 'Nexa',
	onAssistantClick,
	assistantActive,
	showProfile,
	background,
	color,
	activeColor,
	activeBackground,
	pinnedLinks = [],
	activePath,
	onLinkClick,
	...menuOptions
}) => {
	const links = pinnedLinks
		.filter(link => link.path)
		.slice(0, MAX_PINNED_LINKS);
	const [userAnchor, setUserAnchor] = React.useState<HTMLElement | null>(
		null
	);
	const { userName = 'User', userAvatar, avatarColor } = menuOptions;
	const itemColors = { color, activeColor, activeBackground };

	return (
		<nav
			aria-label='Mobile navigation'
			data-testid='mobile-bottom-nav'
			// Above the page and the top bar; drawers and menus cover it. The
			// chat popup stops above it on phones, so it stays reachable.
			className='lw:fixed lw:right-0 lw:bottom-0 lw:left-0 lw:z-[1199] lw:flex lw:items-stretch lw:border-t lw:border-solid lw:border-border lw:pb-[env(safe-area-inset-bottom,0px)]'
			style={{
				height: `calc(${MOBILE_BOTTOM_NAV_HEIGHT_PX}px + env(safe-area-inset-bottom, 0px))`,
				backgroundColor: background
			}}
		>
			{onMenuClick && (
				<Item
					label='Menu'
					icon={<MenuIcon />}
					onClick={onMenuClick}
					active={menuOpen}
					haspopup='dialog'
					testId='mobile-nav-menu'
					{...itemColors}
				/>
			)}
			{links.map(link => (
				<Item
					key={link.path}
					label={link.text}
					icon={link.icon}
					href={link.path}
					onClick={event => {
						if (isInAppClick(event)) {
							event.preventDefault();
							onLinkClick?.(link.path!);
						}
					}}
					active={isSidebarLinkActive(link, activePath)}
					isPage
					testId={`mobile-nav-link-${link.text}`}
					{...itemColors}
				/>
			))}
			{showAssistant && (
				<Item
					label={assistantLabel}
					ariaLabel={`Ask ${assistantLabel}`}
					icon={
						<span
							className='lw:flex lw:h-7 lw:w-10 lw:items-center lw:justify-center lw:rounded-lg lw:border lw:border-solid lw:bg-[rgba(9,193,174,0.1)]'
							style={{
								borderColor: assistantActive
									? '#09C1AE'
									: 'rgba(9, 193, 174, 0.45)'
							}}
						>
							<NexaLogo size={18} />
						</span>
					}
					onClick={onAssistantClick}
					active={assistantActive}
					testId='mobile-nav-nexa'
					{...itemColors}
				/>
			)}
			{onSearchClick && (
				<Item
					label='Search'
					icon={<SearchIcon />}
					onClick={onSearchClick}
					active={searchOpen}
					haspopup='dialog'
					testId='mobile-nav-search'
					{...itemColors}
				/>
			)}
			{showProfile && (
				<>
					<Item
						label='Account'
						ariaLabel={`Account menu for ${userName}`}
						icon={
							<UserAvatar
								name={userName}
								avatar={userAvatar}
								color={avatarColor}
								size={26}
							/>
						}
						onClick={event => setUserAnchor(event.currentTarget)}
						active={Boolean(userAnchor)}
						haspopup='menu'
						testId='mobile-nav-account'
						{...itemColors}
					/>
					<UserMenu
						anchorEl={userAnchor}
						onClose={() => setUserAnchor(null)}
						placement='above-end'
						width={280}
						{...menuOptions}
					/>
				</>
			)}
		</nav>
	);
};

export default MobileBottomNav;
