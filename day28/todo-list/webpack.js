const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/main.js',
  ],
  output: {
    path: path.resolve(process.cwd(), 'build'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(scss)$/,
      use: [{
        loader: 'style-loader', // inject CSS to page
      }, {
        loader: 'css-loader', // translates CSS into CommonJS modules
      }, {
        loader: 'postcss-loader', // Run post css actions
        options: {
          plugins: () => [
            require('precss'),
            require('autoprefixer'),
          ],
        },
      }, {
        loader: 'sass-loader', // compiles Sass to CSS
      }],
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
  ],
};
