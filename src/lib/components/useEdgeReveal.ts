import * as React from 'react';

/** Pause before the pointer at the edge brings the rail in, so brushing the
 * edge on the way to the browser's back button doesn't flash it. */
const REVEAL_DELAY_MS = 80;
/** Grace after the pointer leaves, so overshooting the rail doesn't hide it. */
const HIDE_DELAY_MS = 300;

/**
 * Shown state of the auto-hiding rail (`sidebarAutoHide`), like the macOS
 * Dock: it slides in while the pointer is at the window's edge or over the
 * rail, and while keyboard focus is inside it.
 *
 * Hover is tracked with `mouseover`, as in `useHoverExpand`: React bubbles it
 * through portals, so the rail's flyout tiles, search card and account menu
 * (and its backdrop) count as inside and keep it shown. Only focus the
 * keyboard put there counts, and only until the pointer moves on the page: a
 * clicked link keeps focus, and the rail must still hide once it leaves.
 */
const useEdgeReveal = (enabled: boolean) => {
	const insideEvents = React.useRef(new WeakSet<Event>());
	const revealTimer = React.useRef<ReturnType<typeof setTimeout>>(undefined);
	const hideTimer = React.useRef<ReturnType<typeof setTimeout>>(undefined);
	const [hovered, setHovered] = React.useState(false);
	const [keyboardFocused, setKeyboardFocused] = React.useState(false);

	const clearTimers = () => {
		clearTimeout(revealTimer.current);
		clearTimeout(hideTimer.current);
		revealTimer.current = undefined;
		hideTimer.current = undefined;
	};

	React.useEffect(() => {
		if (!enabled) {
			clearTimers();
			setHovered(false);
			setKeyboardFocused(false);
			return undefined;
		}
		const scheduleHide = () => {
			clearTimeout(revealTimer.current);
			revealTimer.current = undefined;
			if (hideTimer.current === undefined) {
				hideTimer.current = setTimeout(() => {
					hideTimer.current = undefined;
					setHovered(false);
					// The pointer is on the page, so the person is using it: a
					// menu closed with Escape hands focus back as keyboard focus
					setKeyboardFocused(false);
				}, HIDE_DELAY_MS);
			}
		};
		// Bubble phase: React has handled the event by now
		const hideOutside = (event: Event) => {
			if (!insideEvents.current.has(event)) {
				scheduleHide();
			}
		};
		document.addEventListener('mouseover', hideOutside);
		document.documentElement.addEventListener('mouseleave', scheduleHide);
		return () => {
			clearTimers();
			document.removeEventListener('mouseover', hideOutside);
			document.documentElement.removeEventListener(
				'mouseleave',
				scheduleHide
			);
		};
	}, [enabled]);

	const rootProps = {
		onMouseOver: (event: React.MouseEvent<HTMLElement>) => {
			insideEvents.current.add(event.nativeEvent);
			clearTimeout(hideTimer.current);
			hideTimer.current = undefined;
			if (!hovered && revealTimer.current === undefined) {
				revealTimer.current = setTimeout(() => {
					revealTimer.current = undefined;
					setHovered(true);
				}, REVEAL_DELAY_MS);
			}
		},
		onFocus: (event: React.FocusEvent<HTMLElement>) => {
			if (matchesFocusVisible(event.target)) {
				setKeyboardFocused(true);
			}
		},
		onBlur: (event: React.FocusEvent<HTMLElement>) => {
			const next = event.relatedTarget as Node | null;
			if (!next || !event.currentTarget.contains(next)) {
				setKeyboardFocused(false);
			}
		},
		onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => {
			if (event.key === 'Escape') {
				setKeyboardFocused(false);
				setHovered(false);
			}
		}
	};

	return { shown: enabled && (hovered || keyboardFocused), rootProps };
};

const matchesFocusVisible = (element: Element) => {
	try {
		return element.matches(':focus-visible');
	} catch {
		// A browser (or jsdom) without the selector: treat focus as keyboard
		return true;
	}
};

export default useEdgeReveal;
