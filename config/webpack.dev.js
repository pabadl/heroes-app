const { merge } = require('webpack-merge');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
const path = require('path');

module.exports = merge(commonConfig, {
  devtool: 'inline-source-map',

  // output: {
  //   path: helpers.root('dist'),
  //   publicPath: '/',
  //   filename: '[name].js',
  //   chunkFilename: '[id].chunk.js'
  // },

  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "[name].bundle.js",
    chunkFilename: "[name]-chunk.js",
},

  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].css'
    })
    //new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    contentBase: path.join(__dirname, "../dist/"),
    port: 9000
  }
});