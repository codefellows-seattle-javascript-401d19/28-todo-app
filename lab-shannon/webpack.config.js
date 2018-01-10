'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/src/build`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
    }),
    new ExtractPlugin(`bundle.[hash].scss`),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
  },
};
