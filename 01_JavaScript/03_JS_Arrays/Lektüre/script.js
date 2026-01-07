/**
 * ÜBERSICHT: JAVASCRIPT ARRAYS
 * ===========================
 */

// Kurze Beschreibung:

// Das Array-Objekt ermöglicht das Speichern einer Sammlung von mehreren Elementen unter einem einzigen Variablennamen und enthält Methoden zum Durchführen gängiger Array-Operationen.

// ===========================

// Wichtige Eigenschaften:

// Zero-indexed (Null-basiert): Das erste Element ist an Position 0.

// Dynamisch: Arrays können schrumpfen und wachsen und haben daher keine feste Länge.

// Heterogen: Ein Array kann verschiedene Datentypen gleichzeitig speichern (Strings, Zahlen, Booleans, sogar andere Arrays etc.).

// Referenz-Typ: Arrays sind technisch gesehen Objekte. typeof gibt daher "object" zurück.

// ===========================

// Klassifizierung von Array-Methoden (Mutierend vs. Nicht-Mutierend):

// Mutierend: Die Methode verändert das originale Array.

// Nicht-Mutierend: Das originale Array bleibt unberührt. Die Methode erstellt eine Kopie mit den gewünschten Änderungen.

// ==========================================
// 1. GRUNDLAGEN & Deklaration
// ==========================================
console.log("--- 1. GRUNDLAGEN ---");
const fruits = ["apple", "banana", "orange", "peach"];
const mixedArray = [1, "zwei", true, ["nested", "array"]];

console.log("Gesamtes Array:", fruits);
console.log("Erstes Element (Index 0):", fruits[0]);
console.log("Letztes Element:", fruits[fruits.length - 1]);
console.log("Anzahl der Elemente (length):", fruits.length);
console.log("Datentyp (typeof):", typeof fruits); // "object"

// ==========================================
// 2. Array Methoden
// ==========================================

// ==========================================
// 2.1 ELEMENTE HINZUFÜGEN & ENTFERNEN (MUTIEREND)
// ==========================================
console.log("\n --- 2. HINZUFÜGEN & ENTFERNEN (MUTIEREND) ---");

// push: Fügt Elemente am ENDE hinzu
const pushArray = ["apple", "banana", "orange"];
pushArray.push("peach", "cherry");
console.log("Nach .push():", pushArray);

// pop: Entfernt das LETZTE Element
const popArray = ["apple", "banana", "orange"];
popArray.pop();
console.log("Nach .pop():", popArray);

// unshift: Fügt Elemente am ANFANG hinzu
const unshiftArray = ["apple", "banana", "orange"];
unshiftArray.unshift("peach", "cherry");
console.log("Nach .unshift():", unshiftArray);

// shift: Entfernt das ERSTE Element
const shiftArray = ["apple", "banana", "orange"];
shiftArray.shift();
console.log("Nach .shift():", shiftArray);

// ==========================================
// 3. ARRAYS MODIFIZIEREN (MUTIEREND)
// ==========================================
console.log("\n --- 3. MODIFIZIEREN (MUTIEREND) ---");

// reverse: Dreht die Reihenfolge des Original-Arrays um
const reverseArray = ["apple", "banana", "orange"];
reverseArray.reverse();
console.log("Nach .reverse():", reverseArray);

// splice: Entfernt/Ersetzt Elemente an spezifischer Position
// Syntax: (Startindex, Anzahl zu löschender Elemente, Ersatz-Elemente)
const spliceArray = ["apple", "banana", "orange"];
spliceArray.splice(1, 1, "cherry");
console.log("Nach .splice():", spliceArray);

// ==========================================
// 4. ARRAYS MODIFIZIEREN (NICHT-MUTIEREND)
// ==========================================
console.log("\n--- 4. MODIFIZIEREN (NICHT-MUTIEREND / KOPIE) ---");

// toReversed: Erstellt eine umgedrehte Kopie (Original bleibt gleich)
const originalArray = ["apple", "banana", "orange"];
const reversedToArray = originalArray.toReversed();
console.log("Original nach .toReversed():", originalArray);
console.log("Kopie (reversedToArray):", reversedToArray);

// toSpliced: Erstellt eine Kopie mit Änderungen (Original bleibt gleich)
const originalArray2 = ["apple", "banana", "orange"];
const splicedToArray = originalArray2.toSpliced(1, 1, "cherry");
console.log("Original nach .toSpliced():", originalArray2);
console.log("Kopie (splicedToArray):", splicedToArray);

// slice: Extrahiert einen Teilbereich in ein neues Array
// Syntax: (Startindex, Endindex - Endindex ist NICHT enthalten)
const originalArray3 = ["apple", "banana", "orange", "cherry", "peach"];
const slicedArray = originalArray3.slice(1, 4); // Index 1, 2 und 3
console.log("Nach .slice(1, 4):", slicedArray);

// join: Wandelt das Array in einen String um
const originalArray4 = ["apple", "banana", "orange", "cherry", "peach"];
const joinArray = originalArray4.join(", ");
console.log("Ergebnis von .join():", joinArray);

// ==========================================
// 5. SCHLEIFEN (ITERATION)
// ==========================================
console.log("\n --- 5. SCHLEIFEN ---");

const fruits2 = ["apple", "banana", "cherry", "date"];

console.log("\n A) Klassische for-Schleife:");
for (let i = 0; i < fruits2.length; i++) {
  console.log(`${i}: Aktuelle Frucht: ${fruits2[i]}`);
}

console.log("\n B) For...of Schleife mit .entries():");
for (const [index, fruit] of fruits2.entries()) {
  console.log(`${index}: Aktuelle Frucht: ${fruit}`);
}
