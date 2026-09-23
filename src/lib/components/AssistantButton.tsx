import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import NexaLogo from './NexaLogo';

interface AssistantButtonProps {
	onClick?: () => void;
	/** Toggle (chat-open) state — reflected via `aria-pressed`. */
	active?: boolean;
	/** Animate the "beam" border — only while a chat is ongoing. When false, the
	 * button shows just the Nexa logo (no border). */
	busy?: boolean;
}

const SIZE_PX = 52;
const RADIUS_PX = 16;

/**
 * Floating launcher for the Nexa assistant, pinned to the bottom-right corner.
 * While a chat is ongoing (`busy`) an animated teal "beam" travels around its
 * rounded-square border.
 */
const AssistantButton: React.FC<AssistantButtonProps> = ({
	onClick,
	active = false,
	busy = false
}) => (
	<Tooltip title='Nexa' placement='left'>
		<IconButton
			onClick={onClick}
			aria-label='Toggle Nexa assistant'
			aria-pressed={active}
			disableFocusRipple
			data-testid='assistant-button'
			sx={{
				position: 'fixed',
				right: 24,
				bottom: 24,
				// Above page content, below drawers and menus (1200+)
				zIndex: 1150,
				width: SIZE_PX,
				height: SIZE_PX,
				p: 0,
				borderRadius: `${RADIUS_PX}px`,
				overflow: 'hidden',
				bgcolor: 'background.paper',
				boxShadow: 4,
				outline: active ? '2px solid #09C1AE' : 'none',
				outlineOffset: 2,
				'&:hover': { bgcolor: 'background.paper', boxShadow: 6 },
				'&.Mui-focusVisible': { outline: '2px solid #09C1AE' },
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
					// Opaque inner cover so only the ~2px border line is visible
					'&::after': {
						content: '""',
						position: 'absolute',
						inset: '2px',
						borderRadius: `${RADIUS_PX - 2}px`,
						bgcolor: 'background.paper',
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
				<NexaLogo size={26} />
			</Box>
		</IconButton>
	</Tooltip>
);

export default AssistantButton;
