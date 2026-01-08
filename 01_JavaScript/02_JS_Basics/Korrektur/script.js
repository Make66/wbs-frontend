// ==========================================
// ABSCHNITT 1: VARIABLEN
// ==========================================
/* In JavaScript nutzen wir Variablen, um Daten/Werte zu speichern, um diese später verwenden zu können.
  Es gibt drei Wege, Variablen zu deklarieren:
  - let: für Werte, die sich ändern können
  - const: für Werte, die sich nicht ändern (Konstanten)
  - var: die ältere Methode (sollte vermieden werden)
*/
console.log("--- Variablen ---");

// 1. Variablen mit let und const deklarieren:
let age = 25;
const birthYear = 1999;
let name = "John Doe";
const isStudent = true;

// 2. Werte neu zuweisen:
// Wir können 'let'-Variablen ändern, aber keine 'const'-Variablen
age = 26;
name = "Jane Doe";
// birthYear = 2000;       // Dies führt zu einem Fehler - const kann nicht geändert werden!
// isStudent = false;     // Dies führt zu einem Fehler - const kann nicht geändert werden!

// 3. Variablen ausgeben, um ihre Werte zu sehen
console.log("Alter:", age); // Zeigt 26
console.log("Geburtsjahr:", birthYear); // Zeigt 1999
console.log("Name:", name); // Zeigt "Jane Doe"
console.log("Studentenstatus:", isStudent); // Zeigt true

// 4. Variablen erstellen und modifizieren
let favoriteColor = "blue";
console.log("Lieblingsfarbe:", favoriteColor); // Zeigt "blue"
favoriteColor = "green"; // Wir können sie ändern, da sie mit 'let' deklariert wurde
console.log("Geänderte Lieblingsfarbe:", favoriteColor); // Zeigt nun "green"

// ==========================================
// ABSCHNITT 2: ARITHMETIK (RECHNEN)
// ==========================================
/* JavaScript kann mathematische Operationen durchführen wie:
  +  (Addition)
  -  (Subtraktion)
  * (Multiplikation)
  /  (Division)
  %  (Modulo/Restwert)
  
  Vorsicht beim Mischen von Zahlen und Strings!
*/
console.log("\n --- Arithmetik ---");

// 1. Addition mit gemischten Typen
let num = 5;
let strNum = "3";

let additionResult = num + strNum;
console.log("Addition (5 + '3'):", additionResult); // Erwartet: "53", da String + Zahl = String-Verknüpfung (Concatenation)

// 2. Subtraktion mit gemischten Typen
let subtractionResult = num - strNum;
console.log("Subtraktion (5 - '3'):", subtractionResult); // Erwartet: 2, da JavaScript Strings bei Subtraktion in Zahlen umwandelt

// 3. Multiplikation mit einem String
let multiplicationResult = strNum * 2;
console.log("Multiplikation ('3' * 2):", multiplicationResult); // Erwartet: 6

// 4. Division durch einen String
let divisionResult = 10 / strNum;
console.log("Division (10 / '3'):", divisionResult); // Erwartet: 3.333...

// 5. Modulo-Operation (Restwert)
let num2 = 10;
let modulusResult = num2 % num;
console.log("Modulo Ergebnis mit Zahlen (10 % 5):", modulusResult); // Erwartet: 0
modulusResult = num2 % strNum;
console.log("Modulo Ergebnis mit String (10 % '3'):", modulusResult); // Erwartet: 1, da '3' in 3 umgewandelt wird

// 6. Numerische Operationen
let a = 8;
let b = 3;
let c = 10;

// Addition von Zahlen
let sum = a + b + c;
console.log("Addition von Zahlen (8 + 3 + 10):", sum); // Erwartet: 21

// Subtraktion von Zahlen
let difference = a - b - c;
console.log("Subtraktion von Zahlen (8 - 3 - 10):", difference); // Erwartet: -5

