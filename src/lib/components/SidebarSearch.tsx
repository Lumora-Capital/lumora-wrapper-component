import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Popper from '@mui/material/Popper';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import GlassLayer from './GlassLayer';
import { LIQUID_GLASS_ENABLED } from './featureFlags';
import { RailGlassContext, useRailTooltipProps } from './RailLens';
import { FLOATING_RAIL_ICON_PX, FLOATING_RAIL_ITEM_PX } from './shellLayout';
import { MORPH_SPRING, SETTLE_SPRING, springTiming } from './glassMotion';
import {
	REDUCED_MOTION,
	contentIn,
	glassGrow,
	glassWellSx,
	GLASS_RADIUS_PX,
	useGlassAccentRgb,
	useSidebarSurface
} from './liquidGlass';
import { withAlpha } from './sidebarUtils';

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
}

/** Slot for the host's global search, under the brand and above the links. */
const SidebarSearch: React.FC<SidebarSearchProps> = ({
	search,
	mode,
	onExpand,
	autoFocus = false,
	onAutoFocused,
	color,
	hoverColor
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
			<Box
				ref={containerRef}
				data-testid='sidebar-search'
				sx={{ width: '100%' }}
			>
				{search}
			</Box>
		);
	}

	if (mode === 'popover' && onGlassRail) {
		return (
			<HoverSearch
				search={search}
				color={color}
				railTooltip={railTooltip}
			/>
		);
	}

	return (
		<Box
			data-testid='sidebar-search'
			sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
		>
			<Tooltip title='Search' placement='right' arrow {...railTooltip}>
				<IconButton
					aria-label='Search'
					onClick={event =>
						mode === 'expand'
							? onExpand?.()
							: setPopoverAnchor(event.currentTarget)
					}
					sx={{
						width: 44,
						height: 44,
						color,
						borderRadius: '8px',
						'&:hover': { bgcolor: hoverColor }
					}}
				>
					<SearchRoundedIcon />
				</IconButton>
			</Tooltip>
			<Popover
				open={Boolean(popoverAnchor)}
				anchorEl={popoverAnchor}
				onClose={() => setPopoverAnchor(null)}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'left' }}
				TransitionProps={{
					onEntered: node => focusFirstField(node as HTMLElement)
				}}
				slotProps={{ paper: { sx: { ml: 1, p: 1, width: 320 } } }}
			>
				{search}
			</Popover>
		</Box>
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
	color: string;
	railTooltip: ReturnType<typeof useRailTooltipProps>;
}> = ({ search, color, railTooltip }) => {
	const isDark = useTheme().palette.mode === 'dark';
	const well = glassWellSx(isDark, withAlpha(color, isDark ? 0.3 : 0.35));
	// Solid (glass look off): the host's field with the glass corner and
	// the sidebar accent as its focus border
	const accent = `rgb(${useGlassAccentRgb()})`;
	const surface = useSidebarSurface(isDark ? '#1e2430' : '#ffffff');
	const solidField = {
		'& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root': {
			borderRadius: `${GLASS_RADIUS_PX}px`,
			'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
				borderColor: accent
			}
		},
		'& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined': {
			borderRadius: `${GLASS_RADIUS_PX}px`,
			'&.Mui-focusVisible': { borderColor: accent }
		}
	};
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
		<Box
			data-testid='sidebar-search'
			sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
		>
			<Tooltip
				title={open ? '' : 'Search'}
				placement='right'
				arrow
				{...railTooltip}
			>
				<IconButton
					ref={iconRef}
					aria-label='Search'
					aria-expanded={open}
					onMouseEnter={enter}
					onMouseLeave={leave}
					onClick={() => {
						clearTimers();
						pinned.current = true;
						setOpen(true);
					}}
					sx={{
						width: FLOATING_RAIL_ITEM_PX,
						height: FLOATING_RAIL_ITEM_PX,
						color,
						borderRadius: `${GLASS_RADIUS_PX}px`
					}}
				>
					<SearchRoundedIcon
						sx={{ fontSize: FLOATING_RAIL_ICON_PX }}
					/>
				</IconButton>
			</Tooltip>
			<Popper
				open={open}
				anchorEl={iconRef.current}
				placement='right'
				modifiers={[
					{ name: 'offset', options: { offset: [0, 14] } },
					{ name: 'preventOverflow', options: { padding: 8 } }
				]}
				sx={{ zIndex: 1300 }}
			>
				<Box
					ref={cardRef}
					data-testid='sidebar-search-card'
					onMouseEnter={enter}
					onMouseLeave={leave}
					sx={{
						position: 'relative',
						width: 320,
						p: 1,
						borderRadius: `${GLASS_RADIUS_PX}px`
					}}
				>
					<GlassLayer
						isDark={isDark}
						solid={surface}
						sx={{
							position: 'absolute',
							inset: 0,
							borderRadius: 'inherit',
							transformOrigin: 'left center',
							animation: `${glassGrow} ${morph.duration}ms ${morph.easing} both`,
							[REDUCED_MOTION]: { animation: 'none' }
						}}
					/>
					<Box
						sx={{
							position: 'relative',
							// The host's field, set into the glass: an outlined
							// input or button becomes a recessed glass well.
							// Classes repeat to outrank the host's own styles.
							...(LIQUID_GLASS_ENABLED
								? {
										'& .MuiInputBase-root.MuiInputBase-root.MuiInputBase-root':
											{
												...well.rest,
												'&:hover': well.hover,
												'&.Mui-focused': well.focus
											},
										'& .MuiOutlinedInput-notchedOutline.MuiOutlinedInput-notchedOutline.MuiOutlinedInput-notchedOutline':
											{ border: 'none' },
										'& .MuiButton-outlined.MuiButton-outlined.MuiButton-outlined':
											{
												...well.rest,
												border: 'none',
												'&:hover': {
													...well.hover,
													border: 'none'
												},
												'&.Mui-focusVisible': well.focus
											}
									}
								: solidField),
							animation: `${contentIn} ${settle.duration}ms ${settle.easing} 60ms both`,
							[REDUCED_MOTION]: { animation: 'none' }
						}}
					>
						{search}
					</Box>
				</Box>
			</Popper>
		</Box>
	);
};

export default SidebarSearch;
