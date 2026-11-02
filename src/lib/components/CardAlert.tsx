import { SparklesIcon } from 'lucide-react';
import * as React from 'react';
import { Button } from './ui/button';

interface CardAlertProps {
	title?: string;
	message?: string;
	buttonText?: string;
	onButtonClick?: () => void;
	show?: boolean;
}

const CardAlert: React.FC<CardAlertProps> = ({
	title = '',
	message = '',
	buttonText = '',
	onButtonClick,
	show = true
}) => {
	if (!show) return null;

	return (
		<div className='lw:m-3 lw:shrink-0 lw:rounded-lg lw:border lw:border-solid lw:border-border lw:bg-card lw:p-4 lw:text-card-foreground'>
			<SparklesIcon className='lw:size-5' aria-hidden />
			<p className='lw:mb-[0.35em] lw:text-sm lw:font-semibold'>
				{title}
			</p>
			<p className='lw:mb-4 lw:text-sm lw:text-muted-foreground'>
				{message}
			</p>
			<Button size='sm' className='lw:w-full' onClick={onButtonClick}>
				{buttonText}
			</Button>
		</div>
	);
};

export default CardAlert;
