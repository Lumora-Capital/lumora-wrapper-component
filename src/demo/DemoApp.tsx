import {
	MegaphoneIcon,
	HeadsetIcon,
	PlusIcon,
	SearchIcon,
	SettingsIcon,
	XIcon
} from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
	Kbd,
	LumoraWrapper,
	clearAuthTokens,
	isAuthenticated,
	storeAuthTokens,
	type LumoraPlatform,
	type NotificationSidebarContentProps
} from '../lib';
import {
	flatLinks,
	nestedLinks,
	secondaryLinks,
	titleForPath
} from './demoLinks';
import DetailPage from './DetailPage';
import PlaygroundPanel from './PlaygroundPanel';
import SupportRequestDialog from './SupportRequestDialog';
import {
	defaultSettings,
	loadSettings,
	saveSettings,
	type DemoSettings
} from './settings';

const demoUser = {
	name: 'Gabriel Paet',
	email: 'gabriel@lumora.capital',
	profilePicture: '',
	role: 'Standard user'
};

/** LumoraWrapper redirects to login without tokens, so the demo fakes a session. */
const seedSession = () =>
	storeAuthTokens('demo-access-token', 'demo-refresh-token', demoUser);

if (!isAuthenticated().isAuthenticated) {
	seedSession();
}

/** Light-mode colors from the Centra mockup; off = the component's defaults. */
const centraColorProps = {
	sidebarBackgroundColor: '#ffffff',
	sidebarAccentColor: '#35564f',
	activeSidebarForegroundColor: '#ffffff',
	sidebarForegroundColor: '#23403b',
	groupAccentColor: 'rgba(53, 86, 79, 0.08)',
	brandColor: '#4f8a80',
	contentBackgroundColor: '#f2f6f4'
};

/**
 * Sample platforms for the switcher on the sidebar logo. A host passes only
 * the ones the signed-in user may open.
 */
const demoPlatforms: LumoraPlatform[] = [
	{
		key: 'centra',
		name: 'Centra',
		description: 'Deals, CRM and lending',
		accentColor: '#09C1AE',
		url: 'https://centra.lumora.capital'
	},
	{
		key: 'xpdite',
		name: 'XPdite',
		description: 'Knowledge graph and agent training',
		accentColor: '#2F6FD6',
		url: 'https://xpdite.lumora.capital'
	},
	{
		key: 'polymer',
		name: 'Polymer',
		description: 'Agents, prompts and models',
		accentColor: '#1F6B5C',
		url: 'https://polymer.lumora.capital'
	}
];

/** Stand-in for the host app's own global search component. */
const DemoSearch = () => (
	<div className='flex h-11 w-full items-center gap-2 rounded-lg border border-input bg-surface px-3 text-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary'>
		<SearchIcon className='size-4 shrink-0 text-muted-foreground' />
		<input
			data-slot='input'
			placeholder='Search deals, companies, people...'
			className='min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground'
		/>
		<Kbd keys={['⌘', 'K']} />
	</div>
);

const iconButtonClass =
	'inline-flex size-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground';

/** Host content for the updates drawer; the panel menu's What's New opens it on the other tab. */
const NotificationPanel = ({
	onClose,
	initialTab = 'notifications'
}: NotificationSidebarContentProps) => (
	<div className='p-4'>
		<div className='flex items-center justify-between'>
			<h2 className='text-lg font-semibold'>
				{initialTab === 'whats-new' ? "What's New" : 'Notifications'}
			</h2>
			<button
				type='button'
				aria-label='Close notifications'
				onClick={onClose}
				className={iconButtonClass}
			>
				<XIcon className='size-5' />
			</button>
		</div>
		<p className='mt-2 text-sm text-muted-foreground'>
			Host-provided content rendered through NotificationSidebarContent
			(initialTab: {initialTab}).
		</p>
	</div>
);

/** Stand-in for the host's chat UI (GlobalChatSidebar). */
const ChatPanel = ({ onClose }: { onClose: () => void }) => (
	<>
		<div className='flex items-center gap-2 border-b border-border px-4 py-3'>
			<span className='grow font-semibold'>Nexa</span>
			<button
				type='button'
				aria-label='Close Nexa'
				onClick={onClose}
				className={iconButtonClass}
			>
				<XIcon className='size-4' />
			</button>
		</div>
		<div className='grow overflow-y-auto p-4'>
			<p className='text-sm text-muted-foreground'>
				Rendered through GlobalChatSidebar while useChatSidebar reports
				it open. Pinned to the right over the page, so the content keeps
				its width; notifications open on top. Esc closes it
				(onChatClose).
			</p>
		</div>
		<div className='border-t border-border p-3'>
			<input
				placeholder='Ask Nexa anything...'
				className='h-8 w-full rounded-md border border-input bg-surface px-2.5 text-sm outline-none focus-visible:border-primary'
			/>
		</div>
	</>
);

