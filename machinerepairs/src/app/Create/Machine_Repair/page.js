import FunctionPageHeader from '@/components/server/Function_Page_Header';
import FormInput from '@/components/client/(Forms)/input';
import Form from 'next/form';

export default function Page() {
	let customerFound = false;
	return (
		<div>
			<FunctionPageHeader
				hereText={'Create Machine Repair'}
				nextStepText={'Create Transfer'}
			/>
			<div className="m-2 inline-flex w-full justify-evenly">
				<Form id="s_customer" className="pt-3 ">
					<FormInput
						type={'text'}
						id={'s_customer'}
						labelText="Search for Customer"
					/>
				</Form>
				<Form id="s_machine" className="pt-3 ">
					<FormInput
						type={'text'}
						id={'textInput_s_machine'}
						labelText="Search for Machine"
						disabled={!customerFound}
					/>
				</Form>
			</div>
			<table className="w-full border-2 text-center">
				<thead className="bg-slate-600">
					<tr>
						<th>hello</th>
						<th>there</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>general</td>
						<td>kenobi</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
