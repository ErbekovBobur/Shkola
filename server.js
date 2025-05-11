const http = require('http');
const fs = require('fs');
const port = 8080;

http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
