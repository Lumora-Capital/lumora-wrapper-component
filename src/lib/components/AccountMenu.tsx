import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import LogoutRounded from '@mui/icons-material/LogoutRounded';
import SettingsBrightnessOutlined from '@mui/icons-material/SettingsBrightnessOutlined';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import type { PopoverActions } from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { CountPill } from './UserMenu';
import type { UserMenuItem } from './UserMenu';

const FOCUS_OUTLINE_FIX = {
	'&:focus, &:focus-visible': { outline: 'none' }
} as const;

/** Card chrome; the Popover paper itself is transparent. */
const cardSx = {
	bgcolor: 'background.paper',
	border: '1px solid',
	borderColor: 'divider',
	borderRadius: '12px',
	boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column'
} as const;

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
}> = ({ mode, onToggle, accentColor, tint }) => {
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
		Icon: typeof LightModeOutlined,
		ref: React.RefObject<HTMLButtonElement | null>
	) => {
		const selected = mode === value;
		return (
			<ButtonBase
				ref={ref}
				role='radio'
				aria-checked={selected}
				aria-label={label}
				tabIndex={selected ? 0 : -1}
				onClick={() => select(value)}
				data-testid={`theme-segment-${value}`}
				sx={{
					width: 36,
					height: 26,
					borderRadius: '999px',
					color: selected ? accentColor : 'text.secondary',
					bgcolor: selected ? tint : 'transparent',
					transition: 'background-color 150ms ease, color 150ms ease',
					'&.Mui-focusVisible': {
						boxShadow: `0 0 0 2px ${alpha(accentColor, 0.6)}`
					},
					...FOCUS_OUTLINE_FIX
				}}
			>
				<Icon sx={{ fontSize: 18 }} />
			</ButtonBase>
		);
	};

	return (
		<Stack
			direction='row'
			role='radiogroup'
			aria-label='Theme'
			data-testid='theme-segments'
			onKeyDown={handleKeyDown}
			sx={{
				p: '3px',
				gap: '2px',
				borderRadius: '999px',
				bgcolor: 'action.selected',
				flexShrink: 0
			}}
		>
			{segment('light', 'Light', LightModeOutlined, lightRef)}
			{segment('dark', 'Dark', DarkModeOutlined, darkRef)}
		</Stack>
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
	/** Navigates menu items that carry a `path` and no `onClick`. */
	onLinkClick?: (path: string) => void;
	/** Host rows between Theme and Log out, in the given order. */
	menuItems?: UserMenuItem[];
	onLogout?: () => void;
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
	onLinkClick,
	menuItems = [],
	onLogout
}) => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const popoverActions = React.useRef<PopoverActions>(null);
	// State, not a ref: the Popover mounts its paper through a Portal one
	// render after `open` flips, so an effect keyed on `open` would run before
	// the paper exists. A state setter as the slot ref re-runs the observer
	// effect exactly when the paper mounts/unmounts.
	const [paperEl, setPaperEl] = React.useState<HTMLDivElement | null>(null);

	// Popover positions the paper by its `top` once, so content that grows or
	// shrinks would extend down over the footer or leave a gap above it.
	// Re-anchor on every size change instead — ResizeObserver fires per
	// animation frame, so the bottom edge stays pinned to the footer throughout.
	React.useEffect(() => {
		if (!paperEl || typeof ResizeObserver === 'undefined') {
			return undefined;
		}
		const observer = new ResizeObserver(() => {
			popoverActions.current?.updatePosition();
		});
		observer.observe(paperEl);
		return () => observer.disconnect();
	}, [paperEl]);

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

	const itemSx = { borderRadius: '8px', py: 1, gap: 0.5 } as const;

	// Name / email / role. With onProfileClick the whole row opens the
	// profile and the role line swaps to "View profile" on hover / focus.
	// It sits outside the MenuList, so it's reached with Tab.
	const userHeader = (
		<Stack direction='row' sx={{ alignItems: 'center', gap: 1.5, p: 2 }}>
			{renderAvatar(44)}
			<Box sx={{ minWidth: 0, flex: 1 }}>
				{/* name / email / role */}
				<Typography noWrap sx={{ fontWeight: 600 }}>
					{userName}
				</Typography>
				{userEmail ? (
					<Typography
						noWrap
						variant='body2'
						data-testid='account-menu-email'
						sx={{ color: 'text.secondary' }}
					>
						{userEmail}
					</Typography>
				) : null}
				{roleLabel ? (
					<Typography
						noWrap
						variant='caption'
						data-role
						data-testid='account-menu-role'
						sx={{
							display: 'block',
							letterSpacing: '0.02em',
							color: 'text.secondary'
						}}
					>
						{roleLabel}
					</Typography>
				) : null}
				{onProfileClick ? (
					<Typography
						noWrap
						variant='caption'
						data-hint
						data-testid='account-menu-view-profile'
						sx={{
							letterSpacing: '0.02em',
							fontWeight: 600,
							color: accentColor,
							textDecoration: 'underline',
							textUnderlineOffset: '2px'
						}}
					>
						View profile
					</Typography>
				) : null}
			</Box>
		</Stack>
	);

	return (
		<Popover
			open={open}
			anchorEl={anchorEl}
			onClose={onClose}
			action={popoverActions}
			anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
			transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
			slotProps={{
				paper: {
					ref: setPaperEl,
					sx: {
						// Transparent paper: the card draws its own chrome.
						bgcolor: 'transparent',
						backgroundImage: 'none',
						boxShadow: 'none',
						border: 'none',
						borderRadius: 0,
						overflow: 'visible',
						mt: -1,
						maxWidth: 'calc(100vw - 32px)'
					}
				}
			}}
		>
			{/* Menu card */}
			<Box
				data-testid='account-menu'
				sx={{ ...cardSx, width, minWidth: width }}
			>
				{onProfileClick ? (
					<ButtonBase
						onClick={() => closeMenuThen(onProfileClick)}
						data-testid='account-menu-header'
						sx={{
							display: 'block',
							width: '100%',
							textAlign: 'left',
							transition: 'background-color 150ms ease',
							'& [data-hint]': { display: 'none' },
							'&:hover, &.Mui-focusVisible': {
								bgcolor: tint,
								'& [data-hint]': { display: 'block' },
								'& [data-role]': { display: 'none' }
							},
							...FOCUS_OUTLINE_FIX
						}}
					>
						{userHeader}
					</ButtonBase>
				) : (
					<Box data-testid='account-menu-header'>{userHeader}</Box>
				)}
				<Divider />
				{/* Theme row: above the list, not in it. It's not a menu item, and
				    MenuList would otherwise hand its first child autoFocus and
				    tabindex=0. The toggle is reached with Tab / Shift+Tab. */}
				{showThemeToggler ? (
					<Box
						data-testid='menu-item-theme'
						sx={{
							...itemSx,
							mx: 1,
							mt: 0.5,
							px: 2,
							// The 32px pill is taller than a text line; trim the
							// vertical padding so the row is 40px like the rows
							// with a count pill, not 48px.
							py: 0.5,
							display: 'flex',
							alignItems: 'center',
							// Icon column as wide as a MenuItem's.
							'& .MuiListItemIcon-root': { minWidth: 36 }
						}}
					>
						<ListItemIcon>
							<SettingsBrightnessOutlined fontSize='small' />
						</ListItemIcon>
						<Typography sx={{ flex: 1 }}>Theme</Typography>
						<ThemeSegments
							mode={themeMode}
							onToggle={onThemeToggle}
							accentColor={accentColor}
							tint={tint}
						/>
					</Box>
				) : null}
				{/* One list so ArrowUp/Down spans every item; dividers are <li>s
				    without tabindex, which MenuList skips. */}
				<MenuList
					autoFocusItem={open}
					sx={{ px: 1, pt: showThemeToggler ? 0 : 0.5, pb: 0.5 }}
				>
					{menuItems.map(item => (
						<MenuItem
							key={item.key}
							onClick={() => handleMenuItem(item)}
							data-testid={`menu-item-${item.key}`}
							sx={itemSx}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<Typography sx={{ flex: 1 }}>
								{item.label}
							</Typography>
							<CountPill count={item.badge} />
						</MenuItem>
					))}
					{onLogout ? (
						<Divider component='li' sx={{ my: 0.5 }} />
					) : null}
					{onLogout ? (
						<MenuItem
							onClick={() => closeMenuThen(onLogout)}
							data-testid='menu-item-logout'
							sx={{
								...itemSx,
								color: isDark ? 'error.light' : 'error.main'
							}}
						>
							<ListItemIcon sx={{ color: 'inherit' }}>
								<LogoutRounded fontSize='small' />
							</ListItemIcon>
							Log out
						</MenuItem>
					) : null}
				</MenuList>
			</Box>
		</Popover>
	);
};

export default AccountMenu;
