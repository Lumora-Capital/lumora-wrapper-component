import * as React from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent } from './ui/sheet';

interface MobileSearchSheetProps {
	open: boolean;
	onClose: () => void;
	/** The host's search component. */
	search: React.ReactNode;
}

/**
 * Mobile search: the host's search component in a sheet that slides down from
 * the top, with its first field focused so the keyboard opens right away.
 */
const MobileSearchSheet: React.FC<MobileSearchSheetProps> = ({
	open,
	onClose,
	search
}) => (
	<Sheet open={open} onOpenChange={next => !next && onClose()}>
		<SheetContent
			side='top'
			aria-label='Search'
			srTitle='Search'
			// The host's first field, not the sheet, takes focus
			onOpenAutoFocus={event => {
				const field = (
					event.currentTarget as HTMLElement | null
				)?.querySelector<HTMLElement>(
					'input, textarea, [contenteditable="true"]'
				);
				if (field) {
					event.preventDefault();
					field.focus();
				}
			}}
			className='lw:rounded-b-xl lw:border-b-0 lw:p-4 lw:pt-[calc(16px+env(safe-area-inset-top,0px))]'
		>
			<div
				data-testid='mobile-search-sheet'
				className='lw:flex lw:flex-row lw:items-center lw:gap-2'
			>
				<div data-lw-host='' className='lw:min-w-0 lw:flex-auto'>
					{search}
				</div>
				<Button
					variant='ghost-primary'
					onClick={onClose}
					className='lw:shrink-0'
				>
					Cancel
				</Button>
			</div>
		</SheetContent>
	</Sheet>
);

export default MobileSearchSheet;
