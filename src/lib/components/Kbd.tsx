import * as React from 'react';

/** Keyboard shortcut hint, e.g. ⌘ J. */
const Kbd: React.FC<{ keys: string[] }> = ({ keys }) => (
	<kbd
		aria-hidden='true'
		className='lw:inline-flex lw:h-5 lw:shrink-0 lw:items-center lw:gap-1 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-surface lw:px-1.5 lw:font-[inherit] lw:text-[11px] lw:leading-none lw:text-muted-foreground'
	>
		{keys.map(key => (
			<span key={key}>{key}</span>
		))}
	</kbd>
);

export default Kbd;
