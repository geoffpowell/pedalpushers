module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      css: {
        src: ['assets/static/src/css/bootstrap2.css', 'assets/static/src/css/custom.css'],
        dest: 'assets/static/css/style.css',
      },
      js: {
        src: ['assets/static/src/js/bootstrap.js', 'assets/static/src/app.js'],
        dest: 'assets/static/js/pedalpush.js',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
}

//tasks that I want to run:
  //uglify
  //watch
  //img compression
  //autoprefixer
