var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
        context: path.join(__dirname, 'src'),
        entry: './index.ts',
        output: {
                path: __dirname + '/dist',
                filename: 'bundle.js'
        },
        module: {
                preLoaders: [
                        {
                                test: /\.ts$/,
                                loader: 'tslint-loader'
                        }
                ],
                loaders: [
                        {
                                test: /\.ts$/,
                                loaders: ['ts-loader']
                        },
                        {
                                test: /\.html$/,
                                loader: "html"
                        },
                        {
                                test: /\.(css|scss)$/,
                                exclude: /app\\.+\.css$/,
                                loader: ExtractTextPlugin.extract("style-loader", "css-loader", "sass-loader")
                        },
                        {
                                test: /app\\.+\.css$/,
                                loaders: ['to-string-loader', 'css']
                        },
                        {
                                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                                loader: "url-loader?limit=10000&minetype=application/font-woff&name=fonts/[name].[ext]"
                        },
                        {
                                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                                loader: "file-loader?limit=10000&name=fonts/[name].[ext]"
                        }
                ],
                tslint: {

                        configuration: {
                                "rulesDirectory": [
                                        "node_modules/codelyzer"
                                ],
                                "rules": {
                                        "class-name": true,
                                        "comment-format": [true, "check-space"],
                                        "indent": [true, "spaces"],
                                        "no-duplicate-variable": true,
                                        "no-eval": true,
                                        "no-any": true,
                                        "no-internal-module": true,
                                        "no-trailing-whitespace": true,
                                        "no-var-keyword": true,
                                        "one-line": [true, "check-open-brace", "check-whitespace"],
                                        "semicolon": false,
                                        "triple-equals": [true, "allow-null-check"],
                                        "typedef-whitespace": [true, {
                                                        "call-signature": "nospace",
                                                        "index-signature": "nospace",
                                                        "parameter": "nospace",
                                                        "property-declaration": "nospace",
                                                        "variable-declaration": "nospace"
                                                }],
                                        "variable-name": [true, "ban-keywords"],
                                        "whitespace": [true,
                                                "check-branch",
                                                "check-decl",
                                                "check-operator",
                                                "check-separator",
                                                "check-type"
                                        ],
                                        "directive-selector-name": [true, "camelCase"],
                                        "component-selector-name": [true, "kebab-case"],
                                        "directive-selector-type": [true, "attribute"],
                                        "component-selector-type": [true, "element"],
                                        "directive-selector-prefix": [true, "sg"],
                                        "use-input-property-decorator": true,
                                        "use-output-property-decorator": true,
                                        "use-host-property-decorator": true,
                                        "no-attribute-parameter-decorator": true,
                                        "no-input-rename": true,
                                        "no-output-rename": true,
                                        "no-forward-ref": true,
                                        "use-life-cycle-interface": true,
                                        "use-pipe-transform-interface": true,
                                        "pipe-naming": [true, "camelCase", "sg"],
                                        "component-class-suffix": true,
                                        "directive-class-suffix": true,
                                        "import-destructuring-spacing": true,
                                        "templates-use-public": true,
                                        "no-access-missing-member": true,
                                        "invoke-injectable": true
                                }
                        }
                }
        },
        resolve: {

                extensions: ['', '.ts', '.js']
        },
        plugins: [
                new ExtractTextPlugin("bundle.css"),
//                new webpack.optimize.UglifyJsPlugin(),
                new HtmlWebpackPlugin({
                        template: 'index.html'
                })
        ]
};
