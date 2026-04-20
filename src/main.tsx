import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens } from './themePrimitives';
import {
	Dashboard as DashboardIcon,
	Settings as SettingsIcon,
	Adb as AdbIcon,
	Analytics as AnalyticsIcon,
	People as PeopleIcon
} from '@mui/icons-material';
import './index.css';
import { LumoraWrapper, type SidebarLink } from './lib';

// Create theme using the comprehensive design system
const theme = createTheme(getDesignTokens('light'), {
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				'*': {
					// Webkit scrollbar styling
					'&::-webkit-scrollbar': {
						width: '8px',
						height: '8px'
					},
					'&::-webkit-scrollbar-track': {
						background: 'transparent'
					},
					'&::-webkit-scrollbar-thumb': {
						background: 'rgba(0, 0, 0, 0.1)',
						borderRadius: '4px',
						'&:hover': {
							background: 'rgba(0, 0, 0, 0.2)'
						}
					},
					'&::-webkit-scrollbar-corner': {
						background: 'transparent'
					},
					// Firefox scrollbar styling
					scrollbarWidth: 'thin',
					scrollbarColor: 'rgba(0, 0, 0, 0.1) transparent'
				}
			}
		},
		MuiDataGrid: {
			styleOverrides: {
				root: ({ theme }: { theme: any }) => ({
					border: 'none',
					'& .MuiDataGrid-cell': {
						borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
					},
					'& .MuiDataGrid-columnHeaders': {
						borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
						backgroundColor: (theme.vars || theme).palette
							.background.paper
					},
					'& .MuiDataGrid-columnHeader': {
						fontWeight: 600,
						color: (theme.vars || theme).palette.text.primary
					},
					'& .MuiDataGrid-row': {
						'&:hover': {
							backgroundColor: (theme.vars || theme).palette
								.action.hover
						},
						'&.Mui-selected': {
							backgroundColor: (theme.vars || theme).palette
								.action.selected,
							'&:hover': {
								backgroundColor: (theme.vars || theme).palette
									.action.selected
							}
						}
					},
					'& .MuiDataGrid-footerContainer': {
						borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
						backgroundColor: (theme.vars || theme).palette
							.background.paper
					},
					...theme.applyStyles('dark', {
						'& .MuiDataGrid-columnHeaders': {
							backgroundColor: (theme.vars || theme).palette
								.background.paper
						},
						'& .MuiDataGrid-footerContainer': {
							backgroundColor: (theme.vars || theme).palette
								.background.paper
						}
					})
				})
			}
		}
	}
});

// Demo sidebar links - Main navigation
const demoMainLinks: SidebarLink[] = [
	{
		text: 'Home',
		path: '/home',
		icon: <DashboardIcon />,
		subitems: [
			{
				text: 'Home',
				path: '/home-1',
				icon: <DashboardIcon />
			},
			{
				text: 'Not Home',
				path: '/home-2',
				icon: <DashboardIcon />
			},
			{
				text: 'Not Home 2',
				path: '/home',
				icon: <DashboardIcon />
			}
		]
	},
	{
		text: 'Analytics',
		path: '/analytics',
		icon: <AnalyticsIcon />
	},
	{
		text: 'Clients',
		path: '/clients',
		icon: <PeopleIcon />
	},
	{
		text: 'Tasks',
		path: '/tasks',
		icon: <AdbIcon />
	}
];

// Demo sidebar links - Secondary navigation
const demoSecondaryLinks: SidebarLink[] = [
	{
		text: 'Settings',
		path: '/settings',
		icon: <SettingsIcon />
	},
	{
		text: 'About',
		path: '/about',
		icon: <AnalyticsIcon />
	},
	{
		text: 'Feedback',
		path: '/feedback',
		icon: <PeopleIcon />
	}
];

