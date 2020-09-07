const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/App/index.html',
  filename: './index.html',
})

const cssWebpackPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[name].css',
})

module.exports = {
  entry: './src/App/App.js',
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    // chunkFilename: '[name].js',
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, '../src/'),
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 2,
              localIdentName: '[name]_[local]_[hash:base64]',
              minimize: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
},
  plugins: [htmlWebpackPlugin, cssWebpackPlugin],
}
