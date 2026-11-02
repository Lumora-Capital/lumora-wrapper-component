import { SearchIcon } from 'lucide-react';
import * as React from 'react';
import { cn } from '../utils';
import GlassLayer from './GlassLayer';
import { LIQUID_GLASS_ENABLED } from './featureFlags';
import { RailGlassContext, useRailTooltipProps } from './RailLens';
import { FLOATING_RAIL_ICON_PX, FLOATING_RAIL_ITEM_PX } from './shellLayout';
import { MORPH_SPRING, SETTLE_SPRING, springTiming } from './glassMotion';
import {
	REDUCED_MOTION_NONE,
	contentIn,
	glassGrow,
	glassWell,
	GLASS_RADIUS_PX,
	useGlassAccentRgb,
	useSidebarSurface
} from './liquidGlass';
import { useIsDark } from './shellTheme';
import { withAlpha } from './sidebarUtils';
import { Popover, PopoverAnchor, PopoverContent } from './ui/popover';
import { Tooltip } from './ui/tooltip';

/** Hover search on the glass rail: pause before opening, grace before
 * closing (so the pointer can cross from the icon to the field). */
const HOVER_OPEN_DELAY_MS = 120;
const HOVER_CLOSE_DELAY_MS = 300;
const morph = springTiming(MORPH_SPRING);
const settle = springTiming(SETTLE_SPRING);

/** The host field's current text, if it has one. */
const fieldValue = (container: HTMLElement | null) =>
	container?.querySelector<HTMLInputElement>('input, textarea')?.value ?? '';

const FOCUSABLE = 'input, textarea, [contenteditable="true"]';

/** Focus the host search field inside `container`, if it has one. */
const focusFirstField = (container: HTMLElement | null) => {
	container?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
};

interface SidebarSearchProps {
	/** The host app's search component. */
	search: React.ReactNode;
	/** The icon in place of the default magnifier. */
	icon?: React.ReactNode;
	/**
	 * `full`: the component inline. `expand`: an icon that asks the owner to
	 * expand the sidebar (the collapsed collapsible variant). `popover`: an
	 * icon that opens the component beside the rail (fixed narrow rails).
	 */
	mode: 'full' | 'expand' | 'popover';
	/** `expand` mode: called on click; the owner expands and sets `autoFocus`. */
	onExpand?: () => void;
	/** `full` mode: focus the field once mounted (after an expand request). */
	autoFocus?: boolean;
	onAutoFocused?: () => void;
	color: string;
	hoverColor: string;
	/** The host's search shortcut (e.g. ['⌘', 'K']), named in the icon's tooltip. */
	shortcutKeys?: string[];
}

/**
 * The host's own field set into the shell (Nexa's input / button primitives,
 * `data-slot`, or a bare input): the glass corner and the sidebar accent
 * (`--lw-accent`) as its focus border.
 */
const SOLID_FIELD =
	'lw:[&_:is([data-slot=input],[data-slot=button],input:not([data-slot]))]:rounded-[6px] lw:[&_:is([data-slot=input],[data-slot=button]):focus-visible]:border-(--lw-accent) lw:[&_:is([data-slot=input]):focus-visible]:ring-(--lw-accent)';

/**
 * Glass look on: the field becomes a recessed glass well (the `glassWell`
 * variables set on the wrapper), its own outline dropped.
 */
const WELL_FIELD =
	'lw:[&_:is([data-slot=input],[data-slot=button])]:rounded-[6px] lw:[&_:is([data-slot=input],[data-slot=button])]:border-none lw:[&_:is([data-slot=input],[data-slot=button])]:bg-(--lw-well-bg) lw:[&_:is([data-slot=input],[data-slot=button])]:shadow-(--lw-well-shadow) lw:[&_:is([data-slot=input],[data-slot=button]):hover]:bg-(--lw-well-hover-bg) lw:[&_:is([data-slot=input],[data-slot=button]):focus-visible]:bg-(--lw-well-focus-bg) lw:[&_:is([data-slot=input],[data-slot=button]):focus-visible]:shadow-(--lw-well-focus-shadow) lw:[&_:is([data-slot=input],[data-slot=button]):focus-visible]:ring-0';

