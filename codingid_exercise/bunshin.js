function sumDivider(num) {
  let result = 0;
  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) {
      result += i;
    }
  }
  return result;
}
console.log(sumDivider(24));

function bunshin(input) {
  let num = 220;
  let bunshin = [];

  while (bunshin.length < input) {
    const sumDivisorsNum = sumDivider(num);
    if (sumDivider(num) !== num && sumDivider(sumDivisorsNum) === num) {
      bunshin.push(num + ' bunshin dengan ' + sumDivisorsNum);
    }
    num++;
  }
  return bunshin.join(' ');
}

console.log(bunshin(5));
