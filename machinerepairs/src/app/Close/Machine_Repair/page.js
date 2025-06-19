import FunctionPageHeader from '@/components/server/Function_Page_Header';

export default function Page() {
	const listyles = `mb-5`;
	const olroutestyles = `list-disc`;
	const liroutestyles = `mb-4`;
	return (
		<div className="ml-10">
			<FunctionPageHeader
				hereText={'Close Machine Repair'}
				nextStepText={'Process in BT'}
			/>
			<h1>Blocking / ideas</h1>
			<h2>Flow</h2>
			<ol className="list-decimal">
				<li className={`${listyles}`}>
					<p>Create a dropdown for grabbing the machine repair</p>
				</li>
				<li className={`${listyles}`}>
					<p>On selection, use the repairId to navigate to the slug</p>
				</li>
				<li className={`${listyles}`}>
					<p>
						Useeffect within the slug to fetch and load the customer contact
						data tied to the repairId
					</p>
				</li>
				<li className={`${listyles}`}>
					<p>
						Once the data is fetched, then loaded, display data within elements
						on the page
					</p>
				</li>
				<li className={`${listyles}`}>
					<p>
						Confirm that the machine repair wants to be closed, prompt for
						confirmation
					</p>
				</li>
				<li className={`${listyles}`}>
					<p>
						on confirmation, display notice to the counter guy to go into the
						system and close out the associated sales order (present the
						ordernumber to them with a copy button)
					</p>
				</li>
			</ol>
		</div>
	);
}
