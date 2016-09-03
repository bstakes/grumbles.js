const path = require('path');

module.exports = {
  entry: {
    grumbles: ['./src/index.js'],
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
