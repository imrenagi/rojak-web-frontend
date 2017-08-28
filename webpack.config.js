// Import Webpack npm module
const webpack = require('webpack')
const path = require('path')

module.exports = {
  // Which file is the entry point to the application
  entry: './src/index.js',
  // Which file types are in our project, and where they are located
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Where to output the final bundled code to
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: 'bundle.map.js'
  },
  devtool: '#source-map',
  module: {
    // How to process project files with loaders
    loaders: [
      // Process any .js or .jsx file with Babel
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
}
