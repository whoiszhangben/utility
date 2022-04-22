const TerserWebpackPlugin =  require("terser-webpack-plugin")
module.exports = {
  entry: {
    "zkutils": "./src/index.js",
    "zkutils.min": "./src/index.js"
  },
  output: {
    filename: "[name].js",
    library: "zk-utility",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  mode: "none",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        include: /\.min\.js$/
      })
    ]
  }
}