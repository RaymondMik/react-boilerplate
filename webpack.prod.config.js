const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
      index: './src/index.js'
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist')
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader']
          })
        },
        {
          test: /\.(scss|sass)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {loader: 'css-loader', options: {sourceMap: true}},
              {loader: 'postcss-loader', options: {sourceMap: true}},
              {loader: 'sass-loader', options: {sourceMap: true}}
            ]
          })
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {loader: 'babel-loader'}
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {loader: 'file-loader'}
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {loader: 'file-loader'}
          ]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'styles.css'
      }),
      new HtmlWebpackPlugin({
        title: 'My Redux/React App',
        filename: 'index.html',
        template: 'src/index.html'
      }),
      new CleanWebpackPlugin(['dist']),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new UglifyJsPlugin()
    ]
};