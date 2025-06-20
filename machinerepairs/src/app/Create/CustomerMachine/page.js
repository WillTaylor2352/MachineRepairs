import Disclaimer from '@/components/server/Disclaimer';
import FunctionPageHeader from '@/components/server/Function_Page_Header';

export default function Page() {
	return (
		<div>
			<FunctionPageHeader
				hereText={'Create Customer Machine'}
				nextStepText={'Home'}
			/>
			<Disclaimer disclaimerText={'Customer Machine'} />
		</div>
	);
}
