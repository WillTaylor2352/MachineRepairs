'use client';
import Button from '../Button';

export default function FormInput({ type, id, labelText = '', disabled }) {
	const label = (
		<label htmlFor={id} className="mr-3">
			{labelText}
		</label>
	);
	const button = (
		<Button>
			<input
				type={type}
				id={id}
				name={id}
				className="rounded-lg border-2 border-white bg-black p-1 pl-2"
				disabled={disabled}
			></input>
		</Button>
	);
	const text = (
		<input
			type={type}
			id={id}
			name={id}
			className="rounded-lg border-2 border-white bg-black p-1 pl-2"
			disabled={disabled}
		></input>
	);
	let HTMLforType;
	switch (type) {
		case 'text':
			return (
				<>
					{label}
					{text}
				</>
			);
		case 'button':
			return (
				<>
					{label}
					{button}
				</>
			);

		default:
			return <div>hello</div>;
	}
}
