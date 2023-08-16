function mirrorPrime(input){
    // check if input is a prime number
    // if it is, then check if the reverse of the number is also a prime number
    // if it is, then return true
    // if it is not, then return false
    
    // code
    let reverse = 0;
    let temp = input;
    while (temp > 0) {
        reverse = reverse * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    return isPrime(input) && isPrime(reverse);

}

function isPrime(num) { // returns boolean
  if (num <= 1) return false; // negatives
  if (num % 2 == 0 && num > 2) return false; // even numbers
  const s = Math.sqrt(num); // store the square to loop faster
  for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
      if(num % i === 0) return false; // modulo shows a divisor was found
  }
  return true;
}

// // Taking input
 const input = 13;

// // Printing the output
    const output = isPrime(121);