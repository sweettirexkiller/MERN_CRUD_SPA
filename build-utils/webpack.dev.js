const commonPaths = require('./common-path');

const webpack = require('webpack');

const config = {
    entry: {
        app: [
            `${commonPaths.appEntry}/index.js`
        ]
    },
    mode: 'development',
    output: {
        path: commonPaths.appEntry,
        filename: 'bundle.js'
    },
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
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [],
};

module.exports = config;