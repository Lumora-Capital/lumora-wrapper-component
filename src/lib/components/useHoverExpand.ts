import * as React from 'react';

/** Pause before a hover opens the panel, so sweeping the pointer across the
 * rail on the way to the page doesn't flash it open. */
const HOVER_OPEN_DELAY_MS = 100;

/**
 * Open state of the hover sidebar: the panel shows while the pointer is over
 * it, or while pinned open (the rail's search icon pins it so the field can
 * take focus). A pin lasts until focus or a click lands outside, or Escape.
 *
 * Hover is tracked with `mouseover` / `mousemove` rather than enter/leave:
 * React bubbles them through portals, so the open account menu counts as
 * inside, and they still fire on the page once a closing menu's backdrop is
 * gone, where React would send no leave event. The menu's invisible backdrop
 * covers the whole screen, so it counts as inside only over the panel: moving
 * off the panel with the menu open closes both (`mousemove`, since the
 * pointer never crosses into a new element there).
 */
const useHoverExpand = () => {
	const rootRef = React.useRef<HTMLDivElement>(null);
	const openTimer = React.useRef<ReturnType<typeof setTimeout>>(undefined);
	// Native events that reached the panel's React tree on their way up
	const insideEvents = React.useRef(new WeakSet<Event>());
	const [hovered, setHovered] = React.useState(false);
	const [pinned, setPinned] = React.useState(false);

	const clearOpenTimer = () => {
		clearTimeout(openTimer.current);
		openTimer.current = undefined;
	};

	React.useEffect(() => {
		// Bubble phase: React has handled the event by now
		const closeOutside = (event: Event) => {
			if (!insideEvents.current.has(event)) {
				clearOpenTimer();
				setHovered(false);
			}
		};
		const closeOnExit = () => {
			clearOpenTimer();
			setHovered(false);
		};
		document.addEventListener('mouseover', closeOutside);
		document.addEventListener('mousemove', closeOutside);
		document.documentElement.addEventListener('mouseleave', closeOnExit);
		return () => {
			clearOpenTimer();
			document.removeEventListener('mouseover', closeOutside);
			document.removeEventListener('mousemove', closeOutside);
			document.documentElement.removeEventListener(
				'mouseleave',
				closeOnExit
			);
		};
	}, []);

	React.useEffect(() => {
		if (!pinned) {
			return undefined;
		}
		const unpinOutside = (event: PointerEvent) => {
			if (!rootRef.current?.contains(event.target as Node)) {
				setPinned(false);
			}
		};
		document.addEventListener('pointerdown', unpinOutside);
		return () => document.removeEventListener('pointerdown', unpinOutside);
	}, [pinned]);

	const trackPointer = (event: React.MouseEvent<HTMLDivElement>) => {
		const target = event.target as Element;
		if (target.classList?.contains('MuiBackdrop-root')) {
			const rect = rootRef.current?.getBoundingClientRect();
			const overPanel =
				rect &&
				event.clientX >= rect.left &&
				event.clientX <= rect.right &&
				event.clientY >= rect.top &&
				event.clientY <= rect.bottom;
			if (!overPanel) {
				return;
			}
		}
		insideEvents.current.add(event.nativeEvent);
		if (!hovered && openTimer.current === undefined) {
			openTimer.current = setTimeout(() => {
				openTimer.current = undefined;
				setHovered(true);
			}, HOVER_OPEN_DELAY_MS);
		}
	};

	const rootProps = {
		ref: rootRef,
		onMouseOver: trackPointer,
		onMouseMove: trackPointer,
		// Focus moving to an element outside unpins; a null target (the
		// focused element unmounted as the panel swapped layouts) does not.
		onBlur: (event: React.FocusEvent<HTMLDivElement>) => {
			const next = event.relatedTarget as Node | null;
			if (next && !event.currentTarget.contains(next)) {
				setPinned(false);
			}
		},
		onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => {
			if (event.key === 'Escape') {
				setPinned(false);
			}
		}
	};

	return {
		expanded: hovered || pinned,
		pin: () => setPinned(true),
		rootProps
	};
};

export default useHoverExpand;
