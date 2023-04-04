let usernames: string[] = ["Jesis", "Eric", "Jane", "Boby", "Alvina"];

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === "admin") {
    console.log("Hello admin, would you like to see a different country?");
  } else {
    console.log(`Hello ${usernames[i]}, thank you for coming into my life to make it more special.`);
  }
}
