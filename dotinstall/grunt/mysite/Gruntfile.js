module.exports = function (grunt) {
    "use strict";
    // config
    grunt.initConfig({

        less: {
            options: {
                compress: true
            },
//            build1: {
//                src: 'src/style1.less',
//                dest: 'build/styles1.css'
//            },
            build2: {
                /*
                src: 'src/style2.less',
                dest: 'build/styles2.css'
                */
                /*
                files: {
                    'build/styles.css': 'src/style2.less'
                }
                */
                files: {
                    //'build/styles.css': ['src/style1.less', 'src/style2.less']
                    //'build/styles.css': 'src/*.less'
                    'build/styles.css': 'src/**/*.less' // 配下のディレクトリ全部
                }
            }
        }
    });

    // plugin
    grunt.loadNpmTasks('grunt-contrib-less');

    // tasks
    grunt.registerTask('default', 'less');
    grunt.registerTask('task1', 'less:build1');
    grunt.registerTask('task2', 'less:build2');

};