/** "Search", with the host's shortcut when it has one: "Search (⌘K)". */
const searchTooltip = (shortcutKeys?: string[]) =>
	shortcutKeys ? `Search (${shortcutKeys.join('')})` : 'Search';

/** Slot for the host's global search, under the brand and above the links. */
const SidebarSearch: React.FC<SidebarSearchProps> = ({
	search,
	icon,
	mode,
	onExpand,
	autoFocus = false,
	onAutoFocused,
	color,
	hoverColor,
	shortcutKeys
}) => {
	const railTooltip = useRailTooltipProps();
	const onGlassRail = React.useContext(RailGlassContext);
	const containerRef = React.useRef<HTMLDivElement>(null);
	const [popoverAnchor, setPopoverAnchor] =
		React.useState<HTMLElement | null>(null);

	React.useEffect(() => {
		if (mode === 'full' && autoFocus) {
			focusFirstField(containerRef.current);
			onAutoFocused?.();
		}
	}, [mode, autoFocus, onAutoFocused]);

	if (mode === 'full') {
		return (
			<div
				ref={containerRef}
				data-testid='sidebar-search'
				data-lw-host=''
				className='lw:w-full'
			>
				{search}
			</div>
		);
	}

	if (mode === 'popover' && onGlassRail) {
		return (
			<HoverSearch
				search={search}
				icon={icon}
				color={color}
				railTooltip={railTooltip}
				tooltip={searchTooltip(shortcutKeys)}
			/>
		);
	}

	return (
		<div
			data-testid='sidebar-search'
			className='lw:flex lw:w-full lw:justify-center'
		>
			<Popover
				open={Boolean(popoverAnchor)}
				onOpenChange={next => !next && setPopoverAnchor(null)}
			>
				<Tooltip
					title={searchTooltip(shortcutKeys)}
					side='right'
					arrow
					{...railTooltip}
				>
					<PopoverAnchor asChild>
						<button
							type='button'
							aria-label='Search'
							onClick={event =>
								mode === 'expand'
									? onExpand?.()
									: setPopoverAnchor(event.currentTarget)
							}
							className='lw:inline-flex lw:size-11 lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:[&_svg]:size-6'
							style={
								{
									color,
									'--lw-hover': hoverColor
								} as React.CSSProperties
							}
						>
							{icon ?? <SearchIcon />}
						</button>
					</PopoverAnchor>
				</Tooltip>
				<PopoverContent
					side='right'
					align='start'
					sideOffset={8}
					collisionPadding={8}
					onOpenAutoFocus={event => {
						event.preventDefault();
						focusFirstField(event.currentTarget as HTMLElement);
					}}
					className='lw:w-80 lw:p-2'
				>
					<div data-lw-host=''>{search}</div>
				</PopoverContent>
			</Popover>
		</div>
	);
};

/**
 * Search on the glass rail: the field opens beside the icon on hover — a
 * glass card growing out of it — and takes focus. Leaving closes it again,
 * unless something has been typed: then it stays until a click outside or
 * Escape. A click on the icon pins it open.
 */
