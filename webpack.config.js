// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: 'babel-loader'
            },
            {
                test: /\.scss$/,
                // loader: ExtractTextPlugin.extract('css-loader', 'sass-loader')
                use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }]
            }
        ]
    },
    // plugins: [
    //     new ExtractTextPlugin('../build/bundle.css')
    // ]
};