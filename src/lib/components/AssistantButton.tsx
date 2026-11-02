import * as React from 'react';
import { cn } from '../utils';
import { LIQUID_GLASS_ENABLED } from './featureFlags';
import Kbd from './Kbd';
import NexaLogo from './NexaLogo';
import { RailGlassContext, useRailTooltipProps } from './RailLens';
import { GEL_SPRING, springTiming } from './glassMotion';
import {
	GLASS_RADIUS_PX,
	REDUCED_MOTION_NONE,
	glassTintStyle
} from './liquidGlass';
import { useIsDark } from './shellTheme';
import { FLOATING_RAIL_ITEM_PX } from './shellLayout';
import { Tooltip } from './ui/tooltip';

const gel = springTiming(GEL_SPRING);

const BEAM = '#09C1AE';

/** MUI's elevation 4 and 6, the floating button's resting and hover shadow. */
const SHADOW_4 =
	'0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)';
const SHADOW_6 =
	'0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)';

/** Classes on a button that carries the beam: its content sits above it. */
const BEAM_HOST =
	'lw:relative lw:overflow-hidden lw:[&>*]:relative lw:[&>*]:z-[2]';

/**
 * Animated "beam" travelling around the border, shown only while a chat is
 * ongoing. `cover` paints over the interior so only a ~2px line stays visible.
 */
const Beam: React.FC<{ radiusPx: number; cover: string }> = ({
	radiusPx,
	cover
}) => (
	<>
		<span
			aria-hidden
			className='lw:pointer-events-none lw:absolute! lw:inset-[-50%] lw:z-0! lw:animate-spin lw:motion-reduce:animate-none'
			style={{
				background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${BEAM} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
				animationDuration: '3s'
			}}
		/>
		<span
			aria-hidden
			className='lw:pointer-events-none lw:absolute! lw:inset-[2px] lw:z-[1]!'
			style={{ borderRadius: radiusPx - 2, background: cover }}
		/>
	</>
);

interface AssistantButtonProps {
	/**
	 * `sidebar`: full-width "Ask Nexa" row under the brand. `sidebar-icon`: the
	 * same launcher as an icon on the collapsed and narrow rails. `floating`:
	 * pinned to the bottom-right corner of the page.
	 */
	variant: 'sidebar' | 'sidebar-icon' | 'floating';
	onClick?: () => void;
	/** Chat open — reflected via `aria-pressed` and a stronger outline. */
	active?: boolean;
	/** Animate the beam border while a chat is ongoing. */
	busy?: boolean;
	/** Keyboard hint, e.g. `['⌘', 'J']`; omitted when there is no shortcut. */
	shortcutKeys?: string[];
	/** Sidebar variants: tint of the row, border and label. */
	accentColor?: string;
	/** Floating: extra distance from the right edge (e.g. the docked chat). */
	rightOffsetPx?: number;
}

