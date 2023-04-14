// setInterval(function, millisecond)는 일정 시간(ms) 마다 함수를 실행하는 기능입니다.
    // 실행되고 있는 인터벌 함수를 중지시키려면 clearInterval([인터벌 변수])를 사용하여 정지합니다.

const interval = setInterval(() => {
    console.log("시작");
    try {
        throw new Error('서버를 고장내주마!'); // 에러를 강제로 만듦
    } 
    catch(err) {
        console.log(err);
    }
    clearInterval(interval);
}, 1000);


// 노드 자체에서 잡아주는 에러
    // throw로 에러를 발생시키는 경우 노드 프로세스가 멈춰버립니다.
    // 따라서 throw로 에러를 발생시킬 때에는 반드시 try/catch 문으로 throw한 에러를 잡아야 합니다.
const fs = require('fs');
const node_interval = setInterval(() => {
    fs.unlink('./abc.js', (err) => {
        if (err) console.log(err);
    })
    clearInterval(node_interval);
}, 1000);


// 노트 16 버전부터 프로미스의 에러는 반드시 catch해야 합니다.
    // catch하지 않으면 에러와 함께 노드 프로세스가 종료됩니다.
const fs_promise = require('fs').promises;
const promise_interval = setInterval(() => {
    fs_promise.unlink('./abc.js').catch(console.error);
    clearInterval(promise_interval);
}, 1000);


// 예측 불가능한 에러 처리하는 방법
process.on('uncaughtException', (err) => { // process 객체에 uncaughtException 이벤트 리스너를 넣음
    // 처리하지 못한 에러가 발생했을 때 이벤트 리스너가 실행되고 프로세스가 유지됩니다.
    // 이 부분이 없다면 setTimeout이 실행되지 않습니다. 실행 후 1초 만에 setInterval에서 에러가 발생해 프로세스가 멈추기 때문
    console.error('예기치 못한 에러', err);
});

setInterval(() => {
    throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
    console.log('실행됩니다.');
}, 2000);
        // uncaughtException은 단순히 에러 내용을 기록하는 정도로 사용하고, 
        // 에러를 기록한 후 process.exit()으로 프로세스를 종료하는 것이 좋습니다. 
        // 에러가 발생하는 코드를 수정하지 않는 이상, 프로세스가 실행되는 동안 에러는 계속 발생할 것입니다.