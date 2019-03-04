var port = 3000;//
var hostname = "127.0.0.11";//

var http = require('http');
var url=require('url');
var fs=require('fs');
var mine=require('./mine').types;//这里是引入文件
var path=require('path');
//其实方法（函数）都是可以剥离出来的，自己定义

//这就是很基础的一个版本

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    if (path.extname(pathname)=="") {
        pathname+="/";
    }
    if (pathname.charAt(pathname.length-1)=="/"){
        pathname+="index.html";
    }
    
    
    var realPath = path.join("www", pathname);    //这里设置自己的文件名称;
    console.log("这是22行的文件路径"+realPath);
    var ext = path.extname(realPath);
    console.log(ext);
    

    ext = ext ? ext.slice(1) : 'unknown';
//  console.log(ext);
    
    fs.exists(realPath, (exists) => {
        
        
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/html;charset="utf-8"'
            });

            response.write("This request URL " + realPath + " was not found on this server.<br/>服务器没有找到对应服务");
            response.end();
        } else {
            fs.readFile(realPath, "binary", (err, file) => {
                
                if (err) {
                    console.log(err);
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
});
server.listen(port,hostname,() => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});


