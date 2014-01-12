
var mongodb = require('mongodb');

var server = new mongodb.Server('localhost', 27017);
var db = new mongodb.Db('sampledb', server, {safe: true});

db.open(function(err, db) {
  if (err) {
    throw err;
  }

  var collection = db.collection('topics');
  var topic1 = {
    topicId: 1,
    title: 'トピック1',
    text: 'これはテスト用トピック1',
    date: new Date(),
    postBy: 'ishikawa',
    relatedUrl: 'http://example.com',
    replies: [1, 3]
  };
  collection.insert(topic1, function(err, result) {
    if (err) {
      throw err;
    }
  });

  console.log('success!');

  var cursor = collection.find();
  cursor.toArray(function(err, docs) {
    console.log(docs);
  });
});