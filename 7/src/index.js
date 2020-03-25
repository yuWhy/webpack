const xhr = new XMLHttpRequest();

// webpack-dev-server 默认端口是8080
xhr.open('GET', '/user');
xhr.onload = function () {
    console.log('1');
    console.log(xhr.response);
}
xhr.send();