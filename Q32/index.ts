let current_users: string[] = ["John", "Jane", "Adam", "Eve", "Sarah"];
let new_users: string[] = ["Dave", "adam", "Sarah", "Mary", "Sam"];

for (let i = 0; i < new_users.length; i++) {
  let username_exists: boolean = false;
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      username_exists = true;
      break;
    }
  }
  if (username_exists) {
    console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations, the username '${new_users[i]}' is available.`);
  }
}
