
var crypto = require('crypto');
var db = require('./database').createClient();

var Users = function() {};

Users.prototype.authenticate = function(name, password, callback) {
  db.query('select * from users where name = ?',
          [name], queryCallback);
  function queryCallback(err, results, fields) {
    db.end();
    if (err) {
      callback(err);
      return;
    }
    if (results && (results.length > 0)) {
      userInfo = results[0];
      if (userInfo.password === _hashPassword(password)) {
        delete userInfo.password;
        callback(null, userInfo);
        return;
      }
    }
    // 該当ユーザなし
    callback(err, null);
    return;
  }
};

function _hashPassword(password) {
  if (password === '') {
    return '';
  }
  var shasum = crypto.createHash('sha256');
  shasum.update(password);
  return shasum.digest('hex');
}

Users.prototype.createUser = function(name, password, callback) {
  if (!name || !password) {
    console.log('name or password is invalid.')
    return;
  }
  db.query('select * from users where name = ?',
    [name],
    function(err, results, fields) {
      db.end();
      if (err) {
        callback(err);
        return;
      }
      if (results && (results.length > 0)) {
        console.log('user name is already exited.');
        return;
      } else {
        // 登録処理
        db.query('insert into users set name = ?, password = ?;',
          [name, _hashPassword(password)],
          function(err, results) {
            db.end();
            if (err) {
              callback(err);
              return;
            }
            callback(null, results);
          }
        );
      }
    }
  );
};

function createClient() {
  return new Users();
}

exports.createClient = createClient;
