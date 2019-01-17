'use strict';

const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractSASS = new ExtractTextPlugin('./[name].css');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

const pages = require('./src/pages');
let renderedPages = [];
for (let i = 0; i < pages.length; i++) {
    let page = Object.assign({}, pages[i]);
    renderedPages.push(
        new HtmlWebpackPlugin({
            template: page.template,
            filename: page.output,
            title: page.content.title,
            heading_icon: page.content.heading_icon,
            description: page.content.description
        })
    );
}

module.exports = (options) => {
    const dest = Path.join(__dirname, 'architectui-html-free');

    let webpackConfig = {
        devtool: options.devtool,
        entry: {
            main: './src/app.js',
            demo: './src/scripts-init/demo.js',
            toastr: './src/scripts-init/toastr.js',
            scrollbar: './src/scripts-init/scrollbar.js',
            fullcalendar: './src/scripts-init/calendar.js',
            maps: './src/scripts-init/maps.js',
            chart_js: './src/scripts-init/charts/chartjs.js',
        },
        output: {
            path: dest,
            filename: './assets/scripts/[name].js'
        },
        plugins: [
            new Webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Tether: 'tether',
                'window.Tether': 'tether',
                Popper: ['popper.js', 'default'],
            }),
            new CopyWebpackPlugin([
                {from: './src/assets/images', to: './assets/images'}
            ]),
            new Webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development')
                }
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.hbs$/,
                    loader: 'handlebars-loader',
                    query: {
                        helperDirs: [
                            Path.join(__dirname, 'src', 'helpers')
                        ],
                        partialDirs: [
                            Path.join(__dirname, 'src', 'layout'),
                            Path.join(__dirname, 'src', 'DemoPages'),
                        ]
                    }
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './assets/fonts'
                        }
                    }]
                },
                {
                    test: /\.(gif|jpg|png)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets/images'
                    }
                }
            ]
        }
    };

    if (options.isProduction) {
        webpackConfig.entry = [
            './src/app.js',
            './src/scripts-init/demo.js',
            './src/scripts-init/toastr.js',
            './src/scripts-init/scrollbar.js',
            './src/scripts-init/calendar.js',
            './src/scripts-init/maps.js',
            './src/scripts-init/charts/chartjs.js',

        ];

        webpackConfig.plugins.push(
            ExtractSASS,
            new CleanWebpackPlugin([dest], {
                verbose: true,
                dry: false
            })
        );

        webpackConfig.module.rules.push({
            test: /\.scss$/i,
            use: ExtractSASS.extract(['css-loader', 'sass-loader'])
        }, {
            test: /\.css$/i,
            use: ExtractSASS.extract(['css-loader'])
        });

    } else {
        webpackConfig.plugins.push(
            new Webpack.HotModuleReplacementPlugin()
        );

        webpackConfig.module.rules.push({
            test: /\.scss$/i,
            use: ['style-loader?sourceMap', 'css-loader?sourceMap', 'sass-loader?sourceMap']
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.js$/,
            use: 'eslint-loader',
            exclude: /node_modules/
        });

        webpackConfig.devServer = {
            port: options.port,
            contentBase: dest,
            historyApiFallback: true,
            compress: options.isProduction,
            inline: !options.isProduction,
            hot: !options.isProduction,
            stats: {
                chunks: true
            }
        };

        webpackConfig.plugins.push(
            new BrowserSyncPlugin({
                host: 'localhost',
                port: 3001,
                files: ["public/**/*.*"],
                browser: "google chrome",
                reloadDelay: 1000,
            }, {
                reload: false
            })
        );

    }

    webpackConfig.plugins = webpackConfig.plugins.concat(renderedPages);

    return webpackConfig;

};