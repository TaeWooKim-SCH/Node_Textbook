console.log("require가 가장 위에 오지 않아도 됩니다.");

module.exports = "저를 찾아보세요.";

require('./Make_module_var');

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main); // require.main은 노드 실행 시 첫 모듈을 가리킵니다.
console.log(require.main === module);
console.log(require.main.filename);

// require가 반드시 파일 최상단에 위치할 필요가 없고, module.exports도 최하단에 위치할 필요가 없다는 것입니다. 아무 곳에서나 사용해도 됩니다.
// require.cache 객체에 require.js나 var.js 같은 파일 이름이 속성명으로 들어 있는 것을 볼 수 있습니다. 속성값으로는 각 파일의 모듈 객체가 들어 있습니다.
// 한번 require한 파일은 require.cache에 저장되므로 다음 번에 require할 때는 새로 불러오지 않고 require.cache에 있는 것이 재사용됩니다.
// 만약 새로 require하길 원한다면 require.cache의 속성을 제거하면 됩니다. 다만, 프로그램의 동작이 꼬일 수 있으므로 권장하지는 않습니다.
// 현재 파일이 첫 모듈인지 알아보려면 require.main === module을 해보면 됩니다.


// ECMAScript 모듈
    // MJS 는 Node.js ES 모듈 파일입니다. 
    // Node.js 애플리케이션과 함께 사용할 ES 모듈 (ECMAScript 모듈)을 포함하는 소스 코드 파일입니다.
//         // var.mjs
// export const odd = 'MJS 홀수입니다';
// export const even = 'MJS 짝수입니다';

//         // func.mjs
// import { odd, even } from './var.mjs';

// function checkOddOrEven(num) {
//     if (num % 2) { // 홀수이면
//         return odd;
//     }
//     return even;
// }

// export default checkOddOrEven;

//         // index.mjs
// import { odd, even } from './var.mjs';
// import checkNumber from './func.mjs';

// function checkStringOddOrEven(str) {
//     if (str.length % 2) { // 홀수이면
//         return odd;
//     }
//     return even;
// }

// console.log(checkNumber(10));
// console.log(checkStringOddOrEven('hello'));