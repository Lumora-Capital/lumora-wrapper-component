import * as React from 'react';
import { cn } from '../utils';
import HoverTooltip from './HoverTooltip';
import type { SidebarLink, SidebarSubLink } from './LumoraWrapper';
import {
	hasChildren,
	isInAppClick,
	isSidebarLinkActive,
	isSubLinkActive,
	nodeKey
} from './sidebarUtils';
import { Popover, PopoverAnchor, PopoverContent } from './ui/popover';
import { Separator } from './ui/separator';
import { Tooltip } from './ui/tooltip';

const CLOSE_DELAY_MS = 180;
/** Max width for rail subitem popover; longer labels truncate with ellipsis */
const RAIL_SUBMENU_MAX_WIDTH_PX = 250;
/** Solid fill behind an active secondary link (secondary links ignore the accent). */
const SECONDARY_ACTIVE_BG = '#01584F';
/** Idle colour of secondary links and section headings (MUI text.secondary). */
const SECONDARY_TEXT = 'var(--lw-text-muted)';

/** The fixed desktop icon rail (`sidebarVariant='rail'`). */
interface MenuContentProps {
	mainLinks: SidebarLink[];
	secondaryLinks?: SidebarLink[];
	activePath?: string;
	onLinkClick?: (path: string) => void;
	accentColor?: string;
	/** Popover panel behind sublinks; matches desktop sidebar strip (e.g. contentBackgroundColor).
	 * Falls back to the surface token (`--bg-surface`). */
	surfaceBackgroundColor?: string;
	/** Show `link.text` under each icon */
	railShowTitles?: boolean;
}

/** Caption under rail icon: a tooltip only when text is truncated (ellipsis) */
type RailTruncatingCaptionProps = {
	text: string;
	testId: string;
};

const RailTruncatingCaption: React.FC<RailTruncatingCaptionProps> = ({
	text,
	testId
}) => {
	const ref = React.useRef<HTMLSpanElement>(null);
	const [truncated, setTruncated] = React.useState(false);

	const measure = React.useCallback(() => {
		const el = ref.current;
		if (!el) {
			return;
		}
		setTruncated(el.scrollWidth > el.clientWidth + 0.5);
	}, []);

	React.useLayoutEffect(() => {
		measure();
	}, [measure, text]);

	React.useEffect(() => {
		const el = ref.current;
		if (!el) {
			return undefined;
		}
		const ro = new ResizeObserver(() => measure());
		ro.observe(el);
		return () => ro.disconnect();
	}, [measure]);

	return (
		<Tooltip
			title={text}
			side='right'
			arrow
			delayDuration={400}
			disabled={!truncated}
		>
			<span
				ref={ref}
				aria-hidden
				data-testid={testId}
				className='lw:block lw:w-full lw:overflow-hidden lw:text-center lw:text-xs lw:leading-[1.1] lw:text-ellipsis lw:whitespace-nowrap lw:text-inherit'
			>
				{text}
			</span>
		</Tooltip>
	);
};

/** The icon-button frame every rail row shares (MUI IconButton's box). */
const RAIL_BUTTON_CLASS =
	'lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:transition-[background-color,border-radius] lw:duration-150 lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50 lw:[&_svg]:size-6';

/** Colors and size shared by every rail row (leaf or submenu trigger). */
const getRailRowStyle = (
	isSecondary: boolean,
	accentColor: string,
	active: boolean,
	railShowTitles: boolean
) => {
	const size = isSecondary ? 48 : 44;
	const inactiveColor = isSecondary ? SECONDARY_TEXT : accentColor;
	const activeBg = isSecondary ? SECONDARY_ACTIVE_BG : accentColor;

	// With titles, icon + label share one hit target and active background
	const className = cn(
		RAIL_BUTTON_CLASS,
		railShowTitles
			? 'lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:rounded-sm lw:px-2 lw:py-1'
			: active
				? 'lw:rounded-sm'
				: 'lw:rounded-full lw:hover:rounded-sm',
		!active && 'lw:hover:bg-accent'
	);
	const style: React.CSSProperties = {
		color: active ? '#ffffff' : inactiveColor,
		backgroundColor: active ? activeBg : undefined,
		...(railShowTitles
			? { minWidth: size, minHeight: size }
			: { width: size, height: size })
	};

	return { activeBg, className, style };
};

/** Titled rail content: the icon with its (truncating) caption beneath. */
const RailIconWithCaption: React.FC<{ link: SidebarLink }> = ({ link }) => (
	<span className='lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-2'>
		<span className='lw:flex lw:items-center lw:justify-center lw:text-inherit'>
			{link.icon}
		</span>
		<RailTruncatingCaption
			text={link.text}
			testId={`rail-item-caption-${link.text}`}
		/>
	</span>
);

