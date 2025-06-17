import HomeButtons from '@/components/server/Home_Buttons';

export default function Home() {
	const b_defaultstyle = 'p-4';
	const h2_defualtstyle = 'mb-2 border-b-[1px] w-1/2 mx-auto ';
	const buttonItemSpacing = 'mt-3';

	return (
		<div className="grid h-full grid-cols-1">
			<div className="w-[calc(95vw)] self-start justify-self-center md:w-3/4 ">
				<h1 className={`mb-[calc(3vh)] w-auto border-b-[1px] pb-2`}>
					Machine Repairs
				</h1>
				<h2>NOTES TO SELF</h2>
				<ul className="ml-5 list-disc">
					<li>
						<p className="mb-5">
							make sure to <em>require</em> users to select a branch. Then store
							that data into localstorage.
						</p>
					</li>
					<li>
						<p className="mb-5">
							above could be overridden via a configuration file
						</p>
					</li>
				</ul>
				<HomeButtons id="homepageButtons" />
			</div>
		</div>
	);
}
