var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
module.exports = {
        context: __dirname + '/app',
        entry: './index.js',
        output: {
                path: __dirname + '/app',
                filename: 'bundle.js'
        },
        devServer: {
                host: 'localhost',
                port: 3000,
                contentBase: __dirname + '/app'
        },
        resolve: {
                alias: {
                        jquery: "jquery/src/jquery"
                }
        },
        module: {
                loaders: [

                        {
                                test: /\.ts$/,
                                loader: 'ts-loader',
                        },

                        {
                                test: /\.js$/,
                                exclude: /(node_modules|bower_components)/,
                                loader: 'babel',
                                query: {
                                        presets: ['es2015'],
                                        plugins: ['transform-runtime']
                                }
                        },
                        {
                                test: /\.css$/,
                                loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
//                                exclude: /node_modules/
                        },
                        {
                                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                                loader: "url-loader?limit=10000&minetype=application/font-woff&name=assets/fonts/[name].[ext]"
                        },
                        {
                                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                                loader: "file-loader?limit=10000&name=assets/fonts/[name].[ext]"
                        }
                ]
        },
        plugins: [
                new ExtractTextPlugin("bundle.css"),
                new webpack.optimize.UglifyJsPlugin()
        ]
};
