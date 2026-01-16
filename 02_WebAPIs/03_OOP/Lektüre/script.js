// Function Constructor (ES5)

// function User(name, email) {
//   this.name = name;
//   this.email = email;

//   function login() {
//     console.log(this.name + " hat sich eingeloggt.");
//   }
// }

// User.prototype.login = function () {
//   console.log(this.name + " hat sich eingeloggt.");
// };

// const user1 = new User("Max", "max@web.de");
// user1.login();
// console.dir(User);

// Classes (ES6)

class User {
  constructor(parName, parEmail) {
    this.name = parName;
    this.email = parEmail;
  }

  login() {
    console.log(`${this.name} hat sich eingeloggt.`);
  }
}

const user2 = new User("Max", "max@web.de");
// console.dir(user2);

class Admin extends User {
  constructor(parName = "", parEmail = "", parId) {
    super(parName, parEmail);
    this.Id = parId;
    this.tasks = ["User löschen", "Server rebooten", "Backups erstellen"];
  }

  // this/Lexical Scope:

  // ES5
  showTasks() {
    this.tasks.forEach(function (task) {
      // FEHLER: 'this' ist hier nicht mehr der Admin!
      // 'this.name' ist undefined, da die function ihren eigenen Context erstellt.
      console.log(`- ${this.name} muss erledigen: ${task}`);
    });
  }

  // thisArg:
  showTasksFixed() {
    this.tasks.forEach(function (task) {
      // Dank dem zweiten Argument 'this' unten, funktioniert es hier:
      console.log(`- ${this.name} muss erledigen: ${task}`);
    }, this); // <-- Hier übergeben wir den aktuellen Admin-Context
  }

  // ES6:
  showTasksModern() {
    // Die Arrow Function "erbt" das 'this' von der showTasksModern Methode.
    // 'this' bleibt also unser Admin-Objekt.
    this.tasks.forEach((task) => {
      console.log(`- ${this.name} erledigt: ${task}`);
    });
  }

  // deleteUser(user) {
  //   console.log(`Admin ${this.name} löscht ${user.name}`);
  // }

  // login() {
  //   console.log(`${this.name} hat sich eingeloggt Admin.`);
  // }
}

const admin = new Admin("Anna", "anna@web.de", 1);

admin.showTasksModern();

// console.dir(admin);
// admin.deleteUser(user2);
// admin.login();
