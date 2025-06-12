'use client';

export default function Button({ onClick, title, classes, description }) {
	return (
		<div>
			<button
				onClick={onClick}
				className={`${classes != null ? classes : `btn`}`}
				title={title}
			>
				{description}
			</button>
		</div>
	);
}
