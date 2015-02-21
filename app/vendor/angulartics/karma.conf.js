module.exports = function(config) {
  'use strict';
  
  config.set({

    basePath: '',

    frameworks: ["jasmine"],

    files: [
      'user/angular/angular.js',
      'user/angular-route/angular-route.js',
      'user/angular-ui-router/release/angular-ui-router.js',
      'user/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'test/**/*.js'
    ],

    autoWatch: true,

    browsers: ['PhantomJS']

  });
};
