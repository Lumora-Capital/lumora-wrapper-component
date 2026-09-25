import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import type { SidebarLink } from './LumoraWrapper';
import NexaLogo from './NexaLogo';
import { isSidebarLinkActive } from './sidebarUtils';
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
	testId
}) => (
	<ButtonBase
		onClick={onClick}
		aria-label={ariaLabel ?? label}
		aria-haspopup={haspopup}
		aria-expanded={haspopup ? active : undefined}
		aria-current={isPage && active ? 'page' : undefined}
		data-testid={testId}
		sx={{
			flex: '1 1 0',
			minWidth: 0,
			height: '100%',
			flexDirection: 'column',
			gap: 0.25,
			color: active ? activeColor : color,
			'&.Mui-focusVisible': {
				outline: '2px solid',
				outlineColor: activeColor,
				outlineOffset: -4
			}
		}}
	>
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: 28,
				minWidth: 48,
				borderRadius: '14px',
				bgcolor: active ? activeBackground : 'transparent',
				transition: 'background-color 150ms'
			}}
		>
			{icon}
		</Box>
		<Typography
			component='span'
			sx={{
				fontSize: 11,
				fontWeight: active ? 600 : 500,
				lineHeight: 1.2,
				color: 'inherit'
			}}
		>
			{label}
		</Typography>
	</ButtonBase>
);

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
		<Paper
			component='nav'
			aria-label='Mobile navigation'
			square
			elevation={0}
			data-testid='mobile-bottom-nav'
			sx={{
				position: 'fixed',
				left: 0,
				right: 0,
				bottom: 0,
				// Above the page and the top bar; drawers and menus cover it. The
				// chat popup stops above it on phones, so it stays reachable.
				zIndex: 1199,
				display: 'flex',
				alignItems: 'stretch',
				height: `calc(${MOBILE_BOTTOM_NAV_HEIGHT_PX}px + env(safe-area-inset-bottom, 0px))`,
				pb: 'env(safe-area-inset-bottom, 0px)',
				bgcolor: background,
				borderTop: '1px solid',
				borderColor: 'divider'
			}}
		>
			{onMenuClick && (
				<Item
					label='Menu'
					icon={<MenuRoundedIcon />}
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
					onClick={() => onLinkClick?.(link.path!)}
					active={isSidebarLinkActive(link, activePath)}
					isPage
					testId={`mobile-nav-link-${link.text}`}
					{...itemColors}
				/>
			))}
			{showAssistant && (
				<Item
					label='Nexa'
					ariaLabel='Ask Nexa'
					icon={
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: 40,
								height: 28,
								borderRadius: '8px',
								border: '1px solid',
								borderColor: assistantActive
									? '#09C1AE'
									: 'rgba(9, 193, 174, 0.45)',
								bgcolor: 'rgba(9, 193, 174, 0.1)'
							}}
						>
							<NexaLogo size={18} />
						</Box>
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
					icon={<SearchRoundedIcon />}
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
		</Paper>
	);
};

export default MobileBottomNav;
