const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackConfig = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    staticOptions: {
      index: '../index.html'
    }
  },
  entry: {
    demo: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
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
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'assets' }
    ])
  ]
};

module.exports = webpackConfig;