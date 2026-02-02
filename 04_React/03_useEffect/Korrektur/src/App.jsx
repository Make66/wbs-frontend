import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState("https://swapi.tech/api/people");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url, { signal: abortController.signal });

        if (!res.ok) throw new Error("Daten konnten nicht gefetcht werden!");

        const data = await res.json();
        // console.log(data);

        setCharacters(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
          console.log(error);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchCharacters();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return (
    <main className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Star Wars Characters
        </h1>
        <div className="flex justify-center gap-4 pt-6">
          <button
            onClick={() => setUrl(prevUrl)}
            disabled={!prevUrl || loading}
            className={`px-4 py-2 rounded ${
              prevUrl && !loading
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => setUrl(nextUrl)}
            disabled={!nextUrl || loading}
            className={`px-4 py-2 rounded ${
              nextUrl && !loading
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>

        {loading && (
          <p className="text-center text-gray-600 font-medium">Loading...</p>
        )}

        {error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}

        {!loading && !error && (
          <ul className="grid sm:grid-cols-2 gap-4">
            {characters.map((character) => (
              <li
                key={character.uid}
                className="bg-white p-4 rounded shadow text-center capitalize font-semibold text-gray-800"
              >
                {character.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default App;
