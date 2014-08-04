module.exports = function (grunt) {

    grunt.initConfig({
        copy: {
            bootstrap: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/',
                        src: ['**'],
                        dest: 'bootstrap/',
                        isFile: true
                    }
                ]
            },

            jquery: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist/',
                        src: ['**'],
                        dest: 'jquery/',
                        isFile: true
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);

};