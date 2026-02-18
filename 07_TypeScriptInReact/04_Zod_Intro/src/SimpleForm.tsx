import { z } from 'zod/v4';

const FormSchema = z.email();

function submitAction(formData: FormData) {
	const email = formData.get('email');
	const { data, success, error } = FormSchema.safeParse(email);

	if (!success) {
		console.log(error);
		console.log(z.prettifyError(error));
	} else {
		console.log(data);
	}
}

export default function SimpleForm() {
	return (
		<>
			<h1>SimpleForm</h1>
			<form action={submitAction}>
				<input type='email' name='email' id='email' />
				<button type='submit'>Submit</button>
			</form>
		</>
	);
}
