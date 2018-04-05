const commonPaths = require('./common-path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    mode: 'production',
    entry: {
        app: [`${commonPaths.appEntry}/index.js`]
    },
    output: {
        filename: 'static/[name].[hash].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoader: 1,
                                camelCase: true,
                                sourceMap: true,
                                minimize: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    ctx: {
                                        autoprefixer: {
                                            browsers: 'last 2 versions'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/[hash].css',
            allChunks: true,
        }),
    ]
};

module.exports = config;