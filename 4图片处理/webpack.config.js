const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // build 之后不需要自己建html文件，会自动，并且引入js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    optimization: { // 优化项 好像只有 production 执行
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new TerserWebpackPlugin({}),
            new OptimizeCss({})
        ]
    },
    devServer: {
        port: 3000,
        progress: true,
        contentBase: './build'
    },
    mode: 'development', // 模式 默认两种 production development
    entry: './src/index.js', // 入口
    output: { //
        filename: 'bundle.js', // 打包后的文件名 也可以加 bundle.[hash].js bundle.[hash:8].js只显示8位hash
        path: path.resolve(__dirname, 'build'), // 路径必须是一个绝对路径
        publicPath: 'http://www.baidu.com' // 引用的资源文件自动补充这个头部 如果想 css 图片等单独处理就写道 module/rules下面具体位置
    },
    // externals: {
    //     jquery: "jQuery"
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: { // 压缩
                removeAttributeQuotes: true, // 去掉双引号
                // collapseWhitespace: true, // 折叠空行
            },
            hash: true, // 加hash戳
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new webpack.ProvidePlugin({ // 在每个模块中都注入这个$模块
            $: 'jquery'
        })
    ],
    module: { // 模块
        rules: [ // 规则
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    // 可以做一个限制，当图片小于多少K的时候 用base64来转换
                    // 否则用file-loader产生真实的图片
                    loader: 'url-loader',
                    options: {
                        limit: 1, // 200 * 1024
                        outputPath: 'img/' // 产生路径目录
                        // publicPath: '填充域名'
                    }
                }
                // use: 'file-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: { // 用babel-loader 需要把es6-es5
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            ['@babel/plugin-proposal-decorators', {
                                "legacy": true
                            }],
                            ['@babel/plugin-proposal-class-properties', {
                                "loose": true
                            }],
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                },
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            { // css-loader 解释@import这种语法的
                // style-loader 把css插入到head的标签中
                // loader是由执行顺序的 默认是从右向左执行
                test : /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, ////代替style-loader
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    }
}