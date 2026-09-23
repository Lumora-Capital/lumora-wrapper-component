import { Close as CloseIcon, Tune as TuneIcon } from '@mui/icons-material';
import {
	Box,
	Button,
	Divider,
	Drawer,
	Fab,
	FormControlLabel,
	IconButton,
	Stack,
	Switch,
	ToggleButton,
	ToggleButtonGroup,
	Tooltip,
	Typography
} from '@mui/material';
import { useState } from 'react';
import type { DemoSettings, SidebarVariant } from './settings';

type BooleanKey = {
	[K in keyof DemoSettings]: DemoSettings[K] extends boolean ? K : never;
}[keyof DemoSettings];

const SWITCH_GROUPS: Array<{
	title: string;
	items: Array<{ key: BooleanKey; label: string }>;
}> = [
	{
		title: 'Layout',
		items: [
			{ key: 'showSidebar', label: 'Sidebar' },
			{ key: 'nestedLinks', label: 'Nested links (3 levels)' },
			{ key: 'showSidebarRailTitles', label: 'Rail titles (rail only)' },
			{ key: 'showAlert', label: 'Alert card' },
			{ key: 'brandColors', label: 'Centra brand colors' }
		]
	},
	{
		title: 'Sidebar chrome',
		items: [
			{ key: 'clickableBrand', label: 'Clickable brand' },
			{ key: 'showSearch', label: 'Search component' },
			{ key: 'showNotifications', label: 'Notifications' },
			{ key: 'notificationDrawer', label: 'Notification drawer' },
			{ key: 'showProfile', label: 'User menu' },
			{ key: 'showThemeToggler', label: 'Dark mode in user menu' }
		]
	},
	{
		title: 'Content & session',
		items: [
			{ key: 'showAssistant', label: 'Nexa button' },
			{ key: 'assistantBusy', label: 'Nexa busy' },
			{ key: 'chatSidebar', label: 'Chat panel (via Nexa)' },
			{ key: 'enableRefreshToken', label: 'Token check on mount' }
		]
	}
];

type PlaygroundPanelProps = {
	settings: DemoSettings;
	onChange: (patch: Partial<DemoSettings>) => void;
	onReset: () => void;
	onLogout: () => void;
};

/** Floating panel that edits the demo's LumoraWrapper props live. */
const PlaygroundPanel = ({
	settings,
	onChange,
	onReset,
	onLogout
}: PlaygroundPanelProps) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Tooltip title='Playground settings' placement='left'>
				<Fab
					color='primary'
					aria-label='Open playground settings'
					onClick={() => setOpen(true)}
					size='small'
					sx={{
						// Top right: the Nexa button owns the bottom-right corner
						position: 'fixed',
						right: 16,
						top: 16,
						// Above the page, below drawers/menus (1200+)
						zIndex: 1150
					}}
				>
					<TuneIcon />
				</Fab>
			</Tooltip>
			<Drawer
				anchor='right'
				open={open}
				onClose={() => setOpen(false)}
				slotProps={{ paper: { sx: { width: 320, p: 2 } } }}
			>
				<Stack
					direction='row'
					sx={{
						alignItems: 'center',
						justifyContent: 'space-between'
					}}
				>
					<Typography variant='h6'>Playground</Typography>
					<IconButton
						aria-label='Close playground settings'
						onClick={() => setOpen(false)}
					>
						<CloseIcon />
					</IconButton>
				</Stack>

				<Typography variant='overline' sx={{ mt: 1 }}>
					Sidebar variant
				</Typography>
				<ToggleButtonGroup
					exclusive
					fullWidth
					size='small'
					value={settings.sidebarVariant}
					onChange={(_, value: SidebarVariant | null) =>
						value && onChange({ sidebarVariant: value })
					}
				>
					<ToggleButton value='rail'>Rail</ToggleButton>
					<ToggleButton value='collapsible'>Collapsible</ToggleButton>
					<ToggleButton value='rail-labeled'>Labeled</ToggleButton>
				</ToggleButtonGroup>

				<Typography variant='overline' sx={{ mt: 1 }}>
					Theme
				</Typography>
				<ToggleButtonGroup
					exclusive
					fullWidth
					size='small'
					value={settings.mode}
					onChange={(_, value: DemoSettings['mode'] | null) =>
						value && onChange({ mode: value })
					}
				>
					<ToggleButton value='light'>Light</ToggleButton>
					<ToggleButton value='dark'>Dark</ToggleButton>
				</ToggleButtonGroup>

				{SWITCH_GROUPS.map(group => (
					<Box key={group.title} sx={{ mt: 1 }}>
						<Typography variant='overline'>
							{group.title}
						</Typography>
						<Stack>
							{group.items.map(({ key, label }) => (
								<FormControlLabel
									key={key}
									label={label}
									control={
										<Switch
											size='small'
											checked={settings[key]}
											onChange={e =>
												onChange({
													[key]: e.target.checked
												})
											}
										/>
									}
								/>
							))}
						</Stack>
					</Box>
				))}

				<Divider sx={{ my: 2 }} />
				<Stack spacing={1}>
					<Button variant='outlined' onClick={onLogout}>
						Log out (test the session gate)
					</Button>
					<Button
						variant='outlined'
						onClick={() => {
							localStorage.removeItem('lumora:sidebar-collapsed');
							window.location.reload();
						}}
					>
						Forget sidebar collapsed state
					</Button>
					<Button color='inherit' onClick={onReset}>
						Reset playground
					</Button>
				</Stack>
				<Typography
					variant='caption'
					sx={{ mt: 2, color: 'text.secondary' }}
				>
					Settings persist across reloads. Narrow the window below
					900px to see the mobile drawer.
				</Typography>
			</Drawer>
		</>
	);
};

export default PlaygroundPanel;
