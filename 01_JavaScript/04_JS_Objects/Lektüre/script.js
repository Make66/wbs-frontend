// ==========================================
// ABSCHNITT 1: Objektliterale (OBJECT LITERALS)
// ==========================================
/* Objekte in JavaScript ermöglichen es uns, mehrere zusammengehörige Werte gemeinsam zu speichern.
  Sie bestehen aus Schlüssel-Wert-Paaren (Key-Value Pairs):
  - Keys (Schlüssel) sind wie Etiketten (technisch Strings – Anführungszeichen sind meist optional)
  - Values (Werte) können jeder Datentyp sein (Strings, Numbers, Arrays, Funktionen etc.)
*/

// Erstellen eines Object Literals mit verschiedenen Eigenschaftstypen
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  hobbies: ["football", "gaming", "sleeping"],
  sayHi() {
    return `Hallo, mein Name ist ${this.firstName} und ich bin ${this.age} Jahre alt!`;
  },
};

// ==========================================
// ABSCHNITT 2: ZUGRIFF AUF OBJEKT-EIGENSCHAFTEN
// ==========================================
/*
    Es gibt zwei Wege, auf Objekt-Eigenschaften zuzugreifen:
    1. Punkt-Notation (Dot-Notation): objekt.eigenschaft
    2. Klammer-Notation (Bracket-Notation): objekt["eigenschaft"]
    
    Die Klammer-Notation ist nützlich, wenn:
    - Eigenschaftsnamen Leerzeichen oder Sonderzeichen enthalten
    - Eigenschaftsnamen in Variablen gespeichert sind
  */

// Auskommentieren, um verschiedene Zugriffsarten zu sehen
// console.log(user); // Zeigt das gesamte Objekt
// console.log(user.firstName); // Punkt-Notation
// console.log(user["age"]); // Klammer-Notation
// console.log(user.hobbies[0]); // Zugriff auf Array-Elemente innerhalb des Objekts

// Verwendung von Variablen mit der Klammer-Notation
const selectedValue = "firstName";
// console.log(user[selectedValue]);

const user2 = {
  name: "Max",
  email: "max@beispiel.de",
  level: 42,
};

const showInfo = (propertyName) => {
  // Hier wissen wir nicht, ob "name", "email" oder "level" übergeben wird
  console.log(`Der Wert von ${propertyName} ist: ${user[propertyName]}`);
};

// showInfo("name"); // "Der Wert von name ist: Max"
// showInfo("level"); // "Der Wert von level ist: 42"

// ==========================================
// ABSCHNITT 3: OBJEKTE MODIFIZIEREN
// ==========================================
/*
    Objekte sind veränderbar (mutable) - wir können:
    - Bestehende Eigenschaftswerte ändern
    - Neue Eigenschaften hinzufügen
    - Eigenschaften löschen
  */

// Auskommentieren, um Modifikationen zu sehen
user.age = 30; // Bestehende Eigenschaft ändern
user.job = "Web Developer"; // Neue Eigenschaft hinzufügen
// delete user.firstName; // Eine Eigenschaft löschen

// Aufruf einer Objekt-Methode
// console.log(user.sayHi()); // Zeigt "Hallo, mein Name ist John und ich bin 30 Jahre alt!"

// ==========================================
// ABSCHNITT 4: OBJECT DESTRUCTURING
// ==========================================
/*
    Destructuring ermöglicht es uns, mehrere Eigenschaften aus einem Objekt
    in einem einzigen Statement in einzelne Variablen zu extrahieren.
  */

// Einfaches Destructuring
const { firstName, age } = user;

// console.log(firstName, age); // Zeigt "John 30"

// Destructuring in Funktionsparametern
const greet = ({ firstName, age }) => {
  console.log(
    `Hallo, mein Name ist ${firstName} und ich bin ${age} Jahre alt!`
  );
};

greet(user);

// Array Destructuring
const array = [1, 2, 3, 4];

// Basic array destructuring
const [a, b] = array;
// console.log(a); // Output: 1
// console.log(b); // Output: 2

// Skipping elements
const [first, , third] = array;
// console.log(first); // Output: 1
// console.log(third); // Output: 3

// Default values
const [x = 10, y = 20, z = 30] = [1];
// console.log(x); // Output: 1
// console.log(y); // Output: 20
// console.log(z); // Output: 30

// Nested array destructuring
const nestedArray = [1, [2, 3], 4];
const [n1, [n2, n3], n4] = nestedArray;
// console.log(n1); // Output: 1
// console.log(n2); // Output: 2
// console.log(n3); // Output: 3
// console.log(n4); // Output: 4
