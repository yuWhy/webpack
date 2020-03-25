const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // build 之后不需要自己建html文件，会自动，并且引入js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    optimization: { // 优化项
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
    mode: 'production', // 模式 默认两种 production development
    entry: './src/index.js', // 入口
    output: { //
        filename: 'bundle.js', // 打包后的文件名 也可以加 bundle.[hash].js bundle.[hash:8].js只显示8位hash
        path: path.resolve(__dirname, 'build'), // 路径必须是一个绝对路径
    },
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
            filename: 'main.css'
        })
    ],
    module: { // 模块
        rules: [ // 规则
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