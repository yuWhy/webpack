// 直接这样是找不到文件路径的 http://localhost:63342/webpack/4%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86/build/a.jpg
// let image = new Image();
// image.src = './a.jpg';
// document.body.appendChild(image);
require('./index.css');

// 需要引入file-load 默认会在内部生成一张图片 到build目录下
// 把生成的名字返回回来

//但现在都用url-loader
import logo from './a.jpg'; // 把图片引入， 生成一个新的图片地址
console.log(logo);
let image = new Image();
image.src = logo;
document.body.appendChild(image);