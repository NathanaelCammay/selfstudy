// "use strict";

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const averageDolphinsScore = calcAverage(44, 23, 71);
// const averageKoalasScore = calcAverage(64, 54, 49);

// const totalPoints = (score1, score2, score3) => {
//   return score1 + score2 + score3;
// };

// const checkWinner = function (dolphinsAve, koalasAve) {
//   const totalDolphinsPoints = totalPoints(44, 23, 71);
//   const totalKoalasPoints = totalPoints(64, 54, 49);

//   if (dolphinsAve >= koalasAve * 2) {
//     return console.log(
//       `The Dolphins are the winners, with ${totalDolphinsPoints} total points 🎆 !`
//     );
//   } else if (koalasAve >= dolphinsAve * 2) {
//     return console.log(
//       `The Dolphins are the winners, with ${totalKoalasPoints} total points 🎆 !`
//     );
//   } else {
//     return console.log(
//       `Neither team have won and we have a tie! The dolphins finish with ${totalDolphinsPoints} points and the koalas finish with ${totalKoalasPoints} points!`
//     );
//   }
// };

// checkWinner(averageDolphinsScore, averageKoalasScore);

/////// codingchallenge 2 //////////////////////////////////

/* 
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  //   if (bill >= 50 && bill >= 300) {
  //     return (bill / 100) * 15;
  //   } else {
  //     return (bill / 100) * 20;
  //   }
};

console.log(calcTip(300));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total); */

//////// objects codingchallenge ///////

/*

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(
  `${john.calcBMI() > mark.calcBMI() ? john.fullName : mark.fullName}'s BMI (${
    john.calcBMI() > mark.calcBMI() ? john.BMI : mark.BMI
  }) is higher than ${
    john.calcBMI() > mark.calcBMI() ? mark.fullName : john.fullName
  }'s BMI (${john.calcBMI() < mark.calcBMI() ? john.BMI : mark.BMI})`
);

*/

//////////////////// FINAL CodingChallenge ////////////////

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  // if (bill >= 50 && bill >= 300) {
  //   return (bill / 100) * 15;
  // } else {
  //   return (bill / 100) * 20;
  // }
};

for (let i = 0; i < bills.length; i++) {
  // tips[i] = calcTip(bills[i]);
  // totals[i] = bills[i] + tips[i];
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

///Bonus
const numberArray = [7, 7, 7, 7, 7, 7, 7];
console.log(numberArray);

const calcAverage = function (arr) {
  let arraySum = 0;
  for (let i = 0; i < arr.length; i++) {
    // arraySum = arraySum + arr[i];
    arraySum += arr[i];
  }
  return arraySum / (arr.length);
};

// calcAverage(numberArray);

console.log(calcAverage(numberArray))
console.log(calcAverage(totals))
