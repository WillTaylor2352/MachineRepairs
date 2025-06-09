import Nav_Buttons from '../client/Navigation_buttons';
import ThemeSwitcher from '../client/ThemeSwitcher';
import data from '../../app/res/lists/navigation_items.json';
const liclass = 'm-4';
const leftRightSizing = 'min-w-16 max-w-24';
const ulclass = 'inline-flex justify-center clear-end';

export default function SideBar() {
	const navItems = data;
	return (
		<div>
			<ul>
				{
					<ul className={`${ulclass}`}>
						{Object.entries(navItems).map((li) => {
							// ex: "entry":{"title":x,"link":/y}
							// [1] is the object of the entry
							// [0] is the specific array of this object
							return (
								<li className={`${liclass}`}>
									<Nav_Buttons title={li[1][0].title} link={li[1][0].link} />
								</li>
							);
						})}
					</ul>
				}
			</ul>
		</div>
	);
}
