module.exports = function (grunt) {

    grunt.initConfig({
        build: {
            jquery: {
                src: ['bower_components/jquery/dist/jquery.js'],
                dest: 'dist/jquery.js'
            },

            myJs: {
                src: 'src/*.js',
                dest: 'dist/script.js'
            }
        },

        watch: {
            options: {
                livereload: true
            },
            js: {
                files: 'src/*.js',
                tasks: ['jsBuild']
            },
            html: {
                files: '*.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerMultiTask('build', function () {
        console.log(this);
        concatFiles(this.files, this.data.dest);
    });

    grunt.registerTask('myBuild', function () {
        var files, destFile;

        files = grunt.config.get('build.jquery.src');
        destFile = grunt.config.get('build.jquery.dest');
        concatJs(files, destFile);
    });

    grunt.registerTask('jsBuild', function () {
        var files, destFile;

        files = grunt.file.expand(grunt.config.get('build.myJs.src'));
        destFile = grunt.config.get('build.myJs.dest');

        concatJs(files, destFile);
    });

    grunt.registerTask('default', ['myBuild', 'watch']);

    function concatFiles(files, dest) {
        var output;
        files.forEach(function (filegroup) {
            var sources = filegroup.src.map(
                function (file) {
                    return (grunt.file.read(file));
                }
            );
            output = sources.join(';');
            grunt.file.write(dest, output);
        });
    }

    function concatJs(files, destFile) {
        var output = '';
        files.forEach(function (file) {
            output += grunt.file.read(file);
            output += ';\n';
        });
        grunt.file.write(destFile, output);
    }
};