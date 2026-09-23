export type SidebarVariant = 'rail' | 'collapsible' | 'rail-labeled';

/** Everything the playground panel can toggle. */
export type DemoSettings = {
	sidebarVariant: SidebarVariant;
	mode: 'light' | 'dark';
	brandColors: boolean;
	nestedLinks: boolean;
	showSidebar: boolean;
	showSidebarRailTitles: boolean;
	showSearch: boolean;
	showProfile: boolean;
	showNotifications: boolean;
	notificationDrawer: boolean;
	showThemeToggler: boolean;
	showAssistant: boolean;
	assistantBusy: boolean;
	chatSidebar: boolean;
	showAlert: boolean;
	clickableBrand: boolean;
	enableRefreshToken: boolean;
};

export const defaultSettings: DemoSettings = {
	sidebarVariant: 'collapsible',
	mode: 'light',
	brandColors: true,
	nestedLinks: true,
	showSidebar: true,
	showSidebarRailTitles: false,
	showSearch: true,
	showProfile: true,
	showNotifications: true,
	notificationDrawer: true,
	showThemeToggler: true,
	showAssistant: true,
	assistantBusy: false,
	chatSidebar: true,
	showAlert: false,
	clickableBrand: true,
	enableRefreshToken: false
};

const STORAGE_KEY = 'lumora-demo:settings';
const VARIANTS: SidebarVariant[] = ['rail', 'collapsible', 'rail-labeled'];

/**
 * Saved settings, then URL overrides on top (`?sidebarVariant=rail&mode=dark&
 * showSearch=0`), so a link or screenshot can pin an exact configuration.
 */
export const loadSettings = (): DemoSettings => {
	let saved: Partial<DemoSettings> = {};
	try {
		saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
	} catch {
		// Private mode or corrupt JSON: fall back to defaults
	}
	// Only known keys, so settings saved by an older playground drop out
	const settings = { ...defaultSettings };
	for (const key of Object.keys(defaultSettings) as Array<
		keyof DemoSettings
	>) {
		if (typeof saved[key] === typeof defaultSettings[key]) {
			Object.assign(settings, { [key]: saved[key] });
		}
	}

	const params = new URLSearchParams(window.location.search);
	for (const key of Object.keys(defaultSettings) as Array<
		keyof DemoSettings
	>) {
		const value = params.get(key);
		if (value === null) {
			continue;
		}
		if (key === 'sidebarVariant') {
			if (VARIANTS.includes(value as SidebarVariant)) {
				settings.sidebarVariant = value as SidebarVariant;
			}
		} else if (key === 'mode') {
			settings.mode = value === 'dark' ? 'dark' : 'light';
		} else {
			settings[key] = value === '1' || value === 'true';
		}
	}
	return settings;
};

export const saveSettings = (settings: DemoSettings) => {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
	} catch {
		// Storage unavailable: settings just won't survive a reload
	}
};
