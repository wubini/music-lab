window.soundboard = new window.EventEmitter();
console.log("make new soundboard", window.soundboard);

(function () {
	var soundArray = [];
	var octave = 4;
	var instrument;
	var filetype = '.wav';

	var keyButtons = document.querySelector('#key-buttons');

	$(document).ready(function() {
		instrument = $('select[name=instrument]').val();

		$(function() {
			$('select[name=instrument').change(function() {
				instrument = $(this).val();
			})
		})
	});



	soundboard.makeSoundObj = function(e) {
		//console.log('key was pressed!')
		var code = e.keyCode;
		e.preventDefault();
		if (code==38 && octave<5) octave++;
		else if (code==40 && octave>3) octave--;
		else if (code==37) {
			instrument = 'piano';
			filetype = '.wav';
		}
		else if (code==39) {
			instrument = 'guitar';
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
		if (shouldBroadcast) soundboard.emit('play', soundObj);

		var keyValue = keyvalues[String(soundObj.keyId)];
		if (!keyValue) return;

		var octaveValue = soundObj.octave;
		if (lowerOctave.indexOf(keyValue)!=-1) {
			keyValue = middleOctave[lowerOctave.indexOf(keyValue)];
			octaveValue--;
		}
		else if (higherOctave.indexOf(keyValue)!=-1) {
			keyValue = middleOctave[higherOctave.indexOf(keyValue)];
			octaveValue++;
		}

		// // pull pre-created note from cache
		// var filename = octaveValue+'_'+keyValue;
		// instrumentCache[soundObj.instrument][filename].play();

		// pull from server and create new note everytime
		var notePath = '/sounds/'+soundObj.instrument+'/'+octaveValue+'_'+keyValue+filetype;				
		var audio = new Audio(notePath);
		audio.play();


		showKeyPressed();

		// function showKeyReleased() {
		//  var id = soundObj.keyId;
		//  $('#' + id).removeClass('active');
		// }

		function showKeyPressed() {
			var $id = $('#' + soundObj.keyId);
			$id.addClass('active');
			if ($id.hasClass('white-key')) $id.closest('li').find('.black-key').addClass('sibling');
		}

	}

})();
