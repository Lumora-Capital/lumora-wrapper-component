/**
 * Liquid-glass motion: real spring physics, sampled into a CSS `linear()`
 * easing so the browser runs it (Web Animations or CSS) with no per-frame JS.
 * Where `linear()` is unsupported, an overshooting cubic-bezier stands in.
 */

export type SpringConfig = {
	stiffness: number;
	damping: number;
	mass?: number;
};

/** The glass body: grows out of the icon, overshoots a little, settles. */
export const MORPH_SPRING: SpringConfig = { stiffness: 320, damping: 24 };
/** A gel response — a press or a swell that wobbles back. */
export const GEL_SPRING: SpringConfig = { stiffness: 520, damping: 20 };
/**
 * Hover moving between items (the lens, the dock's tiles): near-critical
 * damping, so it glides into place without bouncing.
 */
export const GLIDE_SPRING: SpringConfig = { stiffness: 380, damping: 36 };
/** Content and highlights: quick, barely any overshoot. */
export const SETTLE_SPRING: SpringConfig = { stiffness: 260, damping: 28 };

const FALLBACK_EASING = 'cubic-bezier(0.32, 1.28, 0.52, 1)';
const FALLBACK_DURATION_MS = 420;
const SAMPLE_HZ = 60;

const supportsLinearEasing = (() => {
	try {
		return (
			typeof CSS !== 'undefined' &&
			typeof CSS.supports === 'function' &&
			CSS.supports('animation-timing-function', 'linear(0, 1)')
		);
	} catch {
		return false;
	}
})();

const cache = new Map<string, { easing: string; duration: number }>();

/**
 * A damped spring from 0 to 1, integrated until it is at rest, as an easing
 * and the duration it needs. Overshoot past 1 is kept — that is the gel.
 */
export const springTiming = ({
	stiffness,
	damping,
	mass = 1
}: SpringConfig): { easing: string; duration: number } => {
	const key = `${stiffness}/${damping}/${mass}`;
	const cached = cache.get(key);
	if (cached) {
		return cached;
	}
	if (!supportsLinearEasing) {
		return { easing: FALLBACK_EASING, duration: FALLBACK_DURATION_MS };
	}
	const dt = 1 / 600;
	let x = 0;
	let v = 0;
	let t = 0;
	let nextSample = 1 / SAMPLE_HZ;
	const samples = [0];
	while (t < 3) {
		const a = (-stiffness * (x - 1) - damping * v) / mass;
		v += a * dt;
		x += v * dt;
		t += dt;
		if (t >= nextSample) {
			samples.push(x);
			nextSample += 1 / SAMPLE_HZ;
			if (Math.abs(x - 1) < 0.001 && Math.abs(v) < 0.01) {
				break;
			}
		}
	}
	samples[samples.length - 1] = 1;
	const result = {
		easing: `linear(${samples.map(s => Number(s.toFixed(4))).join(', ')})`,
		duration: Math.round(t * 1000)
	};
	cache.set(key, result);
	return result;
};

/** jsdom and very old browsers have no Web Animations: skip the motion. */
export const canAnimate = (el: Element | null): el is HTMLElement =>
	Boolean(el && typeof (el as HTMLElement).animate === 'function');

export const prefersReducedMotion = () =>
	typeof window !== 'undefined' &&
	typeof window.matchMedia === 'function' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Cancel whatever is running on an element (and its pseudo-elements). */
export const cancelAnimations = (el: HTMLElement | null) => {
	if (!el || typeof el.getAnimations !== 'function') {
		return;
	}
	el.getAnimations({ subtree: false }).forEach(a => a.cancel());
};

/** A swell on press/open that wobbles back, like a gel button. */
export const gelSwell = (el: HTMLElement | null, scale = 1.14) => {
	if (!canAnimate(el) || prefersReducedMotion()) {
		return;
	}
	const gel = springTiming(GEL_SPRING);
	el.animate(
		[
			{ transform: 'scale(1)', easing: 'cubic-bezier(0.2, 0, 0, 1)' },
			{ transform: `scale(${scale})`, offset: 0.18, easing: gel.easing },
			{ transform: 'scale(1)' }
		],
		{ duration: Math.round(gel.duration / 0.82) }
	);
};
