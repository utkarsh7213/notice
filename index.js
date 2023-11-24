const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Set the content type to HTML
    res.setHeader('Content-Type', 'text/html');

    // Read the HTML file
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        if (err) {
            // Handle error (e.g., file not found)
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            // Send the HTML content to the client
            res.writeHead(200);
            res.end(data);
        }
    });
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
