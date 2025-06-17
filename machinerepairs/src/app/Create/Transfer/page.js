import Arrow from '@/components/server/Arrow';
import FunctionPageHeader from '@/components/server/Function_Page_Header';
import Image from 'next/image';

export default function Page() {
	const arrowSize = 44;
	const spanClass = 'text-xs text-center';
	return (
		<div>
			<FunctionPageHeader
				hereText={'Create Transfer'}
				nextStepText={'Process Transfer'}
			/>
		</div>
	);
}
