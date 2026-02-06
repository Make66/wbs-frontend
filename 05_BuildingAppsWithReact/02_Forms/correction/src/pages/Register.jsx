import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback, Instructions } from '../components';
import { registerNewsletter } from '../api/index.js';
import { toast } from 'react-toastify';
import { useActionState } from 'react';

// async function action(formData) {
//   const email = formData.get('email');
//   const result = await registerNewsletter(email);
//   console.log(result);
//   toast.success(result);
// }

async function action(_prev, formData) {
  const email = formData.get('email');
  try {
    const result = await registerNewsletter(email);
    return {
      result,
      email,
    };
  } catch (error) {
    return {
      error,
      email,
    };
  }
}

const Register = () => {
  const [state, formAction, isPending] = useActionState(action, {});

  return (
    <div className='flex flex-col items-center'>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* <form action={action}> */}
        <form action={formAction}>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4'>
            <legend className='fieldset-legend'>Register to our newsletter</legend>
            <label className='label' htmlFor='email'>
              Email
            </label>
            <input className='input w-full' name='email' id='email' defaultValue={state.data} placeholder='Email' />
            {state.result && <p>{state.result}</p>}
            {state.error && <p>{state.error.message}</p>}
            <button className='btn btn-neutral mt-4' type='submit'>
              Register!
            </button>
            <button className='btn btn-neutral mt-4' type='button'>
              BTN!
            </button>
          </fieldset>
        </form>
      </ErrorBoundary>
      <Instructions path='/register.md' />
    </div>
  );
};

export default Register;
