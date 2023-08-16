// function aritmethic(){
//     // how to print arithmethic 2 5 7 3 6 8 4 7 9 
//     // 2 5 7
//     // 3 6 8
//     // 4 7 9

// }

// function printIncrementedValues(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     const originalNumber = numbers[i];
//     const incrementedNumber = originalNumber + 1;
//     console.log(originalNumber + ' + 1 = ' + incrementedNumber);
//   }
// }

// // Example usage
// const numbers = [2, 5, 7, 3, 6, 8, 4, 7, 9];
// printIncrementedValues(numbers);

// function generateArithmeticSequence(maxNumber) {
//   const sequence = [];
//   let currentNumber = 2; // Starting number

//   while (currentNumber <= maxNumber) {
//     sequence.push(currentNumber);
//     currentNumber += 3; // Increment by 3 in this example
//   }

//   return sequence;
// }

// // Example usage
// const inputNumber = 20;
// const arithmeticSequence = generateArithmeticSequence(inputNumber);
// console.log(arithmeticSequence.join(' '));

// function generateArithmeticSeries(inputNumber) {
//     const series = [];
//     let currentNumber = 5; // Starting number
    
//     while (currentNumber <= inputNumber) {
//         series.push(currentNumber);
//         currentNumber += 3; // Increment by 3 in this example
//     }
    
//     return series;
// }

// Example usage
// const inputNumber = 10;
// const arithmeticSeries = generateArithmeticSeries(inputNumber);
// console.log(arithmeticSeries.join(' '));

function generateCustomSeries(length) {
    const series = [2, 5, 7];
    
    for (let i = 0; i < length - 3; i++) {
        series.push(series[i] + 1);
    }

    for (let i = 0; i < series.length; i++) {
        if (series[i] % 3 === 0 && series[i] % 5 === 0) {
            series[i] = 'Boom';
        }
    }

    for (let i = 0; i < series.length; i++) {
        if (series[i] % 3 === 0) {
            series[i] = 'Tik';
        }
    }
    
    for (let i = 0; i < series.length; i++) {
        if (series[i] % 5 === 0) {
            series[i] = 'Tak';
        }
    }
    return series;
}

// function printSeriesWithConditions(series) {
//     for (let number of series) {
//         let output = '';

//         if (number % 3 === 0) {
//             output += 'Tik ';
//         }
//         if (number % 5 === 0) {
//             output += 'Tak ';
//         }
//         if (number % 3 !== 0 && number % 5 !== 0) {
//             output = number.toString() + ' ';
//         }

//        console.log(output);
//     }
// }

const length = 27;

const customSeries = generateCustomSeries(length);
console.log(customSeries.join(' '));




