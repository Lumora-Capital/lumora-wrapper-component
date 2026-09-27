import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface BrandProps {
	logo?: React.ReactNode;
	/** Wordmark (uppercased). Omitted in the narrow rails, where only the logo fits. */
	title?: string;
	/** Name for the accessible label when the wordmark is not shown. */
	appName: string;
	/** Makes the whole block a button, e.g. to go to the landing page. */
	onClick?: () => void;
	color: string;
	testId?: string;
}

/** App wordmark + logo, static or clickable. */
const Brand: React.FC<BrandProps> = ({
	logo,
	title,
	appName,
	onClick,
	color,
	testId
}) => {
	const sx = {
		alignItems: 'center',
		gap: 1,
		minWidth: 0,
		flexShrink: 0,
		color,
		// Consumer SVG logos pick up the brand color
		'& svg': { color: 'inherit', fill: 'currentColor' }
	} as const;
	const content = (
		<>
			{title ? (
				<Typography
					variant='h6'
					noWrap
					sx={{
						color,
						fontWeight: 600,
						fontSize: '18px',
						lineHeight: 1,
						textTransform: 'uppercase'
					}}
				>
					{title}
				</Typography>
			) : null}
			{logo}
		</>
	);

	if (!onClick) {
		return (
			<Stack direction='row' data-testid={testId} sx={sx}>
				{content}
			</Stack>
		);
	}
	return (
		<ButtonBase
			onClick={onClick}
			aria-label={`${appName} home`}
			data-testid={testId}
			focusRipple
			sx={{
				...sx,
				display: 'flex',
				borderRadius: 1,
				px: 0.5,
				mx: -0.5,
				'&:hover': { backgroundColor: 'action.hover' },
				'&.Mui-focusVisible': {
					outline: '2px solid',
					outlineColor: color,
					outlineOffset: 2
				}
			}}
		>
			{content}
		</ButtonBase>
	);
};

export default Brand;
