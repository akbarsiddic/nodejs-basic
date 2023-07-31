function main() {
  //DO YOUR CODE HERE
  const test = 7;
  const input = test;

  function countXO(input) {
    if (input < 1 || input > 40) {
      return 'Wrong Input';
    }
    let XO = '';
    for (let i = 1; i <= input; i++) {
      if (i % 2 === 1) {
        XO += 'X';
      } else {
        XO += 'O';
      }
    }
    return XO;
  }
  const output = countXO(input);
  console.log(output);
}

main();
