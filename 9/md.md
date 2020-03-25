1 npm init -y

2 npm install webpack webpack-cli html-webpack-plugin @babel/core babel-loader @babel/preset-env @babel/preset-react -D

3 webpack优化
    module: {
        noParse: /jquery/, // 打包时候 不解析有些包中的依赖关系
         rules: [
                        {
                            test: /\.js$/,
                            exclude: /node_modules/, // 解析的时候排除有些文件夹
                            include: path.resolve('src') // 或者只处理src里面的
                            
    momentjs.com
    npm install moment // 时间库
    直接使用
    moment.locale('zh-cn');
    打包大小
    bundle.js 1.27mib
    index.html 181 bytes
    
    在时候new webpack.IgnorePlugin(/\.\/locale/, /moment/),忽略moment中locale中的文件全部引入， 之后
    bundle.js 823kib
    index.html 181 bytes
    但是忽略了locale引入之后，要手动引入需要的语言
    类似import 'moment/locale/zh-cn';
     bundle.js 828kib
        index.html 181 bytes