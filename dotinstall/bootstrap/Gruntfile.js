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
        },

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: 'css/*.css'
            },
            html: {
                files: '*.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['copy', 'watch']);

};