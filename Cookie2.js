const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const parseCookies = (cookie = "") => 
    cookie.split(';')
    .map((data) => data.split("="))
    .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
    return acc;
    }, {});

http.createServer(async (req, res) => {
    const cookie = parseCookies(req.headers.cookie);
    // 주소가 /login인 경우
    if (req.url.startsWith('/login')) {
        const url = new URL(req.url, 'http://localhost:8084');
        const name = url.searchParams.get('name');
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 1);
        res.writeHead(302, {
            Location: '/',
            "Set-Cookie": `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
        });
        res.end();
    }
    // 주소가 /이면서 name 쿠키가 있을 때
    else if (cookie.name) {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${cookie.name}님 안녕하세요.`);
    }
    // 주소가 /이면서 name 쿠키가 없을 때
    else {
        try {
            const data = await fs.readFile(path.join(__dirname, 'Cookie2.html'));
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        }
        catch (error) {
            res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(error.message);
        }
    }
}).listen(8084, () => {
    console.log('포트 번호 8084로 서버가 열렸습니다.');
})