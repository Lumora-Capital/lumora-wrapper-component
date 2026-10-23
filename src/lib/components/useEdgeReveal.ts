import * as React from 'react';

/** Pause before the pointer at the edge brings the rail in, so brushing the
 * edge on the way to the browser's back button doesn't flash it. */
const REVEAL_DELAY_MS = 80;
/** Grace after the pointer leaves, so overshooting the rail doesn't hide it. */
const HIDE_DELAY_MS = 300;
/** How close to the window's left edge the pointer is before the edge glows,
 * hinting that the hidden rail comes in there. */
const NEAR_EDGE_PX = 32;

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
	const [nearEdge, setNearEdge] = React.useState(false);
	/** The edge glow, centred on the pointer's height through `--edge-glow-y`
	 * (set directly, so following the pointer doesn't re-render the shell). */
	const glowRef = React.useRef<HTMLElement>(null);

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
			setNearEdge(false);
			return undefined;
		}
		const trackNearEdge = (event: PointerEvent) => {
			if (event.pointerType !== 'mouse') {
				return;
			}
			const near = event.clientX <= NEAR_EDGE_PX;
			if (near) {
				glowRef.current?.style.setProperty(
					'--edge-glow-y',
					`${event.clientY}px`
				);
			}
			setNearEdge(near);
		};
		const leaveWindow = () => setNearEdge(false);
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
		document.addEventListener('pointermove', trackNearEdge, {
			passive: true
		});
		document.documentElement.addEventListener('mouseleave', scheduleHide);
		document.documentElement.addEventListener('mouseleave', leaveWindow);
		return () => {
			clearTimers();
			document.removeEventListener('mouseover', hideOutside);
			document.removeEventListener('pointermove', trackNearEdge);
			document.documentElement.removeEventListener(
				'mouseleave',
				scheduleHide
			);
			document.documentElement.removeEventListener(
				'mouseleave',
				leaveWindow
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

	const shown = enabled && (hovered || keyboardFocused);
	// The edge glows while the pointer nears it, until the rail is in
	return {
		shown,
		nearEdge: enabled && nearEdge && !shown,
		glowRef,
		rootProps
	};
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
