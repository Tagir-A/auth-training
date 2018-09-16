const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const BUNDLE_DIR_NAME = 'bundle'

const PATHS_TO_CLEAN = [BUNDLE_DIR_NAME]

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, BUNDLE_DIR_NAME),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(PATHS_TO_CLEAN),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            hash: true
        }),
        new ScriptExtHtmlWebpackPlugin({
            async: /\.js$/,
            defer: /\.js$/,
          }),
        new FaviconsWebpackPlugin(path.resolve(__dirname, 'src', 'favicon.png')),
    ]
}