# Lumora Wrapper Component

A flexible and customizable React wrapper component built with Material-UI that provides a consistent layout structure for authenticated pages. The component includes a header, sidebar navigation, and main content area, along with built-in automatic token refresh logic to prevent unexpected session logouts.

## Installation

### Authentication Setup

For private repositories, you'll need to set up GitHub authentication:

#### Create a GitHub Personal Access Token:

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Click "Generate new token (classic)"
3. Select the `repo` scope (for private repositories)
4. Copy the generated token

#### Configure npm authentication:

```bash
# Add to your .npmrc file
echo "//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE" >> ~/.npmrc

# Or configure globally
npm config set //npm.pkg.github.com/:_authToken YOUR_TOKEN_HERE
```

### Install from GitHub Repository

#### Install from main branch:

```bash
# Using npm
npm install https://github.com/Volenday/lumora-wrapper-component.git

# Using yarn
yarn add https://github.com/Volenday/lumora-wrapper-component.git

# Using pnpm
pnpm add https://github.com/Volenday/lumora-wrapper-component.git
```

#### Install from specific branch or commit:

```bash
# Install from a specific branch
npm install https://github.com/Volenday/lumora-wrapper-component.git#feature-branch

# Install from a specific commit hash
npm install https://github.com/Volenday/lumora-wrapper-component.git#a1b2c3d4e5f6

# Install from a specific tag/version
npm install https://github.com/Volenday/lumora-wrapper-component.git#v1.0.0
```

#### Alternative: SSH Authentication

If you have SSH access to the repository:

```bash
npm install git+ssh://git@github.com:Volenday/lumora-wrapper-component.git
```

> **Note**: If you encounter authentication issues, make sure your GitHub token has the correct permissions and is properly configured in your `.npmrc` file.

## Usage

### Basic Usage

Import and use the LumoraWrapper component to wrap your page content:

```tsx
import React from 'react';
import { LumoraWrapper } from '@lumora/lumora-wrapper-component';
import { Home, Settings, Dashboard } from '@mui/icons-material';

const App = () => {
	const sidebarLinks = [
		{ text: 'Home', path: '/', icon: <Home /> },
		{ text: 'Dashboard', path: '/dashboard', icon: <Dashboard /> },
		{ text: 'Settings', path: '/settings', icon: <Settings /> }
	];

	return (
		<LumoraWrapper appName='My Application' sidebarLinks={sidebarLinks}>
			<div>
				<h1>Welcome to your application</h1>
				<p>Your page content goes here...</p>
			</div>
		</LumoraWrapper>
	);
};

export default App;
```

### Usage with Authentication

To enable automatic token refresh, ensure tokens are stored in localStorage and enable the feature:

```tsx
import React, { useEffect, useState } from 'react';
import { LumoraWrapper } from '@lumora/lumora-wrapper-component';
import { Home, Settings, Dashboard } from '@mui/icons-material';

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		// Check if user is authenticated (has tokens in localStorage)
		const accessToken = localStorage.getItem('accessToken');
		const refreshToken = localStorage.getItem('refreshToken');

		if (accessToken && refreshToken) {
			setIsAuthenticated(true);
		}
	}, []);

	const handleGoogleLogin = async () => {
		// Implement your Google OAuth flow here
		// After successful login, store tokens:
		// localStorage.setItem('accessToken', response.accessToken);
		// localStorage.setItem('refreshToken', response.refreshToken);
		// setIsAuthenticated(true);
	};

	const handleLogout = () => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		setIsAuthenticated(false);
	};

	const sidebarLinks = [
		{ text: 'Home', path: '/', icon: <Home /> },
		{ text: 'Dashboard', path: '/dashboard', icon: <Dashboard /> },
		{ text: 'Settings', path: '/settings', icon: <Settings /> }
	];

	if (!isAuthenticated) {
		return (
			<div>
				<h1>Please log in</h1>
				<button onClick={handleGoogleLogin}>Login with Google</button>
			</div>
		);
	}

	return (
		<LumoraWrapper
			appName='My Application'
			sidebarLinks={sidebarLinks}
			enableRefreshToken={true}
			onLogout={handleLogout}
		>
			<div>
				<h1>Welcome to your application</h1>
				<p>Your page content goes here...</p>
			</div>
		</LumoraWrapper>
	);
};

export default App;
```

