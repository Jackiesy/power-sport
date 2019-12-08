const path = require('path');
const base = require("./webpack.config");

module.exports = Object.assign({},base,{
  mode: "development",
  plugins: [
    ...base.plugins
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  },
});