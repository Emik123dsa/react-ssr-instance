const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  //new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.SourceMapDevToolPlugin({
    filename: "[name].js.map",
    exclude: ["bundle.js"],
  }),
  new HtmlWebpackPlugin({
    template: "static/index.html",
    filename: "main.html",
  }),
  //new CleanWebpackPlugin(),
  new CircularDependencyPlugin({
    exclude: /node_modules/,
    failOnError: false,
  }),
];

module.exports = require("./webpack.base.babel")({
  mode: "development",
  entry: {
    main: ["babel-polyfill", "./client/index.js"],
  },
  output: {
    filename: "[name].dev.js",
    chunkFilename: "[name].dev.js",
  },

  plugins,
  devtool: "eval-source-map",
  perfomance: {
    hints: false,
  },
});
