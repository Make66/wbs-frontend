// // Ausgabe in der Browser-Konsole
// console.log('Hallo aus der script.js');

// // DOM-Manipulation: Textinhalt des h1-Elements ändern
// document.querySelector('h1').textContent = 'Manipuliert mit JavaScript!';

// // Strings: Einfache und doppelte Anführungszeichen
// console.log('Einfacher Text');
// console.log("Los geht's");

// // Template Literals (Backticks): Mehrzeilige Strings und Interpolation
// console.log(`Einfacher Text
//   über
//   mehrere
//   Zeilen

//   ${42 + 52}

//   `);

// // Variable mit let deklarieren (veränderbar)
// let myText = 'Einfacher Text';
// console.log(myText);

// // Wert der Variable ändern (re-assignment)
// myText = 'Veränderter Text';
// console.log(myText);

// // Typumwandlung: Zahl + String ergibt String
// let a = 1 + myText;
// console.log(a);

// // JavaScript ist dynamisch typisiert: Variable kann Typ wechseln
// myText = 123;
// console.log(myText);

// // String-Konkatenation mit +
// console.log('Hallo ' + 'Welt');

// /* Mehrzeiliger Kommentar
//    Variablen ohne let/const/(var) vermeiden
// nichtSoClevereVariable = 'Lieber nicht!';
// let veränderbareVariable = 42; */

// // const für unveränderliche Variablen (Best Practice)
// const unveränderlicheVariable = true;
// // unveränderlicheVariable = false; // Fehler: const kann nicht neu zugewiesen werden

// // Arithmetische Operatoren
// console.log(42 + 12); // Addition
// console.log(42 - 12); // Subtraktion
// console.log(42 * 12); // Multiplikation
// console.log(42 / 12); // Division
// console.log(Math.floor(7 / 2)); // Abrunden - Floor Division
// console.log(7 % 3); // Modulo (Rest der Division)

// const age = 8;
// const minimumAgeForDriversLicense = 18;
// // camelCase ist die JavaScript-Namenskonvention für Variablen

// // Vergleichsoperatoren (geben Boolean true/false zurück)
// console.log(age < minimumAgeForDriversLicense); // Kleiner als
// console.log(age > minimumAgeForDriversLicense); // Größer als
// console.log(age <= minimumAgeForDriversLicense); // Kleiner oder gleich
// console.log(age >= minimumAgeForDriversLicense); // Größer oder gleich

// // Gleichheit: == (mit Typumwandlung) vs === (strikt, ohne Typumwandlung)
// console.log('15' == 15); // true (String wird zu Zahl)
// console.log('15' === 15); // false (unterschiedliche Typen)

// // Ungleichheit: != vs !== (analog zu == vs ===)
// console.log('15' != 15); // false
// console.log('15' !== 15); // true

// // Logische Operatoren: && (UND), || (ODER)
// console.log(age === minimumAgeForDriversLicense && 20 === 20); // Beide müssen wahr sein
// console.log(age === minimumAgeForDriversLicense || 20 === 20); // Mindestens eine muss wahr sein

// // Logical Shortcircuiting: Rechte Seite wird nur bei Bedarf ausgewertet
// 20 === 20 && console.log('Aktion wird ausgeführt'); // Wird ausgeführt (linke Seite true)
// 20 !== 20 || console.log('Aktion wird ausgeführt'); // Wird ausgeführt (linke Seite false)

// // Variable für Scope-Demonstration
// let insider = 'Global';

// // if-else-Kontrollstruktur für bedingte Ausführung
// if (age > minimumAgeForDriversLicense) {
//   console.log('Du könntest einen Führerschein machen');
// } else if (age === minimumAgeForDriversLicense) {
//   console.log(age);
//   console.log('Typisch');
//   // var insider = 'Ich lebe in dem else-if-Block';
//   let insider = 'Im Block'; // let hat block scope (modern)
//   console.log(insider); // Zeigt 'Im Block'
// } else {
//   console.log(insider); // Zeigt 'Global' (äußere Variable)
//   console.log('Du musst noch warten');
// }

