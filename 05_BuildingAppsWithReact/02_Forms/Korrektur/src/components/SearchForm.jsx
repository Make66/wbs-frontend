const SearchForm = ({ searchAction, queries, isPending }) => {
  return (
    <form action={searchAction} className='w-full max-w-4xl'>
      <fieldset className='bg-base-200 border border-base-300 rounded-box p-4'>
        <legend className='fieldset-legend mb-2'>Search Products</legend>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-end'>
          <div className='flex flex-col'>
            <label className='label text-sm font-medium'>Category</label>
            <input
              className='input input-bordered w-full'
              name='category'
              placeholder='Category'
              defaultValue={queries?.category}
            />
          </div>
          <div className='flex flex-col'>
            <label className='label text-sm font-medium'>Min Price</label>
            <input
              type='number'
              className='input input-bordered w-full'
              name='minPrice'
              placeholder='Min'
              defaultValue={queries?.minPrice}
            />
          </div>
          <div className='flex flex-col'>
            <label className='label text-sm font-medium'>Max Price</label>
            <input
              type='number'
              className='input input-bordered w-full'
              name='maxPrice'
              placeholder='Max'
              defaultValue={queries?.maxPrice}
            />
          </div>
          <div className='flex flex-col'>
            <label className='label text-sm font-medium'>Description</label>
            <input
              className='input input-bordered w-full'
              name='query'
              placeholder='Search keyword'
              defaultValue={queries?.query}
            />
          </div>
          <div className='flex justify-end md:items-end'>
            <button
              disabled={isPending}
              type='submit'
              className='btn btn-neutral w-full md:w-auto mt-1 md:mt-0 disabled:bg-slate-800'
            >
              Search
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default SearchForm;
