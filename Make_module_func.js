// require(모듈 경로), 확장자 생략 가능(js or json)
const {odd, even} = require("./Make_module_var"); // 구조 분해 할당을 통해 모듈을 불러옴.

function checkOddOrEven(num) {
    if (num % 2) {
        return odd; // 홀수이면
    }
    return even;
}

//  다른 모듈(var.js)을 사용하는 파일을 다시 모듈(func.js)로 만들 수 있습니다.
// module.exports에는 객체만 대입해야 하는 것은 아니며 함수나 변수를 대입해도 됩니다.
module.exports = checkOddOrEven;