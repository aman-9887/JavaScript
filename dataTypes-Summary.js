// Primitive data types in JavaScript are the basic building blocks of data manipulation.
// They include:
// - Number
// - String
// - Boolean
// - Null
// - Undefined
// - Symbol (ES6)
// - BigInt (ES11)

// Non-primitive data types or Reference types are more complex and can hold collections of values or more complex entities.
// They include:
// - Object (includes arrays, functions, etc.)
// - Array
// - Function
// - Date
// - RegExp
// - Map
// - Set
// - WeakMap
// - WeakSet
// - Error
// - JSON



// In JavaScript, variables can be declared using three keywords: var, let, and const.
// - var: Function-scoped or globally scoped, can be re-declared and updated.
// - let: Block-scoped, can be updated but not re-declared in the same scope.
// - const: Block-scoped, cannot be updated or re-declared, must be initialized.
"use strict"; // treat all JS code as new version


// JavaScript has dynamic typing, meaning variables can hold values of any type and can change types at runtime.
// This flexibility allows for easy manipulation of data but requires careful handling to avoid type-related errors.

// How to define Symbol and BigInt in JavaScript:
let uniqueSymbol = Symbol("unique");
let bigIntValue = BigInt(12345678901234567890);

// Example of using Symbol and BigInt:
console.log(uniqueSymbol); // Symbol(unique)
console.log(bigIntValue); // 12345678901234567890n

const id = Symbol('123'); // Symbol is unique and immutable
const anotherId = Symbol('123'); // Even though the description is the same, these are different symbols
console.log(id === anotherId); // false (different symbols)

// adding 'n' at the end of a number indicates it's a BigInt
let bigIntNumber = 12345678901234567890n; // BigInt representation


// Reference (non-primitive) data types in JavaScript can hold collections of values or more complex entities.
// Array, Objects, Functions

const hero = ["Captain America", "Iron Man", "Thor"]; // This is an array of strings representing superheroes
const numbers = [1, 2, 3, 4, 5]; // This is an array holding a list of numbers
const person = {
    name: "Aman",
    age: 22,
    isLoggedIn: false
}; // This is an object with key-value pairs 
// Functions are also considered objects in JavaScript
const myFunction = function() {
    console.log("This is a function."); 
}

function greet() {
    console.log("Hello, World!");
} // This is a function that prints a greeting message

// How to find the type of a variable in JavaScript:
console.log(typeof hero); // "object" (arrays are a type of object in JavaScript)
console.log(typeof numbers); // "object" (arrays are a type of object in JavaScript)
console.log(typeof person); // "object" (objects are a type of object in JavaScript)
console.log(typeof myFunction); // "function" (functions are a type of object in JavaScript)
console.log(typeof greet); // "function" (functions are a type of object in JavaScript)
console.log(typeof bigIntValue); // "bigint" (BigInt is a separate type in JavaScript)

// Type of variable undefined is "undefined"
console.log(typeof undefined); // "undefined"
// Type of variable null is "object" (this is a known quirk in JavaScript)
console.log(typeof null); // "object"



// ******************************************************************************************************************

// Stack(Primitive) and Heap(Non-primitive) are two types of memory allocation in JavaScript.