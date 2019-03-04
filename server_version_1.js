/*这是nodejs服务器脚本配置文件，必须要有的基础配置部分，其他功能可拓展*/

//引入http模块
var http = require("http");

//开启服务，监听端口（8080）端口可以自己设置，一般建议在6000以上
var server = http.createServer((req,res) => {
    /*
     req是用来接受客户端数据
     res迎来向客户端发送服务器数据
     */
    
    console.log("有客户端链接");//创建成功后显示在后台，
    
    //
    
    
    res.writeHeader(200,{"content-type":"text/html;charset='utf-8'"});
    res.wite("这是正文部分");//显示给客户端
    res.end();
}).listen(8080);
console.log("服务器开启成功！");




