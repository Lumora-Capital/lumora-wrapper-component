import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import * as React from 'react';
import { cn } from '../../utils';

/**
 * Nexa's button (lumora-nexa/src/components/ui/button.jsx) with the shell's
 * `lw:` prefix: the same variants, the same 32px control height and 6px
 * radius, the same "Confirm move" teal primary.
 */
const buttonVariants = cva(
	"lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:gap-1.5 lw:whitespace-nowrap lw:rounded-md lw:text-sm lw:font-semibold lw:transition-colors lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:focus-visible:ring-offset-1 lw:focus-visible:ring-offset-surface lw:disabled:pointer-events-none lw:disabled:opacity-50 lw:[&_svg]:pointer-events-none lw:[&_svg]:shrink-0 lw:[&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default:
					'lw:bg-primary lw:text-primary-foreground lw:hover:bg-primary-hover',
				destructive:
					'lw:bg-destructive-fill lw:text-white lw:hover:bg-destructive-hover',
				outline:
					'lw:border lw:border-solid lw:border-input lw:bg-surface lw:text-foreground lw:hover:border-input-hover lw:hover:bg-accent',
				'outline-primary':
					'lw:border lw:border-solid lw:border-primary lw:bg-transparent lw:text-primary lw:hover:border-primary-hover lw:hover:bg-primary/6 lw:hover:text-primary-hover',
				'ghost-primary':
					'lw:bg-transparent lw:text-primary lw:hover:bg-primary/6 lw:hover:text-primary-hover',
				secondary:
					'lw:bg-secondary lw:text-secondary-foreground lw:hover:bg-selected',
				ghost: 'lw:text-foreground lw:hover:bg-accent',
				link: 'lw:h-auto lw:px-0 lw:text-brand-text lw:underline-offset-4 lw:hover:underline',
				/** No look of its own: the shell's coloured controls style it themselves. */
				bare: ''
			},
			size: {
				default: 'lw:h-8 lw:px-3',
				sm: 'lw:h-7 lw:px-2.5 lw:text-[13px]',
				lg: 'lw:h-10 lw:px-4 lw:text-base',
				icon: 'lw:size-8',
				'icon-sm': 'lw:size-7',
				'icon-xs':
					"lw:size-6 lw:[&_svg:not([class*='size-'])]:size-3.5",
				none: ''
			}
		},
		defaultVariants: { variant: 'default', size: 'default' }
	}
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			type = 'button',
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot.Root : 'button';
		return (
			<Comp
				ref={ref}
				data-slot='button'
				type={asChild ? undefined : type}
				className={cn(buttonVariants({ variant, size }), className)}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';
