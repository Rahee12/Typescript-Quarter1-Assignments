"use strict";
function make_album(artist, title, tracks) {
  return {
    artist,
    title,
    tracks
  };
}
const album1 = make_album("Arijit Singh", "Arijit Singh Live");
console.log(album1);
const album2 = make_album("Shreya Ghoshal", "Shreya Ghoshal Hits");
console.log(album2);
const album3 = make_album("Neha Kakkar", "Neha Kakkar Live", 12);
console.log(album3);
//# sourceMappingURL=index.js.map
