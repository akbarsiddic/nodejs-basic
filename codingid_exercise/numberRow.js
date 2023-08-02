function numberRow(input, input2) {

  if (input < 1 || isNaN(input) || (input2 !== 'Asc' && input2 !== 'Desc')) {
    return 'Wrong Input';
  }
  if (input2 === 'Asc') {
    let result = '';
    for (let i = 1; i <= input; i++) {
      result += i + ' ';
    }
    return result;
  }

  if (input2 === 'Desc') {
    let result = '';
    for (let i = input; i >= 1; i--) {
      result += i + ' ';
    }
    return result;
  }
}

console.log(numberRow(100, 'Desc'));

