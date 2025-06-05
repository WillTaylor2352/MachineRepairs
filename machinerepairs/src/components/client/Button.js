'use client';

export default function Button({
	callback,
	title,
	classes,
	description,
	overrideClasses = false,
}) {
	return (
		<div>
			<button
				onClick={callback}
				className={`${overrideClasses ? classes : `btn`}`}
				title={title}
			>
				{description}
			</button>
		</div>
	);
}
