var profiles = require('./profiles3-2-1');
var xml2js = require('xml2js');
var parser = new xml2js.Parser({
  trim: true,
  explicitArray: false
});

var strProfiles = buildXML(profiles, 'profiles').replace(/name/g, 'fullname');
//console.log(strProfiles);

parser.parseString(strProfiles, function(err, obj) {
  strProfiles = obj.profiles;
  console.log(strProfiles.bert);
});

function buildXML(rootObj, rootName) {

  function attributes(obj, key) {
    if (obj[key].hasOwnProperty("$")) {
      xml = xml.substr(0, xml.length - 1);
      Object.keys(obj[key]['$']).forEach(function(attrKey) {
        xml += ' ' + attrKey + '="' + obj[key]['$'][attrKey] + '"';
      });
      xml += '>';
      delete obj[key]['$'];
    }
  }

  var xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  rootName = rootName || 'xml';
  xml += '<' + rootName + '>\n';

  (function traverse(obj) {
    Object.keys(obj).forEach(function(key) {
      var open = '<' + key + '>';
      var close = '</' + key + '>\n';
      var nonObj = (obj[key] && {}.toString.call(obj[key]) !== '[object Object]');
      var isArray = Array.isArray(obj[key]);
      var isFunc = (typeof obj[key] === "function");

      if (isArray) {
        obj[key].forEach(function(xmlNode) {
          var childNode = {};
          childNode[key] = xmlNode;
          traverse(childNode);
        });
        return;
      }

      if (key === '_') {
        xml += obj[key] + '\n';
        return;
      }

      xml += open;
      attributes(obj, key);

      if (nonObj) {
        xml += (isFunc ? obj[key]() : obj[key]);
        xml += close;
        return;
      }

      xml += '\n';
      traverse(obj[key]);
      xml += close;

    });
  })(rootObj);

  xml += '</' + rootName + '>\n';
  return xml;
}

