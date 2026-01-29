// Array Methods Practice

const users = [
  { id: 1, name: "Shivam", age: 21, active: true },
  { id: 2, name: "Rahul", age: 17, active: false },
  { id: 3, name: "Amit", age: 25, active: true },
  { id: 4, name: "Neha", age: 16, active: true }
];

// 1 get all active users
const activeUsers = users.filter(user => user.active);
console.log("Active Users:", activeUsers);

// 2. get only user names
const names = users.map(user => user.name);
console.log("User Names:", names);

// 3. avg age
const avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log("Average Age:", avgAge);
