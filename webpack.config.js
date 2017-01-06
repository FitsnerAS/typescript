var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');
require('es6-promise').polyfill();
module.exports = {
        context: path.resolve(__dirname, "src"),
        entry: './index.ts',
        output: {
                path: __dirname + '/dist',
                filename: 'bundle.js'
        },
        module: {

                loaders: [
                        {
                                test: /\.ts$/,
                                loaders: ['ts-loader', 'angular2-template-loader?keepUrl=true'],
                                exclude: [/\.(spec|e2e)\.ts$/]
                        },
                        {
                                test: /\.(html|css)$/,
                                loader: 'raw-loader',
                                exclude: /\.async\.(html|css)$/
                        },
                        {
                                test: /\.(css|scss)$/,
                                loader: ExtractTextPlugin.extract("style-loader", "css-loader", "sass-loader")
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

                extensions: ['', '.ts', '.js', '.css', 'scss']
        },
        plugins: [
                new ExtractTextPlugin("bundle.css"),
//                new webpack.optimize.UglifyJsPlugin(),
                new HtmlWebpackPlugin({
                        template: 'index.html'
                })
        ]
};
