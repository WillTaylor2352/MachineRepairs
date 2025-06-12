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
				{
					// loop over all json items and print the category name
					Object.entries(hp_buttons).map((h2) => {
						const h2buttons = h2[1][0].ButtonTextAndLink;
						return (
							<div key={(h2_key += 1)}>
								<h2>{h2[0]}</h2>
								<div className="grid grid-cols-2 gap-2" id={`hp_${h2[0]}`}>
									{
										// loop over all button names in json's buttons and bind links
										Object.entries(h2buttons).map((b_text) => {
											console.log(b_text[1].Link);
											return (
												<Link href={b_text[1].Link} key={(link_key += 1)}>
													<Button
														className={`${b_defaultstyle}`}
														description={b_text[1].Text}
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
	);
}
