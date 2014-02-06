var http = require('http');
var url = require('url');

var pages = [
  {id: '1', route: '', output: 'Woohoo!'},
  {id: '2', route: 'about', output: 'this is a simple sample!'},
  {id: '3', route: 'another page', output: function() {
    return 'this is ' + this.route;
  }}
];

http.createServer(function (request, response) {
  var id = url.parse(decodeURI(request.url), true).query.id;
  if (id) {
    pages.forEach(function(page) {
      if (page.id === id) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(typeof page.output === 'function' ? page.output() : page.output);
      }
    });
  }

  if (!response.finished) {
    response.writeHead(404);
    response.end('not founded!');
  }
}).listen(7780);