/*==========================================================
 * ABSCHNITT 1: ZUGRIFF AUF DAS DOCUMENT-OBJEKT
 *==========================================================*/

// Das Document-Objekt ermöglicht den Zugriff auf die gesamte HTML-Dokumentstruktur

console.log(document);
console.log(document.body);
console.log(document.firstChild);

/*==========================================================================
 * ABSCHNITT 2: ELEMENTE AUSWÄHLEN
 *==========================================================================*/

// 2.1 Verwendung von querySelector (gibt das erste passende Element zurück)
console.dir(document.querySelector("body"));
console.dir(document.querySelector("#outer-container"));
console.dir(document.querySelector(".bodyClass"));

// 2.2 Verwendung von getElementsByClassName (gibt eine HTMLCollection aller passenden Elemente zurück)
console.log(document.getElementsByClassName("bodyClass"));

// HTMLCollection:

// - Eine "Live"-Sammlung von HTML-Elementen
// - Aktualisiert sich automatisch, wenn sich das DOM ändert
// - Enthält nur HTML-Elemente
// - Zugriff über Methoden wie getElementsByClassName() oder getElementsByTagName()
// - Besitzt eine length-Eigenschaft
// - Zugriff nur über Index oder Namen möglich
// - forEach() kann nicht direkt verwendet werden

// 2.3 Verwendung von getElementById (bevorzugt für ID-Auswahl – schneller und spezifischer)
console.log(document.getElementById("click-button"));

// 2.4 Verwendung von querySelectorAll (gibt eine NodeList aller passenden Elemente zurück)
const allDivs = document.querySelectorAll("div");
console.log(allDivs);

// NodeList:

// - Statische NodeLists (von querySelectorAll()) aktualisieren sich nicht automatisch bei DOM-Änderungen
// - Enthält alle Arten von Knoten (Elemente, Textknoten, Kommentare)
// - Erstellt durch Methoden wie querySelectorAll()
// - Besitzt eine length-Eigenschaft
// - Die forEach()-Methode kann verwendet werden

/*==========================================================================
 * ABSCHNITT 3: ELEMENTE IN VARIABLEN SPEICHERN
 *==========================================================================*/

// Bewährte Methode (Best Practice): Speichere Elemente, die du mehrfach verwendest, in Variablen

const clickButton = document.getElementById("click-button");
const mainParagraph = document.getElementById("main-paragraph");
const outerContainer = document.getElementById("outer-container");
const innerContainer = document.getElementById("inner-container");

/*==========================================================================
 * ABSCHNITT 4: ZUGRIFF AUF ELEMENT-INHALTE
 *==========================================================================*/

const h1 = document.getElementById("main-heading");

console.log(h1);
console.log(h1.innerText); // Nur sichtbarer Textinhalt (berücksichtigt CSS-Styling)
console.log(h1.textContent); // Gesamter Textinhalt ungeachtet der Sichtbarkeit
console.log(h1.innerHTML); // HTML-Inhalt inklusive Tags (Sicherheitsrisiko bei Benutzereingaben!)

/*==========================================================================
 * ABSCHNITT 5: ELEMENTE MODIFIZIEREN
 *==========================================================================*/

// 5.1 Textinhalt ändern
h1.innerText = "DOM Manipulation macht Spaß!";

// 5.2 Tailwind-Klassen modifizieren
h1.className = "text-4xl font-bold text-blue-600 mb-4 text-center";

// 5.3 Alternative Methode zur Modifizierung von Klassen mittels classList
h1.classList.remove("text-blue-600");
h1.classList.add("text-green-600");
h1.classList.add("underline");

// 5.4 Stile mit reinem (Vanilla) CSS ändern
// Direkte Modifikation von Inline-Styles über die .style-Eigenschaft
h1.style.color = "white";
h1.style.backgroundColor = "green";
h1.style.fontSize = "20px";

// 5.5 Einfaches Beispiel für einen Button-Klick
clickButton.addEventListener("click", () => {
  clickButton.innerText = "Geklickt!";

  clickButton.classList.add("bg-green-500");

  h1.innerText = "Button wurde geklickt!";

  // Beispiel für toggle()
  // .toggle() prüft: Ist die Klasse da?
  // Ja -> Entfernen. Nein -> Hinzufügen.
  mainParagraph.classList.toggle("text-white");

  alert("Hallo!");
});

/*==========================================================================
 * ABSCHNITT 6: ELEMENTE ERSTELLEN UND ANHÄNGEN
 *==========================================================================*/

// Ein neues Absatzelement (p) erstellen
const newParagraph = document.createElement("p");

// Inhalt und Attribute hinzufügen
newParagraph.textContent = "Dieser Absatz wurde dynamisch erstellt!";
newParagraph.className = "text-purple-500 mt-4 text-center";
newParagraph.id = "dynamic-paragraph";

// Dem DOM hinzufügen (anhängen)
outerContainer.appendChild(newParagraph);

// Alternative Positionierung
// outerContainer.insertBefore(newParagraph, innerContainer);
// outerContainer.prepend(newParagraph);

/*==========================================================================
 * ABSCHNITT 7: EVENT-HANDLING (EREIGNISVERARBEITUNG)
 *==========================================================================*/
// Mehrere Möglichkeiten, Event-Listener hinzuzufügen:

// Methode 1: addEventListener (bevorzugt – erlaubt mehrere Listener)
clickButton.addEventListener("mouseover", () => {
  clickButton.classList.add("scale-110");
});

clickButton.addEventListener("mouseout", () => {
  clickButton.classList.remove("scale-110");
});

// Methode 2: onclick-Eigenschaft (erlaubt nur einen Listener)
// clickButton.onclick = () => alert("Button geklickt!");

/*==========================================================================
 * ABSCHNITT 8: BONUS
 *==========================================================================*/

// Beispiel für NodeList vs HTMLCollection

// 1. Vorbereitung: Wir zählen, wie viele Divs aktuell da sind
const liveHTMLCollection = document.getElementsByTagName("div");
const staticNodeList = document.querySelectorAll("div");

console.log("VORHER:");
console.log("HTMLCollection Länge:", liveHTMLCollection.length);
console.log("NodeList Länge:", staticNodeList.length);

// 2. Wir fügen dynamisch ein neues Div zum Dokument hinzu
const newDiv = document.createElement("div");
newDiv.innerText = "Ich bin neu hier!";
outerContainer.appendChild(newDiv);

// 3. Jetzt prüfen wir die Werte erneut, OHNE die Variablen neu zuzuweisen
console.log("---");
console.log("NACHHER:");

// Die HTMLCollection hat bemerkt, dass ein Element hinzugefügt wurde!
console.log("HTMLCollection Länge:", liveHTMLCollection);

// Die NodeList zeigt immer noch den alten Wert vom Zeitpunkt der Erstellung.
console.log("NodeList Länge:", staticNodeList);