/** Untitled rail icons name themselves in a tooltip; titled ones already show the label. */
const withRailTooltip = (
	button: React.ReactElement,
	text: string,
	railShowTitles: boolean
) =>
	railShowTitles ? (
		button
	) : (
		<HoverTooltip title={text} side='right' arrow>
			{button}
		</HoverTooltip>
	);

/** Arrow keys move between a menu's rows, as MUI's MenuList did. */
const onMenuKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
	const keys = ['ArrowDown', 'ArrowUp', 'Home', 'End'];
	if (!keys.includes(event.key)) {
		return;
	}
	const items = Array.from(
		event.currentTarget.querySelectorAll<HTMLElement>(
			'[role="menuitem"]:not([aria-disabled="true"])'
		)
	);
	if (!items.length) {
		return;
	}
	event.preventDefault();
	const index = items.indexOf(document.activeElement as HTMLElement);
	const next =
		event.key === 'Home'
			? 0
			: event.key === 'End'
				? items.length - 1
				: event.key === 'ArrowDown'
					? (index + 1) % items.length
					: (index - 1 + items.length) % items.length;
	items[next].focus();
};

// Desktop rail item with a hover/keyboard submenu: subitems live only in the
// popper; clicking the parent icon navigates to the parent's own path.
type RailSubmenuProps = {
	link: SidebarLink;
	activePath?: string;
	onLinkClick?: (path: string) => void;
	accentColor: string;
	isSecondary: boolean;
	surfaceBackgroundColor?: string;
	railShowTitles: boolean;
};

