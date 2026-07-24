import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import NexaLogo from './NexaLogo';

interface AssistantButtonProps {
	onClick?: () => void;
	/** Toggle (chat-open) state — reflected via `aria-pressed` only; no fill. */
	active?: boolean;
	/** Animate the "beam" border — only while a chat is ongoing. When false, the
	 * button shows just the Nexa logo (no border). */
	busy?: boolean;
	/** Navbar background, used as the ring's opaque inner cover so only the thin
	 * border line shows (the interior matches the bar — never a filled tint). */
	navbarBackground?: string;
}

/**
 * Navbar launcher for the Nexa assistant. Shows the bare Nexa mark; while a chat
 * is ongoing (`busy`) an animated teal "beam" travels around a rounded-square
 * border line. There is no interior fill in any state.
 */
const AssistantButton: React.FC<AssistantButtonProps> = ({
	onClick,
	active = false,
	busy = false,
	navbarBackground = '#ffffff'
}) => (
	<Tooltip title='Nexa' placement='bottom'>
		<IconButton
			onClick={onClick}
			aria-label='Toggle Nexa assistant'
			aria-pressed={active}
			disableFocusRipple
			sx={{
				position: 'relative',
				width: 38,
				height: 38,
				p: 0,
				flexShrink: 0,
				borderRadius: '11px',
				overflow: 'hidden',
				// No interior fill in any state — just the logo (plus the animated
				// border line when busy). Only a standard transient hover.
				backgroundColor: 'transparent',
				'&:hover': { backgroundColor: 'action.hover' },
				'&:focus, &:focus-visible': { outline: 'none' },
				// Animated "beam" border — rendered ONLY while a chat is ongoing.
				...(busy && {
					'&::before': {
						content: '""',
						position: 'absolute',
						inset: '-50%',
						background:
							'conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, #09C1AE 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)',
						animation: 'nexa-beam 3s linear infinite',
						zIndex: 0
					},
					// Opaque inner cover so only the ~2px border line is visible;
					// interior matches the navbar (never a filled tint).
					'&::after': {
						content: '""',
						position: 'absolute',
						inset: '2px',
						borderRadius: '9px',
						backgroundColor: navbarBackground,
						zIndex: 1
					},
					'@keyframes nexa-beam': {
						to: { transform: 'rotate(360deg)' }
					},
					'@media (prefers-reduced-motion: reduce)': {
						'&::before': { animation: 'none' }
					}
				})
			}}
		>
			<Box
				sx={{
					position: 'relative',
					zIndex: 2,
					display: 'flex',
					alignItems: 'center'
				}}
			>
				<NexaLogo size={20} />
			</Box>
		</IconButton>
	</Tooltip>
);

export default AssistantButton;
