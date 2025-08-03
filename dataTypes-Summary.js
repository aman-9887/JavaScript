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




// ******************************************************************************************************************
// Below i will be providing the better and structured code and notes for better understanding

/**
 * ====================================================================
 * JAVASCRIPT DATA TYPES AND MEMORY MANAGEMENT - COMPREHENSIVE GUIDE
 * ====================================================================
 * 
 * This file demonstrates JavaScript's data types, variable declarations,
 * and memory management concepts including Stack and Heap allocation.
 * 
 * It covers both primitive and non-primitive data types, their characteristics,
 */

"use strict"; // Enables strict mode - treats all JS code with enhanced error checking

// ====================================================================
// SECTION 1: JAVASCRIPT DATA TYPES OVERVIEW
// ====================================================================

/**
 * JavaScript has two main categories of data types:
 * 
 * 1. PRIMITIVE DATA TYPES (Stored in Stack Memory)
 *    - Immutable values stored directly in variables
 *    - Passed by value when assigned or passed to functions
 * 
 * 2. NON-PRIMITIVE/REFERENCE DATA TYPES (Stored in Heap Memory)
 *    - Mutable objects stored in heap with references in stack
 *    - Passed by reference when assigned or passed to functions
 */

// ====================================================================
// SECTION 2: PRIMITIVE DATA TYPES
// ====================================================================

/**
 * PRIMITIVE DATA TYPES - The basic building blocks of JavaScript
 * These are immutable and stored directly in stack memory
 */

// 2.1 NUMBER - Represents both integers and floating-point numbers
let age = 25;                    // Integer
let price = 19.99;              // Float
let temperature = -10;          // Negative number
console.log("Age:", age, "Type:", typeof age);

// 2.2 STRING - Represents textual data
let firstName = "John";         // Double quotes
let lastName = 'Doe';          // Single quotes
let fullName = `${firstName} ${lastName}`; // Template literal (ES6)
console.log("Full Name:", fullName, "Type:", typeof fullName);

// 2.3 BOOLEAN - Represents true/false values
let isActive = true;
let isCompleted = false;
console.log("Is Active:", isActive, "Type:", typeof isActive);

// 2.4 NULL - Represents intentional absence of value
let data = null;               // Explicitly set to null
console.log("Data:", data, "Type:", typeof data); // Note: typeof null returns "object" (known JavaScript quirk)

// 2.5 UNDEFINED - Represents uninitialized or missing values
let undefinedVariable;         // Declared but not initialized
console.log("Undefined Variable:", undefinedVariable, "Type:", typeof undefinedVariable);

// 2.6 SYMBOL (ES6) - Represents unique identifiers
let uniqueSymbol2 = Symbol("unique");           // Creates a unique symbol
let anotherSymbol = Symbol("unique");          // Creates another unique symbol
const id2 = Symbol('123');                      // Symbol with description
const anotherId2 = Symbol('123');               // Different symbol with same description

console.log("Unique Symbol:", uniqueSymbol2, "Type:", typeof uniqueSymbol2);
console.log("Are symbols equal?", id2 === anotherId2); // false - each symbol is unique

/**
 * SYMBOL CHARACTERISTICS:
 * - Every symbol is unique, even with the same description
 * - Symbols are often used as object property keys to avoid naming conflicts
 * - They are not enumerable in for...in loops
 */

// 2.7 BIGINT (ES11) - Represents large integers beyond Number.MAX_SAFE_INTEGER
let bigIntValue2 = BigInt(12345678901234567890);    // Using BigInt() constructor
let bigIntNumber2 = 12345678901234567890n;          // Using 'n' suffix

console.log("BigInt Value:", bigIntValue2, "Type:", typeof bigIntValue2);
console.log("BigInt Number:", bigIntNumber2, "Type:", typeof bigIntNumber2);

/**
 * BIGINT CHARACTERISTICS:
 * - Can represent integers of arbitrary precision
 * - Cannot be mixed with regular numbers in operations
 * - Useful for cryptography, large ID numbers, or precise calculations
 */

// ====================================================================
// SECTION 3: NON-PRIMITIVE (REFERENCE) DATA TYPES
// ====================================================================

