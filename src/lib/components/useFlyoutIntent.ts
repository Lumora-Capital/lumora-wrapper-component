import * as React from 'react';

/** Pause before a hover opens a flyout: long enough that sweeping the
 * pointer down the rail doesn't flash one open for every group it crosses,
 * short enough that resting on a group opens it at once. */
export const FLYOUT_OPEN_DELAY_MS = 50;
/** Grace after the pointer leaves the icon or the flyout before it closes,
 * so a diagonal path from the icon to a tile doesn't drop it. */
export const FLYOUT_CLOSE_DELAY_MS = 250;

export type FlyoutState = {
	/** `nodeKey` of the group whose flyout is open. */
	key: string;
	/** Opened by a click or the keyboard: stays open when the pointer leaves. */
	pinned: boolean;
	/** Opened by the keyboard: the first tile takes focus. */
	focusFirst: boolean;
};

/**
 * Open state of the rail's submenu flyouts. A hover opens the group's flyout
 * after a short pause; once one is open, hovering another group switches to
 * it at once, like a menu bar. A click (or Enter / Space / →) pins it open
 * until a tile is chosen, a click lands outside, or Escape.
 */
const useFlyoutIntent = (enabled: boolean) => {
	const [state, setState] = React.useState<FlyoutState | null>(null);
	const stateRef = React.useRef(state);
	stateRef.current = state;
	const triggers = React.useRef(new Map<string, HTMLElement>());
	const flyoutRef = React.useRef<HTMLDivElement>(null);
	const openTimer = React.useRef<ReturnType<typeof setTimeout>>(undefined);
	const closeTimer = React.useRef<ReturnType<typeof setTimeout>>(undefined);

	const clearOpenTimer = () => {
		clearTimeout(openTimer.current);
		openTimer.current = undefined;
	};
	const clearCloseTimer = () => {
		clearTimeout(closeTimer.current);
		closeTimer.current = undefined;
	};

	const open = (key: string, pinned: boolean, focusFirst = false) => {
		clearOpenTimer();
		clearCloseTimer();
		setState({ key, pinned, focusFirst });
	};

	const close = React.useCallback((restoreFocus = false) => {
		clearOpenTimer();
		clearCloseTimer();
		const key = stateRef.current?.key;
		setState(null);
		if (restoreFocus && key) {
			triggers.current.get(key)?.focus();
		}
	}, []);

	const scheduleClose = () => {
		clearOpenTimer();
		if (!stateRef.current || stateRef.current.pinned) {
			return;
		}
		clearCloseTimer();
		closeTimer.current = setTimeout(() => close(), FLYOUT_CLOSE_DELAY_MS);
	};

	React.useEffect(() => {
		if (!enabled) {
			close();
		}
	}, [enabled, close]);

	React.useEffect(
		() => () => {
			clearOpenTimer();
			clearCloseTimer();
		},
		[]
	);

	// While open: a press anywhere but the flyout or a group icon closes it,
	// and so does Escape (handing focus back to the icon if it was inside).
	const isOpen = state !== null;
	React.useEffect(() => {
		if (!isOpen) {
			return undefined;
		}
		const isInside = (target: EventTarget | null) => {
			const node = target as Node | null;
			if (!node) {
				return false;
			}
			if (flyoutRef.current?.contains(node)) {
				return true;
			}
			return [...triggers.current.values()].some(el => el.contains(node));
		};
		const onPointerDown = (event: PointerEvent) => {
			if (!isInside(event.target)) {
				close();
			}
		};
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				close(
					Boolean(flyoutRef.current?.contains(document.activeElement))
				);
			}
		};
		document.addEventListener('pointerdown', onPointerDown);
		document.addEventListener('keydown', onKeyDown);
		return () => {
			document.removeEventListener('pointerdown', onPointerDown);
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, close]);

	/** Spread on a group's rail icon. */
	const triggerProps = (key: string) => ({
		ref: (el: HTMLElement | null) => {
			if (el) {
				triggers.current.set(key, el);
			} else {
				triggers.current.delete(key);
			}
		},
		onMouseEnter: () => {
			if (!enabled) {
				return;
			}
			clearCloseTimer();
			const current = stateRef.current;
			if (current) {
				if (current.key !== key) {
					open(key, current.pinned);
				}
				return;
			}
			clearOpenTimer();
			openTimer.current = setTimeout(
				() => open(key, false),
				FLYOUT_OPEN_DELAY_MS
			);
		},
		onMouseLeave: scheduleClose,
		onClick: (event: React.MouseEvent) => {
			// Enter / Space arrive as a click with no pointer (`detail` 0):
			// open and move into the tiles. A pointer click pins the flyout,
			// or closes it when it is already pinned.
			if (event.detail === 0) {
				open(key, true, true);
				return;
			}
			const current = stateRef.current;
			if (current?.key === key && current.pinned) {
				close();
			} else {
				open(key, true);
			}
		},
		onKeyDown: (event: React.KeyboardEvent) => {
			if (event.key === 'ArrowRight') {
				event.preventDefault();
				open(key, true, true);
			}
		}
	});

	/** Spread on the flyout panel. */
	const flyoutProps = {
		ref: flyoutRef,
		onMouseEnter: clearCloseTimer,
		onMouseLeave: scheduleClose
	};

	/** A page icon on the rail was hovered: an unpinned flyout gives way. */
	const onRailLeafEnter = () => {
		clearOpenTimer();
		if (stateRef.current && !stateRef.current.pinned) {
			close();
		}
	};

	return {
		state,
		close,
		triggerProps,
		flyoutProps,
		onRailLeafEnter,
		getTrigger: (key: string) => triggers.current.get(key) ?? null
	};
};

export default useFlyoutIntent;
