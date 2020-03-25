const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        react: ['react', 'react-dom']
    },
    output: {
        filename: '_dll_[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: '_dll_[name]'
        // libraryTarget: 'var' // commonjs var this
    },
    plugins: [
        new webpack.DllPlugin({ // 产生清单 下次引用react 就直接拿清单里面定义好的
            name: '_dll_[name]', // 等于 library
            path: path.resolve(__dirname, 'dist', 'manifest.json')
        })
    ]
}