// Functions & Logic Practice

// Check if number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log("Is 7 prime?", isPrime(7));

// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("Reverse:", reverseString("Backend"));

// Count vowels
function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}

console.log("Vowels:", countVowels("JavaScript"));
