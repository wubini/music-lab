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
		playSound(sound);
	};




})
