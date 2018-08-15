/**
 * 一个简单的回调函数
 * nodejs的异步均是通过回调函数实现的
 * @param {boolean} value 
 * @param {*} callback 
 */

var isTrue = function(value, callback) {
    if (value == true) {
        console.log(value);
        callback(null, 'yes');
    } else {
        console.log(value);
        callback(new Error('no'));
    }
}

isTrue(true, function(err, data) { //
    if (err) return console.log(err);
    console.log('ok: ' + data);
});

console.log('1');