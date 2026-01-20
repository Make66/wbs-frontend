let counter = 1;

const fetchInterval = setInterval(() => {
  fetchPokemon(counter);

  counter = counter + 1;

  if (counter > 3) {
    clearInterval(fetchInterval);
  }
}, 1000);

const fetchPokemon = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
      throw new Error("Error");
    }

    const data = await response.json();

    console.log({ name: data.name, id: data.id });
  } catch (error) {
    console.error("Error");
    clearInterval(intervalId);
  }
};

// ----------------------------------------------------------
// ------------------- Alternative Lösung -------------------
// ----------------------------------------------------------

// let counter = 1;

// const intervalId = setInterval(async () => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     const pokemon = {
//       id: data.id,
//       name: data.name,
//     };

//     console.log(pokemon);
//   } catch (error) {
//     console.error("Error fetching Pokemon data:", error);
//     clearInterval(intervalId);
//   }

//   counter++;

//   // Step 7: Stop the interval after 10 requests
//   if (counter > 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);
