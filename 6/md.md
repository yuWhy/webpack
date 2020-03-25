source-map
源码映射

watch:true 
监控

小插件
cleanWebpackPlugin
npm install clean-webpack-plugin -D
每次都build都先删除dist文件

copyWebpackPlugin
npm install copy-webpack-plugin -D
把你想要的也拷进dist目录

bannerPlugin // 内置的
版权声明,会加在每个文件内容前面
new webpack.bannerPlugin('版权声明')