'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const defaults = require('./webpack.default');
const postcss = require('./postcss');


process.env.BABEL_ENV = "production";

defaults.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: 'production'
    }
  })
);

defaults.module.rules.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    fallback: require.resolve('style-loader'),
    use: [
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: postcss,
        },
      },
    ],
  })
});

defaults.plugins.push(new ExtractTextPlugin('styles.css'))

module.exports = defaults;
