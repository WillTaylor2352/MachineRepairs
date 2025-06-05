'use client';

export default function Button({ callback, title, classes, description }) {
	return (
		<div>
			<button
				onClick={callback}
				className={`${classes != null ? classes : `btn`}`}
				title={title}
			>
				{description}
			</button>
		</div>
	);
}
