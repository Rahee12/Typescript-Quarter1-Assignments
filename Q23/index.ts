let age = 18;
let country = 'USA';
let name = 'John';
let isStudent = true;
let isAdmin = false;

console.log("Is age greater than or equal to 18? I predict true.");
console.log(age >= 18);

console.log("Is country not equal to Canada? I predict true.");
console.log(country !== 'Canada');

console.log("Is name equal to 'john'? I predict false.");
console.log(name === 'john');

console.log("Is isStudent true? I predict true.");
console.log(isStudent);

console.log("Is isAdmin false? I predict true.");
console.log(!isAdmin);

console.log("Is age less than 21 or name is not equal to 'John'? I predict true.");
console.log(age < 21 || name !== 'John');

console.log("Is country equal to USA and isAdmin true? I predict false.");
console.log(country === 'USA' && isAdmin);

console.log("Is isAdmin true and isStudent false? I predict false.");
console.log(isAdmin && !isStudent);

console.log("Is age greater than 25? I predict false.");
console.log(age > 25);

console.log("Is country equal to 'canada' or isAdmin true? I predict true.");
console.log(country === 'canada' || isAdmin);
