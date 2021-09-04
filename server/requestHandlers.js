var fs=require('fs');
var path=require('path');

function view(res) {
    console.log(__dirname);
    //fs.readFile(__dirname + '/server/index.html',function (err, data) {
    const filePath=path.join(__dirname,"../public/index.html");
    fs.readFile(filePath,function (err, data) {
            if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        //res.writeHead(200);
        res.writeHead(200,{'Content-Type':'text/html'});

        res.end(data);
    });
    /*
    console.log('request handler -->view');
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Hello view');
    res.end();
    */
}
function create(res) {
    console.log('request handler -->create');
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Hello Create');
    res.end();

}
var handle={};

handle['/']=view;
handle['/view']=view;
handle['/create']=create; //처리함수가 value

exports.handle=handle;