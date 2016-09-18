// 静态资源
var http = require('http');
var fs = require('fs');

function serveStaticFile(res,path,contentType,responseCode){
	if(!responseCode){
		responseCode = 200;
	}
	fs.readFile(__dirname + path,function(err,data){
		if(err){
			res.writeHead(500,{'content-Type':'text/plain'});
			res.end('服务器内部错误');
		}else{
			res.writeHead(responseCode,{'content-Type':contentType});
			res.end(data);
		}
	});
}

http.createServer(function(req,res){
	// 规范URL，去掉查询字符串，可选的反斜杠，并把它变成小写
	var path = req.url.replace(/\/?(?:\?.*)/,'').toLowerCase();
	switch(path){
		case '':
			serveStaticFile(res,'/public/home.html','text/html');
			break;
		case '/about':
			serveStaticFile(res,'/public/about.html','text/html');
			break;
		default:
			serveStaticFile(res,'/public/404.html','text/html');
			break;
	}
}).listen(3000);
console.log('静态资源搭建完毕');