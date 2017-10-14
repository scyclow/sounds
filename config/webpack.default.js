'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const html = (params) => new HtmlWebpackPlugin(params);
const rootDir = (...paths) => path.join(__dirname, '..', ...paths);

module.exports = {
  context: rootDir('src'),
  entry: {
    whistle: './whistle/whistle.js',
    spin: './spin/spin.js',
    progress: './progress/progress.js',
  },
  output: {
    path: rootDir('docs'),
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  },
  plugins: [
    html({
      template: rootDir('src/whistle/whistle.html'),
      filename: 'whistle.html',
      inject: 'body',
      chunks: ['whistle']
    }),
    html({
      template: rootDir('src/spin/spin.html'),
      filename: 'spin.html',
      inject: 'body',
      chunks: ['spin']
    }),
    html({
      template: rootDir('src/progress/progress.html'),
      filename: 'progress.html',
      inject: 'body',
      chunks: ['progress']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