## Props API

### Core Props

| Prop                    | Type              | Default Value | Description                                     |
| ----------------------- | ----------------- | ------------- | ----------------------------------------------- |
| `children`              | `React.ReactNode` | -             | The main content to be displayed in the wrapper |
| `sidebarLinks`          | `SidebarLink[]`   | `[]`          | Array of navigation links for the sidebar       |
| `secondarySidebarLinks` | `SidebarLink[]`   | `[]`          | Array of secondary navigation links             |

### Header Props

| Prop         | Type      | Default Value | Description                          |
| ------------ | --------- | ------------- | ------------------------------------ |
| `appName`    | `string`  | `'Dashboard'` | Application name displayed in header |
| `pageName`   | `string`  | `'Home'`      | Current page name in breadcrumbs     |
| `showHeader` | `boolean` | `true`        | Whether to display the header bar    |

### Sidebar Props

| Prop                           | Type                                        | Default Value               | Description                                                                                                                                                                                                                                                                                                                    |
| ------------------------------ | ------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `showSidebar`                  | `boolean`                                   | `true`                      | Whether to display the sidebar                                                                                                                                                                                                                                                                                                 |
| `activePath`                   | `string`                                    | -                           | Currently active navigation path                                                                                                                                                                                                                                                                                               |
| `sidebarVariant`               | `'rail' \| 'collapsible' \| 'rail-labeled'` | `'rail'`                    | Desktop sidebar layout. `'rail'` is the fixed icon rail; `'collapsible'` toggles between an expanded panel and a collapsed icon rail (persisted to localStorage, toggle in the navbar); `'rail-labeled'` is a fixed narrow rail with the label stacked under each icon that never collapses (no toggle). Mobile is unaffected. |
| `showSidebarRailTitles`        | `boolean`                                   | `false`                     | For the `'rail'` variant only: show `link.text` as a caption under each icon (rail width is unchanged).                                                                                                                                                                                                                        |
| `accentColor`                  | `string`                                    | `'#01584f'`                 | Brand accent used by the navbar (app name / logo / menu button) and as the default for the sidebar accent.                                                                                                                                                                                                                     |
| `sidebarAccentColor`           | `string`                                    | `accentColor`               | Accent for the sidebar — the solid fill of the highlighted item, shared by the active item **and** any item on hover. Independent of the navbar brand accent.                                                                                                                                                                  |
| `sidebarForegroundColor`       | `string`                                    | sidebar accent / theme text | Idle (inactive) text/icon color for sidebar items, independent of the highlight fill. Lets idle labels be tinted (e.g. light teal) while the highlighted item uses a darker solid fill.                                                                                                                                        |
| `activeSidebarForegroundColor` | `string`                                    | auto-contrast               | Text/icon color of the highlighted sidebar item (active **and** hover). Defaults to an auto-contrasting color from the sidebar accent.                                                                                                                                                                                         |

### User Profile Props

| Prop              | Type       | Default Value | Description                       |
| ----------------- | ---------- | ------------- | --------------------------------- |
| `userName`        | `string`   | -             | User's display name               |
| `userEmail`       | `string`   | -             | User's email address              |
| `userAvatar`      | `string`   | -             | URL to user's avatar image        |
| `onLogout`        | `function` | -             | Callback when logout is clicked   |
| `onProfileClick`  | `function` | -             | Callback when profile is clicked  |
| `onAccountClick`  | `function` | -             | Callback when account is clicked  |
| `onSettingsClick` | `function` | -             | Callback when settings is clicked |

### Notification Props

