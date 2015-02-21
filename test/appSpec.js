define([
    'app',
    'jquery',
    'underscore',
    'fixtures/squired'
], function(App, $, _, Squire) {
    describe('just checking', function() {
        it('works for app', function() {
            var el = $('<div></div>');
            var app = new App(el);
            app.render();
            expect(el.text()).toEqual('require.js up and running');
        });
        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([
                1,
                2,
                3
            ])).toEqual(3);
        });
        it('should test squire', function(done) {
            var injector = new Squire();
            injector.require(['utilities/Calculator'], function(Calculator) {
                expect(typeof Calculator).toEqual('function');
                done();
            }, function(err) {
                throw new Error(err);
            });
        });
        it('should test sum function of Calculator', function(done) {
            var injector = new Squire();
            injector.require(['utilities/Calculator'], function(Calculator) {
                var calculator = new Calculator();
                expect(calculator.sum(1 + 2)).toEqual(3);
                expect(typeof Calculator).toEqual('function');
                done();
            }, function(err) {
                throw new Error(err);
            });
        });
    });
});
