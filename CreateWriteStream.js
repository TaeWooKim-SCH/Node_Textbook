const fs = require('fs');


const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish', () => { // 파일 쓰기가 종료되면 콜백 함수가 호출됩니다.
    console.log('파일 쓰기 완료');
})
writeStream.write('이 글을 씁니다.');
writeStream.write('한 번 더 씁니다.');
writeStream.end(); // 데이터를 다 썼다면 end 메서드로 종료를 알립니다. 이때 finish 이벤트가 발생합니다.