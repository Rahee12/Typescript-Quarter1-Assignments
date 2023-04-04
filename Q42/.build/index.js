"use strict";
function make_great(magicians2) {
  return magicians2.map((magician) => `the Great ${magician}`);
}
function show_magicians(magicians2) {
  magicians2.forEach((magician) => console.log(magician));
}
let magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
magicians = make_great(magicians);
show_magicians(magicians);
//# sourceMappingURL=index.js.map
