import Arrow from './Arrow';
export default function FunctionPageHeader({
	hereText,
	nextStepText,
	...params
}) {
	const arrowSize = params.arrowSize !== undefined ? params.arrowSize : 44;
	const titleClass =
		'mw-full flex flex-row md:max-w-[33%] md:flex-col md:text-center lg:max-w-full';
	const h1Class =
		'mb-0 w-3/5 border-b-0 sm:max-w-full md:w-full border-r-2 md:border-r-0';
	const spanClass =
		'md:text-xs text-center m-auto rounded-2xl text-sm p-3 md:p-0';

	return (
		<div>
			<div className="flex flex-col justify-between border-b-[1px] pb-3 md:flex-row">
				<div className={`${titleClass}`}>
					<h1 className={`${h1Class} `}>{hereText}</h1>
					<span className={`${spanClass}`}>You are here</span>
				</div>
				<Arrow
					width={arrowSize}
					height={arrowSize}
					className="relative top-[7px] mb-5 self-start md:top-[-7px] md:mb-0 md:self-center"
				/>
				<div className={`${titleClass}`}>
					<h1 className={`${h1Class}`}>{nextStepText}</h1>
					<span className={`${spanClass}`}>Next Step</span>
				</div>
			</div>
		</div>
	);
}
