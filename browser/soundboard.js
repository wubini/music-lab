window.soundboard = new window.EventEmitter();
console.log("make new soundboard", window.soundboard);

(function () {
	var soundArray = [];
	var octave = 4;
	var instrument = 'piano';
	var filetype = '.wav';

	var keyButtons = document.querySelector('#key-buttons');

	// keyButtons.addEventListener('keypress', function (button))

	// keyButtons.on('click', )
	// document.addEventListener('keydown')
	// keyButtons.on('keydown', function())

	soundboard.makeSoundObj = function(e) {
		console.log('key was pressed!')
		var code = e.keyCode;
		e.preventDefault();
		if (code==38 && octave<5) octave++;
		else if (code==40 && octave>3) octave--;
		else if (code==37) {
			instrument = 'piano';
			filetype = '.wav';
		}
		else if (code==39) {
			instrument = 'drums';
			filetype = '.wav';
			octave = 4;
		}

		else {

			// var audio = new Audio(notePath);
			// audio.play();
			var sound = {
							keyId: e.keyCode,
							octave: octave,
							instrument: instrument
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



		var notePath = '/sounds/'+soundObj.instrument+'/'+soundObj.keyId+'_'+soundObj.octave+filetype;		
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
