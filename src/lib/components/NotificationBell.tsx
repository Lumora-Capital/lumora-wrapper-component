import { BellIcon } from 'lucide-react';
import * as React from 'react';
import { cn } from '../utils';
import { RailGlassContext, useRailTooltipProps } from './RailLens';
import { FLOATING_RAIL_ITEM_PX } from './shellLayout';
import { CountBadge } from './ui/badge';
import { Tooltip } from './ui/tooltip';

/** The host's bell icon (`notificationsIcon`), in place of the default. */
export const NotificationIconContext =
	React.createContext<React.ReactNode>(undefined);

interface NotificationBellProps {
	count: number;
	onClick?: () => void;
	color: string;
	hoverColor: string;
	tooltipPlacement: 'right' | 'bottom';
	testId: string;
}

/** Bell with the unread badge (sidebar footer and the mobile top bar). */
const NotificationBell: React.FC<NotificationBellProps> = ({
	count,
	onClick,
	color,
	hoverColor,
	tooltipPlacement,
	testId
}) => {
	const railTooltip = useRailTooltipProps();
	const icon = React.useContext(NotificationIconContext);
	// On the floating rail it matches the rail's icon buttons
	const onGlassRail = React.useContext(RailGlassContext);
	const label = count ? `Notifications, ${count} unread` : 'Notifications';
	return (
		<Tooltip title={label} side={tooltipPlacement} arrow {...railTooltip}>
			<button
				type='button'
				onClick={onClick}
				aria-label={label}
				data-testid={testId}
				className={cn(
					'lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-fg) lw:[&_svg]:size-6',
					!onGlassRail && 'lw:p-2'
				)}
				style={
					{
						color,
						'--lw-fg': color,
						'--lw-hover': hoverColor,
						...(onGlassRail
							? {
									width: FLOATING_RAIL_ITEM_PX,
									height: FLOATING_RAIL_ITEM_PX
								}
							: {})
					} as React.CSSProperties
				}
			>
				<CountBadge
					count={count}
					max={99}
					badgeClassName='lw:h-4 lw:min-w-4 lw:px-1 lw:text-[10px]'
				>
					{icon ?? <BellIcon />}
				</CountBadge>
			</button>
		</Tooltip>
	);
};

export default NotificationBell;
