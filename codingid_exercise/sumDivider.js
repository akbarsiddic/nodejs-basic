function sumDivider(input) {
  let result = 0;

  for (let i = 1; i <= input - 1; i++) {
    // if i divided by 3 or 7 is 0 then add to result
    if (i % 3 === 0 || i % 7 === 0) {
      result += i ;
    }
  }
  return result;
}

console.log(sumDivider(10));

function multiple(input){
  // find sum 
}