// // Außerhalb des Blocks: globale Variable wird ausgegeben
// console.log(insider); // Zeigt 'Global'
let day = 'Donnerstag';

// Alternative zu vielen if-else-if Bedingungen:
// if (day === 'Montag') {
//   console.log('Wochenende vorbei');
// } else if (day === 'Dienstag') {
// }
// ...

// switch-Statement: Vergleicht einen Wert mit mehreren cases
switch (day) {
  case 'Montag':
    console.log('Wochenende vorbei');
    break; // Beendet den switch, sonst "fall-through"
  case 'Dienstag':
    console.log('Dienst am Dienstag');
    break;
  case 'Mittwoch':
  case 'Donnerstag': // Fall-through: Beide cases führen denselben Code aus
    console.log('Einfache Arbeitstage');
}

let temperature = -3;

// switch mit true: Ermöglicht Bedingungen statt fester Werte
switch (true) {
  case temperature < 0:
    console.log('Brr');
    break;
  case temperature < 5:
    console.log('Zieh eine Jacke an');
}

// Funktionsaufrufe vor der Deklaration möglich (siehe Hoisting unten)
greet('Fawzi');
greet('Dominik');
greet('Davide');
greet('Thomas');

// Hoisting: function-Deklarationen werden nach oben "gehisst"
function greet(name) {
  console.log('Hallo ' + name);
}

// Arrow Function (Pfeilfunktion): Moderne, kompakte Syntax
// Bei Einzeilern knnen Klammern {} und return weggelassen werden
const greetArr = () => console.log('Hallo Welt aus der Arrow Funktion!');

greetArr();

// Funktion mit Rückgabewert und Fehlerbehandlung
function safeDivide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero'); // Wirft einen Fehler
  }
  let res = a / b;
  return res; // Gibt das Ergebnis zurück
}

// try-catch: Fehler abfangen ohne Programmabsturz
try {
  const result = safeDivide(10, 0); // Versuche diesen Code
  console.log(result);
} catch (error) {
  console.log('Dividiere nicht durch null'); // Wird bei Fehler ausgeführt
}

try {
  console.log(gibtEsNicht); // Undefinierte Variable
} catch {
  console.log('Fehler ist aufgetreten');
}

// while-Schleife: Wiederholt Code, solange Bedingung wahr ist
let counter = 0;
while (counter < 10) {
  console.log('Eine neuer Runde: ', counter);
  // counter = counter + 1; // Langform
  // counter += 1; // Kurzform
  counter++; // Inkrement-Operator (kürzeste Form)
}

// do-while: Führt Codeblock mindestens einmal aus
// do {
//   console.log('Eine neuer Runde: ', counter);
//   // counter = counter + 1;
//   counter += 1;
// } while (counter < 10);

// for-Schleife: Kompakte Schleife mit Zähler
for (let i = 10; i > 0; i--) {
  // i-- dekrementiert (verringert um 1)
  if (i === 8) {
    continue; // Überspringt den Rest dieser Iteration
  }

  console.log(`Gruß aus der FOR-Schleife: ${i}`);

  if (i === 5) {
    break; // Beendet die Schleife komplett
  }
}

// for-Schleife mit Fehlerbehandlung
for (let i = -5; i < 5; i++) {
  try {
    const res = safeDivide(10, i);
    console.log(res);
  } catch {
    alert('Dividiere nicht durch 0!'); // Zeigt Browser-Alert, Seite friert ein
    console.log('Ein Fehler ist aufgetreten');
    continue; // Macht mit nächster Iteration weiter
  }
}

// Array (Liste von Werten)
const numbers = [1, 2, 3, 4, 5];

// for...of: Iteriert über Werte eines Arrays
for (const num of numbers) {
  console.log(num); // Gibt jeden Wert aus
}
