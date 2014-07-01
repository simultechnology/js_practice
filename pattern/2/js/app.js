/**
 * JavaScriptアプリケーション
 *
 * @module myapp
 *
 */
var MYAPP = {};

/**
 * 数学ユーティリティ
 * @namespace MYAPP
 * @class math_stuff
 */
MYAPP.math_stuff = {
    /**
     * 和を計算
     *
     * @method sum
     * @param {Number} a 数値1
     * @param {Number} b 数値2
     * @returns {Number} 2つの数の和
     */
    sum: function (a, b) {
        return a + b;
    },

    /**
     * 積を計算
     *
     * @method multi
     * @param {Number} a 数値1
     * @param {Number} b 数値2
     * @returns {Number}
     */
    multi: function (a, b) {
        return a * b;
    }
};

/**
 * Personオブジェクトを作成
 * @class Person
 * @namespace MYAPP
 * @param {String} first ファーストネーム
 * @param {String} last ラストネーム
 * @constructor
 */
MYAPP.Person = function (first, last) {
    /**
     * ファーストネーム
     * @property first_name
     * @type String
     */
    this.first_name = first;
    /**
     * ラストネーム
     * @property last_name
     * @type String
     */
    this.last_name = last;
};

/**
 * その人の名前を返す
 *
 * @method getName
 * @returns {String} 名前
 */
MYAPP.Person.prototype.getName = function () {
    return this.first_name + ' ' + this.last_name;
};
