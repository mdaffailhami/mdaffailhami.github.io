const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0",
  },
  entry: resolve(__dirname, "src/index.js"),
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      // { test: /\.(scss|css)$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(css)$/, use: ["style-loader", "css-loader"] },
      { test: /\.(jpg|png|svg|gif)$/, use: "url-loader" },
    ],
  },
  // resolve: {
  //   extensions: [".js", ".jsx"],
  // },
  plugins: [
    new HTMLWebpackPlugin({
      template: resolve(__dirname, "src/index.html"),
      inject: false,
    }),
    new HTMLWebpackPlugin({
      template: "./src/404.html",
      inject: false,
      filename: "404.html",
    }),
  ],
};
