const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');

const alias = require("../../helpers/alias");
const rules = require("./rules");

const nodeConf = {
  target: "node",
  entry: "./server",
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
    new TerserPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor",
    //   children: true,
    //   minChunks: 2,
    //   async: true,
    // }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.ProvidePlugin({
      window: path.resolve(path.join(__dirname, "../../helpers/window.mock")),
      document: "global/document",
    }),
  ],
  resolve: {
    alias,
    modules: [
      path.resolve("./app"),
      path.resolve(process.cwd(), "node_modules"),
    ],
    extensions: [".js", ".jsx", ".react.js"],
    mainFields: ["browser", "jsnext:main", "main"],
  },
};

const browserConf = require("./../../client/webpack/webpack.config.prod.babel");

module.exports = [browserConf, nodeConf];
