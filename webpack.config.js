'use strict';
const Path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractSASS = new MiniCssExtractPlugin({filename:'./[name].css'});
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
            description: page.content.description,
            favicon: './src/layout/favicon.ico'
        })
    );
}

module.exports = (options) => {
    const dest = Path.join(__dirname, 'architectui-html-free');

    let webpackConfig = {
        mode: 'none',
        devtool: options.devtool || 'eval-source-map',
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
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Tether: 'tether',
                'window.Tether': 'tether',
                Popper: ['popper.js', 'default'],
            }),
            new CopyWebpackPlugin({
              patterns: [
                { from: './src/assets/images', to: './assets/images' },
                { from: './src/layout/favicon.ico', to: './favicon.ico' }
              ]
            }),
            new webpack.DefinePlugin({
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
                    options: {
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
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
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
            use: ExtractSASS.extract(['css-loader',           {
                loader: "sass-loader",
                options: {
                  warnRuleAsWarning: false,
                },
            }])
        }, {
            test: /\.css$/i,
            use: ExtractSASS.extract(['css-loader'])
        });

    } else {
        webpackConfig.plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );

        webpackConfig.module.rules.push({
            test: /\.scss$/i,
            use: ['style-loader', 'css-loader',
            {
                loader: "sass-loader",
                options: {
                  warnRuleAsWarning: false,
                },
            }]
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }
        );

        webpackConfig.devServer = {
            port: options.port,
            historyApiFallback: true,
            hot: true,
            static: {
                directory: Path.join(__dirname, 'public'),
            },
            watchFiles: ['public/**/*.*'],
            open: {
                target: ['http://localhost:8080'],
                app: {
                    name: 'google chrome'
                }
            }
        };
    }

    webpackConfig.plugins = webpackConfig.plugins.concat(renderedPages);

    return webpackConfig;
};