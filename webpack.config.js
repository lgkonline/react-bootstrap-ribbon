var webpack = require('webpack');
var path = require('path');

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
          }
      ]
  },
  devServer: {
      contentBase: path.join(__dirname, "src/client")
  }
};

module.exports = config;