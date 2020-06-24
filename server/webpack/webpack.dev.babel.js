const path = require("path");

const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const alias = require("../../helpers/alias");

const rules = require("./rules");

const nodeConf = {
  target: "node",
  entry: ["babel-polyfill", "./server/index.js"],
  externals: [nodeExternals(), "react-helmet"],
  output: {
    path: path.resolve("build"),
    filename: "server.js",
    library: "app",
    libraryTarget: "commonjs2",
    publicPath: "/",
  },
  module: {
    rules,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets/img", to: "img" },
        { from: "static/**", to: "." },
      ],
    }),
    new webpack.ProvidePlugin({
      window: path.resolve(path.join(__dirname, "../../helpers/window.mock")),
      document: "global/document",
    }),
  ],
  resolve: {
    alias,
    modules: [
      path.resolve("./src"),
      path.resolve(process.cwd(), "node_modules"),
    ],
    extensions: [".js", ".jsx", ".react.js"],
    mainFields: ["browser", "jsnext:main", "main"],
  },
};

const browserConf = require("./../../client/webpack/webpack.config.dev.babel");

module.exports = [browserConf, nodeConf];
