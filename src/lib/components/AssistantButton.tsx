import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { LIQUID_GLASS_ENABLED } from './featureFlags';
import Kbd from './Kbd';
import NexaLogo from './NexaLogo';
import { RailGlassContext, useRailTooltipProps } from './RailLens';
import { GEL_SPRING, springTiming } from './glassMotion';
import { GLASS_RADIUS_PX, REDUCED_MOTION, glassTintSx } from './liquidGlass';

const gel = springTiming(GEL_SPRING);

const BEAM = '#09C1AE';

/**
 * Animated "beam" travelling around the border, shown only while a chat is
 * ongoing. `cover` paints over the interior so only a ~2px line stays visible.
 */
const beamSx = (radiusPx: number, cover: string) => ({
	position: 'relative',
	overflow: 'hidden',
	'&::before': {
		content: '""',
		position: 'absolute',
		inset: '-50%',
		background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${BEAM} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
		animation: 'nexa-beam 3s linear infinite',
		zIndex: 0
	},
	'&::after': {
		content: '""',
		position: 'absolute',
		inset: '2px',
		borderRadius: `${radiusPx - 2}px`,
		bgcolor: cover,
		zIndex: 1
	},
	'& > *': { position: 'relative', zIndex: 2 },
	'@keyframes nexa-beam': { to: { transform: 'rotate(360deg)' } },
	'@media (prefers-reduced-motion: reduce)': {
		'&::before': { animation: 'none' }
	}
});

/**
 * The beam for the glass Nexa: the same light travelling around the edge,
 * over a glass interior (tint over an opaque base, so the beam's gradient
 * stays a 2px line rather than showing through).
 */
const glassBeamSx = (isDark: boolean) => ({
	...beamSx(GLASS_RADIUS_PX, 'transparent'),
	'&::after': {
		content: '""',
		position: 'absolute',
		inset: '2px',
		borderRadius: `${GLASS_RADIUS_PX - 2}px`,
		zIndex: 1,
		background: `${glassTintSx(BEAM, isDark, 'clear').background}, ${isDark ? '#16202c' : '#f2fbfa'}`
	}
});

interface AssistantButtonProps {
	/**
	 * `sidebar`: full-width "Ask Nexa" row under the brand. `sidebar-icon`: the
	 * same launcher as an icon on the collapsed and narrow rails. `floating`:
	 * pinned to the bottom-right corner of the page.
	 */
	variant: 'sidebar' | 'sidebar-icon' | 'floating';
	onClick?: () => void;
	/** Chat open — reflected via `aria-pressed` and a stronger outline. */
	active?: boolean;
	/** Animate the beam border while a chat is ongoing. */
	busy?: boolean;
	/** Keyboard hint, e.g. `['⌘', 'J']`; omitted when there is no shortcut. */
	shortcutKeys?: string[];
	/** Sidebar variants: tint of the row, border and label. */
	accentColor?: string;
	/** Floating: extra distance from the right edge (e.g. the docked chat). */
	rightOffsetPx?: number;
}

