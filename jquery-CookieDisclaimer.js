/*!
 * jQuery CookieDisclaimer Info Plugin v1.0.0
 * https://github.com/sedael/CookieDisclaimer
 *
 * Copyright 2013 Chris Polewiak
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	$.sm_CookieDisclaimer = function (data) {
		cookie_var = data.cookie_var;
		cs_cookie_title = data.title;
		cs_cookie_text = data.text;
		cs_cookie_link = data.link;

		var DisableCookieInfo = $.cookie(cookie_var);

		if( ! DisableCookieInfo ) {
			$('head').append('<link>');
			var css = $('head').children(':last');
			   css.attr({
			     rel:  'stylesheet',
			     type: 'text/css',
			     href: 'cs-cookie.css'
			});
			var cs_cookie_insert = '<div id="cs-cookie" style="display:none;"><div class="cs-cookie-overlay"><div class="cs-cookie-body"><div class="cs-cookie-title">'+cs_cookie_title+'</div><div class="cs-cookie-text">'+cs_cookie_text+'<br><a href="#" class="cs-cookie-link">'+cs_cookie_link+'</a></div></div></div><div class="cs-cookie-bg"></div></div>';
			$('body').append( cs_cookie_insert );
			$('#cs-cookie').show('slow');
			$('#cs-cookie .cs_cookie_link').unbind();
			$('#cs-cookie .cs-cookie-link').bind('click',function(e){
				e.preventDefault();
				$('#cs-cookie').hide('slow');
				$.cookie(cookie_var, 1, { expires : 365 });
			});
		}
	};

}));
