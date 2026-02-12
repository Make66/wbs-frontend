// =========================
// ======== Klassen ========
// =========================

// ---------- readonly & optionale Eigenschaften ----------

class Book {
  // 'readonly' verhindert Änderungen nach der Initialisierung; '?' markiert die Eigenschaft als optional
  readonly title: string;
  author?: string;

  constructor(title: string, author?: string) {
    this.title = title;
    this.author = author;
  }
}

const myBook = new Book("A Bear Called Paddington", "Michael Bond");

// Hinweis: In TypeScript wird dies einen Fehler werfen, da 'title' readonly ist.
// myBook.title = "Plagiarist";

// ----------  Private Eigenschaften ----------

class Counter {
  // Das '#' kennzeichnet ein echtes privates Feld (Hard Private), das zur Laufzeit außerhalb dieser Klasse unzugänglich ist
  #count = 0;

  increment() {
    this.#count++;
  }

  // Ein Getter ermöglicht den kontrollierten Lesezugriff auf das private Feld
  get value() {
    return this.#count;
  }
}

const c = new Counter();
c.increment();
console.log(c.value);

// Der direkte Zugriff auf #count ist hier verboten und führt zu einem Fehler
// c.#count;

// ----------  Geschützte Eigenschaften (hier dargestellt als Methoden) ----------

class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  // 'protected' macht die Methode nur innerhalb dieser Klasse und ihren Unterklassen zugreifbar
  protected getName() {
    return "hi";
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    // Zugriff erlaubt, da SpecialGreeter von Greeter erbt
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
// Zugriff von außen nicht erlaubt, da getName() protected ist
// g.getName();

// ----------  Vererbung ----------

class ContentCreator {
  // Parameter Properties: 'public' innerhalb des Konstruktors erstellt und weist die Eigenschaft automatisch zu
  constructor(public username: string) {}

  // Alternativ müsste man den Code ausführlicher definieren:
  // // 1. Deklaration
  // public username: string;

  // // 2. Parameter empfangen
  // constructor(username: string) {
  //   // 3. Manuelle Zuweisung
  //   this.username = username;
  // }

  post(): void {
    console.log(`${this.username} posts something generic.`);
  }
}

// 'extends' übernimmt Eigenschaften und Methoden der Elternklasse (ContentCreator)
class YouTuber extends ContentCreator {
  // Überschreiben (Overriding) der post-Methode für spezifisches Verhalten
  post(): void {
    console.log(`${this.username} uploads a new video.`);
  }
}

const creator = new YouTuber("devGuru");
// creator.post();

// ----------  Geschützte Eigenschaften ----------

class GameCharacter {
  // Eigenschaften können auch geschützt sein (nur für diese Klasse und dessen Erben zugreifbar)
  protected energy: number = 0;

  charge(amount: number): void {
    this.energy += amount;
  }
}

class Mage extends GameCharacter {
  castSpell(): void {
    // Mage hat Zugriff auf 'this.energy', da es lediglich "protected" und nicht "private" ist
    if (this.energy >= 20) {
      this.energy -= 20;
      console.log("Spell cast!");
    } else {
      console.log("Not enough energy.");
    }
  }
}

const wizard = new Mage();
// wizard.charge(30);
// wizard.castSpell();
// wizard.castSpell();

// Zugriff von außen verboten
// wizard.energy = 40;

// ----------  Konkrete vs abstrakte Methoden ----------

// 'abstract' verhindert, dass diese Klasse direkt instanziiert wird; sie dient als Basis
abstract class Notification {
  constructor(public recipient: string) {}

  // Abstrakte Methoden besitzen keine konkrete Implementierung der Logik und MÜSSEN von Unterklassen implementiert werden
  abstract send(): void;

  // Konkrete Methoden in abstrakten Klassen vererben ihre Logik direkt weiter
  log(): void {
    console.log(`Sending a notification to ${this.recipient}`);
  }
}

class EmailNotification extends Notification {
  // Implementierung der abstrakten Methode
  send(): void {
    console.log(`Email sent to ${this.recipient}`);
  }
}

class SMSNotification extends Notification {
  // Implementierung der abstrakten Methode
  send(): void {
    console.log(`SMS sent to ${this.recipient}`);
  }
}

const email = new EmailNotification("ada@example.com");
email.log();
email.send();

const sms = new SMSNotification("+1234567890");
sms.log();
sms.send();

// ----------  Interfaces ----------

interface Drawable {
  // Definiert einen Vertrag: Jede Klasse, die dieses Interface implementiert, muss eine draw-Methode haben
  draw(): void;
}

// 'implements' zwingt die Klasse dazu, die Struktur des Interfaces einzuhalten
class Circle implements Drawable {
  draw(): void {
    console.log("Drawing a circle");
  }
}

// ==========================
// ======== Generics ========
// ==========================

/**
 * ====================================================================
 * CHEAT SHEET: GENERICS - NAMENSKONVENTIONEN
 * ====================================================================
 * Zwar sind die Namen frei wählbar, aber diese Buchstaben haben sich
 * als weltweiter Standard (Best Practice) etabliert:
 *
 * T  : Type      -> Der Standard-Platzhalter (für "irgendeinen" Typ)
 * K  : Key       -> Schlüssel eines Objekts (oft genutzt mit 'keyof')
 * V  : Value     -> Wert einer Eigenschaft (z.B. in Maps oder Objekten)
 * E  : Element   -> Ein einzelnes Element in einer Liste/Array
 * R  : Return    -> Der Rückgabetyp einer Funktion
 * P  : Props     -> Eigenschaften (Properties) => React
 * S, U           -> Werden oft genutzt, wenn T schon vergeben ist
 *
 * ====================================================================
 */

// Beispiel 1
// <T> ist ein Platzhalter für einen Typ, der erst beim Aufruf der Funktion festgelegt wird
async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Fetch failed");
  return res.json();
}

