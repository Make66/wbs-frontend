// ==============================================
// 1. TYPE ALIASES & INTERFACES
// ==============================================

console.log("\n===== 1. TYPE ALIASES & INTERFACES =====");

// -------------------
// 1.1 Interfaces
// -------------------

// Interfaces definieren die Form (den Vertrag) eines Objekts (oder einer Klasse).
interface User {
  name: string;
  email: string;
  age?: number; // '?' macht die Eigenschaft optional
}

// Declaration Merging: TypeScript verschmilzt automatisch mehrere Interfaces gleichen Namens.
// Das Resultat ist ein User mit name, email, age UND role.
interface User {
  role?: string;
}

const ada: User = {
  name: "Ada",
  email: "ada@lovelace.com",
};

console.log("\n--- 1.1 Interface Examples ---");
console.log("User:", ada);

// -------------------
// 1.2 Interface Inheritance
// -------------------

// 'extends' ermöglicht Vererbung: Admin übernimmt alle Eigenschaften von User und fügt neue hinzu.
interface Admin extends User {
  role: "admin"; // Literal Type: 'role' muss exakt der String "admin" sein
  permissions: string[];
}

const admin: Admin = {
  name: "Sarah",
  email: "sarah@example.com",
  role: "admin",
  permissions: ["read", "write", "delete"],
};

console.log("\n--- 1.2 Interface Inheritance ---");
console.log("Admin:", admin);

// -------------------
// 1.3 Type Aliases
// -------------------

// Union Type mit Literalen: Definiert eine feste Menge erlaubter String-Werte.
type Direction = "left" | "right" | "up" | "down";

let move: Direction = "up";

// ==============================================
// 2. FUNCTION TYPES & PARAMETERS
// ==============================================

console.log("\n\n===== 2. FUNCTION TYPES & PARAMETERS =====");

// -------------------
// 2.1 Function Type Aliases
// -------------------

// Definiert die Signatur einer Funktion: nimmt string, gibt string zurück.
type Greeter = (name: string) => string;

const sayHello: Greeter = (name) => `Hallo, ${name}`;

console.log("\n--- 2.1 Function Type Aliases ---");
console.log("Greeting:", sayHello("Alice"));

// -------------------
// 2.2 Optional & Default Parameters
// -------------------

// 'userId?' ist optional. 'void' bedeutet, die Funktion gibt nichts zurück.
function logEvent(message: string, userId?: number): void {
  const user = userId ? ` (User: ${userId})` : "";
  console.log(`Event: ${message}${user}`);
}

// Default Parameters: Wenn 'name' 'undefined' ist, wird "Gast" verwendet.
function greetUser(name: string = "Gast", lastName: string = ""): string {
  return `Willkommen, ${name} ${lastName}`;
}

// Hier wird für 'name' der Default-Wert "Gast" genutzt, da explizit undefined übergeben wurde.
console.log(greetUser(undefined, "Waeldin"));

// ==============================================
// 3. UNION & INTERSECTION TYPES
// ==============================================

// -------------------
// 3.1 Union Types
// -------------------

// Union Type (|): ID kann entweder ein String ODER eine Zahl sein.
type ID = string | number;

function printId(id: ID): void {
  // Type Guard: Prüft zur Laufzeit den Typ, um Methoden sicher aufzurufen (Narrowing).
  if (typeof id === "string") {
    console.log(`String ID: ${id.toUpperCase()}`);
  } else {
    console.log(`Numerische ID: ${id.toFixed(2)}`);
  }
}

console.log("\n--- 3.1 Union Types ---");
printId("abc123");
printId(3.14159);

// -------------------
// 3.2 Intersection Types
// -------------------

type Name = { firstName: string; lastName: string };
type Age = { age: number };

// Intersection Type (&): Person muss ALLE Eigenschaften von Name UND Age besitzen.
type Person = Name & Age;

const person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const myName: Name = {
  firstName: "Ralf",
  lastName: "Waeldin",
};

const myAge: Age = {
  age: 61,
};

// Spread Syntax (...) funktioniert gut mit Intersection Types, um Objekte zusammenzuführen.
const person2: Person = {
  ...myName,
  ...myAge,
};

console.log(person2);

// ==============================================
// 4. TYPE NARROWING
// ==============================================

console.log("\n\n===== 4. TYPE NARROWING =====");

// -------------------
// 4.1 Type Guards
// -------------------

function printValue(value: string | number | bigint): void {
  // 'typeof' prüft den Typ innerhalb des if-Blocks.
  if (typeof value === "string") {
    console.log(`String value: ${value.toUpperCase()}`);
  } else if (typeof value === "number") {
    console.log(`Number value: ${value.toFixed(2)}`);
  } else {
    // Hier weiß TypeScript, dass es nur noch 'bigint' sein kann.
    console.log(`BigInt value: ${value}`);
  }
}

printValue(BigInt(10));

// -------------------
// 4.2 Discriminated Unions
// -------------------

