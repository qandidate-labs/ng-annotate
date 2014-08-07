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
            },
        }
    }
  });

  grunt.loadNpmTasks('grunt-ng-annotate');

  // Default task.
  grunt.registerTask('default', ['ngAnnotate']);

};
