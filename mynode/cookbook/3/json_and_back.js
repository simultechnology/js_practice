var profiles = require('./profiles');

// profilesオブジェクト全体を文字列に変換し、nameをfullnameに置換
profiles = JSON.stringify(profiles).replace(/name/g, 'fullname');

// 置換後の文字列をJSONに戻す
profiles = JSON.parse(profiles);

profiles.felix.fullname = "Felix Geisendörfer";
console.log(profiles.felix);