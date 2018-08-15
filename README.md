# nodejs-tools
node的特点
1. 异步I/O
    在Node中，绝大多数的操作都是以异步的方式进行的，在底层上构建了很多异步I/O的API，从文件读取到网络请求，这样意义在于我们可以在语言层面很自然的进行I/O操作，每个调用之前无需等待之前的I/O调用结束。
2. 事件与回调函数
    回调函数是接受异步调用返回数据的方式。
3. 单线程
4. 跨平台

node的应用场景
1. I/O密集型
2. CPU密集型
3. 分布式应用

node的包
1. npm安装
2. package.json

回调以及回调地狱问题
1. promise callback
2. async waterfall
3. await
    ES6语法中,await使异步操作更加方便,具体尝试可以参照just_await.js
4. thunkify
