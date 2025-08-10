let score3 = "33abc"; // int dataTypes
console.log(typeof score3); // number
console.log(typeof(score3));

let valueInNumber3 = Number(score3); // converting to number
console.log(typeof valueInNumber3); 
console.log(valueInNumber3); // 33

// NaN = Not a Number
console.log(Number("Aman")); // NaN

// Converting string to number
console.log(Number("33abc")); // 33

// Converting number to string
let valueInString2 = String(33); // converting to string

// console.log(typeof valueInString); // string
console.log(valueInString2); // "33"

console.log(typeof valueInString2); // string
console.log(valueInString2); // "33"

console.log(typeof 33); // number
console.log(typeof "33"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a known bug in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("id")); // symbol
console.log(typeof BigInt(12345678901234567890)); // bigint
console.log(typeof { name: "Aman" }); // object

// Converting boolean to string
let isLoggedIn1 = true;
console.log(typeof isLoggedIn1); // boolean
let isLoggedInString1 = String(isLoggedIn1); // converting to string
console.log(isLoggedInString1); // "true"
console.log(typeof isLoggedInString1 ); // string
console.log("This is a test file.");
console.log("Data types and conversions in JavaScript are crucial for understanding how to manipulate and store data effectively.");
console.log("Conversion operations allow you to change data types, ensuring compatibility and correctness in your code.");
console.log("For example, converting a string to a number can be done using the Number() function, while converting a number to a string can be achieved with the String() function.");
console.log("Understanding these conversions helps prevent errors and ensures that your code behaves as expected.");
console.log("This is a conversion operation file.");
console.log("It is important to be aware of the different data types in JavaScript, such as strings, numbers, booleans, and objects.");
console.log("By mastering data types and conversions, you can write more efficient and reliable JavaScript code.");


// "33" => 33
// "33abc" => NaN        => here after converting it to number the value will be Not a Number (NaN) but the type will still be number
// true => 1; false => 0;

// "" => false
// "Aman" => true




//  *********************************************** Operations ***********************************************************

let value3 = 3
let negvalue = -value3 // negvalue will be -3
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str11 = "Hello"
let str22 =" Aman"
let str33 = str11+str22 // str3 will be "Hello Aman"
console.log(str33);

console.log("Hello" + 2); // "Hello2" (string concatenation)
console.log("Hello" - 2); // NaN (not a number, subtraction is not defined for strings)
console.log("Hello" * 2); // NaN (not a number, multiplication is not defined for strings)
console.log("Hello" / 2); // NaN (not a number, division is not defined for strings)
console.log("Hello" ** 2); // NaN (not a number, exponentiation is not defined for strings)
console.log("Hello" % 2); // NaN (not a number, modulus is not defined for strings)
console.log("This is a conversion operation file.");

console.log("1" + 2); // "12" (string concatenation)
console.log("1" - 2); // -1 (string is converted to number)
console.log("1" * 2); // 2 (string is converted to number)
console.log("1" / 2); // 0.5 (string is converted to number)
console.log("1" ** 2); // 1 (string is converted to number)
console.log("1" % 2); // 1 (string is converted to number)

console.log(1+"2"); // "12" (string concatenation)
console.log("1"+2+2); // "122" (string concatenation)
console.log(1+2+"2"); // "32" (number addition followed by string concatenation)

console.log(true); // true
console.log(false); // false
console.log(+true); // 1 (boolean to number conversion)
console.log(+false); // 0 (boolean to number conversion)
console.log(+""); // 0 (empty string to number conversion)
console.log(true+1); // 2 (boolean to number conversion, true is 1)
console.log(false+1); // 1 (boolean to number conversion, false is 0)
console.log(true+"1"); // "true1" (boolean to string concatenation)

let gameCounter3 = 100
gameCounter3++;
console.log(gameCounter3); // 101 (postfix increment)
++gameCounter3;
console.log(gameCounter3); // 102 (prefix increment)
gameCounter3--;
console.log(gameCounter3); // 101 (postfix decrement)
--gameCounter3;
console.log(gameCounter3); // 100 (prefix decrement)




