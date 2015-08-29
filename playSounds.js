
var soundArray = []; //array of sound objects
function playOne(soundObj, shouldBroadcast)
{
  var keyId = soundObj.keyId;
  //map key to sound file
  var audio = getAudioForKey(keyId);
  audio.play();

  if (shouldBroadcast) {
    soundboard.emit('play', soundObj);
  }
}

function saveToSong(soundObj)
{
  soundArray.push(soundObj);
}

function playAll(soundArr)
{
  soundArr.forEach(function(sound)
  {
    setTimeout(function()
    {
      playOne(sound);
    },delay);
  }
}

function getAudioForKey(keyId)
{
  var keyToAudioMap = [];
  return keyToAudioMap[keyId];
}
