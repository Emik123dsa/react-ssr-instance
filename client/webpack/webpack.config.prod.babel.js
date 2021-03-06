const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
module.exports = require("./webpack.base.babel")({
  entry: [path.join(process.cwd(), "client/index.js")],
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  plugins: [
    new TerserPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor",
    //   children: true,
    //   minChunks: 2,
    //   async: true,
    // }),
    new HtmlWebpackPlugin({
      template: "static/index.html",
      filename: "main.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        // minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ],
});
