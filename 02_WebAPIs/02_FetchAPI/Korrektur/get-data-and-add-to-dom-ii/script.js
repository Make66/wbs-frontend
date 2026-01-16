// const pokemonContainer = document.getElementById("pokemon-container");

// const fetchPokemon = async (id) => {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

//     if (!response.ok) {
//       throw new Error(`Something went wrong. Status: ${response.status}`);
//     }

//     const pokemon = await response.json();
//     // console.log(pokemon);
//     return pokemon;
//   } catch (error) {
//     console.error(error);

//     return null;
//   }
// };

// const displayPokemons = async () => {
//   for (let i = 1; i <= 150; i++) {
//     const pokemon = await fetchPokemon(i);

//     if (!pokemon) {
//       console.error(
//         `Schleife gestoppt aufgrund Fehler während des Fetch-Vorgangs!`
//       );
//       break;
//     }

//     const pokemonCard = document.createElement("div");
//     pokemonCard.classList.add(
//       "bg-white",
//       "rounded-lg",
//       "shadow-md",
//       "p-4",
//       "flex",
//       "flex-col",
//       "items-center",
//       "text-center"
//     );

//     const pokemonImage = document.createElement("img");
//     pokemonImage.src = pokemon.sprites.front_default;
//     pokemonImage.alt = pokemon.name;
//     pokemonImage.classList.add("mb-4");

//     const pokemonName = document.createElement("h2");
//     pokemonName.textContent =
//       pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
//     pokemonName.classList.add("text-xl", "font-bold", "mb-2");

//     const pokemonType = document.createElement("p");
//     pokemonType.textContent = `Type: ${pokemon.types
//       .map((typeInfo) => typeInfo.type.name)
//       .join(", ")}`;
//     pokemonType.classList.add("text-gray-600");

//     pokemonCard.appendChild(pokemonImage);
//     pokemonCard.appendChild(pokemonName);
//     pokemonCard.appendChild(pokemonType);

//     pokemonContainer.appendChild(pokemonCard);
//   }
// };

// displayPokemons();

// ======================================================
// ALTERNATIVER ANSATZ: Promise.all für paralleles Laden
// ======================================================

const pokemonContainer = document.getElementById("pokemon-container");

// Asynchrone Funktion, um die Daten eines einzelnen Pokémon von der API abzurufen.
const fetchPokemon = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    console.log(pokemon);
    return pokemon;
  } catch (error) {
    console.error(`Error fetching Pokémon with ID ${id}:`, error);
  }
};

// Erstellt die HTML-Struktur (DOM-Elemente) für eine Pokémon-Karte.
const createPokemonCard = (pokemon) => {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add(
    "bg-white",
    "rounded-lg",
    "shadow-md",
    "p-4",
    "flex",
    "flex-col",
    "items-center",
    "text-center"
  );

  const pokemonImage = document.createElement("img");
  pokemonImage.src = pokemon.sprites.front_default;
  pokemonImage.alt = pokemon.name;
  pokemonImage.classList.add("mb-4");

  const pokemonName = document.createElement("h2");
  pokemonName.textContent =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  pokemonName.classList.add("text-xl", "font-bold", "mb-2");

  const pokemonInfo = document.createElement("p");
  pokemonInfo.textContent = `Type: ${pokemon.types
    .map((typeInfo) => typeInfo.type.name)
    .join(", ")}`;
  pokemonInfo.classList.add("text-gray-600");

  pokemonCard.appendChild(pokemonImage);
  pokemonCard.appendChild(pokemonName);
  pokemonCard.appendChild(pokemonInfo);

  return pokemonCard;
};

// Hauptfunktion, die 150 Pokémon parallel lädt und dann gebündelt anzeigt.
const displayPokemonsParallel = async () => {
  // Array zur Speicherung der Promises
  const pokemonPromises = [];

  // Schleife startet alle 150 Anfragen fast gleichzeitig
  for (let i = 1; i <= 150; i++) {
    // Wir pushen die Promises in das Array
    pokemonPromises.push(fetchPokemon(i));
  }

  try {
    // Promise.all wartet, bis ALLE Anfragen im Array erfolgreich abgeschlossen sind.
    // Das ist viel schneller als die sequenzielle Methode (await in der Schleife).
    const pokemons = await Promise.all(pokemonPromises);

    // Sobald alle Daten da sind, gehen wir das Ergebnis-Array durch
    pokemons.forEach((pokemon) => {
      if (pokemon) {
        // Karte erstellen und in den Container im HTML einfügen
        const card = createPokemonCard(pokemon);
        pokemonContainer.appendChild(card);
      }
    });
  } catch (error) {
    // Fehlerbehandlung, falls die gesamte Gruppe von Anfragen scheitert
    console.error("Error fetching Pokémon:", error);
  }
};

// Ausführung der parallelen Ladefunktion
displayPokemonsParallel();
