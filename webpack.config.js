var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'build/js');
var APP_DIR = path.resolve(__dirname, 'src/js')

module.exports = {
    devServer: {
        inline: true,
        contentBase: './build',
        port: 3000
    },
    entry: APP_DIR + '/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                include : APP_DIR,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: BUILD_DIR,
        filename: 'index.js'
    }
};
