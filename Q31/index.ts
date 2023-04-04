let users: string[] = [];

if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < users.length; i++) {
    console.log("User " + (i + 1) + ": " + users[i]);
  }

  users = []; // remove all usernames from the array

  if (users.length === 0) {
    console.log("We need to find some users!");
  }
}
