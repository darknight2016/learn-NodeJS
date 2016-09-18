// index.js
// 路由是指向客户端提供它所发送请求内容的机制。对BS程序来说，客户端在URL中指明它想要的内容，具体来说就是查询路径和查询字符串

var http = require('http');

http.createServer(function(req,res){
	// 规范URL，去掉查询字符串，可选的反斜杠，并把它变成小写
	var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
	// 正则表达式http://www.jb51.net/tools/zhengze.html
	// 有的时候我们不得不用()，而()默认情况下会将其中exp匹配的内容捕获到组里，而有些情况我们只是判断规则，或者后面并不需要对此处()中匹配的内容进行引用时，就没有必要把它捕获到组里了，一方面会造成资源的浪费，另一方面会降低效率，这时候就要用到非捕获组了
	
	switch(path){
		case '':
			res.writeHead(200,{'content-Type':'text/plain'});
			res.end('Home');
			break;
		case '/about':
			res.writeHead(200,{'content-Type':'text/plain'});
			res.end('about');
			break;
		default:
			res.writeHead(404,{'content-Type':'text/plain'});
			res.end('404 not found');
			break;
	}
}).listen(3000);
console.log('server start');

// url的组成：协议部分、域名部分、端口部分、虚拟目录部分、文件名部分、锚部分、查询字符串部分
// example：http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name