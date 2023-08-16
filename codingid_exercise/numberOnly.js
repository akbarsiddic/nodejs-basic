function numberOnly (input) {

    // Given a string, sum the numbers that appear in the string and ignore all other characters.
    // Return the sum as an integer.

    // Example:
    // Input: "abc123xyz"
    // Output: 123

    // Input: "aa11b33"
    // Output: 44

    // code 
    let result = 0;
    let temp = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= '0' && input[i] <= '9') {
            temp += input[i];
        } else {
            if (temp !== '') {
                result += parseInt(temp);
                temp = '';
            }
        }
    }
    if (temp !== '') {
        result += parseInt(temp);
    }
    return result;
    



}

const output = numberOnly('aa11b33');
console.log(output);