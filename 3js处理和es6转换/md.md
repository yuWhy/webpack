babel-loader @babel/core @babel/preset-env 

@babel/plugin-proposal-class-properties 要转一些高级的es6 例如class
npm install @babel/plugin-proposal-class-properties -D

@装饰器 还要安装
@babel/plugin-proposal-decorators

// 处理js语法和校验
yield 会有问题
所以还需要
npm install @babel/plugin-transform-runtime -D

还需要 发布的时候也要的
// 公共抽离
npm install @babel/runtime

还要代码引进补丁模块
npm install @babel/polyfill
不加的话 类似includes方法会有问题

expose-loader
// 暴露全局
import $ form 'jquery';
window.$ 是 undefinded;

方法1
import $ from 'expose-loader?$!jquery';
// $ 就变成全局变量了
window.$

方法2
module: {
    rules: [
        {
            test: require.resolve('jquery),
            use: 'expose-loader?$'
        },
    ]
}
import $ form 'jquery';
window.$ 也暴露全局了

当jquery是外链的方式引入的话
直接window.$是可以
如果import $ from 'jquery'; 就不可以了，因为是自动化弄成一个模块。
所以需要
externals: {
    jquery: "jQuery"
},