const RailSubmenuRow: React.FC<RailSubmenuProps> = ({
	link,
	activePath,
	onLinkClick,
	accentColor,
	isSecondary,
	surfaceBackgroundColor,
	railShowTitles
}) => {
	const [open, setOpen] = React.useState(false);
	const closeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(
		null
	);
	const popoverRef = React.useRef<HTMLDivElement | null>(null);
	const triggerRef = React.useRef<HTMLElement | null>(null);
	const mouseOnTriggerRef = React.useRef(false);
	const focusFirstOnOpenRef = React.useRef(false);
	const menuListId = React.useId();

	const cancelClose = () => {
		if (closeTimerRef.current) {
			clearTimeout(closeTimerRef.current);
			closeTimerRef.current = null;
		}
	};

	const scheduleClose = () => {
		cancelClose();
		closeTimerRef.current = setTimeout(() => {
			setOpen(false);
			closeTimerRef.current = null;
		}, CLOSE_DELAY_MS);
	};

	const handleOpen = () => {
		cancelClose();
		setOpen(true);
	};

	React.useEffect(() => {
		if (!open) {
			return;
		}
		const onDocKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setOpen(false);
				triggerRef.current?.focus();
			}
		};
		document.addEventListener('keydown', onDocKeyDown);
		return () => document.removeEventListener('keydown', onDocKeyDown);
	}, [open]);

	React.useEffect(() => {
		if (!open || !focusFirstOnOpenRef.current) {
			return;
		}
		const t = globalThis.requestAnimationFrame(() => {
			const first = popoverRef.current?.querySelector(
				'[role="menuitem"]'
			) as HTMLElement | null;
			first?.focus();
			focusFirstOnOpenRef.current = false;
		});
		return () => cancelAnimationFrame(t);
	}, [open]);

	// Filled rail look when this parent or one of its subitems is active (not for the whole popover)
	const active = isSidebarLinkActive(link, activePath);
	const {
		activeBg: selectedRailFill,
		className: triggerClassName,
		style: triggerStyle
	} = getRailRowStyle(isSecondary, accentColor, active, railShowTitles);

	const triggerProps = {
		'aria-label': link.text,
		onFocus: () => {
			// Keyboard / programmatic focus: open when pointer did not already enter the trigger
			if (!mouseOnTriggerRef.current) {
				handleOpen();
			}
		},
		onBlur: (e: React.FocusEvent) => {
			const next = e.relatedTarget as Node | null;
			if (next && popoverRef.current?.contains(next)) {
				return;
			}
			scheduleClose();
		},
		onKeyDown: (e: React.KeyboardEvent) => {
			if (e.key === 'ArrowDown') {
				e.preventDefault();
				focusFirstOnOpenRef.current = true;
				handleOpen();
			}
		},
		onClick: (e: React.MouseEvent) => {
			e.stopPropagation();
			// Anything but a plain click is the browser's: a new tab
			if (link.path && !isInAppClick(e)) {
				return;
			}
			e.preventDefault();
			if (link.path) {
				onLinkClick?.(link.path);
			}
		},
		'aria-haspopup': 'menu' as const,
		'aria-expanded': open,
		'aria-controls': open ? menuListId : undefined,
		'data-testid': `rail-submenu-trigger-${link.text}`,
		className: triggerClassName,
		style: triggerStyle
	};
	const content = railShowTitles ? (
		<RailIconWithCaption link={link} />
	) : (
		link.icon
	);
	const iconButton = link.path ? (
		<a
			ref={triggerRef as React.Ref<HTMLAnchorElement>}
			href={link.path}
			{...triggerProps}
		>
			{content}
		</a>
	) : (
		<button
			ref={triggerRef as React.Ref<HTMLButtonElement>}
			type='button'
			{...triggerProps}
		>
			{content}
		</button>
	);

	return (
		<Popover open={open}>
			<div className='lw:flex lw:w-full lw:justify-center'>
				<PopoverAnchor asChild>
					<div
						data-testid={`rail-submenu-anchor-${link.text}`}
						className='lw:inline-flex lw:max-w-full'
						onMouseEnter={() => {
							mouseOnTriggerRef.current = true;
							handleOpen();
						}}
						onMouseLeave={() => {
							mouseOnTriggerRef.current = false;
							scheduleClose();
						}}
					>
						{withRailTooltip(iconButton, link.text, railShowTitles)}
					</div>
				</PopoverAnchor>
			</div>
			<PopoverContent
				ref={popoverRef}
				unstyled
				side='right'
				align='start'
				sideOffset={8}
				// Focus stays where it is; ArrowDown moves it in (above)
				onOpenAutoFocus={e => e.preventDefault()}
				onCloseAutoFocus={e => e.preventDefault()}
				onInteractOutside={e => {
					if (triggerRef.current?.contains(e.target as Node)) {
						e.preventDefault();
						return;
					}
					setOpen(false);
				}}
				onEscapeKeyDown={() => setOpen(false)}
				onMouseEnter={cancelClose}
				onMouseLeave={scheduleClose}
				data-testid={`rail-submenu-panel-${link.text}`}
				className='lw:z-[1300] lw:min-w-0 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-popover lw:py-1 lw:text-popover-foreground lw:shadow-popover'
				style={{
					backgroundColor: surfaceBackgroundColor,
					maxWidth: RAIL_SUBMENU_MAX_WIDTH_PX
				}}
			>
				<div
					id={menuListId}
					role='menu'
					onKeyDown={onMenuKeyDown}
					style={{ maxWidth: RAIL_SUBMENU_MAX_WIDTH_PX }}
				>
					{renderRailMenuItems(link.subitems!, link.text, 0)}
				</div>
			</PopoverContent>
		</Popover>
	);

	/**
	 * The popover's rows. A section (a child with children) is a small
	 * heading followed by its pages, indented a step — a hover menu has no
	 * room for a second level of chevrons, and reading the section name above
	 * its pages is what a person needs to find "Campaigns" under "Marketing".
	 */
	function renderRailMenuItems(
		items: SidebarSubLink[],
		parentKey: string,
		depth: number
	): React.ReactNode[] {
		return items.flatMap(sub => {
			const key = nodeKey(parentKey, sub);
			// MUI's 16px row inset, a 12px step per level
			const indent = 16 + depth * 12;
			if (hasChildren(sub)) {
				return [
					<div
						key={key}
						role='presentation'
						title={sub.text}
						className='lw:overflow-hidden lw:pr-4 lw:text-[0.7rem] lw:leading-[28px] lw:font-medium lw:tracking-[0.06em] lw:text-ellipsis lw:whitespace-nowrap lw:uppercase lw:text-muted-foreground'
						style={{ paddingLeft: indent }}
					>
						{sub.text}
					</div>,
					...renderRailMenuItems(sub.subitems!, key, depth + 1)
				];
			}
			const selected = isSubLinkActive(sub, activePath);
			const Row = sub.path ? 'a' : 'div';
			return [
				<Row
					key={key}
					role='menuitem'
					tabIndex={-1}
					title={sub.text}
					aria-disabled={sub.path ? undefined : true}
					data-selected={selected ? 'true' : undefined}
					{...(sub.path ? { href: sub.path } : {})}
					onClick={(e: React.MouseEvent) => {
						if (!sub.path) {
							return;
						}
						if (!isInAppClick(e)) {
							return;
						}
						e.preventDefault();
						onLinkClick?.(sub.path);
						setOpen(false);
					}}
					className={cn(
						'lw:mx-1 lw:my-[1px] lw:flex lw:min-h-8 lw:max-w-full lw:cursor-pointer lw:items-center lw:overflow-hidden lw:rounded-sm lw:pr-4 lw:text-sm lw:outline-none lw:select-none lw:[&_svg]:size-5',
						!selected &&
							'lw:hover:bg-accent lw:focus-visible:bg-selected',
						!sub.path && 'lw:pointer-events-none lw:opacity-40'
					)}
					style={{
						paddingLeft: indent,
						color: selected
							? '#ffffff'
							: isSecondary
								? SECONDARY_TEXT
								: accentColor,
						backgroundColor: selected ? selectedRailFill : undefined
					}}
				>
					{sub.icon ? (
						<span className='lw:inline-flex lw:min-w-9 lw:shrink-0 lw:text-inherit'>
							{sub.icon}
						</span>
					) : null}
					<span className='lw:min-w-0 lw:flex-auto lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap'>
						{sub.text}
					</span>
				</Row>
			];
		});
	}
};

