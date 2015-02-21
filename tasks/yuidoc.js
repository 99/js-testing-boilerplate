var grunt = require('grunt');
grunt.loadNpmTasks('grunt-contrib-yuidoc');
module.exports = {
    compile: {
        options: {
            paths: ['src/'],
            outdir: 'build/docs/'
        }
    }
};
