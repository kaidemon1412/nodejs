//nodejs访问本地站点文件的脚本配置文件，
var http = require('http');//引入http模块

var fs = require('fs');//引入文件读取模块

var hostname = "127.0.0.11";//定义本地ip地址

var port = 3000;//定义端口号

var documentRoot = 'D:/project/nodejs_server/www';//需要访问的文件存放目录


var server = http.createServer((req,res) => {
    var url = req.url;
    //客户端输入localhost:8080/index.html
    //那么这里就是index.html
    
    var file = documentRoot + url;
    
    console.log(url);
    
    //D:/project/nodejs_server/www
    fs.readFile(file,(err,data) => {
          /*
           * 参数一为文件路径
           * 参数二为回调函数
           *    回调函数的参数一为读取错误信息返回空就没有错误
           *    参数二为读取成功之后返回的文本内容。
           */
          console.log(data);
          if(err){
              res.writeHeader(404,{
                  'content-type':'text/html;charset="utf-8"'
              });
              res.write();
              res.end();
          }else{
              res.writeHeader(200,{
                  'content-type':'text/html;charset="utf-8"'
              });
              res.write(data);
              res.end();
          }
    })
    
    
    
});
//监听端口在后端打印
server.listen(port,hostname,() => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});
