// Store locations in an array
let locations: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Switzerland"];

// Print original order
console.log("Original Order: " + locations.join(", "));

// Print alphabetical order without modifying actual list
console.log("Alphabetical Order: " + locations.slice().sort().join(", "));

// Show that the original array is still in its original order
console.log("Original Order (again): " + locations.join(", "));

// Print reverse alphabetical order without modifying actual list
console.log("Reverse Alphabetical Order: " + locations.slice().sort().reverse().join(", "));

// Show that the original array is still in its original order
console.log("Original Order (yet again): " + locations.join(", "));

// Reverse the order of the original list
locations.reverse();

// Print the list to show that its order has changed
console.log("Reversed Order: " + locations.join(", "));

// Reverse the order of the original list again to get back the original order
locations.reverse();

// Print the list to show it's back to its original order
console.log("Original Order (once more): " + locations.join(", "));

// Sort the array so it's stored in alphabetical order
locations.sort();

// Print the array to show that its order has been changed
console.log("Alphabetical Order (again): " + locations.join(", "));

// Sort to change the array so it's stored in reverse alphabetical order
locations.sort().reverse();

// Print the list to show that its order has changed
console.log("Reverse Alphabetical Order (again): " + locations.join(", "));
