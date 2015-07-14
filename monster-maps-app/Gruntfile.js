module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'style/main.css': 'style/sass/base.scss'
        }
      }
    }
  });

  grunt.registerTask('default', ['sass']);
};
