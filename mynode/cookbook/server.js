var http = require('http');
var path = require('path');

var pages = [
  {route: '', output: 'Woohoo!'},
  {route: 'about', output: 'this is a simple sample!'},
  {route: 'another page', output: function() {
    return 'this is ' + this.route;
  }}
];

http.createServer(function (request, response) {
  var lookup = path.basename(decodeURI(request.url));
  pages.forEach(function(page) {
    if (page.route === lookup) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(typeof page.output === 'function' ? page.output() : page.output);
    }
  });
  if (!response.finished) {
    response.writeHead(404);
    response.end('not founded!');

  }
}).listen(11001);