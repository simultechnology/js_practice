
var users = require('../models/users').createClient();
var stories = require('../models/stories').createClient();
/*
 * GET home page.
 */

exports.index = function(req, res){
  var pageNum = Number(req.query.page) || 1;
  var count = 10;
  var skip = count * (pageNum - 1);

  stories.getLatest(count + 1, skip, function(err, items) {
    if (err) {
      res.send(200);
      console.log('cannot retrieve stories');
      console.log(err);
      return;
    }
    var nextPage = null;
    if (items.length > count) {
      nextPage = '/?page=' + (pageNum + 1);
      items.pop();
    }
    var previousPage = null;
    if (skip > 0) {
      if (pageNum == 2) {
        previousPage = '/';
      } else {
        previousPage = '/?page=' + (pageNum + 1);
      }
    }
    var params = {
      page: {
        title: 'first',
        next: nextPage,
        previous: previousPage
      },
      user: req.session.user || null,
      stories: items,
      request: req
    };
    res.render('index', params);
  });
};

exports.login = function(req, res) {
  res.render('login', {
    page: {title: 'login'},
    user: null,
    name: '',
    error: 200,
    loginFailed: false
  });
  return;
};

exports.login.post = function(req, res) {
  var name = req.body.name || '';
  var password = req.body.password || '';

  function authCallback(err, userInfo) {
    if (err || userInfo === null) {
      // 認証に失敗
      res.render('login', {
        page: {title: 'login'},
        user: null,
        name: name,
        error: 200,
        loginFailed: true
      });
      return;
    }
    req.session.user = {
      uid: userInfo.uid,
      name: userInfo.name
    };
    res.redirect('/');
    return;
  }

  users.authenticate(name, password, authCallback);
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
};

exports.create = function(req, res) {
  res.render('stories', {
    page: {title: '記事'},
    error: 200
  });
  return;
};

exports.create.post = function(req, res) {
  var title = req.body.title || '';
  var slug = req.body.slug;
  var body = req.body.body || '';

  if (!slug) {
    console.log('slug must not be null.');
    res.redirect('/');
  }

  stories.insert({
    title: title,
    slug: slug,
    body: body
  }, function(err, results) {
    if (err) {
      console.log('登録に失敗しました。');
    } else {
      res.render('stories', {
        page: {title: '記事登録結果'},
        error: 200
      });
    }
  });
};

exports.single = function(req, res) {

};