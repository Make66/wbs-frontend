// ## Array-Cardio

// Einige Initialdaten, mit denen wir arbeiten können:
// Nimm dir etwas Zeit, um die Datenstruktur zu analysieren
// Haben alle Objekte genau dieselben Daten?
const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
    categories: ["man", "physicist"],
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
    categories: ["man", "mathematician"],
  },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
    categories: ["woman", "physicist"],
  },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
    categories: ["woman", "physicist"],
  },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
    categories: ["woman", "physicist"],
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
    categories: ["woman", "inventor"],
  },
];

// Array.prototype.filter()
// 1. Filter die Liste der Erfinder, um nur diejenigen zu erhalten, die zwischen 1500 und 1600 geboren wurden
// Erwartetes Ergebnis: ein Array mit zwei Erfindern: Galileo Galilei und Johannes Kepler

// Array.prototype.filter()
// 2. Filter die Liste der Erfinder, um nur diejenigen zu erhalten, die die Kategorie „mathematician“ haben
// Erwartetes Ergebnis: ein Array mit nur einem Erfinder: Isaac Newton

// Array.prototype.filter()
// 3. Filter die Liste der Erfinder, um nur diejenigen mit der Kategorie === 'physicist' UND 'man' zu erhalten
// Erwartetes Ergebnis: ein Array mit nur einem Erfinder: Albert Einstein

// Array.prototype.map()
// 4. Erstelle ein Array, das mit den Vor- und Nachnamen der Erfinder gefüllt ist
// Erwartetes Ergebnis:
// ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler", "Nicolaus Copernicus", "Max Planck", "Katherine Blodgett", "Ada Lovelace", "Sarah E. Goode", …]

// Array.prototype.map()
// 5. Erstelle ein Array, das nur die E-Mails der Erfinder enthält
// Die E-Mails sollen wie folgt aufgebaut sein: kleingeschriebener Vorname + Geburtsjahr @ inventor.com
// Erwartetes Ergebnis:
// z.B.: ["albert1879@inventor.com", "isaac1643@inventor.com", "galileo1564@inventor.com", "marie1867@inventor.com", "johannes1571@inventor.com", "nicolaus1473@inventor.com", "max1858@inventor.com", "katherine1898@inventor.com", "ada1815@inventor.com", "sarah e.1855@inventor.com", …]

// Array.prototype.toSorted()
// 6. Sortiere die Erfinder nach Geburtsdatum, von jung nach alt (z. B. das Geburtsjahr, das näher an der Gegenwart liegt, zuerst)
// Erwartetes Ergebnis: ein Array von Erfindern beginnend bei "Katherine Blodgett" bis hin zu "Nicolaus Copernicus"

// Array.prototype.reduce()
// 7. Wie viele Jahre haben alle Erfinder zusammengerechnet gelebt?
// Erwartetes Ergebnis: 861

// Array.prototype.toSorted()
// 8. Sortiere die Erfinder nach Lebensjahren (sowohl aufsteigend als auch absteigend)

// Neues Array für die nächste Aufgabe:

const boulevardsInParis = [
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
];

// Array.prototype.filter()
// 9. Erstelle eine Liste der Boulevards in Paris, die 'de' an irgendeiner Stelle im Namen enthalten

// Neues Array für die nächste Aufgabe:

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.sort()
// 10. Sortiere die Personen alphabetisch nach dem Nachnamen

// Neues Array für die nächsten Aufgaben:

const family = [
  { name: "Lily", year: 2009 },
  { name: "Leah", year: 2011 },
  { name: "Liv", year: 2020 },
  { name: "Lydia", year: 2015 },
];

// Array.prototype.some()
// 12. Ist mindestens eine Person 18 Jahre alt?

// Array.prototype.every
// 13. Beginnen alle Namen der Familienmitglieder mit dem Buchstaben L?
