// Express
var express = require('express')
  , http = require('http')
  , app = express()
  ;

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app).listen(3000);
console.log('server start:', 3000);

// Socket.IO
var io = require('socket.io')
  , io = io.listen(server)
  ;

io.sockets.on('connection', function(socket) {
  console.log('connected');

  // メッセージの受信
  socket.on('msg send', function(data) {
    console.log(data); // message from client
    setInterval(function() {
      // データを送信したクライアントに返信
      socket.emit('msg push', 'message from server');
      // データを送信したクライアント以外のクライアントに送信
      socket.broadcast.emit('msg push', 'message from server');
    }, 3000);
  });
});
