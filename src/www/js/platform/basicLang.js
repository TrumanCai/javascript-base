!function (definition) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery', 'underscore'], definition);
	} else {
		window['basicLang'] = definition();
	}
}(function($, _) {
	'use strict'
	function basicLang() {
		console.log("init basicLang");
	}
	basicLang.version = "1.0.0";
	basicLang.print = function() {
		console.log($.parseJSON('["1", "2"]'));
	}
	return basicLang;
})