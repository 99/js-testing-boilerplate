var grunt = require('grunt');
grunt.loadNpmTasks('grunt-jscs');
module.exports = {
    main: [
        'src/**/*.js',
        'test/**/*.js'
    ],
    options: {
        config: '.jscsrc'
    }
};
