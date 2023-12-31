function isPrime(angka) {
  if (angka <= 1) return false;
  if (angka <= 3) return true;
  if (angka % 2 === 0 || angka % 3 === 0) return false;

  let i = 5;
  while (i * i <= angka) {
    if (angka % i === 0 || angka % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

// make function mirrorPrime
function mirrorPrime(angka) {
  if (isPrime(angka)) {
    let reverse = 0;
    let temp = angka;
    while (temp > 0) {
      reverse = reverse * 10 + temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (isPrime(reverse)) {
      console.log("Mirror Prime");
    } else {
      console.log("Regular Number");
    }
  } else {
    console.log("Regular Number");
  }
}

// // Taking input
const input = 11;

// // Printing the output
const output = mirrorPrime(input);


function isMagicPrime(angka) {
  let angkaString = angka.toString();

  for (let i = 0; i < angkaString.length; i++) {
    let truncatedNum = parseInt(angkaString.slice(i));
    if (!isPrime(truncatedNum)) {
      return false;
    }
  }

  return true;
}

function generateMagicPrimes(start, end) {
  const magicPrimes = [];

  for (let angka = start; angka <= end; angka++) {
    if (isPrime(angka) && isMagicPrime(angka)) {
      magicPrimes.push(angka);
    }
  }

  return magicPrimes;
}

// Example usage to generate magic primes between 100 and 500
// const magicPrimes = generateMagicPrimes(100, 1000);
// magicPrimes.slice(0, 10).forEach((angka, index) => {
//   console.log(`#${index + 1} Number => ${angka}`);
// });
