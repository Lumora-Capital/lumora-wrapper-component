import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import type { SidebarLink, SidebarSubLink } from './LumoraWrapper';
import {
	deriveGroupTint,
	getContrastText,
	hasChildren,
	isSidebarLinkActive,
	isSubLinkActive,
	nodeKey
} from './sidebarUtils';

const CLOSE_DELAY_MS = 180;
/** Max width for rail subitem popover; longer labels truncate with ellipsis */
const RAIL_SUBMENU_MAX_WIDTH_PX = 250;
/** Solid fill behind an active secondary link (secondary links ignore the accent). */
const SECONDARY_ACTIVE_BG = '#01584F';

export type MenuContentVariant = 'rail' | 'drawer';

interface MenuContentProps {
	variant: MenuContentVariant;
	mainLinks: SidebarLink[];
	secondaryLinks?: SidebarLink[];
	activePath?: string;
	onLinkClick?: (path: string) => void;
	accentColor?: string;
	/** Light tint behind an active parent's child group and on hover (drawer variant).
	 * Defaults to a low-alpha wash derived from `accentColor`. */
	groupAccentColor?: string;
	/** Popover panel behind sublinks; matches desktop sidebar strip (e.g. contentBackgroundColor).
	 * Falls back to the Paper default (`background.paper`). */
	surfaceBackgroundColor?: string;
	/** Desktop rail only: show `link.text` under each icon */
	railShowTitles?: boolean;
}

/** Caption under rail icon: MUI Tooltip only when text is truncated (ellipsis) */
type RailTruncatingCaptionProps = {
	text: string;
	testId: string;
};

const RailTruncatingCaption: React.FC<RailTruncatingCaptionProps> = ({
	text,
	testId
}) => {
	const ref = React.useRef<HTMLElement>(null);
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
			placement='right'
			arrow
			enterDelay={400}
			disableHoverListener={!truncated}
			disableFocusListener={!truncated}
			disableTouchListener={!truncated}
		>
			<Typography
				ref={ref}
				variant='caption'
				component='span'
				aria-hidden
				data-testid={testId}
				sx={{
					display: 'block',
					width: '100%',
					textAlign: 'center',
					lineHeight: 1.1,
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					color: 'inherit'
				}}
			>
				{text}
			</Typography>
		</Tooltip>
	);
};

/** Colors and size shared by every rail row (leaf or submenu trigger). */
const getRailRowStyle = (
	isSecondary: boolean,
	accentColor: string,
	active: boolean,
	railShowTitles: boolean
) => {
	const size = isSecondary ? 48 : 44;
	const inactiveColor = isSecondary ? 'text.secondary' : accentColor;
	const activeBg = isSecondary ? SECONDARY_ACTIVE_BG : accentColor;

	// With titles, icon + label share one hit target and active background
	const sx = railShowTitles
		? {
				width: '100%',
				maxWidth: '100%',
				minWidth: size,
				height: 'auto',
				minHeight: size,
				flexDirection: 'column' as const,
				py: 0.5,
				// Horizontal padding so labels (esp. active fill) do not touch the box edges
				px: 1,
				borderRadius: '4px',
				color: active ? '#ffffff' : inactiveColor,
				backgroundColor: active ? activeBg : 'transparent',
				'&:hover': {
					backgroundColor: active ? activeBg : 'action.hover',
					borderRadius: '4px',
					color: active ? '#ffffff' : inactiveColor
				}
			}
		: {
				width: size,
				height: size,
				color: active ? '#ffffff' : inactiveColor,
				backgroundColor: active ? activeBg : 'transparent',
				borderRadius: active ? '4px' : '50%',
				'&:hover': {
					backgroundColor: active ? activeBg : 'action.hover',
					borderRadius: '4px'
				}
			};

	return { activeBg, sx };
};

