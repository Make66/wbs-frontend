// ==========================================
// Task 1: ForEach
// ==========================================
console.log("\nforEach:");

//1. Initialize an Array of Numbers:
const numbers = [1, 2, 3, 4, 5];

//2. Use the forEach Method to Print Each Number:
// Use the forEach method to iterate over numbers and print each number to the console.
numbers.forEach((number) => console.log("Number: ", number));

//3. Use the forEach Method to Calculate the Sum of the Numbers:
// Initialize a variable sum to 0.
let sum = 0;

// Use the forEach method to iterate over numbers, adding each number to sum.
numbers.forEach((number) => (sum += number));

// Print the final value of sum to the console.
console.log("\nSum: ", sum);

//4. Use the forEach Method to Create a New Array with Squared Values:
// Create an empty array called squaredNumbers.
const squaredNumbers = [];

// Use the forEach method to iterate over numbers,
// squaring each number and adding the squared value to squaredNumbers.
numbers.forEach((number) => squaredNumbers.push(number * number));

// Print the squaredNumbers array to the console.
console.log("\nSquared Numbers: ", squaredNumbers);

// ==========================================
// Task 2: Map
// ==========================================
console.log("\nmap:");

//1. Initialize an Array of Numbers:
const numbers2 = [1, 2, 3, 4, 5];

//2. Use the map Method to Create a New Array with Doubled Values:
// Use the map method to create a new array called
// doubledNumbers where each value is double the corresponding value in numbers.
const doubledNumbers = numbers2.map((number) => number * 2);

// Print the doubledNumbers array to the console.
console.log("Doubled Numbers: ", doubledNumbers);

//3. Use the map Method to Create a New Array of Strings:
// Use the map method to create a new array called stringNumbers where each value
// is the corresponding number in numbers converted to a string with the
// prefix "Number: ".
const stringNumbers = numbers2.map((number) => `Number: ${number}`);

// Print the stringNumbers array to the console.
console.log("\nString Numbers: ", stringNumbers);

//4. Use the map Method to Create a New Array of Objects:
// Use the map method to create a new array called numberObjects
// where each value is an object with the properties original
// (the original number) and squared (the square of the number).
const numberObjects = numbers2.map((number) => ({
  original: number,
  squared: number * number,
}));

// Print the numberObjects array to the console.
console.log("\nNumber Objects: ", numberObjects);

// ==========================================
// Task 3: Find
// ==========================================
console.log("\nfind:");

//1. Initialize an Array of Numbers:
const numbers3 = [10, 20, 30, 40, 50];

//2. Use the find Method to Locate a Number Greater Than 25:
// Use the find method to locate the first number in numbers that is
//  greater than 25.
const numberGreaterThan25 = numbers3.find((number) => number > 25);

// Print the found number to the console.
console.log("Found Number: ", numberGreaterThan25);

//3. Initialize an Array of Objects:
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

//4. Use the find Method to Locate a Person Named "Charlie":
// Use the find method to locate the first object in people where
// the name property is "Charlie".
const personNameCharlie = people.find((person) => person.name === "Charlie");

// Print the found object to the console.
console.log("\nCharlie: ", personNameCharlie);

// ==========================================
// Task 4: Filter
// ==========================================
console.log("\nfilter:");

//1. Initialize an Array of Numbers:
const numbers4 = [5, 10, 15, 20, 25, 30];

//2. Use the filter Method to Create a New Array with Numbers Greater Than 15:
// Use the filter method to create a new array called numbersGreaterThan15
// containing all numbers from numbers that are greater than 15.
const numbersGreaterThan15 = numbers4.filter((number) => number > 15);

// Print the numbersGreaterThan15 array to the console.
console.log("Numbers Greater Than 15: ", numbersGreaterThan15);

//3. Initialize an Array of Objects:
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 88 },
  { name: "Eve", grade: 95 },
];

//4. Use the filter Method to Create a New Array with Students Who Scored Above 80:
// Use the filter method to create a new array called studentsAbove80
// containing all students from students who scored above 80.
const studentsAbove80 = students.filter((student) => student.grade > 80);

// Print the studentsAbove80 array to the console.
console.log("\nStudents Above 80: ", studentsAbove80);

// ==========================================
// Task 5: Some and Every
// ==========================================
console.log("\nsome and every:");

//1. Initialize an Array of Numbers:
const numbers5 = [4, 8, 15, 16, 23, 42];

//2. Use the some Method to Check for Numbers Greater Than 20:
// Use the some method to check if there are any numbers in numbers
// that are greater than 20.
const isAnyNumberGreaterThan20 = numbers5.some((number) => number > 20);

// Print the result to the console (should be true).
console.log("Is Any Number Greater Than 20: ", isAnyNumberGreaterThan20);

//3. Use the every Method to Check for Numbers Less Than 50:
// Use the every method to check if all numbers in numbers are less
// than 50.
const allNumbersLessThan50 = numbers5.every((number) => number < 50);

// Print the result to the console (should be true).
console.log("\nAll Numbers Less Than 50: ", allNumbersLessThan50);

//4. Initialize an Array of Objects:
const students2 = [
  { name: "Alice", age: 25, passed: true },
  { name: "Bob", age: 22, passed: false },
  { name: "Charlie", age: 27, passed: true },
  { name: "David", age: 20, passed: true },
];

//5. Use the some Method to Check if Any Student Failed:
// Use the some method to check if there are any students in
// students who have passed set to false.
const ifAnyFailed = students2.some((student) => !student.passed);

// Print the result to the console (should be true).
console.log("\nIf Any Failed: ", ifAnyFailed);

//6. Use the every Method to Check if All Students are Older Than 18:
// Use the every method to check if all students in students are
// older than 18.
const allOlderThan18 = students2.every((student) => student.age > 18);

// Print the result to the console (should be true).
console.log("\nIf All Older Than 18: ", allOlderThan18);
