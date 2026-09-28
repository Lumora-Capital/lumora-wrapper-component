import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import * as React from 'react';

/** Gap between the floating card and the viewport edges (and the sidebar). */
const EDGE_GAP_PX = 24;
/** Tallest the floating card grows on large screens. */
const MAX_HEIGHT_PX = 720;

/**
 * Docked panel layer: above the page and the floating Nexa button, below
 * drawers (1200) and menus (1300), so notifications and the user menu open
 * on top of it.
 */
export const DOCKED_CHAT_Z_INDEX = 1140;
/** Floating card layer: above the page and the floating Nexa button. */
const FLOATING_CHAT_Z_INDEX = 1250;

interface ChatPanelProps {
	open: boolean;
	children: React.ReactNode;
	/**
	 * `docked`: full height against the right edge, over the page.
	 * `floating`: a card over the page in a corner.
	 */
	variant: 'docked' | 'floating';
	/** Floating only: `right` (bottom-right) or `left` (beside the sidebar). */
	position: 'left' | 'right';
	/** Desktop width in px. */
	width: number;
	/** Floating `left` only: the sidebar width, to sit beside it. */
	sidebarWidthPx: number;
	/** Floating only: extra room at the bottom, e.g. for the floating Nexa button. */
	bottomOffsetPx: number;
	/** Phones: fill the screen instead. */
	fullScreen: boolean;
	/** Full screen only: CSS length kept free at the bottom (the mobile bar). */
	fullScreenBottom?: string;
	/** Esc closes the panel when given. */
	onClose?: () => void;
}

/**
 * Container for the host's chat (`GlobalChatSidebar`). Once opened it stays
 * mounted while hidden, so an ongoing chat keeps its state.
 */
const ChatPanel: React.FC<ChatPanelProps> = ({
	open,
	children,
	variant,
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

	const docked = variant === 'docked';
	const bottom = EDGE_GAP_PX + bottomOffsetPx;
	let placement: Record<string, unknown>;
	if (fullScreen) {
		placement = {
			top: 0,
			left: 0,
			right: 0,
			bottom: fullScreenBottom,
			borderRadius: 0
		};
	} else if (docked) {
		placement = {
			top: 0,
			right: 0,
			bottom: 0,
			width,
			maxWidth: '100vw',
			borderRadius: 0,
			borderWidth: '0 0 0 1px'
		};
	} else {
		placement = {
			bottom,
			...(position === 'left'
				? { left: sidebarWidthPx + EDGE_GAP_PX }
				: { right: EDGE_GAP_PX }),
			width,
			maxWidth: `calc(100vw - ${EDGE_GAP_PX * 2}px)`,
			height: `min(${MAX_HEIGHT_PX}px, calc(100vh - ${bottom + EDGE_GAP_PX}px))`,
			borderRadius: '12px'
		};
	}

	const panel = (
		<Paper
			role={docked ? 'complementary' : 'dialog'}
			aria-label='Nexa chat'
			data-testid='chat-panel'
			data-variant={variant}
			elevation={8}
			sx={{
				position: 'fixed',
				zIndex: docked ? DOCKED_CHAT_Z_INDEX : FLOATING_CHAT_Z_INDEX,
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
	);

	// Slides in from the right edge when docked; grows from its corner when floating
	return docked ? (
		<Slide direction='left' in={open} mountOnEnter>
			{panel}
		</Slide>
	) : (
		<Grow
			in={open}
			mountOnEnter
			style={{
				transformOrigin:
					position === 'left' ? 'bottom left' : 'bottom right'
			}}
		>
			{panel}
		</Grow>
	);
};

export default ChatPanel;
