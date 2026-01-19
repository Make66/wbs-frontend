// ------------- SetTimeout -------------
// Eine Funktion mit einer Verzögerung ausführen

// Syntax => 3 Parameter (die 2 letzteren sind optional)
// setTimeout(func, delay, param1, param2)

// Beispiel 1
setTimeout(() => {
  console.log("Hallo");
}, 3000);

// Beispiel 2
const greeting = () => {
  console.log("Nochmal hallo!");
};

setTimeout(greeting, 3000);

// Beispiel 3
const greetingWithArguments = (name, role) => {
  console.log(`Hallo ${name}, du bist angemeldet als: ${role}`);
};

setTimeout(greetingWithArguments, 3000, "Max", "Admin");

// Statt einer Funktion kann ein Code in Stringform eingefügt werden, dies sollte allerdings vermieden werden!
// setTimeout("greeting()", 2000);

// ------------- clearTimeout -------------
// Stoppt die Ausführung eines setTimeout()

// Beispiel
const timeout = setTimeout(() => {
  console.log("Hallo");
}, 3000);

// Die Ausführung des timeout nach 2 Sekunden stoppen
setTimeout(() => {
  clearTimeout(timeout);
  console.log("Timeout gestoppt");
}, 2000);

// ------------- SetInterval -------------
// Führt eine Funktion wiederholt aus

// Syntax => 3 Parameter (die 2 letzteren sind optional)
// setInterval(func, delay, param1, param2)

// Beispiel 1
setInterval(() => {
  console.log("Hallo");
}, 2000);

// Beispiel 2
const repeatGreeting = () => {
  console.log("Hallo, alle 2 Sekunden");
};

setInterval(repeatGreeting, 2000);

// ------------- clearInterval -------------
// Stoppt die Ausführung eines setInterval()

// Beispiel
const interval = setInterval(() => {
  console.log("Läuft...");
}, 2000);

// Die Ausführung des interval nach 5 Sekunden stoppen
setTimeout(() => {
  clearInterval(interval);
  console.log("Intervall gestoppt");
}, 5000);
