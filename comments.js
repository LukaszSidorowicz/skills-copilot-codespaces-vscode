// Create web server
// Create a web server that listens on port 3000 and returns the comments array in JSON format.

var http = require('http');
var comments = require('./comments');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
}).listen(3000, '