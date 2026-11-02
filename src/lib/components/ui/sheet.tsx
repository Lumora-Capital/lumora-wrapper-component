import { Dialog as SheetPrimitive } from 'radix-ui';
import * as React from 'react';
import { cn } from '../../utils';
import { useShellScopeProps } from '../shellTheme';

export const Sheet = SheetPrimitive.Root;

const SIDES = {
	right: 'lw:inset-y-0 lw:right-0 lw:h-full lw:border-l lw:data-[state=open]:slide-in-from-right lw:data-[state=closed]:slide-out-to-right',
	left: 'lw:inset-y-0 lw:left-0 lw:h-full lw:border-r lw:data-[state=open]:slide-in-from-left lw:data-[state=closed]:slide-out-to-left',
	top: 'lw:inset-x-0 lw:top-0 lw:h-auto lw:border-b lw:data-[state=open]:slide-in-from-top lw:data-[state=closed]:slide-out-to-top',
	bottom: 'lw:inset-x-0 lw:bottom-0 lw:h-auto lw:border-t lw:data-[state=open]:slide-in-from-bottom lw:data-[state=closed]:slide-out-to-bottom'
} as const;

type SheetSide = keyof typeof SIDES;

/**
 * A side drawer (MUI Drawer), as Nexa's sheet.jsx: the panel slides in from
 * `side` over a backdrop. `overlay="invisible"` keeps the page undimmed while an
 * outside click still closes it; `overlay={false}` has no backdrop at all.
 * The panel carries `data-side` for tests and styling.
 */
export const SheetContent = React.forwardRef<
	React.ComponentRef<typeof SheetPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
		side?: SheetSide;
		overlay?: boolean | 'invisible';
		overlayClassName?: string;
		/** Rendered for screen readers when the content has no visible title. */
		srTitle?: string;
	}
>(
	(
		{
			className,
			children,
			side = 'right',
			overlay = true,
			overlayClassName,
			srTitle,
			...props
		},
		ref
	) => {
		const scope = useShellScopeProps();
		return (
			<SheetPrimitive.Portal>
				{overlay ? (
					<SheetPrimitive.Overlay
						{...scope}
						data-slot='sheet-overlay'
						data-invisible={
							overlay === 'invisible' ? 'true' : undefined
						}
						className={cn(
							'lw:fixed lw:inset-0 lw:z-[1200] lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0',
							overlay === 'invisible'
								? 'lw:bg-transparent'
								: 'lw:bg-black/35',
							overlayClassName
						)}
					/>
				) : null}
				<SheetPrimitive.Content
					ref={ref}
					{...scope}
					data-slot='sheet-content'
					data-side={side}
					aria-describedby={undefined}
					className={cn(
						'lw:fixed lw:z-[1200] lw:flex lw:flex-col lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none lw:transition lw:ease-in-out lw:data-[state=open]:animate-in lw:data-[state=open]:duration-200 lw:data-[state=closed]:animate-out lw:data-[state=closed]:duration-150',
						SIDES[side],
						className
					)}
					{...props}
				>
					{srTitle ? (
						<SheetPrimitive.Title className='lw:sr-only'>
							{srTitle}
						</SheetPrimitive.Title>
					) : null}
					{children}
				</SheetPrimitive.Content>
			</SheetPrimitive.Portal>
		);
	}
);
SheetContent.displayName = 'SheetContent';
