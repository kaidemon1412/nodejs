function route(pathname){
    //console.log("路由名字是：" + pathname);
    // return pathname;
    
}
exports.route = route;


// function showPaper(path,status){
//     let content = fs.readFileSync(path);
//     response.writeHead(status, { 'Content-Type': 'text/html;charset=utf-8' });
//     response.write(content);
//     response.end();
// }

// switch(pathname){
//     case '/':
//     case '/index':
//         showPaper('www/index.html',200);
//         break;
//     case '/about':
//         showPaper('www/about.html',200);
//         break;
//     default:
//         showPaper('www/404.html',200);
//         break;
// }