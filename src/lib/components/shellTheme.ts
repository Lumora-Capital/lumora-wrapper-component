import * as React from 'react';

/**
 * The shell's light/dark mode. LumoraWrapper provides its `theme` prop; the
 * components rendered on their own (CollapsibleSidebar, the skeleton) follow
 * the host's switch, html[data-color-scheme="dark"], instead.
 */
export const ShellThemeContext = React.createContext<
	'light' | 'dark' | undefined
>(undefined);

const readHtmlScheme = () =>
	typeof document !== 'undefined' &&
	document.documentElement.getAttribute('data-color-scheme') === 'dark';

const subscribeHtmlScheme = (onChange: () => void) => {
	if (
		typeof MutationObserver === 'undefined' ||
		typeof document === 'undefined'
	) {
		return () => {};
	}
	const observer = new MutationObserver(onChange);
	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ['data-color-scheme']
	});
	return () => observer.disconnect();
};

/** Whether the shell is dark: the wrapper's `theme`, else the host's html switch. */
export const useIsDark = (): boolean => {
	const mode = React.useContext(ShellThemeContext);
	const htmlDark = React.useSyncExternalStore(
		subscribeHtmlScheme,
		readHtmlScheme,
		() => false
	);
	return mode ? mode === 'dark' : htmlDark;
};

/**
 * Attributes for a node the shell draws: it re-reads the colour tokens and
 * gets the scoped resets (styles.css), and carries the shell's mode so a
 * portalled menu is dark even where the host sets no html switch.
 */
export const useShellScopeProps = () => {
	const isDark = useIsDark();
	return {
		'data-lw-scope': '',
		'data-lw-theme': isDark ? 'dark' : 'light'
	} as const;
};