| Prop                | Type      | Default Value | Description                        |
| ------------------- | --------- | ------------- | ---------------------------------- |
| `showNotifications` | `boolean` | `false`       | Whether to show notification badge |
| `notificationCount` | `number`  | `0`           | Number of notifications to display |

### Styling Props

| Prop            | Type             | Default Value | Description                                  |
| --------------- | ---------------- | ------------- | -------------------------------------------- |
| `style`         | `SxProps<Theme>` | -             | Custom styles for the main wrapper container |
| `headerStyles`  | `SxProps<Theme>` | -             | Custom styles for the header component       |
| `sidebarStyles` | `SxProps<Theme>` | -             | Custom styles for the sidebar component      |
| `contentStyles` | `SxProps<Theme>` | -             | Custom styles for the main content area      |

### Other Props

| Prop                 | Type       | Default Value | Description                                              |
| -------------------- | ---------- | ------------- | -------------------------------------------------------- |
| `enableRefreshToken` | `boolean`  | `false`       | Enable automatic Axios-based token refresh on 401 errors |
| `onLinkClick`        | `function` | -             | Callback when navigation link is clicked                 |
| `alertProps`         | `object`   | -             | Alert card configuration                                 |

### SidebarLink Type

The `SidebarLink` type is defined as:

```tsx
type SidebarLink = {
	text: string; // Display text for the navigation link
	path: string; // URL path for navigation
	icon: React.ReactNode; // Icon component to display next to the text
};
```

## Styling Customization

The LumoraWrapper component provides extensive styling customization through four main style props that accept MUI `SxProps` objects. This allows you to leverage the full power of Material-UI's styling system, including theme access, responsive breakpoints, and pseudo-selectors.

### Available Style Props

- **`style`** - Styles for the main wrapper container (root Box component)
- **`headerStyles`** - Styles for the header/AppBar component
- **`sidebarStyles`** - Styles for the sidebar/Drawer component
- **`contentStyles`** - Styles for the main content area

### Basic Styling Examples

#### Customizing the Header

```tsx
import { LumoraWrapper } from '@lumora/lumora-wrapper-component';

const App = () => {
	return (
		<LumoraWrapper
			appName='My Application'
			pageName='Dashboard'
			headerStyles={{
				backgroundColor: '#1976d2',
				color: 'white',
				boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
				'& .MuiToolbar-root': {
					justifyContent: 'space-between',
					padding: '0 16px'
				}
			}}
		>
			<div>Your content here</div>
		</LumoraWrapper>
	);
};
```

#### Customizing the Sidebar

```tsx
const App = () => {
	return (
		<LumoraWrapper
			sidebarStyles={{
				'& .MuiDrawer-paper': {
					backgroundColor: '#2c3e50',
					color: 'white',
					width: 280, // Custom width
					'& .MuiListItemButton-root': {
						borderRadius: '8px',
						margin: '4px 8px',
						'&:hover': {
							backgroundColor: '#34495e'
						},
						'&.Mui-selected': {
							backgroundColor: '#3498db',
							'&:hover': {
								backgroundColor: '#2980b9'
							}
						}
					}
				}
			}}
		>
			<div>Your content here</div>
		</LumoraWrapper>
	);
};
```

#### Customizing the Content Area

```tsx
const App = () => {
	return (
		<LumoraWrapper
			contentStyles={{
				backgroundColor: '#f8f9fa',
				padding: 3,
				backgroundImage:
					'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'& > *': {
					backgroundColor: 'white',
					borderRadius: '12px',
					padding: 3,
					boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
				}
			}}
		>
			<div>Your content here</div>
		</LumoraWrapper>
	);
};
```

#### Customizing the Root Container

```tsx
const App = () => {
	return (
		<LumoraWrapper
			style={{
				height: '100vh',
				background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(10px)'
				}
			}}
		>
			<div>Your content here</div>
		</LumoraWrapper>
	);
};
```

### Advanced Styling Examples

#### Responsive Styling

