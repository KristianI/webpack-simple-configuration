var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        js: './js/app.js'
    },
    output: {
        path: '../dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            { test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
            { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
            { test: /\.svg$/,    loader: "file-loader?prefix=font/" }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};