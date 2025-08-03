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

// Stack is used for static memory allocation and stores primitive data types.
// It is a last-in-first-out (LIFO) structure where variables are stored in a fixed size.
// When a function is called, a new stack frame is created for that function, and when the function returns, the stack frame is removed.
// Example of stack memory allocation:
let a = 10; // 'a' is stored in stack memory
let b = 20; // 'b' is also stored in stack memory
let sum = a + b; // 'sum' is calculated and stored in stack memory

// Heap is used for dynamic memory allocation and stores non-primitive data types like objects and arrays.
// It is a more flexible memory structure where objects can grow and shrink in size.
// When an object is created, it is stored in heap memory, and a reference to that object is stored in stack memory.
// Example of heap memory allocation:
let person1 = {
    name: "John",
    age: 30
}; // 'person' is stored in heap memory, and a reference to it is stored in stack memory
// When we create a new object or array, it is stored in heap memory, and the variable holds a reference to that memory location.
let numbersArray = [1, 2, 3, 4, 5]; // 'numbersArray' is stored in heap memory, and a reference to it is stored in stack memory.
// When we manipulate the object or array, we are working with the reference in stack memory, but the actual data is in heap memory.
// This allows for more complex data structures and dynamic memory management in JavaScript.
// Understanding the difference between stack and heap memory is crucial for optimizing performance and managing memory effectively in JavaScript applications.
// In summary, JavaScript uses stack memory for primitive data types and function calls, while heap memory is used for non-primitive data types like objects and arrays.
// This distinction is important for understanding how memory is managed in JavaScript and how it affects performance and data manipulation.


let myName= "Aman";
let anothername= myName; // anothername holds a reference to the same string in stack memory
anothername= "Sonu";
console.log(anothername); // "Sonu" (anothername is updated, but myName remains "Aman")
console.log(myName); // "Aman" (myName is unchanged)


let user = {
    email: "user@google.com",
    upi: "user@upi"
}; // user is stored in heap memory, and a reference to it is stored in stack memory
let user2 = user; // user2 holds a reference to the same object in heap memory
user2.email = "user2@gmail.com"; // user2 is updated, which also updates the original object in heap memory
console.log(user.email); // "user2@gmail.com"
console.log(user2.email); // "user2@gmail.com"

