var path = require('path');
var socketio = require('socket.io');

var http = require('http');
var server = http.createServer();

var express = require('express');
var app = express();

server.on('request', app);
var path = require('path');

var io = socketio(server);

alreadyDrawn = [];
app.get('/grace-hopper', function (req,res,next){
});
var nsp = io.of('/grace-hopper');

io.on('connection', function (socket) {
    console.log('A new client has connected!');
    console.log(socket.id);
    socket.emit('alreadyDrawn',alreadyDrawn);
    socket.on('draw',function(start, end, strokeColor){
      alreadyDrawn.push({start:start,end:end,strokeColor:strokeColor});
      console.log(strokeColor);
      socket.broadcast.emit('draw',start, end, strokeColor);
    });
    socket.on('disconnect', function(){
      console.log(':(');
    })
});


server.listen(1337, function () {
    console.log('The server is listening on port 1337!');
});

app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
