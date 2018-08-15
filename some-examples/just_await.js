/**
 * 这里将简单探索await来解决回调地狱
 */

var sleep = function (time) {
    return new Promise((resolve, reject) => { // ES6语法
        setTimeout(function () {
            resolve('ok');
        }, time)
    })
};

var start = async function () { //async表示是一个async函数，await只能在这之后执行
    console.log('start');
    let result = await sleep(6000); //await这里表示等待Promise的返回结果，在继续执行
    console.log(result);
}

start(); //等待6秒后 打印出result

var start2 = async function () {
    for (var i = 1; i <= 10; i++) {
        console.log(`当前是第${i}次等待..`);
        await sleep(1000);
    }
};

start2(); //每秒打印出一个日志


const fs = require('fs');

const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

const asyncReadFile = async function () {
    const f1 = await readFile('/etc/passwd');
    const f2 = await readFile('/etc/passwd');
    console.log(f1.toString());
    console.log(f2.toString());
    throw new Error('我错了'); //抛出异常给then处理
    return 'yes'; //返回值给result处理
};
asyncReadFile().then((result) => {
    console.log(result);
},
    (err) => {
        console.log(err)
    }); // 打印文件内容

