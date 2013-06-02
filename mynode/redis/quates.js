
var redis = require('redis');
var client = redis.createClient();
var params = {author: process.argv[2], quote: process.argv[3]}

client.on('ready', function() {
  if (params.author && params.quote) {
    var randKey = 'Quotes:' + (Math.random() * Math.random()).toString(16).replace('.', '');
    client.hmset(randKey, {
      'author': params.author,
      'quote': params.quote
    });
    client.sadd('Author:' + params.author, randKey);
  }

  if (params.author) {
    client.smembers('Author:' + params.author, function(err, keys) {
      keys.forEach(function(key) {
        client.hgetall(key, function(err2, hash) {
          console.log(key);
          console.log('%s:%s', hash.author, hash.quote)
        });
      });
      client.quit();
    });
  }
  else {
    client.quit();
  }
});
