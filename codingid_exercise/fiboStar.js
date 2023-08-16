// function fibonacciWithStars(n, m) {
//     // The Fibonacci sequence corresponds to the number of numbers entered if the number is a multiple of the second input it will print  " * " without double quotes.
//     // Example:
//     // Input: 5, 3
//     // Output: 1 2 * 5 8
//     // Input: 20, 2
//     // Output: 1  * 3 5  * 13 21  * 55 89  * 233 377  * 987 1597  * 4181 6765 *

//     // code
//     let result = '';
//     let temp = 0;
//     let prev = 0;
//     let curr = 1;
//     for (let i = 0; i < n; i++) {
//         if (i % m === 0) {
//             result += '* ';
//         } else {
//             result += `${curr} `;
//         }
//         temp = curr;
//         curr += prev;
//         prev = temp;
//     }
//     return result;
// }

// // Taking input
// const n = 10
// const m = 3

// // Generating the sequence and marking multiples
// const result = fibonacciWithStars(n, m);

// // Printing the output
// console.log(result);


function generateFibonacciSequence(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [1];
    }

    const sequence = [1, 2];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    return sequence;
}

// // Taking input
// const n = 10;

// // Generating the Fibonacci sequence
// const fibonacciSequence = generateFibonacciSequence(n);

// // Printing the output
// console.log(fibonacciSequence);


function fibonaciWithStars(n, m){
    // lenght of input <= 100 and limit of number >=0 .

    if(input > 100 || input2 < 0 || isNaN(input) || isNaN(input2)){
            console.log('Wrong Input')
            return
        }


    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [1];
    }

    const sequence = [1, 2];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] % m === 0) {
            sequence[i] = '*';
        }
    }

    return sequence;


}

// Taking input
const n = 10;
const m = 3;

// Generating the Fibonacci sequence
const fibonacciSequence2 = fibonaciWithStars(n, m);

// Printing the output
console.log(fibonacciSequence2.join(' '));
