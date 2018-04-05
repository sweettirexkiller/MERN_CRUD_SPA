const commonPaths = require('./common-path');

const webpack = require('webpack');

const config = {
    entry: {},
    output: {
        path: commonPaths.outputPath,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    }
};

module.exports = config;