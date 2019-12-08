const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    "index": "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins:[],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          devMode ? MiniCssExtractPlugin.loader : 'style-loader'
          ,'css-loader',"sass-loader"
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'font',
            },
          },
        ]
      }
    ]
  }
};