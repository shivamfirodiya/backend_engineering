// Objects & Destructuring

const student = {
  name: "Shivam",
  age: 21,
  course: "Backend",
  skills: ["JS", "Node", "MongoDB"]
};

// Destructuring
const { name, skills } = student;
console.log(`${name} knows ${skills.join(", ")}`);

// Add new skill
student.skills.push("Express");
console.log("Updated Skills:", student.skills);
