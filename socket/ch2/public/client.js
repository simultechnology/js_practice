$(function() {
  var socket = io.connect();

  socket.on('connect', function() {
    console.log('connected');

    socket.emit('msg send', 'message from client');

    socket.on('msg push', function(data) {
      console.log(data); // 'message from server'
    });
  });
});
