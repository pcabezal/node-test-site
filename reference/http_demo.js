const http = require('http');

// create a server

http.createServer((req, res) => {
    //write response
    res.write('Hello World');
    res.end();

    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello World\n');
}).listen(5000, () => console.log('server running'));