import Button from '@/components/client/Button';
import Image from 'next/image';
import hp_buttons from './res/lists/app-page_buttons.json';
import Link from 'next/link';

export default function Home() {
	const b_defaultstyle = 'p-4';
	const h2_defualtstyle = 'mb-2 border-b-[1px] w-1/2 mx-auto ';
	const buttonItemSpacing = 'mt-3';

	let h2_key = 0;
	let link_key = 0;

	return (
		<div className="flex h-full flex-col justify-center">
			<div className="flex h-full flex-col justify-evenly text-center md:w-1/2">
				<h1 className={`mb-[calc(3vh)] w-auto border-b-[1px] pb-2`}>
					Machine Repairs
				</h1>
				<div className="flex h-full flex-col justify-start">
					{
						// map all categories by Top-Level Name
						Object.entries(hp_buttons).map((category) => {
							const categoryTitle = category[0];
							const categoryButtons = category[1][0].ButtonData;
							return (
								<div
									key={(h2_key += 1)}
									className="mb-8 w-[calc(95vw)] self-center"
								>
									<h2>{categoryTitle}</h2>
									<div
										className="grid grid-cols-2 gap-2"
										id={`hp_${categoryTitle}`}
									>
										{
											// loop over all items within category and create the linked buttons
											Object.entries(categoryButtons).map((categoryItem) => {
												categoryItem = categoryItem[1];
												return (
													<Link href={categoryItem.Link} key={(link_key += 1)}>
														<Button
															className={`${b_defaultstyle}`}
															description={categoryItem.Text}
														/>
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
			</div>
		</div>
	);
}
