import {
	Adb as AdbIcon,
	Analytics as AnalyticsIcon,
	Campaign as CampaignIcon,
	Business as BusinessIcon,
	Dashboard as DashboardIcon,
	People as PeopleIcon,
	Settings as SettingsIcon
} from '@mui/icons-material';
import type { SidebarLink } from '../lib';

/** Flat links, like most host apps. */
export const flatLinks: SidebarLink[] = [
	{ text: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
	{ text: 'Deals', path: '/deals', icon: <AnalyticsIcon /> },
	{ text: 'CRM', path: '/crm', icon: <AdbIcon /> },
	{
		text: 'Funding Partners',
		path: '/funding-partners',
		icon: <PeopleIcon />
	}
];

/** Links with sub-items and a third level (`CRM › Marketing › Campaigns`). */
export const nestedLinks: SidebarLink[] = [
	{ text: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
	{ text: 'Deals', path: '/deals', icon: <AnalyticsIcon /> },
	{
		text: 'CRM',
		icon: <AdbIcon />,
		subitems: [
			{ text: 'People', path: '/crm/people', icon: <PeopleIcon /> },
			{
				text: 'Companies',
				path: '/crm/companies',
				icon: <BusinessIcon />
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
	},
	{
		text: 'Funding Partners',
		path: '/funding-partners',
		icon: <PeopleIcon />
	}
];

export const secondaryLinks: SidebarLink[] = [
	{ text: 'Configuration', path: '/configuration', icon: <SettingsIcon /> }
];
