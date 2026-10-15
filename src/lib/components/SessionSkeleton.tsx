import { Box, Skeleton, Stack } from '@mui/material';
import React from 'react';

export interface SessionSkeletonProps {
	isMobile: boolean;
	/** Desktop sidebar width the real layout reserves; 0 hides the rail. */
	sidebarWidthPx: number;
	/** Draw the rail as the floating glass capsule instead of an edge strip. */
	floatingRail?: { gutterPx: number; radiusPx: number };
	mobileBarHeightPx: number;
	sidebarSurface: string;
	contentBackground: string;
	/** Resolved padding: a CSS value or one per breakpoint. */
	contentPadding: string | Record<string, string>;
}

const RAIL_ITEMS = 6;

/** The app shell in outline while the session is checked, sized like the
 * real sidebar and top bar so the layout does not jump when it loads. */
const SessionSkeleton: React.FC<SessionSkeletonProps> = ({
	isMobile,
	sidebarWidthPx,
	floatingRail,
	mobileBarHeightPx,
	sidebarSurface,
	contentBackground,
	contentPadding
}) => {
	const railIcons = (
		<Stack alignItems='center' spacing={2} sx={{ pt: 2 }}>
			<Skeleton variant='rounded' width={32} height={32} />
			<Box sx={{ height: 8 }} />
			{Array.from({ length: RAIL_ITEMS }, (_, i) => (
				<Skeleton key={i} variant='rounded' width={28} height={28} />
			))}
		</Stack>
	);

	return (
		<Box
			role='status'
			aria-busy='true'
			aria-label='Checking session'
			sx={{
				display: 'flex',
				minHeight: '100vh',
				backgroundColor: contentBackground
			}}
		>
			{isMobile && (
				<Box
					sx={{
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						height: mobileBarHeightPx,
						px: 2,
						display: 'flex',
						alignItems: 'center',
						gap: 2,
						bgcolor: sidebarSurface,
						zIndex: 1
					}}
				>
					<Skeleton variant='rounded' width={24} height={24} />
					<Skeleton variant='text' width={96} />
					<Box sx={{ flexGrow: 1 }} />
					<Skeleton variant='circular' width={32} height={32} />
				</Box>
			)}

			{!isMobile && sidebarWidthPx > 0 && (
				<Box
					sx={{
						position: 'relative',
						width: sidebarWidthPx,
						flexShrink: 0
					}}
				>
					<Box
						sx={
							floatingRail
								? {
										position: 'fixed',
										top: floatingRail.gutterPx,
										bottom: floatingRail.gutterPx,
										left: floatingRail.gutterPx,
										width:
											sidebarWidthPx -
											2 * floatingRail.gutterPx,
										borderRadius: `${floatingRail.radiusPx}px`,
										bgcolor: sidebarSurface
									}
								: {
										position: 'fixed',
										top: 0,
										bottom: 0,
										left: 0,
										width: sidebarWidthPx,
										bgcolor: sidebarSurface
									}
						}
					>
						{railIcons}
					</Box>
				</Box>
			)}

			<Box
				sx={{
					flexGrow: 1,
					minWidth: 0,
					p: contentPadding,
					mt: isMobile ? `${mobileBarHeightPx}px` : 0
				}}
			>
				<Skeleton variant='text' width={220} height={40} />
				<Skeleton variant='text' width={320} sx={{ mb: 3 }} />
				<Stack direction='row' spacing={2} sx={{ mb: 3 }}>
					{Array.from({ length: isMobile ? 2 : 4 }, (_, i) => (
						<Skeleton
							key={i}
							variant='rounded'
							height={96}
							sx={{ flex: 1 }}
						/>
					))}
				</Stack>
				<Skeleton variant='rounded' height={360} />
			</Box>
		</Box>
	);
};

export default SessionSkeleton;
