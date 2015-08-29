var socket = io(window.location.origin);
console.log("io", io);
socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!');
});
soundboard.on('play',function(soundObj){
  console.log("socket tries to emit iplay");
  socket.emit('iPlay',soundObj);
});

socket.on('iPlay',function(soundObj){
  window.soundboard.playOne(soundObj, false);
});



// socket.on('alreadyDrawn',function(alreadyDrawn){
//   alreadyDrawn.forEach(function(data){
//     window.whiteboard.draw(data.start,data.end,data.strokeColor)
//   })
// });
