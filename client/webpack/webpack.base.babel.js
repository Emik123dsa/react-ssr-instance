require("@babel/polyfill");
require("@babel/plugin-syntax-class-properties");

const path = require("path");
const webpack = require("webpack");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const autoprefixer = require("autoprefixer");

const plugins = [
  new ProgressBarPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      { from: "src/assets/img", to: "img" },
      { from: "static/**", to: "." },
    ],
  }),
  new webpack.ProvidePlugin({
    fetch: "exports-loader?self.fetch!whatwg-fetch",
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  
  new webpack.NamedModulesPlugin(),
];

module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      path: path.resolve(process.cwd(), "build"),
      publicPath: "/",
    },
    options.output
  ),
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,

        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
              cacheDirectory: true,
              plugins: ["react-hot-loader/babel"],
            },
          },
        ],
      },
      {
        test: /\.scss$/,

        use: [
          "isomorphic-style-loader",
        
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: process.env.NODE_ENV !== 'production' ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
              }
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer],
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          "isomorphic-style-loader",
         
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: process.env.NODE_ENV !== 'production' ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
              }
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer],
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
        
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2|png)$/,
        use: "file-loader",
      },
      {
        test: /\.(mp4|webm|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: options.plugins.concat(plugins),
  resolve: {
    alias: {
      '@': path.resolve("src"),
      's': path.resolve("src/assets/styles")
    },
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".react.js"],
    mainFields: ["browser", "main", "jsnext:main"],
  },
  devtool: options.devtool,
  target: "web",
  performance: options.performance || {},
  node: {
    child_process: "empty",
    fs: "empty",
    module: "empty",
    net: "empty",
    tls: "empty",
  },
});
