import type { SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export interface SubPanelProps {
	title: string;
	subtitle?: string;
	testId: string;
	width: number;
	/** Card chrome shared with the account menu card. */
	sx?: SxProps<Theme>;
	footer?: React.ReactNode;
	children: React.ReactNode;
}

/**
 * Shell for the account menu's second card (platform switcher, settings):
 * title, optional subtitle, body, optional footer above a divider. No close
 * button — Escape, the row that opened it, or an outside click closes it.
 * Exposed as a non-modal dialog labelled by its title.
 */
const SubPanel: React.FC<SubPanelProps> = ({
	title,
	subtitle,
	testId,
	width,
	sx,
	footer,
	children
}) => {
	const titleId = React.useId();

	return (
		<Box
			role='dialog'
			aria-modal='false'
			aria-labelledby={titleId}
			data-testid={testId}
			sx={[
				{ width, minWidth: width },
				...(Array.isArray(sx) ? sx : [sx])
			]}
		>
			<Box sx={{ px: 2, pt: 1.5, pb: 1 }}>
				<Typography id={titleId} sx={{ fontWeight: 600 }}>
					{title}
				</Typography>
				{subtitle ? (
					<Typography
						variant='body2'
						sx={{ mt: 0.25, color: 'text.secondary' }}
					>
						{subtitle}
					</Typography>
				) : null}
			</Box>
			{children}
			{footer ? (
				<>
					<Divider />
					{footer}
				</>
			) : null}
		</Box>
	);
};

export default SubPanel;