const HoverSearch: React.FC<{
	search: React.ReactNode;
	icon?: React.ReactNode;
	color: string;
	railTooltip: ReturnType<typeof useRailTooltipProps>;
	tooltip: string;
}> = ({ search, icon, color, railTooltip, tooltip }) => {
	const isDark = useIsDark();
	const well = glassWell(isDark, withAlpha(color, isDark ? 0.3 : 0.35));
	// Solid (glass look off): the host's field with the glass corner and
	// the sidebar accent as its focus border
	const accent = `rgb(${useGlassAccentRgb()})`;
	const surface = useSidebarSurface(isDark ? '#1e2430' : '#ffffff');
	const iconRef = React.useRef<HTMLButtonElement>(null);
	const cardRef = React.useRef<HTMLDivElement>(null);
	const [open, setOpen] = React.useState(false);
	const pinned = React.useRef(false);
	const openTimer = React.useRef<ReturnType<typeof setTimeout>>(undefined);
	const closeTimer = React.useRef<ReturnType<typeof setTimeout>>(undefined);

	const clearTimers = () => {
		clearTimeout(openTimer.current);
		clearTimeout(closeTimer.current);
	};
	const close = React.useCallback(() => {
		clearTimers();
		pinned.current = false;
		setOpen(false);
	}, []);
	const enter = () => {
		clearTimeout(closeTimer.current);
		if (!open) {
			clearTimeout(openTimer.current);
			openTimer.current = setTimeout(
				() => setOpen(true),
				HOVER_OPEN_DELAY_MS
			);
		}
	};
	const leave = () => {
		clearTimeout(openTimer.current);
		clearTimeout(closeTimer.current);
		closeTimer.current = setTimeout(() => {
			// Typed into, or pinned by a click: it stays
			if (!pinned.current && !fieldValue(cardRef.current)) {
				setOpen(false);
			}
		}, HOVER_CLOSE_DELAY_MS);
	};

	React.useEffect(() => clearTimers, []);

	// Open: the field takes focus. A press outside, or Escape, closes it.
	React.useEffect(() => {
		if (!open) {
			return undefined;
		}
		const focus = setTimeout(() => focusFirstField(cardRef.current));
		const onPointerDown = (event: PointerEvent) => {
			const target = event.target as Node;
			if (
				!cardRef.current?.contains(target) &&
				!iconRef.current?.contains(target)
			) {
				close();
			}
		};
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				close();
				iconRef.current?.focus();
			}
		};
		document.addEventListener('pointerdown', onPointerDown);
		document.addEventListener('keydown', onKeyDown);
		return () => {
			clearTimeout(focus);
			document.removeEventListener('pointerdown', onPointerDown);
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [open, close]);

	return (
		<div
			data-testid='sidebar-search'
			className='lw:flex lw:w-full lw:justify-center'
		>
			<Popover
				open={open}
				onOpenChange={next => !next && close()}
				modal={false}
			>
				<Tooltip
					title={open ? '' : tooltip}
					side='right'
					arrow
					{...railTooltip}
				>
					<PopoverAnchor asChild>
						<button
							ref={iconRef}
							type='button'
							aria-label='Search'
							aria-expanded={open}
							onMouseEnter={enter}
							onMouseLeave={leave}
							onClick={() => {
								clearTimers();
								pinned.current = true;
								setOpen(true);
							}}
							className='lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring'
							style={{
								width: FLOATING_RAIL_ITEM_PX,
								height: FLOATING_RAIL_ITEM_PX,
								color,
								borderRadius: GLASS_RADIUS_PX
							}}
						>
							{icon ?? (
								<SearchIcon
									style={{
										width: FLOATING_RAIL_ICON_PX,
										height: FLOATING_RAIL_ICON_PX
									}}
								/>
							)}
						</button>
					</PopoverAnchor>
				</Tooltip>
				<PopoverContent
					unstyled
					side='right'
					align='center'
					sideOffset={14}
					collisionPadding={8}
					// HoverSearch focuses the field and handles outside
					// presses and Escape itself
					onOpenAutoFocus={event => event.preventDefault()}
					onCloseAutoFocus={event => event.preventDefault()}
					onInteractOutside={event => {
						if (iconRef.current?.contains(event.target as Node)) {
							event.preventDefault();
						}
					}}
					className='lw:z-[1300]'
				>
					<div
						ref={cardRef}
						data-testid='sidebar-search-card'
						onMouseEnter={enter}
						onMouseLeave={leave}
						className='lw:relative lw:w-80 lw:p-2'
						style={{ borderRadius: GLASS_RADIUS_PX }}
					>
						<GlassLayer
							isDark={isDark}
							solid={surface}
							className={cn(
								'lw:absolute lw:inset-0 lw:origin-left lw:rounded-[inherit]',
								REDUCED_MOTION_NONE
							)}
							style={{
								animation: `${glassGrow} ${morph.duration}ms ${morph.easing} both`
							}}
						/>
						<div
							data-lw-host=''
							// The host's field, set into the glass: an outlined
							// input or button becomes a recessed glass well
							className={cn(
								'lw:relative',
								LIQUID_GLASS_ENABLED ? WELL_FIELD : SOLID_FIELD,
								REDUCED_MOTION_NONE
							)}
							style={
								{
									...(LIQUID_GLASS_ENABLED
										? well.style
										: { '--lw-accent': accent }),
									animation: `${contentIn} ${settle.duration}ms ${settle.easing} 60ms both`
								} as React.CSSProperties
							}
						>
							{search}
						</div>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default SidebarSearch;
