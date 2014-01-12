
var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200);
  response.write('URL: ' + request.url + '\n');
  response.end('hello ' + request.url + ' !!');
  setInterval(function() {
    console.log('on');
  }, 1000);
});

server.listen(4489, '127.0.0.1');

setTimeout(function() {
  server.close();
}, 10000);


