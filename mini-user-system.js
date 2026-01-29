// Mini User System

let users = [];

function addUser(name, age) {
  users.push({ id: users.length + 1, name, age });
}

function getAdults() {
  return users.filter(user => user.age >= 18);
}

function findUserById(id) {
  return users.find(user => user.id === id);
}

addUser("Shivam", 21);
addUser("Riya", 17);
addUser("Aman", 24);

console.log("All Users:", users);
console.log("Adults:", getAdults());
console.log("User with ID 2:", findUserById(2));
