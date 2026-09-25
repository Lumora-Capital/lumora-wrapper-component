import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import CloseIcon from '@mui/icons-material/Close';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
	Kbd,
	LumoraWrapper,
	clearAuthTokens,
	getDesignTokens,
	isAuthenticated,
	storeAuthTokens
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

/** Stand-in for the host app's own global search component. */
const DemoSearch = () => (
	<TextField
		fullWidth
		size='small'
		placeholder='Search deals, companies, people...'
		slotProps={{
			input: {
				startAdornment: (
					<InputAdornment position='start'>
						<SearchRoundedIcon fontSize='small' />
					</InputAdornment>
				),
				endAdornment: (
					<InputAdornment position='end'>
						<Kbd keys={['⌘', 'K']} />
					</InputAdornment>
				)
			}
		}}
		sx={{
			'& .MuiOutlinedInput-root': {
				height: 44,
				bgcolor: 'background.paper',
				borderRadius: '8px',
				fontSize: 14
			}
		}}
	/>
);

const NotificationPanel = ({ onClose }: { onClose: () => void }) => (
	<Box sx={{ p: 2 }}>
		<Stack
			direction='row'
			sx={{ alignItems: 'center', justifyContent: 'space-between' }}
		>
			<Typography variant='h6'>Notifications</Typography>
			<IconButton aria-label='Close notifications' onClick={onClose}>
				<CloseIcon />
			</IconButton>
		</Stack>
		<Typography sx={{ mt: 1, color: 'text.secondary' }}>
			Host-provided content rendered through NotificationSidebarContent.
		</Typography>
	</Box>
);

/** Stand-in for the host's chat UI (GlobalChatSidebar). */
const ChatPanel = ({ onClose }: { onClose: () => void }) => (
	<>
		<Stack
			direction='row'
			spacing={1}
			sx={{
				alignItems: 'center',
				px: 2,
				py: 1.5,
				borderBottom: '1px solid',
				borderColor: 'divider'
			}}
		>
			<Typography sx={{ fontWeight: 600, flexGrow: 1 }}>Nexa</Typography>
			<IconButton aria-label='Close Nexa' size='small' onClick={onClose}>
				<CloseIcon fontSize='small' />
			</IconButton>
		</Stack>
		<Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
			<Typography variant='body2' sx={{ color: 'text.secondary' }}>
				Rendered through GlobalChatSidebar while useChatSidebar reports
				it open. It floats over the page, so the content keeps its
				width. Esc closes it (onChatClose).
			</Typography>
		</Box>
		<Box sx={{ p: 1.5, borderTop: '1px solid', borderColor: 'divider' }}>
			<TextField
				fullWidth
				size='small'
				placeholder='Ask Nexa anything...'
			/>
		</Box>
	</>
);

const pageTitleSx = { fontWeight: 700, fontSize: 32, lineHeight: 1.2 };

/** A page inside the default content padding, as in the mockup. */
const StandardPage = ({ title }: { title: string }) => (
	<>
		<Typography component='h1' sx={pageTitleSx}>
			{title}
		</Typography>
		<Box
			sx={{
				mt: 3,
				minHeight: 'calc(100vh - 180px)',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				border: '1px dashed',
				borderColor: 'divider',
				borderRadius: '12px',
				bgcolor: 'background.paper',
				textAlign: 'center',
				px: 2
			}}
		>
			<Typography sx={{ fontWeight: 600 }}>
				[{title} — existing page content, unchanged]
			</Typography>
			<Typography variant='body2' sx={{ color: 'text.secondary' }}>
				Only the navigation shell changes in this redesign.
			</Typography>
		</Box>
	</>
);

const SignedOut = ({ onSignIn }: { onSignIn: () => void }) => (
	<Stack
		spacing={2}
		sx={{
			minHeight: '100vh',
			alignItems: 'center',
			justifyContent: 'center'
		}}
	>
		<Typography variant='h5'>Signed out</Typography>
		<Typography sx={{ color: 'text.secondary' }}>
			LumoraWrapper found no tokens and called redirectToLogin.
		</Typography>
		<Button variant='contained' onClick={onSignIn}>
			Sign in with a demo session
		</Button>
	</Stack>
);

const DemoApp = () => {
	const [settings, setSettings] = useState(loadSettings);
	const [signedIn, setSignedIn] = useState(true);
	// Bumped on logout to remount the wrapper, so its own session gate finds
	// no tokens and calls redirectToLogin (the flow a host app relies on)
	const [sessionKey, setSessionKey] = useState(0);
	const [activePath, setActivePath] = useState('/deals');
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
								icon: <AddRoundedIcon />,
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

	const theme = useMemo(
		() => createTheme(getDesignTokens(settings.mode)),
		[settings.mode]
	);
	const updateSettings = (patch: Partial<DemoSettings>) =>
		setSettings(prev => ({ ...prev, ...patch }));
	// Stable identity: the wrapper re-runs its session check when this changes
	const redirectToLogin = useCallback(() => setSignedIn(false), []);

	const handleLogout = () => {
		clearAuthTokens();
		setSessionKey(key => key + 1);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{signedIn ? (
				<LumoraWrapper
					key={sessionKey}
					apiBaseUrl='https://dev.api.lumora.capital'
					redirectToLogin={redirectToLogin}
					onLogout={handleLogout}
					enableRefreshToken={settings.enableRefreshToken}
					appName='CENTRA'
					userName={demoUser.name}
					userRole={demoUser.role}
					sidebarVariant={settings.sidebarVariant}
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
					showSidebar={settings.showSidebar}
					showSidebarRailTitles={settings.showSidebarRailTitles}
					searchComponent={
						settings.showSearch ? <DemoSearch /> : undefined
					}
					showProfile={settings.showProfile}
					onSettingsClick={() => setActivePath('/settings')}
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
					chatPanelMode={settings.inlineChat ? 'inline' : 'floating'}
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
							key: 'whats-new',
							label: "What's New",
							icon: <CampaignOutlinedIcon fontSize='small' />,
							badge: 1,
							onClick: () => setActivePath('/whats-new')
						},
						// Same popup, reachable where the + has no room
						// (collapsed / narrow rails, mobile)
						{
							key: 'support-request',
							label: 'Submit a request',
							icon: <SupportAgentOutlinedIcon fontSize='small' />,
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
		</ThemeProvider>
	);
};

export default DemoApp;
