var path = require("path");
var webpack = require('webpack');

module.exports = {
    //entry: './src/index.js',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, '/'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            }
        ]
    },
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: '/'
    },
    devtool: 'inline-source-map'
};