// ******************************************************************************************************************
// Below i will be providing the better and structured code and notes for better understanding

/**
 * ================================================================================
 * JAVASCRIPT TYPE CONVERSION AND OPERATIONS - COMPREHENSIVE GUIDE
 * ================================================================================
 * 
 * This file demonstrates JavaScript's type conversion mechanisms and arithmetic
 * operations, including explicit conversions, implicit coercion, and operator
 * behavior with different data types.
 * 
 * Topics Covered:
 * - Explicit Type Conversion (Number(), String(), Boolean())
 * - Implicit Type Coercion
 * - Arithmetic Operations and Type Behavior
 * - String Operations and Concatenation
 * - Increment/Decrement Operators
 * - Common Pitfalls and Best Practices
 * 
 * Author: JavaScript Learning Guide
 * Last Updated: 2024
 */

"use strict"; // Enable strict mode for better error handling

// ================================================================================
// UTILITY FUNCTIONS FOR SAFE DISPLAY
// ================================================================================

/**
 * Safe string representation function that handles all JavaScript types
 * including problematic ones like BigInt, Symbol, and Function
 */
function safeDisplay(value) {
    if (typeof value === 'bigint') {
        return value.toString() + 'n';
    } else if (typeof value === 'symbol') {
        return value.toString();
    } else if (typeof value === 'function') {
        return 'function() {}';
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else if (value === null) {
        return 'null';
    } else if (typeof value === 'string') {
        return `"${value}"`;
    } else if (typeof value === 'object') {
        if (Array.isArray(value)) {
            return '[' + value.map(safeDisplay).join(', ') + ']';
        } else {
            try {
                return JSON.stringify(value);
            } catch (error) {
                return '{...}';
            }
        }
    } else {
        return String(value);
    }
}

console.log("=".repeat(80));
console.log("JAVASCRIPT TYPE CONVERSION AND OPERATIONS GUIDE");
console.log("=".repeat(80));

// ================================================================================
// SECTION 1: EXPLICIT TYPE CONVERSION TO NUMBER
// ================================================================================

console.log("\n📊 SECTION 1: EXPLICIT TYPE CONVERSION TO NUMBER");
console.log("-".repeat(60));

/**
 * EXPLICIT TYPE CONVERSION TO NUMBER
 * The Number() constructor can convert various data types to numbers
 * Understanding the conversion rules is crucial for avoiding bugs
 */

// 1.1 String to Number Conversion Examples
console.log("\n🔄 String to Number Conversions:");

let score = "33abc";                    // Mixed alphanumeric string
console.log(`Original value: "${score}"`);
console.log(`typeof score: ${typeof score}`);              // "string"
console.log(`typeof(score): ${typeof(score)}`);            // Alternative syntax

// Convert string to number using Number() constructor
let valueInNumber = Number(score);
console.log(`After Number("${score}"):`);
console.log(`  Value: ${valueInNumber}`);                  // NaN (Not a Number)
console.log(`  Type: ${typeof valueInNumber}`);            // "number" (NaN is still of type number)

/**
 * IMPORTANT NOTE: 
 * NaN (Not a Number) is still of type "number" in JavaScript
 * This is a common source of confusion for beginners
 */

// 1.2 Comprehensive String to Number Conversion Examples
console.log("\n📋 Comprehensive String to Number Examples:");

const stringExamples = [
    "33",           // Valid number string
    "33abc",        // Invalid mixed string
    "abc33",        // Invalid mixed string
    "Aman",         // Pure text string
    "",             // Empty string
    "   ",          // Whitespace string
    "123.45",       // Decimal number string
    "-42",          // Negative number string
    "0xFF",         // Hexadecimal string
    "1e5",          // Scientific notation
    "Infinity",     // Infinity string
    "-Infinity",    // Negative infinity
    "NaN"           // NaN string
];

stringExamples.forEach(str => {
    const converted = Number(str);
    console.log(`Number("${str}") = ${converted} (type: ${typeof converted})`);
});

/**
 * STRING TO NUMBER CONVERSION RULES:
 * - Pure numeric strings ("33") → converted to number (33)
 * - Mixed alphanumeric ("33abc") → NaN
 * - Pure text ("Aman") → NaN
 * - Empty string ("") → 0
 * - Whitespace-only ("   ") → 0
 * - Decimal strings ("123.45") → decimal number
 * - Scientific notation ("1e5") → expanded number
 * - "Infinity"/"-Infinity" → Infinity/-Infinity
 */

// ================================================================================
// SECTION 2: EXPLICIT TYPE CONVERSION TO STRING
// ================================================================================

console.log("\n\n📝 SECTION 2: EXPLICIT TYPE CONVERSION TO STRING");
console.log("-".repeat(60));

/**
 * EXPLICIT TYPE CONVERSION TO STRING
 * The String() constructor converts any value to its string representation
 */

// 2.1 Number to String Conversion
console.log("\n🔄 Number to String Conversions:");

let numericValue = 33;
let valueInString = String(numericValue);

console.log(`Original number: ${numericValue} (type: ${typeof numericValue})`);
console.log(`Converted string: "${valueInString}" (type: ${typeof valueInString})`);

// 2.2 Various Data Types to String
console.log("\n📋 Various Data Types to String:");

const conversionExamples = [
    33,                     // Number
    33.45,                  // Float
    true,                   // Boolean true
    false,                  // Boolean false
    null,                   // Null
    undefined,              // Undefined
    Symbol("id"),           // Symbol
    BigInt(123),           // BigInt
    [],                     // Empty array
    [1, 2, 3],             // Array with elements
    {},                     // Empty object
    { name: "Aman" },      // Object with properties
    function() { return "test"; }  // Function
];

conversionExamples.forEach(value => {
    try {
        const stringified = String(value);
        const displayValue = safeDisplay(value);
        
        console.log(`String(${displayValue}) = "${stringified}" (original type: ${typeof value})`);
    } catch (error) {
        const safeDisplayValue = safeDisplay(value);
        console.log(`String(${safeDisplayValue}) = ERROR: ${error.message}`);
    }
});

// 2.3 Symbol and BigInt String Conversion Gotchas
console.log("\n⚠️  SYMBOL AND BIGINT STRING CONVERSION GOTCHAS:");

/**
 * IMPORTANT: Symbols cannot be directly used in template literals!
 * BigInt cannot be used in JSON.stringify()!
 */

const symbolExample = Symbol("test");
const bigintExample = BigInt(12345);

// ❌ These will throw errors:
// console.log(`Symbol value: ${symbolExample}`); // TypeError!
// JSON.stringify(bigintExample); // TypeError!

// ✅ Correct ways to handle Symbols and BigInt in string contexts:
console.log("Symbol value (toString()):", symbolExample.toString());
console.log("Symbol value (String()):", String(symbolExample));
console.log("Symbol description:", symbolExample.description);
console.log("BigInt value (toString()):", bigintExample.toString());
console.log("BigInt value (String()):", String(bigintExample));

/**
 * SYMBOL AND BIGINT STRING CONVERSION RULES:
 * - Template literals: ❌ Cannot directly interpolate symbols or display BigInt safely
 * - String() constructor: ✅ Works for both
 * - .toString() method: ✅ Works for both
 * - JSON.stringify(): ❌ Throws errors for both
 */

// ================================================================================
// SECTION 3: EXPLICIT TYPE CONVERSION TO BOOLEAN
// ================================================================================

console.log("\n\n✅ SECTION 3: EXPLICIT TYPE CONVERSION TO BOOLEAN");
console.log("-".repeat(60));

/**
 * EXPLICIT TYPE CONVERSION TO BOOLEAN
 * The Boolean() constructor converts values to true or false
 * Understanding truthy and falsy values is essential
 */

console.log("\n🔄 Boolean Conversion Examples:");

// Boolean conversion of various values
let isLoggedIn = true;
console.log(`Original boolean: ${isLoggedIn} (type: ${typeof isLoggedIn})`);

let isLoggedInString = String(isLoggedIn);
console.log(`Boolean to string: "${isLoggedInString}" (type: ${typeof isLoggedInString})`);

// 3.1 Comprehensive Boolean Conversion Examples
console.log("\n📋 Truthy and Falsy Values:");

const booleanExamples = [
    // Falsy values (convert to false)
    false,          // Boolean false
    0,              // Zero
    -0,             // Negative zero
    0n,             // BigInt zero
    "",             // Empty string
    null,           // Null
    undefined,      // Undefined
    NaN,            // Not a Number
    
    // Truthy values (convert to true)
    true,           // Boolean true
    1,              // Non-zero number
    -1,             // Negative number
    "0",            // String with content (even "0")
    "false",        // String with content (even "false")
    "Aman",         // Non-empty string
    [],             // Empty array (object)
    {},             // Empty object
    function() {},  // Function
    Symbol("id"),   // Symbol
    123n            // BigInt (non-zero)
];

console.log("FALSY VALUES (convert to false):");
booleanExamples.slice(0, 8).forEach(value => {
    const displayValue = safeDisplay(value);
    console.log(`Boolean(${displayValue}) = ${Boolean(value)}`);
});

console.log("\nTRUTHY VALUES (convert to true):");
booleanExamples.slice(8).forEach(value => {
    const displayValue = safeDisplay(value);
    console.log(`Boolean(${displayValue}) = ${Boolean(value)}`);
});

/**
 * BOOLEAN CONVERSION RULES:
 * FALSY VALUES (8 total): false, 0, -0, 0n, "", null, undefined, NaN
 * TRUTHY VALUES: Everything else, including empty arrays and objects
 */

// ================================================================================
// SECTION 4: TYPE CHECKING DEMONSTRATION
// ================================================================================

console.log("\n\n🔍 SECTION 4: TYPE CHECKING DEMONSTRATION");
console.log("-".repeat(60));

/**
 * TYPEOF OPERATOR DEMONSTRATION
 * Shows how typeof works with different data types
 */

console.log("\n📋 typeof Operator Examples:");

const typeExamples = [
    33,                             // number
    "33",                          // string
    true,                          // boolean
    null,                          // object (JavaScript quirk!)
    undefined,                     // undefined
    Symbol("id"),                  // symbol
    BigInt(12345678901234567890),  // bigint
    { name: "Aman" },             // object
    [1, 2, 3],                    // object (arrays are objects)
    function() {},                 // function
    new Date(),                   // object
    /regex/,                      // object
    new Map(),                    // object
    new Set()                     // object
];

typeExamples.forEach(value => {
    const typeResult = typeof value;
    const displayValue = safeDisplay(value);
    
    console.log(`typeof ${displayValue} = "${typeResult}"`);
});

/**
 * IMPORTANT TYPEOF QUIRKS:
 * - typeof null returns "object" (historical JavaScript bug)
 * - typeof array returns "object" (arrays are objects in JavaScript)
 * - typeof function returns "function" (functions are callable objects)
 */

// ================================================================================
// SECTION 5: ARITHMETIC OPERATIONS AND TYPE COERCION
// ================================================================================

console.log("\n\n🧮 SECTION 5: ARITHMETIC OPERATIONS AND TYPE COERCION");
console.log("-".repeat(60));

/**
 * ARITHMETIC OPERATIONS WITH TYPE COERCION
 * JavaScript automatically converts types during operations (implicit coercion)
 * Understanding these rules prevents unexpected behavior
 */

// 5.1 Basic Arithmetic Operations
console.log("\n➕ Basic Arithmetic Operations:");

let value = 3;
let negativeValue = -value;  // Unary minus operator
console.log(`Original value: ${value}`);
console.log(`Negative value (-${value}): ${negativeValue}`);

// Basic arithmetic operators
console.log("\n📊 Basic Arithmetic Examples:");
const num1 = 10, num2 = 3;

console.log(`${num1} + ${num2} = ${num1 + num2}`);    // Addition: 13
console.log(`${num1} - ${num2} = ${num1 - num2}`);    // Subtraction: 7
console.log(`${num1} * ${num2} = ${num1 * num2}`);    // Multiplication: 30
console.log(`${num1} / ${num2} = ${num1 / num2}`);    // Division: 3.333...
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);  // Exponentiation: 1000
console.log(`${num1} % ${num2} = ${num1 % num2}`);    // Modulus: 1

