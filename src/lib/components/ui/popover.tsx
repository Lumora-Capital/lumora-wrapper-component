import { Popover as PopoverPrimitive } from 'radix-ui';
import * as React from 'react';
import { cn } from '../../utils';
import { useShellScopeProps } from '../shellTheme';

export const Popover = PopoverPrimitive.Root;
export const PopoverAnchor = PopoverPrimitive.Anchor;

/** Nexa's popover card: 6px radius, hairline border, the floating shadow. */
const popoverCardClassName =
	'lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none';

export const PopoverContent = React.forwardRef<
	React.ComponentRef<typeof PopoverPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
		/** Drop the card look (a glass card draws its own). */
		unstyled?: boolean;
	}
>(
	(
		{
			className,
			align = 'start',
			sideOffset = 4,
			unstyled = false,
			...props
		},
		ref
	) => {
		const scope = useShellScopeProps();
		return (
			<PopoverPrimitive.Portal>
				<PopoverPrimitive.Content
					ref={ref}
					{...scope}
					data-slot='popover-content'
					align={align}
					sideOffset={sideOffset}
					className={cn(
						'lw:z-[1400] lw:outline-none',
						!unstyled &&
							cn(
								popoverCardClassName,
								'lw:p-3 lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95'
							),
						className
					)}
					{...props}
				/>
			</PopoverPrimitive.Portal>
		);
	}
);
PopoverContent.displayName = 'PopoverContent';
