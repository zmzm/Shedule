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
                src: ['app/js/**/*.js']
            }
        },
        concat: {
            dist: {
                src: [
                    'app/js/app.js',
                    'app/js/controllers/schedule.js',
                    'app/js/controllers/settings.js',
                    'app/js/controllers/time.js'
                ],
                dest: 'build.js'
            }
        },
        uglify: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'build.js',
                dest: 'build.min.js'
            }
        },
        cssmin: {
            files: {
                src: ['app/css/bootstrap.min.css', 'app/css/style.css', 'app/css/bootstrap-theme.min'],
                dest: 'style.min.css'
            }
        },
        watch: {
            scripts: {
                files: ['app/js/**/*.js'],
                tasks: ['jshint', 'concat', 'uglify']
            },
            css: {
                files: ['app/css/*.css'],
                tasks: ['cssmin']
            },
            options: {
                livereload: true
            }
        },
        removelogging: {
            files: {
                src: 'build.min.js',
                dest: 'build.clean.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-remove-logging');
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'watch', 'removelogging']);
};