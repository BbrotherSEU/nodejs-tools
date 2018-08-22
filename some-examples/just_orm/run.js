var load_data = require('./load_data');

load_data.run(() => {
    var result = load_data.getData(); //run 初始化完成后，获取数据
    console.log(result);
})
