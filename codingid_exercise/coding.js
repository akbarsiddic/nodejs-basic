function main() {
  //DO YOUR CODE HERE
  const test = '5 80 10';
  const input = test.split(' ').map(Number);

  function countDivisor(input) {
    let l = input[0];
    let r = input[1];
    let k = input[2];
    let count = 0;

    for (let i = l + 1; i < r; i++) {
      if (i % k === 0) {
        count += i;
      }
    }
    return count;
  }

  const output = countDivisor(input);
  console.log(output);
}

main();