// Multiplikation von Zahlen
let product = a * b * c;
console.log("Multiplikation von Zahlen (8 * 3 * 10):", product); // Erwartet: 240

// Division von Zahlen
let quotient = c / a;
console.log("Division von Zahlen (8 / 3 / 10):", quotient); // Erwartet: 1.25

// Modulo von Zahlen
let remainder = c % a;
console.log("Modulo von Zahlen (10 % 8):", remainder); // Erwartet: 2

// ==========================================
// ABSCHNITT 3: VERGLEICHE
// ==========================================
/* Wir können Werte vergleichen mit:
  ==   (einfache Gleichheit - vergleicht nur den Wert)
  ===  (strikte Gleichheit - vergleicht Wert UND Typ)
  !=   (einfache Ungleichheit)
  !==  (strikte Ungleichheit)
  >    (größer als)
  <    (kleiner als)
  >=   (größer oder gleich)
  <=   (kleiner oder gleich)
*/
console.log("\n --- Vergleiche ---");

// Strikte vs. einfache Gleichheit und Ungleichheit
console.log('5 == "5": ', 5 == "5"); // Einfache Gleichheit, sollte true sein
console.log('5 === "5": ', 5 === "5"); // Strikte Gleichheit, sollte false sein

console.log('10 != "10": ', 10 != "10"); // Einfache Ungleichheit, sollte false sein
console.log('10 !== "10": ', 10 !== "10"); // Strikte Ungleichheit, sollte true sein

// Größer als, Kleiner als, Größer oder gleich, Kleiner oder gleich
console.log("5 > 3: ", 5 > 3); // True
console.log('"5" > "3": ', "5" > "3"); // True, String-Vergleich (alphabetisch)

console.log("10 < 20: ", 10 < 20); // True
console.log('"10" < "20": ', "10" < "20"); // True, String-Vergleich

console.log("5 >= 5: ", 5 >= 5); // True
console.log('"5" >= 5: ', "5" >= 5); // True, Typumwandlung (Coercion) von String zu Zahl

console.log("10 <= 20: ", 10 <= 20); // True
console.log('"10" <= "20": ', "10" <= "20"); // True, String-Vergleich

// Zusätzliche Vergleiche zur Veranschaulichung
console.log('true == "true": ', true == "true"); // False, unterschiedliche Typen und Werte
console.log("false === false: ", false === false); // True, gleicher Typ und Wert
console.log("0 == false: ", 0 == false); // True, Typumwandlung macht sie äquivalent
console.log("0 === false: ", 0 === false); // False, keine Typumwandlung und unterschiedliche Typen

// ==========================================
// ABSCHNITT 4: BEDINGUNGEN (CONDITIONALS)
// ==========================================
/* Bedingungen erlauben uns, Entscheidungen im Code zu treffen.
  Wir können unterschiedlichen Code basierend auf Bedingungen ausführen.
  - if/else Statements für einfache Bedingungen
  - switch Statements für mehrere spezifische Fälle
*/
console.log("\n --- Bedingungen ---");

// Aktuelle Temperatur in Grad Celsius
const temperature = 30; // Ändere diesen Wert für andere Ergebnisse

// Aufgabe 1: Einfaches if/else
console.log("1) If-Abfrage:");

if (temperature < 15) {
  console.log("Es ist kalt, zieh einen Mantel an.");
} else {
  console.log("Es ist nicht zu kalt, kein Mantel nötig.");
}

// Aufgabe 2: Nutzung von else if
console.log("2) Else/If-Abfrage:");

if (temperature < 15) {
  console.log("Es ist kalt, zieh einen Mantel an.");
} else if (temperature <= 25) {
  console.log("Es ist mild, zieh einen Pullover an.");
} else {
  console.log("Es ist warm, ein T-Shirt reicht.");
}

// Aufgabe 3: Nutzung von switch
console.log("3) Switch-Statement:");

