const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
  new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].[hash].css",
    chunkFilename: "[id].[hash].css"
  })
];

module.exports = plugins;
