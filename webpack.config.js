const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        index: path.resolve("./src/js/LegendModal.js")
    },
    output: {
        path: path.resolve(__dirname),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
