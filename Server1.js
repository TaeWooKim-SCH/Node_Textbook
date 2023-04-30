const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
});

server.listen(8080);

server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
});
server.on('error', () => {
    console.error(error);
});


// 각각 localhost:8080과 localhost:8081 주소로 서버에 접속할 수 있습니다. 
// 이때 포트 번호가 달라야 한다는 점에 주의하세요. 포트 번호가 같으면 EADDRINUSE 에러가 발생합니다. 
// 단, 실무에서 이런 식으로 서버를 여러 개 띄우는 일은 드뭅니다.
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset = utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다!');
})

// res.write와 res.end에 일일이 HTML을 적는 것은 비효율적이므로 미리 HTML 파일을 만들어두는 것이 바람직합니다. 
// 그 HTML 파일은 fs 모듈로 읽어서 전송할 수 있습니다. 다음 예제를 통해 배워보겠습니다.