// ================================================================================
// SECTION 6: STRING OPERATIONS AND CONCATENATION
// ================================================================================

console.log("\n\n📝 SECTION 6: STRING OPERATIONS AND CONCATENATION");
console.log("-".repeat(60));

/**
 * STRING OPERATIONS AND CONCATENATION
 * The + operator behaves differently with strings vs numbers
 * This is a major source of bugs in JavaScript
 */

// 6.1 String Concatenation
console.log("\n🔗 String Concatenation:");

let str1 = "Hello";
let str2 = " Aman";
let str3 = str1 + str2;  // String concatenation
console.log(`"${str1}" + "${str2}" = "${str3}"`);

// 6.2 Mixed String and Number Operations
console.log("\n🔢 String + Number Operations:");

/**
 * RULE: When + operator encounters a string, it performs concatenation
 * Other operators (-, *, /, **, %) attempt numeric conversion
 */

const stringOperationExamples = [
    // Addition with strings (concatenation)
    { expr: '"Hello" + 2', result: "Hello" + 2 },
    { expr: '"1" + 2', result: "1" + 2 },
    { expr: '1 + "2"', result: 1 + "2" },
    
    // Other operations with strings (numeric conversion)
    { expr: '"Hello" - 2', result: "Hello" - 2 },
    { expr: '"Hello" * 2', result: "Hello" * 2 },
    { expr: '"Hello" / 2', result: "Hello" / 2 },
    { expr: '"Hello" ** 2', result: "Hello" ** 2 },
    { expr: '"Hello" % 2', result: "Hello" % 2 },
    
    // Numeric strings with other operations
    { expr: '"5" - 2', result: "5" - 2 },
    { expr: '"5" * 2', result: "5" * 2 },
    { expr: '"5" / 2', result: "5" / 2 },
    { expr: '"5" ** 2', result: "5" ** 2 },
    { expr: '"5" % 2', result: "5" % 2 }
];

