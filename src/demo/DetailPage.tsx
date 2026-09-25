import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import {
	Box,
	Button,
	ButtonBase,
	Paper,
	Stack,
	Tab,
	Tabs,
	Typography
} from '@mui/material';
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
	<Stack direction='row' sx={{ pt: 1, pb: 0.5, overflowX: 'auto' }}>
		{STAGES.map((stage, i) => (
			<Stack
				key={stage}
				sx={{ flex: '1 0 96px', alignItems: 'center', gap: 0.75 }}
			>
				<Box
					sx={{
						width: 12,
						height: 12,
						borderRadius: '50%',
						bgcolor:
							i <= current ? 'primary.main' : 'action.disabled'
					}}
				/>
				<Typography
					variant='caption'
					sx={{
						fontSize: 10,
						textTransform: 'uppercase',
						letterSpacing: '0.04em',
						color: i === current ? 'primary.main' : 'text.secondary'
					}}
				>
					{stage}
				</Typography>
			</Stack>
		))}
	</Stack>
);

const Section = ({ title, rows }: { title: string; rows: number }) => (
	<Paper variant='outlined' sx={{ p: 3, borderRadius: '12px' }}>
		<Typography sx={{ fontWeight: 600, mb: 2 }}>{title}</Typography>
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
				gap: 2
			}}
		>
			{Array.from({ length: rows }, (_, i) => (
				<Box key={i}>
					<Typography
						variant='caption'
						sx={{
							color: 'text.secondary',
							textTransform: 'uppercase'
						}}
					>
						Field {i + 1}
					</Typography>
					<Typography variant='body2'>—</Typography>
				</Box>
			))}
		</Box>
	</Paper>
);

/**
 * Mirrors Centra's deal detail page: a white header that spans the whole
 * content area (FullBleedSection, sticky), then the padded page body.
 */
const DetailPage = ({ onBack }: { onBack: () => void }) => {
	const [tab, setTab] = useState(0);

	return (
		<>
			<FullBleedSection sticky>
				<ButtonBase
					onClick={onBack}
					sx={{
						mt: 2,
						gap: 0.5,
						color: 'text.secondary',
						fontSize: 13
					}}
				>
					<ChevronLeftRoundedIcon fontSize='small' />
					Back to Deals
				</ButtonBase>
				<Stepper current={0} />
				<Stack
					direction='row'
					sx={{
						alignItems: 'center',
						gap: 2,
						mt: 1.5,
						flexWrap: 'wrap'
					}}
				>
					<Box sx={{ flexGrow: 1 }}>
						<Typography
							component='h1'
							sx={{ fontWeight: 700, fontSize: 24 }}
						>
							Project Cotton
						</Typography>
						<Typography
							variant='caption'
							sx={{ color: 'text.secondary' }}
						>
							DL-202609-1092 · Deal owner Karan Doshi
						</Typography>
					</Box>
					<Button variant='contained' disableElevation>
						Confirm move
					</Button>
				</Stack>
				<Tabs
					value={tab}
					onChange={(_, next) => setTab(next)}
					variant='scrollable'
					sx={{
						mt: 1,
						minHeight: 40,
						'& .MuiTab-root': { minHeight: 40 }
					}}
				>
					{TABS.map(label => (
						<Tab
							key={label}
							label={label}
							sx={{ textTransform: 'none' }}
						/>
					))}
				</Tabs>
			</FullBleedSection>

			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: '1fr',
						lg: 'minmax(0, 1fr) 300px'
					},
					gap: 3,
					alignItems: 'start'
				}}
			>
				<Stack spacing={3}>
					<Section title='Deal Information' rows={10} />
					<Section title='Pricing' rows={12} />
					<Section title='Approval and Date' rows={8} />
				</Stack>
				{/* Right-hand panel that stays in view under the sticky header */}
				<Stack
					spacing={2}
					sx={{ position: { lg: 'sticky' }, top: 220 }}
				>
					<Paper
						variant='outlined'
						sx={{ p: 2, borderRadius: '12px' }}
					>
						<Typography variant='body2' sx={{ fontWeight: 600 }}>
							Requirements to move → New Enquiry
						</Typography>
						<Typography
							variant='caption'
							sx={{ color: 'text.secondary' }}
						>
							All activities completed or not required
						</Typography>
					</Paper>
					<Paper
						variant='outlined'
						sx={{ p: 2, borderRadius: '12px' }}
					>
						<Typography variant='body2' sx={{ fontWeight: 600 }}>
							Updates
						</Typography>
						<Typography
							variant='caption'
							sx={{ color: 'text.secondary' }}
						>
							No updates yet.
						</Typography>
					</Paper>
				</Stack>
			</Box>
		</>
	);
};

export default DetailPage;
