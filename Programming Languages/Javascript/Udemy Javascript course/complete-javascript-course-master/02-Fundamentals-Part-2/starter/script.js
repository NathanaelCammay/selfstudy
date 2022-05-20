"use strict";
/* let hasDriversLicence = false;
const passTest = true;

if (passTest) {
  hasDriversLicence = true;
}

if (hasDriversLicence) {
  console.log("I can drive!");
}

// const interface = "audio"; */

//////////////// Functions Introduction //////////////////

// function logName() {
//   console.log("`My name is Nathanael Cammay");
// }

// logName();
// logName();
// logName();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const midnightJuice = fruitProcessor(5, 0);
// console.log(midnightJuice);

// const appleOrangeMix = fruitProcessor(10, 10);
// console.log(appleOrangeMix);

////////////// Function declarations and expressions //////////////////

// Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

////////////// Arrow Functions ////////

// const arrowFunction1 = (birthYear) => 2022 - birthYear;
// const arrowFunctionVariable = arrowFunction1(1997);
// console.log(arrowFunctionVariable);

// const yearsToRetirement = (birthYear) => {
//   const age = 2022 - birthYear;
//   const yearsLeft = 65 - age;

//   return yearsLeft;
// };

// console.log(yearsToRetirement(1997));

//////// calling functions with functions ////////

// function fruitPieces(wholeFruits) {
//   return wholeFruits * 5;
// }

// function fruitProcessor(apples, oranges) {
//   const appleSlices = fruitPieces(apples);
//   const orangeSlices = fruitPieces(oranges);

//   const juice = `This juice contains ${appleSlices} slices of apple and ${orangeSlices} slices of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(5, 5));

///////// reviewing functions /////

//function to calculate age of individual
// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

//function to calculate individuals working years before retirement
// const yearsLeft = function (yearsOld) {
//   return 65 - yearsOld;

// };

// //function to concatenate name and surname entry
// const nameString = function (name, surname) {
//   return name + " " + surname;
// };

// const yearsToRetirement = function (age, name, surname) {
//   //   const age = calcAge(birthYear);
//   //   const age = 2022 - birthYear;
//   const yearsToRetire = yearsLeft(age);
//   const nameSurname = nameString(name, surname);

//   if (yearsToRetire >= 0) {
//       return `${nameSurname} retires in ${yearsToRetire} years time! 😶`;
//   } else {
//     return `${nameSurname} is already enjoying his retirement 🎈`;

//   }
// };

// console.log(yearsToRetirement(66, "Nathanael", "Cammay"));

/////////////////// Arrays //////////////////

/*

// different ways of declaring arrays
const friendArray = ["Lesego", "Tidi", "Giovanni"];
const rapperArray = new Array("Drake", "J Cole", "Kanye");

// how to retreive value inside an array
console.log(friendArray[0]);

//use length property to find number of items in array

console.log(friendArray.length);

//retreive the last value of array
console.log(friendArray[friendArray.length - 1]);

//replace array element with a new value

rapperArray[1] = "Jay Z";
console.log(rapperArray);

// declare array element using a variable and using an array inside an array

const firstName = `Nathanael`;
const lastName = `Cammay`;
const Nathan = [firstName, lastName, 2022 - 1997, `Developer`, friendArray];
console.log(Nathan);

//Exercise

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const ages = [1997, 1999, 2002, 2004, 1995];

const age1 = calcAge(ages[0]);
const age2 = calcAge(ages[1]);
const age3 = calcAge(ages[ages.length - 1]);

console.log(age1, age2, age3);

//placing function calls into an array - as an array element will be declared
//  as long as an expression is declared.

const arrayFunctionCall = [
  calcAge(ages[0]),
  calcAge(ages[1]),
  calcAge(ages[ages.length - 1]),
];
console.log(arrayFunctionCall);

*/

////////////////////// Basic Methods (Array Operations) /////////////////////////////

/*

const friendArray = ["Lesego", "Tidi", "Giovanni"];

// using methods, similar to C#

//push method adds an element to the end of the array

friendArray.push("God");
console.log(friendArray);

// unshift method adds element to the beginning of the array

friendArray.unshift("Jesus");
console.log(friendArray);

// pop method removes last element from the array

friendArray.pop();
console.log(friendArray);

// shift method with no argument removes first element from arry

friendArray.shift();
console.log(friendArray);

// tells us position element is in arrayFunctionCall
console.log(friendArray.indexOf("Giovanni"));
console.log(friendArray.indexOf("Denzel"));

// includes method will let you know whether velue exists in the array or not
console.log(friendArray.includes("Giovanni"));
console.log(friendArray.includes("Denzel"));

*/

///////////////////////// Objects //////////////////////////////////

//Arrays may allow you to store related values into a single array, but they don't allow you to give each value a unique name or identity.
// This is where Objects coome into play.

