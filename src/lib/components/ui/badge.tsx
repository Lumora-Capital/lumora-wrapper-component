import * as React from 'react';
import { cn } from '../../utils';

/**
 * A count badge on an icon (MUI Badge): a pill at the top-right corner, or a
 * dot. Hidden (`data-invisible`) at zero unless `showZero`. The pill is
 * Nexa's destructive fill, as MUI's `error` badge was.
 */
export function CountBadge({
	count = 0,
	max = 99,
	dot = false,
	showZero = false,
	invisible,
	children,
	className,
	badgeClassName,
	badgeStyle,
	label
}: {
	count?: number;
	max?: number;
	dot?: boolean;
	showZero?: boolean;
	invisible?: boolean;
	children: React.ReactNode;
	className?: string;
	badgeClassName?: string;
	badgeStyle?: React.CSSProperties;
	/** Accessible text for the badge (it is aria-hidden otherwise). */
	label?: string;
}) {
	const hidden = invisible ?? (!showZero && count <= 0);
	return (
		<span
			className={cn(
				'lw:relative lw:inline-flex lw:shrink-0 lw:align-middle',
				className
			)}
		>
			{children}
			<span
				data-slot='badge'
				data-dot={dot ? 'true' : undefined}
				data-invisible={hidden ? 'true' : 'false'}
				aria-hidden={label ? undefined : true}
				aria-label={label}
				className={cn(
					'lw:pointer-events-none lw:absolute lw:top-0 lw:right-0 lw:z-[1] lw:flex lw:translate-x-1/2 lw:-translate-y-1/2 lw:items-center lw:justify-center lw:rounded-full lw:bg-destructive-fill lw:font-semibold lw:text-white lw:transition-transform lw:duration-200',
					dot
						? 'lw:size-2'
						: 'lw:h-5 lw:min-w-5 lw:px-1.5 lw:text-[0.75rem] lw:leading-none',
					hidden && 'lw:scale-0',
					badgeClassName
				)}
				style={badgeStyle}
			>
				{dot ? null : count > max ? `${max}+` : count}
			</span>
		</span>
	);
}
