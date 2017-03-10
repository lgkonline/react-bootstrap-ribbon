var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          {
              test: /\.jsx?/,
              include: path.resolve(__dirname, "src/client"),
              loader: "babel-loader"
          },
          {
              test: /\.css$/,
              loaders: ["style-loader", "css-loader"]
          },
          {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract(
                  'css-loader!sass-loader'
              )
          },
          {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              loader: 'file-loader?name=contents/[name].[ext]'
          }           
      ]
  },
  plugins: [
      new ExtractTextPlugin("style.css")
  ]
};

module.exports = config;