/*

const nathanArray = [
  "Nathanael",
  "Cammay",
  2022 - 1997,
  "Teacher",
  ["Lesego", "Tidi", "Giovanni"],
];

console.log(nathanArray);

// now storing values which will all have a value name

const nathanObject = {
  firstName: "Nathanael",
  lastName: "Cammay",
  age: 2022 - 1997,
  job: "Teacher",
  friends: ["Lesego", "Tidi", "Giovanni"],
};

console.log(nathanObject);

////////////// dot vs bracket notation ///////

// Getting a property using the . notation

console.log(nathanObject.firstName);

// Getting a property using the brackets notation

console.log(nathanObject["firstName"]);

// const propertySelection = prompt(
//   "Which property would you like to view? firstName, lastName, job, age, or friends? Remember JavaScript is case sensitive!"
// );

// nathanObject[propertySelection]
//   ? console.log(nathanObject[propertySelection])
//   : alert("This property does not exist");

// if (nathanObject[propertySelection]) {
//   console.log(nathanObject[propertySelection]);
// } else {
//   alert(` "${propertySelection}" is not a valid characteristic`);
// }

///// adding a property to an object using the dot and brackets notation

nathanObject.location = "South Africa";
nathanObject["city"] = "Johannesburg";

console.log(nathanObject);

console.log(`${nathanObject.firstName} has ${nathanObject.friends.length} friends, and his best friend is called ${nathanObject.friends[0]}`);

*/

///////// Object Methods //////////////////////////////////////////////////////////////////

/*

const nathanObject = {
  firstName: "Nathanael",
  lastName: "Cammay",
  birthYear: 1997,
  job: "Teacher",
  friends: ["Lesego", "Tidi", "Giovanni"],
  hasDriversLicence: false,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};

// calcAge is a function inside an object, hence it is a property of the object.
// a function property inside an object is referred to as a methods

console.log(nathanObject.calcAge());
console.log(nathanObject.calcAge(nathanObject.birthYear));
console.log(nathanObject["calcAge"](nathanObject.birthYear));
console.log(nathanObject.age);
console.log(nathanObject);

console.log(
  `${nathanObject.firstName} is a ${nathanObject.age} year old ${
    nathanObject.job
  } who ${
    nathanObject.hasDriversLicence ? "has a licence" : "does not have a licence"
  }`
);

*/

///////////////////////////////////// For Loop /////////////////////////////////////

// For loop keeps executing code block while the condition is TRUE

// let repetitions = 0;

// for (repetitions; repetitions <= 10; repetitions++) {
//   console.log(`repetitions ${repetitions} COMPLETED 🦾`);
// }

///  Loop arrays, breaking and continuing ///

// const nathanArray = [
//   "Nathanael",
//   "Cammay",
//   2022 - 1997,
//   "Software Engineer",
//   ["Lesego", "Tidi", "Giovanni, Thato"],
// ];

// //log all elements in array to console

// const type = [];

// /// start counter at 0 as elements in arrays start at 0
// for (let i = 0; i <= nathanArray.length - 1; i++) {
//   console.log(nathanArray[i], typeof nathanArray[i]);

//   type[i] = typeof nathanArray[i];
// }

// console.log(type);

// //// filling in an empty array using a loop

// const goat = ["Federer", "Nadal", "Djokovic"];

// const value = [];

// for (let i = 0; i < goat.length; i++) {
//   value[i] = typeof goat[i];
// }

// console.log(value);

// const birthYear = [1997, 1995, 1991, 1965];
// const age = [];

// for (let i = 0; i < birthYear.length; i++) {
//   age.push(2022 - birthYear[i]);
// }
// console.log(age);

// ///////// continue and break ///////////

// // The continue statement commands code to skip iteration execution of code if condition is met

// for (let i = 0; i < nathanArray.length; i++) {
//   if (typeof nathanArray[i] !== "string") continue;

//   console.log(nathanArray[i]);
// }

// // break statement terminates the entire loop
// console.log("------ BREAK LOG ------");

// for (let i = 0; i < nathanArray.length; i++) {
//   if (typeof nathanArray[i] === "number") break;

//   console.log(nathanArray[i]);
// }

///////////// Loops inside loops and looping backwards ////////////////

// const nathanArray = [
//   "Nathanael",
//   "Cammay",
//   2022 - 1997,
//   "Software Engineer",
//   ["Lesego", "Tidi", "Giovanni", "Thato"],
// ];

// // loop this array backwards

// for (let i =  nathanArray.length-1; i >= 0; i--){

//     console.log(nathanArray[i]);
// }

// // loops inside loops //
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

//////////////////// WHILE LOOP ////////////////////////

// let rep = 1;

// while (rep <= 10) {
//   console.log(`repetition ${rep} COMPLETED 🦾`);
//   rep++;
// }

// while loop is more useful when you don't need a counter/increment

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice} 🎲`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Congratulations, you finally rolled a 6 🎲");
// }
