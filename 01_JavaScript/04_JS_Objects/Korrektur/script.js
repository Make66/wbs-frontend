// ==========================================
// OBJEKTLITERALE/OBJECT LITERALS
// ==========================================

//1. Create an object called book using object literal syntax.

//2. The book object should have the following properties:
// title: a string representing the title of the book.
// author: a string representing the author of the book.
// pages: a number representing the total pages in the book.
// isRead: a boolean indicating if the book has been read or not.

//3. Add a method named summary to the book object.
// This method should return a string summarizing the book details in the format:
// "Title: [title], Author: [author], Pages: [pages], Read: [Yes/No]".

const book = {
  title: "Der Herr der Ringe: Die zwei Türme",
  author: "J.R.R. Tolkien",
  pages: 448,
  isRead: true,
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${
      this.pages
    }, Read: ${this.isRead ? "Yes" : "No"}`;
  },
};

console.log(book.summary());

// ==========================================
// DESTRUCTURING
// ==========================================

// Initial array
const fruits = ["apple", "banana", "cherry", "date"];

// Task 1: Simple Array Destructuring
const [fruit1, fruit2] = fruits;
console.log(fruit1);
console.log(fruit2);

// Task 2: Skipping Elements in Array Destructuring
// const [fruit1, , fruit3] = fruits;
// console.log(fruit1);
// console.log(fruit3);

// ------------------------------------------------

// Initial object
const person = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

// Task 3: Simple Object Destructuring
const { name, age } = person;
// console.log(name);
// console.log(age);

// Task 4: Nested Object Destructuring
const {
  address: { city },
} = person;

// Alternative:
// const { city } = person.address;

console.log(city);

// Initial function
// function displayPerson(person) {
//   console.log(`Name: ${person.name}, Age: ${person.age}`);
// }

// Task 5: Destructuring in Function Parameters
function displayPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayPerson(person);
