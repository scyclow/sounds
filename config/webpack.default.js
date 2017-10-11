'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const html = (params) => new HtmlWebpackPlugin(params);
const rootDir = (...paths) => path.join(__dirname, '..', ...paths);

module.exports = {
  context: rootDir('src'),
  entry: {
    whistle: './whistle/whistle.js'
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
      inject: 'body',
      chunks: ['whistle']
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
