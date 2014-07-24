/**
 *
 * Created by ishi on 2014/07/02.
 */

/**
 * Personオブジェクトを作成
 * @class Person
 * @constructor
 * @namespace MYAPP
 * @param {String} first ファーストネーム
 * @param {String} last ラストネーム
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
