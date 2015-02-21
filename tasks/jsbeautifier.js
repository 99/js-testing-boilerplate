var grunt = require('grunt');
grunt.loadNpmTasks('grunt-jsbeautifier');
module.exports = {
    'default': {
        src: [
            'src/**/*.js',
            'tasks/**/*.js',
            'test/**/*.js'
        ]
    },
    'git-pre-commit': {
        src: [
            'src/**/*.js',
            'tasks/**/*.js'
        ],
        options: {
            mode: 'VERIFY_ONLY'
        }
    },
    options: {
        js: {
            braceStyle: 'collapse',
            breakChainedMethods: false,
            e4x: false,
            evalCode: false,
            indentChar: ' ',
            indentLevel: 0,
            indentSize: 4,
            indentWithTabs: false,
            jslintHappy: false,
            keepArrayIndentation: false,
            keepFunctionIndentation: true,
            maxPreserveNewlines: 10,
            preserveNewlines: true,
            spaceBeforeConditional: true,
            spaceInParen: false,
            unescapeStrings: false,
            wrapLineLength: 0
        }
    }
};
