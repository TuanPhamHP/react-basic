import React from 'react';
import { useTheme } from '../context/Theme';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ToggleThemeButton() {
	const { toggleTheme, isDarkTheme } = useTheme();
	return (
		<button
			onClick={toggleTheme}
			className='h-10 w-10 rounded-full flex items-center justify-center
    text-slate-700 dark:text-white transition
    shadow fixed bottom-2 right-2 scale-75 hover:scale-100
    '
		>
			{isDarkTheme ? <SunIcon /> : <MoonIcon />}
		</button>
	);
}
