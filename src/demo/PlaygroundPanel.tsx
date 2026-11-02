import { SlidersHorizontalIcon, XIcon } from 'lucide-react';
import { Dialog, Switch, ToggleGroup, Tooltip } from 'radix-ui';
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
			{ key: 'mobileDrawer', label: 'Mobile: drawer, no bottom bar' },
			{ key: 'pinDealsOnMobile', label: 'Mobile: pin Deals in the bar' },
			{ key: 'nestedLinks', label: 'Nested links (3 levels)' },
			{
				key: 'flyoutSubmenu',
				label: 'Flyout submenus (collapsible, panel)'
			},
			{ key: 'sidebarAutoHide', label: 'Auto-hide rail (flyout)' },
			{ key: 'showSidebarRailTitles', label: 'Rail titles (rail only)' },
			{ key: 'showAlert', label: 'Alert card' },
			{ key: 'brandColors', label: 'Centra colors (light mode)' },
			{ key: 'detailPage', label: 'Detail page (full-width header)' },
			{ key: 'noContentPadding', label: 'No content padding' }
		]
	},
	{
		title: 'Sidebar chrome',
		items: [
			{ key: 'clickableBrand', label: 'Clickable brand' },
			{ key: 'platformSwitcher', label: 'Platform switcher (logo)' },
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
			{ key: 'floatingAssistant', label: 'Floating Nexa' },
			{ key: 'assistantBusy', label: 'Nexa busy' },
			{ key: 'chatSidebar', label: 'Chat panel (via Nexa)' },
			{ key: 'floatingChat', label: 'Chat as floating card' },
			{ key: 'enableRefreshToken', label: 'Token check on mount' },
			{ key: 'holdSessionSkeleton', label: 'Session check skeleton' }
		]
	}
];

type PlaygroundPanelProps = {
	settings: DemoSettings;
	onChange: (patch: Partial<DemoSettings>) => void;
	onReset: () => void;
	onLogout: () => void;
};

const overlineClass =
	'mt-2 mb-1 block text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase';

/** A segmented control (MUI ToggleButtonGroup, exclusive and full width). */
const Segmented = <T extends string>({
	label,
	value,
	options,
	onChange
}: {
	label: string;
	value: T;
	options: Array<{ value: T; label: string }>;
	onChange: (value: T) => void;
}) => (
	<>
		<span className={overlineClass}>{label}</span>
		<ToggleGroup.Root
			type='single'
			aria-label={label}
			value={value}
			onValueChange={next => next && onChange(next as T)}
			className='flex rounded-md border border-border'
		>
			{options.map(option => (
				<ToggleGroup.Item
					key={option.value}
					value={option.value}
					className='h-8 flex-1 cursor-pointer border-l border-border text-[13px] font-medium text-muted-foreground first:rounded-l-md first:border-l-0 last:rounded-r-md hover:bg-accent data-[state=on]:bg-primary/12 data-[state=on]:text-primary'
				>
					{option.label}
				</ToggleGroup.Item>
			))}
		</ToggleGroup.Root>
	</>
);

/** Floating panel that edits the demo's LumoraWrapper props live. */
const PlaygroundPanel = ({
	settings,
	onChange,
	onReset,
	onLogout
}: PlaygroundPanelProps) => {
	const [open, setOpen] = useState(false);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Tooltip.Provider delayDuration={300}>
				<Tooltip.Root>
					<Tooltip.Trigger asChild>
						<Dialog.Trigger
							aria-label='Open playground settings'
							// Desktop: top right (the floating Nexa option uses the
							// bottom-right corner). Phones: above the bottom bar,
							// clear of the notifications bell in the top bar.
							// Above the page, below drawers/menus (1200+).
							className='fixed right-4 bottom-[88px] z-[1150] inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-popover hover:bg-primary-hover md:top-4 md:bottom-auto'
						>
							<SlidersHorizontalIcon className='size-5' />
						</Dialog.Trigger>
					</Tooltip.Trigger>
					<Tooltip.Portal>
						<Tooltip.Content
							side='left'
							sideOffset={4}
							className='z-[1500] rounded-md bg-[#2f3640] px-2 py-1 text-xs font-medium text-white'
						>
							Playground settings
						</Tooltip.Content>
					</Tooltip.Portal>
				</Tooltip.Root>
			</Tooltip.Provider>
			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 z-[1200] bg-black/35 data-[state=open]:animate-in data-[state=open]:fade-in-0' />
				<Dialog.Content
					aria-describedby={undefined}
					className='fixed inset-y-0 right-0 z-[1200] flex w-80 flex-col overflow-y-auto border-l border-border bg-surface p-4 text-foreground shadow-popover outline-none data-[state=open]:animate-in data-[state=open]:slide-in-from-right'
				>
					<div className='flex items-center justify-between'>
						<Dialog.Title className='text-lg font-semibold'>
							Playground
						</Dialog.Title>
						<Dialog.Close
							aria-label='Close playground settings'
							className='inline-flex size-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:bg-accent'
						>
							<XIcon className='size-5' />
						</Dialog.Close>
					</div>

					<Segmented<SidebarVariant>
						label='Sidebar variant'
						value={settings.sidebarVariant}
						onChange={value => onChange({ sidebarVariant: value })}
						options={[
							{ value: 'rail', label: 'Rail' },
							{ value: 'collapsible', label: 'Collapsible' },
							{ value: 'rail-labeled', label: 'Labeled' },
							{ value: 'panel', label: 'Panel' }
						]}
					/>
					<Segmented<DemoSettings['mode']>
						label='Theme'
						value={settings.mode}
						onChange={value => onChange({ mode: value })}
						options={[
							{ value: 'light', label: 'Light' },
							{ value: 'dark', label: 'Dark' }
						]}
					/>

					{SWITCH_GROUPS.map(group => (
						<div key={group.title} className='mt-2'>
							<span className={overlineClass}>{group.title}</span>
							<div className='flex flex-col'>
								{group.items.map(({ key, label }) => (
									<label
										key={key}
										className='flex cursor-pointer items-center gap-2.5 py-1 text-sm'
									>
										<Switch.Root
											checked={settings[key]}
											onCheckedChange={checked =>
												onChange({ [key]: checked })
											}
											className='relative h-4 w-7 shrink-0 cursor-pointer rounded-full bg-black/25 transition-colors data-[state=checked]:bg-primary dark:bg-white/30'
										>
											<Switch.Thumb className='block size-3 translate-x-0.5 rounded-full bg-white shadow transition-transform data-[state=checked]:translate-x-3.5' />
										</Switch.Root>
										{label}
									</label>
								))}
							</div>
						</div>
					))}

					<hr className='my-4 border-border' />
					<div className='flex flex-col gap-2'>
						<button
							type='button'
							onClick={onLogout}
							className='h-8 cursor-pointer rounded-md border border-primary px-3 text-sm font-semibold text-primary hover:bg-primary/6'
						>
							Log out (test the session gate)
						</button>
						<button
							type='button'
							onClick={onReset}
							className='h-8 cursor-pointer rounded-md px-3 text-sm font-semibold hover:bg-accent'
						>
							Reset playground
						</button>
					</div>
					<p className='mt-4 text-xs text-muted-foreground'>
						Settings persist across reloads. Narrow the window below
						900px to see the mobile drawer.
					</p>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default PlaygroundPanel;
