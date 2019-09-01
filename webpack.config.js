const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.json$/,
      //   use: ["json-loader"],
      // },
      // {
      //   test: /\.(png|jpg)$/,
      //   use: CopyWebpackPlugin["file-loader"],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Demo",
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: "./index.html",
    }),
    new CopyWebpackPlugin([
      { from: "images", to: "images" },
      { from: "json", to: "json" },
    ]),
  ],
};
