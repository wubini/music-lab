var instrumentCache = {};


(function() {

	var instruments = ['piano'];

	var octaves = [3,4,5];
	var keyValues = ['a','w','s','e','d','f','t','g','y','h','u','j'];

	function cacheNotes() {
		instruments.forEach(function(instrumentName) {
			instrumentCache[instrumentName] = {};
			var instrument = instrumentCache[instrumentName];
			octaves.forEach(function(octave) {
				keyValues.forEach(function(keyvalue) {
					var note = getNote(instrumentName, octave, keyvalue);
					var filename = octave + '_' + keyvalue;
					instrument[filename] = note;
				});
			});
		});
	}

	function getNote (instrumentName, octave, keyvalue) {
		return new Audio('/sounds/'+instrumentName+'/'+octave+'_'+keyvalue+'.wav');
	}

	instruments.forEach(cacheNotes);

})();