/** A page inside the default content padding, as in the mockup. */
const StandardPage = ({ title }: { title: string }) => (
	<>
		<h1 className='text-[32px] leading-[1.2] font-bold'>{title}</h1>
		<div className='mt-6 flex min-h-[calc(100vh-180px)] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface px-4 text-center'>
			<p className='font-semibold'>
				[{title} — existing page content, unchanged]
			</p>
			<p className='text-sm text-muted-foreground'>
				Only the navigation shell changes in this redesign.
			</p>
		</div>
	</>
);

const SignedOut = ({ onSignIn }: { onSignIn: () => void }) => (
	<div className='flex min-h-screen flex-col items-center justify-center gap-4'>
		<h1 className='text-xl font-semibold'>Signed out</h1>
		<p className='text-muted-foreground'>
			LumoraWrapper found no tokens and called redirectToLogin.
		</p>
		<button
			type='button'
			onClick={onSignIn}
			className='h-8 cursor-pointer rounded-md bg-primary px-3 text-sm font-semibold text-white hover:bg-primary-hover'
		>
			Sign in with a demo session
		</button>
	</div>
);

const DemoApp = () => {
	const [settings, setSettings] = useState(loadSettings);
	const [signedIn, setSignedIn] = useState(true);
	// Bumped on logout to remount the wrapper, so its own session gate finds
	// no tokens and calls redirectToLogin (the flow a host app relies on)
	const [sessionKey, setSessionKey] = useState(0);
	const [activePath, setActivePath] = useState('/deals');
	// The demo switches in place (renames the app, goes home) instead of
	// following each platform's url
	const [platformKey, setPlatformKey] = useState('centra');
	const platform =
		demoPlatforms.find(p => p.key === platformKey) ?? demoPlatforms[0];
	const [chatOpen, setChatOpen] = useState(false);
	const [requestOpen, setRequestOpen] = useState(false);
	// Help & support opens the requests page; its + opens the request popup
	const secondaryWithRequest = useMemo(
		() =>
			secondaryLinks.map(link =>
				link.path === '/help'
					? {
							...link,
							action: {
								label: 'New request',
								icon: <PlusIcon />,
								onClick: () => setRequestOpen(true)
							}
						}
					: link
			),
		[]
	);
	const closeChat = useCallback(() => setChatOpen(false), []);
	// Stable component identity, so the chat keeps its state across renders
	const GlobalChat = useMemo(
		() => () => <ChatPanel onClose={closeChat} />,
		[closeChat]
	);

	useEffect(() => saveSettings(settings), [settings]);

	// The host's dark switch, as Nexa sets it: the shell's stylesheet and the
	// playground's both follow html[data-color-scheme]
	useEffect(() => {
		document.documentElement.setAttribute(
			'data-color-scheme',
			settings.mode
		);
	}, [settings.mode]);
	const updateSettings = (patch: Partial<DemoSettings>) =>
		setSettings(prev => ({ ...prev, ...patch }));
	// Stable identity: the wrapper re-runs its session check when this changes
	const redirectToLogin = useCallback(() => setSignedIn(false), []);

	const handleLogout = () => {
		clearAuthTokens();
		setSessionKey(key => key + 1);
	};

	return (
		<>
			{signedIn ? (
				<LumoraWrapper
					key={sessionKey}
					apiBaseUrl='https://dev.api.lumora.capital'
					redirectToLogin={redirectToLogin}
					onLogout={handleLogout}
					enableRefreshToken={settings.enableRefreshToken}
					holdSessionSkeleton={settings.holdSessionSkeleton}
					appName={
						settings.platformSwitcher
							? platform.name.toUpperCase()
							: 'CENTRA'
					}
					userName={demoUser.name}
					userRole={demoUser.role}
					userEmail={demoUser.email}
					sidebarVariant={settings.sidebarVariant}
					sidebarSubmenu={
						settings.flyoutSubmenu ? 'flyout' : 'expand'
					}
					sidebarAutoHide={settings.sidebarAutoHide}
					mobileNavigation={
						settings.mobileDrawer ? 'drawer' : 'bottom-bar'
					}
					mobileBottomBarLinks={
						settings.pinDealsOnMobile
							? nestedLinks.filter(link => link.text === 'Deals')
							: undefined
					}
					sidebarLinks={
						settings.nestedLinks ? nestedLinks : flatLinks
					}
					secondarySidebarLinks={secondaryWithRequest}
					activePath={activePath}
					onLinkClick={setActivePath}
					onBrandClick={
						settings.clickableBrand
							? () => setActivePath('/dashboard')
							: undefined
					}
					platforms={
						settings.platformSwitcher ? demoPlatforms : undefined
					}
					currentPlatformKey={platform.key}
					onPlatformSelect={next => {
						setPlatformKey(next.key);
						setActivePath('/dashboard');
					}}
					showSidebar={settings.showSidebar}
					showSidebarRailTitles={settings.showSidebarRailTitles}
					searchComponent={
						settings.showSearch ? <DemoSearch /> : undefined
					}
					showProfile={settings.showProfile}
					onSettingsClick={() => setActivePath('/settings')}
					// `panel` variant: the profile header; its other rows come
					// from userMenuItems
					onProfileClick={() => setActivePath('/profile')}
					onAiUsageClick={() => setActivePath('/profile/ai-usage')}
					whatsNewCount={1}
					showNotifications={settings.showNotifications}
					notificationCount={26}
					NotificationSidebarContent={
						settings.notificationDrawer
							? NotificationPanel
							: undefined
					}
					theme={settings.mode}
					showThemeToggler={settings.showThemeToggler}
					onThemeToggle={() =>
						updateSettings({
							mode: settings.mode === 'light' ? 'dark' : 'light'
						})
					}
					showAssistant={settings.showAssistant}
					assistantActive={chatOpen}
					assistantBusy={settings.assistantBusy}
					onAssistantClick={() => setChatOpen(prev => !prev)}
					GlobalChatSidebar={
						settings.chatSidebar ? GlobalChat : undefined
					}
					chatPanelMode={
						settings.floatingChat ? 'floating' : 'docked'
					}
					onChatClose={closeChat}
					useChatSidebar={() => ({ isOpen: chatOpen })}
					alertProps={{
						show: settings.showAlert,
						title: 'Plan your usage',
						message: 'Your trial ends in 3 days.',
						buttonText: 'Upgrade'
					}}
					userMenuItems={[
						{
							key: 'settings',
							label: 'Settings',
							icon: <SettingsIcon className='size-5' />,
							path: '/settings'
						},
						{
							key: 'whats-new',
							label: "What's New",
							icon: <MegaphoneIcon className='size-5' />,
							badge: 1,
							onClick: () => setActivePath('/whats-new')
						},
						// Same popup, reachable where the + has no room
						// (collapsed / narrow rails, mobile)
						{
							key: 'support-request',
							label: 'Submit a request',
							icon: <HeadsetIcon className='size-5' />,
							onClick: () => setRequestOpen(true)
						}
					]}
					contentPadding={settings.noContentPadding ? 0 : undefined}
					assistantPlacement={
						settings.floatingAssistant ? 'floating' : 'sidebar'
					}
					{...(settings.brandColors && settings.mode === 'light'
						? centraColorProps
						: {})}
					// Like the hosts, each platform keeps its own colour: the
					// sidebar accent, the logo and the glass's light
					{...(settings.platformSwitcher && platform.key !== 'centra'
						? {
								accentColor: platform.accentColor,
								sidebarAccentColor: platform.accentColor,
								brandColor: platform.accentColor,
								groupAccentColor: undefined
							}
						: {})}
				>
					{settings.detailPage ? (
						<DetailPage
							onBack={() => updateSettings({ detailPage: false })}
						/>
					) : (
						<StandardPage title={titleForPath(activePath)} />
					)}
				</LumoraWrapper>
			) : (
				<SignedOut
					onSignIn={() => {
						seedSession();
						setSignedIn(true);
					}}
				/>
			)}
			<SupportRequestDialog
				open={requestOpen}
				onClose={() => setRequestOpen(false)}
			/>
			<PlaygroundPanel
				settings={settings}
				onChange={updateSettings}
				onReset={() => setSettings(defaultSettings)}
				onLogout={handleLogout}
			/>
		</>
	);
};

export default DemoApp;
