import Button from '@/components/client/Button';
import hp_buttons from '../../app/res/lists/app-page_buttons.json';
import Link from 'next/link';

export default function HomeButtons({ id }) {
	const b_defaultstyle = 'p-4';
	const h2_defualtstyle = 'mb-2 border-b-[1px] w-1/2 mx-auto ';
	const buttonItemSpacing = 'mt-3';
	return (
		<div className="grid justify-self-center md:w-[calc(95%)]" id={id}>
			{
				// see hp_buttons import for location of Buttons configuration json
				// map all categories by Top-Level Name
				Object.entries(hp_buttons).map((category, i) => {
					const categoryTitle = category[0];
					const categoryButtons = category[1][0].ButtonData;

					return (
						<div key={i} className="mb-8 w-[calc(95vw)] self-center md:w-full">
							<span className="relative top-[calc(-5px)] inline-block pr-3 text-sm">
								|
							</span>
							<h2 className="inline-block first-letter:text-2xl">{`${categoryTitle}`}</h2>
							<div
								className="grid grid-cols-2 gap-2 md:ml-4 md:grid-cols-2 xl:grid-cols-3"
								id={`hp_${categoryTitle}`}
							>
								{
									// loop over all items within category and create the linked buttons
									Object.entries(categoryButtons).map((categoryItem, j) => {
										categoryItem = categoryItem[1];
										return (
											<Link href={categoryItem.Link} key={j}>
												<div>
													<Button
														classes={`btn sm:w-full `}
														// className={`${b_defaultstyle} w-`}
														description={categoryItem.Text}
													/>
												</div>
											</Link>
										);
									})
								}
							</div>
						</div>
					);
				})
			}
		</div>
	);
}
