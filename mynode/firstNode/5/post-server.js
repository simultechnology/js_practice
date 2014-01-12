
var http = require('http');
var querystring = require('querystring');

var server = http.createServer();
server.on('request', function(request, response) {

  if (request.method === 'POST') {
    var data = '';
    request.on('data', function(chunk) {
      data += chunk;
    });
    request.on('end', function() {
      var query = querystring.parse(data);

      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      console.log(query);
      Object.keys(query).forEach(function(key) {
        response.write(key + ' : ' + query[key] + '<br>');
      });
      response.end();
    });
  }
});

server.listen(12222, '127.0.0.1');