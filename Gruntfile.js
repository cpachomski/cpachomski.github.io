'use strict';

module.exports = function(grunt) {


    //load all Grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({


        uglify: {
          dist:{
            options: {
              sourceMap: 'source-map.js'
            },
            files: {
              'index.min.js': [
              "js/*"]
            }
          }
        },

        imagemin: {
          dist: {
            options:{
              optimzationLevel: 7,
              progressive: true
            },
            files: [{
              expand: true,
              cwd: 'images/',
              src: "*",
              dest: "assets/images/optimized"
            }]
          }
        }


    });





}