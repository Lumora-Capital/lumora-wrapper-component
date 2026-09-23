import {
	Box,
	Button,
	Card,
	CardContent,
	IconButton,
	Stack,
	Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
	LumoraWrapper,
	clearAuthTokens,
	getDesignTokens,
	isAuthenticated,
	storeAuthTokens
} from '../lib';
import { flatLinks, nestedLinks, secondaryLinks } from './demoLinks';
import PlaygroundPanel from './PlaygroundPanel';
import {
	defaultSettings,
	loadSettings,
	saveSettings,
	type DemoSettings
} from './settings';

const demoUser = {
	name: 'Riley Carter',
	email: 'riley@email.com',
	profilePicture: '',
	role: 'Admin'
};

/** LumoraWrapper redirects to login without tokens, so the demo fakes a session. */
const seedSession = () =>
	storeAuthTokens('demo-access-token', 'demo-refresh-token', demoUser);

if (!isAuthenticated().isAuthenticated) {
	seedSession();
}

/** Colors from the Centra mockup; off = the component's own defaults. */
const brandColorProps = {
	sidebarBackgroundColor: '#072d29',
	accentColor: '#01584f',
	sidebarAccentColor: '#01584f',
	activeSidebarForegroundColor: '#ffffff',
	sidebarForegroundColor: '#7ec8bf'
};

/** Stand-in for the host app's own global search component. */
const DemoSearch = () => (
	<TextField
		fullWidth
		size='small'
		placeholder='Search deals or documents...'
		slotProps={{
			input: {
				startAdornment: (
					<InputAdornment position='start'>
						<SearchRoundedIcon fontSize='small' />
					</InputAdornment>
				)
			}
		}}
		sx={{
			'& .MuiOutlinedInput-root': {
				bgcolor: 'background.paper',
				borderRadius: '8px'
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

const ChatPanel = () => (
	<Card variant='outlined' sx={{ height: '100%' }}>
		<CardContent>
			<Typography variant='h6'>Chat</Typography>
			<Typography sx={{ color: 'text.secondary' }}>
				Rendered through GlobalChatSidebar while useChatSidebar reports
				it open. Toggle it with the Nexa button (bottom right).
			</Typography>
		</CardContent>
	</Card>
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
	const [activePath, setActivePath] = useState('/dashboard');
	const [chatOpen, setChatOpen] = useState(false);

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
					sidebarLinks={
						settings.nestedLinks ? nestedLinks : flatLinks
					}
					secondarySidebarLinks={secondaryLinks}
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
					notificationCount={3}
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
						settings.chatSidebar ? ChatPanel : undefined
					}
					useChatSidebar={() => ({ isOpen: chatOpen })}
					alertProps={{
						show: settings.showAlert,
						title: 'Plan your usage',
						message: 'Your trial ends in 3 days.',
						buttonText: 'Upgrade'
					}}
					{...(settings.brandColors ? brandColorProps : {})}
				>
					<Typography variant='h4'>{activePath}</Typography>
					<Typography sx={{ mt: 1, color: 'text.secondary' }}>
						Click sidebar links to move the active path. Open the
						playground (top right) to toggle any wrapper prop.
						Settings and dark mode live in the user menu at the
						bottom of the sidebar.
					</Typography>
					<Stack spacing={2} sx={{ mt: 3 }}>
						{Array.from({ length: 12 }, (_, i) => (
							<Card key={i} variant='outlined'>
								<CardContent>
									<Typography variant='subtitle2'>
										Card {i + 1}
									</Typography>
									<Typography
										variant='body2'
										sx={{ color: 'text.secondary' }}
									>
										Placeholder content.
									</Typography>
								</CardContent>
							</Card>
						))}
					</Stack>
				</LumoraWrapper>
			) : (
				<SignedOut
					onSignIn={() => {
						seedSession();
						setSignedIn(true);
					}}
				/>
			)}
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
