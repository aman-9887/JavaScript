const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(typeof balance);
console.log(balance.toString().length);

console.log(balance.toFixed(2)); // fixed to 2 decimal places
console.log(balance.toPrecision(3)); // fixed to 3 significant digits

const otherNumber = 23.8966;
console.log(otherNumber.toFixed(2)); // 23.90
console.log(otherNumber.toPrecision(3)); // 23.9
console.log(otherNumber.toPrecision(4)); // 23.90
console.log(otherNumber.toPrecision(5)); // 23.8966

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // "1,000,000"
console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"

console.log(Number.isInteger(100)); // true
console.log(Number.isInteger(100.5)); // false
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991


// +++++++++++++++++++++++++Math Operations+++++++++++++++++++++++++

console.log(Math);
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.abs(-10)); // 10
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.round(4.2)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 10); // Random number between 0 and 10
console.log(Math.random() * 100); // Random number between 0 and 100
console.log(Math.random() * 100 + 1); // Random number between 1 and 100
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.random() * (10 - 1) + 1); // Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10
console.log(Math.floor(Math.random() * 100) + 1); // Random integer between 1 and 100

const min = 10;
const max = 20;
console.log(Math.random() * (max - min + 1) + min); // Random number between 10 and 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between 10 and 20

