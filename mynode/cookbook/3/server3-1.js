var http = require('http');
var url = require('url');
var clientHtml = require('fs').readFileSync('client3-1.html');
var profiles = require('./profiles');
http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true);
  var callback = urlObj.query.callback;
  var who = urlObj.query.who;
  var profile;
  if (callback && who) {
    profile = callback + "(" + JSON.stringify(profiles[who]) + ")";
    res.end(profile);
  } else {
    res.end(clientHtml);
  }
}).listen(7771);