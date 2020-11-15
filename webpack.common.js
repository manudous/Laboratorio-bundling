const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const basePath = __dirname;

module.exports = { 
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: [".js",".ts", ".tsx"]
  },
  entry: {
    app: './index.tsx',
    appStyles: './styles.scss',
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/",
  },
  module: {
  rules: [
      { 
        test: /\.tsx?$/, 
        exclude: /node_modules/, 
        loader: "babel-loader", 
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource", 
      },
      {
        test: /\.css$/,
        exclude: /node_modules/, 
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          {
            loader: "sass-loader",  
            options: {
              implementation: require("sass"), 
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", 
      template: "index.html", 
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css",
    }),
  ],
};