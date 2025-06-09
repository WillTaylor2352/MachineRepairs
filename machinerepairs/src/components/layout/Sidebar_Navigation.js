'use client';
import Nav_Buttons from '../client/Navigation_buttons';
import ThemeSwitcher from '../client/ThemeSwitcher';
import data from '../../app/res/lists/navigation_items.json';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const liclass = 'm-4';
const leftRightSizing = 'min-w-16 max-w-24';
const ulclass = 'justify-center clear-end';

export default function SideBar({ className }) {
	const [sidebarShown, setSidebar] = useState(false);
	const [sideBarClasses, setClasses] = useState('invisible');

	useEffect(() => {
		setSidebar(sidebarShown ? false : true);
	}, [sideBarClasses]);

	function handleShowHideSidebar() {
		sidebarShown ? setClasses('visible') : setClasses('invisible');
		console.log(sidebarShown);
	}

	const navItems = data;
	let currkey = 0;
	return (
		<div>
			<div
				className={`${className} absolute top-1/2 h-[50vh] w-full pl-3 ${sideBarClasses}`}
			>
				<div className={`flex h-[50vh] flex-col justify-center `}>
					<h1 className="mx-[10%] mb-4 max-w-[90%] border-b-[1px] pb-2 text-center">
						Menu
					</h1>
					<ul className={`${ulclass} w-full self-center text-center`}>
						{Object.entries(navItems).map((li) => {
							currkey += 1;
							// ex: "item":{"title":x,"link":/y}
							// [1] is the object for the item
							// [0] is the specific array targeting the item
							return (
								<li
									key={currkey}
									className={`${liclass}`}
									onClick={() => {
										setClasses('invisible');
									}}
								>
									<Nav_Buttons title={li[1][0].title} link={li[1][0].link} />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<button onClick={handleShowHideSidebar}>
				<Image
					className="absolute bottom-7 right-7 lg:invisible"
					src={'/menu_ico_dark.svg'}
					width={60}
					height={60}
					alt="Switch to Dark Mode"
				/>
			</button>
		</div>
	);
}
