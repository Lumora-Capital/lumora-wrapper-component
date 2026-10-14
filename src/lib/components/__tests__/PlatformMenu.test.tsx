import { Home } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import * as React from 'react';
import LumoraWrapper, {
	type LumoraPlatform,
	type LumoraWrapperProps
} from '../LumoraWrapper';
import {
	fireEvent,
	lumoraTestRequiredProps,
	render,
	screen,
	within
} from './testUtils';

jest.mock('@mui/material', () => ({
	...jest.requireActual('@mui/material'),
	useMediaQuery: jest.fn()
}));
const mockUseMediaQuery = useMediaQuery as jest.MockedFunction<
	typeof useMediaQuery
>;

const platforms: LumoraPlatform[] = [
	{
		key: 'centra',
		name: 'Centra',
		description: 'Deals, CRM and lending',
		accentColor: '#09C1AE'
	},
	{
		key: 'xpdite',
		name: 'XPdite',
		description: 'Knowledge graph and agent training',
		accentColor: '#2F6FD6'
	}
];

const renderWrapper = (props: Partial<LumoraWrapperProps> = {}) =>
	render(
		<LumoraWrapper
			{...lumoraTestRequiredProps}
			sidebarVariant='panel'
			sidebarLinks={[{ text: 'Deals', path: '/deals', icon: <Home /> }]}
			platforms={platforms}
			currentPlatformKey='centra'
			{...props}
		>
			<div>Page</div>
		</LumoraWrapper>
	);

const brand = () => screen.getByTestId('sidebar-header-brand');

describe('platform switcher', () => {
	beforeEach(() => {
		mockUseMediaQuery.mockReturnValue(false);
	});

	it('makes the logo a dropdown toggle marked by a notch', () => {
		renderWrapper();
		expect(brand()).toHaveAttribute('aria-haspopup', 'menu');
		expect(brand()).toHaveAttribute('aria-expanded', 'false');
		expect(
			within(brand()).getByTestId('platform-switcher-logo')
		).toBeInTheDocument();
	});

	it('lists the platforms with the current one ticked', () => {
		renderWrapper();
		fireEvent.click(brand());
		expect(brand()).toHaveAttribute('aria-expanded', 'true');
		const menu = screen.getByTestId('platform-menu');
		expect(within(menu).getByText('XPdite')).toBeInTheDocument();
		expect(
			within(menu).getByText('Knowledge graph and agent training')
		).toBeInTheDocument();
		expect(
			within(screen.getByTestId('platform-item-centra')).getByTestId(
				'platform-current'
			)
		).toBeInTheDocument();
		expect(
			within(screen.getByTestId('platform-item-xpdite')).queryByTestId(
				'platform-current'
			)
		).toBeNull();
	});

	it('hands the chosen platform to onPlatformSelect and closes', () => {
		const onPlatformSelect = jest.fn();
		const onBrandClick = jest.fn();
		renderWrapper({ onPlatformSelect, onBrandClick });
		fireEvent.click(brand());
		fireEvent.click(screen.getByTestId('platform-item-xpdite'));
		expect(onPlatformSelect).toHaveBeenCalledWith(platforms[1]);
		// The logo opens the menu instead of leading home
		expect(onBrandClick).not.toHaveBeenCalled();
		expect(brand()).toHaveAttribute('aria-expanded', 'false');
	});

	it('is a glass card on the flyout (glass) rail', () => {
		renderWrapper({ sidebarSubmenu: 'flyout' });
		fireEvent.click(brand());
		expect(screen.getByTestId('platform-menu')).toHaveAttribute(
			'data-glass',
			'true'
		);
	});

	it('is a plain card without the glass rail', () => {
		renderWrapper();
		fireEvent.click(brand());
		expect(screen.getByTestId('platform-menu')).not.toHaveAttribute(
			'data-glass'
		);
	});

	it('keeps the brand a home link with a single platform', () => {
		const onBrandClick = jest.fn();
		renderWrapper({ platforms: platforms.slice(0, 1), onBrandClick });
		expect(brand()).not.toHaveAttribute('aria-haspopup');
		fireEvent.click(brand());
		expect(onBrandClick).toHaveBeenCalled();
		expect(screen.queryByTestId('platform-menu')).toBeNull();
	});
});
