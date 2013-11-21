module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Compile SASS
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/styles/css/main.css': 'assets/styles/_scss/*.scss'       // 'destination': 'source'
        }
      }
    },

    // Live Reload watching for SCSS changes
    watch: {
      sass: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

  grunt.registerTask('sass', ['sass']);

};