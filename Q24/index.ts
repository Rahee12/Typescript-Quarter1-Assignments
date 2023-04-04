const str1 = "hello";
const str2 = "HELLO";
console.log(str1 === str2); // false
console.log(str1 !== str2); // true

const str3 = "world";
const str4 = "world";
console.log(str3 === str4); // true
console.log(str3 !== str4); // false


const str5 = "AbC";
const str6 = "abc";
console.log(str5.toLowerCase() === str6); // true
console.log(str5.toLowerCase() !== str6); // false


const num1 = 10;
const num2 = 5;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 >= num2); // true
console.log(num1 < num2); // false
console.log(num1 <= num2); // false


const age = 30;
const hasLicense = true;
console.log(age >= 18 && hasLicense); // true
console.log(age < 18 || !hasLicense); // false

const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape")); // false

const colors = ["red", "green", "blue"];
console.log(!colors.includes("yellow")); // true
console.log(!colors.includes("red")); // false
