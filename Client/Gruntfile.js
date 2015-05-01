module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                force: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    $: true,
                    console: true
                }
            },
            '<%= pkg.name %>': {
                src: ['public/js/**/*.js']
            }
        },
        concat: {
            dist: {
                src: [
                    'public/lib/jquery-2.0.2.min.js',
                    'public/lib/jquery.cookie.js',
                    'public/lib/jquery-ui-1.10.3.min.js',
                    'public/lib/bootstrap/bootstrap.min.js',
                    'public/lib/angular/angular.js',
                    'public/lib/angular/angular-route.js',
                    'public/lib/angular/angular-animate.js',
                    'public/lib/angular/resource.js',
                    'public/lib/angular/ui-bootstrap-custom-tpls-0.11.0.js',
                    'public/lib/angular/angular-local-storage.min.js',
                    'public/lib/angular-block-ui/angular-block-ui.min.js',
                ],
                dest: 'build.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },

            build: {
                src: 'build.js',
                dest: 'build.min.js'
            }
        },
        cssmin: {
            files: {
                src: ['public/css/bootstrap.min.css', 'public/css/index.css', 'public/css/angular-block-ui.min.css'],
                dest: 'style.min.css'
            }
        },
        watch: {
            scripts: {
                files: ['public/js/**/*.js'],
                tasks: ['jshint', 'concat', 'uglify']
            },
            css: {
                files: ['public/css/**/*.css'],
                tasks: ['cssmin']
            },
            options: {
                livereload: true
            },
        },
        removelogging: {
            files: {
                src: 'build.min.js',
                dest: 'build.clean.js'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'watch']);
};
