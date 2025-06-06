'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ThemeSwitcher(props) {
	const imagePadding = 'p-3';
	const [theme, setTheme] = useState(null);
	function handleClick() {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		if (typeof window !== undefined) {
			window.localStorage.setItem('currentTheme', newTheme);
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			let currentTheme = window.localStorage.getItem('currentTheme');
			if (!currentTheme) {
				console.log('hello there');
				currentTheme = 'light';
				window.localStorage.setItem('currentTheme', currentTheme);
			}
			setTheme(currentTheme);
		}
	}, []);

	return (
		<div className={`flex ${props.lrs} items-center justify-center`}>
			{(theme === 'light' && (
				<button className={`${imagePadding}`} onClick={handleClick}>
					<Image
						src="/sun.svg"
						width={25}
						height={25}
						alt="Switch to Light Mode"
					/>
				</button>
			)) || (
				<button className={`${imagePadding}`} onClick={handleClick}>
					<Image
						src="/moon.svg"
						width={25}
						height={25}
						alt="Switch to Dark Mode"
					/>
				</button>
			)}
		</div>
	);
}
