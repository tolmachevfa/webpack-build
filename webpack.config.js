const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const extractCSS = require('./webpack/css.extract');
const css = require('./webpack/css');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const lintJS = require('./webpack/js.lint');
const images = require('./webpack/images');
const babel = require('./webpack/babel');
const postcss = require('./webpack/postcss');

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build')
};

const common = merge([
  {
    entry: {
      index: PATHS.source + '/pages/index/index.js'
    },
    output: {
      path: PATHS.build,
      filename: './js/[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index'],
        template: PATHS.source + '/pages/index/index.pug'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    optimization: {
      minimizer: [new UglifyJsPlugin()]
    }
  },
  pug(),
  lintJS({ paths: PATHS.sources }),
  images(),
  babel(),
  postcss()
]);

module.exports = function(env) {
  if (env === 'production') {
    return merge([common, extractCSS()]);
  }
  if (env === 'development') {
    return merge([common, sass(), css()]);
  }
};
