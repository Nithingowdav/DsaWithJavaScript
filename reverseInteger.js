let n = 12345;
let nCopy = n; // store original number
let rev = 0;
let temp = Math.abs(n); // work with absolute value for reversing

while (temp > 0) {
  let rem = temp % 10;
  rev = (10 * rev) + rem;
  temp = Math.floor(temp / 10);
}

rev = (nCopy < 0) ? -rev : rev;
console.log(rev); // Output: 54321
// Explanation:
// 1. We take the absolute value of n to handle negative numbers.
// 2. We reverse the digits using a while loop.
// 3. If the original number was negative, we make the reversed number negative too.
// 4. Finally, we print the reversed number.
// Note: This code handles both positive and negative integers correctly.
// If n is negative, the reversed number will also be negative.
// If n is positive, the reversed number will be positive.
// If n is zero, the reversed number will be zero.

function reverseNumber(n) {
  let rev = 0;
  let temp = Math.abs(n);

  while (temp > 0) {
    let rem = temp % 10;
    rev = (10 * rev) + rem;
    temp = Math.floor(temp / 10);
  }

  return (n < 0) ? -rev : rev;
}

console.log(reverseNumber(12345));  // 54321
console.log(reverseNumber(-987));   // -789
console.log(reverseNumber(0));      // 0
console.log(reverseNumber(-100));   // -1