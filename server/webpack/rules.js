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
    test: /\.(sa|sc)ss$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "isomorphic-style-loader",
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true
          // importLoaders: 1,
          // modules: true,
          // localIdentName:
          //   process.env.NODE_ENV !== "production"
          //     ? "[name]-[local]-[hash:base64:5]"
          //     : "[hash:base64:5]",
        },
      },
      {
        loader: "postcss-loader",
        options: {
          plugins: [autoprefixer()],
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
    test: /\.(gif)$/,
    use: "file-loader",
  },
  {
    test: /\.(jpe?g|png|ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    use: "base64-inline-loader?limit=1000&name=[name].[ext]",
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
