const path = require("path");
const outputConfig = require("./output.config.js");
const resolveConfig = require("./resolve.config.js");
const moduleConfig = require("./module.config.js");
const pluginsConfig = require("./plugins.config.js");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: outputConfig,
  resolve: resolveConfig,
  mode: "development",
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    usedExports: true,
    minimizer: [new UglifyJsPlugin()]
  },
  devtool: process.NODE_ENV === "development" ? "eval-source-map" : "",
  module: moduleConfig,
  plugins: pluginsConfig
};
