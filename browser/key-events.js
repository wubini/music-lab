var keycodes = {
	'0': '48',
	'1': '49',
	'2': '50',
	'3': '51',
	'4': '52',
	'5': '53',
	'6': '54',
	'7': '55',
	'8': '56',
	'9': '57',
	'a': '65',
	'b': '66',
	'c': '67',
	'd': '68',
	'e': '69',
	'f': '70',
	'g': '71',
	'h': '72',
	'i': '73',
	'j': '74',
	'k': '75',
	'l': '76',
	'm': '77',
	'n': '78',
	'o': '79',
	'p': '80',
	'q': '81',
	'r': '82',
	's': '83',
	't': '84',
	'u': '85',
	'v': '86',
	'w': '87',
	'x': '88',
	'y': '89',
	'z': '90',
	'tab': '9',
	'enter': '13',
	'dash': '189',
	'equal': '187',
	'comma': '188',
	'period': '190',
	'semicolon': '186',
	'forwardslash': '191',
	'singlequote': '222',
	'openbracket': '219',
	'closebracket': '221',
	'backspace': '8',
	'enter': '13',
	'backslash': '220',
	'shift': '16',
	'capslock': '20'
}

var keyvalues = {};
for (var code in keycodes) {
	keyvalues[keycodes[code]] = code;
}

var middleOctave = ['a','w','s','e','d','f','t','g','y','h','u','j'];
var higherOctave = ['k','o','l','p','semicolon','singlequote','closebracket','enter','backslash'];
var lowerOctave = ['','','','','','','','','','','tab','q'];
 


var KEYCODE_0 = '48',
	KEYCODE_1 = '49',
	KEYCODE_2 = '50',
	KEYCODE_3 = '51',
	KEYCODE_4 = '52',
	KEYCODE_5 = '53',
	KEYCODE_6 = '54',
	KEYCODE_7 = '55',
	KEYCODE_8 = '56',
	KEYCODE_9 = '57',
	KEYCODE_a = '65',
	KEYCODE_b = '66',
	KEYCODE_c = '67',
	KEYCODE_d = '68',
	KEYCODE_e = '69',
	KEYCODE_f = '70',
	KEYCODE_g = '71',
	KEYCODE_h = '72',
	KEYCODE_i = '73',
	KEYCODE_j = '74',
	KEYCODE_k = '75',
	KEYCODE_l = '76',
	KEYCODE_m = '77',
	KEYCODE_n = '78',
	KEYCODE_o = '79',
	KEYCODE_p = '80',
	KEYCODE_q = '81',
	KEYCODE_r = '82',
	KEYCODE_s = '83',
	KEYCODE_t = '84',
	KEYCODE_u = '85',
	KEYCODE_v = '86',
	KEYCODE_w = '87',
	KEYCODE_x = '88',
	KEYCODE_y = '89',
	KEYCODE_z = '90',
	KEYCODE_tab = '9',
	KEYCODE_enter = '13',
	KEYCODE_dash = '189',
	KEYCODE_equal = '187',
	KEYCODE_comma = '188',
	KEYCODE_period = '190',
	KEYCODE_semicolon = '186',
	KEYCODE_forwardslash = '191',
	KEYCODE_singlequote = '222',
	KEYCODE_openbracket = '219',
	KEYCODE_closebracket = '221',
	KEYCODE_backspace = '8',
	KEYCODE_enter = '13',
	KEYCODE_backslash = '220',
	KEYCODE_shift = '16',
	KEYCODE_capslock = '20';

document.addEventListener('keydown', function(e) {
  soundboard.makeSoundObj(e);
}, false);
document.addEventListener('keyup', showKeyReleased, false);


function showKeyReleased(e) {
	var $id = $('#' + e.keyCode);
 	$id.removeClass('active');
 	if ($id.hasClass('white-key')) $id.closest('li').find('.black-key').removeClass('sibling');
}

function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            event.stopPropagation();
        }); 
    }
}

// function showKeyPressed(e) {
// 	console.log('pressed');
//  var id = e.keyCode;
//  $('#' + id).addClass('active');
// }