switch (true) {
  case temperature === 10:
    console.log("Es ist sehr kalt, zieh definitiv einen Mantel an.");
    break;
  case temperature === 20:
    console.log("Schön angenehm, ein Pullover reicht.");
    break;
  case temperature === 30:
    console.log("Ziemlich warm, ein T-Shirt ist perfekt.");
    break;
  default:
    console.log("Gib eine spezifische Temperatur wie 10, 20 oder 30 Grad ein.");
}

// ==========================================
// ABSCHNITT 5: SCHLEIFEN (LOOPS)
// ==========================================
/* Schleifen helfen uns, dieselbe Aktion mehrfach auszuführen.
  Verschiedene Arten von Schleifen:
  - for loop (wenn man weiß, wie oft man wiederholen will)
  - while loop (wenn man nicht genau weiß, wie oft)
  - do-while loop (läuft mindestens einmal)
*/
console.log("\n --- Schleifen ---");

const animals = ["monkey", "lion", "tiger", "bear", "giraffe", "zebra"];

// For Loop - Die häufigste Art von Schleife
console.log("1) For-Loop:");

let totalAnimals = 0;
for (let i = 0; i < animals.length; i++) {
  // i++ bedeutet i bei jedem Durchgang um 1 erhöhen
  totalAnimals++;
}

console.log(`Es sind ${totalAnimals} Tiere im Zoo.`);

// While Loop - Läuft so lange, wie die Bedingung wahr ist
console.log("2) While-Loop:");

let animals5LettersOrMore = 0;
let i = 0;
while (i < animals.length) {
  if (animals[i].length >= 5) {
    // Zählt Tiere mit 5 oder mehr Buchstaben
    animals5LettersOrMore++;
  }
  i++;
}

console.log(
  `Es gibt ${animals5LettersOrMore} Tiere mit 5 oder mehr Buchstaben`
);

// Do-While Loop - Läuft immer mindestens einmal
console.log("3) Do-While-Loop:");

let count = 0;
do {
  if (animals[count].startsWith("m")) {
    // Sucht nach einem Tier, das mit 'm' beginnt
    break; // 'break' beendet die Schleife vorzeitig
  }
  count++;
} while (count < animals.length);

console.log(`Zähler bis zum ersten 'm': ${count}`);

// ==========================================
// ABSCHNITT 6: FUNKTIONEN
// ==========================================
/* Funktionen sind wiederverwendbare Code-Blöcke.
  Wir können Code einmal schreiben und oft verwenden.
  Es gibt mehrere Wege, Funktionen zu erstellen:
  1. Function Declaration (Funktions-Deklaration)
  2. Function Expression (Funktions-Ausdruck)
  3. Arrow Function (Pfeil-Funktion)
*/
console.log("\n --- Funktionen ---");

// Teil 1: Function Declarations
console.log("Funktionsdeklaration:");

// 1. Deklariere eine Funktion ohne Parameter, die etwas in der Konsole ausgibt
function greet() {
  console.log("Hello, World!");
}

// Funktion aufrufen
greet(); // Ausgabe: Hello, World!

// 2. Deklariere eine Funktion mit einem Parameter, die einen Wert zurückgibt
function square(number) {
  return number * number;
  // return number ** 2;
  // return Math.pow(number, 2);
}

// Funktion aufrufen und Ergebnis speichern
let resultSquare = square(5);

// Ergebnis in der Konsole ausgeben
console.log(resultSquare); // Ausgabe: 25

// 3. Deklariere eine Funktion mit einem Parameter, die einen Switch-Case nutzt und entsprechend zurückgibt
function getDayName(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day number";
  }
  return dayName;
}

// Funktion aufrufen und Ergebnis speichern
let resultDayName = getDayName(3);

// Ergebnis ausgeben
console.log(resultDayName); // Ausgabe: Wednesday

// Teil 2: Function Expressions
console.log("\nFunktionsausdruck:");

// 1. Funktions-Ausdruck ohne Parameter
const greetExpression = function () {
  console.log("Hello again, World!");
};

