
var http = require('http');

var server = http.createServer();
server.on('request', function (request, response) {
  response.writeHead(200);
  response.write('URL: ' + request.url + '\n');
  response.write('Method: ' + request.method + '\n');

  Object.keys(request.headers).forEach(function(key) {
    response.write(key + ': ' + request.headers[key] + '\n');
  });
  response.end();
});

server.listen(6678, 'localhost');

