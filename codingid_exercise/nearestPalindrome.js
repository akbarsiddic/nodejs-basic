// function main() {
//   const input = 212;
//   //DO YOUR CODE HERE
//   // 1. bagaimana cara mengambil palindrome
//   // 2. bagaimana cara mengambil palindrome terdekat

//   function isPalindrome(input) {
//     const inputStr = input.toString();
//     const reverseInput = inputStr.split('').reverse().join('');
//     if (inputStr === reverseInput) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   function closestPalindrome(input) {
//     const inputStr = input.toString();
//     const halfInput = inputStr.substring(0, Math.floor(inputStr.length / 2));
//     const halfUp = inputStr.substring(0, Math.ceil(inputStr.length / 2));
//     const reverseInput = halfInput.split('').reverse().join('');
//     const reverse = inputStr.split('').reverse().join('');

//     if (isNaN(input)) {
//       return 'Wrong Input';
//     }

//     // If they have same length get the lowest number.
//     if (inputStr.length === reverse.length) {
//       if (input < reverse) {
//         return `Closest Palindrome: ${parseInt(reverse)}`;
//       } else {
//         return `Closest Palindrome: ${parseInt(reverseInput + halfInput)}`;
//       }
//     }

//     if (isPalindrome(input)) {
//       for (let i = input - 1; i >= 1; i--) {
//         if (isPalindrome(i)) {
//           return `Closest Palindrome: ${parseInt(i)}`;
//         }
//       }
//     }

//     if (inputStr % 2 === 0) {
//       return `Closest Palindrome: ${parseInt(halfInput + reverseInput)}`;
//     } else {
//       return `Closest Palindrome: ${parseInt(halfUp + reverseInput)}`;
//     }
//   }

//   const output = closestPalindrome(input);
//   console.log(output);
// }

// main();


function isPalindrome(num) {
    const strNum = num.toString();
    const len = strNum.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (strNum[i] !== strNum[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function closestPalindrome(number) {
    if (isNaN(number)) {
        return 'Wrong Input';
    }

    let lowerPalindrome = 0;
    let upperPalindrome = 0;

    let tempNumber = number;
    while (true) {
        tempNumber--;
        if (isPalindrome(tempNumber)) {
            lowerPalindrome = tempNumber;
            break;
        }
    }

    tempNumber = number;
    while (true) {
        tempNumber++;
        if (isPalindrome(tempNumber)) {
            upperPalindrome = tempNumber;
            break;
        }
    }

    let rangeLower = number - lowerPalindrome;
    let rangeUpper = upperPalindrome - number;

    if (rangeLower === rangeUpper) {
        return `Closest Palindrome: ${lowerPalindrome}`;
    } else if (rangeLower > rangeUpper) {
        return `Closest Palindrome: ${upperPalindrome}`;
    } else {
        return `Closest Palindrome: ${lowerPalindrome}`;
    }
}

// Example usage:
console.log(closestPalindrome(12345));  // Output will be the closest palindrome to 12345
