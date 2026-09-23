# Lumora Wrapper Component

A React + MUI layout for authenticated Lumora apps: a full-height sidebar (three desktop variants plus a mobile drawer) holding the brand, your global search, navigation, notifications and the user menu; a content area; a floating Nexa button; and a session gate that redirects to login when no tokens are stored. There is no header on desktop; mobile gets a slim top bar with the menu button.

## Installation

The package installs straight from GitHub (the built `dist/` folder is committed for this reason).

```bash
npm install https://github.com/Volenday/lumora-wrapper-component.git
# a branch, commit or tag
npm install https://github.com/Volenday/lumora-wrapper-component.git#v1.1.0
```

For the private repo, add a GitHub token with the `repo` scope to `~/.npmrc`:

```bash
npm config set //npm.pkg.github.com/:_authToken YOUR_TOKEN_HERE
```

Peer dependencies: `react`, `react-dom`, `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`, `axios`.

The default logo is loaded from `/lumora-logo.svg`, so copy `dist/lumora-logo.svg` into your app's public folder, or pass your own `logo`.

## Quick start

```tsx
import { Dashboard, Settings } from '@mui/icons-material';
import {
	LumoraWrapper,
	clearAuthTokens
} from '@lumora/lumora-wrapper-component';

const links = [
	{ text: 'Dashboard', path: '/dashboard', icon: <Dashboard /> },
	{ text: 'Settings', path: '/settings', icon: <Settings /> }
];

const Layout = ({ children }) => (
	<LumoraWrapper
		apiBaseUrl='https://dev.api.lumora.capital'
		redirectToLogin={() => router.push('/login')}
		onLogout={async () => {
			await api.logout();
			clearAuthTokens();
			router.push('/login');
		}}
		appName='CENTRA'
		sidebarVariant='collapsible'
		searchComponent={<GlobalSearch />}
		sidebarLinks={links}
		activePath={pathname}
		onLinkClick={path => router.push(path)}
	>
		{children}
	</LumoraWrapper>
);
```

## Session and tokens

On mount the wrapper reads tokens from `localStorage` (`lumoraAccessToken`, `lumoraRefreshToken`, `lumoraUser`; the old `accessToken` / `refreshToken` / `user` keys are migrated automatically). With no token it clears storage and calls `redirectToLogin`; otherwise it renders and passes the stored user to `onVerify`.

Store tokens after your login flow with the exported helpers:

```ts
import {
	storeAuthTokens,
	clearAuthTokens
} from '@lumora/lumora-wrapper-component';

storeAuthTokens(accessToken, refreshToken, {
	name,
	email,
	profilePicture,
	role
});
```

With `enableRefreshToken`, the wrapper also checks tokens on mount: if only a refresh token is stored it calls `POST {apiBaseUrl}/auth/refresh` and stores the result, or clears the session and calls `redirectToLogin` if that fails.

`onLogout` is yours: call your logout API and clear tokens there. The wrapper calls it from the user menu at the bottom of the sidebar.

Also exported: `getAuthTokens`, `isAuthenticated`, `getCurrentUser`, `getAuthErrorMessage`, `logAuthError`, `AuthError`, `AUTH_ERROR_CODES`.

## Props

Required: `children`, `apiBaseUrl`, `redirectToLogin`, `onLogout`.

### Layout

