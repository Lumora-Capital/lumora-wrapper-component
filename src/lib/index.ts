// Export the LumoraWrapper component and its props interface
import type {
	LumoraWrapperProps,
	SidebarLink,
	SidebarSubLink
} from './components/LumoraWrapper';
import LumoraWrapper from './components/LumoraWrapper';
// Export the standalone collapsible sidebar and its props
import type { CollapsibleSidebarProps } from './components/CollapsibleSidebar';
import CollapsibleSidebar from './components/CollapsibleSidebar';

// Export authentication utilities
export * from './authUtils';

export { CollapsibleSidebar, LumoraWrapper };
export type {
	CollapsibleSidebarProps,
	LumoraWrapperProps,
	SidebarLink,
	SidebarSubLink
};

// Re-export for better tree-shaking
export default LumoraWrapper;
