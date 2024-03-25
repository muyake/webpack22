const path = require('path');
const minifyPrivatesTransformer = require('ts-transformer-minify-privates').default;

console.log('Production: ', process.env.NODE_ENV); // true

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
        loader: 'ts-loader',
        options: {
          getCustomTransformers: program => ({
              before: [
                  minifyPrivatesTransformer(program)
              ]
          })
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      }
    ],
  },
  resolve: {
    alias: {
      '_util': path.resolve(__dirname, './src/util')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
};