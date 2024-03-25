const { merge } = require("webpack-merge");
const base = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = merge(base, {
  mode: "production",
})
module.exports = config;