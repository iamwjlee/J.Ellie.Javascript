function route(handle,pathname,res) {
    //console.log('route for'+pathname);
    if(typeof handle[pathname] === 'function') {
        handle[pathname](res);
    }
    else {
        console.log('-->no handle route for'+pathname);

        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write('404 Not found');
        res.end();

    }
}
exports.route = route;