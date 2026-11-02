import * as React from 'react';
import { cn } from '../utils';

const ITEM_SELECTOR = '[role="menuitem"]:not([aria-disabled="true"])';

/** The list's items, in order. */
const itemsOf = (list: HTMLElement) =>
	Array.from(list.querySelectorAll<HTMLElement>(ITEM_SELECTOR));

/**
 * Focuses the list's selected item (or its first) — MUI MenuList's
 * `autoFocusItem`, for the popover's `onOpenAutoFocus`.
 */
export const focusMenuItem = (list: HTMLElement | null) => {
	if (!list) {
		return false;
	}
	const item =
		list.querySelector<HTMLElement>(
			'[role="menuitem"][data-selected="true"]'
		) ?? itemsOf(list)[0];
	item?.focus();
	return Boolean(item);
};

/**
 * A menu list (MUI MenuList): `role="menu"`, ArrowUp/Down wrapping through
 * the items, Home/End. Items are `ShellMenuItem`s; separators are skipped.
 */
export const ShellMenuList = React.forwardRef<
	HTMLUListElement,
	React.HTMLAttributes<HTMLUListElement>
>(({ className, onKeyDown, ...props }, ref) => (
	<ul
		ref={ref}
		role='menu'
		className={cn(
			'lw:relative lw:m-0 lw:list-none lw:outline-none',
			className
		)}
		onKeyDown={event => {
			onKeyDown?.(event);
			if (event.defaultPrevented) {
				return;
			}
			const items = itemsOf(event.currentTarget);
			if (!items.length) {
				return;
			}
			const index = items.indexOf(document.activeElement as HTMLElement);
			let next: number | null = null;
			switch (event.key) {
				case 'ArrowDown':
					next = index < 0 ? 0 : (index + 1) % items.length;
					break;
				case 'ArrowUp':
					next =
						index < 0
							? items.length - 1
							: (index - 1 + items.length) % items.length;
					break;
				case 'Home':
					next = 0;
					break;
				case 'End':
					next = items.length - 1;
					break;
				default:
					return;
			}
			event.preventDefault();
			items[next].focus();
		}}
		{...props}
	/>
));
ShellMenuList.displayName = 'ShellMenuList';

/**
 * One row of `ShellMenuList` (MUI MenuItem): a focusable `menuitem` that
 * answers a click, Enter and Space. `selected` sets `data-selected`.
 */
export const ShellMenuItem = React.forwardRef<
	HTMLLIElement,
	React.HTMLAttributes<HTMLLIElement> & { selected?: boolean }
>(({ className, onKeyDown, selected, ...props }, ref) => (
	<li
		ref={ref}
		role='menuitem'
		tabIndex={-1}
		data-selected={selected ? 'true' : undefined}
		className={cn(
			'lw:relative lw:flex lw:cursor-pointer lw:items-center lw:outline-none lw:select-none lw:transition-colors',
			className
		)}
		onKeyDown={event => {
			onKeyDown?.(event);
			if (
				!event.defaultPrevented &&
				(event.key === 'Enter' || event.key === ' ')
			) {
				event.preventDefault();
				event.currentTarget.click();
			}
		}}
		{...props}
	/>
));
ShellMenuItem.displayName = 'ShellMenuItem';

/** A rule between rows, skipped by the arrows. */
export const ShellMenuSeparator: React.FC<{ className?: string }> = ({
	className
}) => (
	<li
		role='separator'
		className={cn('lw:my-1 lw:h-px lw:list-none lw:bg-border', className)}
	/>
);
