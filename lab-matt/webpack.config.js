'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPluginConfig = new HTMLPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

const webPackConfig = module.exports = {};

// -----------------------------------------------

webPackConfig.entry = `./src/index.js`; 

// -----------------------------------------------

webPackConfig.output = {
  filename: `bundle-[hash].js`,
  path: `${__dirname}/build`,
};

// -----------------------------------------------

webPackConfig.plugins = [
  htmlWebpackPluginConfig,
  new ExtractTextPlugin('bundle.[hash].css'), 
]; 

// -----------------------------------------------

webPackConfig.module = {
  rules: [
    {
      test: /\.js$/, 
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    // {
    //   test: /\.scss$/,
    //   loader: 'style-loader!css-loader!sass-loader',
    // },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        use: [
          // 'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [`${__dirname}/src/style`],
            },
          },
        ],
      }),
    },
  ],
};

webPackConfig.devtool = 'eval-source-map';

webPackConfig.devServer = {
  historyApiFallback: true,
};