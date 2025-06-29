let n = -121;
let original = n; // store original number
let rev = 0;

if (n < 0) {
  console.log("Not a Palindrome because negative number cannot be a palindrome");
} else {
  while (n > 0) {
    let rem = n % 10;
    rev = (10 * rev) + rem;
    n = Math.floor(n / 10);
  }

  if (rev === original) {
    console.log("Palindrome");
  } else {
    console.log("Not a Palindrome");
  }
}