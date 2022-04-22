const TerserWebpackPlugin =  require("terser-webpack-plugin")
const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: "none",
  entry: {
    "zkutils": path.join(__dirname, "./src/index.js"),
    "zkutils.min": path.join(__dirname, "./src/index.js")
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
    library: "zk-utility",
    libraryExport: "default",
    libraryTarget: "umd"
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        include: /\.min\.js$/
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: 'babel-loader'
      }
    ]
  }
}