//我将http.js进行了改进，为了更好的理解nodejs

var port = 3000;//端口
var hostname = "127.0.0.11";//域名,本来是127.0.0.1的，这个域名可以改，换成主机ip就可以在局域网访问了
// 这里的require只是nodejs自带的引入api的方法，而import是es6的模块导入语法，这就是本质区别。
var http = require('http');
var url=require('url');
var fs=require('fs');//文件解析模块
var mine=require('./mine').types;//这里是引入文件
var path=require('path');//文件路径处理


//var favicon = require("serve-favicon");//网站图标,0509目前我还不会

//第一次我认为之所以将这个服务器运行脚本封装起来就是要提供一个给外界的接口
//一个开启服务额函数
function start(route){
    //下面这个说明了模块化是一件多么机制的事情。
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;//path.parse(path String);返回路径字符串对象
        if (path.extname(pathname)=="") { //path.extname(p),返回路径中文件的路径名就是最后一个‘.’出现之后的部分。
            pathname+="/";
        }
        if (pathname.charAt(pathname.length-1)=="/"){
            pathname+="index.html";
        }
        var realPath = path.join("www", pathname);    //这里设置自己的文件名称;
//      console.log(realPath);
        var ext = path.extname(realPath);
//      console.log(ext);
        
        ext = ext ? ext.slice(1) : 'unknown';
        fs.exists(realPath, (exists) => {
            if (!exists) {
                response.writeHead(404, {
                    'Content-Type': 'text/html;charset="utf-8"'
                });
    
                response.write("This request URL " + pathname + " was not found on this server.<br/>服务器没有找到对应服务");
                response.end();
            } else {
                fs.readFile(realPath, "binary", (err, file) => {
                    if (err) {
                        response.writeHead(500, {
                            'Content-Type': 'text/plain'
                        });
                        response.end(err);
                    } else {
                        var contentType = mine[ext] || "text/plain";
                        response.writeHead(200, {
                            'Content-Type': contentType
                        });
                        response.write(file, "binary");
                        response.end();
                    }
                });
            }
        });
    }
    
    // 每次运行你都会知道，这个
    http.createServer(onRequest).listen(port,hostname,() => {
        console.log(`服务器运行在 http://${hostname}:${port}/`);
    });
    
    console.log("服务器开启成功！");
}

start();

exports.start = start;





