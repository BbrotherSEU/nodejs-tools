//express_demo.js 文件
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   var headers =  req.headers;
   var abtest = headers.abtest;

   var params;
	if (req.method == 'POST') {
		params = req.body;
	} else {
		params = req.query;
    }
    
   if (abtest) {
    res.send(abtest);

   } else {
    res.send("b");

   }
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})