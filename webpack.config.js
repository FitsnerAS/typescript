var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
        context: __dirname + '/src',
        entry: './index.ts',
        output: {
                path: __dirname + '/dist',
                filename: 'bundle.js'
        },
//        devServer: {
//                host: 'localhost',
//                port: 3000,
//                contentBase: __dirname + '/dist'
//        },
        module: {
                loaders: [
                        {
                                test: /\.ts$/,
                                loader: 'ts-loader'
                        },
                        {
                                test: /\.css$/,
                                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                        },
                        {
                                test: /\.scss$/,
                                loaders: ExtractTextPlugin.extract("style-loader", "css-loader", "sass-loader")
                        },
                        {
                                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                                loader: "url-loader?limit=10000&minetype=application/font-woff&name=fonts/[name].[ext]"
                        },
                        {
                                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                                loader: "file-loader?limit=10000&name=fonts/[name].[ext]"
                        }
                ]
        },
        resolve: {
                alias: {
                        jquery: "jquery/src/jquery"
                },
                extensions: ['', '.js', '.ts']
        },
        plugins: [
                new ExtractTextPlugin("bundle.css"),
//                new webpack.optimize.UglifyJsPlugin(),
                new HtmlWebpackPlugin({
                        template: 'index.html'
                })
        ]
};
