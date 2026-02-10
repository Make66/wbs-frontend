// ==============================================
// 1. GRUNDLAGEN DER TYPINFERENZ UND -ANNOTATION
// ==============================================

console.log("\n===== 1. TYPINFERENZ UND -ANNOTATION =====");

// Typinferenz (TypeScript leitet den Typ ab)
let integer = 41;
let text = "Hello";
let isTrue = true;
let notDefined;
let empty = null;

// Typannotation (Explizite Deklaration der Typen)
let count: number = 42;
let greeting: string = "Hello";
let isActive: boolean = true;
let notAssigned: undefined;
let nothing: null = null;

console.log("\n--- Beispiele für Typinferenz ---");
console.log("number:", integer, "| Typ:", typeof integer);
console.log("text:", text, "| Typ:", typeof text);
console.log("isTrue:", isTrue, "| Typ:", typeof isTrue);
console.log("notDefined:", notDefined, "| Typ:", typeof notDefined);
console.log("empty:", empty, "| Typ:", typeof empty);

// TypeScript verhindert Typ-Unstimmigkeiten
let language = "TypeScript"; // Abgeleitet als string
// language = 42; // Fehler: Typ 'number' kann nicht dem Typ 'string' zugewiesen werden

// ==============================================
// 2. PRIMITIVE TYPEN
// ==============================================

console.log("\n===== 2. PRIMITIVE TYPEN =====");

let name: string = "Ada";
let age: number = 28;
let isOnline: boolean = true;

console.log("\n--- Beispiele für primitive Typen ---");
console.log("Name:", name, "| Typ:", typeof name);
console.log("Alter:", age, "| Typ:", typeof age);
console.log("Ist Online:", isOnline, "| Typ:", typeof isOnline);

// ==============================================
// 3. TYPINFERENZ IN AKTION
// ==============================================

console.log("\n===== 3. TYPINFERENZ IN AKTION =====");

let city = "London"; // Abgeleitet als string
let score = 42; // Abgeleitet als number

console.log("\n--- Beispiele für Typinferenz ---");
console.log("Stadt:", city, "| Typ:", typeof city);
console.log("Punktzahl:", score, "| Typ:", typeof score);
console.log("\n--- Methoden-Beispiele ---");
console.log(`city.charAt(1):`, city.charAt(1)); // 'o'
console.log("score.toPrecision(1):", score.toPrecision(1)); // '4e+1'

// ==============================================
// 4. FUNKTIONEN MIT TYPEN
// ==============================================

// Funktion mit Parameter- und Rückgabetyp-Annotationen
function addNumbers(a: number, b: number): number {
  return a + b;
}

const numberA = 1;
const numberB = 2;

// Funktion mit String-Rückgabetyp
function greet(): string {
  return "Hallo Welt!";
}

// Void-Rückgabetyp (kein Rückgabewert)
function logDate(): void {
  console.log("Es ist heute");
}

// Funktion mit bedingten Rückgabetypen
function isOldEnough(age: number): string {
  if (age >= 18) {
    return "Du bist alt genug.";
  } else {
    return "Du bist zu jung.";
  }
}

console.log("\n===== 4. FUNKTIONEN MIT TYPEN =====");
console.log("\n--- Funktionsaufruf-Beispiele ---");
console.log(
  `addNumbers(${numberA}, ${numberB}):`,
  addNumbers(numberA, numberB)
); // 3
console.log("greet():", greet());
console.log("logDate():", logDate()); // Wird undefined anzeigen, da sie void zurückgibt
console.log("isOldEnough(16):", isOldEnough(16)); // "Du bist zu jung."

// ==============================================
// 5. ARRAYS UND TUPEL
// ==============================================

// Arrays mit Typannotationen
const scores: number[] = [95, 87, 100];
const names: string[] = ["Ada", "Grace", "Linus"];

// Generischer Array-Typ
const flags: Array<boolean> = [true, false, true];

// TypeScript verhindert das Hinzufügen falscher Typen zu Arrays
const cities: string[] = ["London", "Berlin"];
// cities.push(42); // Fehler: Argument vom Typ 'number' kann nicht dem Parameter vom Typ 'string' zugewiesen werden.

// Tupel - Arrays fester Länge mit spezifischen Typen
const user: [string, number] = ["Ada", 36];

let result: [boolean, string];
result = [true, "Erfolg"];
// result = ["Fehlschlag", false]; // Fehler: Typ 'string' kann nicht dem Typ 'boolean' zugewiesen werden.

const coordinates: [number, number] = [51.5, -0.12];
// coordinates.unshift(10); // Dies würde zur Laufzeit funktionieren, ist aber unsicher

console.log("\n===== 5. ARRAYS UND TUPEL =====");
console.log("\n--- Array-Beispiele ---");
console.log("scores:", scores, "| Typ:", "number[]");
console.log("names:", names, "| Typ:", "string[]");
console.log("flags:", flags, "| Typ:", "Array<boolean>");
console.log("cities:", cities, "| Typ:", "string[]");

console.log("\n--- Tupel-Beispiele ---");
console.log("user:", user, "| Typ:", "[string, number]");
console.log("result:", result, "| Typ:", "[boolean, string]");
console.log("coordinates:", coordinates, "| Typ:", "[number, number]");

// ==============================================
// 6. OBJEKT-TYPEN
// ==============================================

// Objekt mit Typannotation
const userObj: { name: string; age: number; address: string } = {
  name: "Ada",
  age: 36,
  address: "123 TypeScript Str.",
};

// Optionale Eigenschaften
const product: { name: string; description?: string } = {
  name: "Laptop",
};

product.description = "Hochleistungs-Laptop";

// Schreibgeschützte Eigenschaften (Readonly)
const settings: { readonly theme: string } = {
  theme: "dark",
};

// settings.theme = "light"; // Fehler: Zuweisung an 'theme' nicht möglich, da es eine schreibgeschützte Eigenschaft ist.

// Arrays von Objekten
const users: { name: string; age: number; address?: string }[] = [
  { name: "Ada", age: 36 },
  { name: "Grace", age: 30, address: "456 Programming Ave" },
];

users.push({ name: "Linus", age: 20 });

console.log("\n===== 6. OBJEKT-TYPEN =====");
console.log("\n--- Objekt-Beispiele ---");
console.log("userObj:", JSON.stringify(userObj, null, 2));
console.log("product:", JSON.stringify(product, null, 2));
console.log("settings:", JSON.stringify(settings, null, 2));

console.log("\n--- Objekt-Methoden-Beispiele ---");
console.log(
  "product.description?.toUpperCase():",
  product.description?.toUpperCase()
);
console.log(
  'product.description ?? "Keine Beschreibung":',
  product.description ?? "Keine Beschreibung"
);

console.log("\n--- Array von Objekten ---");
console.log("Benutzer:");
users.forEach((user, index) => {
  console.log(
    `  ${index + 1}. ${user.name} (${user.age} Jahre alt)${
      user.address ? ` - ${user.address}` : ""
    }`
  );
});

console.log("\n--- Vollständiges Benutzer-Array ---");
console.log(JSON.stringify(users, null, 2));
