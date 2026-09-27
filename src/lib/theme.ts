import { alpha, createTheme } from '@mui/material/styles';
import type { PaletteMode, Shadows, ThemeOptions } from '@mui/material/styles';

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

const defaultTheme = createTheme();
const pxToRem = defaultTheme.typography.pxToRem;

/**
 * Lumora design tokens for a light or dark theme. LumoraWrapper builds its
 * own theme from these; host apps can reuse them for a matching outer theme:
 * `createTheme(getDesignTokens(mode))`.
 */
export const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
	const isDark = mode === 'dark';
	const shadows: Shadows = [...defaultTheme.shadows];
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
