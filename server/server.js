var http = require('http'); 
var url=require('url');
net = require('net');
function start(route, handle) {
    function onRequest(req,res){
        var pathname=url.parse(req.url).pathname;
        console.log('requested.. '+ pathname + ' recevied');

        route(handle,pathname,res); //injected function call
        /*
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello node.js!!');
        res.end();
        */

    }
    //var server = http.createServer(onRequest).listen(8080); 
    var server = http.createServer(onRequest); 
    const io=require('socket.io')(server);

    server.listen(8080,function() {

    });

    console.log('http://localhost:8080 Http is running...');


    io.on('connection',function(socket){
        console.log('io.socket connected:'+socket.id); //show random value

    });

    var tcp=net.createServer(function(client){
        client.on('data',function(data){
            console.log(data);
        });
    });
    tcp.listen(1600,function(){
        console.log('http://localhost:8080 Tcp listening: ' + JSON.stringify(tcp.address()));

    });

}

exports.start=start;