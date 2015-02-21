var grunt = require('grunt');
grunt.loadNpmTasks('grunt-fixmyjs');
module.exports = {
    options: {
        config: '.jshintrc',
        indentpref: 'spaces',
        curly: true,
        quotmark: 'single',
        plusplus: true
    },
    test: {
        files: [{
            expand: true,
            src: [
                'src/**/*.js',
                'tasks/**/*.js',
                'test/**/*.js'
            ],
            ext: '.js'
        }]
    }
};