stringOperationExamples.forEach(example => {
    console.log(`${example.expr} = ${example.result} (type: ${typeof example.result})`);
});

// 6.3 Complex String and Number Combinations
console.log("\n🧩 Complex String and Number Combinations:");

/**
 * OPERATOR PRECEDENCE AND ASSOCIATIVITY
 * JavaScript evaluates expressions left to right for same precedence operators
 * + has left-to-right associativity
 */

const complexExamples = [
    { expr: '"1" + 2 + 2', result: "1" + 2 + 2, explanation: "String concatenation throughout" },
    { expr: '1 + 2 + "2"', result: 1 + 2 + "2", explanation: "Addition first, then concatenation" },
    { expr: '"1" + (2 + 2)', result: "1" + (2 + 2), explanation: "Parentheses force addition first" },
    { expr: '(1 + 2) + "2"', result: (1 + 2) + "2", explanation: "Addition in parentheses, then concatenation" }
];

complexExamples.forEach(example => {
    console.log(`${example.expr} = "${example.result}" | ${example.explanation}`);
});

/**
 * KEY RULES FOR + OPERATOR:
 * 1. If either operand is a string, concatenation occurs
 * 2. Operations are evaluated left to right
 * 3. Use parentheses to control evaluation order
 * 4. Other operators (-, *, /, **, %) always attempt numeric conversion
 */

