const { merge } = require("webpack-merge");
const base = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = merge(base, {
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
      inject: 'head',
      scriptLoading: 'blocking'
    }),
  ]
})
module.exports = config;