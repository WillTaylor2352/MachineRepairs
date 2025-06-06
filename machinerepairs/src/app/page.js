import Button from '@/components/client/Button';
import Image from 'next/image';

export default function Home() {
	const defaultstyle = 'p-4';
	const buttonItemSpacing = 'mt-3';
	return (
		<div className="item flex h-full flex-col items-center">
			<div className="m-auto flex w-1/2 flex-col items-center pb-[15vh] text-center">
				<h1
					className={`${defaultstyle} mb-[calc(5vh)] border-b-[1px] text-3xl`}
				>
					What are you trying to do?
				</h1>
				<Button
					className={`${defaultstyle} `}
					description={'Check in Machine'}
				/>
				<Button
					classes={`${defaultstyle} ${buttonItemSpacing} `}
					description={'Transfer Machine'}
					overrideClasses={true}
				/>
				<Button className={`${defaultstyle}`} description={'Work on Machine'} />
			</div>
		</div>
	);
}
