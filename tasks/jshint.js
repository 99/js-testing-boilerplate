var grunt = require('grunt');
grunt.loadNpmTasks('grunt-contrib-jshint');
module.exports = {
    options: {
        'globals': {
            'define': true,
            'requirejs': true,
            'module': true,
            'require': true
        },
        globalstrict: false
    },
    all: [
        'Gruntfile.js',
        'src/**/*.js',
        'test/**/*.js',
        'tasks/**/*.js'
    ]
};
