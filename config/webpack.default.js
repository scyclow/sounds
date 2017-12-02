'use strict';

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const html = (params) => new HtmlWebpackPlugin(params);
const rootDir = (...paths) => path.join(__dirname, '..', ...paths);

const notProjects = [
  'utils',
  'index.html'
]
const ignoreDirs = dir => !notProjects.includes(dir)

const projects = fs.readdirSync('./src').filter(ignoreDirs);

const entry = projects.reduce((entry, project) => {
  entry[project] = `./${project}/${project}.js`;
  return entry
}, {})

const plugins = projects.map(project => {
  return html({
    template: rootDir(`src/${project}/${project}.html`),
    filename: project + '.html',
    inject: 'body',
    title: project.toUpperCase(),
    chunks: [project],
    inlineSource: '.(js|css)$' // inline all css and js in prod
  })
})

plugins.push(html({
  template: rootDir('src/index.html'),
  filename: 'index.html',
  chunks: [],
  projects,
  ext: process.env.NODE_ENV === 'development'  ? '.html' : ''
}))

module.exports = {
  context: rootDir('src'),
  entry,
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
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader'
      }
    ]
  }
};
