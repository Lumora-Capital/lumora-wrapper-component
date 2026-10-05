import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LayersOutlined from '@mui/icons-material/LayersOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import LogoutRounded from '@mui/icons-material/LogoutRounded';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineRounded from '@mui/icons-material/PersonOutlineRounded';
import SettingsBrightnessOutlined from '@mui/icons-material/SettingsBrightnessOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import SupportAgentOutlined from '@mui/icons-material/SupportAgentOutlined';
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
import type {
	LumoraPlatform,
	SettingsItem,
	SettingsSection
} from './LumoraWrapper';
import PlatformsPanel from './PlatformsPanel';
import SettingsPanel from './SettingsPanel';
import { openInNewTab } from './sidebarUtils';

const PLATFORMS_PANEL_WIDTH_PX = 288;
const SETTINGS_PANEL_WIDTH_PX = 300;
const FOCUS_OUTLINE_FIX = {
	'&:focus, &:focus-visible': { outline: 'none' }
} as const;

type SubPanelKind = 'platforms' | 'settings';

/**
 * Chrome shared by both cards; the Popover paper itself is transparent and
 * ignores the pointer, so each card has to opt back in — otherwise the empty
 * paper area above a short second card would swallow outside clicks.
 */
const cardSx = {
	pointerEvents: 'auto',
	bgcolor: 'background.paper',
	border: '1px solid',
	borderColor: 'divider',
	borderRadius: '12px',
	boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column'
} as const;

/** Second card: same chrome plus a short slide-in. */
const subPanelSx = {
	...cardSx,
	'@keyframes sub-panel-in': {
		from: { opacity: 0, transform: 'translateX(-6px)' },
		to: { opacity: 1, transform: 'none' }
	},
	animation: 'sub-panel-in 150ms ease-out',
	'@media (prefers-reduced-motion: reduce)': { animation: 'none' }
} as const;