/** Titled rail content: the icon with its (truncating) caption beneath. */
const RailIconWithCaption: React.FC<{ link: SidebarLink }> = ({ link }) => (
	<Stack alignItems='center' spacing={1} sx={{ width: '100%' }}>
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: 'inherit',
				'& .MuiSvgIcon-root': { color: 'inherit' }
			}}
		>
			{link.icon}
		</Box>
		<RailTruncatingCaption
			text={link.text}
			testId={`rail-item-caption-${link.text}`}
		/>
	</Stack>
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
		<Tooltip title={text} placement='right' arrow>
			{button}
		</Tooltip>
	);

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
	const theme = useTheme();
	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
	const [open, setOpen] = React.useState(false);
	const closeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(
		null
	);
	const popoverRef = React.useRef<HTMLDivElement | null>(null);
	const triggerRef = React.useRef<HTMLButtonElement | null>(null);
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
	const { activeBg: selectedRailFill, sx: triggerSx } = getRailRowStyle(
		isSecondary,
		accentColor,
		active,
		railShowTitles
	);

	const iconButton = (
		<IconButton
			ref={triggerRef}
			component={link.path ? 'a' : 'button'}
			href={link.path || undefined}
			aria-label={link.text}
			onFocus={() => {
				// Keyboard / programmatic focus: open when pointer did not already enter the trigger
				if (!mouseOnTriggerRef.current) {
					handleOpen();
				}
			}}
			onBlur={(e: React.FocusEvent) => {
				const next = e.relatedTarget as Node | null;
				if (next && popoverRef.current?.contains(next)) {
					return;
				}
				scheduleClose();
			}}
			onKeyDown={(e: React.KeyboardEvent) => {
				if (e.key === 'ArrowDown') {
					e.preventDefault();
					focusFirstOnOpenRef.current = true;
					handleOpen();
				}
			}}
			onClick={(e: React.MouseEvent) => {
				e.preventDefault();
				e.stopPropagation();
				if (link.path) {
					onLinkClick?.(link.path);
				}
			}}
			aria-haspopup='menu'
			aria-expanded={open}
			aria-controls={open ? menuListId : undefined}
			data-testid={`rail-submenu-trigger-${link.text}`}
			sx={triggerSx}
		>
			{railShowTitles ? <RailIconWithCaption link={link} /> : link.icon}
		</IconButton>
	);

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center'
			}}
		>
			<Box
				ref={setAnchorEl}
				data-testid={`rail-submenu-anchor-${link.text}`}
				sx={{ display: 'inline-flex', maxWidth: '100%' }}
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
			</Box>
			<Popper
				open={open && Boolean(anchorEl)}
				anchorEl={anchorEl}
				placement='right-start'
				modifiers={[{ name: 'offset', options: { offset: [8, 0] } }]}
				sx={{ zIndex: themeArg => themeArg.zIndex.modal }}
			>
				<Paper
					ref={popoverRef}
					elevation={0}
					onMouseEnter={cancelClose}
					onMouseLeave={scheduleClose}
					data-testid={`rail-submenu-panel-${link.text}`}
					sx={{
						bgcolor: surfaceBackgroundColor,
						backgroundImage: 'none',
						borderRadius: '4px',
						border: '1px solid',
						borderColor: 'divider',
						boxShadow: theme.shadows[8],
						maxWidth: RAIL_SUBMENU_MAX_WIDTH_PX,
						minWidth: 0,
						py: 0.5,
						boxSizing: 'border-box'
					}}
				>
					<MenuList
						id={menuListId}
						dense
						autoFocus={false}
						role='menu'
						sx={{
							bgcolor: 'transparent',
							py: 0,
							maxWidth: RAIL_SUBMENU_MAX_WIDTH_PX
						}}
					>
						{renderRailMenuItems(link.subitems!, link.text, 0)}
					</MenuList>
				</Paper>
			</Popper>
		</Box>
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
			if (hasChildren(sub)) {
				return [
					<ListSubheader
						key={key}
						disableSticky
						title={sub.text}
						sx={{
							bgcolor: 'transparent',
							lineHeight: '28px',
							pl: 2 + depth * 1.5,
							fontSize: '0.7rem',
							letterSpacing: '0.06em',
							textTransform: 'uppercase',
							color: 'text.secondary',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap'
						}}
					>
						{sub.text}
					</ListSubheader>,
					...renderRailMenuItems(sub.subitems!, key, depth + 1)
				];
			}
			return [
				<MenuItem
					key={key}
					role='menuitem'
					title={sub.text}
					disabled={!sub.path}
					selected={isSubLinkActive(sub, activePath)}
					onClick={e => {
						e.preventDefault();
						if (sub.path) {
							onLinkClick?.(sub.path);
						}
						setOpen(false);
					}}
					sx={{
						borderRadius: '4px',
						mx: 0.5,
						my: 0.125,
						pl: 2 + depth * 1.5,
						maxWidth: '100%',
						overflow: 'hidden',
						color: isSecondary ? 'text.secondary' : accentColor,
						'& .MuiListItemIcon-root': {
							color: 'inherit',
							minWidth: 36,
							flexShrink: 0,
							'& .MuiSvgIcon-root': {
								color: 'inherit'
							}
						},
						'& .MuiListItemText-root': {
							flex: '1 1 auto',
							minWidth: 0,
							overflow: 'hidden'
						},
						'& .MuiTypography-root': {
							color: 'inherit',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap'
						},
						'&:hover': {
							bgcolor: 'action.hover',
							borderRadius: '4px'
						},
						'&.Mui-selected': {
							bgcolor: selectedRailFill,
							color: '#ffffff',
							'&:hover': {
								bgcolor: selectedRailFill
							}
						},
						'&.Mui-focusVisible': {
							bgcolor: 'action.focus'
						}
					}}
				>
					{sub.icon ? <ListItemIcon>{sub.icon}</ListItemIcon> : null}
					<ListItemText
						primary={sub.text}
						primaryTypographyProps={{
							noWrap: true
						}}
					/>
				</MenuItem>
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
	const { sx } = getRailRowStyle(
		isSecondary,
		accentColor,
		active,
		railShowTitles
	);

	return withRailTooltip(
		<IconButton
			component={link.path ? 'a' : 'button'}
			href={link.path || undefined}
			aria-label={link.text}
			onClick={(e: React.MouseEvent) => {
				e.preventDefault();
				e.stopPropagation();
				if (link.path) {
					onLinkClick?.(link.path);
				}
			}}
			disabled={!link.path}
			sx={sx}
		>
			{railShowTitles ? <RailIconWithCaption link={link} /> : link.icon}
		</IconButton>,
		link.text,
		railShowTitles
	);
};