// ================================================================================
// SECTION 7: BOOLEAN OPERATIONS AND COERCION
// ================================================================================

console.log("\n\n✅ SECTION 7: BOOLEAN OPERATIONS AND COERCION");
console.log("-".repeat(60));

/**
 * BOOLEAN OPERATIONS AND IMPLICIT COERCION
 * JavaScript converts values to numbers/strings in various contexts
 */

console.log("\n🔄 Boolean Coercion Examples:");

// Unary + operator converts to number
const booleanCoercionExamples = [
    { expr: 'true', value: true, unaryPlus: +true },
    { expr: 'false', value: false, unaryPlus: +false },
    { expr: '""', value: "", unaryPlus: +"" },
    { expr: '" "', value: " ", unaryPlus: +" " },
    { expr: '"5"', value: "5", unaryPlus: +"5" },
    { expr: '"abc"', value: "abc", unaryPlus: +"abc" }
];

booleanCoercionExamples.forEach(example => {
    console.log(`+${example.expr} = ${example.unaryPlus} (original: ${example.value}, type: ${typeof example.value})`);
});

// Boolean arithmetic operations
console.log("\n🧮 Boolean Arithmetic Operations:");

const booleanArithmeticExamples = [
    { expr: 'true + 1', result: true + 1 },
    { expr: 'false + 1', result: false + 1 },
    { expr: 'true + false', result: true + false },
    { expr: 'true * 3', result: true * 3 },
    { expr: 'false * 3', result: false * 3 },
    { expr: 'true + "1"', result: true + "1" }
];