type RailLeafProps = {
	link: SidebarLink;
	activePath?: string;
	onLinkClick?: (path: string) => void;
	accentColor: string;
	isSecondary: boolean;
	railShowTitles: boolean;
};

const RailLeafRow: React.FC<RailLeafProps> = ({
	link,
	activePath,
	onLinkClick,
	accentColor,
	isSecondary,
	railShowTitles
}) => {
	const active = Boolean(link.path && activePath === link.path);
	const { className, style } = getRailRowStyle(
		isSecondary,
		accentColor,
		active,
		railShowTitles
	);
	const onClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		// Anything but a plain click is the browser's: a new tab
		if (link.path && !isInAppClick(e)) {
			return;
		}
		e.preventDefault();
		if (link.path) {
			onLinkClick?.(link.path);
		}
	};
	const content = railShowTitles ? (
		<RailIconWithCaption link={link} />
	) : (
		link.icon
	);

	return withRailTooltip(
		link.path ? (
			<a
				href={link.path}
				aria-label={link.text}
				onClick={onClick}
				className={className}
				style={style}
			>
				{content}
			</a>
		) : (
			<button
				type='button'
				aria-label={link.text}
				onClick={onClick}
				disabled
				className={className}
				style={style}
			>
				{content}
			</button>
		),
		link.text,
		railShowTitles
	);
};

const RailDivider = () => (
	<div className='lw:flex lw:w-full lw:justify-center'>
		<Separator className='lw:w-[60%]' />
	</div>
);

/** The wider-spaced divider between the main and secondary link groups. */
const SectionDivider = () => (
	<div className='lw:my-4 lw:flex lw:w-full lw:justify-center'>
		<Separator className='lw:w-[60%]' />
	</div>
);

/** Renders each link with a `RailDivider` between consecutive items. */
const renderWithDividers = (
	links: SidebarLink[],
	renderLink: (link: SidebarLink, index: number) => React.ReactNode
) =>
	links.map((link, index) => (
		<React.Fragment key={index}>
			{renderLink(link, index)}
			{index < links.length - 1 ? <RailDivider /> : null}
		</React.Fragment>
	));

const MenuContent: React.FC<MenuContentProps> = ({
	mainLinks,
	secondaryLinks = [],
	activePath,
	onLinkClick,
	accentColor = '#01584f',
	surfaceBackgroundColor,
	railShowTitles = false
}) => {
	const renderRailLink = (link: SidebarLink, isSecondary: boolean) => {
		if (hasChildren(link)) {
			return (
				<RailSubmenuRow
					link={link}
					activePath={activePath}
					onLinkClick={onLinkClick}
					accentColor={accentColor}
					isSecondary={isSecondary}
					surfaceBackgroundColor={surfaceBackgroundColor}
					railShowTitles={railShowTitles}
				/>
			);
		}
		return (
			<RailLeafRow
				link={link}
				activePath={activePath}
				onLinkClick={onLinkClick}
				accentColor={accentColor}
				isSecondary={isSecondary}
				railShowTitles={railShowTitles}
			/>
		);
	};

	const railGap = railShowTitles ? 'lw:gap-2.5' : 'lw:gap-2';
	return (
		<div
			className={cn(
				'lw:box-border lw:flex lw:w-full lw:grow lw:flex-col lw:items-center lw:justify-start lw:pt-4',
				railGap
			)}
		>
			{renderWithDividers(mainLinks, link => renderRailLink(link, false))}
			{secondaryLinks.length > 0 ? (
				<>
					<SectionDivider />
					<div className='lw:mt-auto lw:pb-4'>
						<div
							className={cn(
								'lw:flex lw:flex-col lw:items-center',
								railGap
							)}
						>
							{renderWithDividers(secondaryLinks, link =>
								renderRailLink(link, true)
							)}
						</div>
					</div>
				</>
			) : null}
		</div>
	);
};

export default MenuContent;
