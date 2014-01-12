
var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
  console.log(request.url);
  response.writeHead(200, {'CONTENT_TYPE': 'text/plain'});
  response.end('hello ' + request.url + ' !!');
});

server.listen(5444, 'localhost');