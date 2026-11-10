import * as React from 'react';
import { FLYOUT_CLOSE_DELAY_MS } from './useFlyoutIntent';

/** Rest on a trigger this long before a hover opens its popup, so sweeping
 * the pointer past it doesn't flash the popup open. */
export const HOVER_OPEN_DELAY_MS = 150;

export type HoverPopupProps = {
	onPointerEnter: (event: React.PointerEvent<HTMLElement>) => void;
	onPointerLeave: (event: React.PointerEvent<HTMLElement>) => void;
};

/**
 * Hover intent for a popup that otherwise opens on click. A mouse resting on
 * the trigger opens it; once hover-opened, leaving both the trigger and the
 * popup closes it after the flyouts' grace. Spread `hoverProps` on the
 * trigger and on the popup's content. Touch and pen are ignored, and a popup
 * opened any other way (click, keyboard) has `openedByHover` false, so it
 * stays modal and closes only as before. `openedByHover` keeps its value
 * through the close, for close-focus handling.
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
	React.useEffect(() => clear, []);

	const hoverProps: HoverPopupProps = {
		onPointerEnter: event => {
			if (event.pointerType !== 'mouse') {
				return;
			}
			clear();
			if (latest.current.open) {
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
		onPointerLeave: event => {
			if (event.pointerType !== 'mouse') {
				return;
			}
			clear();
			if (latest.current.open && latest.current.openedByHover) {
				timer.current = setTimeout(
					() => latest.current.onClose(),
					FLYOUT_CLOSE_DELAY_MS
				);
			}
		}
	};
	return { hoverProps, openedByHover };
};

export default useHoverPopup;
