import Nav_Buttons from '../client/Navigation_buttons';
const li = 'inline  m-4';
const ul = 'list-none';

export default function Navigation() {
	return (
		<div>
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
		</div>
	);
}
