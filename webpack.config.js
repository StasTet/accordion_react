let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + '/bundle/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                        {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                ['es2015', { modules: false }],
                                'stage-0',
                                'react',
                            ],
                            }
                        }
                    ]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader', 'sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('../bundle/bundle.css')
    ]
};