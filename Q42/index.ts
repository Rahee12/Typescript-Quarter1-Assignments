function make_great(magicians: string[]): string[] {
  return magicians.map((magician) => `the Great ${magician}`);
}

function show_magicians(magicians: string[]): void {
  magicians.forEach((magician) => console.log(magician));
}

let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

magicians = make_great(magicians);

show_magicians(magicians);
