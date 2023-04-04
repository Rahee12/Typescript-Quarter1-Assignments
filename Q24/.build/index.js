"use strict";
const str1 = "hello";
const str2 = "HELLO";
console.log(str1 === str2);
console.log(str1 !== str2);
const str3 = "world";
const str4 = "world";
console.log(str3 === str4);
console.log(str3 !== str4);
const str5 = "AbC";
const str6 = "abc";
console.log(str5.toLowerCase() === str6);
console.log(str5.toLowerCase() !== str6);
const num1 = 10;
const num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 < num2);
console.log(num1 <= num2);
const age = 30;
const hasLicense = true;
console.log(age >= 18 && hasLicense);
console.log(age < 18 || !hasLicense);
const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana"));
console.log(fruits.includes("grape"));
const colors = ["red", "green", "blue"];
console.log(!colors.includes("yellow"));
console.log(!colors.includes("red"));
//# sourceMappingURL=index.js.map