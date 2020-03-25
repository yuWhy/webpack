const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // build 之后不需要自己建html文件，会自动，并且引入js
module.exports = {
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: { // 压缩
                removeAttributeQuotes: true, // 去掉双引号
                collapseWhitespace: true, // 折叠空行
            },
            hash: true, // 加hash戳
        })
    ]
}