```tsx
const App = () => {
	return (
		<LumoraWrapper
			headerStyles={{
				height: { xs: '60px', md: '50px' },
				backgroundColor: {
					xs: '#e3f2fd',
					md: '#1976d2'
				},
				'& .MuiToolbar-root': {
					padding: { xs: '8px 16px', md: '4px 16px' }
				}
			}}
			sidebarStyles={{
				'& .MuiDrawer-paper': {
					width: { xs: '100%', sm: 280, md: 320 },
					backgroundColor: {
						xs: 'rgba(0, 0, 0, 0.8)',
						md: '#2c3e50'
					}
				}
			}}
		>
			<div>Your content here</div>
		</LumoraWrapper>
	);
};
```

#### Theme-Aware Styling

```tsx
const App = () => {
	return (
		<LumoraWrapper
			headerStyles={theme => ({
				backgroundColor:
					theme.palette.mode === 'dark' ? '#1a1a1a' : '#ffffff',
				borderBottom: `1px solid ${theme.palette.divider}`,
				'& .MuiTypography-root': {
					color: theme.palette.text.primary
				}
			})}
			sidebarStyles={theme => ({
				'& .MuiDrawer-paper': {
					backgroundColor: theme.palette.background.paper,
					borderRight: `1px solid ${theme.palette.divider}`,
					'& .MuiListItemButton-root': {
						'&:hover': {
							backgroundColor: theme.palette.action.hover
						}
					}
				}
			})}
		>
			<div>Your content here</div>
		</LumoraWrapper>
	);
};
```

#### Complete Custom Styling Example

```tsx
const App = () => {
	return (
		<LumoraWrapper
			appName='Custom App'
			pageName='Dashboard'
			sidebarLinks={[
				{ text: 'Home', path: '/', icon: <HomeIcon /> },
				{ text: 'Settings', path: '/settings', icon: <SettingsIcon /> }
			]}
			style={{
				background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				minHeight: '100vh'
			}}
			headerStyles={{
				background: 'rgba(255, 255, 255, 0.1)',
				backdropFilter: 'blur(10px)',
				borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
				boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
				'& .MuiToolbar-root': {
					color: 'white',
					fontWeight: 600
				}
			}}
			sidebarStyles={{
				'& .MuiDrawer-paper': {
					background: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(10px)',
					borderRight: '1px solid rgba(255, 255, 255, 0.2)',
					'& .MuiListItemButton-root': {
						color: 'white',
						borderRadius: '12px',
						margin: '4px 12px',
						'&:hover': {
							background: 'rgba(255, 255, 255, 0.1)'
						},
						'&.Mui-selected': {
							background: 'rgba(255, 255, 255, 0.2)',
							'&:hover': {
								background: 'rgba(255, 255, 255, 0.3)'
							}
						}
					}
				}
			}}
			contentStyles={{
				background: 'rgba(255, 255, 255, 0.05)',
				backdropFilter: 'blur(5px)',
				padding: 4,
				'& > *': {
					background: 'rgba(255, 255, 255, 0.1)',
					borderRadius: '16px',
					padding: 3,
					backdropFilter: 'blur(10px)',
					border: '1px solid rgba(255, 255, 255, 0.2)',
					boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
				}
			}}
		>
			<div>
				<h1>Welcome to Your Custom Styled App</h1>
				<p>
					This demonstrates the full styling capabilities of
					LumoraWrapper.
				</p>
			</div>
		</LumoraWrapper>
	);
};
```

### Style Prop Types

All style props accept the `SxProps<Theme>` type, which means you can use:

- **Object syntax**: `{ backgroundColor: 'red', padding: 2 }`
- **Function syntax**: `(theme) => ({ color: theme.palette.primary.main })`
- **Responsive values**: `{ xs: 'red', md: 'blue' }`
- **Pseudo-selectors**: `{ '&:hover': { backgroundColor: 'blue' } }`
- **Nested selectors**: `{ '& .MuiButton-root': { color: 'red' } }`
- **Theme functions**: `{ spacing: 2, palette: { primary: { main: 'red' } } }`

