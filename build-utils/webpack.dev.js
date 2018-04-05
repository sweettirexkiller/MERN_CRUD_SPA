const commonPaths = require('./common-path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "styles.css",
});

const webpack = require('webpack');

const config = {
    entry: {
        app: [
            `${commonPaths.appEntry}/index.js`,
        ]
    },
    mode: 'development',
    output: {
        path: commonPaths.outputPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.sa?c?ss$/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: [{
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                        {
                            loader: "sass-loader" // compiles Sass to CSS
                        }]
                })
            }
        ]
    },
    plugins: [
        extractSass
    ],
};

module.exports = config;