// Demo content component
const DemoContent = () => (
	<div>
		<h1>LumoraWrapper Component Demo</h1>
		<p>
			This is a demonstration of the LumoraWrapper component with modern
			sidebar design:
		</p>
		<ul>
			<li>
				Clean, modern sidebar with main and secondary navigation
				sections
			</li>
			<li>User profile section with avatar and options menu</li>
			<li>Notification badge in header</li>
			<li>Responsive design - mobile sidebar slides in from the right</li>
			<li>Active state highlighting for current page</li>
			<li>Configurable navigation links with icons</li>
			<li>Customizable header title and logo</li>
			<li>Proactive token refresh logic</li>
			<li>MUI Material Design components</li>
		</ul>
		<p>
			<strong>Note:</strong> The token refresh logic (enabled via{' '}
			<code>enableRefreshToken={true}</code>) will check for a
			'tokenExpiry' cookie and attempt to refresh the token if it expires
			within 10 minutes.
		</p>
		<p>
			<strong>Mobile:</strong> On smaller screens, the sidebar becomes a
			slide-out drawer accessible via the menu button in the header.
		</p>

		{/* Demo showing customization features */}
		<div
			style={{
				marginTop: '24px',
				padding: '16px',
				backgroundColor: '#e3f2fd',
				borderRadius: '8px',
				boxShadow:
					'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
			}}
		>
			<h3 style={{ color: '#1976d2', fontSize: '1.125rem' }}>
				New Customization Features
			</h3>
			<p style={{ fontSize: '0.875rem', color: '#1976d2' }}>
				The LumoraWrapper now supports extensive customization:
			</p>
			<ul style={{ fontSize: '0.875rem', color: '#1e88e5' }}>
				<li>
					<strong>headerTitle:</strong> Custom header title (currently
					"My Custom App")
				</li>
				<li>
					<strong>appLogo:</strong> Custom logo component (currently
					Adb icon)
				</li>
				<li>
					<strong>showHeader/showSidebar:</strong> Toggle visibility
					of layout elements
				</li>
				<li>
					<strong>enableRefreshToken:</strong> Enable/disable token
					refresh logic (currently enabled)
				</li>
				<li>
					<strong>style props:</strong> Custom styling for header,
					sidebar, content, and root container
				</li>
				<li>
					<strong>headerStyles:</strong> Custom header styling
					(currently dark background)
				</li>
			</ul>
		</div>

		{/* Demo showing standard CSS styling */}
		<div
			style={{
				marginTop: '24px',
				padding: '16px',
				backgroundColor: '#f5f5f5',
				borderRadius: '8px',
				boxShadow:
					'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
			}}
		>
			<h3 style={{ color: '#1976d2', fontSize: '1.125rem' }}>
				Standard CSS Styling Demo
			</h3>
			<p style={{ fontSize: '0.875rem', color: '#616161' }}>
				This box uses standard CSS values for styling:
			</p>
			<ul style={{ fontSize: '0.875rem', color: '#757575' }}>
				<li>Spacing: Standard pixel values</li>
				<li>Colors: Hex color codes</li>
				<li>Border radius: Standard pixel values</li>
				<li>Shadows: Standard CSS shadow values</li>
				<li>Typography: Standard rem values</li>
			</ul>
		</div>

		<div
			style={{
				marginTop: '24px',
				padding: '16px',
				backgroundColor: '#fff8e1',
				borderRadius: '4px',
				border: '1px solid #ffe082'
			}}
		>
			<h3 style={{ color: '#ff8f00', fontSize: '1rem' }}>
				Testing Token Refresh:
			</h3>
			<p style={{ fontSize: '0.875rem', color: '#ffa000' }}>
				To test the token refresh functionality, you can set a test
				cookie in your browser's developer console:
			</p>
			<code
				style={{
					display: 'block',
					marginTop: '8px',
					padding: '8px',
					backgroundColor: '#eeeeee',
					borderRadius: '2px',
					fontSize: '0.75rem'
				}}
			>
				document.cookie = "tokenExpiry=" + new Date(Date.now() + 5 * 60
				* 1000).toISOString() + "; path=/"
			</code>
			<p
				style={{
					marginTop: '8px',
					fontSize: '0.75rem',
					color: '#ffb300'
				}}
			>
				This sets a token expiry 5 minutes from now, which should
				trigger the refresh logic.
			</p>
		</div>
	</div>
);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<LumoraWrapper
				sidebarLinks={demoMainLinks}
				secondarySidebarLinks={demoSecondaryLinks}
				appName='Lumora Custom App'
				pageName='Home'
				activePath='/home'
				userName='Riley Carter'
				userEmail='riley@email.com'
				userAvatar='/static/images/avatar/7.jpg'
				showNotifications={true}
				notificationCount={3}
				onLogout={() => console.log('Logout clicked')}
				onProfileClick={() => console.log('Profile clicked')}
				onAccountClick={() => console.log('Account clicked')}
				onSettingsClick={() => console.log('Settings clicked')}
				onLinkClick={path => console.log('Link clicked:', path)}
				enableRefreshToken={false}
				apiBaseUrl='https://dev.api.lumora.capital'
				// Desktop rail: show link text under icons (widens the permanent drawer)
				showSidebarRailTitles={true}
				// Uncomment the lines below to test conditional rendering:
				// showHeader={false}  // Hide the header completely
				// showSidebar={false} // Hide the sidebar completely
				// enableRefreshToken={false} // Disable token refresh logic
			>
				<DemoContent />
			</LumoraWrapper>
		</ThemeProvider>
	</StrictMode>
);
