'use client';

import { useEffect, useState } from 'react';

export default function BPCheck() {
	const [mywidth, setmywidth] = useState(
		typeof window !== 'undefined' ? window.innerWidth : null
	);
	const [bp, setbp] = useState('X');
	useEffect(() => {
		window.addEventListener('resize', () => {
			setmywidth(window.innerWidth);
		});
	}, []);

	useEffect(() => {
		mywidth <= 640 ? setbp('xs') : null;
		mywidth >= 640 ? setbp('sm') : null;
		mywidth >= 768 ? setbp('md') : null;
		mywidth >= 1024 ? setbp('lg') : null;
		mywidth >= 1280 ? setbp('xl') : null;
		mywidth >= 1536 ? setbp('2xl') : null;
	}, [mywidth]);

	return (
		<div className="absolute left-6 top-6 max-h-6 max-w-6 bg-white text-center font-bold text-red-700 ">
			{bp}
		</div>
	);
}
