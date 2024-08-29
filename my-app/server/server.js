var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname + '/www'));

let server = http.listen(4200,function (){
    let host = server.address().address;
    let port = server.address().port;
    console.log("server")
    console.log("server listening on: "+ host + "port: " + port);
});