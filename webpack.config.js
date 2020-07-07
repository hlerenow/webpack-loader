const RemoveCommentPlugin = require('./removeComment.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {

  },
  mode: 'development',
  module:{
    rules: [{
      test: /\.md/,
      use: ['./markdown-loader.js']
    }]
  },
  plugins: [
    new RemoveCommentPlugin(),
    new HtmlWebpackPlugin()
  ]
}