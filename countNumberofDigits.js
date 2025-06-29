let n = 19090;
let count = 0;

if (n === 0) {
  console.log(1);
}
while (n > 0) {
  n = Math.floor(n / 10); // Remove the last digit
  count++;
}
console.log(count);


let num = 987678;

// Convert number to string and get its length
console.log(num.toString().length);// or
let digitCount = num.toString().length;
console.log("Number of digits:", digitCount); // Output: 6


let numm = 987678;
let digitCounts = numm === 0 ? 1 : Math.floor(Math.log10(num)) + 1;
console.log("Number of digits:", digitCounts); // Output: 6


// 📘 What’s Happening:
// Math.log10(num) means: log base 10 of the number.

// For example: log10(1000) = 3, because 10³ = 1000.

// So log10(987678) ≈ 5.994… → Math.floor() makes it 5.

// Then we do +1 → 5 + 1 = 6 → Number of digits is 6.

// ❓ Why +1?
// Because:

// log10(987678) gives the highest digit place index, like "start from zero".

// So to get total digits, we add 1.

// ❓ Why num === 0 ? 1?
// Because:

// log10(0) is undefined — so we manually say 0 has 1 digit.



let nu = -4532;
nu = Math.abs(nu); // Convert to positive
let counts = nu === 0 ? 1 : 0; //or counts = 0;

while (nu > 0) {
  nu = Math.floor(nu / 10);
  counts++;
}

console.log(counts); // Output: 4
