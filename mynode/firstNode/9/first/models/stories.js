
var db = require('./database').createClient();

var Stories = function() {};

Stories.prototype.getLatest = function(count, skip, callback) {
  if ('function' === typeof skip) {
    callback = skip;
    skip = undefined;
  }
  console.log('aaa');
  skip = skip | 0;
  db.query(
    'select * from stories order by cdate desc limit ?, ?;', [skip, count],
    function(err, results, fields) {
      db.end();
      if (err) {
        callback(err);
        return;
      }
      callback(null, results);
    }
  );
};

Stories.prototype.insert = function(story, callback) {
  if (!story.cdate) {
    story.cdate = new Date();
  }
  db.query(
    'insert into stories set title = ? , slug = ? , body = ? , cdate = ?',
    [story.title, story.slug, story.body, story.cdate],
    function(err, results) {
      db.end();
      if (err) {
        console.log(err);
        callback(err);
        return;
      }
      callback(null, results);
    }
  );
};

Stories.prototype.getBySid = function(sid, callback) {
  db.query(
    'select * from stories where sid = ?', [sid],
    function(err, results, fields) {
      db.end();
      if (err) {
        callback(err);
        return;
      }
      callback(null, results);
    }
  );
};

Stories.prototype.getBySlug = function(slug, callback) {
  db.query(
    'select * from stories where slug = ?', [slug],
    function(err, results, fields) {
      db.end();
      if (err) {
        callback(err);
        return;
      }
      callback(null, results);
    }
  );
};

exports.createClient = function() {
  return new Stories();
}
