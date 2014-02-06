var http = require('http');
var clientHtml = require('fs').readFileSync('client5-2.html');
var plainHttpServer = http.createServer(function (req, res) {
  res.writeHead(200, {'CONTENT_TYPE': 'text/html'});
  res.end(clientHtml);
}).listen(8383);

var io = require('socket.io').listen(plainHttpServer);
io.set('origins', ['localhost:8383', '127.0.0.1:8383']);
io.sockets.on('connection', function(socket) {
  socket.on('message', function(msg) {
    if (msg === 'Hello') {
      socket.send('socket.io ! ');
    }
  });

  setTimeout(function() {
    socket.emit('hello', 'hello, socket.io ! ');
  }, 2000);

  socket.on('helloback', function(from) {
    console.log("%s からhellobackを受信しました。", from);
  });
});
