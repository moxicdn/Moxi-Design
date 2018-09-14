module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: ['vitruvious'],
    clean: {
      build: {
        src: ['vitruvious']
      }
    },
    copy: {
      main: {
        files: [
          // flattens results to a single level
          {expand: true, flatten: true, src: ['dist/**'], dest: 'vitruvious/', filter: 'isFile'},
        ],
      },
    },
    rename: {
      main: {
        files: [
          {src: ['vitruvious/**.js'], dest: 'vitruvious/<%= pkg.name %>-<%= pkg.version %>.js'},
          {src: ['vitruvious/**.css'], dest: 'vitruvious/<%= pkg.name %>-<%= pkg.version %>.css'},
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-rename-util');

  grunt.registerTask('default', ['clean', 'copy', 'rename'])
  
};
