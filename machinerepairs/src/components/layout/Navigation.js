import Nav_Buttons from '../client/Navigation_buttons';
import ThemeSwitcher from '../client/ThemeSwitcher';
const li = 'm-4';
const ul = 'inline-flex justify-center clear-end';

export default function Navigation() {
	return (
		<div className="mt-3 flex justify-evenly">
			<span className="min-w-16 max-w-24"></span>
			<ul className={`${ul}`}>
				<li className={`${li}`}>
					<Nav_Buttons title={'Home'} link={'/'} />
				</li>
				<li className={`${li}`}>
					<Nav_Buttons title={'Counter Sales'} link={'/CounterSales'} />
				</li>
				<li className={`${li}`}>
					<Nav_Buttons title={'Dispatch'} link={'/DispatchCoordinator'} />
				</li>
				<li className={`${li}`}>
					<Nav_Buttons title={'Repair Tech'} link={'/RepairTech'} />
				</li>
			</ul>
			<ThemeSwitcher li={li} />
		</div>
	);
}
