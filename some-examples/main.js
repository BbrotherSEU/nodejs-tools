/**
 * 调用函数变量值问题
 * require三次并未让counter初始化三次
 */

var count1 = require('./counter');
var count2 = require('./counter');
var count3 = require('./counter');

console.log(count1.count());
console.log(count2.count());
console.log(count3.count());