booleanArithmeticExamples.forEach(example => {
    console.log(`${example.expr} = ${example.result} (type: ${typeof example.result})`);
});

/**
 * BOOLEAN TO NUMBER CONVERSION:
 * - true converts to 1
 * - false converts to 0
 * - This happens automatically in arithmetic operations
 */

// ================================================================================
// SECTION 8: INCREMENT AND DECREMENT OPERATORS
// ================================================================================

console.log("\n\n📈 SECTION 8: INCREMENT AND DECREMENT OPERATORS");
console.log("-".repeat(60));

/**
 * INCREMENT AND DECREMENT OPERATORS
 * Pre-increment/decrement vs Post-increment/decrement
 * Understanding the difference is crucial for loops and expressions
 */

console.log("\n🔄 Increment and Decrement Operations:");

// Demonstrate all increment/decrement variations
let gameCounter = 100;
console.log(`Initial value: ${gameCounter}`);

// Post-increment (returns current value, then increments)
console.log(`gameCounter++: ${gameCounter++} (value after: ${gameCounter})`);

// Pre-increment (increments first, then returns new value)
console.log(`++gameCounter: ${++gameCounter} (value after: ${gameCounter})`);

// Post-decrement (returns current value, then decrements)
console.log(`gameCounter--: ${gameCounter--} (value after: ${gameCounter})`);

// Pre-decrement (decrements first, then returns new value)
console.log(`--gameCounter: ${--gameCounter} (value after: ${gameCounter})`);

// 8.1 Detailed Increment/Decrement Analysis
console.log("\n📊 Detailed Analysis of Pre vs Post Operations:");

/**
 * PRE vs POST INCREMENT/DECREMENT COMPARISON
 * This example shows the difference in return values and timing
 */

let a = 5, b = 5;
console.log("Starting values: a = 5, b = 5");

console.log("\nPost-increment (a++):");
console.log(`  Expression returns: ${a++}`);  // Returns 5, then increments
console.log(`  Variable value after: ${a}`);  // Now 6

console.log("\nPre-increment (++b):");
console.log(`  Expression returns: ${++b}`);  // Increments first, returns 6
console.log(`  Variable value after: ${b}`);  // Still 6

