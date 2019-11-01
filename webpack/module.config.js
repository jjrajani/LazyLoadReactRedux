const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const moduleConfig = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader"
        }
      ]
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        // fallback to style-loader in development
        // process.env.NODE_ENV !== 'production'
        //   ? 'style-loader'
        //   : MiniCssExtractPlugin.loader,
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    }
  ]
};

module.exports = moduleConfig;
