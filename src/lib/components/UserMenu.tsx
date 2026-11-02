import { BellIcon, LogOutIcon, SettingsIcon } from 'lucide-react';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../utils';
import { formatRole } from './sidebarUtils';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from './ui/dropdown-menu';

/**
 * An extra entry in the user menu (and the `panel` account menu), e.g.
 * "What's New". Give it an `onClick`, or a `path` to navigate through the
 * wrapper's `onLinkClick`; `onClick` wins when both are set.
 */
export type UserMenuItem = {
	key: string;
	label: string;
	icon?: React.ReactNode;
	/** Count shown as a red pill; hidden when 0 or unset. */
	badge?: number;
	onClick?: () => void;
	path?: string;
};

/** What the user menu shows; shared by the sidebar footer and the mobile bar. */
export interface UserMenuOptions {
	/** Avatar fill (initials fallback). */
	avatarColor: string;
	showNotifications: boolean;
	notificationCount: number;
	onNotificationsClick?: () => void;
	userName?: string;
	userRole?: string;
	userAvatar?: string;
	/** Host entries between Notifications and Settings. */
	menuItems?: UserMenuItem[];
	showSettings: boolean;
	onSettingsClick?: () => void;
	showThemeToggler: boolean;
	theme: 'light' | 'dark';
	onThemeToggle?: () => void;
	onLogout: () => void;
}

/** Display only: "SUPER_ADMIN" -> "SUPER ADMIN"; "USER" when unset. The stored role is untouched. */
const roleLabel = (role?: string) => (role ? formatRole(role) : 'USER');

/** "Gabriel Paet" -> "GP". */
const initials = (name: string) =>
	name
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map(part => part.charAt(0).toUpperCase())
		.join('');

const ELLIPSIS =
	'lw:max-w-full lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap';

export const CountPill: React.FC<{ count?: number }> = ({ count }) =>
	count ? (
		<span className='lw:h-5 lw:min-w-[22px] lw:rounded-[10px] lw:bg-destructive-fill lw:px-1.5 lw:text-center lw:text-xs lw:leading-5 lw:font-semibold lw:text-white'>
			{count > 99 ? '99+' : count}
		</span>
	) : null;

/** The user's avatar: their picture, else initials on `color`. */
export const UserAvatar: React.FC<{
	name: string;
	avatar?: string;
	color: string;
	size?: number;
}> = ({ name, avatar, color, size = 36 }) => {
	const [failed, setFailed] = React.useState(false);
	React.useEffect(() => setFailed(false), [avatar]);
	const showImage = Boolean(avatar) && !failed;
	return (
		<span
			className='lw:relative lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:overflow-hidden lw:rounded-full lw:leading-none lw:font-semibold lw:text-white lw:select-none'
			style={{
				width: size,
				height: size,
				fontSize: size * 0.36,
				backgroundColor: showImage ? undefined : color
			}}
		>
			{showImage ? (
				<img
					src={avatar}
					alt={name}
					onError={() => setFailed(true)}
					className='lw:size-full lw:object-cover'
				/>
			) : (
				initials(name)
			)}
		</span>
	);
};

/** Avatar beside name / role. */
export const Identity: React.FC<{
	name: string;
	role?: string;
	avatar?: string;
	avatarColor: string;
	showText: boolean;
}> = ({ name, role, avatar, avatarColor, showText }) => (
	<>
		<UserAvatar name={name} avatar={avatar} color={avatarColor} />
		{showText && (
			<span className='lw:flex lw:min-w-0 lw:grow lw:flex-col lw:items-start lw:text-left'>
				<span
					className={cn(
						ELLIPSIS,
						'lw:text-sm lw:leading-[1.43] lw:font-semibold'
					)}
				>
					{name}
				</span>
				<span
					className={cn(
						ELLIPSIS,
						'lw:text-xs lw:leading-[1.66] lw:opacity-80'
					)}
				>
					{roleLabel(role)}
				</span>
			</span>
		)}
	</>
);

/**
 * `above`: opens upward from a full-width row, left-aligned. `above-end`:
 * upward, right-aligned (the mobile bar's last item). `beside`: to the right
 * of a narrow rail.
 */
type Placement = 'above' | 'above-end' | 'beside';
const POSITIONS: Record<
	Placement,
	{ side: 'top' | 'right'; align: 'start' | 'end'; sideOffset: number }
> = {
	above: { side: 'top', align: 'start', sideOffset: 8 },
	'above-end': { side: 'top', align: 'end', sideOffset: 8 },
	beside: { side: 'right', align: 'end', sideOffset: 12 }
};

/** One row of the menu: icon, label, optional count. */
const ITEM =
	"lw:mx-1 lw:min-h-9 lw:gap-0 lw:rounded-md lw:px-4 lw:text-sm lw:[&_svg:not([class*='size-'])]:size-5";
const ITEM_ICON =
	'lw:inline-flex lw:min-w-9 lw:shrink-0 lw:items-center lw:text-muted-foreground';

interface UserMenuProps extends UserMenuOptions {
	anchorEl: HTMLElement | null;
	onClose: () => void;
	placement: Placement;
	/** Menu width in px; defaults to 240. */
	width?: number;
}

/**
 * The signed-in user's menu: notifications, host items, settings, the light /
 * dark switch and logout.
 */
