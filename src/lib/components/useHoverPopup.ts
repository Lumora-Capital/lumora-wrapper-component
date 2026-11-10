import * as React from 'react';
import { FLYOUT_CLOSE_DELAY_MS } from './useFlyoutIntent';

/** Rest on a trigger this long before a hover opens its popup, so sweeping
 * the pointer past it doesn't flash the popup open. */
export const HOVER_OPEN_DELAY_MS = 150;

type PointerHandler = (event: React.PointerEvent<HTMLElement>) => void;

/** For the trigger: hover intent, and a press that pins a hover-opened popup. */
export type HoverPopupTriggerProps = {
	onPointerEnter: PointerHandler;
	onPointerLeave: PointerHandler;
	onPointerDown: PointerHandler;
};

/** For the popup's Radix content: hover intent, and a press or focus on the
 * trigger isn't an interaction outside it. */
export type HoverPopupContentProps = {
	onPointerEnter: PointerHandler;
	onPointerLeave: PointerHandler;
	onInteractOutside: (event: {
		target: EventTarget | null;
		preventDefault: () => void;
	}) => void;
};

/**
 * Hover intent for a popup that otherwise opens on click. A mouse resting on
 * the trigger opens it; once hover-opened, leaving both the trigger and the
 * popup closes it after the flyouts' grace, unless a press on the trigger
 * pinned it. Spread `triggerProps` on the trigger and `contentProps` on the
 * popup's Radix content. Touch and pen are ignored, and a popup opened any
 * other way (click, keyboard) has `openedByHover` false, so it stays modal
 * and closes only as before. `openedByHover` keeps its value through the
 * close, for close-focus handling.
 */
const useHoverPopup = ({
	open,
	onOpen,
	onClose
}: {
	open: boolean;
	onOpen: (trigger: HTMLElement) => void;
	onClose: () => void;
}) => {
	const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined);
	const triggerEl = React.useRef<HTMLElement | null>(null);
	// Pressed while hover-opened: stays open when the pointer leaves
	const pinned = React.useRef(false);
	const [hoverOpening, setHoverOpening] = React.useState(false);
	const [openedByHover, setOpenedByHover] = React.useState(false);
	const [wasOpen, setWasOpen] = React.useState(open);
	// Each open decides once whether a hover made it
	if (open !== wasOpen) {
		setWasOpen(open);
		if (open) {
			setOpenedByHover(hoverOpening);
			setHoverOpening(false);
		}
	}
	const latest = React.useRef({ open, openedByHover, onOpen, onClose });
	latest.current = { open, openedByHover, onOpen, onClose };
	const clear = () => {
		clearTimeout(timer.current);
		timer.current = undefined;
	};
	// Closing by click or Escape leaves the mouse on the trigger, and Radix's
	// modal pointer-events then make it re-enter: don't hover-reopen until the
	// pointer has moved off the trigger.
	const closedByHook = React.useRef(false);
	const suppressed = React.useRef(false);
	const moveListener = React.useRef<(event: PointerEvent) => void>(undefined);
	const stopSuppressing = () => {
		suppressed.current = false;
		if (moveListener.current) {
			document.removeEventListener('pointermove', moveListener.current);
			moveListener.current = undefined;
		}
	};
	// A closing modal layer still takes the pointer's target (html, overlay),
	// so the trigger's box is what says the mouse hasn't left it.
	const overTrigger = (event: PointerEvent) => {
		const el = triggerEl.current;
		const r = el?.getBoundingClientRect();
		return (
			(event.target instanceof Node && !!el?.contains(event.target)) ||
			(!!r &&
				event.clientX >= r.left &&
				event.clientX <= r.right &&
				event.clientY >= r.top &&
				event.clientY <= r.bottom)
		);
	};
	const suppressUntilOffTrigger = () => {
		stopSuppressing();
		suppressed.current = true;
		moveListener.current = event => {
			if (event.pointerType === 'mouse' && !overTrigger(event)) {
				stopSuppressing();
			}
		};
		document.addEventListener('pointermove', moveListener.current);
	};
	// Keep the [open] effect declared before the unmount effect, or the
	// listener leaks on unmount while open.
	// Opening or closing by any means drops pending timers and the pin
	React.useEffect(
		() => () => {
			clear();
			pinned.current = false;
			if (open && !closedByHook.current) {
				suppressUntilOffTrigger();
			}
			closedByHook.current = false;
		},
		[open]
	);
	React.useEffect(() => stopSuppressing, []);

	const leave: PointerHandler = event => {
		if (event.pointerType !== 'mouse') {
			return;
		}
		clear();
		if (
			latest.current.open &&
			latest.current.openedByHover &&
			!pinned.current
		) {
			timer.current = setTimeout(() => {
				closedByHook.current = true;
				latest.current.onClose();
			}, FLYOUT_CLOSE_DELAY_MS);
		}
	};

	const triggerProps: HoverPopupTriggerProps = {
		onPointerEnter: event => {
			if (event.pointerType !== 'mouse') {
				return;
			}
			clear();
			triggerEl.current = event.currentTarget;
			if (latest.current.open || suppressed.current) {
				return;
			}
			const trigger = event.currentTarget;
			timer.current = setTimeout(() => {
				// A click got there first
				if (latest.current.open) {
					return;
				}
				setHoverOpening(true);
				latest.current.onOpen(trigger);
			}, HOVER_OPEN_DELAY_MS);
		},
		onPointerLeave: leave,
		onPointerDown: () => {
			if (latest.current.open && latest.current.openedByHover) {
				clear();
				pinned.current = true;
			}
		}
	};

	const contentProps: HoverPopupContentProps = {
		onPointerEnter: event => {
			if (event.pointerType === 'mouse') {
				clear();
			}
		},
		onPointerLeave: leave,
		onInteractOutside: event => {
			if (
				event.target instanceof Node &&
				triggerEl.current?.contains(event.target)
			) {
				event.preventDefault();
			}
		}
	};

	return { triggerProps, contentProps, openedByHover };
};

export default useHoverPopup;
