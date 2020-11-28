const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ContextReplacementPlugin } = require('webpack');
const helpers = require('./helpers');


module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.js', '.ts', '.html', '.scss']
  },

  module: {
    rules: [
        { test: /\.ts$/, use: ['awesome-typescript-loader', 'angular2-template-loader'] },
        { test: /\.(ts|js)$/, loaders: ['angular-router-loader'] },
        { test: /.html$/, use: 'html-loader' },
        { test: /\.(s*)css$/, use: ['to-string-loader','style-loader','css-loader','sass-loader'] },
        { test: /\.css$/, loader: 'raw-loader' },
        { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader' }
    ]
  },

  plugins: [
    new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
        path.resolve(__dirname, '../src')
    ),
    
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        showErrors: true,
        title: "Webpack App",
        path: path.join(__dirname, "../dist/"),
        hash: true
    })
  ]
};