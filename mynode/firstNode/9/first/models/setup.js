var users = require('./users').createClient();

var name = 'admin', password = 'admin';

users.createUser(name, password, function(err, sid) {
  if (err) {
    console.log('user creation failed.');
  } else {
    console.log('user ' + name + ' created. sid: ' + sid);
  }
});