// Practical example showing the difference in expressions
let x = 10;
let result1 = x++ * 2;  // Uses 10, then increments x to 11
let y = 10;
let result2 = ++y * 2;  // Increments y to 11, then uses 11

console.log("\nPractical Example:");
console.log(`x++ * 2 with x=10: ${result1} (x becomes ${x})`);
console.log(`++y * 2 with y=10: ${result2} (y becomes ${y})`);

/**
 * INCREMENT/DECREMENT RULES:
 * - Post-increment (x++): Returns current value, then increments
 * - Pre-increment (++x): Increments first, then returns new value
 * - Post-decrement (x--): Returns current value, then decrements  
 * - Pre-decrement (--x): Decrements first, then returns new value
 * - Commonly used in loops and conditional expressions
 */

// ================================================================================
// SECTION 9: COMMON PITFALLS AND BEST PRACTICES
// ================================================================================

console.log("\n\n⚠️  SECTION 9: COMMON PITFALLS AND BEST PRACTICES");
console.log("-".repeat(60));

/**
 * COMMON PITFALLS IN TYPE CONVERSION AND OPERATIONS
 * Learning these helps avoid bugs and write more predictable code
 */

console.log("\n🚨 Common Pitfalls:");

// Pitfall 1: NaN comparisons
console.log("1. NaN Comparison Issues:");
let nanValue = Number("abc");
console.log(`nanValue = ${nanValue}`);
console.log(`nanValue === nanValue: ${nanValue === nanValue}`);  // false!
console.log(`Number.isNaN(nanValue): ${Number.isNaN(nanValue)}`); // true
console.log(`isNaN(nanValue): ${isNaN(nanValue)}`);              // true

// Pitfall 2: Implicit coercion in comparisons
console.log("\n2. Implicit Coercion in Comparisons:");
console.log(`"5" == 5: ${"5" == 5}`);    // true (coercion)
console.log(`"5" === 5: ${"5" === 5}`);  // false (strict)
console.log(`0 == false: ${0 == false}`)  // true (coercion)
console.log(`0 === false: ${0 === false}`) // false (strict)

// Pitfall 3: Array and object coercion
console.log("\n3. Array and Object Coercion:");
console.log(`[] + []: "${[] + []}"`);           // Empty string
console.log(`[] + {}: "${[] + {}}"`);           // "[object Object]"
console.log(`{} + []: ${({}) + []}`);           // "[object Object]"

// Pitfall 4: JSON serialization issues
console.log("\n4. JSON Serialization Issues:");

const serializationExamples = [
    { name: "String", value: "hello", canSerialize: true },
    { name: "Number", value: 42, canSerialize: true },
    { name: "Boolean", value: true, canSerialize: true },
    { name: "Array", value: [1, 2, 3], canSerialize: true },
    { name: "Object", value: { a: 1 }, canSerialize: true },
    { name: "null", value: null, canSerialize: true },
    { name: "undefined", value: undefined, canSerialize: false },
    { name: "Function", value: function() {}, canSerialize: false },
    { name: "Symbol", value: Symbol("test"), canSerialize: false },
    { name: "BigInt", value: BigInt(123), canSerialize: false }
];

serializationExamples.forEach(example => {
    try {
        const serialized = JSON.stringify(example.value);
        console.log(`✅ JSON.stringify(${example.name}): ${serialized}`);
    } catch (error) {
        console.log(`❌ JSON.stringify(${example.name}): ${error.message}`);
    }
});

/**
 * BEST PRACTICES:
 * 
 * 1. Use explicit conversion (Number(), String(), Boolean()) instead of implicit
 * 2. Use strict equality (===) instead of loose equality (==)
 * 3. Be careful with + operator - use parentheses to clarify intent
 * 4. Always check for NaN using Number.isNaN()
 * 5. Understand truthy/falsy values for conditional logic
 * 6. Use typeof for type checking, but remember its quirks
 * 7. Consider using parseInt() or parseFloat() for string-to-number conversion
 * 8. Use template literals for string interpolation instead of concatenation
 * 9. Create safe display functions for debugging complex data types
 * 10. Handle serialization errors gracefully with try-catch blocks
 */

