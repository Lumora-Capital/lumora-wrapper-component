import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/** tailwind-merge that knows the shell's `lw:` prefix (styles.css). */
const twMerge = extendTailwindMerge({ prefix: 'lw' });

/** Joins class names and lets a later class override an earlier one (`cn('lw:p-2', 'lw:p-4')` → `lw:p-4`). */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
