import { formatRole } from '../sidebarUtils';

describe('formatRole', () => {
	it('shows a stored role in capitals with spaces for underscores', () => {
		expect(formatRole('SUPER_ADMIN')).toBe('SUPER ADMIN');
		expect(formatRole('admin')).toBe('ADMIN');
		expect(formatRole('relationship_manager')).toBe('RELATIONSHIP MANAGER');
	});

	it('collapses stray separators rather than showing double spaces', () => {
		expect(formatRole('_SUPER__ADMIN_')).toBe('SUPER ADMIN');
	});
});
