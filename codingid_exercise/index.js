// const moment = require("moment");

// const date = moment().format("MMMM Do YYYY, h:mm:ss a");
// console.log(date);

// const message = (name) => {
//   console.log(`Hello ${name}`);
// };

// message("Javascript");

// function pickLift(N) {
//   const liftA = 1; // Lift A is at ground floor (floor 1)
//   const liftB = 7; // Lift B is at top floor (floor 7)

//   if (N < 1 || N > 7) {
//     return 'Cannot pick you up';
//   }

//   // Calculate distances of Nth floor from each lift
//   const distanceFromA = Math.abs(N - liftA);
//   const distanceFromB = Math.abs(N - liftB);

//   if (distanceFromA < distanceFromB) {
//     return 'A'; // Lift A is closer
//   } else if (distanceFromA > distanceFromB) {
//     return 'B'; // Lift B is closer
//   } else {
//     return 'A'; // If equidistant, prefer Lift A
//   }
// }

// input = 4;
// const closestLift = pickLift(input);
// console.log(closestLift);

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const input = readLine();
  //DO YOUR CODE HERE
  function Lift(input) {
    const liftA = 1;
    const liftB = 7;

    if (input < 1 || input > 7) {
      return 'Wrong Input';
    }

    let jarakA = Math.abs(liftA - input);
    let jarakB = Math.abs(liftB - input);

    if (jarakA < jarakB) {
      return 'A';
    } else if (jarakA > jarakB) {
      return 'B';
    } else {
      return 'A';
    }
  }
  const liftTerdekat = Lift(input);
  console.log(liftTerdekat);
}
