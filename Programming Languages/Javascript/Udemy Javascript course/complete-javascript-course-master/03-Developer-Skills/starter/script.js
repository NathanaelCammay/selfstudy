// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this:
//  "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures (especially very large array?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// ALL IN ONE FUNCTION

// const CalcTempAmplitude = function (tempArray) {
//   let max = tempArray[0];
//   let min = tempArray[0];

//   for (let i = 0; i < tempArray.length; i++) {
//     const currentTemp = tempArray[i];

//     if (typeof currentTemp !== "number") continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }

//   const amplitude = max - min;

//   console.log(amplitude);
//   return amplitude;
// };

// CalcTempAmplitude(temperatures);

// // PROBLEM 2:
// // Function should now receive 2 arrays of temps

// // 1) Understanding the problem
// // - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// // 2) Breaking up into sub-problems
// // - Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== "number") continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

///////////////////////////////// Debugging

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C: FIX

    // value: prompt("Degrees celsius:"),
    value: Number(prompt("Degrees celsius:")),
  };
  // B: FIND THE BUG
  console.table(measurement);

  console.log(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A:IDENTIFY THE BUG
console.log(measureKelvin());
