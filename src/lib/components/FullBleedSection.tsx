import * as React from 'react';
import { cn } from '../utils';

const PADDING = 'var(--lumora-content-padding, 0px)';
const NEGATIVE_PADDING = `calc(${PADDING} * -1)`;

/** MUI palette paths hosts used to pass as `background`, as the shell's tokens. */
const PALETTE_BACKGROUNDS: Record<string, string> = {
	'background.paper': 'var(--lw-bg-surface)',
	'background.default': 'var(--lw-bg-page)'
};

export interface FullBleedSectionProps {
	children: React.ReactNode;
	/**
	 * Also cancel the top padding, so the section starts flush under the top
	 * of the content area. Use it for the first element of a page (default).
	 */
	flushTop?: boolean;
	/** Stay pinned to the top while the page scrolls (e.g. a detail header with tabs). */
	sticky?: boolean;
	/** Section background (any CSS colour); defaults to the surface colour (--bg-surface). */
	background?: string;
	/** Hairline under the section. Default true. */
	divider?: boolean;
	/**
	 * Keep the page padding inside the section so its content lines up with
	 * the rest of the page. Default true; `false` lets content touch the edges.
	 */
	inset?: boolean;
	className?: string;
	style?: React.CSSProperties;
	/**
	 * @deprecated Use `className` / `style`. Only a plain object of CSS
	 * properties is still honoured (merged into `style`); MUI shorthands,
	 * theme callbacks and nested selectors are ignored.
	 */
	sx?: Record<string, unknown>;
}

/** The plain CSS properties of a legacy `sx` object (no nesting, no callbacks). */
const flatSx = (sx: FullBleedSectionProps['sx']): React.CSSProperties =>
	sx && typeof sx === 'object' && !Array.isArray(sx)
		? (Object.fromEntries(
				Object.entries(sx).filter(
					([key, value]) =>
						!key.includes('&') &&
						!key.startsWith('@') &&
						(typeof value === 'string' || typeof value === 'number')
				)
			) as React.CSSProperties)
		: {};

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
	background = 'var(--lw-bg-surface)',
	divider = true,
	inset = true,
	className,
	style,
	sx
}) => (
	<div
		data-testid='full-bleed-section'
		className={cn(
			divider && 'lw:border-b lw:border-solid lw:border-border',
			// Above page content, below the sidebar drawer and menus
			sticky && 'lw:sticky lw:z-[3]',
			className
		)}
		style={{
			marginLeft: NEGATIVE_PADDING,
			marginRight: NEGATIVE_PADDING,
			marginTop: flushTop ? NEGATIVE_PADDING : 0,
			// Space below it, like any other block on the page
			marginBottom: PADDING,
			paddingLeft: inset ? PADDING : 0,
			paddingRight: inset ? PADDING : 0,
			backgroundColor: PALETTE_BACKGROUNDS[background] ?? background,
			...(sticky && {
				position: 'sticky',
				// Under the mobile top bar on phones, the viewport top on desktop
				top: 'var(--lumora-sticky-top, 0px)'
			}),
			...flatSx(sx),
			...style
		}}
	>
		{children}
	</div>
);

export default FullBleedSection;
