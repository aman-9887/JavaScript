"use strict"; // treat all JS code as new version

// alert("hello") // we are using NodeJs not browser

console.log(3 + 3); // code readability should be high
console.log("Aman");

let name1 = "Aman"; // string dataTypes
let age1 = 22; // int dataTypes
let isLoggedin = false; // boolean dataTypes

//PRIMITIVE DATATYPES
// number = 2 to the power 53
// bigint = for largd numbers
// string = "assembly of numbers"
// boolean = true or false
// null = stand alone value (type = object)
// undefined = kindda placeholder for a value which is not defined yet (type = undefined)
// symbol = uniqueness

// object

console.log(typeof undefined);
console.log(typeof null);


// ***********************************************************************************************************
// *************************** Detailed and better explanation ***************************

/**
 * JAVASCRIPT FUNDAMENTALS: DATA TYPES AND STRICT MODE
 * ===================================================
 * 
 * This code demonstrates:
 * 1. Strict mode usage and benefits
 * 2. Basic JavaScript operations
 * 3. Variable declarations and assignments
 * 4. Primitive data types in detail
 * 5. The typeof operator and its quirks
 * 6. Best practices for code organization
 */

// =============================================================================
// SECTION 1: STRICT MODE DECLARATION
// =============================================================================

/**
 * STRICT MODE EXPLAINED:
 * 
 * "use strict" is a directive that enables strict mode in JavaScript.
 * It was introduced in ECMAScript 5 (ES5) to opt into a restricted variant of JavaScript.
 * 
 * BENEFITS OF STRICT MODE:
 * - Catches common coding mistakes and throws errors
 * - Prevents use of undeclared variables
 * - Disallows duplicate parameter names
 * - Makes debugging easier by eliminating silent errors
 * - Improves performance in some JavaScript engines
 * - Prepares code for future JavaScript versions
 */
"use strict"; // Enable strict mode for this entire script

console.log("✅ Strict mode is enabled - code will follow modern JavaScript standards");

// =============================================================================
// SECTION 2: ENVIRONMENT CONSIDERATIONS
// =============================================================================

/**
 * EXECUTION ENVIRONMENT NOTE:
 * 
 * alert() is a browser-specific function that creates popup dialogs.
 * In Node.js environment, alert() is not available because:
 * - Node.js runs server-side (no browser window)
 * - No DOM (Document Object Model) available
 * - Different global objects (global vs window)
 * 
 * For cross-environment compatibility, use console.log() instead.
 */

// alert("hello"); // ❌ This would cause ReferenceError in Node.js
console.log("hello"); // ✅ Works in both browser and Node.js

console.log("🌐 This code runs in Node.js environment, not browser");

// =============================================================================
// SECTION 3: BASIC OPERATIONS AND CODE READABILITY
// =============================================================================

/**
 * MATHEMATICAL OPERATIONS:
 * JavaScript supports standard arithmetic operations.
 * Good code readability practices:
 * - Use meaningful variable names
 * - Add appropriate spacing around operators
 * - Include comments for complex logic
 */

console.log("\n" + "=".repeat(50));
console.log("BASIC MATHEMATICAL OPERATIONS");
console.log("=".repeat(50));

// Simple addition operation
console.log(3 + 3); // Output: 6
console.log("Explanation: Basic arithmetic - 3 + 3 equals 6");

// Demonstrating code readability with proper spacing
let firstNumber = 10;
let secondNumber = 5;
let result = firstNumber + secondNumber; // Much more readable than: let result=firstNumber+secondNumber;

console.log(`${firstNumber} + ${secondNumber} = ${result}`);
console.log("💡 Notice: Proper spacing and meaningful variable names improve readability");

// =============================================================================
// SECTION 4: VARIABLE DECLARATIONS AND ASSIGNMENTS
// =============================================================================

console.log("\n" + "=".repeat(50));
console.log("VARIABLE DECLARATIONS AND DATA TYPES");
console.log("=".repeat(50));

/**
 * VARIABLE DECLARATION KEYWORDS:
 * 
 * let: Block-scoped, can be reassigned, cannot be re-declared in same scope
 * const: Block-scoped, cannot be reassigned, cannot be re-declared
 * var: Function-scoped, can be reassigned and re-declared (avoid in modern JS)
 */

