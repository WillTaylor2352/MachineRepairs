import Nav_Buttons from '../client/Navigation_buttons';
import ThemeSwitcher from '../client/ThemeSwitcher';
const liclass = 'm-4';
const ulclass = 'inline-flex justify-center clear-end';
const leftRightSizing = 'min-w-16 max-w-24';

export default function Navigation() {
	const navItems = [
		{
			title: 'Home',
			link: '/',
		},
		{
			title: 'Counter Sales',
			link: '/CounterSales',
		},
		{
			title: 'Dispatch',
			link: '/DispatchCoordinator',
		},
		{
			title: 'Repair Tech',
			link: '/RepairTech',
		},
	];
	return (
		<div className="mt-3 flex justify-evenly">
			<span className={`${leftRightSizing}`}></span>
			<ul className={`${ulclass}`}>
				{navItems.map((li) => {
					return (
						<li className={`${liclass}`}>
							<Nav_Buttons title={li.title} link={li.link} />
						</li>
					);
				})}
			</ul>
			<ThemeSwitcher li={liclass} lrs={`${leftRightSizing}`} />
		</div>
	);
}
