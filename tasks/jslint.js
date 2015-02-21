var grunt = require('grunt');
grunt.loadNpmTasks('grunt-jslint');
module.exports = {
    server: {
        src: [
            'src/**/*.js',
            'tasks/**/*.js'
        ],
        predef: [
            'define',
            'grunt'
        ],
        exclude: [],
        directives: {
            node: true,
            todo: true,
            browser: true,
            predef: [
                'define',
                'requirejs'
            ]
        },
        options: {
            edition: 'latest',
            errorsOnly: false,
            failOnError: true,
            globalstrict: false
        }
    }
};
