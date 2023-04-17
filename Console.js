const String = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        idside: {
            key: 'value',
        }
    }
};

console.time('전체 시간');
console.log('평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.');
console.error('에러 메세지는 console.error에 담아주세요.');
console.table([{name: '제로', birth: 1994}, {name: 'hero', birth: 1988}]);

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});

console.time("시간 측정"); // console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정합니다.
for (let i = 0; i< 100000; i++) {}
console.timeEnd("시간 측정");

function b() {
    // 에러가 어디서 발생했는지 추적할 수 있게 합니다. 
    // 보통은 에러 발생 시 에러 위치를 알려주므로 자주 사용하지 않지만, 위치가 나오지 않는다면 사용할 만합니다.
    console.trace('에러 위치 추적');
}

function a() {
    b();
}
a();

console.timeEnd('전체 시간');

console.log(process.cpuUsage());