| Prop                    | Type                                                  | Default  | Description                                                                                                                                                                                                                                         |
| ----------------------- | ----------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `showSidebar`           | `boolean`                                             | `true`   | Show the sidebar (desktop) / drawer (mobile).                                                                                                                                                                                                       |
| `sidebarVariant`        | `'rail' \| 'collapsible' \| 'rail-labeled'`           | `'rail'` | `rail`: fixed 100px icon rail. `collapsible`: 264px panel with a header (toggle + brand) that collapses to a 72px icon rail, persisted to localStorage. `rail-labeled`: fixed 80px rail with labels under the icons. Mobile always uses the drawer. |
| `showSidebarRailTitles` | `boolean`                                             | `false`  | `rail` only: caption under each icon.                                                                                                                                                                                                               |
| `sidebarLinks`          | `SidebarLink[]`                                       | `[]`     | Main navigation.                                                                                                                                                                                                                                    |
| `secondarySidebarLinks` | `SidebarLink[]`                                       | `[]`     | Navigation pinned above the notifications.                                                                                                                                                                                                          |
| `activePath`            | `string`                                              | -        | Highlights the matching link and opens its parents.                                                                                                                                                                                                 |
| `onLinkClick`           | `(path: string) => void`                              | -        | Called with the clicked link's path.                                                                                                                                                                                                                |
| `alertProps`            | `{ show, title, message, buttonText, onButtonClick }` | -        | Card under the sidebar links (expanded panel / rail / drawer).                                                                                                                                                                                      |
| `GlobalChatSidebar`     | `React.ComponentType`                                 | -        | Panel shown beside the content while `useChatSidebar().isOpen`.                                                                                                                                                                                     |
| `useChatSidebar`        | `() => { isOpen: boolean }`                           | -        | Hook reporting whether the chat panel is open.                                                                                                                                                                                                      |

### Sidebar top: brand and search

