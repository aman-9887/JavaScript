let score = "33abc"; // int dataTypes
console.log(typeof score); // number
console.log(typeof(score));

let valueInNumber = Number(score); // converting to number
console.log(typeof valueInNumber); 
console.log(valueInNumber); // 33

// NaN = Not a Number
console.log(Number("Aman")); // NaN

// Converting string to number
console.log(Number("33abc")); // 33

// Converting number to string
let valueInString = String(33); // converting to string

// console.log(typeof valueInString); // string
console.log(valueInString); // "33"

console.log(typeof valueInString); // string
console.log(valueInString); // "33"

console.log(typeof 33); // number
console.log(typeof "33"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a known bug in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("id")); // symbol
console.log(typeof BigInt(12345678901234567890)); // bigint
console.log(typeof { name: "Aman" }); // object

// Converting boolean to string
let isLoggedIn = true;
console.log(typeof isLoggedIn); // boolean
let isLoggedInString = String(isLoggedIn); // converting to string
console.log(isLoggedInString); // "true"
console.log(typeof isLoggedInString); // string

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