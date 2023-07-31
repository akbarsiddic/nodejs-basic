const input = parseInt(readLine());
const input2 = parseInt(readLine());

//DO YOUR CODE HERE
function minMax(input, input2) {
  if (
    input >= 50 ||
    input2 >= 50 ||
    input <= 0 ||
    input2 <= 0 ||
    isNaN(input) ||
    isNaN(input2)
  ) {
    return 'Wrong Input';
  }

  if (input === input2) {
    return 'Same Input';
  }

  if (input % 5 === input2 % 5) {
    return Math.max(input, input2);
  } else {
    return Math.min(input, input2);
  }
}
const output = minMax(input, input2);
console.log(output);
