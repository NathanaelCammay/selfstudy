// # Stacks

// ## Functions

// - Push: Placing data onto a stack.
// - Pop: Moving the top element off a stack.
// - Peek: Displaying the top element of a stack.
// - Length/Size: Determining how many elements are in a stack.

//let letters = []; // this is our stack
//let word = "RACECAR";
//let rword = "";

//// put letters of word into stack

//for (let i = 0; i < word.length; i++) {
//  letters.push(word[i]);
//}

//// pop off the stack in reverse order
//for (let i = 0; i < word.length; i++) {
//  rword += letters.pop();
//}

//if (rword === word) {
//  console.log(word + " is a palindrome!");
//} else {
//  console.log(word + " is NOT a palindrome!");
//}

// Implementing stacks inside JavaScript

//---------------------------------------

var stack = function () {
  this.count = 0;
  this.storage = {};

  //add value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //check size of stack
  this.size = function () {
    return this.count;
  };

  //returns value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var createdStack = new stack();
// var arrayStack = []

//using array

let grads = [
  "Leona",
  "Neo",
  "Koketso",
  "Nathan",
  "Medgar",
  "James",
  "Ramahadi",
  "Joseph",
  "Gcwetha",
];

// console.log(grads[2]);

for (let index = 0; index < grads.length; index++) {
  createdStack.push(grads[index]);
}

console.log(createdStack.size());
console.log(createdStack.peek());
console.log(createdStack.pop());
console.log(createdStack.peek());
console.log(createdStack.pop());
console.log(createdStack.peek());
console.log(createdStack.pop());
console.log(createdStack.peek());
console.log(createdStack.pop());
console.log(createdStack.peek());
console.log(createdStack.pop());
console.log(createdStack.peek());
console.log(createdStack.pop());
console.log(createdStack.peek());
console.log(createdStack.pop());
console.log(createdStack.peek());
console.log(createdStack.pop());
console.log(createdStack.peek());
console.log(createdStack.pop());
console.log(createdStack.peek());
