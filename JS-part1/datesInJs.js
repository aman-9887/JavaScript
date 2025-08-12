// Dates

let date = new Date();
console.log(date); // Current date and time
console.log(date.toString()); // String representation of the date
console.log(date.toDateString()); // Date in a human-readable format
console.log(date.toISOString()); // ISO 8601 date string
console.log(date.getFullYear()); // Current year
console.log(date.getMonth()); // Current month (0-11)
console.log(date.getDate()); // Current day of the month
console.log(date.getDay()); // Current day of the week (0-6)
console.log(date.getHours()); // Current hour (0-23)
console.log(date.getMinutes()); // Current minutes (0-59)
console.log(date.getSeconds()); // Current seconds (0-59)
console.log(date.getMilliseconds()); // Current milliseconds (0-999)
console.log(date.getTime()); // Time in milliseconds since January 1, 1970
console.log(date.getTimezoneOffset()); // Timezone offset in minutes
console.log(date.toLocaleString()); // Localized date and time string
console.log(date.toLocaleDateString()); // Localized date string
console.log(date.toLocaleTimeString()); // Localized time string
console.log(date.toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })); // Localized date with options


let specificDate = new Date('2023-10-01T12:00:00Z');
console.log(specificDate); // Specific date and time
console.log(specificDate.toString()); // String representation of the specific date
console.log(specificDate.toDateString()); // Date in a human-readable format
console.log(specificDate.toISOString()); // ISO 8601 date string

let timestamp = Date.now();
console.log(Math.floor(timestamp / 1000)); // Current timestamp in seconds


console.log(timestamp); // Current timestamp in milliseconds
console.log(specificDate.getTime()); // Timestamp of the specific date

console.log(new Date(timestamp)); // Convert timestamp back to Date object
console.log(new Date(2023, 9, 1)); // Create a date for October 1, 2023 (months are 0-indexed)
console.log(new Date(2023, 9, 1, 12, 0, 0)); // Create a date with specific time
console.log(new Date('2023-10-01')); // Create a date from a string