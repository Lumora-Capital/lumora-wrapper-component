import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import type { SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import * as React from 'react';
import type { SettingsItem, SettingsSection } from './LumoraWrapper';
import SubPanel from './SubPanel';

/** Test-id friendly slug for items without an explicit key. */
export const slugify = (text: string) =>
	text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');

export interface SettingsPanelProps {
	sections: SettingsSection[];
	onItemClick: (item: SettingsItem, section: SettingsSection) => void;
	width: number;
	/** Card chrome shared with the account menu card. */
	sx?: SxProps<Theme>;
}

/**
 * Second card of the account menu: host-defined settings grouped under
 * collapsible section headers. Headers and items are siblings in ONE MenuList
 * (closed sections simply don't render their items) so ArrowUp/Down walks the
 * whole list — nested lists would be invisible to MenuList's traversal.
 * No close button: Escape, or the Settings row itself, closes the card.
 */
const SettingsPanel: React.FC<SettingsPanelProps> = ({
	sections,
	onItemClick,
	width,
	sx
}) => {
	// Keyed by section title; absent = the section's own default (open).
	const [openSections, setOpenSections] = React.useState<
		Record<string, boolean>
	>({});
	const isOpen = (section: SettingsSection) =>
		openSections[section.title] ?? section.defaultOpen ?? true;
	const toggle = (section: SettingsSection) =>
		setOpenSections(prev => ({
			...prev,
			[section.title]: !isOpen(section)
		}));

	return (
		<SubPanel
			title='Settings'
			testId='settings-panel'
			width={width}
			sx={sx}
		>
			<MenuList
				autoFocusItem
				aria-label='Settings'
				sx={{ px: 1, py: 0.5, maxHeight: '60vh', overflowY: 'auto' }}
			>
				{sections.flatMap(section => {
					const open = isOpen(section);
					const sectionSlug = slugify(section.title);
					const header = (
						<MenuItem
							key={`section-${section.title}`}
							onClick={() => toggle(section)}
							aria-expanded={open}
							data-testid={`settings-section-${sectionSlug}`}
							sx={{
								borderRadius: '8px',
								py: 0.75,
								gap: 1,
								fontWeight: 600
							}}
						>
							<Box component='span' sx={{ flex: 1, minWidth: 0 }}>
								{section.title}
							</Box>
							{/* Chevron on the trailing edge; points right when
							    closed, down when open. */}
							<ExpandMoreRounded
								data-testid={`settings-section-${sectionSlug}-chevron`}
								sx={{
									fontSize: 20,
									color: 'text.secondary',
									flexShrink: 0,
									transform: open ? 'none' : 'rotate(-90deg)',
									transition: 'transform 150ms ease'
								}}
							/>
						</MenuItem>
					);
					if (!open) {
						return [header];
					}
					return [
						header,
						...section.items.map(item => (
							<MenuItem
								key={`item-${section.title}-${item.key ?? item.text}`}
								onClick={() => onItemClick(item, section)}
								disabled={item.disabled}
								data-testid={`settings-item-${item.key ?? slugify(item.text)}`}
								sx={{
									borderRadius: '8px',
									py: 0.75,
									// Indented under the header, no bullet.
									pl: 3.5
								}}
							>
								{item.text}
							</MenuItem>
						))
					];
				})}
			</MenuList>
		</SubPanel>
	);
};

export default SettingsPanel;
