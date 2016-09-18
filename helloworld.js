// helloworld.js
var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'content-Type':'text/plain'});
	res.end('helloworld');
}).listen(3000);
console.log('服务器已起动');