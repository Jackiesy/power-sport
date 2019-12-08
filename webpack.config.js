const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    "index": "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: "power-sport",
      meta: {viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"},
      inject: false,
      template: require('html-webpack-template'),
      lang: 'zh-cmn-Hans',
      appMountId: "root",
      links: [
        'https://cdn.bootcss.com/minireset.css/0.0.2/minireset.css',
        'https://cdn.bootcss.com/normalize/8.0.1/normalize.css'
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [["import", {
              "libraryName": "antd",
              "libraryDirectory": "es",
              "style": "css"
            }]],
          }
        }
      },
      {
        test: /\.s?css$/,
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