/** Unread-count pill; renders nothing for 0. */
const CountPill: React.FC<{ count: number }> = ({ count }) =>
	count ? (
		<Box
			sx={{
				minWidth: 24,
				height: 24,
				px: 0.75,
				borderRadius: '12px',
				bgcolor: 'error.main',
				color: 'error.contrastText',
				fontSize: '0.75rem',
				fontWeight: 600,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			{count}
		</Box>
	) : null;

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
	// Items — each renders only when its handler/flag is present.
	showThemeToggler: boolean;
	theme: 'light' | 'dark';
	onThemeToggle?: () => void;
	showNotifications: boolean;
	notificationCount: number;
	onNotificationsClick?: () => void;
	whatsNewCount: number;
	onWhatsNewClick?: () => void;
	onProfileClick?: () => void;
	onSubmitRequestClick?: () => void;
	showSettings: boolean;
	/** Direct handler, used when no `settingsSections` are given. */
	onSettingsClick?: () => void;
	/** When non-empty, Settings opens a second card listing these sections. */
	settingsSections?: SettingsSection[];
	onSettingsItemClick?: (
		item: SettingsItem,
		section: SettingsSection
	) => void;
	/** Fallback for settings items that only carry a `path`. */
	onLinkClick?: (path: string) => void;
	platforms?: LumoraPlatform[];
	currentPlatformKey?: string;
	/** Replaces the default same-tab navigation when provided. */
	onPlatformSelect?: (platform: LumoraPlatform) => void;
	onLogout?: () => void;
}

/**
 * Account menu for the `panel` sidebar: one Popover whose transparent paper
 * holds the menu card and, beside it, a second card (Lumora Platforms or
 * Settings) while one is open. One modal means one focus trap and one
 * backdrop; Escape closes the second card first, then the menu.
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
	showNotifications,
	notificationCount,
	onNotificationsClick,
	whatsNewCount,
	onWhatsNewClick,
	onProfileClick,
	onSubmitRequestClick,
	showSettings,
	onSettingsClick,
	settingsSections,
	onSettingsItemClick,
	onLinkClick,
	platforms,
	currentPlatformKey,
	onPlatformSelect,
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
	const menuCardRef = React.useRef<HTMLDivElement>(null);
	const platformsItemRef = React.useRef<HTMLLIElement>(null);
	const settingsItemRef = React.useRef<HTMLLIElement>(null);
	// Same reasoning as `paperEl`: the second card mounts conditionally, so a
	// state setter as its ref re-runs the alignment effect when it appears.
	const [subCardEl, setSubCardEl] = React.useState<HTMLDivElement | null>(
		null
	);
	// Distance (px) from the menu's bottom edge up to the second card's bottom
	// edge, chosen so the card's top lines up with the row that opened it.
	const [subCardGap, setSubCardGap] = React.useState(0);
	const [subPanel, setSubPanel] = React.useState<SubPanelKind | null>(null);
	const hasPlatforms = Boolean(platforms?.length);
	const hasSettingsPanel = showSettings && Boolean(settingsSections?.length);
	const showSettingsItem =
		showSettings && (hasSettingsPanel || Boolean(onSettingsClick));

	// Popover positions the paper by its `top` once, so content that grows or
	// shrinks (a second card mounting, or a settings section expanding) would
	// extend down over the footer or leave a gap above it. Re-anchor on every
	// size change instead — ResizeObserver fires per animation frame, so the
	// bottom edge stays pinned to the footer throughout.
	// The second card sits in the same flex row as the menu, bottom-aligned.
	// Lift it by a margin so its top edge meets its trigger row (a flyout),
	// clamped so it never hangs below the menu or pokes out above it. A card
	// taller than the menu stays bottom-aligned and grows upward instead.
	const alignSubCard = React.useCallback(() => {
		const menuEl = menuCardRef.current;
		const triggerEl =
			subPanel === 'platforms'
				? platformsItemRef.current
				: subPanel === 'settings'
					? settingsItemRef.current
					: null;
		if (!open || !menuEl || !triggerEl || !subCardEl) {
			setSubCardGap(0);
			return;
		}
		const menuRect = menuEl.getBoundingClientRect();
		const triggerTop = triggerEl.getBoundingClientRect().top;
		const cardHeight = subCardEl.getBoundingClientRect().height;
		const wanted = menuRect.bottom - (triggerTop + cardHeight);
		const max = Math.max(0, menuRect.height - cardHeight);
		const next = Math.round(Math.min(Math.max(wanted, 0), max));
		setSubCardGap(prev => (prev === next ? prev : next));
	}, [open, subPanel, subCardEl]);

	// Before paint, whenever the card appears or swaps.
	React.useLayoutEffect(() => {
		alignSubCard();
	}, [alignSubCard]);

	React.useEffect(() => {
		if (!paperEl || typeof ResizeObserver === 'undefined') {
			return undefined;
		}
		const observer = new ResizeObserver(() => {
			popoverActions.current?.updatePosition();
			// Re-measure too, in case the rows moved.
			alignSubCard();
		});
		observer.observe(paperEl);
		return () => observer.disconnect();
	}, [paperEl, alignSubCard]);

	// Fresh state on the next open (reset after the exit transition so the
	// content doesn't collapse mid-fade).
	const resetState = () => {
		setSubPanel(null);
	};

	const closeMenuThen = (callback?: () => void) => {
		onClose();
		callback?.();
	};

	// Closing the second card hands focus back to the row that opened it.
	const closeSubPanel = () => {
		const trigger =
			subPanel === 'platforms' ? platformsItemRef : settingsItemRef;
		setSubPanel(null);
		trigger.current?.focus();
	};

	// The Settings / Lumora Platforms rows toggle their card: a second click
	// on the open row closes it, a click on the other row swaps.
	const toggleSubPanel = (kind: SubPanelKind) => {
		setSubPanel(prev => (prev === kind ? null : kind));
	};

	const handlePlatformSelect = (platform: LumoraPlatform) => {
		if (platform.key === currentPlatformKey) {
			return;
		}
		onClose();
		if (onPlatformSelect) {
			onPlatformSelect(platform);
		} else {
			openInNewTab(platform.url);
		}
	};

	// Precedence: the item's own handler, then the host's generic handler,
	// then plain navigation via the sidebar's link callback.
	const handleSettingsItem = (
		item: SettingsItem,
		section: SettingsSection
	) => {
		onClose();
		if (item.onClick) {
			item.onClick();
		} else if (onSettingsItemClick) {
			onSettingsItemClick(item, section);
		} else if (item.path) {
			onLinkClick?.(item.path);
		}
	};

	// Escape closes the second card first; otherwise it bubbles to the
	// Popover (Modal) which closes the whole menu.
	const handlePaperKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Escape' && subPanel) {
			event.stopPropagation();
			closeSubPanel();
		}
	};

	const itemSx = { borderRadius: '8px', py: 1, gap: 0.5 } as const;
	const chevronSx = { color: 'text.secondary', fontSize: 20 } as const;
	// Rows that open a second card take the active look only while it's open.
	const activeRowSx = {
		color: accentColor,
		bgcolor: tint,
		'& .MuiListItemIcon-root': { color: accentColor },
		'& .MuiSvgIcon-root': { color: accentColor },
		'&:hover': { bgcolor: alpha(accentColor, 0.22) }
	} as const;
	const settingsActive = subPanel === 'settings';
	const platformsActive = subPanel === 'platforms';

	return (
		<Popover
			open={open}
			anchorEl={anchorEl}
			onClose={onClose}
			action={popoverActions}
			anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
			transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
			slotProps={{
				transition: { onExited: resetState },
				paper: {
					ref: setPaperEl,
					onKeyDown: handlePaperKeyDown,
					sx: {
						// Transparent paper: each card draws its own chrome. The
						// paper's box spans both cards (the second one is shorter
						// and bottom-aligned), so it must not catch clicks itself —
						// clicks on its empty area fall through to the backdrop
						// and close the menu like any other outside click.
						bgcolor: 'transparent',
						backgroundImage: 'none',
						boxShadow: 'none',
						border: 'none',
						borderRadius: 0,
						overflow: 'visible',
						pointerEvents: 'none',
						mt: -1,
						maxWidth: 'calc(100vw - 32px)',
						display: 'flex',
						alignItems: 'flex-end',
						gap: 1
					}
				}
			}}
		>
			{/* Menu card */}
			<Box
				ref={menuCardRef}
				data-testid='account-menu'
				sx={{ ...cardSx, width, minWidth: width }}
			>
				<Stack
					direction='row'
					sx={{ alignItems: 'center', gap: 1.5, p: 2 }}
				>
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
								data-testid='account-menu-role'
								sx={{
									display: 'block',
									textTransform: 'uppercase',
									letterSpacing: '0.04em',
									color: 'text.secondary'
								}}
							>
								{roleLabel}
							</Typography>
						) : null}
					</Box>
				</Stack>
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
					{showNotifications ? (
						<MenuItem
							onClick={() => closeMenuThen(onNotificationsClick)}
							data-testid='menu-item-notifications'
							sx={itemSx}
						>
							<ListItemIcon>
								<NotificationsOutlined fontSize='small' />
							</ListItemIcon>
							<Typography sx={{ flex: 1 }}>
								Notifications
							</Typography>
							<CountPill count={notificationCount} />
						</MenuItem>
					) : null}
					{onWhatsNewClick ? (
						<MenuItem
							onClick={() => closeMenuThen(onWhatsNewClick)}
							data-testid='menu-item-whats-new'
							sx={itemSx}
						>
							<ListItemIcon>
								<AutoAwesomeOutlined fontSize='small' />
							</ListItemIcon>
							<Typography sx={{ flex: 1 }}>
								What&apos;s New
							</Typography>
							<CountPill count={whatsNewCount} />
						</MenuItem>
					) : null}
					{onProfileClick ? (
						<MenuItem
							onClick={() => closeMenuThen(onProfileClick)}
							data-testid='menu-item-profile'
							sx={itemSx}
						>
							<ListItemIcon>
								<PersonOutlineRounded fontSize='small' />
							</ListItemIcon>
							Profile
						</MenuItem>
					) : null}
					{onSubmitRequestClick ? (
						<MenuItem
							onClick={() => closeMenuThen(onSubmitRequestClick)}
							data-testid='menu-item-submit-request'
							sx={itemSx}
						>
							<ListItemIcon>
								<SupportAgentOutlined fontSize='small' />
							</ListItemIcon>
							Submit a request
						</MenuItem>
					) : null}
					{showSettingsItem ? (
						<MenuItem
							ref={settingsItemRef}
							onClick={
								hasSettingsPanel
									? () => toggleSubPanel('settings')
									: () => closeMenuThen(onSettingsClick)
							}
							aria-haspopup={
								hasSettingsPanel ? 'dialog' : undefined
							}
							aria-expanded={
								hasSettingsPanel ? settingsActive : undefined
							}
							data-active={settingsActive ? 'true' : 'false'}
							data-testid='menu-item-settings'
							sx={
								settingsActive
									? { ...itemSx, ...activeRowSx }
									: itemSx
							}
						>
							<ListItemIcon>
								<SettingsOutlined fontSize='small' />
							</ListItemIcon>
							<Typography sx={{ flex: 1 }}>Settings</Typography>
							<ChevronRightRounded sx={chevronSx} />
						</MenuItem>
					) : null}
					{hasPlatforms ? (
						<Divider component='li' sx={{ my: 0.5 }} />
					) : null}
					{hasPlatforms ? (
						<MenuItem
							ref={platformsItemRef}
							onClick={() => toggleSubPanel('platforms')}
							aria-haspopup='dialog'
							aria-expanded={platformsActive}
							data-active={platformsActive ? 'true' : 'false'}
							data-testid='menu-item-platforms'
							sx={
								platformsActive
									? { ...itemSx, ...activeRowSx }
									: itemSx
							}
						>
							<ListItemIcon>
								<LayersOutlined fontSize='small' />
							</ListItemIcon>
							<Typography sx={{ flex: 1 }}>
								Lumora Platforms
							</Typography>
							<ChevronRightRounded sx={chevronSx} />
						</MenuItem>
					) : null}
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

			{/* Second card — mounted only while open. The wrapper is what gets
			    measured and lifted; inline style because the gap changes per
			    animation frame and must not mint a class per value. */}
			{(hasPlatforms && subPanel === 'platforms') ||
			(hasSettingsPanel && subPanel === 'settings') ? (
				<Box
					ref={setSubCardEl}
					data-testid='account-menu-subcard'
					style={{ marginBottom: subCardGap }}
					sx={{ display: 'flex' }}
				>
					{subPanel === 'platforms' ? (
						<PlatformsPanel
							platforms={platforms!}
							currentPlatformKey={currentPlatformKey}
							onSelect={handlePlatformSelect}
							accentColor={accentColor}
							tint={tint}
							width={PLATFORMS_PANEL_WIDTH_PX}
							sx={subPanelSx}
						/>
					) : (
						<SettingsPanel
							sections={settingsSections!}
							onItemClick={handleSettingsItem}
							width={SETTINGS_PANEL_WIDTH_PX}
							sx={subPanelSx}
						/>
					)}
				</Box>
			) : null}
		</Popover>
	);
};

export default AccountMenu;