/**
 * NON-PRIMITIVE DATA TYPES - Complex data structures
 * These are mutable and stored in heap memory with references in stack
 */

// 3.1 ARRAY - Ordered collection of values
const superheroes = ["Captain America", "Iron Man", "Thor"];  // Array of strings
const numbers2 = [1, 2, 3, 4, 5];                            // Array of numbers
const mixedArray = [1, "hello", true, null, undefined];     // Mixed data types

console.log("Superheroes:", superheroes, "Type:", typeof superheroes);
console.log("Numbers Array:", numbers2, "Type:", typeof numbers2);

/**
 * ARRAY CHARACTERISTICS:
 * - Arrays are actually objects in JavaScript
 * - typeof array returns "object"
 * - Elements can be of any data type
 * - Zero-indexed (first element at index 0)
 */

// 3.2 OBJECT - Collection of key-value pairs
const person3 = {
    name: "Aman",              // String property
    age: 22,                   // Number property
    isLoggedIn: false,         // Boolean property
    hobbies: ["reading", "coding"], // Array property
    address: {                 // Nested object
        city: "Mumbai",
        state: "Maharashtra"
    }
};

console.log("Person Object:", person3, "Type:", typeof person3);

/**
 * OBJECT CHARACTERISTICS:
 * - Properties can be accessed using dot notation (person.name) or bracket notation (person["name"])
 * - Can contain any data type as property values
 * - Can have nested objects and arrays
 * - Properties can be added, modified, or deleted at runtime
 */

// 3.3 FUNCTION - Reusable blocks of code
// Function Declaration
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Function Expression
const calculateSum = function(a, b) {
    return a + b;
};

// Arrow Function (ES6)
const multiply = (x, y) => x * y;

console.log("Greet Function Type:", typeof greetUser);
console.log("Calculate Function Type:", typeof calculateSum);
console.log("Multiply Function Type:", typeof multiply);

/**
 * FUNCTION CHARACTERISTICS:
 * - Functions are first-class objects in JavaScript
 * - typeof function returns "function"
 * - Can be assigned to variables, passed as arguments, and returned from other functions
 * - Can have properties and methods like objects
 */

// 3.4 OTHER BUILT-IN OBJECT TYPES

// Date Object
const currentDate = new Date();
console.log("Current Date:", currentDate, "Type:", typeof currentDate);

// Regular Expression
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log("Email Pattern:", emailPattern, "Type:", typeof emailPattern);

// Map Object (ES6)
const userRoles = new Map();
userRoles.set('admin', 'Administrator');
userRoles.set('user', 'Regular User');
console.log("User Roles Map:", userRoles, "Type:", typeof userRoles);

// Set Object (ES6)
const uniqueNumbers = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log("Unique Numbers Set:", uniqueNumbers, "Type:", typeof uniqueNumbers);

// ====================================================================
// SECTION 4: VARIABLE DECLARATIONS
// ====================================================================

/**
 * VARIABLE DECLARATION KEYWORDS
 * JavaScript provides three ways to declare variables: var, let, and const
 */

// 4.1 VAR - Function-scoped or globally-scoped (legacy)
var oldStyleVariable = "I'm function-scoped";
var oldStyleVariable = "I can be redeclared"; // Redeclaration allowed

/**
 * VAR CHARACTERISTICS:
 * - Function-scoped or globally-scoped
 * - Can be redeclared and updated
 * - Hoisted to the top of function/global scope
 * - Not recommended in modern JavaScript due to scope issues
 */

// 4.2 LET - Block-scoped (ES6)
let modernVariable = "I'm block-scoped";
// let modernVariable = "Error"; // Would cause SyntaxError: Identifier already declared
modernVariable = "I can be updated"; // Update allowed

/**
 * LET CHARACTERISTICS:
 * - Block-scoped (limited to nearest enclosing block)
 * - Cannot be redeclared in same scope
 * - Can be updated
 * - Hoisted but not initialized (Temporal Dead Zone)
 */

// 4.3 CONST - Block-scoped constant (ES6)
const constantValue = "I cannot be changed";
// constantValue = "Error"; // Would cause TypeError: Assignment to constant variable
// const anotherConstant; // Would cause SyntaxError: Missing initializer

