var grunt = require('grunt');
grunt.loadNpmTasks('grunt-sonar-runner');
module.exports = {
    analysis: {
        options: {
            debug: true,
            separator: '\n',
            dryRun: false,
            sonar: {
                host: {
                    url: 'http://localhost:9000'
                },
                jdbc: {
                    url: 'jdbc:postgresql://localhost:5432/sonar',
                    username: 'sonar',
                    password: 'sonar'
                },
                exclusions: [
                    'test',
                    'src/main.js'
                ].join(','),
                projectKey: 'sonar:karma-requirejs',
                projectName: 'Grunt Sonar Runner',
                projectVersion: '0.0.1',
                sources: ['src'].join(','),
                language: 'js',
                sourceEncoding: 'UTF-8',
                javascript: {
                    lcov: {
                        reportPath: 'build/reports/coverage/report-lcov/lcov.info'
                    }
                }
            }
        }
    }
};
