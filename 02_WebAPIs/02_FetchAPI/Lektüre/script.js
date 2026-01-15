/**
 * FETCH API BEISPIELE
 *
 * Die Fetch API ist eine moderne Art, Netzwerkanfragen in JavaScript zu stellen.
 * Sie ermöglicht es, Daten von Servern abzurufen (wie RESTful APIs) oder Daten an diese zu senden.
 * Stell sie dir wie einen Boten vor, der zu einer Website geht, Informationen holt
 * und sie in deinen Code zurückbringt – und das alles, ohne die Seite neu zu laden!
 */

// BEISPIEL 1: .then Promise-Chain-Methode (Versprechens-Kette)
// Dies ist die traditionelle Art, Promises mit .then()-Ketten zu handhaben.

const fetchFunction = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1") // Gibt ein Promise zurück, das zu einem Response-Objekt aufgelöst wird
    .then((response) => {
      // Das erste .then() verarbeitet das Response-Objekt
      if (!response.ok) {
        // Überprüfe immer, ob die Antwort OK ist (Status 200-299)
        throw new Error(`Etwas ist schiefgelaufen. Status: ${response.status}`);
      } else {
        return response.json(); // JSON-Antwort parsen - dies gibt ein weiteres Promise zurück!
      }
    })
    .then((data) => console.log(data)) // Das zweite .then() verarbeitet die geparsten JSON-Daten
    .catch((error) => console.error(error)); // Fangt alle Fehler in der Promise-Kette ab
};

fetchFunction();

// BEISPIEL 2: Async/Await-Methode
// Dies ist eine modernere und sauberere Syntax für den Umgang mit Promises.
// Sie lässt asynchronen Code eher wie synchronen Code aussehen.

const fetchFunctionAsyncAwait = async () => {
  // try/catch wird zur Fehlerbehandlung bei async/await verwendet
  try {
    // await pausiert die Ausführung, bis das Promise aufgelöst ist
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw new Error(`Etwas ist schiefgelaufen. Status: ${response.status}`);
    }

    // Erneut await verwenden, um die JSON-Antwort zu parsen
    const data = await response.json();

    // WICHTIG: async/await ist nur "Syntactic Sugar" (eine schönere/alternative Schreibweise zu .then/.catch)
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchFunctionAsyncAwait();

// BEISPIEL 3: Praktische Anwendung - Verwendung abgerufener Daten mit DOM-Manipulation
// Diesmal mit der ES5-Funktionssyntax anstelle einer Arrow-Funktion

async function fetchAndDisplayPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();

    const postDiv = document.createElement("div");

    postDiv.style.padding = "10px";
    postDiv.style.border = "1px solid #ccc";

    postDiv.innerHTML = `
          <h2>${data.title}</h2>
          <p>${data.body}</p>
        `;

    document.body.appendChild(postDiv);
  } catch (error) {
    console.error(error);
  }
}

fetchAndDisplayPost();

// BEISPIEL 4: POST-Anfrage - Daten senden / Eine neue Ressource erstellen

// const createPostAsync = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title: "Neuer Post Titel",
//         body: "Dies ist der Inhalt des neuen Posts.",
//         userId: 1,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP-Fehler! Status: ${response.status}`);
//     }

//     const newData = await response.json();
//     console.log("Post-Daten erstellt:", newData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// createPostAsync();

// BEISPIEL 5: PUT-Anfrage - Zielressource ersetzen / Eine Ressource aktualisieren

// const updatePostAsync = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1",
//       {
//         method: "PUT",
//         body: JSON.stringify({
//           id: 1,
//           title: "Geänderter Post",
//           body: "Inhalt wurde aktualisiert",
//           userId: 1,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP-Fehler! Status: ${response.status}`);
//     }

//     const updatedData = await response.json();
//     console.log("Aktualisierte Daten:", updatedData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// updatePostAsync();

// BEISPIEL 6: DELETE-Anfrage - Die Zielressource löschen

// const deletePostAsync = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1",
//       {
//         method: "DELETE",
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP-Fehler! Status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log("Lösch-Ergebnis:", result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// deletePostAsync();

/**
 * WICHTIGE HINWEISE ZUR FETCH API:
 *
 * 1. fetch() gibt ein Promise zurück, das zu einem Response-Objekt aufgelöst wird.
 * 2. Die Response enthält NICHT direkt die nutzbaren Daten (body => ReadableStream), wir müssen .json() aufrufen, um sie zu extrahieren.
 * 3. .json() gibt ebenfalls ein Promise zurück, das zu den geparsten JSON-Daten aufgelöst wird.
 * 4. Überprüfe immer response.ok, bevor du fortfährst (ist true, wenn der Status 200-299 ist).
 * 5. fetch() wird bei HTTP-Fehlerstatus (wie 404 oder 500) NICHT abgelehnt (reject) – du musst response.ok prüfen.
 * 6. fetch() wird nur bei Netzwerkfehlern abgelehnt oder wenn die Anfrage nicht gesendet werden konnte.
 * 7. Die GET-Anfrage ist die Standardmethode – hierfür ist keine Angabe im Request-Objekt nötig.
 * 8. Für POST- und PUT-Anfragen musst du Methode, Header und Body angeben.
 * 9. Für DELETE-Anfragen musst du die Methode angeben.
 */