/**
 * CONST CHARACTERISTICS:
 * - Block-scoped
 * - Cannot be redeclared or reassigned
 * - Must be initialized at declaration
 * - For objects/arrays, the reference is constant but contents can be modified
 */

// Example of const with objects
const userProfile = {
    username: "john_doe",
    email: "john@example.com"
};

// This is allowed - modifying object properties
userProfile.email = "john.doe@example.com";
userProfile.age = 30;

console.log("Modified User Profile:", userProfile);

// ====================================================================
// SECTION 5: MEMORY MANAGEMENT - STACK vs HEAP
// ====================================================================

/**
 * MEMORY ALLOCATION IN JAVASCRIPT
 * 
 * JavaScript uses two types of memory allocation:
 * 1. STACK MEMORY - For primitive data types and function calls
 * 2. HEAP MEMORY - For non-primitive data types (objects, arrays, functions)
 */

console.log("\n=== MEMORY MANAGEMENT DEMONSTRATION ===");

// 5.1 STACK MEMORY - Primitive Data Types
/**
 * STACK MEMORY CHARACTERISTICS:
 * - LIFO (Last In, First Out) structure
 * - Fast allocation and deallocation
 * - Fixed size for each data type
 * - Stores actual values of primitive types
 * - Automatic memory management
 */

console.log("\n--- STACK MEMORY (Primitives) ---");

// Primitive assignment creates a copy of the value
let originalName = "Aman";
let copiedName = originalName;    // Creates a copy in stack memory

// Modifying the copy doesn't affect the original
copiedName = "Sonu";

console.log("Original Name:", originalName);  // "Aman" - unchanged
console.log("Copied Name:", copiedName);      // "Sonu" - modified copy

/**
 * EXPLANATION:
 * - originalName stores "Aman" directly in stack memory
 * - copiedName gets a separate copy of "Aman" in stack memory
 * - Changing copiedName doesn't affect originalName because they are separate values
 */

// 5.2 HEAP MEMORY - Non-Primitive Data Types
/**
 * HEAP MEMORY CHARACTERISTICS:
 * - Dynamic memory allocation
 * - Can grow and shrink in size
 * - Slower allocation/deallocation compared to stack
 * - Stores objects, arrays, and functions
 * - Variable in stack holds reference (memory address) to heap location
 */

console.log("\n--- HEAP MEMORY (Objects) ---");

// Object assignment creates a reference to the same object in heap
let originalUser = {
    email: "user@google.com",
    upi: "user@upi"
};

let referencedUser = originalUser;  // Creates a reference to the same object in heap

// Modifying through the reference affects the original object
referencedUser.email = "user2@gmail.com";

console.log("Original User Email:", originalUser.email);     // "user2@gmail.com" - modified
console.log("Referenced User Email:", referencedUser.email); // "user2@gmail.com" - same object

/**
 * EXPLANATION:
 * - originalUser variable stores a reference (memory address) to the object in heap
 * - referencedUser gets a copy of the same reference (not the object itself)
 * - Both variables point to the same object in heap memory
 * - Modifying the object through either reference affects the same object
 */

// 5.3 DEMONSTRATING THE DIFFERENCE WITH ARRAYS
console.log("\n--- ARRAY REFERENCE BEHAVIOR ---");

let originalArray = [1, 2, 3, 4, 5];
let referencedArray = originalArray;  // Reference to same array in heap
let copiedArray = [...originalArray]; // Spread operator creates a new array (shallow copy)

// Modifying through reference affects original
referencedArray.push(6);

// Modifying copied array doesn't affect original
copiedArray.push(7);

console.log("Original Array:", originalArray);    // [1, 2, 3, 4, 5, 6] - affected by reference
console.log("Referenced Array:", referencedArray); // [1, 2, 3, 4, 5, 6] - same array
console.log("Copied Array:", copiedArray);        // [1, 2, 3, 4, 5, 7] - independent copy

// ====================================================================
// SECTION 6: TYPE CHECKING AND CONVERSION
// ====================================================================

console.log("\n=== TYPE CHECKING EXAMPLES ===");

/**
 * TYPEOF OPERATOR - Returns string indicating the type of operand
 */

