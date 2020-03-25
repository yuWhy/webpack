const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // 多入口
    mode: 'development',
    entry: {
        home: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    // 1)源码映射 会单独生成一个sourcemap文件 出错了 会标识 当前报错的列行
    // devtool: 'source-map', // 添加映射文件 可以帮我们调试源代码
    // 2) 不会产生单独的文件， 但还是可以显示列行
    // devtool: 'eval-source-map',
    // 3) 不会产生列 但是是一个单独的映射文件
    // devtool: 'cheap-module-source-map',
    // 4) 不会产生文件 不会产生列 集成在打包后的文件中
    devtool: 'cheap-module-eval-source-map',
    watch: true,
    watchOptions: { // 监控选项
        poll: 1000, // 每秒 问我 1000次
        aggregateTimeout: 500, // 防抖 一直输入的话 过0.5秒在
        ignored: /node_modules/ // 这个文件的不用监听变化
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'home.html'
        }),
        new CleanWebpackPlugin(), // 默认删除 output里面的路径
        new CopyWebpackPlugin([
            {
                from: './md.md', to: './dist'
            }
        ])
    ]
}