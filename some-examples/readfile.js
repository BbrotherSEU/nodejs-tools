/**
 * 异步读取文件
 * 一个很简单的nodejs入门脚本
 */

var fs = require('fs');

fs.readFile('/etc/passwd', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
})

console.log('read file');