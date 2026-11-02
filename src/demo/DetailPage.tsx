import { ChevronLeftIcon } from 'lucide-react';
import { Tabs } from 'radix-ui';
import { useState } from 'react';
import { FullBleedSection } from '../lib';

const STAGES = [
	'Pending qualification',
	'New enquiry',
	'Prepare for sightings',
	'Pre-credit',
	'Post-credit',
	'Approved',
	'Completed'
];
const TABS = [
	'Overview',
	'Pricing',
	'Securities',
	'Activities',
	'Monitoring',
	'Documents',
	'Updates'
];

/** Stage stepper: dots on a line, the current one filled. */
const Stepper = ({ current }: { current: number }) => (
	<div className='flex overflow-x-auto pt-2 pb-1'>
		{STAGES.map((stage, i) => (
			<div
				key={stage}
				className='flex flex-[1_0_96px] flex-col items-center gap-1.5'
			>
				<span
					className={`size-3 rounded-full ${i <= current ? 'bg-primary' : 'bg-black/25 dark:bg-white/30'}`}
				/>
				<span
					className={`text-[10px] tracking-[0.04em] uppercase ${i === current ? 'text-primary' : 'text-muted-foreground'}`}
				>
					{stage}
				</span>
			</div>
		))}
	</div>
);

const cardClass = 'rounded-xl border border-border bg-surface';

const Section = ({ title, rows }: { title: string; rows: number }) => (
	<section className={`${cardClass} p-6`}>
		<h2 className='mb-4 font-semibold'>{title}</h2>
		<div className='grid gap-4 sm:grid-cols-2'>
			{Array.from({ length: rows }, (_, i) => (
				<div key={i}>
					<div className='text-xs text-muted-foreground uppercase'>
						Field {i + 1}
					</div>
					<div className='text-sm'>—</div>
				</div>
			))}
		</div>
	</section>
);

/**
 * Mirrors Centra's deal detail page: a white header that spans the whole
 * content area (FullBleedSection, sticky), then the padded page body.
 */
const DetailPage = ({ onBack }: { onBack: () => void }) => {
	const [tab, setTab] = useState(TABS[0]);

	return (
		<>
			<FullBleedSection sticky>
				<button
					type='button'
					onClick={onBack}
					className='mt-4 inline-flex cursor-pointer items-center gap-1 text-[13px] text-muted-foreground'
				>
					<ChevronLeftIcon className='size-4' />
					Back to Deals
				</button>
				<Stepper current={0} />
				<div className='mt-3 flex flex-wrap items-center gap-4'>
					<div className='grow'>
						<h1 className='text-2xl font-bold'>Project Cotton</h1>
						<div className='text-xs text-muted-foreground'>
							DL-202609-1092 · Deal owner Karan Doshi
						</div>
					</div>
					<button
						type='button'
						className='h-8 cursor-pointer rounded-md bg-primary px-3 text-sm font-semibold text-white hover:bg-primary-hover'
					>
						Confirm move
					</button>
				</div>
				<Tabs.Root value={tab} onValueChange={setTab} className='mt-2'>
					<Tabs.List className='flex overflow-x-auto'>
						{TABS.map(label => (
							<Tabs.Trigger
								key={label}
								value={label}
								className='h-10 shrink-0 cursor-pointer border-b-2 border-transparent px-4 text-sm font-medium text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-primary'
							>
								{label}
							</Tabs.Trigger>
						))}
					</Tabs.List>
				</Tabs.Root>
			</FullBleedSection>

			<div className='grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]'>
				<div className='flex flex-col gap-6'>
					<Section title='Deal Information' rows={10} />
					<Section title='Pricing' rows={12} />
					<Section title='Approval and Date' rows={8} />
				</div>
				{/* Right-hand panel that stays in view under the sticky header */}
				<div className='top-[220px] flex flex-col gap-4 lg:sticky'>
					<div className={`${cardClass} p-4`}>
						<div className='text-sm font-semibold'>
							Requirements to move → New Enquiry
						</div>
						<div className='text-xs text-muted-foreground'>
							All activities completed or not required
						</div>
					</div>
					<div className={`${cardClass} p-4`}>
						<div className='text-sm font-semibold'>Updates</div>
						<div className='text-xs text-muted-foreground'>
							No updates yet.
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailPage;
