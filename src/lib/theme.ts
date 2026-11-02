/**
 * Lumora's former MUI design tokens, kept as plain data (no MUI import) so a
 * host that still builds an MUI theme can match the old shell:
 * `createTheme(getDesignTokens(mode))`. The shell itself no longer reads
 * them — it is styled by its stylesheet (styles.css) from Nexa's tokens.
 */
export type PaletteMode = 'light' | 'dark';

const brand = {
	50: 'hsl(210, 100%, 95%)',
	100: 'hsl(210, 100%, 92%)',
	200: 'hsl(210, 100%, 80%)',
	300: 'hsl(210, 100%, 65%)',
	400: 'hsl(210, 98%, 48%)',
	500: 'hsl(210, 98%, 42%)',
	600: 'hsl(210, 98%, 55%)',
	700: 'hsl(210, 100%, 35%)',
	800: 'hsl(210, 100%, 16%)',
	900: 'hsl(210, 100%, 21%)'
};

const gray = {
	50: 'hsl(220, 35%, 97%)',
	100: 'hsl(220, 30%, 94%)',
	200: 'hsl(220, 20%, 88%)',
	300: 'hsl(220, 20%, 80%)',
	400: 'hsl(220, 20%, 65%)',
	500: 'hsl(220, 20%, 42%)',
	600: 'hsl(220, 20%, 35%)',
	700: 'hsl(220, 20%, 25%)',
	800: 'hsl(220, 30%, 6%)',
	900: 'hsl(220, 35%, 3%)'
};

const green = {
	300: 'hsl(120, 61%, 77%)',
	400: 'hsl(120, 44%, 53%)',
	500: 'hsl(120, 59%, 30%)',
	700: 'hsl(120, 75%, 16%)',
	800: 'hsl(120, 84%, 10%)'
};

const orange = {
	300: 'hsl(45, 90%, 65%)',
	400: 'hsl(45, 90%, 40%)',
	500: 'hsl(45, 90%, 35%)',
	700: 'hsl(45, 94%, 20%)',
	800: 'hsl(45, 95%, 16%)'
};

const red = {
	300: 'hsl(0, 90%, 65%)',
	400: 'hsl(0, 90%, 40%)',
	500: 'hsl(0, 90%, 30%)',
	700: 'hsl(0, 94%, 18%)',
	800: 'hsl(0, 95%, 12%)'
};

/** MUI's `alpha()` for the hsl()/hex colours above. */
const alpha = (color: string, value: number) => {
	const hsl = /^hsl\((.+)\)$/.exec(color);
	if (hsl) return `hsla(${hsl[1]}, ${value})`;
	const hex = /^#([0-9a-f]{6})$/i.exec(color);
	if (hex) {
		const n = parseInt(hex[1], 16);
		return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${value})`;
	}
	return color;
};

/** MUI's pxToRem for a 14px body on a 16px root. */
const pxToRem = (px: number) => `${px / 16}rem`;

/** MUI's default elevation shadows (Material Design), index 0–24. */
const createShadow = (...px: number[]) =>
	[
		`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,0.2)`,
		`${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,0.14)`,
		`${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,0.12)`
	].join(',');
const DEFAULT_SHADOWS = [
	'none',
	createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
	createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
	createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
	createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
	createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
	createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
	createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
	createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
	createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
	createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
	createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
	createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
	createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
	createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
	createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
	createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
	createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
	createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
	createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
	createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
	createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
	createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
	createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
	createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
];

/** The shape `getDesignTokens` returns: an MUI `ThemeOptions` subset. */
export type LumoraDesignTokens = {
	palette: Record<string, unknown> & { mode: PaletteMode };
	typography: Record<string, unknown>;
	shape: { borderRadius: number };
	shadows: string[];
};

/**
 * Lumora's MUI design tokens for a light or dark theme, for hosts that still
 * build an MUI theme: `createTheme(getDesignTokens(mode))`.
 */
export const getDesignTokens = (mode: PaletteMode): LumoraDesignTokens => {
	const isDark = mode === 'dark';
	const shadows = [...DEFAULT_SHADOWS];
	shadows[1] = isDark
		? 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
		: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px';

	return {
		palette: {
			mode,
			primary: {
				light: isDark ? brand[300] : brand[200],
				main: brand[400],
				dark: brand[700],
				contrastText: brand[50]
			},
			info: isDark
				? {
						light: brand[500],
						main: brand[700],
						dark: brand[900],
						contrastText: brand[300]
					}
				: {
						light: brand[100],
						main: brand[300],
						dark: brand[600],
						contrastText: gray[50]
					},
			warning: isDark
				? { light: orange[400], main: orange[500], dark: orange[700] }
				: { light: orange[300], main: orange[400], dark: orange[800] },
			error: isDark
				? { light: red[400], main: red[500], dark: red[700] }
				: { light: red[300], main: red[400], dark: red[800] },
			success: isDark
				? { light: green[400], main: green[500], dark: green[700] }
				: { light: green[300], main: green[400], dark: green[800] },
			grey: gray,
			divider: isDark ? alpha(gray[700], 0.6) : alpha(gray[300], 0.4),
			background: isDark
				? { default: gray[900], paper: 'hsl(220, 30%, 7%)' }
				: { default: 'hsl(0, 0%, 99%)', paper: 'hsl(220, 35%, 97%)' },
			text: isDark
				? { primary: 'hsl(0, 0%, 100%)', secondary: gray[400] }
				: { primary: gray[800], secondary: gray[600] },
			action: isDark
				? {
						hover: alpha(gray[600], 0.2),
						selected: alpha(gray[600], 0.3)
					}
				: {
						hover: alpha(gray[200], 0.2),
						selected: alpha(gray[200], 0.3)
					}
		},
		typography: {
			fontFamily: 'Inter, sans-serif',
			h1: {
				fontSize: pxToRem(48),
				fontWeight: 600,
				lineHeight: 1.2,
				letterSpacing: -0.5
			},
			h2: { fontSize: pxToRem(36), fontWeight: 600, lineHeight: 1.2 },
			h3: { fontSize: pxToRem(30), lineHeight: 1.2 },
			h4: { fontSize: pxToRem(24), fontWeight: 600, lineHeight: 1.5 },
			h5: { fontSize: pxToRem(20), fontWeight: 600 },
			h6: { fontSize: pxToRem(18), fontWeight: 600 },
			subtitle1: { fontSize: pxToRem(18) },
			subtitle2: { fontSize: pxToRem(14), fontWeight: 500 },
			body1: { fontSize: pxToRem(14) },
			body2: { fontSize: pxToRem(14), fontWeight: 400 },
			caption: { fontSize: pxToRem(12), fontWeight: 400 }
		},
		shape: {
			borderRadius: 8
		},
		shadows
	};
};
