function make_album(artist: string, title: string, tracks?: number): any {
  return {
    artist,
    title,
    tracks,
  };
}

const album1 = make_album("Arijit Singh", "Arijit Singh Live");
console.log(album1);

const album2 = make_album("Shreya Ghoshal", "Shreya Ghoshal Hits");
console.log(album2);

const album3 = make_album("Neha Kakkar", "Neha Kakkar Live", 12);
console.log(album3);