/**
 * Drawer row colors. Inactive items follow the accent in light mode; in dark
 * mode the accent is too dim on the dark surface, so fall back to the primary
 * text color (matches the desktop collapsible sidebar and the navbar brand).
 */
const useDrawerRowColors = (isSecondary: boolean, accentColor: string) => {
	const isDark = useTheme().palette.mode === 'dark';
	const inactiveColor = isSecondary
		? 'text.secondary'
		: isDark
			? 'text.primary'
			: accentColor;
	const activeBg = isSecondary ? SECONDARY_ACTIVE_BG : accentColor;
	return { inactiveColor, activeBg };
};

type DrawerRowProps = {
	link: SidebarLink;
	activePath?: string;
	onLinkClick?: (path: string) => void;
	accentColor: string;
	/** Light tint behind the active group container and on hover. */
	groupTint: string;
	/** Foreground on the active (solid) row. */
	activeFg: string;
	isSecondary: boolean;
};

type DrawerGroupProps = DrawerRowProps & {
	expanded: boolean;
	onToggle: () => void;
};

const DrawerExpandableRow: React.FC<DrawerGroupProps> = ({
	link,
	expanded,
	onToggle,
	activePath,
	onLinkClick,
	accentColor,
	groupTint,
	activeFg,
	isSecondary
}) => {
	// The whole group reads as "active" when the parent path or any child matches
	// (tinted container); the parent row itself is filled solid only when its own
	// path is the active route.
	const groupActive = isSidebarLinkActive(link, activePath);
	const parentActive = Boolean(link.path && activePath === link.path);
	const { inactiveColor, activeBg } = useDrawerRowColors(
		isSecondary,
		accentColor
	);

	// Sections under this parent, keyed by their path of texts; an active
	// section starts open, and a person's toggle wins after that.
	const [openSections, setOpenSections] = React.useState<
		Record<string, boolean>
	>({});
	const isSectionOpen = (sub: SidebarSubLink, key: string) =>
		openSections[key] ?? isSidebarLinkActive(sub, activePath);
	const toggleSection = (key: string, open: boolean) =>
		setOpenSections(prev => ({ ...prev, [key]: !open }));

	/** A child row at `depth` (1 = direct child); a section folds its pages. */
	const renderChild = (
		sub: SidebarSubLink,
		parentKey: string,
		depth: number
	): React.ReactNode => {
		const key = nodeKey(parentKey, sub);
		const rowActive = isSubLinkActive(sub, activePath);
		const rowSx = {
			pl: 4 + (depth - 1) * 2,
			py: 1,
			color: rowActive ? activeFg : inactiveColor,
			bgcolor: rowActive ? activeBg : 'transparent',
			'& .MuiListItemIcon-root': { color: 'inherit' },
			'&:hover': {
				bgcolor: rowActive ? activeBg : 'action.hover'
			}
		};
		const rowContent = (
			<>
				{sub.icon ? (
					<ListItemIcon sx={{ minWidth: 36 }}>
						{sub.icon}
					</ListItemIcon>
				) : null}
				<ListItemText primary={sub.text} />
			</>
		);

		if (hasChildren(sub)) {
			const open = isSectionOpen(sub, key);
			return (
				<Box key={key}>
					<ListItemButton
						onClick={() => toggleSection(key, open)}
						aria-expanded={open}
						data-testid={`drawer-section-trigger-${sub.text}`}
						sx={rowSx}
					>
						{rowContent}
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box component='nav' aria-label={sub.text}>
							{sub.subitems!.map(child =>
								renderChild(child, key, depth + 1)
							)}
						</Box>
					</Collapse>
				</Box>
			);
		}
		return (
			<ListItemButton
				key={key}
				disabled={!sub.path}
				onClick={() => sub.path && onLinkClick?.(sub.path)}
				sx={rowSx}
			>
				{rowContent}
			</ListItemButton>
		);
	};

	// A parent with its own path navigates on row click; the chevron toggles the
	// submenu independently. A parent without a path just toggles on row click.
	return (
		<Box
			sx={{
				borderRadius: '6px',
				bgcolor: groupActive ? groupTint : 'transparent'
			}}
		>
			<ListItemButton
				onClick={() =>
					link.path ? onLinkClick?.(link.path) : onToggle()
				}
				sx={{
					py: 1.5,
					px: 2,
					color: parentActive ? activeFg : inactiveColor,
					bgcolor: parentActive ? activeBg : 'transparent',
					'&:hover': {
						bgcolor: parentActive ? activeBg : groupTint
					}
				}}
				data-testid={`drawer-expand-trigger-${link.text}`}
			>
				<ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
					{link.icon}
				</ListItemIcon>
				<ListItemText primary={link.text} />
				<IconButton
					size='small'
					edge='end'
					aria-label={
						expanded
							? `Collapse ${link.text}`
							: `Expand ${link.text}`
					}
					onClick={e => {
						e.stopPropagation();
						onToggle();
					}}
					sx={{ color: 'inherit' }}
					data-testid={`drawer-expand-chevron-${link.text}`}
				>
					{expanded ? <ExpandLess /> : <ExpandMore />}
				</IconButton>
			</ListItemButton>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<Box component='nav' aria-label={link.text}>
					{link.subitems!.map(sub =>
						renderChild(sub, nodeKey('', link), 1)
					)}
				</Box>
			</Collapse>
		</Box>
	);
};

