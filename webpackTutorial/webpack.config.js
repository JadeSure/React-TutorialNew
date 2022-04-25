const path = require('path')
const webpack = require('webpack');
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// create variable for webpack.config.js
process.env.NODE_ENV = 'production'
const NODE_ENV = process.env.NODE_ENV

// define available local .env names
const dotenvFiles = [`.env.${NODE_ENV}.local`, `.env.${NODE_ENV}`].filter(
  Boolean
)

// look available .env (development/production), put inject it into process.env (node available only)
dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv').config({
      path: dotenvFile
    })
  }
})

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].bundle.js',
  },
  mode: 'development',
  devServer: {
      static: path.join(__dirname, 'dist'),
      port: 9001,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass|less)$/i,
        use: [ MiniCssExtractPlugin.loader, "css-loader",],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ],
  },
  // unknown
  // node: {
  //   module: 'empty',
  //   dgram: 'empty',
  //   dns: 'mock',
  //   fs: 'empty',
  //   http2: 'empty',
  //   net: 'empty',
  //   tls: 'empty',
  //   child_process: 'empty'
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './base.html',
  }), 
    new MiniCssExtractPlugin({
    filename: 'main.[hash].css'
  }),
    new webpack.DefinePlugin({
        // for .env web access; inject process.env from node process.env
        'process.env': JSON.stringify(process.env)
    //   PRODUCTION: JSON.stringify(true),
    //   VERSION: JSON.stringify('5fa3b9'),
    //   BROWSER_SUPPORTS_HTML5: true,
    //   TWO: '1+1',
    //   'typeof window': JSON.stringify('object'),
    //   'process.env.PUBLIC_KEY': JSON.stringify('old iron666')
    })  
],
  devtool: 'source-map'
  };

// 在webpack config中，无法直接读取process.env.NODE_ENV
// console.log(process.env.NODE_ENV);