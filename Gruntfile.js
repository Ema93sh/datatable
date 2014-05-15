module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/datatable.js',
        dest: 'build/datatable.min.js'
      }
    },
    ngtemplates:  {
      datatable:  {
        cwd: 'src/partials',
        src: '*.html',
        dest: 'build/app.templates.js',
        options: {
          module: 'ui.datatable',
        }
      }
    },
    concat: {
      js:  {
        src:  ['src/js/datatable.js', '<%= ngtemplates.datatable.dest %>'],
        dest: 'build/datatable.js',
      },
      css: {
        src: ['src/css/*.css'],
        dest: 'build/datatable.css',
      }
    },
    karma: {
      debug: {
        configFile: 'test/karma.conf.js',
        autoWatch: true,
      },
      test: {
        configFile: 'test/karma.conf.js',      
        singleRun: true,
      }
    },
    clean: {
      templates: {
        src: ["<%= ngtemplates.datatable.dest %>"]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('build', ['karma:test', 'ngtemplates', 'concat', 'uglify', 'clean']);
  grunt.registerTask('test', ['karma:test']);
  grunt.registerTask('debug', ['karma:debug']);



};