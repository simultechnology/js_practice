module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/*.js'],
                dest: 'dest/built.js'
            }
        },

        uglify: {
            dist: {
                src: [
                    '<%= concat.dist.dest %>'
//                    'src/sample01.js',
//                    'src/sample02.js'
                ],
                dest: 'dest/output.min.js'
            }
        },

        watch: {
            dist: {
                files: '<%= concat.dist.src %>',
                tasks: ['concat', 'uglify:dist']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};