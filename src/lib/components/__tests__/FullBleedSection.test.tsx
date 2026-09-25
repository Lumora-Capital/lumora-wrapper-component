import FullBleedSection from '../FullBleedSection';
import LumoraWrapper from '../LumoraWrapper';
import { lumoraTestRequiredProps, render, screen } from './testUtils';

const NEGATIVE = 'calc(var(--lumora-content-padding, 0px) * -1)';
const PADDING = 'var(--lumora-content-padding, 0px)';

describe('FullBleedSection', () => {
	it('cancels the content padding on the sides and top, and re-applies it inside', () => {
		render(<FullBleedSection>Header</FullBleedSection>);
		expect(screen.getByTestId('full-bleed-section')).toHaveStyle({
			marginLeft: NEGATIVE,
			marginRight: NEGATIVE,
			marginTop: NEGATIVE,
			marginBottom: PADDING,
			paddingLeft: PADDING,
			paddingRight: PADDING
		});
	});

	it('keeps the top margin when flushTop is false and drops the inset when inset is false', () => {
		render(
			<FullBleedSection flushTop={false} inset={false}>
				Band
			</FullBleedSection>
		);
		const section = screen.getByTestId('full-bleed-section');
		expect(section).toHaveStyle({ marginTop: '0px', paddingLeft: '0px' });
	});

	it('pins under the wrapper’s sticky offset when sticky', () => {
		render(<FullBleedSection sticky>Header</FullBleedSection>);
		expect(screen.getByTestId('full-bleed-section')).toHaveStyle({
			position: 'sticky',
			top: 'var(--lumora-sticky-top, 0px)'
		});
	});

	it('reads the padding and sticky offset the wrapper exposes on the content area', () => {
		render(
			<LumoraWrapper {...lumoraTestRequiredProps} contentPadding='32px'>
				<FullBleedSection sticky>Header</FullBleedSection>
			</LumoraWrapper>
		);
		const main = screen.getByRole('main');
		expect(main).toContainElement(screen.getByTestId('full-bleed-section'));
		expect(
			getComputedStyle(main).getPropertyValue('--lumora-content-padding')
		).toBe('32px');
		expect(
			getComputedStyle(main).getPropertyValue('--lumora-sticky-top')
		).toBe('0px');
	});
});
