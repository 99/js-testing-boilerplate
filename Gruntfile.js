var options = {};
options.yuidoc = require('./tasks/yuidoc');
options.karma  = require('./tasks/karma');
options.jshint = require('./tasks/jshint');
options.jslint = require('./tasks/jslint');
options.requirejs = require('./tasks/requirejs');
options.fixmyjs = require('./tasks/fixmyjs');
options.sonarRunner = require('./tasks/sonarRunner');
options.jsbeautifier = require('./tasks/jsbeautifier');
options.jscs = require('./tasks/jscs');

module.exports = function(grunt){
  grunt.initConfig(options);

  grunt.registerTask('test', ['jsbeautifier', 'karma:unit']);
  grunt.registerTask('compile', ['fixmyjs', 'jsbeautifier', 'jslint', 'jshint', 'jscs']);
  grunt.registerTask('default', ['fixmyjs', 'jsbeautifier', 'jslint', 'jshint', 'jscs', 'karma:unit']);
  grunt.registerTask('continuous', ['fixmyjs', 'jsbeautifier', 'jslint', 'jshint', 'jscs', 'karma:continuous', 'sonarRunner']);
  grunt.registerTask('c', ['fixmyjs', 'jsbeautifier', 'jslint', 'jshint', 'jscs', 'karma:continuous', 'sonarRunner']);
  grunt.registerTask('compress', ['fixmyjs', 'jsbeautifier', 'jslint', 'jshint', 'jscs', 'requirejs:compile']);
};