// String data type - sequence of characters
let name = "Aman";
console.log("Name:", name);
console.log("Type of name:", typeof name);
console.log("Explanation: Strings store text data, enclosed in quotes");

// Number data type - both integers and floating-point numbers
let age = 22;
console.log("Age:", age);
console.log("Type of age:", typeof age);
console.log("Explanation: JavaScript has only one number type for all numeric values");

// Boolean data type - true or false values
let isLoggedIn = false; // Fixed typo: isLoggedin -> isLoggedIn (camelCase convention)
console.log("Is logged in:", isLoggedIn);
console.log("Type of isLoggedIn:", typeof isLoggedIn);
console.log("Explanation: Booleans represent logical values - true or false");

// =============================================================================
// SECTION 5: PRIMITIVE DATA TYPES IN DETAIL
// =============================================================================

console.log("\n" + "=".repeat(50));
console.log("PRIMITIVE DATA TYPES - COMPREHENSIVE OVERVIEW");
console.log("=".repeat(50));

/**
 * JAVASCRIPT PRIMITIVE DATA TYPES:
 * 
 * Primitives are immutable data types that are stored by value.
 * There are 7 primitive types in modern JavaScript:
 */

// 1. NUMBER
console.log("\n📊 NUMBER DATA TYPE:");
let regularNumber = 42;
let floatingNumber = 3.14159;
let scientificNotation = 1.23e6; // 1.23 * 10^6 = 1,230,000

console.log("Regular number:", regularNumber, "| Type:", typeof regularNumber);
console.log("Floating number:", floatingNumber, "| Type:", typeof floatingNumber);
console.log("Scientific notation:", scientificNotation, "| Type:", typeof scientificNotation);
console.log("Number range: -(2^53 - 1) to (2^53 - 1)");
console.log("Max safe integer:", Number.MAX_SAFE_INTEGER);
console.log("Min safe integer:", Number.MIN_SAFE_INTEGER);

// 2. BIGINT
console.log("\n🔢 BIGINT DATA TYPE:");
let bigIntNumber = 1234567890123456789012345678901234567890n; // Note the 'n' suffix
let anotherBigInt = BigInt("9007199254740992"); // Alternative syntax

console.log("BigInt number:", bigIntNumber, "| Type:", typeof bigIntNumber);
console.log("Another BigInt:", anotherBigInt, "| Type:", typeof anotherBigInt);
console.log("Purpose: For integers larger than Number.MAX_SAFE_INTEGER");

// 3. STRING
console.log("\n📝 STRING DATA TYPE:");
let singleQuoteString = 'Hello World';
let doubleQuoteString = "Hello World";
let templateLiteral = `Hello ${name}, you are ${age} years old!`;

console.log("Single quotes:", singleQuoteString, "| Type:", typeof singleQuoteString);
console.log("Double quotes:", doubleQuoteString, "| Type:", typeof doubleQuoteString);
console.log("Template literal:", templateLiteral, "| Type:", typeof templateLiteral);
console.log("Purpose: Store and manipulate text data");

// 4. BOOLEAN
console.log("\n✅ BOOLEAN DATA TYPE:");
let trueValue = true;
let falseValue = false;
let booleanFromComparison = (5 > 3);

console.log("True value:", trueValue, "| Type:", typeof trueValue);
console.log("False value:", falseValue, "| Type:", typeof falseValue);
console.log("From comparison:", booleanFromComparison, "| Type:", typeof booleanFromComparison);
console.log("Purpose: Represent logical true/false conditions");

// 5. NULL
console.log("\n❌ NULL DATA TYPE:");
let nullValue = null;

console.log("Null value:", nullValue, "| Type:", typeof nullValue);
console.log("⚠️  IMPORTANT: typeof null returns 'object' - this is a known JavaScript bug!");
console.log("Purpose: Represents intentional absence of any object value");
console.log("Use case: Explicitly set when you want to indicate 'no value'");

// 6. UNDEFINED
console.log("\n❓ UNDEFINED DATA TYPE:");
let undefinedVariable;
let explicitUndefined = undefined;

console.log("Undefined variable:", undefinedVariable, "| Type:", typeof undefinedVariable);
console.log("Explicit undefined:", explicitUndefined, "| Type:", typeof explicitUndefined);
console.log("Purpose: Indicates a variable has been declared but not assigned a value");
console.log("Auto-assigned: When variables are declared but not initialized");

