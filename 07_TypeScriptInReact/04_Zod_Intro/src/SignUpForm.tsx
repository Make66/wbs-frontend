import { z } from 'zod/v4';
import { useActionState } from 'react';

const UserSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.email(),
	password: z.string().min(8),
});

type User = z.infer<typeof UserSchema>;

type ActionState = {
	error: string | null;
	data: User | null;
	// rawInput: {
	// 	[k: string]: FormDataEntryValue;
	// } | null;
};

function submitAction(prevState: ActionState, formData: FormData) {
	const userInput = Object.fromEntries(formData);
	const { data, success, error } = UserSchema.safeParse(userInput);

	if (!success) {
		return {
			error: z.prettifyError(error),
			data: null,
			// rawInput: userInput,
		};
	} else {
		// send to api
		return { error: null, data: data };
	}
}

export default function SignUpForm() {
	const [state, formAction, isPending] = useActionState(submitAction, {
		error: '',
		data: null,
	});
	console.log('state', state);
	console.log('isPending', isPending);
	return (
		<>
			{isPending && <p>Loading....</p>}
			<p>{state.error}</p>
			<form action={formAction}>
				<label htmlFor='firstName'>Firstname:</label>
				<input type='text' name='firstName' id='firstName' />

				<label htmlFor='lastName'>Lastname:</label>
				<input type='text' name='lastName' id='lastName' />

				<label htmlFor='Email'>Email:</label>
				<input type='email' name='email' id='email' />

				<label htmlFor='Password'>Password</label>
				<input type='password' name='password' id='password' />

				<button>Sign Up</button>
			</form>
		</>
	);
}
