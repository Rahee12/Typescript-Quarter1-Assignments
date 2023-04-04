"use strict";
let locations = ["Tokyo", "Paris", "New York", "Sydney", "Switzerland"];
console.log("Original Order: " + locations.join(", "));
console.log("Alphabetical Order: " + locations.slice().sort().join(", "));
console.log("Original Order (again): " + locations.join(", "));
console.log("Reverse Alphabetical Order: " + locations.slice().sort().reverse().join(", "));
console.log("Original Order (yet again): " + locations.join(", "));
locations.reverse();
console.log("Reversed Order: " + locations.join(", "));
locations.reverse();
console.log("Original Order (once more): " + locations.join(", "));
locations.sort();
console.log("Alphabetical Order (again): " + locations.join(", "));
locations.sort().reverse();
console.log("Reverse Alphabetical Order (again): " + locations.join(", "));
//# sourceMappingURL=index.js.map
