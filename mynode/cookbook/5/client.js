var WSClient = require('websocket').client;

new WSClient()
  .on('connect', function(connection) {
    var msg = 'Hello';
    connection.send(msg);
    console.log('送信 : ' + msg);
    connection.on('message', function(msg) {
      console.log('受信 : ' + msg.utf8Data);
    }).on('close', function(code, desc) {
      console.log('切断 : ' + code + ' - ' + desc);
    }).on('error', function(error) {
      console.log('エラー : ' + error.toString());
    });
  }).on('connectFailed', function(error) {
    console.log('コネクションエラー : ' + error.toString());
  }).connect('ws://localhost:8281/', null, 'http://localhost:8281');