document.addEventListener('keydown', keyPress, false);
document.addEventListener('keyup', showKeyReleased, false);

function keyPress(e) {
  var notePath = '/sounds/piano/'+e.keyCode+'.wav';
  var audio = new Audio(notePath);
  audio.play();
  showKeyPressed(e);
}

function showKeyReleased(e) {
  var id = e.keyCode;
  $('#' + id).removeClass('active');
}

function showKeyPressed(e) {
  var id = e.keyCode;
  $('#' + id).addClass('active');
}
