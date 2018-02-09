const path = require('path');

const rootDir = path.resolve(__dirname, './');
const buildDir = path.resolve(__dirname, './build');

const webpackConfig = {
  entry: {
    'main': path.resolve(rootDir, './src/index.js'),
  },
  output: {
    path: buildDir,
    filename: '[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      }
    ]
  }
};

module.exports = webpackConfig;