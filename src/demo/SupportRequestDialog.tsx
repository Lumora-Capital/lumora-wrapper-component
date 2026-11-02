import { XIcon } from 'lucide-react';
import { Dialog } from 'radix-ui';

const fieldClass =
	'w-full rounded-md border border-input bg-surface px-2.5 text-sm text-foreground outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary';

/** Stand-in for the host app's existing "submit a support request" popup. */
const SupportRequestDialog = ({
	open,
	onClose
}: {
	open: boolean;
	onClose: () => void;
}) => (
	<Dialog.Root open={open} onOpenChange={next => !next && onClose()}>
		<Dialog.Portal>
			<Dialog.Overlay className='fixed inset-0 z-[1300] bg-black/45 data-[state=open]:animate-in data-[state=open]:fade-in-0' />
			<Dialog.Content
				aria-describedby={undefined}
				className='fixed top-1/2 left-1/2 z-[1300] flex w-[calc(100%-2rem)] max-w-[600px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg border border-border bg-surface text-foreground shadow-popover outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95'
			>
				<div className='flex items-center justify-between border-b border-border px-4 py-3'>
					<Dialog.Title className='text-lg font-semibold'>
						Submit a request
					</Dialog.Title>
					<Dialog.Close
						aria-label='Close'
						className='inline-flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:bg-accent'
					>
						<XIcon className='size-4' />
					</Dialog.Close>
				</div>
				<div className='grid gap-3 px-4 py-3'>
					<label className='grid gap-1 text-sm'>
						Type
						<select
							defaultValue='question'
							className={`${fieldClass} h-8`}
						>
							<option value='question'>Question</option>
							<option value='bug'>Something is broken</option>
							<option value='access'>Access request</option>
						</select>
					</label>
					<label className='grid gap-1 text-sm'>
						Subject
						<input className={`${fieldClass} h-8`} />
					</label>
					<label className='grid gap-1 text-sm'>
						Details
						<textarea rows={4} className={`${fieldClass} py-1.5`} />
					</label>
				</div>
				<div className='flex justify-end gap-2 border-t border-border px-4 py-3'>
					<button
						type='button'
						onClick={onClose}
						className='h-8 cursor-pointer rounded-md px-3 text-sm font-semibold text-primary hover:bg-primary/6'
					>
						Cancel
					</button>
					<button
						type='button'
						onClick={onClose}
						className='h-8 cursor-pointer rounded-md bg-primary px-3 text-sm font-semibold text-white hover:bg-primary-hover'
					>
						Submit
					</button>
				</div>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
);

export default SupportRequestDialog;
