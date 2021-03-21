const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    historyApiFallback: true,
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
          },
        },
      },
      { test: /\.(scss|css)$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(jpg|png|svg)$/, use: "url-loader" },
    ],
  },
  // resolve: {
  //   extensions: [".js", ".jsx"],
  // },
  plugins: [new HTMLWebpackPlugin({ template: resolve(__dirname, "src/index.html") })],
};
