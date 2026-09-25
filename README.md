# Lumora Wrapper Component

The shared app shell for Lumora apps (Centra, Nexa, Xpdite, Polymer): a full-height sidebar with the brand, **Ask Nexa**, your global search, navigation and the signed-in user; a padded content area; a floating Nexa chat popup; and a session gate that redirects to login when no tokens are stored.

```
┌──────────────┬────────────────────────────────────────────┐
│ ▭  CENTRA // │                                            │
│ [Ask Nexa ⌘J]│                                            │
│ [Search… ⌘K] │   Deals            ← your page (children)  │
│              │                                            │
│ ☆ My Pins    │   40px padding, configurable per page      │
│ ▦ Dashboard  │                                            │
│ ▣ Deals      │                          ┌──────────────┐  │
│ ⚇ CRM      › │                          │ Nexa chat    │  │
│              │                          │ (floating    │  │
│ ☊ Help     › │                          │  popup)      │  │
├──────────────┤                          └──────────────┘  │
│ (GP) Gabriel │                                            │
│       ◔ 26   │                                            │
└──────────────┴────────────────────────────────────────────┘
```

There is no header on desktop. On phones, a slim top bar shows the brand and a bottom bar puts Menu, your pinned pages, Nexa, Search and the user one tap away, with notifications at the top right ([Mobile](#7-mobile)).

- [Installation](#installation)
- [Quick start](#quick-start) — the minimum to render
- [Integrating into your app](#integrating-into-your-app) — a complete Next.js setup, section by section
- [Props checklist](#props-checklist) — what to pass, at a glance
- [Props reference](#props-reference)
- [Session and tokens](#session-and-tokens)
- [Migrating from the header version](#migrating-from-the-header-version)
- [Development](#development)

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

The default logo is loaded from `/lumora-logo.svg`: copy `dist/lumora-logo.svg` into your app's `public/` folder, or pass your own `logo`.

## Quick start

Four props are required; everything else has a default.

```jsx
'use client';

import { LumoraWrapper } from '@lumora/lumora-wrapper-component';

export default function AppShell({ children }) {
	return (
		<LumoraWrapper
			apiBaseUrl='https://dev.api.lumora.capital' // required
			redirectToLogin={redirectToLogin} // required, keep it stable
			onLogout={handleLogout} // required
			sidebarVariant='collapsible'
			appName='CENTRA'
			sidebarLinks={links}
		>
			{children}
		</LumoraWrapper>
	);
}
```

> The wrapper reads `localStorage` and `window`, so in Next.js it must live in a client component (`'use client'`).

## Integrating into your app

This is the full Centra setup, in the order the sidebar renders. Copy what you need.

### 1. The shell component

```jsx
// app/(app)/AppShell.jsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import {
	LumoraWrapper,
	clearAuthTokens
} from '@lumora/lumora-wrapper-component';
import GlobalSearch from '@/components/GlobalSearch';
import NexaChat from '@/components/NexaChat';
import NotificationsPanel from '@/components/NotificationsPanel';
import { mainLinks, secondaryLinks } from './navigation';
import { useNexaStore } from '@/stores/nexa';
import { useSessionStore } from '@/stores/session';
import { useThemeStore } from '@/stores/theme';
import { centraColors, userMenuItems, fullBleedRoutes } from './shellConfig';

// A module-level hook, so it is called the same way on every render
const useChatSidebar = () => ({ isOpen: useNexaStore(s => s.isOpen) });

export default function AppShell({ children }) {
	const router = useRouter();
	const pathname = usePathname();
	const user = useSessionStore(s => s.user);
	const setUser = useSessionStore(s => s.setUser);
	const { mode, toggle } = useThemeStore();
	const nexa = useNexaStore();
	const unread = useNotificationCount();

	// Must be stable: the session check re-runs when this changes
	const redirectToLogin = useCallback(
		() => router.replace('/login'),
		[router]
	);

	const handleLogout = async () => {
		await api.post('/auth/logout');
		clearAuthTokens();
		router.replace('/login');
	};

	return (
		<LumoraWrapper
			// Session
			apiBaseUrl={process.env.NEXT_PUBLIC_API_BASE_URL}
			redirectToLogin={redirectToLogin}
			onLogout={handleLogout}
			onVerify={setUser} // the stored user, once, after the session check
			// Layout
			sidebarVariant='collapsible'
			sidebarLinks={mainLinks}
			secondarySidebarLinks={secondaryLinks}
			activePath={pathname}
			onLinkClick={path => router.push(path)}
			contentPadding={fullBleedRoutes.includes(pathname) ? 0 : undefined}
			// Sidebar top
			appName='CENTRA'
			onBrandClick={() => router.push('/dashboard')}
			searchComponent={<GlobalSearch />}
			// Nexa
			showAssistant
			onAssistantClick={nexa.toggle}
			assistantActive={nexa.isOpen}
			assistantBusy={nexa.isStreaming}
			GlobalChatSidebar={NexaChat}
			useChatSidebar={useChatSidebar}
			onChatClose={nexa.close}
			// Sidebar bottom
			userName={user?.name}
			userRole={user?.role}
			userAvatar={user?.profilePicture}
			notificationCount={unread}
			NotificationSidebarContent={NotificationsPanel}
			userMenuItems={userMenuItems(router)}
			onSettingsClick={() => router.push('/settings/profile')}
			showThemeToggler
			theme={mode}
			onThemeToggle={toggle}
			// Look
			{...(mode === 'light' ? centraColors : {})}
		>
			{children}
		</LumoraWrapper>
	);
}
```

### 2. Navigation links

`icon` is required on top-level links. A link with `subitems` is a group (it expands; `path` optional). A sub-item with its own `subitems` is a section, giving a third level.

```jsx
// app/(app)/navigation.jsx
import StarBorderRounded from '@mui/icons-material/StarBorderRounded';
import InsertChartOutlined from '@mui/icons-material/InsertChartOutlined';
import AccountBalanceOutlined from '@mui/icons-material/AccountBalanceOutlined';
import PeopleOutline from '@mui/icons-material/PeopleOutline';
import HeadsetMicOutlined from '@mui/icons-material/HeadsetMicOutlined';

export const mainLinks = [
	{ text: 'My Pins', path: '/pins', icon: <StarBorderRounded /> },
	{ text: 'Dashboard', path: '/dashboard', icon: <InsertChartOutlined /> },
	{ text: 'Deals', path: '/deals', icon: <AccountBalanceOutlined /> },
	{
		text: 'CRM',
		icon: <PeopleOutline />,
		subitems: [
			{ text: 'People', path: '/crm/people' },
			{ text: 'Companies', path: '/crm/companies' },
			{
				text: 'Marketing', // a section: third level
				subitems: [
					{ text: 'Campaigns', path: '/crm/marketing/campaigns' }
				]
			}
		]
	}
];

// Pinned to the bottom, above the user
export const secondaryLinks = [
	{ text: 'Help & support', path: '/help', icon: <HeadsetMicOutlined /> }
];
```

`activePath` highlights the matching link and opens every group above it. `onLinkClick(path)` fires for any page link; the wrapper never navigates by itself.

A link without `subitems` can carry an **`action`**: a small button at the end of its row that runs something next to the page instead of opening it. Clicking the row still navigates; clicking the button only runs `onClick`.

```
│ ☊ Help & support     [+] │   row → /help (past requests)   + → your request popup
```

```jsx
{
	text: 'Help & support',
	path: '/help',
	icon: <HeadsetMicOutlined />,
	action: { label: 'New request', icon: <AddRounded />, onClick: openRequestDialog }
}
```

The button shows in the expanded sidebar and in the mobile Menu sheet (which closes so your popup appears over the page). The collapsed and narrow rails have no room for it, so also offer the action somewhere always reachable, such as the user menu ([example](#support-requests)).

### 3. Global search

Pass your own component as `searchComponent`; the wrapper only places it.

- Expanded sidebar: rendered full width under Ask Nexa. A height of 44px matches the Ask Nexa button.
- Collapsed sidebar: shown as a search icon; clicking it expands the sidebar and **focuses the first `input` / `textarea` inside your component**.
- `rail` / `rail-labeled` variants: the icon opens your component in a popover beside the rail.
- Mobile: at the top of the drawer.

To show the same shortcut hint as Ask Nexa, use the exported `Kbd`:

```jsx
import { Kbd } from '@lumora/lumora-wrapper-component';

<TextField
	fullWidth
	placeholder='Search deals, companies, people...'
	slotProps={{
		input: { endAdornment: <Kbd keys={['⌘', 'K']} /> }
	}}
/>;
```

Your component handles its own ⌘K shortcut; the wrapper does not bind it.

### 4. Nexa (Ask Nexa + chat popup)

| You pass            | What it does                                                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `showAssistant`     | Shows **Ask Nexa** under the brand (an icon on collapsed / narrow rails).                                            |
| `onAssistantClick`  | Called on click and on **⌘J / Ctrl+J**. Usually toggles your chat store.                                             |
| `GlobalChatSidebar` | Your chat UI. It renders inside a **floating popup** (bottom right) over the page; the content keeps its full width. |
| `useChatSidebar`    | A hook returning `{ isOpen }`; the popup is shown while `isOpen` is true.                                            |
| `onChatClose`       | Called on Esc while the popup is open. Put a close button inside your chat UI too.                                   |
| `assistantActive`   | Highlights the Nexa button while the chat is open.                                                                   |
| `assistantBusy`     | Animated border while a reply is streaming.                                                                          |

The popup stays mounted after it is first opened, so an unfinished conversation survives closing it. It is 420px wide (`chatPanelWidth`), at most 720px tall, and on phones it fills the screen above the bottom bar (tap Nexa again to close it). Your chat UI should fill the popup (`height: 100%`, flex column).

A Zustand store for it:

```js
// stores/nexa.js
import { create } from 'zustand';

export const useNexaStore = create(set => ({
	isOpen: false,
	isStreaming: false,
	toggle: () => set(s => ({ isOpen: !s.isOpen })),
	close: () => set({ isOpen: false })
}));
```

Options: `chatPanelPosition='left'` opens it beside the sidebar instead; `assistantPlacement='floating'` moves the Nexa button itself to the bottom-right corner (the popup then sits above it); `assistantShortcut={false}` turns off ⌘J; `chatPanelMode='inline'` restores the old side column that narrows the content.

### 5. User, notifications and the user menu

The user sits at the bottom of the sidebar with the notifications bell beside it. Clicking the user opens:

```
┌──────────────────────────┐
│ (GP) Gabriel Paet        │  userName, userRole, userAvatar
│      Standard user       │
├──────────────────────────┤
│ 🔔 Notifications      25 │  showNotifications, notificationCount
│ 📣 What's New          1 │  userMenuItems (yours)
│ ⚙  Settings              │  showSettings, onSettingsClick
├──────────────────────────┤
│ — THEME                  │  showThemeToggler, theme, onThemeToggle
│ [ Light ][  Dark  ]      │
├──────────────────────────┤
│ ↪ Log out                │  onLogout
└──────────────────────────┘
```

- The wrapper does not fill in the user by itself: pass `userName`, `userRole` and `userAvatar`. `onVerify` hands you the stored user once after the session check, which is a convenient place to put it in your store. Without an avatar, the initials of `userName` are shown.
- The bell and the Notifications entry both open a right-hand drawer with your `NotificationSidebarContent` (it receives `onClose`). Without it they only show the count.
- `userMenuItems` adds your own entries between Notifications and Settings:

```jsx
// app/(app)/shellConfig.jsx
import CampaignOutlined from '@mui/icons-material/CampaignOutlined';

export const userMenuItems = router => [
	{
		key: 'whats-new',
		label: "What's New",
		icon: <CampaignOutlined fontSize='small' />,
		badge: 1, // red pill; hidden when 0
		onClick: () => router.push('/whats-new')
	}
];
```

- The Light / Dark switch calls `onThemeToggle` when the other mode is picked; you own the mode and pass it back as `theme`.

#### Support requests

Users can open a support request from anywhere, without leaving their page, while Help & support stays the page with their past requests. Put the same handler in two places:

```jsx
const [requestOpen, setRequestOpen] = useState(false);
const openRequestDialog = () => setRequestOpen(true);

// 1. The + on the Help & support row (expanded sidebar, mobile Menu sheet)
export const secondaryLinks = [
	{
		text: 'Help & support',
		path: '/help',
		icon: <HeadsetMicOutlined />,
		action: { label: 'New request', icon: <AddRounded />, onClick: openRequestDialog }
	}
];

// 2. The user menu (always reachable: collapsed rail, narrow rails, mobile Account)
userMenuItems={[
	{
		key: 'support-request',
		label: 'Submit a request',
		icon: <SupportAgentOutlined fontSize='small' />,
		onClick: openRequestDialog
	}
]}

// Your existing popup, rendered once in the shell
<SupportRequestDialog open={requestOpen} onClose={() => setRequestOpen(false)} />
```

Because `onClick` closes over state, build `secondaryLinks` inside your shell component (or with `useMemo`) rather than at module level.

### 6. Content spacing and full-width pages

Everything you render as `children` goes in the content area, which has 40px of padding from `md` up (16px on phones). Most Centra pages need nothing else. Two layouts come up:

**List pages** (Deals, CRM lists, dashboards): the title, toolbar, tabs card and grid all sit inside the padding. Render them as they are.

```
┌─ content area ──────────────────────────────┐
│ ← 40px →  Deals              [toolbar] [+]  │
│           ┌ tabs ──────────────────────────┐│
│           └────────────────────────────────┘│
│           [card] [card] [card]              │
└─────────────────────────────────────────────┘
```

**Detail pages** (a deal, a company): a white header with the back link, stage stepper, title and tabs runs edge to edge, and the body below keeps the padding. Wrap the header in `FullBleedSection`:

```
┌─ content area ──────────────────────────────┐
│█ ‹ Back to Deals   ● ─ ○ ─ ○ ─ ○ ─ ○       █│  ← FullBleedSection sticky
│█ Project Cotton            [Confirm move]  █│    (white, edge to edge,
│█ Overview  Pricing  Securities  …          █│     pinned while scrolling)
│           [Deal information   ] [Updates ]  │  ← padded body
│           [Pricing            ]             │
└─────────────────────────────────────────────┘
```

```jsx
import { FullBleedSection } from '@lumora/lumora-wrapper-component';

export default function DealPage() {
	return (
		<>
			<FullBleedSection sticky>
				<BackLink />
				<StageStepper />
				<DealTitle />
				<DealTabs />
			</FullBleedSection>

			<DealBody />
		</>
	);
}
```

| `FullBleedSection` prop | Default              | Description                                                                                                |
| ----------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------- |
| `sticky`                | `false`              | Pin to the top while the page scrolls (below the mobile top bar on phones).                                |
| `flushTop`              | `true`               | Start flush with the top of the content area. `false` for a band further down.                             |
| `inset`                 | `true`               | Keep the page padding inside, so its content lines up with the body. `false` lets content touch the edges. |
| `background`            | `'background.paper'` | Band color.                                                                                                |
| `divider`               | `true`               | Hairline under the band.                                                                                   |
| `sx`                    | —                    | Extra styles.                                                                                              |

It follows `contentPadding` automatically, including per-breakpoint values, through the `--lumora-content-padding` variable the wrapper sets.

**Changing the padding** with `contentPadding`: theme spacing units, a CSS length, or per breakpoint.

```jsx
contentPadding={5}                   // 40px everywhere
contentPadding={{ xs: 2, lg: 6 }}    // per breakpoint
contentPadding={0}                   // no padding: the page does all its own spacing
```

Use a single length per breakpoint when a page uses `FullBleedSection`; a two-value padding such as `'24px 40px'` can't be mirrored by it. For a whole route without padding, pass it per path:

```jsx
const noPaddingRoutes = ['/reports/builder'];
contentPadding={noPaddingRoutes.includes(pathname) ? 0 : undefined}
```

Your own sticky elements (e.g. a right-hand panel) can pin with `top: 'var(--lumora-sticky-top)'` plus the height of anything already pinned above them.

### 7. Mobile

Below the `md` breakpoint (900px) the sidebar goes away and phones get:

```
┌─────────────────────────────────┐
│ CENTRA //                  ◔26  │  top bar: brand, notifications
├─────────────────────────────────┤
│                                 │
│   your page                     │  content, padded clear of both bars
│                                 │
├─────────────────────────────────┤
│  ≡     ▣      N      ⌕     GP   │  bottom bar
│ Menu  Deals  Nexa  Search  Acct │  (Deals: mobileBottomBarLinks)
└─────────────────────────────────┘
```

| Bottom bar item | Opens                                                                                                           | Shown when                   |
| --------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Menu            | A sheet rising from the bottom with `sidebarLinks` / `secondarySidebarLinks` (thumb reach; swipe down to close) | `showSidebar`                |
| Pinned pages    | Navigates via `onLinkClick`; highlighted from `activePath`                                                      | `mobileBottomBarLinks` (1–2) |
| Nexa            | Calls `onAssistantClick`; the chat fills the screen above the bar                                               | `showAssistant`              |
| Search          | A sheet from the top with your `searchComponent`, its field focused                                             | `searchComponent` is set     |
| Account         | The same user menu as desktop                                                                                   | `showProfile`                |

The notifications bell (with the unread badge) sits at the right of the top bar and opens your `NotificationSidebarContent` drawer; it shows when `showNotifications` is on.

**Keeping the bar even:** Menu, Nexa, Search and Account make four items. Pin one of your pages to get five, with Nexa in the middle:

```jsx
mobileBottomBarLinks={mainLinks.filter(link => link.path === '/deals')}
```

Pinned links are ordinary `SidebarLink`s (they need a `path`); at most two are shown.

Apart from `mobileBottomBarLinks`, the bar is built from the props you already send. Items whose prop is off are left out and the rest share the width. The bar respects the phone's home-indicator area.

Search opens from the top on purpose: the keyboard rises from the bottom and would cover a field placed there.

Prefer the previous hamburger drawer (everything inside one drawer)? Pass `mobileNavigation='drawer'`.

Pinned elements: `FullBleedSection sticky` pins below the top bar on phones automatically; for your own, use `top: 'var(--lumora-sticky-top)'`.

### 8. Colors

The defaults are neutral (white sidebar, green accent). The Centra mockup colors, for light mode:

```js
// app/(app)/shellConfig.jsx
export const centraColors = {
	sidebarBackgroundColor: '#ffffff',
	sidebarForegroundColor: '#23403b', // idle links, icons, user row
	sidebarAccentColor: '#35564f', // active link fill
	activeSidebarForegroundColor: '#ffffff',
	groupAccentColor: 'rgba(53, 86, 79, 0.08)', // hover / open group / open user row
	brandColor: '#4f8a80', // CENTRA wordmark + logo
	contentBackgroundColor: '#f2f6f4'
};
```

In dark mode, leave them out and the wrapper uses its dark defaults. Fonts come from your app's MUI theme; to match the wrapper's own theme in an outer `ThemeProvider`, use `createTheme(getDesignTokens(mode))`.

## Props checklist

| Area         | Pass                                                                                                                                | Notes                                                     |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Required** | `apiBaseUrl`, `redirectToLogin`, `onLogout`, `children`                                                                             | `redirectToLogin` must be stable (`useCallback`).         |
| Layout       | `sidebarVariant='collapsible'`, `sidebarLinks`, `secondarySidebarLinks`, `activePath`, `onLinkClick`, `mobileBottomBarLinks`        | The default variant is `rail`; Centra uses `collapsible`. |
| Sidebar top  | `appName`, `logo?`, `onBrandClick?`, `searchComponent`                                                                              |                                                           |
| Nexa         | `showAssistant`, `onAssistantClick`, `GlobalChatSidebar`, `useChatSidebar`, `onChatClose`, `assistantActive`, `assistantBusy`       |                                                           |
| User         | `userName`, `userRole`, `userAvatar`, `onVerify`                                                                                    | Not filled in automatically.                              |
| User menu    | `notificationCount`, `NotificationSidebarContent`, `userMenuItems`, `onSettingsClick`, `showThemeToggler`, `theme`, `onThemeToggle` |                                                           |
| Content      | `contentPadding` (per route when needed); wrap detail-page headers in `FullBleedSection`                                            | Import `FullBleedSection` from the package.               |
| Look         | the [color props](#8-colors)                                                                                                        |                                                           |

## Props reference

Every prop is also documented in the TypeScript definitions, so your editor shows it on hover.

### Session

| Prop                 | Type                                                    | Default | Description                                                                                               |
| -------------------- | ------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| `apiBaseUrl`         | `string`                                                | —       | **Required.** Base URL for the token refresh call.                                                        |
| `redirectToLogin`    | `() => void`                                            | —       | **Required.** Called when there is no session. Keep it stable; the session check re-runs when it changes. |
| `onLogout`           | `(error?: Error) => void \| Promise<void>`              | —       | **Required.** Called from the user menu. Call your logout API and clear tokens here.                      |
| `onVerify`           | `(user: { name, email, profilePicture, role }) => void` | —       | Called once with the stored user after the session check.                                                 |
| `enableRefreshToken` | `boolean`                                               | `false` | Token check / refresh on mount ([details](#session-and-tokens)).                                          |

### Layout and navigation

| Prop                    | Type                                                  | Default            | Description                                                                                                                                                                |
| ----------------------- | ----------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sidebarVariant`        | `'rail' \| 'collapsible' \| 'rail-labeled'`           | `'rail'`           | `collapsible`: 288px panel that collapses to a 72px icon rail (state saved in localStorage). `rail`: fixed 100px icon rail. `rail-labeled`: fixed 80px rail with captions. |
| `showSidebar`           | `boolean`                                             | `true`             | Hide the sidebar (desktop) / drawer (mobile).                                                                                                                              |
| `mobileNavigation`      | `'bottom-bar' \| 'drawer'`                            | `'bottom-bar'`     | Phones: bottom bar with Menu, pinned pages, Nexa, Search and Account (notifications in the top bar), or a hamburger drawer holding everything ([Mobile](#7-mobile)).       |
| `mobileBottomBarLinks`  | `SidebarLink[]`                                       | —                  | Pages pinned in the mobile bottom bar between Menu and Nexa; one keeps the bar at five items. Max two.                                                                     |
| `sidebarLinks`          | `SidebarLink[]`                                       | `[]`               | Main navigation.                                                                                                                                                           |
| `secondarySidebarLinks` | `SidebarLink[]`                                       | `[]`               | Links pinned to the bottom, above the user.                                                                                                                                |
| `activePath`            | `string`                                              | —                  | Highlights the matching link and opens its parents.                                                                                                                        |
| `onLinkClick`           | `(path: string) => void`                              | —                  | Called with the clicked link's path. Navigate here.                                                                                                                        |
| `showSidebarRailTitles` | `boolean`                                             | `false`            | `rail` only: caption under each icon.                                                                                                                                      |
| `alertProps`            | `{ show, title, message, buttonText, onButtonClick }` | —                  | Card under the links (expanded panel, rail, drawer).                                                                                                                       |
| `contentPadding`        | `number \| string \| { xs?, sm?, md?, lg?, xl? }`     | `{ xs: 2, md: 5 }` | Padding around the page; also exposed as `--lumora-content-padding`. `0` for full-bleed pages.                                                                             |

### Sidebar top

| Prop              | Type              | Default       | Description                                                        |
| ----------------- | ----------------- | ------------- | ------------------------------------------------------------------ |
| `appName`         | `string`          | `'Dashboard'` | Wordmark (the narrow rails show the logo only).                    |
| `logo`            | `React.ReactNode` | Lumora logo   | Brand logo; on the collapsed rail it doubles as the expand button. |
| `onBrandClick`    | `() => void`      | —             | Makes the brand a button (e.g. go to the dashboard).               |
| `searchComponent` | `React.ReactNode` | —             | Your global search ([how it is placed](#3-global-search)).         |

### Nexa

| Prop                 | Type                        | Default      | Description                                                          |
| -------------------- | --------------------------- | ------------ | -------------------------------------------------------------------- |
| `showAssistant`      | `boolean`                   | `false`      | Show the Ask Nexa button.                                            |
| `onAssistantClick`   | `() => void`                | —            | Click and ⌘J handler; usually toggles the chat.                      |
| `assistantActive`    | `boolean`                   | `false`      | Highlight while the chat is open.                                    |
| `assistantBusy`      | `boolean`                   | `false`      | Animated border while a reply streams.                               |
| `assistantPlacement` | `'sidebar' \| 'floating'`   | `'sidebar'`  | Button under the brand, or in the bottom-right corner.               |
| `assistantShortcut`  | `string \| false`           | `'j'`        | ⌘ / Ctrl + this letter opens Nexa; `false` turns it off.             |
| `GlobalChatSidebar`  | `React.ComponentType`       | —            | Your chat UI, shown in the popup.                                    |
| `useChatSidebar`     | `() => { isOpen: boolean }` | —            | Hook telling the wrapper whether the chat is open.                   |
| `onChatClose`        | `() => void`                | —            | Called on Esc while the popup is open.                               |
| `chatPanelMode`      | `'floating' \| 'inline'`    | `'floating'` | Popup over the page, or the old column that narrows the content.     |
| `chatPanelPosition`  | `'right' \| 'left'`         | `'right'`    | Popup corner; `left` sits beside the sidebar.                        |
| `chatPanelWidth`     | `number`                    | `420`        | Popup width in px (fills the screen above the bottom bar on phones). |

### User and notifications

| Prop                         | Type                               | Default   | Description                                                        |
| ---------------------------- | ---------------------------------- | --------- | ------------------------------------------------------------------ |
| `showProfile`                | `boolean`                          | `true`    | The user row and its menu.                                         |
| `userName`                   | `string`                           | `'User'`  | Name; also gives the avatar initials.                              |
| `userRole`                   | `string`                           | `'User'`  | Shown under the name (`"ADMIN"` → `"Admin"`).                      |
| `userAvatar`                 | `string`                           | —         | Avatar image URL.                                                  |
| `showNotifications`          | `boolean`                          | `true`    | Bell beside the user and the Notifications menu entry.             |
| `notificationCount`          | `number`                           | `0`       | Unread count.                                                      |
| `NotificationSidebarContent` | `React.ComponentType<{ onClose }>` | —         | Drawer content opened by the bell / menu entry.                    |
| `userMenuItems`              | `UserMenuItem[]`                   | —         | `{ key, label, icon?, badge?, onClick? }` entries before Settings. |
| `showSettings`               | `boolean`                          | `true`    | Settings entry.                                                    |
| `onSettingsClick`            | `() => void`                       | —         | Usually opens your settings / profile page.                        |
| `showThemeToggler`           | `boolean`                          | `false`   | Light / Dark switch in the menu.                                   |
| `theme`                      | `'light' \| 'dark'`                | `'light'` | Current mode (also drives the wrapper's own MUI theme).            |
| `onThemeToggle`              | `() => void`                       | —         | Called when the other mode is picked.                              |

### Colors and styles

| Prop                                      | Type             | Default                  | Description                                                                            |
| ----------------------------------------- | ---------------- | ------------------------ | -------------------------------------------------------------------------------------- |
| `accentColor`                             | `string`         | `'#01584f'`              | Base accent; default for `sidebarAccentColor` and the logo tint.                       |
| `sidebarAccentColor`                      | `string`         | `accentColor`            | Active / hovered link fill.                                                            |
| `activeSidebarForegroundColor`            | `string`         | auto-contrast            | Text and icon on the active link.                                                      |
| `sidebarForegroundColor`                  | `string`         | accent / white           | Idle links, icons, search icon and user row.                                           |
| `groupAccentColor`                        | `string`         | tint of the accent       | Open groups, hover, and the user row while its menu is open.                           |
| `brandColor`                              | `string`         | sidebar text             | Wordmark and default-logo tint.                                                        |
| `sidebarBackgroundColor`                  | `string`         | `'#ffffff'` / dark paper | Sidebar surface.                                                                       |
| `sidebarHeaderBackgroundColor`            | `string`         | sidebar surface          | Sidebar header and mobile top bar; a custom color switches the brand to auto-contrast. |
| `contentBackgroundColor`                  | `string`         | `'#f2f9fc'` / dark       | Content area background.                                                               |
| `style`, `sidebarStyles`, `contentStyles` | `SxProps<Theme>` | —                        | `sx` overrides for the root, the sidebar and the content area.                         |

### Types

```ts
type SidebarLink = {
	text: string;
	path?: string; // optional when the link only groups subitems
	icon: React.ReactNode;
	subitems?: SidebarSubLink[];
	action?: SidebarLinkAction; // a button at the end of the row (links without subitems)
};

type SidebarLinkAction = {
	label: string; // accessible name and tooltip
	icon: React.ReactNode;
	onClick: () => void;
};

type SidebarSubLink = {
	text: string;
	path?: string;
	icon?: React.ReactNode;
	subitems?: SidebarSubLink[]; // a section: a third level
};

type UserMenuItem = {
	key: string;
	label: string;
	icon?: React.ReactNode;
	badge?: number;
	onClick?: () => void;
};
```

Also exported: `FullBleedSection` ([detail-page headers](#6-content-spacing-and-full-width-pages)), `CollapsibleSidebar` (the sidebar on its own), `Kbd`, `getDesignTokens`, and the session helpers below.

## Session and tokens

On mount the wrapper reads tokens from `localStorage` (`lumoraAccessToken`, `lumoraRefreshToken`, `lumoraUser`; the old `accessToken` / `refreshToken` / `user` keys are migrated automatically). With no token it clears storage and calls `redirectToLogin`; otherwise it renders and passes the stored user to `onVerify`.

Store tokens after your login flow:

```js
import { storeAuthTokens } from '@lumora/lumora-wrapper-component';

storeAuthTokens(accessToken, refreshToken, {
	name,
	email,
	profilePicture,
	role
});
```

With `enableRefreshToken`, the wrapper also checks tokens on mount: if only a refresh token is stored it calls `POST {apiBaseUrl}/auth/refresh` and stores the result, or clears the session and calls `redirectToLogin` if that fails. It does not attach tokens to your app's own API calls.

Other helpers: `clearAuthTokens`, `getAuthTokens`, `isAuthenticated`, `getCurrentUser`, `getAuthErrorMessage`, `logAuthError`, `AuthError`, `AUTH_ERROR_CODES`.

## Migrating from the header version

The navbar is gone. These props still compile but have moved or do nothing:

| Old prop                                                                           | Now                                                                     |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `customNavbar` / `customNavbarProps`                                               | Use `searchComponent`. Until you switch, it renders in the search slot. |
| `showSearchbar`, `searchValue`, `onSearchChange`, `onSearchSubmit`                 | No built-in search anymore; pass `searchComponent`.                     |
| `showHeader`, `headerStyles`, `navbarBackground`, `navbarAccentColor`              | No effect.                                                              |
| `rightExtraContent`                                                                | No effect; use `userMenuItems` for extra entries.                       |
| `pageName`, `userEmail`, `onProfileClick`, `onAccountClick`, `sidebarSectionTitle` | No effect.                                                              |

Behavior changes: Nexa is a sidebar button (was in the navbar); the chat opens as a floating popup (was a column that narrowed the page, still available with `chatPanelMode='inline'`); content padding is 40px (was 24px, set `contentPadding={3}` for the old spacing); phones get a bottom bar instead of the hamburger (`mobileNavigation='drawer'` for the old drawer).

## Development

```bash
npm install
npm run dev          # playground at http://localhost:5173
npm test             # Jest + Testing Library
npm run typecheck
npm run build        # library -> dist/
```

### Playground

`npm run dev` opens a demo app (`src/demo/`) wrapped in LumoraWrapper. The button at the top right opens a panel that toggles props live: sidebar variant, light/dark, nested links, a stand-in search component, notifications and their drawer, the user menu, Ask Nexa (or floating) with the chat popup (or inline column), alert card, Centra colors, a deal detail page with a full-width sticky header, no-padding mode and the token check. "Log out" clears the tokens so you can watch the session gate redirect. Settings survive reloads, and any of them can be set from the URL, e.g. `?sidebarVariant=rail&mode=dark&showSearch=0`. Narrow the window below 900px for the mobile drawer.

See [TESTING.md](TESTING.md) for the test suites.

### Releasing

Consumers install from GitHub, so `dist/` is committed. Run `npm run build` and commit `dist/` with every change to `src/lib`.
