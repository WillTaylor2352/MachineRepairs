export default function Disclaimer({ disclaimerText: disclaimerContext }) {
	return (
		<div className="flex justify-center">
			<span className="my-4 mr-4 inline-flex justify-center">
				<mark className="p-4 text-3xl font-extrabold text-red-500">STOP</mark>
			</span>
			<div className="self-center border-2 border-red-500 px-6 py-2 text-center">
				Are you sure that you need to be here? <br />
				Try finding the {disclaimerContext} using the below controls first.
			</div>
		</div>
	);
}
