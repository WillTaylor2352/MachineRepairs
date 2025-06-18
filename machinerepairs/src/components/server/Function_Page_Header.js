import Arrow from './Arrow';
export default function FunctionPageHeader({
	hereText,
	nextStepText,
	...params
}) {
	const arrowSize = params.arrowSize !== undefined ? params.arrowSize : 44;
	const flexSet = 'flex md:w-1/3 justify-start';
	const titleClass =
		'flex w-full flex-row md:flex-col md:text-center self-center';
	const h1Class =
		'mb-0 w-3/5 border-b-0 sm:max-w-full md:w-full border-r-2 md:border-r-0 pr-3';
	const spanClass =
		'p-3 text-center text-sm md:p-0 md:text-xs min-w-fit mx-auto self-center';

	return (
		<div>
			<div className="flex flex-col justify-between border-b-[1px] pb-3 md:flex-row">
				<div className={`${flexSet} `}>
					<div className={`${titleClass}`}>
						<h1 className={`${h1Class} `}>{hereText}</h1>
						<span className={`${spanClass}`}>You are here</span>
					</div>
				</div>
				<div className={`${flexSet} md:justify-center`}>
					<Arrow
						width={arrowSize}
						height={arrowSize}
						className="relative top-[7px] mb-5 self-start md:top-[-7px] md:mb-0 md:self-center"
					/>
				</div>
				<div className={`${flexSet} md:justify-end`}>
					<div className={`${titleClass}`}>
						<h1 className={`${h1Class}`}>{nextStepText}</h1>
						<span className={`${spanClass}`}>Next Step</span>
					</div>
				</div>
			</div>
		</div>
	);
}
