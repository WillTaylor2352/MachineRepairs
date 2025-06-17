import HomeButtons from '@/components/server/Home_Buttons';

export default function Home() {
	const b_defaultstyle = 'p-4';
	const h2_defualtstyle = 'mb-2 border-b-[1px] w-1/2 mx-auto ';
	const buttonItemSpacing = 'mt-3';

	return (
		<div>
			<h1>Machine Repairs</h1>
			<h2>NOTES TO SELF</h2>
			<ul className="ml-5 list-disc">
				<li>
					<p className="mb-5">
						make sure to <em>require</em> users to select a branch. Then store
						that data into localstorage.
					</p>
				</li>
			</ul>
			<HomeButtons id="homepageButtons" />
		</div>
	);
}
