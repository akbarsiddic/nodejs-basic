function wordProcess(input) {
  const lowercase = input.toLowerCase();
  const remove = lowercase.replace(/\s/g, '');
  const sort = remove.split('').sort().join('');

  // sorting string
  // const sort = remove.split('').sort().join('');

  return sort;
}

const output = wordProcess(input);
console.log(output);