// Jedes Interface hat eine gemeinsame Eigenschaft 'kind' mit eindeutigem Wert (Diskriminator).
type Dog = { kind: "dog"; bark: () => void };
type Cat = { kind: "cat"; meow: () => void };

type Pet = Dog | Cat;

function speak(pet: Pet) {
  // TypeScript nutzt 'kind', um festzustellen, ob 'bark' oder 'meow' verfügbar ist.
  if (pet.kind === "dog") {
    pet.bark();
  } else {
    pet.meow();
  }
}

const dog: Dog = {
  kind: "dog",
  bark: () => console.log("Woof!"),
};

const cat: Cat = {
  kind: "cat",
  meow: () => console.log("Meow!"),
};

speak(dog); // Output: Woof!
speak(cat); // Output: Meow!

// ==============================================
// 5. ENUMS
// ==============================================

console.log("\n\n===== 5. ENUMS =====");

// -------------------
// 5.1 Numeric Enums
// -------------------

// Nummerisches Enum: Startet automatisch bei 0 (Up=0, Down=1, etc.), wenn nicht anders definiert.
enum Directions {
  Up,
  Down,
  Left,
  Right,
}

function turnWithEnum(dir: Directions) {
  if (dir === Directions.Left) {
    console.log("Turning left");
  }
}

turnWithEnum(Directions.Left);

console.log("\n--- 5.1 Numeric Enums ---");

// -------------------
// 5.2 String Enums
// -------------------
// String Enums: Jeder Key hat einen expliziten String-Wert.
enum Choice {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
}

function play(choice: Choice) {
  switch (choice) {
    case Choice.Rock:
      console.log("You chose Rock");
      break;
    case Choice.Paper:
      console.log("You chose Paper");
      break;
    case Choice.Scissors:
      console.log("You chose Scissors");
      break;
    default:
      // Exhaustiveness Checking: Der Typ 'never' wirft einen Fehler, wenn ein neuer Enum-Wert zwar hinzugefügt, aber hier (im Switch Statement) nicht behandelt wurde.
      const _exhaustiveCheck: never = choice;
      return _exhaustiveCheck;
  }
}

play(Choice.Rock);
play(Choice.Paper);
play(Choice.Scissors);
// play("Lizard"); // Argument of type '"Lizard"' is not assignable to parameter of type 'Choice'.
// play("Spock"); // Argument of type '"Spock"' is not assignable to parameter of type 'Choice'.

// ==============================================
// 6. TYPE ASSERTIONS
// ==============================================

console.log("\n\n===== 6. TYPE ASSERTIONS =====");

// 'unknown' ist sicherer als 'any', zwingt uns aber zur Typüberprüfung oder Assertion vor der Nutzung.
const someValue: unknown = "Hallo, TypeScript!";

// 'as': Wir sagen dem Compiler: "Ich weiß, dass das ein String ist, vertrau mir."
const value1 = someValue as string;

// Alternativer Syntax für Assertions (Achtung: Funktioniert nicht in .tsx / React Dateien => Mehr dazu nächste Woche).
const value2 = <string>someValue;

console.log("\n--- Type Assertion ---");
console.log("String Length:", value1.length);
console.log("String Length 2:", value2.length);

// ==============================================
// 7. NULLISH COALESCING & OPTIONAL CHAINING
// ==============================================

console.log("\n\n===== 7. NULLISH COALESCING & OPTIONAL CHAINING =====");

type UserProfile = {
  name: string;
  contact?: {
    email: string;
    phoneNumber?: string;
  };
  address?: {
    street: string;
    zipCode: string;
  };
};

const user: UserProfile = {
  name: "Onur",
  // contact: { email: "user@example.com" },
  // address: { street: "Echte-Straße", zipCode: "11111" },
};

console.log("\n--- Optional Chaining & Nullish Coalescing ---");
// Optional Chaining (?.): Stoppt und gibt undefined zurück, wenn 'contact' null/undefined ist, statt abzustürzen.
console.log("User Email:", user.contact?.email);
// Nullish Coalescing (??): Gibt den rechten Wert NUR zurück, wenn links 'null' oder 'undefined' steht (nicht bei leeren Strings oder 0).
console.log("User Address:", user.address ?? "Beispielstraße, 11001");
// console.log("User Address 2:", user.address.street);

// ==============================================
// 8. TYPE ASSERTION WITH FETCH EXAMPLE
// ==============================================

console.log("\n\n===== 8. TYPE ASSERTION WITH FETCH EXAMPLE =====");

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

try {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  // Wir sagen TS, dass die JSON-Antwort (die standardmäßig 'any' ist) als 'Post[]' Array-Format behandelt werden soll.
  const posts = (await response.json()) as Post[];

  posts.forEach((post) => {
    console.log(`Post #${post.id}: ${post.title}`);
  });
} catch (error) {
  // 'instanceof Error' ist ein Type Guard, um auf .message zugreifen zu können, da error 'unknown' ist.
  if (error instanceof Error) {
    console.error("Fetch failed:", error.message);
  } else {
    console.error("Unknown error occurred.");
  }
}
