var fs = require('fs');
var server = require('http').createServer(function(req, response){
  fs.readFile('template.html', function(err, data){
    response.writeHead(200, {'Content-Type':'text/html'});  
    response.write(data);  
    response.end();
  });
});
server.listen(8080);
var everyone = require("../lib/nowServerLib.js").initialize(server);



everyone.now.distributeMessage = function(message){everyone.now.receiveMessage(message);};
