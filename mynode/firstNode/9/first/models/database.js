var mysql = require('mysql');
var config = require('../config');

var Database = function() {};

Database.prototype.dbAuth = config.databaseAuth;

Database.prototype._getClient = function() {
  if (this.client === undefined) {
    this.client = mysql.createConnection(this.dbAuth);
  }
  return this.client;
};

Database.prototype.query = function(query, params, callback) {
  var client = this._getClient();
  return client.query(query, params, callback);
};

Database.prototype.end = function(callback) {
  if (this.client) {
    this.client.end(callback);
    delete this.client;
  }
}

function createClient() {
  return new Database();
}

exports.createClient = createClient;