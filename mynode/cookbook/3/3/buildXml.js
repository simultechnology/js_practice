module.exports = buildXML;

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
