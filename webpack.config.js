'use strict';
const Path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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

module.exports = (env) => {
    const isProduction = env && env.production;
    const dest = Path.join(__dirname, 'architectui-html-free');

    let webpackConfig = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? false : 'eval-source-map',
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
                $: ['jquery', 'default'],
                jQuery: ['jquery', 'default'],
                'window.jQuery': ['jquery', 'default'],
                'window.$': ['jquery', 'default'],
            }),
            new CopyWebpackPlugin({
              patterns: [
                { from: './src/assets/images', to: './assets/images' },
                { from: './src/layout/favicon.ico', to: './favicon.ico' }
              ]
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development')
                }
            })
        ],
        module: {
            rules: [
                {
                    // Expose jQuery globally for Bootstrap and other plugins
                    test: require.resolve('jquery'),
                    loader: 'expose-loader',
                    options: {
                        exposes: ['$', 'jQuery'],
                    },
                },
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

    if (isProduction) {
        webpackConfig.plugins.push(
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: './assets/styles/main.css'
            })
        );

        webpackConfig.optimization = {
            minimizer: [
                `...`,  // Extends existing minimizers (i.e. terser for JS)
                new CssMinimizerPlugin(),
            ],
        };

        webpackConfig.module.rules.push({
            test: /\.scss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: "sass-loader",
                    options: {
                        warnRuleAsWarning: false,
                    },
                }
            ]
        }, {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
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
            port: 8080,
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