const _ = require('lodash');
const path = require('path');
const BabiliWebpackPlugin = require('babili-webpack-plugin');

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
};

const minConfig = _.merge({}, baseConfig, {
  output: {
    filename: 'grumbles.min.js',
  },
  plugins: [
    new BabiliWebpackPlugin(),
  ]
});

module.exports = [baseConfig, minConfig];
