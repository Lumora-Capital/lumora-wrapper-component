import * as React from 'react';

/** MUI's `md` breakpoint (900px), the shell's phone / desktop switch: `down('md')`. */
const MOBILE_MEDIA_QUERY = '(max-width: 899.95px)';

const subscribeTo = (query: string) => (onChange: () => void) => {
	if (typeof window === 'undefined' || !window.matchMedia) {
		return () => {};
	}
	const list = window.matchMedia(query);
	list.addEventListener?.('change', onChange);
	return () => list.removeEventListener?.('change', onChange);
};

/**
 * Whether a media query matches, kept up to date. False on the server and
 * where `matchMedia` is missing (jsdom), as MUI's `useMediaQuery` was.
 */
export function useMediaQuery(query: string): boolean {
	const subscribe = React.useMemo(() => subscribeTo(query), [query]);
	return React.useSyncExternalStore(
		subscribe,
		() =>
			typeof window !== 'undefined' && window.matchMedia
				? window.matchMedia(query).matches
				: false,
		() => false
	);
}

/** Phones and small tablets (below `md`). */
export const useIsMobile = () => useMediaQuery(MOBILE_MEDIA_QUERY);
