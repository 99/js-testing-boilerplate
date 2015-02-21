/*jslint white: true */
requirejs.config({
    baseUrl: '../',
    paths: {
        'jquery': 'lib/jquery',
        'underscore': 'lib/underscore'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});
define([
    'src/app',
    'jquery'
], function(App, $) {
    'use strict';
    var app = new App($('body'));
    app.render();
});
