import { measureUpdatesDrawerPlacement } from '../updatesDrawerPlacement';

const rect = (r: Partial<DOMRect>) =>
	({
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		width: 0,
		height: 0,
		...r
	}) as DOMRect;

const shellWith = (html: string) => {
	const shell = document.createElement('div');
	shell.innerHTML = html;
	document.body.appendChild(shell);
	return shell;
};

afterEach(() => {
	document.body.innerHTML = '';
});

describe('measureUpdatesDrawerPlacement', () => {
	it('is null without a shell', () => {
		expect(measureUpdatesDrawerPlacement(null)).toBeNull();
	});

	it('is null when the shell has no direct aside (mobile)', () => {
		const shell = shellWith('<main><aside></aside></main>');
		expect(measureUpdatesDrawerPlacement(shell)).toBeNull();
	});

	it('is null when the aside has no size (not laid out)', () => {
		const shell = shellWith('<aside></aside>');
		expect(measureUpdatesDrawerPlacement(shell)).toBeNull();
	});

	it('sits at the aside’s right edge, as tall as the aside', () => {
		const shell = shellWith('<aside></aside>');
		const aside = shell.querySelector('aside') as HTMLElement;
		aside.getBoundingClientRect = () =>
			rect({ top: 6, right: 72, width: 72, height: 794 });
		expect(measureUpdatesDrawerPlacement(shell)).toEqual({
			left: 72,
			top: 6,
			height: 794
		});
	});

	it('takes top and height from the glass rail capsule', () => {
		const shell = shellWith(
			'<aside><div data-rail-surface=""></div></aside>'
		);
		const aside = shell.querySelector('aside') as HTMLElement;
		const capsule = shell.querySelector(
			'[data-rail-surface]'
		) as HTMLElement;
		aside.getBoundingClientRect = () =>
			rect({ top: 6, right: 80, width: 80, height: 794 });
		capsule.getBoundingClientRect = () =>
			rect({ top: 14, right: 72, width: 64, height: 778 });
		expect(measureUpdatesDrawerPlacement(shell)).toEqual({
			left: 80,
			top: 14,
			height: 778
		});
	});
});