type Post = { userId: number; id: number; title: string; body: string };

// Hier wird <T> explizit als Post[] (Array von Posts) definiert
const posts = await fetchData<Post[]>(
  "https://jsonplaceholder.typicode.com/posts"
);

// Beispiel 2
// Hier wird ein User Typ definiert
type User = { id: number; email: string };

// Hier definieren wir einen Comment Typ
type Comment = { userId: number; id: number; title: string; body: string };

// Funktion, die nur für den Typ 'User' funktioniert
function printUser(obj: User): User {
  console.log(obj);
  return obj;
}

// Funktion, die nur für den Typ 'Comment' funktioniert
function printComment(obj: Comment): Comment {
  console.log(obj);
  return obj;
}

printComment({ userId: 1, id: 1, title: "title", body: "body" });
printUser({ id: 1, email: "email" });

// Generische Funktion: Funktioniert mit jedem Typ T und gibt denselben Typ zurück
function printObject<T>(obj: T): T {
  console.log(obj);
  return obj;
}

// TypeScript erkennt hier automatisch, dass T dem übergebenen Objekt entspricht
printObject({ userId: 1, id: 1, title: "title", body: "body" });
printObject({ id: 1, email: "email" });

// ----------  Type Aliases ----------

// Ein generischer Typ-Alias, der Daten beliebigen Typs (T) in eine Struktur hüllt
type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type User2 = { name: string };

// Verwendung des generischen Alias mit dem konkreten Typ User2
const userResponse: ApiResponse<User2> = {
  success: true,
  data: { name: "Ada" },
};

console.log(userResponse.data);

// ----------  Constraining Generics ----------

// Beispiel 1
// 'extends { length: number }' schränkt T ein: Der Typ MUSS eine length-Eigenschaft haben
const getLength = <T extends { length: number }>(value: T): number => {
  return value.length;
};

getLength("hello"); // String hat .length
getLength([1, 2, 3]); // Array hat .length
// getLength(123); // Fehler: Zahl hat keine .length Eigenschaft

// Beispiel 2
// 'Key extends keyof Type' stellt sicher, dass 'key' tatsächlich als Schlüssel in 'obj' existiert
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let testObject = { a: 1, b: 2, c: 3, d: 4 };

getProperty(testObject, "a");
// getProperty(x, "m"); // Fehler: "m" existiert nicht in testObject

// ----------  Default Generic Types ----------

// '<T = string>' setzt 'string' als Standardtyp, falls beim Aufruf nichts anderes angegeben wird
type ApiResponse2<T = string> = {
  status: number;
  data: T;
};

const textResponse: ApiResponse2 = {
  status: 200,
  data: "Hallo",
};

// Falls ich "data" einen anderen Typen zuweisen will, muss ich dies bei Aufruf deklarieren
const textResponseNumber: ApiResponse2<number> = {
  status: 200,
  data: 100,
};

// ===========================
// ======== Utilities ========
// ===========================

// ----------  Partial ----------
type User3 = {
  id: number;
  name: string;
  email: string;
};

// 'Partial' macht alle Eigenschaften von User3 optional
function updateUser(id: number, newData: Partial<User3>) {
  // ...Logik, um einen Benutzer zu aktualisieren (tatsächliches Beispiel zu finden in der LMS)
}

updateUser(1, { name: "Ada" });

// ----------  Required ----------
type User4 = {
  id: number;
  name?: string;
};

// 'Required' macht alle (auch optionale) Eigenschaften zur Pflicht
const fullUser: Required<User4> = {
  id: 1,
  name: "Ada",
};

// ----------  Readonly ----------
type Config = { apiKey: string };

// 'Readonly' macht alle Eigenschaften unveränderlich
const config: Readonly<Config> = { apiKey: "xyz123" };

// Error: Cannot assign to 'apiKey' because it is a read-only property.
// config.apiKey = 'new-key';

// ----------  Pick & Omit ----------
type User5 = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
};

// 1. 'Pick' erstellt einen neuen Typ, der nur die angegebenen Keys enthält
type UserPreview = Pick<User5, "id" | "name">;

// 2. 'Omit' erstellt einen neuen Typ, der alles enthält AUSSER die angegebenen Keys
type UserWithoutRole = Omit<User5, "role" | "email">;

// ----------  Record ----------
type Roles = "admin" | "user" | "guest";

// 'Record<Keys, Type>' erstellt ein Objekt, bei dem die Keys 'Roles' sind und die Werte 'boolean'
type RoleAccess = Record<Roles, boolean>;

const access: RoleAccess = {
  admin: true,
  user: true,
  guest: false,
};

// Error: Property 'dev' does not exist on type 'RoleAccess'.
// access.dev = true;

// ----------  Exclude, Extract & NonNullable ----------
type Status = "success" | "failure" | "pending" | null | undefined;

// 1. Exclude: Entfernt spezifische Typen aus einer Union (hier 'pending' und undefined)
type FinalStatus = Exclude<Status, "pending" | undefined>;

// 2. Extract: Extrahiert nur die Typen, die übereinstimmen (hier nur 'success')
type SuccessStatus = Extract<Status, "success">;

// 3. NonNullable: Entfernt 'null' und 'undefined' aus dem Typ
type CleanStatus = NonNullable<Status>;
