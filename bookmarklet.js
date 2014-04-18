/*global jQuery */
/*!   
 * Thinkful-Toggle-Bookmarklet 0.0.0
 *
 * Copyright 2014, AJ Webb http://ajwebb.me
 * Released under the unlicense
 * http://unlicense.org/
 *
 * Thinkful uses jQuery so this script takes advantage of that...
 * obviously its not hard to do this without...
 * hey I did this for free!
 */

(function ($) {
	$('<div />', {
		'class': 'button-container',
		'css': {
			float: 'none'
		}
	}).append($('<button />', {
		text: 'Toggle Answer',
		click: function (e) {
			e.preventDefault();
			var pre = $(this).parent().next('pre'),
				visible = pre.is(':visible');
			if (visible) pre.hide();
			else pre.show();
		}
	})).insertBefore('pre');
	$('pre').hide();
})(jQuery);