## Authentication Flow

The LumoraWrapper component includes built-in automatic token refresh functionality that works with the Lumora authentication API. Here's how the authentication flow works:

### Prerequisites

The wrapper expects the following tokens to be available in `localStorage`:

- `accessToken`: The current access token for API authentication
- `refreshToken`: The refresh token used to obtain new access tokens

### Host Application Responsibilities

1. **Handle Google OAuth Login**: Implement the Google OAuth flow in your application
2. **Store Tokens**: After successful OAuth callback, store the received tokens in localStorage:
    ```typescript
    // After OAuth callback
    localStorage.setItem('accessToken', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    ```
3. **Enable Token Refresh**: Set the `enableRefreshToken` prop to `true` on the LumoraWrapper component

### Automatic Token Refresh

When `enableRefreshToken` is enabled, the wrapper automatically:

- Attaches the access token to all API requests via Axios request interceptor
- Detects 401 Unauthorized responses from API calls
- Automatically calls the `/auth/refresh` endpoint with the refresh token
- Updates the access token in localStorage with the new token
- Retries the original failed request with the new token
- Redirects to `/login` if token refresh fails

## Environment Variables

The component requires the following environment variables to be set in your `.env` file:

| Variable            | Description                                                  | Default Value                    |
| ------------------- | ------------------------------------------------------------ | -------------------------------- |
| `VITE_API_BASE_URL` | Base URL for the Lumora API                                  | `https://dev.api.lumora.capital` |
| `VITE_API_KEY`      | API key for authentication (required for all auth endpoints) | -                                |

### Setup Instructions

1. Copy the `.env.example` file to `.env`:

    ```bash
    cp .env.example .env
    ```

2. Fill in your API key in the `.env` file:

    ```env
    VITE_API_BASE_URL=https://dev.api.lumora.capital
    VITE_API_KEY=your_api_key_here
    ```

3. The component will automatically use these variables for API communication.

## Core Features

- **Responsive Design**: Automatically adapts to mobile and desktop screen sizes
- **Flexible Layout**: Optional header and sidebar components that can be toggled on/off
- **Customizable Styling**: Full MUI SxProps support for complete visual customization
- **Automatic Token Refresh**: Built-in Axios interceptor that automatically refreshes authentication tokens when API calls receive 401 errors, ensuring seamless user experience without unexpected logouts
- **TypeScript Support**: Full TypeScript definitions included for better development experience
- **Material-UI Integration**: Built on top of Material-UI components for consistent design and theming

## Development

### Building for Distribution

**Important for Plugin Developers**: When pushing changes for a new version, you must run the build command to generate the distributable files:

```bash
# Build the library for distribution (generates dist/ folder)
npm run build
# or explicitly
npm run build:lib
```

This command:

- Compiles TypeScript to JavaScript
- Generates both ES modules (`lumora-wrapper-component.es.js`) and UMD (`lumora-wrapper-component.umd.js`) builds
- Creates TypeScript declaration files (`.d.ts`)
- Outputs everything to the `dist/` folder

**⚠️ Always run `npm run build` before pushing changes to ensure the latest code is available for installation via GitHub URL.**

### Why We Commit the /dist Folder

For libraries distributed via GitHub URL (like this one), committing the `/dist` folder is the standard approach. Here's why:

- **GitHub URL installation** (`npm install git+https://github.com/...`) expects the built files to be present in the repository
- **No CI/CD required** - works immediately after cloning
- **Simple setup** - developers can install directly without additional steps

This approach ensures that anyone can install the library directly from GitHub without needing to run build steps or have access to CI/CD systems.

### Available Build Commands

- **`npm run build`** or **`npm run build:lib`** - Builds the library for distribution (generates `dist/` folder)
- **`npm run build:demo`** - Builds the demo page for testing (generates `dist-demo/` folder)
- **`npm run dev`** - Starts the development server for the demo page