const AssistantButton: React.FC<AssistantButtonProps> = ({
	variant,
	onClick,
	active = false,
	busy = false,
	shortcutKeys,
	accentColor = '#01584f',
	rightOffsetPx = 0
}) => {
	const railTooltip = useRailTooltipProps();
	const onGlassRail = React.useContext(RailGlassContext);
	const isDark = useTheme().palette.mode === 'dark';
	const tooltip = shortcutKeys
		? `Ask Nexa (${shortcutKeys.join('')})`
		: 'Ask Nexa';
	const common = {
		onClick,
		'aria-label': 'Ask Nexa',
		'aria-pressed': active,
		'data-testid': 'assistant-button'
	};

	if (variant === 'sidebar') {
		const bg = 'rgba(9, 193, 174, 0.08)';
		return (
			<ButtonBase
				{...common}
				focusRipple
				data-variant='sidebar'
				sx={{
					width: '100%',
					height: 44,
					px: 1.5,
					gap: 1.25,
					justifyContent: 'flex-start',
					borderRadius: '8px',
					border: '1px solid',
					borderColor: active ? BEAM : 'rgba(9, 193, 174, 0.45)',
					bgcolor: bg,
					color: accentColor,
					transition: 'border-color 150ms, background-color 150ms',
					'&:hover': { bgcolor: 'rgba(9, 193, 174, 0.14)' },
					'&.Mui-focusVisible': {
						outline: `2px solid ${BEAM}`,
						outlineOffset: 2
					},
					...(busy && beamSx(8, 'background.paper'))
				}}
			>
				<NexaLogo size={20} />
				<Typography
					sx={{
						flexGrow: 1,
						textAlign: 'left',
						fontWeight: 600,
						color: 'inherit'
					}}
				>
					Ask Nexa
				</Typography>
				{shortcutKeys && <Kbd keys={shortcutKeys} />}
			</ButtonBase>
		);
	}

	if (variant === 'sidebar-icon' && onGlassRail) {
		// On the glass rail: a drop of teal-tinted glass. It keeps its own
		// fill on hover (the rail's lens glides behind it), swells like a gel
		// button, and rings with light while the chat is open.
		return (
			<Tooltip title={tooltip} placement='right' arrow {...railTooltip}>
				<IconButton
					{...common}
					data-variant='sidebar-icon'
					data-rail-keep-fill
					sx={{
						width: 44,
						height: 44,
						borderRadius: `${GLASS_RADIUS_PX}px`,
						...glassTintSx(BEAM, isDark, 'clear'),
						...(LIQUID_GLASS_ENABLED
							? {
									backdropFilter: 'blur(8px) saturate(180%)',
									WebkitBackdropFilter:
										'blur(8px) saturate(180%)'
								}
							: {}),
						...(active && {
							boxShadow: `${glassTintSx(BEAM, isDark, 'clear').boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
						}),
						transition: `transform ${gel.duration}ms ${gel.easing}, box-shadow 200ms ease`,
						'& svg': {
							filter: 'drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.25))'
						},
						'&:hover': { transform: 'scale(1.07)' },
						'&:active': {
							transform: 'scale(0.92)',
							transitionDuration: '90ms'
						},
						[REDUCED_MOTION]: {
							transition: 'none',
							'&:hover, &:active': { transform: 'none' }
						},
						...(busy && glassBeamSx(isDark))
					}}
				>
					<NexaLogo size={20} />
				</IconButton>
			</Tooltip>
		);
	}

	if (variant === 'sidebar-icon') {
		return (
			<Tooltip title={tooltip} placement='right' arrow {...railTooltip}>
				<IconButton
					{...common}
					data-variant='sidebar-icon'
					sx={{
						width: 44,
						height: 44,
						borderRadius: '8px',
						border: '1px solid',
						borderColor: active ? BEAM : 'rgba(9, 193, 174, 0.45)',
						bgcolor: 'rgba(9, 193, 174, 0.08)',
						'&:hover': { bgcolor: 'rgba(9, 193, 174, 0.14)' },
						...(busy && beamSx(8, 'background.paper'))
					}}
				>
					<NexaLogo size={20} />
				</IconButton>
			</Tooltip>
		);
	}

	return (
		<Tooltip title={tooltip} placement='left'>
			<IconButton
				{...common}
				disableFocusRipple
				data-variant='floating'
				sx={{
					position: 'fixed',
					right: 24 + rightOffsetPx,
					transition: 'right 225ms ease',
					bottom: 24,
					// Above page content, below drawers and menus (1200+)
					zIndex: 1150,
					width: 52,
					height: 52,
					p: 0,
					borderRadius: '16px',
					bgcolor: 'background.paper',
					boxShadow: 4,
					outline: active ? `2px solid ${BEAM}` : 'none',
					outlineOffset: 2,
					'&:hover': { bgcolor: 'background.paper', boxShadow: 6 },
					'&.Mui-focusVisible': { outline: `2px solid ${BEAM}` },
					...(busy && beamSx(16, 'background.paper'))
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<NexaLogo size={26} />
				</Box>
			</IconButton>
		</Tooltip>
	);
};

export default AssistantButton;