// 7. SYMBOL
console.log("\n🔐 SYMBOL DATA TYPE:");
let symbol1 = Symbol();
let symbol2 = Symbol("description");
let symbol3 = Symbol("description"); // Different from symbol2, even with same description

console.log("Symbol 1:", symbol1, "| Type:", typeof symbol1);
console.log("Symbol 2:", symbol2, "| Type:", typeof symbol2);
console.log("Symbol 3:", symbol3, "| Type:", typeof symbol3);
console.log("Are symbol2 and symbol3 equal?", symbol2 === symbol3); // false
console.log("Purpose: Create unique identifiers, often used as object property keys");

// =============================================================================
// SECTION 6: NON-PRIMITIVE DATA TYPE
// =============================================================================

console.log("\n" + "=".repeat(50));
console.log("NON-PRIMITIVE (REFERENCE) DATA TYPES");
console.log("=".repeat(50));

/**
 * OBJECT DATA TYPE:
 * 
 * Objects are non-primitive, reference types that can store multiple values
 * and more complex entities. All non-primitive types are objects.
 */

console.log("\n📦 OBJECT DATA TYPE:");

// Basic object literal
let person = {
    firstName: "Aman",
    lastName: "Kumar",
    age: 22,
    isStudent: true,
    hobbies: ["coding", "reading", "gaming"],
    address: {
        city: "New Delhi",
        country: "India"
    }
};

console.log("Person object:", person);
console.log("Type of person:", typeof person);

// Array (special type of object)
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers array:", numbers);
console.log("Type of numbers:", typeof numbers); // Returns "object"
console.log("Is array?", Array.isArray(numbers)); // Proper way to check for arrays

// Function (also a type of object)
function greet(name) {
    return `Hello, ${name}!`;
}

console.log("Greet function:", greet);
console.log("Type of greet:", typeof greet); // Returns "function"
console.log("Function result:", greet("Aman"));

// =============================================================================
// SECTION 7: TYPEOF OPERATOR DEMONSTRATIONS
// =============================================================================

console.log("\n" + "=".repeat(50));
console.log("TYPEOF OPERATOR - COMPLETE ANALYSIS");
console.log("=".repeat(50));

/**
 * THE typeof OPERATOR:
 * 
 * Returns a string indicating the type of the operand.
 * Has some quirks and special cases to be aware of.
 */

console.log("\n🔍 COMPREHENSIVE typeof RESULTS:");

// All primitive types
console.log("typeof undefined:", typeof undefined);     // "undefined"
console.log("typeof null:", typeof null);               // "object" (bug!)
console.log("typeof true:", typeof true);               // "boolean"
console.log("typeof 42:", typeof 42);                   // "number"
console.log("typeof 'hello':", typeof 'hello');         // "string"
console.log("typeof Symbol():", typeof Symbol());       // "symbol"
console.log("typeof 123n:", typeof 123n);               // "bigint"

// Non-primitive types
console.log("typeof {}:", typeof {});                   // "object"
console.log("typeof []:", typeof []);                   // "object"
console.log("typeof function(){}:", typeof function(){}); // "function"
console.log("typeof new Date():", typeof new Date());   // "object"
console.log("typeof /regex/:", typeof /regex/);         // "object"

// =============================================================================
// SECTION 8: PRACTICAL EXAMPLES AND BEST PRACTICES
// =============================================================================

console.log("\n" + "=".repeat(50));
console.log("PRACTICAL EXAMPLES AND BEST PRACTICES");
console.log("=".repeat(50));

/**
 * REAL-WORLD EXAMPLES:
 * Demonstrating how to use these concepts in practical scenarios
 */

// Example 1: User registration form data
function processUserRegistration() {
    console.log("\n👤 USER REGISTRATION EXAMPLE:");
    
    let userData = {
        username: "aman_coder",           // string
        email: "aman@example.com",        // string
        age: 22,                          // number
        isEmailVerified: false,           // boolean
        profilePicture: null,             // null (not uploaded yet)
        lastLoginDate: undefined,         // undefined (never logged in)
        userId: Symbol("user_123"),       // symbol (unique identifier)
        accountBalance: 1500000000000000n // bigint (large financial number)
    };
    
    // Type checking for validation
    console.log("Validating user data types:");
    console.log("Username is string:", typeof userData.username === "string");
    console.log("Age is number:", typeof userData.age === "number");
    console.log("Email verified is boolean:", typeof userData.isEmailVerified === "boolean");
    console.log("Profile picture is null:", userData.profilePicture === null);
    console.log("Last login is undefined:", typeof userData.lastLoginDate === "undefined");
    
    return userData;
}

