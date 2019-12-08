const path = require('path');
const base = require("./webpack.config");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({},base,{
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "power-sport"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  },
});