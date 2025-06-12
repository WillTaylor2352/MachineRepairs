import Button from '@/components/client/Button';
import Image from 'next/image';

export default function Home() {
	const b_defaultstyle = 'p-4';
	const buttonItemSpacing = 'mt-3';
	return (
		<div className="flex h-full flex-col justify-center">
			<div className="flex flex-col justify-center text-center md:w-1/2">
				<h1 className={`mb-[calc(5vh)] border-b-[1px] p-4 text-3xl`}>
					Machine Repairs
				</h1>
				<div className="grid grid-cols-2 gap-2">
					<Button
						className={`${b_defaultstyle} `}
						description={'Check in Machine'}
					/>
					<Button
						className={`${b_defaultstyle}`}
						description={'Transfer Machine'}
					/>
					<Button
						className={`${b_defaultstyle}`}
						description={'Work on Machine'}
					/>
					<Button
						className={`${b_defaultstyle}`}
						description={'Close Machine Repair'}
					/>
				</div>
			</div>
		</div>
	);
}
