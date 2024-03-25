const path = require('path');
console.log('Production: ', process.env.NODE_ENV); // true
debugger;
module.exports = {
  entry: {
    map: ["./src/util/polyfill.ts", './src/index.ts']
  },
  devtool: 'inline-source-map',
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    library: {
        name: 'mtdpMap',
        type: 'umd',
      },
      libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};