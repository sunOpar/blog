const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode:process.env.NODE_ENV,
  entry: {
    app: path.resolve(__dirname,'src/main.js'),
  },
  output: {
    path: path.resolve(__dirname, "bin"),
    filename: "[name].bundle.[hash].js",
  },
  // 方便打断点
  devtool: "#source-map",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  module: {
    rules: [
      //加载vue
      { test: /\.vue$/, exclude: /node_modules/, loader: "vue-loader" },
      // 加载css并打包
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "vue-style-loader",
          "css-loader",
        ],
      },
      // 加载babel
      { test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" },
      // 加载html
      { test: /\.html$/, exclude: /node_modules/, use: "raw-loader" },
      // 加载less
      {
        test: /\.(less)$/i,
        exclude: /node_modules/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "vue-style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      // 图片文件使用 url-loader 来处理，小于8kb的直接转为base64,超过就会输出到output的path
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: "url-loader?limit=1024&name=[name].[ext]",
      },
      // 字体
      {
        test: /\.(woff2|woff|ttf|eot|svg|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ["url-loader?limit=1000&name=assets/fonts/[name].[ext]"],
      },
    ],
  },

  plugins: [
    // 自动生成html的页面，template为路径，目标可以加载到html里面
    // title 为文件 title
    // filename为生成的文件名，可以前面加路径
    new HtmlWebpackPlugin({
      template: "src/index.html",
      title: "sunopar's World",
      filename: "../../index.html",
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
    }),
    new VueLoaderPlugin(),
  ],
  // 将script脚本加载的bootstrap和jquery作为全局变量暴露出来
  externals: {
    bootstrap: "bootstrap",
    jquery: "jQuery",
    jquery: "$",
  },
};
