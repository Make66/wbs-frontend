import { useActionState } from 'react';
import { validate, sleep } from './utils/index.js';

// action Funktion anstelle des Submit Handlers
// Hat in Verbindung mit useActionState-Hook Zugriff auf
// vorherigen State und die Formulardaten
const submitAction = async (_prevState, formData) => {
  // const name = formData.get('name');

  const data = Object.fromEntries(formData);

  const validationErrors = validate(data);
  await sleep(); // Simuliert nur die Zeit, die z.B. ein Netzwerkrequest braucht
  if (Object.keys(validationErrors).length === 0) {
    // hier würde Netzwerkrequest stattfinden
    console.log('Submitted:', data);
    // Rückgabe kommt in state
    return {};
  }

  // Bei Fehlern können wir den state nutzen, um
  // die ursprüngliche Nutzereingabe zu erhalten
  // und Fehlermeldungen anzuzeigen.
  return {
    errors: validationErrors,
    data,
  };

  //
};

export default function App() {
  // Hook verbinded Action-Funktion und Komponenten-State
  const [state, formAction, isPending] = useActionState(submitAction, {});

  return (
    <main className='min-h-screen bg-gray-900 p-8 font-sans text-slate-200'>
      <div className='max-w-xl mx-auto bg-gray-950 p-6 rounded-lg shadow space-y-6'>
        <h2 className='text-2xl font-bold text-center text-gray-200'>Contact Us</h2>
        {/* Vom Hook vermittelte formAction */}
        <form action={formAction} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-200' htmlFor='name'>
              Name
            </label>
            <input
              name='name'
              id='name'
              // evt. State-Daten als überschreibarer defaultValue
              defaultValue={state.data?.name}
              className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
              placeholder='Leia Organa'
            />
            {state.errors?.name && <p className='text-sm text-red-600 mt-1'>{state.errors.name}</p>}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700' htmlFor='email'>
              Email
            </label>
            <input
              name='email'
              id='email'
              defaultValue={state.data?.email}
              className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
              placeholder='leia@rebellion.org'
            />
            {/* Anzeige etwaiger Fehlermeldungen aus State */}
            {state.errors?.email && <p className='text-sm text-red-600 mt-1'>{state.errors.email}</p>}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700' htmlFor='message'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              rows={4}
              defaultValue={state.data?.message}
              className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
              placeholder='Tell us how we can help...'
            />
            {state.errors?.message && <p className='text-sm text-red-600 mt-1'>{state.errors.message}</p>}
          </div>
          <button
            // Button kann über isPending abgeschaltet werden
            disabled={isPending}
            type='submit'
            className='w-full py-2 rounded text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-500'
          >
            {isPending ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </main>
  );
}
