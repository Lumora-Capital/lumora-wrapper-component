import * as React from 'react';
import { cn } from '../../utils';

/** A hairline rule (MUI Divider) in the border token. */
export function Separator({
	orientation = 'horizontal',
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement> & {
	orientation?: 'horizontal' | 'vertical';
}) {
	return (
		<div
			role='separator'
			aria-orientation={orientation}
			data-slot='separator'
			className={cn(
				'lw:shrink-0 lw:bg-border',
				orientation === 'horizontal'
					? 'lw:h-px lw:w-full'
					: 'lw:w-px lw:self-stretch',
				className
			)}
			{...props}
		/>
	);
}
