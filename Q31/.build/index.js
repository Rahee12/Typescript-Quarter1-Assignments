"use strict";
let users = [];
if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < users.length; i++) {
    console.log("User " + (i + 1) + ": " + users[i]);
  }
  users = [];
  if (users.length === 0) {
    console.log("We need to find some users!");
  }
}
//# sourceMappingURL=index.js.map
