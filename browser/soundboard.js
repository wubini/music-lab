window.soundboard = window.EventEmitter()

(function () {
	var soundArray = [];

	var keyButtons = querySelector('#key-buttons');

	// keyButtons.addEventListener('keypress', function (button))

	// keyButtons.on('click', )
	// document.addEventListener('keydown')
	// keyButtons.on('keydown', function())

	soundboard.keypress = function(keyId, delay) {

		var sound = {
						keyId: keyId,
						delay: delay
					};
		soundArray.push(sound);
		soundboard.playSound(sound);
	};

	soundboard.playOne = function(soundObj, shouldBroadcast)
	{
	  var keyId = soundObj.keyId;
	  //map key to sound file
	  var audio = getAudioForKey(keyId);
	  audio.play();

	  if (shouldBroadcast) {
	    soundboard.emit('play', soundObj);
	  }
	}

	soundboard.saveToSong = function(soundObj)
	{
	  soundArray.push(soundObj);
	}

	soundboard.playAll = function(soundArr)
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

})
