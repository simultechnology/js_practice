module.exports = function (grunt) {
    "use strict";
    // config
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
//            options: {
//                compress: true
//            },
            build: {
                src : ['src/style1.less', 'src/style2.less'],
                dest: 'build/styles.css'
            }
//            build1: {
//                src: 'src/style1.less',
//                dest: 'build/styles1.css'
//            },
//            build2: {
//                /*
//                src: 'src/style2.less',
//                dest: 'build/styles2.css'
//                */
//                /*
//                files: {
//                    'build/styles.css': 'src/style2.less'
//                }
//                */
//                files: {
//                    //'build/styles.css': ['src/style1.less', 'src/style2.less']
//                    //'build/styles.css': 'src/*.less'
//                    'build/styles.css': 'src/**/*.less' // 配下のディレクトリ全部
//                }
//            }
        },

        csslint: {
            check: {
                //src: 'build/styles.css'
                src: '<%= less.build.dest %>'
            }
        },

        cssmin: {
            minimize: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                files: {
                    'build/styles.min.css': '<%= less.build.dest %>'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            files: 'src/*.less',
            tasks: ['less', 'csslint', 'cssmin']
        },

        connect: {
            server: {
                options: {
                    port: 8080,
                    hostname: 'simusimu'
                }
            }
        }
    });

    // plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // tasks
    //grunt.registerTask('default', 'less');
    grunt.registerTask('default', ['less', 'csslint', 'cssmin', 'connect', 'watch']);
    grunt.registerTask('task1', 'less:build1');
    grunt.registerTask('task2', 'less:build2');

};
