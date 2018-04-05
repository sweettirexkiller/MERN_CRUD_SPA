const commonPaths = require('./common-path');

const webpack = require('webpack');

const port = process.env.port || 3000;

const config = {
    mode: 'development',
    entry: {
        app: [
            'react-hot-loader/patch',
            `${commonPaths.appEntry}/index.js`
        ]
    },
    output: {
        filename: '[name].[hash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        hot: true
    }
};

module.exports = config;