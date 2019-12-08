const base = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = Object.assign({},base,{
  mode: "production",
  optimization: {
    minimizer: [new UglifyJsPlugin(
      {test: /\.js(\?.*)?$/i}
    )],
  },
  plugins: [
    ...base.plugins,
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
});