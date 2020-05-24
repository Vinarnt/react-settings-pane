const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

const config = {
  entry: ['./app'],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: 'app_compiled.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyPlugin(
      {
        patterns: [{ from: path.join(__dirname, "index.html"), to: path.join(__dirname, "dist") }]
      }
    )
  ]
}

module.exports = config
