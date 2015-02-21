/*jslint white: true */
/**
 * This is the description for my class.
 *
 * @class MyClass
 * @constructor
 */
define(function() {
    'use strict';
    var App = function(el) {
        this.el = el;
    };
    App.prototype.render = function() {
        this.el.html('require.js up and running');
    };
    return App;
});
