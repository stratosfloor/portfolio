'use client';

import React, { MouseEventHandler, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>('light');

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<button
			className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center text-lg hover:scale-[1.15] focus:scale-[1.15] active:scale-105 transition-all"
			onClick={toggleTheme}
		>
			{theme === 'light' ? <BsSun /> : <BsMoon />}
		</button>
	);
}