const UserMenu: React.FC<UserMenuProps> = ({
	anchorEl,
	onClose,
	placement,
	width,
	avatarColor,
	showNotifications,
	notificationCount,
	onNotificationsClick,
	userName = 'User',
	userRole,
	userAvatar,
	menuItems = [],
	showSettings,
	onSettingsClick,
	showThemeToggler,
	theme,
	onThemeToggle,
	onLogout
}) => {
	const runAndClose = (callback?: () => void) => () => {
		onClose();
		callback?.();
	};

	// The menu opens against an element the caller holds (MUI Menu's
	// anchorEl): an invisible trigger over its box positions it, and on close
	// focus goes back to whatever opened it.
	const open = Boolean(anchorEl);
	const rect = open ? anchorEl!.getBoundingClientRect() : null;
	const returnFocus = React.useRef<HTMLElement | null>(null);
	React.useEffect(() => {
		if (open && typeof document !== 'undefined') {
			returnFocus.current = document.activeElement as HTMLElement | null;
		}
	}, [open]);
	const position = POSITIONS[placement];
	const themeOption = (value: 'light' | 'dark', label: string) => {
		const selected = theme === value;
		return (
			<button
				type='button'
				aria-pressed={selected}
				disabled={!onThemeToggle}
				// Stays open so the switch visibly flips
				onClick={() => !selected && onThemeToggle?.()}
				className={cn(
					'lw:h-8 lw:flex-1 lw:cursor-pointer lw:rounded-md lw:text-sm lw:font-medium lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50',
					selected
						? 'lw:bg-surface lw:text-foreground lw:shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.08)]'
						: 'lw:text-muted-foreground lw:hover:text-foreground'
				)}
			>
				{label}
			</button>
		);
	};

	return (
		<>
			{/* An invisible backdrop over the page while open, as MUI's
			    menu had: a press on it closes the menu, and as a React child
			    of the opener the pointer over it still counts as inside the
			    hover sidebar, which stays open beneath the menu. */}
			{open && typeof document !== 'undefined'
				? createPortal(
						<div
							aria-hidden='true'
							data-slot='menu-backdrop'
							className='lw:fixed lw:inset-0 lw:z-[1399]'
						/>,
						document.body
					)
				: null}
			<DropdownMenu
				open={open}
				onOpenChange={next => !next && onClose()}
				modal={false}
			>
				<DropdownMenuTrigger asChild>
					<span
						aria-hidden='true'
						tabIndex={-1}
						className='lw:pointer-events-none lw:fixed'
						style={{
							left: rect?.left ?? 0,
							top: rect?.top ?? 0,
							width: rect?.width ?? 0,
							height: rect?.height ?? 0
						}}
					/>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					side={position.side}
					align={position.align}
					sideOffset={position.sideOffset}
					collisionPadding={8}
					onCloseAutoFocus={event => {
						event.preventDefault();
						returnFocus.current?.focus?.();
					}}
					className='lw:min-w-0 lw:rounded-[10px] lw:px-0 lw:py-1 lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]'
					style={{
						width: width ?? 240,
						maxWidth: 'calc(100vw - 16px)'
					}}
				>
					<div className='lw:flex lw:flex-row lw:items-center lw:gap-2.5 lw:px-3 lw:py-2'>
						<Identity
							name={userName}
							role={userRole}
							avatar={userAvatar}
							avatarColor={avatarColor}
							showText
						/>
					</div>
					<DropdownMenuSeparator className='lw:mx-0' />
					{showNotifications && (
						<DropdownMenuItem
							className={ITEM}
							onSelect={runAndClose(onNotificationsClick)}
						>
							<span className={ITEM_ICON}>
								<BellIcon />
							</span>
							<span className='lw:flex-auto'>Notifications</span>
							<CountPill count={notificationCount} />
						</DropdownMenuItem>
					)}
					{menuItems.map(item => (
						<DropdownMenuItem
							key={item.key}
							className={ITEM}
							onSelect={runAndClose(item.onClick)}
						>
							<span className={ITEM_ICON}>{item.icon}</span>
							<span className='lw:flex-auto'>{item.label}</span>
							<CountPill count={item.badge} />
						</DropdownMenuItem>
					))}
					{showSettings && (
						<DropdownMenuItem
							className={ITEM}
							onSelect={runAndClose(onSettingsClick)}
						>
							<span className={ITEM_ICON}>
								<SettingsIcon />
							</span>
							<span className='lw:flex-auto'>Settings</span>
						</DropdownMenuItem>
					)}
					{showThemeToggler && (
						<>
							<DropdownMenuSeparator className='lw:mx-0' />
							<div className='lw:px-3 lw:py-2'>
								<span className='lw:mb-1.5 lw:block lw:text-xs lw:leading-[1.5] lw:font-normal lw:tracking-[0.08em] lw:text-muted-foreground lw:uppercase'>
									— Theme
								</span>
								<div
									role='group'
									aria-label='Theme'
									className='lw:flex lw:gap-1 lw:rounded-lg lw:bg-accent lw:p-1'
								>
									{themeOption('light', 'Light')}
									{themeOption('dark', 'Dark')}
								</div>
							</div>
						</>
					)}
					<DropdownMenuSeparator className='lw:mx-0' />
					<DropdownMenuItem
						className={cn(
							ITEM,
							// The dark palette's error colors are too dim on the dark menu
							theme === 'dark'
								? 'lw:text-[hsl(0,90%,65%)]'
								: 'lw:text-destructive'
						)}
						onSelect={runAndClose(onLogout)}
					>
						<span className={cn(ITEM_ICON, 'lw:text-inherit')}>
							<LogOutIcon className='lw:size-5 lw:text-current' />
						</span>
						<span className='lw:flex-auto'>Log out</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};

export default UserMenu;
