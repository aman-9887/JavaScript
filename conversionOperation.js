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




//  *********************************************** Operations ***********************************************************

let value = 3
let negvalue = -value
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "Hello"
let str2 =" Aman"
str3 = str1+str2
console.log(str3);

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

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101 (postfix increment)
++gameCounter;
console.log(gameCounter); // 102 (prefix increment)
gameCounter--;
console.log(gameCounter); // 101 (postfix decrement)
--gameCounter;
console.log(gameCounter); // 100 (prefix decrement)








