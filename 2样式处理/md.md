mini-css-extract-plugin 抽离css类
npm install mini-css-extract-plugin -D
但css文件要自己压缩 用 optimize-css-assets-webpack-plugin
uglifyjs-webpack-plugin 压缩js


autoprefxer 这个的前提是需要loader处理 功能是 自动加浏览器适配前缀
npm install postcss-loader autoprefixer -D
 需要新建postcss.config.js