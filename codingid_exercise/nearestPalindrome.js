function main() {
  const input = 121;
  //DO YOUR CODE HERE
  // 1. bagaimana cara mengambil palindrome
  // 2. bagaimana cara mengambil palindrome terdekat

  function isPalindrome(input) {
    const inputStr = input.toString();
    const reverseInput = inputStr.split('').reverse().join('');
    if (inputStr === reverseInput) {
      return true;
    } else {
      return false;
    }
  }

  function closestPalindrome(input) {
    const inputStr = input.toString();
    const halfInput = inputStr.substring(0, Math.floor(inputStr.length / 2));
    const halfUp = inputStr.substring(0, Math.ceil(inputStr.length / 2));
    const reverseInput = halfInput.split('').reverse().join('');
    const reverse = inputStr.split('').reverse().join('');

    if (isNaN(input)) {
      return 'Wrong Input';
    }

    // If they have same length get the lowest number.
    if (inputStr.length === reverse.length) {
      if (input < reverse) {
        return `Closest Palindrome: ${parseInt(reverse)}`;
      } else {
        return `Closest Palindrome: ${parseInt(reverseInput + halfInput)}`;
      }
    }

    if (isPalindrome(input)) {
      for (let i = input - 1; i >= 1; i--) {
        if (isPalindrome(i)) {
          return `Closest Palindrome: ${parseInt(i)}`;
        }
      }
    }

    if (inputStr % 2 === 0) {
      return `Closest Palindrome: ${parseInt(halfInput + reverseInput)}`;
    } else {
      return `Closest Palindrome: ${parseInt(halfUp + reverseInput)}`;
    }
  }

  const output = closestPalindrome(input);
  console.log(output);
}

main();
