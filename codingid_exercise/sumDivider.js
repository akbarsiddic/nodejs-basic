function sumDivider(input) {
  let result = 0;

  for (let i = 1; i <= input / 2; i++) {
    if (input % i === 0) {
      result += i;
    }
  }
  return result;
}

console.log(sumDivider(24));
