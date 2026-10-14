import CheckRounded from '@mui/icons-material/CheckRounded';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import GlassLayer from './GlassLayer';
import { MORPH_SPRING, SETTLE_SPRING, springTiming } from './glassMotion';
import {
	GLASS_RADIUS_PX,
	REDUCED_MOTION,
	contentIn,
	glassGrow
} from './liquidGlass';
import { useGlassLens } from './RailLens';

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

const morph = springTiming(MORPH_SPRING);
const settle = springTiming(SETTLE_SPRING);
const MENU_MIN_WIDTH_PX = 260;

/** Card chrome without glass; the Popover paper itself is transparent. */
const cardSx = {
	bgcolor: 'background.paper',
	border: '1px solid',
	borderColor: 'divider',
	borderRadius: '12px',
	boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
	overflow: 'hidden'
} as const;

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
	glass = false
}) => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const open = Boolean(anchorEl);
	const lens = useGlassLens({
		enabled: glass,
		isDark,
		selector: '.MuiMenuItem-root',
		radius: GLASS_RADIUS_PX
	});

	const rows = (
		<MenuList
			autoFocusItem={open}
			aria-label='Switch platform'
			data-testid='platform-menu-list'
			sx={{ position: 'relative', p: 1, outline: 'none' }}
		>
			{platforms.map(platform => {
				const current = platform.key === currentKey;
				const color = platform.accentColor ?? accentColor;
				return (
					<MenuItem
						key={platform.key}
						selected={current}
						onClick={() => onSelect(platform)}
						data-testid={`platform-item-${platform.key}`}
						sx={{
							borderRadius: glass
								? `${GLASS_RADIUS_PX}px`
								: '8px',
							py: 1,
							'&:focus, &:focus-visible': { outline: 'none' },
							// Glass: the tick marks the current platform and the
							// lens is the only hover fill
							...(glass && {
								'&.Mui-selected, &.Mui-selected:hover, &:hover, &.Mui-focusVisible':
									{ bgcolor: 'transparent' }
							})
						}}
					>
						<ListItemIcon sx={{ minWidth: 32 }}>
							<Box
								aria-hidden
								sx={{
									width: 12,
									height: 12,
									borderRadius: '50%',
									bgcolor: color,
									boxShadow: glass
										? `0 0 0 3px ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.7)'}`
										: 'none'
								}}
							/>
						</ListItemIcon>
						<ListItemText
							primary={platform.name}
							secondary={platform.description}
							slotProps={{
								primary: { sx: { fontWeight: 600 } }
							}}
						/>
						{current ? (
							<CheckRounded
								fontSize='small'
								data-testid='platform-current'
								sx={{ ml: 1.5, color }}
							/>
						) : null}
					</MenuItem>
				);
			})}
		</MenuList>
	);

	return (
		<Popover
			open={open}
			anchorEl={anchorEl}
			onClose={onClose}
			// The menu sits inside the brand button in React's tree; its clicks
			// (and the backdrop's) would bubble up and reopen it
			onClick={event => event.stopPropagation()}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
			transformOrigin={{ vertical: 'top', horizontal: 'left' }}
			{...(glass
				? {
						slots: { transition: Fade },
						transitionDuration: { enter: 0, exit: 160 }
					}
				: {})}
			slotProps={{
				paper: {
					sx: {
						bgcolor: 'transparent',
						backgroundImage: 'none',
						boxShadow: 'none',
						border: 'none',
						borderRadius: 0,
						overflow: 'visible',
						mt: 1,
						maxWidth: 'calc(100vw - 32px)'
					}
				}
			}}
		>
			<Box
				data-testid='platform-menu'
				data-glass={glass ? 'true' : undefined}
				sx={
					glass
						? {
								position: 'relative',
								minWidth: MENU_MIN_WIDTH_PX,
								borderRadius: `${GLASS_RADIUS_PX}px`
							}
						: { ...cardSx, minWidth: MENU_MIN_WIDTH_PX }
				}
			>
				{glass ? (
					<>
						<GlassLayer
							isDark={isDark}
							solid={theme.palette.background.paper}
							sx={{
								position: 'absolute',
								inset: 0,
								borderRadius: 'inherit',
								transformOrigin: 'top left',
								animation: `${glassGrow} ${morph.duration}ms ${morph.easing} both`,
								[REDUCED_MOTION]: { animation: 'none' }
							}}
						/>
						<Box
							{...lens.containerProps}
							sx={{
								position: 'relative',
								borderRadius: 'inherit',
								overflow: 'hidden',
								animation: `${contentIn} ${settle.duration}ms ${settle.easing} 70ms both`,
								[REDUCED_MOTION]: { animation: 'none' }
							}}
						>
							{lens.lens}
							{rows}
						</Box>
					</>
				) : (
					rows
				)}
			</Box>
		</Popover>
	);
};

export default PlatformMenu;

/**
 * The logo as the platform dropdown's toggle: a small corner notch on the
 * mark — the notch the rail puts on a group that holds pages — and the
 * dropdown itself. The hover sidebar counts anything in its React tree as
 * inside it, so a menu rendered from here keeps the sidebar open under it.
 * The wrapper can draw the logo in more than one place (sidebar, phone top
 * bar); each copy opens the menu only for a click on its own brand.
 */
export const PlatformSwitcherLogo: React.FC<
	PlatformMenuProps & { children: React.ReactNode }
> = ({ children, anchorEl, ...menuProps }) => {
	const ref = React.useRef<HTMLSpanElement>(null);
	const ownsAnchor = Boolean(
		anchorEl && ref.current && anchorEl.contains(ref.current)
	);
	return (
		<Box
			ref={ref}
			component='span'
			data-testid='platform-switcher-logo'
			sx={{
				position: 'relative',
				display: 'inline-flex',
				alignItems: 'center',
				justifyContent: 'center',
				p: '6px',
				'&::after': {
					content: '""',
					position: 'absolute',
					right: 1,
					bottom: 1,
					borderStyle: 'solid',
					borderWidth: '0 0 5px 5px',
					borderColor:
						'transparent transparent currentColor transparent',
					opacity: 0.55
				}
			}}
		>
			{children}
			<PlatformMenu
				{...menuProps}
				anchorEl={ownsAnchor ? anchorEl : null}
			/>
		</Box>
	);
};
