import { Instructions, SearchForm, SearchResults } from '../components';
import { searchProducts } from '../api/index.js';
import { use, useActionState } from 'react';

// Hier wird die ursprüngliche Suchanfrage geschickt - gib mir alle Produkte
const productsPromise = searchProducts();

// Diese Action nimmt die Formulardaten entgegen und reicht sie an searchProducts weiter
async function searchAction(_prev, formData) {
  const { category, query } = Object.fromEntries(formData);

  // Weil searchProducts die Preise nicht richtig verarbeitet, müssen wir das kurz hier tun
  const minPrice = formData.get('minPrice') ? Number(formData.get('minPrice')) : undefined;
  const maxPrice = formData.get('maxPrice') ? Number(formData.get('maxPrice')) : undefined;

  const queries = { category, query, minPrice, maxPrice };
  const result = await searchProducts(queries);

  // Rückgabe an den state: enthält die Suchergebnisse und Suchparameter
  return { result, queries };
}

const Search = () => {
  // useActionState packt die searchAction in eine formAction
  // Die UI kann reaktiv neu gerendert werden, wenn sich der State durch die action verändert
  // unser initialState ist hier etwas komplexer
  const [state, formAction, isPending] = useActionState(searchAction, {
    result: use(productsPromise), // löst die anfängliche Suchanfrage (alle Produkte) auf
    queries: {}, // Platzhalter für die Suchparameter
  });
  return (
    <div className='flex flex-col items-center'>
      <SearchForm searchAction={formAction} queries={state.queries} isPending={isPending} />
      {/* <SearchResults productsPromise={productsPromise} /> */}
      <SearchResults products={state.result.products} />
      <Instructions path='/search.md' />
    </div>
  );
};

export default Search;
