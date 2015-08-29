document.addEventListener('keydown', keyPress, false);
document.addEventListener('keyup', showKeyReleased, false);
    var octave = 4;
function keyPress(e) {
   var code = e.keyCode;
   if (code==38 && octave<5) octave++;
   else if (code==40 && octave>3) octave--;
  // if (octave>5){octave=5;}
  //  if (octave<3){octave=3;}

   else {
     var notePath = '/sounds/piano/'+e.keyCode+'_'+octave+'.wav';
     var audio = new Audio(notePath);
     audio.play();
   }
   if (e.keyCode===49){notePath = '/sounds/horse.ogg'}
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
