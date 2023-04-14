const {odd, even} = require('./Make_module_var');
const checkNumber = require('./Make_module_func');

function checkStringOddOrEven(str) {
    if (str.length % 2) { // 홀수이면
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));