// Example 2: Type checking utility functions
function createTypeChecker() {
    console.log("\n🛠️ TYPE CHECKING UTILITIES:");
    
    // Utility functions for better type checking
    const isString = (value) => typeof value === "string";
    const isNumber = (value) => typeof value === "number" && !isNaN(value);
    const isBoolean = (value) => typeof value === "boolean";
    const isNull = (value) => value === null;
    const isUndefined = (value) => typeof value === "undefined";
    const isObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
    const isArray = (value) => Array.isArray(value);
    const isFunction = (value) => typeof value === "function";
    
    // Test values
    const testValues = [
        "hello",
        42,
        true,
        null,
        undefined,
        {},
        [],
        function() {}
    ];
    
    testValues.forEach((value, index) => {
        console.log(`Value ${index + 1} (${JSON.stringify(value)}):`);
        console.log(`  String: ${isString(value)}, Number: ${isNumber(value)}, Boolean: ${isBoolean(value)}`);
        console.log(`  Null: ${isNull(value)}, Undefined: ${isUndefined(value)}, Object: ${isObject(value)}`);
        console.log(`  Array: ${isArray(value)}, Function: ${isFunction(value)}`);
    });
}

// Run practical examples
processUserRegistration();
createTypeChecker();

// =============================================================================
// SECTION 9: COMMON PITFALLS AND HOW TO AVOID THEM
// =============================================================================

console.log("\n" + "=".repeat(50));
console.log("COMMON PITFALLS AND SOLUTIONS");
console.log("=".repeat(50));

/**
 * COMMON MISTAKES AND BEST PRACTICES:
 */

console.log("\n⚠️  COMMON PITFALLS TO AVOID:");

// Pitfall 1: typeof null returns "object"
console.log("1. typeof null quirk:");
console.log("   typeof null =", typeof null, "(should be 'null', but returns 'object')");
console.log("   Solution: Use === null for null checking");

// Pitfall 2: Arrays are objects
console.log("2. Array type checking:");
console.log("   typeof [] =", typeof [], "(arrays are objects)");
console.log("   Solution: Use Array.isArray([]) =", Array.isArray([]));

// Pitfall 3: NaN is a number
console.log("3. NaN type:");
console.log("   typeof NaN =", typeof NaN, "(NaN is still a number type)");
console.log("   Solution: Use Number.isNaN(NaN) =", Number.isNaN(NaN));

// Pitfall 4: Uninitialized variables
console.log("4. Uninitialized variables:");
let uninitializedVar;
console.log("   let uninitializedVar; typeof uninitializedVar =", typeof uninitializedVar);
console.log("   Solution: Always initialize variables or check for undefined");

// =============================================================================
// SECTION 10: SUMMARY AND KEY TAKEAWAYS
// =============================================================================

console.log("\n" + "=".repeat(50));
console.log("SUMMARY AND KEY TAKEAWAYS");
console.log("=".repeat(50));

/**
 * KEY POINTS TO REMEMBER:
 * 
 * 1. Always use "use strict" in modern JavaScript
 * 2. JavaScript has 7 primitive types: number, bigint, string, boolean, null, undefined, symbol
 * 3. Everything else is an object (including arrays and functions)
 * 4. typeof null returns "object" (historical bug)
 * 5. Use appropriate type checking methods for different scenarios
 * 6. Prefer let/const over var for variable declarations
 * 7. Use meaningful variable names and proper formatting for readability
 * 8. Be aware of type coercion in comparisons and operations
 */

console.log("\n📋 QUICK REFERENCE:");
console.log("• Primitives: number, bigint, string, boolean, null, undefined, symbol");
console.log("• Non-primitives: object (includes arrays, functions, dates, etc.)");
console.log("• Type checking: typeof operator, Array.isArray(), Number.isNaN()");
console.log("• Best practices: strict mode, meaningful names, proper initialization");

