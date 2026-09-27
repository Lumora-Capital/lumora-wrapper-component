import {
	AccountBalanceOutlined as DealsIcon,
	BusinessOutlined as CompaniesIcon,
	CampaignOutlined as CampaignIcon,
	HeadsetMicOutlined as SupportIcon,
	InsertChartOutlined as DashboardIcon,
	PeopleOutline as PeopleIcon,
	StarBorderRounded as PinsIcon
} from '@mui/icons-material';
import type { SidebarLink, SidebarSubLink } from '../lib';

/** Flat links, like most host apps. */
export const flatLinks: SidebarLink[] = [
	{ text: 'My Pins', path: '/pins', icon: <PinsIcon /> },
	{ text: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
	{ text: 'Deals', path: '/deals', icon: <DealsIcon /> },
	{ text: 'CRM', path: '/crm', icon: <PeopleIcon /> }
];

/** The Centra navigation, with a third level (`CRM › Marketing › Campaigns`). */
export const nestedLinks: SidebarLink[] = [
	{ text: 'My Pins', path: '/pins', icon: <PinsIcon /> },
	{ text: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
	{ text: 'Deals', path: '/deals', icon: <DealsIcon /> },
	{
		text: 'CRM',
		icon: <PeopleIcon />,
		subitems: [
			{ text: 'People', path: '/crm/people' },
			{
				text: 'Companies',
				path: '/crm/companies',
				icon: <CompaniesIcon />
			},
			{
				text: 'Marketing',
				icon: <CampaignIcon />,
				subitems: [
					{ text: 'Campaigns', path: '/crm/marketing/campaigns' },
					{ text: 'Audiences', path: '/crm/marketing/audiences' }
				]
			}
		]
	}
];

export const secondaryLinks: SidebarLink[] = [
	{ text: 'Help & support', path: '/help', icon: <SupportIcon /> }
];

/** Page title for a path, from the links above. */
export const titleForPath = (path: string): string => {
	const find = (
		links: Array<SidebarLink | SidebarSubLink>
	): string | undefined => {
		for (const link of links) {
			if (link.path === path) {
				return link.text;
			}
			const nested = link.subitems && find(link.subitems);
			if (nested) {
				return nested;
			}
		}
		return undefined;
	};
	if (path === '/settings') {
		return 'Settings';
	}
	return find([...nestedLinks, ...secondaryLinks]) ?? path;
};
