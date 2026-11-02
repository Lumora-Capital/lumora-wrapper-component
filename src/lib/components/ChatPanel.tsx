import * as React from 'react';
import { REDUCED_MOTION_FADE_FAST } from './liquidGlass';

/** MUI's enter / exit timings, which the slide and grow keep. */
const ENTER_MS = 225;
const EXIT_MS = 195;
const ENTER_EASE = 'cubic-bezier(0, 0, 0.2, 1)';
const EXIT_EASE = 'cubic-bezier(0.4, 0, 0.6, 1)';

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
	// Opened before the first paint (the host keeps the chat open on this page, and it is loading):
	// it stands in place at once, where the host's loading skeleton kept room for it, rather than
	// sliding in over a page that has already appeared. Opened later, it slides in as ever.
	const paintedRef = React.useRef(false);
	React.useEffect(() => {
		const frame = requestAnimationFrame(() => {
			paintedRef.current = true;
		});
		return () => cancelAnimationFrame(frame);
	}, []);
	// Mounted on first open, then kept (hidden) so an ongoing chat keeps its state
	const [mounted, setMounted] = React.useState(open);
	// In its open place; one frame after `open`, so the move is animated
	const [shown, setShown] = React.useState(open);
	React.useEffect(() => {
		if (!open) {
			setShown(false);
			return undefined;
		}
		setMounted(true);
		const frame = requestAnimationFrame(() => setShown(true));
		return () => cancelAnimationFrame(frame);
	}, [open]);

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
	let placement: React.CSSProperties;
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

	if (!open && !mounted) {
		return null;
	}
	const visible = open && shown;
	const instant = !paintedRef.current;
	// Slides in from the right edge when docked; grows from its corner when floating
	const motion: React.CSSProperties = docked
		? {
				transform: visible ? 'none' : 'translateX(100%)',
				transition: open
					? `transform ${instant ? 0 : ENTER_MS}ms ${ENTER_EASE}`
					: `transform ${EXIT_MS}ms ${EXIT_EASE}, visibility 0ms linear ${EXIT_MS}ms`
			}
		: {
				transform: visible ? 'none' : 'scale(0.75, 0.5625)',
				opacity: visible ? 1 : 0,
				transformOrigin:
					position === 'left' ? 'bottom left' : 'bottom right',
				transition: open
					? `opacity ${ENTER_MS}ms ${ENTER_EASE}, transform ${Math.round(ENTER_MS * 0.666)}ms ${ENTER_EASE}`
					: `opacity ${EXIT_MS}ms ${EXIT_EASE}, transform ${EXIT_MS}ms ${EXIT_EASE}, visibility 0ms linear ${EXIT_MS}ms`
			};

	return (
		<div
			role={docked ? 'complementary' : 'dialog'}
			aria-label='Nexa chat'
			aria-hidden={open ? undefined : true}
			data-testid='chat-panel'
			data-variant={variant}
			data-lw-host=''
			className={`lw:fixed lw:flex lw:flex-col lw:overflow-hidden lw:border lw:border-solid lw:border-border lw:bg-surface lw:text-foreground lw:shadow-popover ${REDUCED_MOTION_FADE_FAST}`}
			style={{
				zIndex: docked ? DOCKED_CHAT_Z_INDEX : FLOATING_CHAT_Z_INDEX,
				visibility: open ? 'visible' : 'hidden',
				...placement,
				...motion
			}}
		>
			{children}
		</div>
	);
};

export default ChatPanel;
