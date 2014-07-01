
var foot = {
    show: function () {
        return this.name;
    }
};

var my = {
    name: 'hoge'
};

var result = foot.show.apply(my);
console.log(result);

var inspect_me = 0,
    result = '';

switch (inspect_me) {
case 0:
    result = 'zero';
    break;
case 1:
    result = 'one';
    break;
default:
    result = 'unknown';
    break;
}

console.log(inspect_me);

/**
 * 関数を返します。
 *
 * @param a {number}
 * @param b {number}
 * @returns {*}
 */
function outer(a, b) {
    'use strict';
    var c = 1,
        d = 2,
        inner;

    if (a > b) {
        inner = function () {
            return {
                r: c - d
            };
        };
    } else {
        inner = function () {
            return {
                r: c + d
            };
        };
    }
    return inner;
}

var func = outer(3, 4);
console.log(func());
var func2 = outer(5, 1);
console.log(func2());