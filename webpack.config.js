const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Trans Calc',
      filename: 'index.html',
      template: 'src/template.html',
    }),
  ],
};
