'use client';
import Form from 'next/form';
import Button from '../Button';
import FormInput from '../(Forms)/input';
export default function FindCustomerMachine() {
	function handleFormSubmit() {}
	return (
		<div className="text-center">
			<p>Find Customer Machine component</p>
			<Form
				action={() => {
					console.log('hello there');
				}}
				className="grid grid-cols-2"
			>
				<FormInput type="text" labelText="First Name" id={'fname'} />
			</Form>
		</div>
	);
}
