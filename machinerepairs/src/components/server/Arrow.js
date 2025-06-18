import Image from 'next/image';
export default function Arrow({ width, height, className }) {
	return (
		<div className={`flex h-[44px] ${className} mr-3`}>
			<Image
				src={'/arrow_tail.svg'}
				width={width}
				height={height}
				className="antialiased"
				alt="An arrow... duh"
			/>
			<Image
				src={'/arrow_body.svg'}
				width={width}
				height={height}
				className="antialiased"
				alt="An arrow... duh"
			/>
			<Image
				src={'/arrow_point.svg'}
				width={width}
				height={height}
				className="antialiased"
				alt="An arrow... duh"
			/>
		</div>
	);
}
