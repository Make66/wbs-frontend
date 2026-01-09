// =============================================
// 1. HÖHERWERTIGE FUNKTIONEN (HIGHER ORDER FUNCTIONS)
// =============================================
// Höherwertige Funktionen können eine oder mehrere Funktionen als Argumente entgegennehmen.

const sayWelcome = () => "Welcome, ";
const sayGoodbye = () => "Goodbye, ";

const personalMessage = (message, name) => message() + name;

// console.log(personalMessage(sayWelcome, "John"));
// console.log(personalMessage(sayGoodbye, "John"));

// Wir übergeben unsere Nachrichten-Funktionen als Argumente an die Funktion personalMessage().

// =============================================
// 2. HÖHERWERTIGE FUNKTIONEN ALS FUNKTIONS-FABRIKEN
// =============================================
// Höherwertige Funktionen können eine andere Funktion im Return-Statement zurückgeben.

// const sayHello = (name) => {
//   return () => {
//     console.log(`Hello, ${name}!`);
//   };
// };

const sayHello = (name) => () => console.log(`Hello, ${name}!`);

const helloJohn = sayHello("John");
const helloJane = sayHello("Jane");

// helloJohn();
// helloJane();

// Eine Funktion, die:
// - eine andere Funktion als Argument entgegennimmt ODER
// - eine Funktion zurückgibt
// wird als "Higher Order Function" (Höherwertige Funktion) bezeichnet.

// Deshalb sind Array-Methoden wie map, sort, filter usw. allesamt höherwertige Funktionen.
// Es sind vorgefertigte Funktionen, die mindestens eines der beiden Merkmale einer höherwertigen Funktion erfüllen.

// =============================================
// 3. GÄNGIGE HÖHERWERTIGE FUNKTIONEN/METHODEN
// =============================================

// 1. forEach - Führt eine bereitgestellte Funktion einmal für jedes Array-Element aus
console.log("\nforEach Beispiel:");

const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) =>
  console.log(`${index}: ${fruit.toUpperCase()}`)
);

// 2. map - Erstellt ein neues Array mit den Ergebnissen des Aufrufs einer Funktion für jedes Array-Element
console.log("\nmap Beispiel:");

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);
// console.log(numbers);

// 3. find - Gibt das erste Element im Array zurück, das die gegebene Bedingung erfüllt
console.log("\nfind Beispiel:");

const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 35 },
  { name: "Jimmy", age: 30 },
];

const person30YearsOld = people.find((person) => person.age === 30);
console.log(person30YearsOld);

// 4. filter - Erstellt ein neues Array mit allen Elementen, welche die gegebene Bedingnung innerhalb der Callback Funktion bestehen
console.log("\nfilter Beispiel:");

const words = ["random", "words", "balcony", "dog", "bootcamp"];

const longWords = words.filter((word) => word.length === 6);
console.log(longWords);

// 5. reduce - Führt eine "Reducer"-Funktion für jedes Element des Arrays aus, was zu einem einzigen Ausgabewert führt
console.log("\nreduce Beispiel:");

const numbers2 = [2505, 41, 23675, 234, 12];

const sum = numbers2.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);

// 6. some - Prüft, ob mindestens ein Element im Array den Test der bereitgestellten Funktion besteht
console.log("\nsome Beispiel:");

const words2 = ["random", "words", "balcony", "dog", "bootcamp"];

const hasLongWords = words2.some((word) => word.length > 6);

console.log(hasLongWords);

// 7. every - Prüft, ob alle Elemente im Array den Test der bereitgestellten Funktion bestehen
console.log("\nevery Beispiel:");

const words3 = ["random", "words", "balcony", "dog", "bootcamp"];

const allLongWords = words3.every((word) => word.length > 4);

console.log(allLongWords);

// =============================================
// 4. BEISPIEL FÜR EINE EIGENE FILTER-FUNKTION
// =============================================

// Vorbereitetes Array mit Zahlen
const numbers3 = [1, 2, 3, 4, 5];

// Beispiel einer eigenen Filter-Funktion, die dasselbe tut wie die .filter() Array-Methode:
const filterNumbers = (array, testFn) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (testFn(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

const isEven = (number) => number % 2 === 0;

// Nutze die eigene Filter-Funktion auf dem vorbereiteten Array:
console.log("\nEigener Filter + filter Array-Methode Beispiel:");
console.log(filterNumbers(numbers3, isEven));

// Zum Vergleich: Nutzung der eingebauten Array-Methode .filter(), um gerade Zahlen zu filtern:
const evenNumbers = numbers3.filter((number) => number % 2 === 0);

// Diese Funktion gibt "true" für gerade Zahlen zurück (Zahlen, die durch 2 teilbar sind),
// was bedeutet, dass nur gerade Zahlen in das neue Array aufgenommen werden.

// Ergebnis: Das Array "evenNumbers" enthält nur die geraden Zahlen aus dem ursprünglichen Array.
// Es erzielt das gleiche Ergebnis wie die benutzerdefinierte Funktion.

console.log(evenNumbers);
// Erwartete Ausgabe: [ 2, 4 ]

// =============================================
// 5. CALLBACK-FUNKTIONEN
// =============================================
// Eine Callback-Funktion ist eine Funktion, die einer anderen Funktion als Argument übergeben wird.
// Diese wird dann innerhalb der äußeren Funktion aufgerufen, um eine Routine oder Aktion abzuschließen. - MDN

// Im obigen Beispiel: Die Funktion (number => number % 2 === 0) wird als Argument an .filter() übergeben.
