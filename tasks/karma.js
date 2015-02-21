var grunt = require('grunt');
grunt.loadNpmTasks('grunt-karma');
module.exports = {
    unit: {
        configFile: 'karma.conf.js',
        runnerPort: 9999,
        singleRun: true,
        browsers: ['PhantomJS'],
        logLevel: 'ERROR'
    },
    options: {
        configFile: 'karma.conf.js',
        runnerPort: 9999,
        browsers: [
            'Chrome',
            'Firefox'
        ]
    },
    continuous: {
        singleRun: true,
        browsers: ['PhantomJS'],
        logLevel: 'ERROR'
    },
    dev: {
        reporters: 'dots'
    }
};
