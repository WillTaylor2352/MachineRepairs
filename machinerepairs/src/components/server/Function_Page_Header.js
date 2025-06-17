import Arrow from './Arrow';
export default function FunctionPageHeader({
	hereText,
	nextStepText,
	...params
}) {
	const arrowSize = params.arrowSize !== undefined ? params.arrowSize : 44;
	const spanClass = 'text-xs text-center';

	return (
		<div>
			<div className="flex flex-row justify-between border-b-[1px] pb-3">
				<div className="flex flex-col">
					<h1 className="mb-0 border-b-0">{hereText}</h1>
					<span className={`${spanClass}`}>You are here</span>
				</div>
				<Arrow
					width={arrowSize}
					height={arrowSize}
					className="relative top-[7px]"
				/>
				<div className="flex flex-col">
					<h1 className="mb-0 border-b-0">{nextStepText}</h1>
					<span className={`${spanClass}`}>Next Step</span>
				</div>
			</div>
		</div>
	);
}