// Arrow
// const greetExpressionArrow = () => console.log("Hello again, World!");

// Aufruf
greetExpression(); // Ausgabe: Hello again, World!

// 2. Funktions-Ausdruck mit einem Parameter
const squareExpression = function (number) {
  return number * number;
};

// Aufruf und Speicherung
let resultSquareExpression = squareExpression(5);

// Ausgabe
console.log(resultSquareExpression); // Ausgabe: 25

// 3. Funktions-Ausdruck mit einem Parameter und Switch-Case
const getDayNameExpression = function (dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day number";
  }
  return dayName;
};

// Arrow
// const getDayNameExpression = (dayNumber) => { ... }

// Aufruf
let resultDayNameExpression = getDayNameExpression(3);

// Ausgabe
console.log(resultDayNameExpression); // Ausgabe: Wednesday

/*
Diskussion:
- Funktions-Deklarationen werden an den Anfang ihres Scopes "gehoistet" (hochgezogen), d.h. sie können aufgerufen werden, bevor sie im Code definiert wurden.
- Funktions-Ausdrücke werden nicht gehoistet und können erst nach ihrer Definition aufgerufen werden.
*/

// ==========================================
// ABSCHNITT 7: VARIABLEN UND SCOPE (GELTUNGSBEREICH)
// ==========================================
/* Der Scope bestimmt, wo Variablen zugänglich sind:
  - Global scope: Überall zugänglich
  - Function scope: Nur innerhalb der Funktion
  - Block scope: Nur innerhalb des Blocks (für let/const, z.B. in if-Statements)
  
  'var' hat einen Function-Scope
  'let' und 'const' haben einen Block-Scope
*/
console.log("\n --- Scope ---");

// 1. GLOBAL SCOPE
// Diese Variable ist überall im Skript verfügbar.
var myVar = "Global with var";

function test() {
  // 2. FUNCTION SCOPE
  // Durch das erneute Schreiben von 'var' innerhalb der Funktion wird eine
  // NEUE, lokale Variable erstellt. Sie "überschattet" die globale Variable.
  var myVar = "Function scoped with var";
  4;

  console.log("Innerhalb der Funktion:", myVar); // Ausgabe: "Function scoped with var"
}

// Funktion aufrufen
test();

// Hier greifen wir wieder auf die globale Variable zu.
// Sie wurde durch die Funktion NICHT verändert.
console.log("Global nach test():", myVar); // Ausgabe: "Global with var"

// ------------------------------------------

if (true) {
  // 3. BLOCK SCOPE (let & const)
  // Diese Variablen existieren NUR innerhalb dieser geschweiften Klammern {}.
  let myLetVar = "something";
  const myConstVar = "something else";

  // 4. DER "VAR"-LEAK (Sonderfall)
  // Da 'var' keinen Block-Scope kennt (nur Function-Scope), wird hier KEINE
  // neue lokale Variable erstellt, sondern die GLOBALE Variable überschrieben!
  var myVar = "re-declared";

  console.log("Im Block (let):", myLetVar);
  console.log("Im Block (const):", myConstVar);
  console.log("Im Block (var):", myVar); // Ausgabe: "re-declared"
}

// 5. ZUGRIFF NACH DEM BLOCK
// 'let' und 'const' sind hier gelöscht und führen zu Fehlern, wenn man sie aufruft.
// console.log(myLetVar);   // ERROR: myLetVar is not defined
// console.log(myConstVar); // ERROR: myConstVar is not defined

// Aber Achtung: 'myVar' wurde im Block dauerhaft geändert!
console.log("Global nach dem Block (var):", myVar); // Ausgabe: "re-declared"

// Besonderheit bei Arrays/Objekten und const
const myArray = [1, 2, 3];
myArray.push(4); // Erlaubt, da die Referenz gleich bleibt
// myArray[0] = 99;
console.log("Konstantes Array modifiziert:", myArray);
