export default function App() {
  return (
    <main className='min-h-screen bg-gray-900 p-8 font-sans text-slate-200'>
      <div className='max-w-xl mx-auto bg-gray-950 p-6 rounded-lg shadow space-y-6'>
        <h2 className='text-2xl font-bold text-center text-gray-200'>Contact Us</h2>

        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-200' htmlFor='name'>
              Name
            </label>
            <input
              name='name'
              id='name'
              className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
              placeholder='Leia Organa'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700' htmlFor='email'>
              Email
            </label>
            <input
              name='email'
              id='email'
              className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
              placeholder='leia@rebellion.org'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700' htmlFor='message'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              rows={4}
              className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
              placeholder='Tell us how we can help...'
            />
          </div>
          <button type='submit' className='w-full py-2 rounded text-white bg-blue-600 hover:bg-blue-700'>
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
