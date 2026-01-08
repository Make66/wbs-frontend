// ==========================================
// Initialisation
// ==========================================

console.log("--- Initialisation ---");

// Step 1: Initialize an array with different types of values
const myArray = [42, "Hello World!", true, 3.14, "JavaScript"];

// Step 2: Print the array to the console
console.log(myArray);

// Step 3: Access and print each element of the array
// console.log(myArray[0]); // Prints: 42
// console.log(myArray[1]); // Prints: Hello, world!
// console.log(myArray[2]); // Prints: true
// console.log(myArray[3]); // Prints: 3.14
// console.log(myArray[4]); // Prints: JavaScript

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Step 4: Modify the second element of the array
myArray[1] = "Changed Value";

// Print the modified array
console.log(myArray);

// ==========================================
// Push, pop, shift and unshift
// ==========================================

console.log("\n --- Push, pop, shift & unshift ---");

// Step 1: Initialize an array with initial values
const myArray2 = [1, 2, 3, 4, 5];

// Step 2: Add elements to the end of the array using .push
myArray2.push(6, 7);

// Print the array after using .push
console.log(myArray2); // Prints: [1, 2, 3, 4, 5, 6, 7]

// Step 3: Remove the last element using .pop
myArray2.pop();

// Print the array after using .pop
console.log(myArray2); // Prints: [1, 2, 3, 4, 5, 6]

// Step 4: Remove the first element using .shift
myArray2.shift();

// Print the array after using .shift
console.log(myArray2); // Prints: [2, 3, 4, 5, 6]

// Step 5: Add elements to the beginning of the array using .unshift
myArray2.unshift(0, 1);

// Print the array after using .unshift
console.log(myArray2); // Prints: [0, 1, 2, 3, 4, 5, 6]

// ==========================================
// Reversing
// ==========================================

console.log("\n --- Reversing ---");

// Array 1: Use reverse() method
const array1 = [1, 2, 3, 4, 5];
console.log("Original array1:", array1);

// Reverse array1 in place and print the result
array1.reverse();
console.log("Reversed array1:", array1);

// Array 2: Use toReversed() method
const array2 = ["a", "b", "c", "d", "e"];
console.log("Original array2:", array2);

// Create a reversed copy of array2 and print both arrays
const reversedArray2 = array2.toReversed();
console.log("Reversed copy of array2:", reversedArray2);
console.log("Original array2 after toReversed:", array2);

// ==========================================
// Splicing
// ==========================================

console.log("\n --- Splicing ---");

// Array 3: Use splice() method
const array3 = [10, 20, 30, 40, 50];
console.log("Original array3:", array3);

// Modify array3 in place by removing 1 element at index 2 and adding 35, 36
array3.splice(2, 1, 35, 36);
console.log("Modified array3:", array3);

// Array 4: Use toSpliced() method
const array4 = ["x", "y", "z"];
console.log("Original array4:", array4);

// Create a modified copy of array4 by removing 1 element at index 1 and adding 'a', 'b'
const modifiedArray4 = array4.toSpliced(1, 1, "a", "b");
console.log("Modified copy of array4:", modifiedArray4);
console.log("Original array4 after toSpliced:", array4);

// ==========================================
// Slicing
// ==========================================

console.log("\n --- Slicing ---");

const newArray = [1, 2, 3, 4, 5];
console.log("Original newArray:", newArray);

const slicedArray1 = newArray.slice(1, 4); // From index 1 to 3
console.log("Sliced portion (index 1 to 3):", slicedArray1);

const slicedArray2 = newArray.slice(3); // From index 3 to the end
console.log("Sliced portion (from index 3 to end):", slicedArray2);

const slicedArray3 = newArray.slice(-4); // The last 4 elements
console.log("Sliced portion (last 4 elements):", slicedArray3);

console.log("Original array after slicing:", newArray);

// ==========================================
// Joining
// ==========================================

console.log("\n --- Joining ---");

const array = ["apple", "banana", "cherry", "date"];

// Create different strings by joining the array elements with various delimiters
const joinedWithComma = array.join(); // Default delimiter (comma)
console.log("Joined with comma:", joinedWithComma);

const joinedWithDash = array.join("-"); // Using dash as delimiter
console.log("Joined with dash:", joinedWithDash);

const joinedWithSpace = array.join(" "); // Using space as delimiter
console.log("Joined with space:", joinedWithSpace);

const joinedWithAnd = array.join(" and "); // Using ' and ' as delimiter
console.log("Joined with 'and':", joinedWithAnd);

const joinedWithoutDelimiter = array.join(""); // Without any delimiter
console.log("Joined without delimiter:", joinedWithoutDelimiter);

// ==========================================
// Loops/Schleifen
// ==========================================

console.log("\n --- Loops ---");

// Step 1: Initialize an array of numbers
const numberArray = [10, 20, 30, 40, 50];

// Step 2: Iterate over the array with a for loop
for (let i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}

console.log("--------------------");

// Step 3: Iterate over the array with a for...of loop
for (const number of numberArray) {
  console.log(number);
}

// Step 4: Initialize an array of objects
const objectArray = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

console.log("--------------------");

// Step 5: Iterate over the array of objects with a for loop
for (let i = 0; i < objectArray.length; i++) {
  console.log(`Name: ${objectArray[i].name}, Age: ${objectArray[i].age}`);
}

console.log("--------------------");

// Step 6: Iterate over the array of objects with a for...of loop
for (const obj of objectArray) {
  console.log(`Name: ${obj.name}, Age: ${obj.age}`);
}