| Prop              | Type              | Default       | Description                                                                                                                                                                                             |
| ----------------- | ----------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appName`         | `string`          | `'Dashboard'` | Brand wordmark (sidebar header and mobile top bar; the narrow rails show the logo only).                                                                                                                |
| `logo`            | `React.ReactNode` | Lumora logo   | Brand logo. On the collapsed rail it doubles as the expand button.                                                                                                                                      |
| `onBrandClick`    | `() => void`      | -             | Makes the brand a button.                                                                                                                                                                               |
| `searchComponent` | `React.ReactNode` | -             | Your global search, under the brand. Collapsed, it becomes a search icon that expands the sidebar and focuses the first input inside your component; on the fixed rails the icon opens it in a popover. |

### Sidebar bottom: notifications and user

| Prop                         | Type                                                    | Default | Description                                                             |
| ---------------------------- | ------------------------------------------------------- | ------- | ----------------------------------------------------------------------- |
| `showNotifications`          | `boolean`                                               | `true`  | Notifications row (a bell with a badge on the narrow rails).            |
| `notificationCount`          | `number`                                                | `0`     | Unread count.                                                           |
| `NotificationSidebarContent` | `React.ComponentType<{ onClose }>`                      | -       | When set, the notifications row opens a right drawer with this content. |
| `showProfile`                | `boolean`                                               | `true`  | User row (avatar only on the narrow rails). Clicking it opens the menu. |
| `userName`                   | `string`                                                | -       |                                                                         |
| `userRole`                   | `string`                                                | -       | Shown under the name.                                                   |
| `userAvatar`                 | `string`                                                | -       | Avatar image URL (falls back to the name's initial).                    |
| `showSettings`               | `boolean`                                               | `true`  | Settings entry in the user menu.                                        |
| `onSettingsClick`            | `() => void`                                            | -       |                                                                         |
| `showThemeToggler`           | `boolean`                                               | `false` | Dark mode switch in the user menu.                                      |
| `onThemeToggle`              | `() => void`                                            | -       |                                                                         |
| `onVerify`                   | `(user: { name, email, profilePicture, role }) => void` | -       | Called once with the stored user after the session check.               |

### Nexa

| Prop               | Type         | Default | Description                               |
| ------------------ | ------------ | ------- | ----------------------------------------- |
| `showAssistant`    | `boolean`    | `false` | Floating Nexa button at the bottom right. |
| `onAssistantClick` | `() => void` | -       | Usually toggles the chat panel.           |
| `assistantActive`  | `boolean`    | `false` | Highlight while the chat is open.         |
| `assistantBusy`    | `boolean`    | `false` | Animated ring while a chat is ongoing.    |

### Session

| Prop                 | Type                                       | Default | Description                                                                                                      |
| -------------------- | ------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `apiBaseUrl`         | `string`                                   | -       | Base URL for the refresh call.                                                                                   |
| `redirectToLogin`    | `() => void`                               | -       | Called when there is no session. Keep it stable (e.g. `useCallback`); the session check re-runs when it changes. |
| `onLogout`           | `(error?: Error) => void \| Promise<void>` | -       | Logout handler.                                                                                                  |
| `enableRefreshToken` | `boolean`                                  | `false` | Token check / refresh on mount (see above).                                                                      |

### Theme and colors

| Prop                                      | Type                | Default                  | Description                                                                            |
| ----------------------------------------- | ------------------- | ------------------------ | -------------------------------------------------------------------------------------- |
| `theme`                                   | `'light' \| 'dark'` | `'light'`                | Mode of the wrapper's internal MUI theme.                                              |
| `accentColor`                             | `string`            | `'#01584f'`              | Brand accent; default for `sidebarAccentColor`.                                        |
| `sidebarAccentColor`                      | `string`            | `accentColor`            | Fill of the active / hovered sidebar item.                                             |
| `sidebarForegroundColor`                  | `string`            | accent / white           | Idle sidebar text and icons, including search, notifications and user rows.            |
| `activeSidebarForegroundColor`            | `string`            | auto-contrast            | Text and icon on the highlighted item.                                                 |
| `groupAccentColor`                        | `string`            | tint of the accent       | Tint behind grouped sub-items.                                                         |
| `sidebarBackgroundColor`                  | `string`            | `'#ffffff'` / dark paper | Collapsible sidebar surface.                                                           |
| `sidebarHeaderBackgroundColor`            | `string`            | sidebar surface          | Sidebar header and mobile top bar; a custom color switches the brand to auto-contrast. |
| `contentBackgroundColor`                  | `string`            | `'#f2f9fc'` / dark       | Content area (and `rail` sidebar) background.                                          |
| `style`, `sidebarStyles`, `contentStyles` | `SxProps<Theme>`    | -                        | `sx` overrides for the root, sidebar and content.                                      |

Deprecated, accepted so existing apps still compile:

- `customNavbar` / `customNavbarProps`: use `searchComponent`. Until you switch, the component is rendered in the search slot.
- No effect (the header is gone): `showHeader`, `headerStyles`, `showSearchbar`, `searchValue`, `onSearchChange`, `onSearchSubmit`, `navbarBackground`, `navbarAccentColor`, `rightExtraContent`, `pageName`, `userEmail`, `onProfileClick`, `onAccountClick`, `sidebarSectionTitle`.

To match the wrapper's look in your own outer theme: `createTheme(getDesignTokens(mode))`.

### SidebarLink

```ts
type SidebarLink = {
	text: string;
	path?: string; // optional when the link only groups subitems
	icon: React.ReactNode;
	subitems?: SidebarSubLink[];
};

type SidebarSubLink = {
	text: string;
	path?: string;
	icon?: React.ReactNode;
	subitems?: SidebarSubLink[]; // a section: gives a third level
};
```

`CollapsibleSidebar` is also exported for use on its own.

## Development

```bash
npm install
npm run dev          # playground at http://localhost:5173
npm test             # Jest + Testing Library
npm run typecheck
npm run build        # library -> dist/
```

### Playground

`npm run dev` opens a demo app (`src/demo/`) wrapped in LumoraWrapper. The button at the top right opens a panel that toggles props live: sidebar variant, light/dark, nested links, a stand-in search component, notifications and their drawer, the user menu, the Nexa button and chat panel, alert card, brand colors and the token check. "Log out" clears the tokens so you can watch the session gate redirect. Settings survive reloads, and any of them can be set from the URL, e.g. `?sidebarVariant=rail&mode=dark&showSearch=0`. Narrow the window below 900px for the mobile drawer.

See [TESTING.md](TESTING.md) for the test suites.

### Releasing

Consumers install from GitHub, so `dist/` is committed. Run `npm run build` and commit `dist/` with every change to `src/lib`.