const AssistantButton: React.FC<AssistantButtonProps> = ({
	variant,
	onClick,
	active = false,
	busy = false,
	shortcutKeys,
	accentColor = '#01584f',
	rightOffsetPx = 0
}) => {
	const railTooltip = useRailTooltipProps();
	const onGlassRail = React.useContext(RailGlassContext);
	const isDark = useIsDark();
	const tooltip = shortcutKeys
		? `Ask Nexa (${shortcutKeys.join('')})`
		: 'Ask Nexa';
	const common = {
		type: 'button' as const,
		onClick,
		'aria-label': 'Ask Nexa',
		'aria-pressed': active,
		'data-testid': 'assistant-button'
	};
	// The teal-tinted launcher of the sidebar variants
	const tinted = cn(
		'lw:border lw:border-solid lw:bg-[rgba(9,193,174,0.08)] lw:hover:bg-[rgba(9,193,174,0.14)]',
		active ? 'lw:border-[#09C1AE]' : 'lw:border-[rgba(9,193,174,0.45)]'
	);

	if (variant === 'sidebar') {
		return (
			<button
				{...common}
				data-variant='sidebar'
				className={cn(
					'lw:flex lw:h-11 lw:w-full lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-lg lw:px-3 lw:outline-none lw:transition-[border-color,background-color] lw:duration-150 lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-[#09C1AE] lw:focus-visible:outline-offset-2',
					tinted,
					busy && BEAM_HOST
				)}
				style={{ color: accentColor }}
			>
				{busy && <Beam radiusPx={8} cover='var(--lw-bg-surface)' />}
				<NexaLogo size={20} />
				<span className='lw:grow lw:text-left lw:text-sm lw:font-semibold lw:text-inherit'>
					Ask Nexa
				</span>
				{shortcutKeys && <Kbd keys={shortcutKeys} />}
			</button>
		);
	}

	if (variant === 'sidebar-icon' && onGlassRail && LIQUID_GLASS_ENABLED) {
		// On the glass rail: a drop of teal-tinted glass. It keeps its own
		// fill on hover (the rail's lens glides behind it), swells like a gel
		// button, and rings with light while the chat is open.
		const tint = glassTintStyle(BEAM, isDark, 'clear');
		return (
			<Tooltip title={tooltip} side='right' arrow {...railTooltip}>
				<button
					{...common}
					data-variant='sidebar-icon'
					data-rail-keep-fill
					className={cn(
						'lw:inline-flex lw:cursor-pointer lw:items-center lw:justify-center lw:outline-none lw:hover:[transform:scale(1.07)] lw:active:[transform:scale(0.92)] lw:active:[transition-duration:90ms]! lw:motion-reduce:hover:[transform:none] lw:motion-reduce:active:[transform:none] lw:[&_svg]:[filter:drop-shadow(0_1px_1.5px_rgba(0,0,0,0.25))]',
						REDUCED_MOTION_NONE,
						busy && BEAM_HOST
					)}
					style={{
						width: FLOATING_RAIL_ITEM_PX,
						height: FLOATING_RAIL_ITEM_PX,
						borderRadius: GLASS_RADIUS_PX,
						background: tint.background,
						boxShadow: active
							? `${tint.boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)`
							: tint.boxShadow,
						backdropFilter: 'blur(8px) saturate(180%)',
						WebkitBackdropFilter: 'blur(8px) saturate(180%)',
						transition: `transform ${gel.duration}ms ${gel.easing}, box-shadow 200ms ease`
					}}
				>
					{busy && (
						// The same light over a glass interior (tint over an
						// opaque base, so the beam stays a 2px line)
						<Beam
							radiusPx={GLASS_RADIUS_PX}
							cover={`${tint.background}, ${isDark ? '#16202c' : '#f2fbfa'}`}
						/>
					)}
					<NexaLogo size={18} />
				</button>
			</Tooltip>
		);
	}

	if (variant === 'sidebar-icon') {
		const size = onGlassRail ? FLOATING_RAIL_ITEM_PX : 44;
		return (
			<Tooltip title={tooltip} side='right' arrow {...railTooltip}>
				<button
					{...common}
					data-variant='sidebar-icon'
					data-rail-keep-fill={onGlassRail || undefined}
					className={cn(
						'lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring',
						tinted,
						busy && BEAM_HOST
					)}
					style={{ width: size, height: size }}
				>
					{busy && <Beam radiusPx={8} cover='var(--lw-bg-surface)' />}
					<NexaLogo size={onGlassRail ? 18 : 20} />
				</button>
			</Tooltip>
		);
	}

	return (
		<Tooltip title={tooltip} side='left'>
			<button
				{...common}
				data-variant='floating'
				className={cn(
					'lw:fixed lw:bottom-6 lw:z-[1150] lw:inline-flex lw:size-[52px] lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-2xl lw:bg-surface lw:p-0 lw:outline-offset-2 lw:transition-[right,box-shadow] lw:duration-[225ms] lw:ease-in-out lw:[box-shadow:var(--lw-shadow-rest)] lw:hover:[box-shadow:var(--lw-shadow-hover)] lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-[#09C1AE]',
					active
						? 'lw:outline-2 lw:outline-solid lw:outline-[#09C1AE]'
						: 'lw:outline-none',
					busy && BEAM_HOST
				)}
				style={
					{
						right: 24 + rightOffsetPx,
						'--lw-shadow-rest': SHADOW_4,
						'--lw-shadow-hover': SHADOW_6
					} as React.CSSProperties
				}
			>
				{busy && <Beam radiusPx={16} cover='var(--lw-bg-surface)' />}
				<span className='lw:flex lw:items-center'>
					<NexaLogo size={26} />
				</span>
			</button>
		</Tooltip>
	);
};

export default AssistantButton;
