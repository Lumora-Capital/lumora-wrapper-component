import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import * as React from 'react';

/** Gap between the popup and the viewport edges (and the sidebar). */
const EDGE_GAP_PX = 24;
/** Tallest the popup grows on large screens. */
const MAX_HEIGHT_PX = 720;

interface ChatPopupProps {
	open: boolean;
	children: React.ReactNode;
	/** `right`: bottom-right corner. `left`: bottom-left, beside the sidebar. */
	position: 'left' | 'right';
	/** Desktop width in px. */
	width: number;
	/** Left edge of the page area (the sidebar width) for `position='left'`. */
	sidebarWidthPx: number;
	/** Extra room at the bottom, e.g. for the floating Nexa button. */
	bottomOffsetPx: number;
	/** Full-screen sheet instead of a card. */
	fullScreen: boolean;
	/** Full-screen only: CSS length kept free at the bottom (the mobile bar). */
	fullScreenBottom?: string;
	/** Esc closes the popup when given. */
	onClose?: () => void;
}

/**
 * Floating card for the host's chat (`GlobalChatSidebar`). It overlays the
 * page instead of taking a column, so the content keeps its full width. Once
 * opened it stays mounted while hidden, so an ongoing chat keeps its state.
 */
const ChatPopup: React.FC<ChatPopupProps> = ({
	open,
	children,
	position,
	width,
	sidebarWidthPx,
	bottomOffsetPx,
	fullScreen,
	fullScreenBottom = '0px',
	onClose
}) => {
	React.useEffect(() => {
		if (!open || !onClose) {
			return undefined;
		}
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [open, onClose]);

	const bottom = EDGE_GAP_PX + bottomOffsetPx;
	const placement = fullScreen
		? {
				top: 0,
				left: 0,
				right: 0,
				bottom: fullScreenBottom,
				borderRadius: 0
			}
		: {
				bottom,
				...(position === 'left'
					? { left: sidebarWidthPx + EDGE_GAP_PX }
					: { right: EDGE_GAP_PX }),
				width,
				maxWidth: `calc(100vw - ${EDGE_GAP_PX * 2}px)`,
				height: `min(${MAX_HEIGHT_PX}px, calc(100vh - ${bottom + EDGE_GAP_PX}px))`,
				borderRadius: '12px'
			};

	return (
		<Grow
			in={open}
			mountOnEnter
			style={{
				transformOrigin:
					position === 'left' ? 'bottom left' : 'bottom right'
			}}
		>
			<Paper
				role='dialog'
				aria-label='Nexa chat'
				data-testid='chat-popup'
				elevation={8}
				sx={{
					position: 'fixed',
					// Above the page and the floating Nexa button, below menus
					zIndex: 1250,
					display: 'flex',
					flexDirection: 'column',
					overflow: 'hidden',
					border: '1px solid',
					borderColor: 'divider',
					...placement
				}}
			>
				{children}
			</Paper>
		</Grow>
	);
};

export default ChatPopup;
