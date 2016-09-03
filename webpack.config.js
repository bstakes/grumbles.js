const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const BabiliWebpackPlugin = require('babili-webpack-plugin');

const version = require('./package.json').version;
const year = (new Date()).getFullYear();
const lodash = require('lodash/package.json');
const webpackage = require('webpack/package.json');

const baseConfig = {
  devtool: 'source-map',
  entry: {
    grumbles: ['./src/grumbles.js'],
  },
  output: {
    library: 'grumbles',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'grumbles.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
    }],
  },
  plugins: [
    new webpack.BannerPlugin(`Grumbles.js v${version} (C) ${year} Ken Powers (http://knpw.rs)
Released under the MIT license.
Contains parts of lodash v${lodash.version} under the ${lodash.license} license.
Contains parts of webpack v${webpack.version} under the ${webpack.license} license.`),
  ]
};

const minConfig = _.merge({}, baseConfig, {
  output: {
    filename: 'grumbles.min.js',
  },
  plugins: [
    new BabiliWebpackPlugin(),
    new webpack.BannerPlugin(`Grumbles.js v${version} (C) ${year} MIT Ken Powers (http://knpw.rs) | Contains parts of lodash v${lodash.version} ${lodash.license} | Contains parts of webpack v${webpackage.version} ${webpackage.license}`),
  ]
});

module.exports = [baseConfig, minConfig];
