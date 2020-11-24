const webpackConfig = require("./webpack.config.js");

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: './karma-test.js', watched: false}
    ],


    // preprocess matching files before serving them to the browser
    preprocessors: {
      './karma-test.js': ['webpack']
    },
    webpack: webpackConfig,


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    reporters: ['mocha'],

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    plugins: [
      require('karma-webpack'),
      'karma-chai',
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-ng-html2js-preprocessor',
      'karma-mocha-reporter'
  ]
  })
}
