import * as React from 'react';
import { cn } from '../../utils';

/** A loading placeholder (MUI Skeleton): the skeleton fill, pulsing. */
export function Skeleton({
	className,
	style,
	variant = 'rounded',
	animate = true,
	...props
}: React.HTMLAttributes<HTMLSpanElement> & {
	variant?: 'rounded' | 'circular' | 'text' | 'rectangular';
	animate?: boolean;
}) {
	return (
		<span
			data-slot='skeleton'
			aria-hidden
			className={cn(
				'lw:block lw:bg-skeleton',
				variant === 'circular' && 'lw:rounded-full',
				variant === 'rounded' && 'lw:rounded-md',
				variant === 'text' && 'lw:h-[1em] lw:rounded-sm',
				animate &&
					'lw:animate-[lw-skeleton-pulse_2s_ease-in-out_0.5s_infinite]',
				className
			)}
			style={style}
			{...props}
		/>
	);
}
