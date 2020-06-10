require("@babel/polyfill");

const webpack = require("webpack");

const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJSWebpackPlugin = require("uglifyjs-webpack-plugin");
const ImageMinWebpackPlugin = require("imagemin-webpack-plugin").default;
const OptimizeCSSWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const autoprefixer = require("autoprefixer");

module.exports = {
  devtool: false,
  entry: {
    main: [
      "@babel/polyfill",
      "./src/index.js",
      "./src/assets/styles/main.scss",
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: { sourceMap: true },
          },
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [autoprefixer],
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets/img", to: "img" }],
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map",
      exclude: ["bundle.js"],
    }),
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/index.html",
    }),
    new ImageMinWebpackPlugin({
      test: /\.(png|gif|jpe?g|svg)$/,
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJSWebpackPlugin({ sourceMap: true }),
      new OptimizeCSSWebpackPlugin({
        cssProcessorOptions: { sourceMap: true },
      }),
    ],
  },
};
