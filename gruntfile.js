module.exports = function(grunt) {

  grunt.initConfig({
              sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.css': 'style.sass'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpeg,gif}'],
                    dest: 'images-build/'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['style.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'style.css',
                        'index.html'
                    ]
                },
                options: {
                    watchTask: true, 
                        server: { 
                            baseDir: './'
                        }
                }
            }
        },

    jshint: {
      all: ['js/*.js']
    }
  });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch', 'jshint']);

};