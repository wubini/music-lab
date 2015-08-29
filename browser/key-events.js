document.addEventListener('keydown', keyPress, false);
document.addEventListener('keyup', showKeyPress, false);

function keyPress(e) {
  var notePath = '/sounds/piano/'+e.keyCode+'.wav';
  var audio = new Audio(notePath);
  audio.play();
}

function showKeyPress(e) {

}
