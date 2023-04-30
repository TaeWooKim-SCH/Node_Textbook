const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 }); // highWaterMark: 버퍼의 크기(바이트 단위)를 정할 수 있는 옵션
const data = [];

readStream.on('data', (chunk) => { // 파일 읽기가 시작되면 data 이벤트가 발생합니다.
    data.push(chunk);
    console.log('data :', chunk, chunk.length); // 16B씩 읽도록 설정했으므로 파일의 크기가 16B보다 크다면 여러 번 발생할 수도 있습니다.
});
// 파일의 크기가 99B라 무려 일곱 번에 걸쳐 데이터를 전송했습니다. 
// 하지만 기본값으로는 64KB씩 전송하므로 대부분의 txt 파일들은 한 번에 전송됩니다.

readStream.on('end', () => { // 파일을 다 읽으면 end 이벤트가 발생합니다.
    console.log(Buffer.concat(data));
    console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('error :', err);
});
