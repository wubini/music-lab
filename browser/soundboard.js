window.soundboard = window.EventEmitter()

(function () {
	var soundArray = [];

	var keyButtons = querySelector('#key-buttons');

	// keyButtons.addEventListener('keypress', function (button))

	// keyButtons.on('click', )
	// document.addEventListener('keydown')
	// keyButtons.on('keydown', function())

	soundboard.makeSoundObj = function(event) {

		var sound = {
						keyId: event.keyCode
						//delay: delay
					};
		//soundArray.push(sound);
		soundboard.playOne(sound, true);
		return sound;
	};

	soundboard.playOne = function(soundObj, shouldBroadcast)
	{
	  // var keyId = soundObj.keyId;
	  // //map key to sound file
	  // var audio = getAudioForKey(keyId);
	  // audio.play();
		console.log("playOne called on",soundObj);
		var notePath = './sounds/piano/'+soundObj.keyId+'.wav';
		var audio = new Audio(notePath);
		audio.play();

	  if (shouldBroadcast) {
			console.log("soundboard emits play event");
	    soundboard.emit('play', soundObj);
	  }
	}
	//
	// soundboard.playAll = function(soundArr)
	// {
	//   soundArr.forEach(function(sound)
	//   {
	//     setTimeout(function()
	//     {
	//       playOne(sound);
	//     },delay);
	//   }
	// }
	//
	// function getAudioForKey(keyId)
	// {
	//   var keyToAudioMap = [];
	//   return keyToAudioMap[keyId];
	// }

})();
