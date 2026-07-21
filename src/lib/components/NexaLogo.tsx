import * as React from 'react';

interface NexaLogoProps {
	/** Rendered width/height in px (keeps the 33:30 aspect ratio). Default 20. */
	size?: number;
	style?: React.CSSProperties;
}

/**
 * The Nexa brand mark — four teal chevron shapes. Inlined as an SVG component
 * (rather than a `/public` asset) so it bundles into the library and keeps its
 * multi-color fills, which a monochrome CSS mask would flatten.
 */
const NexaLogo: React.FC<NexaLogoProps> = ({ size = 20, style }) => (
	<svg
		width={size}
		height={(size * 30) / 33}
		viewBox='0 0 33 30'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden='true'
		focusable='false'
		style={style}
	>
		<path
			d='M21.7931 29.9243V20.5466L11.0774 10.4528V20.5466L21.7931 29.9243Z'
			fill='#05A393'
		/>
		<path
			d='M21.7931 20.1102L21.7931 10.0939L11.0774 0V10.0939L21.7931 20.1102Z'
			fill='#049586'
		/>
		<path
			d='M2.19027e-05 29.9243V20.5466L10.7157 10.4528V20.5466L2.19027e-05 29.9243Z'
			fill='#09C1AE'
		/>
		<path
			d='M22.1555 19.4716V10.0939L32.8712 0V10.0939L22.1555 19.4716Z'
			fill='#016F63'
		/>
	</svg>
);

export default NexaLogo;
