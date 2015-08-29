window.soundboard = new window.EventEmitter();
console.log("make new soundboard", window.soundboard);

(function () {
	var soundArray = [];
	var octave = 4;

	var keyButtons = document.querySelector('#key-buttons');

	// keyButtons.addEventListener('keypress', function (button))

	// keyButtons.on('click', )
	// document.addEventListener('keydown')
	// keyButtons.on('keydown', function())

	soundboard.makeSoundObj = function(e) {
		console.log('key was pressed!')
		var code = e.keyCode;
		if (code==38 && octave<5) octave++;
		else if (code==40 && octave>3) octave--;

		else {

			// var audio = new Audio(notePath);
			// audio.play();
			var sound = {
							keyId: e.keyCode
							//delay: delay
						};
			//soundArray.push(sound);
			soundboard.playOne(sound, true);
			return sound;
		}
	};

	soundboard.playOne = function(soundObj, shouldBroadcast)
	{
		console.log("playOne called on",soundObj);
		if (shouldBroadcast) {
			console.log("soundboard emits play event");
			soundboard.emit('play', soundObj);
		}

		var notePath = '/sounds/piano/'+soundObj.keyId+'_'+octave+'.wav';		var audio = new Audio(notePath);
		var audio = new Audio(notePath);
		audio.play();
		showKeyPressed();

		function showKeyReleased() {
		 var id = soundObj.keyId;
		 $('#' + id).removeClass('active');
		}

		function showKeyPressed() {
		 var id = soundObj.keyId;
		 $('#' + id).addClass('active');
		}

	}

})();
