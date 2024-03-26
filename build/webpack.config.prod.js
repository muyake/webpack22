const { merge } = require("webpack-merge");
const base = require('./webpack.config.base');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = merge(base, {
  mode: "production",
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: '[name].min.js',
  //   // publicPaht: 'http://baidu.com',
  //   library: {
  //       name: 'mtdpMap',
  //       type: 'umd',
  //     },
  //     libraryTarget: 'umd'
  // },
  plugins:[
    new MiniCssExtractPlugin({
      filename: "[name].min.css",
    }),
  ]

})
module.exports = config;