const DrawerLeafRow: React.FC<DrawerRowProps> = ({
	link,
	activePath,
	onLinkClick,
	accentColor,
	groupTint,
	activeFg,
	isSecondary
}) => {
	const active = Boolean(link.path && activePath === link.path);
	const { inactiveColor, activeBg } = useDrawerRowColors(
		isSecondary,
		accentColor
	);

	return (
		<ListItemButton
			disabled={!link.path}
			onClick={() => link.path && onLinkClick?.(link.path)}
			sx={{
				py: 1.5,
				px: 2,
				color: active ? activeFg : inactiveColor,
				bgcolor: active ? activeBg : 'transparent',
				'&:hover': {
					bgcolor: active ? activeBg : groupTint
				}
			}}
		>
			<ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
				{link.icon}
			</ListItemIcon>
			<ListItemText primary={link.text} />
		</ListItemButton>
	);
};

const RailDivider = () => (
	<Box
		sx={{
			width: '100%',
			display: 'flex',
			justifyContent: 'center'
		}}
	>
		<Divider sx={{ width: '60%', borderColor: 'divider' }} />
	</Box>
);

/** The wider-spaced divider between the main and secondary link groups. */
const SectionDivider = () => (
	<Box
		sx={{
			width: '100%',
			my: 2,
			display: 'flex',
			justifyContent: 'center'
		}}
	>
		<Divider sx={{ width: '60%', borderColor: 'divider' }} />
	</Box>
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
	variant,
	mainLinks,
	secondaryLinks = [],
	activePath,
	onLinkClick,
	accentColor = '#01584f',
	groupAccentColor,
	surfaceBackgroundColor,
	railShowTitles = false
}) => {
	// Foreground on the solid active fill, and the light group/hover tint —
	// derived from the accent so they track a custom `accentColor` (matches the
	// desktop collapsible sidebar). `groupAccentColor` overrides the tint.
	const activeFg = getContrastText(accentColor);
	const groupTint = groupAccentColor ?? deriveGroupTint(accentColor);

	// Drawer groups' open state, keyed by list ('main' / 'secondary') and index.
	const [drawerExpanded, setDrawerExpanded] = React.useState<
		Record<string, boolean>
	>({});

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

	const renderDrawerLink = (
		link: SidebarLink,
		index: number,
		isSecondary: boolean
	) => {
		const rowProps = {
			link,
			activePath,
			onLinkClick,
			accentColor,
			groupTint,
			activeFg,
			isSecondary
		};
		if (hasChildren(link)) {
			const key = `${isSecondary ? 'secondary' : 'main'}-${index}`;
			return (
				<DrawerExpandableRow
					{...rowProps}
					expanded={Boolean(drawerExpanded[key])}
					onToggle={() =>
						setDrawerExpanded(prev => ({
							...prev,
							[key]: !prev[key]
						}))
					}
				/>
			);
		}
		return <DrawerLeafRow {...rowProps} />;
	};

	if (variant === 'drawer') {
		return (
			<Stack
				sx={{
					flexGrow: 1,
					width: '100%',
					alignItems: 'stretch',
					pt: 2,
					gap: 0
				}}
			>
				<Stack sx={{ width: '100%' }}>
					{renderWithDividers(mainLinks, (link, index) =>
						renderDrawerLink(link, index, false)
					)}
				</Stack>
				{secondaryLinks.length > 0 ? (
					<>
						<SectionDivider />
						<Box sx={{ mt: 'auto', pb: 2 }}>
							<Stack sx={{ width: '100%' }}>
								{renderWithDividers(
									secondaryLinks,
									(link, index) =>
										renderDrawerLink(link, index, true)
								)}
							</Stack>
						</Box>
					</>
				) : null}
			</Stack>
		);
	}

	const railGap = railShowTitles ? 1.25 : 1;
	return (
		<Stack
			sx={{
				flexGrow: 1,
				width: '100%',
				boxSizing: 'border-box',
				justifyContent: 'flex-start',
				alignItems: 'center',
				pt: 2,
				gap: railGap
			}}
		>
			{renderWithDividers(mainLinks, link => renderRailLink(link, false))}
			{secondaryLinks.length > 0 ? (
				<>
					<SectionDivider />
					<Box sx={{ mt: 'auto', pb: 2 }}>
						<Stack gap={railGap} alignItems='center'>
							{renderWithDividers(secondaryLinks, link =>
								renderRailLink(link, true)
							)}
						</Stack>
					</Box>
				</>
			) : null}
		</Stack>
	);
};

export default MenuContent;
