module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    ngAnnotate: {
        options: {
            singleQuotes: true,
        },
        demo: {
            files: {
                'WithAnnotationsCtrl.js': ['WithoutAnnotationsCtrl.js']
            }
        }
    },
    uglify: {
        demo: {
            files: {
                'WithAnnotationsCtrl.min.js': ['WithAnnotationsCtrl.js']
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['ngAnnotate', 'uglify']);

};
