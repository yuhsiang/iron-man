const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.resolve(process.cwd(), 'build')
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `./src/index.html`,
    })
  ],
};