// Primitive types
console.log("typeof 42:", typeof 42);                    // "number"
console.log("typeof 'hello':", typeof 'hello');          // "string"
console.log("typeof true:", typeof true);                // "boolean"
console.log("typeof undefined:", typeof undefined);       // "undefined"
console.log("typeof null:", typeof null);                // "object" (JavaScript quirk)
console.log("typeof Symbol():", typeof Symbol());        // "symbol"
console.log("typeof 123n:", typeof 123n);               // "bigint"

// Non-primitive types
console.log("typeof []:", typeof []);                    // "object"
console.log("typeof {}:", typeof {});                   // "object"
console.log("typeof function(){}:", typeof function(){}); // "function"
console.log("typeof new Date():", typeof new Date());    // "object"

/**
 * ADVANCED TYPE CHECKING
 */

// More specific type checking for arrays
console.log("Array.isArray([]):", Array.isArray([]));           // true
console.log("Array.isArray({}):", Array.isArray({}));           // false

// Constructor checking
console.log("new Date() instanceof Date:", new Date() instanceof Date); // true
console.log("[] instanceof Array:", [] instanceof Array);               // true

// ====================================================================
// SECTION 7: BEST PRACTICES AND PERFORMANCE TIPS
// ====================================================================

console.log("\n=== BEST PRACTICES ===");

/**
 * MEMORY MANAGEMENT BEST PRACTICES:
 * 
 * 1. Use const by default, let when reassignment is needed, avoid var
 * 2. Be aware of reference vs value semantics
 * 3. Use object destructuring and spread operator for shallow copies
 * 4. Avoid creating unnecessary object references
 * 5. Clean up event listeners and intervals to prevent memory leaks
 */

// Example of efficient object copying
const sourceObject = { name: "John", age: 30, city: "New York" };

// Shallow copy using spread operator
const shallowCopy = { ...sourceObject };

// Shallow copy using Object.assign()
const anotherCopy = Object.assign({}, sourceObject);

// Deep copy for nested objects (simple approach)
const deepCopy = JSON.parse(JSON.stringify(sourceObject));

console.log("Source Object:", sourceObject);
console.log("Shallow Copy:", shallowCopy);
console.log("Deep Copy:", deepCopy);

/**
 * PERFORMANCE CONSIDERATIONS:
 * 
 * - Stack operations are faster than heap operations
 * - Primitive operations are generally faster than object operations
 * - Avoid frequent object creation in loops
 * - Use primitive types when possible for better performance
 * - Be mindful of memory usage with large objects and arrays
 */

// ====================================================================
// SECTION 8: COMMON PITFALLS AND DEBUGGING
// ====================================================================

console.log("\n=== COMMON PITFALLS ===");

/**
 * COMMON MISTAKES AND HOW TO AVOID THEM:
 */

// 1. Null vs Undefined confusion
let explicitNull = null;           // Intentionally empty
let implicitUndefined;            // Accidentally not initialized

console.log("Null value:", explicitNull);
console.log("Undefined value:", implicitUndefined);

// 2. Type coercion surprises
console.log("'5' + 3:", '5' + 3);         // "53" (string concatenation)
console.log("'5' - 3:", '5' - 3);         // 2 (numeric subtraction)
console.log("true + 1:", true + 1);       // 2 (boolean to number)

// 3. Object reference confusion
const obj1 = { value: 10 };
const obj2 = { value: 10 };
const obj3 = obj1;

console.log("obj1 === obj2:", obj1 === obj2); // false (different objects)
console.log("obj1 === obj3:", obj1 === obj3); // true (same reference)

/**
 * DEBUGGING TIPS:
 * 
 * 1. Use console.log() with typeof to understand data types
 * 2. Use debugger statements to pause execution
 * 3. Check for null/undefined before accessing object properties
 * 4. Use strict mode to catch common errors
 * 5. Understand the difference between == and === operators
 */

// ====================================================================
// END OF COMPREHENSIVE JAVASCRIPT DATA TYPES GUIDE
// ====================================================================

console.log("\n=== GUIDE COMPLETED ===");
console.log("This comprehensive guide covers JavaScript data types and memory management.");
console.log("Practice these concepts to build a strong foundation in JavaScript!");