// # Stacks

// ## Functions

// - Push: Placing data onto a stack.
// - Pop: Moving the top element of a stack.
// - Peek: Displaying the top element of a stack.
// - Length/Size: Determining how many elements are in a stack.

let letters = []; // this is our stack
let word = "RACECAR";
let rword = "";

// put letters of word into stack

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome!");
} else {
  console.log(word + " is NOT a palindrome!");
}
