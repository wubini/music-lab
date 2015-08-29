
var socket = io(window.location.origin);
socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!');
});
whiteboard.on('draw',function(start, end, strokeColor){
  socket.emit('draw',start, end, strokeColor);
})
socket.on('draw',function(start, end, strokeColor){
  window.whiteboard.draw(start,end,strokeColor)
})

socket.on('alreadyDrawn',function(alreadyDrawn){
  alreadyDrawn.forEach(function(data){
    window.whiteboard.draw(data.start,data.end,data.strokeColor)
  })
})
