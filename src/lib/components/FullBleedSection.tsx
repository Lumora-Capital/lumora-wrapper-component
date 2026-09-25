import type { SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';

const PADDING = 'var(--lumora-content-padding, 0px)';
const NEGATIVE_PADDING = `calc(${PADDING} * -1)`;

export interface FullBleedSectionProps {
	children: React.ReactNode;
	/**
	 * Also cancel the top padding, so the section starts flush under the top
	 * of the content area. Use it for the first element of a page (default).
	 */
	flushTop?: boolean;
	/** Stay pinned to the top while the page scrolls (e.g. a detail header with tabs). */
	sticky?: boolean;
	/** Section background; defaults to the theme paper color. */
	background?: string;
	/** Hairline under the section. Default true. */
	divider?: boolean;
	/**
	 * Keep the page padding inside the section so its content lines up with
	 * the rest of the page. Default true; `false` lets content touch the edges.
	 */
	inset?: boolean;
	sx?: SxProps<Theme>;
}

/**
 * A band that spans the whole content area of LumoraWrapper, edge to edge,
 * whatever `contentPadding` is — e.g. a page header with a stepper and tabs.
 * It cancels the padding with negative margins read from the wrapper's
 * `--lumora-content-padding`, so the rest of the page keeps its spacing.
 */
const FullBleedSection: React.FC<FullBleedSectionProps> = ({
	children,
	flushTop = true,
	sticky = false,
	background = 'background.paper',
	divider = true,
	inset = true,
	sx
}) => (
	<Box
		data-testid='full-bleed-section'
		sx={[
			{
				mx: NEGATIVE_PADDING,
				mt: flushTop ? NEGATIVE_PADDING : 0,
				// Space below it, like any other block on the page
				mb: PADDING,
				px: inset ? PADDING : 0,
				bgcolor: background,
				...(divider && {
					borderBottom: '1px solid',
					borderColor: 'divider'
				}),
				...(sticky && {
					position: 'sticky',
					// Under the mobile top bar on phones, the viewport top on desktop
					top: 'var(--lumora-sticky-top, 0px)',
					// Above page content, below the sidebar drawer and menus
					zIndex: 3
				})
			},
			...(Array.isArray(sx) ? sx : [sx])
		]}
	>
		{children}
	</Box>
);

export default FullBleedSection;
