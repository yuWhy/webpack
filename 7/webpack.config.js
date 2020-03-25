const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 多入口
    mode: 'development',
    entry: './src/index.js', // 入口
    output: { //
        filename: 'bundle.js', // 打包后的文件名 也可以加 bundle.[hash].js bundle.[hash:8].js只显示8位hash
        path: path.resolve(__dirname, 'dist'), // 路径必须是一个绝对路径
    },
    // 1)源码映射 会单独生成一个sourcemap文件 出错了 会标识 当前报错的列行
    // devtool: 'source-map', // 添加映射文件 可以帮我们调试源代码
    // 2) 不会产生单独的文件， 但还是可以显示列行
    // devtool: 'eval-source-map',
    // 3) 不会产生列 但是是一个单独的映射文件
    // devtool: 'cheap-module-source-map',
    // 4) 不会产生文件 不会产生列 集成在打包后的文件中
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        })
    ],
    // resolve: {// 解析第三方 common
    //   modules: [path.resolve('node_modules')],
    //   extensions: ['.js', '.css', '.json', '.vue'], // 引用时候没有加后缀名就 按这个顺序查找
    //   mainFields: ['style', 'main'], // 引用先找 style 在 main
    //   mainfiles: [], // 入口文件的名字 默认是index.js
    //   alias: { // 别名
    //       '@': '/'
    //   }
    // },
    devServer: {
        proxy: { // 配置代理
            // 1)
            // '/api': 'http://localhost:3000'
            // '/api': {
            //     target: 'http://localhost:3000',
            //     pathRewrite: {'/api': ''} // 替换/api
            // },

            // 2) 单纯模拟数据
            // before(app) {
            //     app.get('/user', (req, res) => {
            //         res.json({name: 444});
            //     })
            // }
        }
    }
}