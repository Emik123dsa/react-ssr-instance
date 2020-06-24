const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const CircularDependencyPlugin = require("circular-dependency-plugin");

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    template: "static/index.html",
    filename: "main.html",
  }),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    failOnError: false,
  }),
];

module.exports = require("./webpack.base.babel")({
  entry: ["eventsource-polyfill", path.join(process.cwd(), "client/index.js")],

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
