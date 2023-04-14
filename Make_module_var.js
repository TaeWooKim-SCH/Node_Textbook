const odd = "CJS 홀수입니다.";
const even = "CJS 짝수입니다.";


module.exports = {
    odd,
    even
}

// exports 객체로도 모듈을 만들 수 있습니다.
exports.odd = "CJS 홀수입니다.";
exports.even = "CJS 짝수입니다.";


// 동일하게 동작하는 이유는 module.exports와 exports가 같은 객체를 참조하기 때문입니다.
// 실제로 console.log(module.exports === exports)를 하면 true가 나옵니다. 
// 따라서 exports 객체에 add 함수를 넣으면 module.exports에도 add 함수가 들어갑니다.
console.log(module.exports);

// exports 객체를 사용할 때는 module.exports와의 참조 관계가 깨지지 않도록 주의해야 합니다.
// module.exports에는 어떤 값이든 대입해도 되지만, exports에는 반드시 객체처럼 속성명과 속성값을 대입해야 합니다. 
// exports에 다른 값을 대입하면 객체의 참조 관계가 끊겨 더는 모듈로 기능하지 않습니다.
// exports를 사용할 때는 객체만 사용할 수 있으므로 func.js와 같이 module.exports에 함수를 대입한 경우에는 exports로 바꿀 수 없습니다.
// exports와 module.exports에는 참조 관계가 있으므로 한 모듈에 exports 객체와 module.exports를 동시에 사용하지 않는 것이 좋습니다.