import next from 'next';
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
	// structure the formatting
	const stepTitleCSS = {
		titleClass: titleClass,
		flexSet: flexSet,
		h1Class: h1Class,
		spanClass: spanClass,
	};
	return (
		<div>
			<div className="flex flex-col justify-between border-b-[1px] pb-3 md:flex-row">
				<StepBuilder
					stepTitleCSS={stepTitleCSS}
					stepText={hereText}
					stepSequence="This Step"
				/>
				<div className={`${flexSet} md:justify-center`}>
					<Arrow
						width={arrowSize}
						height={arrowSize}
						className="relative top-[7px] mb-5 self-start md:top-[-7px] md:mb-0 md:self-center"
					/>
				</div>
				<StepBuilder
					stepTitleCSS={stepTitleCSS}
					stepText={nextStepText}
					stepSequence="Next Step"
				/>
			</div>
		</div>
	);
}
function StepBuilder({ stepTitleCSS, stepText, stepSequence }) {
	const s = stepTitleCSS;
	return (
		<div className={`${s.flexSet} `}>
			<div className={`${s.titleClass}`}>
				<h1 className={`${s.h1Class}`}>{stepText}</h1>
				<span className={`${s.spanClass}`}>{stepSequence}</span>
			</div>
		</div>
	);
}
