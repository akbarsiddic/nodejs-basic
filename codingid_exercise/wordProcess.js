 function wordProcess(input){
        const lowercase = input.toLowerCase()
        const remove = lowercase.replace(/\s/g, '')
        const sort = remove.split('').sort((a, b) => remove.indexOf(a) - remove.indexOf(b)).join('')
       
        return sort;
    }

const output = wordProcess2('Coding Id');
console.log(output);


function wordProcess2(input) {
  
  let result = '';

  for (let i = 0; i < input.length; i++) {

    if(input[i] === ' '){
      continue;
    }

    result += input[i]

    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        result += input[j]
        input[j] = ' '
      }
    }
  }

  return result.toLowerCase();
}