// ================================================================================
// SECTION 10: PRACTICAL EXAMPLES AND USE CASES
// ================================================================================

console.log("\n\n💡 SECTION 10: PRACTICAL EXAMPLES AND USE CASES");
console.log("-".repeat(60));

/**
 * PRACTICAL EXAMPLES OF TYPE CONVERSION IN REAL APPLICATIONS
 */

console.log("\n🔧 Practical Examples:");

// Example 1: Form input validation
function validateAge(input) {
    const age = Number(input);
    
    if (Number.isNaN(age)) {
        return { valid: false, message: "Please enter a valid number" };
    }
    
    if (age < 0 || age > 120) {
        return { valid: false, message: "Please enter a realistic age" };
    }
    
    return { valid: true, age: age };
}

// Test the validation function
const testInputs = ["25", "abc", "150", "-5", ""];
testInputs.forEach(input => {
    const result = validateAge(input);
    console.log(`validateAge("${input}"):`, result);
});

// Example 2: Safe number formatting
function formatNumber(value, decimals = 2) {
    const num = Number(value);
    
    if (Number.isNaN(num)) {
        return "Invalid number";
    }
    
    return num.toFixed(decimals);
}

console.log("\nNumber Formatting Examples:");
["123.456", "abc", "0", ""].forEach(val => {
    console.log(`formatNumber("${val}"): ${formatNumber(val)}`);
});

// Example 3: Boolean context usage
function processUserInput(input) {
    // Convert to boolean context
    if (input) {  // Truthy check
        console.log(`Processing: "${input}"`);
        return true;
    } else {
        console.log("No input provided");
        return false;
    }
}

console.log("\nBoolean Context Examples:");
const testValues = ["Hello", "", 0, "0", null, undefined, false, [], 42n];
testValues.forEach(val => {
    const displayValue = safeDisplay(val);
    const result = processUserInput(val);
    console.log(`Input: ${displayValue} -> ${result}`);
});

// ================================================================================
// CONCLUSION AND SUMMARY
// ================================================================================

console.log("\n\n🎯 CONCLUSION AND SUMMARY");
console.log("=".repeat(80));

console.log(`
📚 KEY TAKEAWAYS:

1. TYPE CONVERSION:
   • Explicit: Number(), String(), Boolean()
   • Implicit: Happens automatically during operations
   • NaN is type "number" but represents invalid numeric value

2. OPERATORS AND COERCION:
   • + operator: String concatenation if any operand is string
   • Other operators: Attempt numeric conversion
   • Use parentheses to control evaluation order

3. BOOLEAN CONTEXT:
   • 8 falsy values: false, 0, -0, 0n, "", null, undefined, NaN
   • Everything else is truthy, including empty arrays and objects

4. SERIALIZATION GOTCHAS:
   • JSON.stringify() cannot handle: undefined, function, symbol, bigint
   • Template literals cannot directly interpolate symbols
   • Always use safe display functions for debugging

5. BEST PRACTICES:
   • Use strict equality (===) over loose equality (==)
   • Explicit conversion over implicit coercion
   • Number.isNaN() for NaN checking
   • Template literals for string building
   • Safe display functions for complex types

6. COMMON PITFALLS:
   • typeof null returns "object"
   • NaN !== NaN (always false)
   • Array + operations can give unexpected results
   • Pre vs post increment/decrement behavior
   • BigInt and Symbol serialization issues

🚀 NEXT STEPS:
   • Practice with different data types and operations
   • Build validation functions using these concepts
   • Experiment with edge cases to understand behavior
   • Apply strict mode and modern JavaScript practices
   • Create robust error handling for type conversions
`);

console.log("=".repeat(80));
console.log("END OF JAVASCRIPT TYPE CONVERSION AND OPERATIONS GUIDE");
console.log("=".repeat(80));