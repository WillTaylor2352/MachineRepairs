import FunctionPageHeader from '@/components/server/Function_Page_Header';
export default function Page() {
	const listyles = `mb-5`;
	const olroutestyles = `list-disc`;
	const liroutestyles = `mb-4`;
	return (
		<div className="ml-10">
			<FunctionPageHeader
				hereText={'Edit Customer Machine'}
				nextStepText={'Home'}
			/>
			<h1>Blocking / ideas</h1>
			<h2>Flow</h2>
			<ol className="list-decimal">
				<li className={`${listyles}`}>
					<p>Create a dropdown to list the available customers</p>
				</li>
				<li className={`${listyles}`}>
					<p>
						After selecting a customer provide a dropdown for their available
						machines
					</p>
				</li>
				<li className={`${listyles}`}>
					<p>
						On selection of machine, use the machineId to navigate to the slug
					</p>
				</li>
				<li className={`${listyles}`}>
					<p>Useeffect within the slug to fetch and load the data</p>
				</li>
				<li className={`${listyles}`}>
					<p>
						Once the data is fetched, then loaded, display data within elements
						on the page
					</p>
				</li>
			</ol>
			<h2>api routes</h2>
			<mark>THE FOLLOWING HAS BEEN COPY/PASTED</mark>
			<ol className={`${olroutestyles}`}>
				<li className={`${liroutestyles}`}>
					<h3>/getTransfers</h3>
					<p>Params: branchid - use from localstorage</p>
				</li>
				<li className={`${liroutestyles}`}>
					<h3>/getTransferData</h3>
					<p>
						Params: transferId - passed in from the result of selected transfer
						(returned by /getTransfers)
					</p>
				</li>
				<li className={`${liroutestyles}`}>
					<h3>/updateTransfer</h3>
					<p>
						Params: POST DATA | list of machines to include on transfer (make
						sure to use the modified list, and not the originally passed list)
					</p>
				</li>
			</ol>
		</div>
	);
}
