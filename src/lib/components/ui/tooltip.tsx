import { Tooltip as TooltipPrimitive } from 'radix-ui';
import * as React from 'react';
import { cn } from '../../utils';
import { useShellScopeProps } from '../shellTheme';

const TooltipContent = React.forwardRef<
	React.ComponentRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
		arrow?: boolean;
	}
>(({ className, sideOffset = 4, arrow = false, children, ...props }, ref) => {
	const scope = useShellScopeProps();
	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Content
				ref={ref}
				{...scope}
				data-slot='tooltip-content'
				sideOffset={sideOffset}
				className={cn(
					'lw:z-[1500] lw:max-w-xs lw:rounded-md lw:bg-tooltip lw:px-2 lw:py-1 lw:text-xs lw:font-medium lw:text-tooltip-foreground lw:animate-in lw:fade-in-0 lw:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95',
					className
				)}
				{...props}
			>
				{children}
				{arrow ? (
					<TooltipPrimitive.Arrow
						className='lw:fill-tooltip'
						width={10}
						height={5}
					/>
				) : null}
			</TooltipPrimitive.Content>
		</TooltipPrimitive.Portal>
	);
});
TooltipContent.displayName = 'TooltipContent';

export type TooltipProps = {
	title?: React.ReactNode;
	children: React.ReactElement;
	side?: 'top' | 'right' | 'bottom' | 'left';
	align?: 'start' | 'center' | 'end';
	sideOffset?: number;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	delayDuration?: number;
	/** Replaces the default look (e.g. the glass label). */
	contentClassName?: string;
	contentStyle?: React.CSSProperties;
	/** Keep the tooltip from opening (MUI's empty-title trick, without unmounting). */
	disabled?: boolean;
	arrow?: boolean;
	/** MUI's `disableInteractive`: the tooltip closes as soon as the pointer leaves the trigger. */
	disableHoverableContent?: boolean;
};

/**
 * Nexa's everyday tooltip, as MUI's `<Tooltip title>` was: wraps one
 * focusable child. An empty title shows no tooltip.
 */
export function Tooltip({
	title,
	children,
	side = 'top',
	align,
	sideOffset,
	open,
	onOpenChange,
	delayDuration = 300,
	contentClassName,
	contentStyle,
	disabled = false,
	arrow = false,
	disableHoverableContent = true
}: TooltipProps) {
	// An empty title keeps the same tree (only the tooltip is off), so a
	// title that toggles never remounts the child under the pointer.
	const empty = title == null || title === '' || title === false;
	return (
		<TooltipPrimitive.Provider
			delayDuration={delayDuration}
			disableHoverableContent={disableHoverableContent}
		>
			<TooltipPrimitive.Root
				open={disabled || empty ? false : open}
				onOpenChange={onOpenChange}
			>
				<TooltipPrimitive.Trigger asChild>
					{children}
				</TooltipPrimitive.Trigger>
				{empty ? null : (
					<TooltipContent
						side={side}
						align={align}
						sideOffset={sideOffset}
						className={contentClassName}
						style={contentStyle}
						arrow={arrow}
					>
						{title}
					</TooltipContent>
				)}
			</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	);
}
