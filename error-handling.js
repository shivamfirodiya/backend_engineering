// Error Handling Practice

function divide(a, b) {
  try {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Operation attempted");
  }
}

console.log(divide(10, 2));
console.log(divide(10, 0));
