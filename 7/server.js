const express = require('express');
const app = express();
const webpack = require('webpack');

// 中间件
const middle = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(middle(compiler));

app.get('/aa', (req, res) => {
    res.send('ok');
})
app.listen(3000);
console.log('suess');