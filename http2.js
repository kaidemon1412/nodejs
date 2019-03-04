//这是运行在服务端的代码，客户端和服务端，有了nodejs前端也可以成为全栈工程师了，这就是我的目标，全栈工程师
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
    //js的方法charAt(index);通过字符串的下标返回对应的字符
    if (pathname.charAt(pathname.length-1)=="/"){
        pathname+="index.html";
    }
    var realPath = path.join("www", pathname);    //这里设置自己的文件名称;
//  console.log("这是22行的文件路径"+realPath);
    var ext = path.extname(realPath);
//  console.log(ext);

    ext = ext ? ext.slice(1) : 'unknown';
//  console.log(ext);
    

    fs.exists(realPath, (exists) => {
        if (!realPath || !exists) {
            response.writeHead(404);
            response.end();
            return;
        }
        
        var readStream = fs.ReadStream(realPath);
        
        var contentType = 'none';
        
//      console.log(readStream);

        if(ext == "mp4"){
            contentType = "video/mp4";
            response.writeHead(200, {
                'Content-Type' : contentType,
                'Accept-Ranges' : 'bytes',
                'Server' : 'Microsoft-IIS/7.5',
                'X-Powered-By' : 'ASP.NET'
            });
            
            readStream.on('close', function() {
                response.end();
            });
            readStream.pipe(response);
        }else{
            
            fs.readFile(realPath, "binary", (err, file) => {
                
                if (err) {
//                  console.log(err);
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    
                    response.end(err);
                } else {
                    
                    
                    contentType = mine[ext] || "text/plain";
                    
                    
                    
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
//下面这段代码就是监听端口和IP地址的对客户端的请求做出监听
server.listen(port,hostname,() => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});


