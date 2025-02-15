function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

console.log(gcd(10, 2)); // Output: 2
console.log(gcd(10, 5)); // Output: 5
console.log(gcd(10, 0)); // Output: 10