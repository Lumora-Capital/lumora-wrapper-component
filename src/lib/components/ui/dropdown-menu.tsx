import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import * as React from 'react';
import { cn } from '../../utils';
import { useShellScopeProps } from '../shellTheme';

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

/** Nexa's menu row: 32px, 4px radius, the hover wash on focus. */
const menuItemClassName =
	"lw:relative lw:flex lw:min-h-8 lw:cursor-pointer lw:items-center lw:gap-2 lw:rounded-sm lw:px-2 lw:py-1 lw:text-sm lw:outline-none lw:select-none lw:focus:bg-accent lw:data-[highlighted]:bg-accent lw:data-[disabled]:pointer-events-none lw:data-[disabled]:opacity-50 lw:data-[variant=destructive]:text-destructive lw:[&_svg]:pointer-events-none lw:[&_svg]:shrink-0 lw:[&_svg:not([class*='size-'])]:size-4";

const menuContentClassName =
	'lw:z-[1400] lw:max-h-(--radix-dropdown-menu-content-available-height) lw:min-w-40 lw:overflow-x-hidden lw:overflow-y-auto lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:p-1 lw:text-popover-foreground lw:shadow-popover lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95';

export const DropdownMenuContent = React.forwardRef<
	React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
		unstyled?: boolean;
	}
>(
	(
		{
			className,
			sideOffset = 4,
			align = 'start',
			unstyled = false,
			...props
		},
		ref
	) => {
		const scope = useShellScopeProps();
		return (
			<DropdownMenuPrimitive.Portal>
				<DropdownMenuPrimitive.Content
					ref={ref}
					{...scope}
					data-slot='dropdown-menu-content'
					sideOffset={sideOffset}
					align={align}
					className={cn(
						unstyled
							? 'lw:z-[1400] lw:outline-none'
							: menuContentClassName,
						className
					)}
					{...props}
				/>
			</DropdownMenuPrimitive.Portal>
		);
	}
);
DropdownMenuContent.displayName = 'DropdownMenuContent';

export const DropdownMenuItem = React.forwardRef<
	React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
		variant?: 'default' | 'destructive';
	}
>(({ className, variant = 'default', ...props }, ref) => (
	<DropdownMenuPrimitive.Item
		ref={ref}
		data-slot='dropdown-menu-item'
		data-variant={variant}
		className={cn(menuItemClassName, className)}
		{...props}
	/>
));
DropdownMenuItem.displayName = 'DropdownMenuItem';

export const DropdownMenuSeparator = React.forwardRef<
	React.ComponentRef<typeof DropdownMenuPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.Separator
		ref={ref}
		data-slot='dropdown-menu-separator'
		className={cn('lw:-mx-1 lw:my-1 lw:h-px lw:bg-border', className)}
		{...props}
	/>
));
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';
