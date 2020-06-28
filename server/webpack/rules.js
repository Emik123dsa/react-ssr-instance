//const autoprefixer = require("autoprefixer");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const rules = [
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
    test: /\.sass$/,
    exclude: /node_modules/,
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
    test: /\.(gif)$/,
    use: "file-loader",
  },
  {
    test: /\.(jpe?g|ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    //use: "base64-inline-loader?limit=1000&name=[name].[ext]",
    use: "file-loader"
  },
  {
    test: /\.(png)$/,
    use: "file-loader"
  },
  {
    test: /\.html$/,
    use: "html-loader",
  },
  {
    test: /\.(mp4|webm|gif)$/,
    use: {
      loader: "url-loader",
      options: {
        limit: true,
      },
    },
  },
];

module.exports = rules;
