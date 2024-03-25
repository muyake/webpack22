const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: {
        name: 'webpackNumbers',
        type: 'umd',
      },
      // libraryTarget: 'umd'
  }
  // ,
  // externals: {
  //   lodash: {
  //     commonjs: 'lodash',
  //     commonjs2: 'lodash',
  //     amd: 'lodash',
  //     root: '_',
  //   },
  // },
};