!function(definition) {
	if (typeof definition === 'function' && define.amd) {
		define(definition);
	} else {
		window['domRender'] = defintion();
	}
}(function() {
	'use strict'
	var _me = this;
	var domRender = function(id) {
		var newElem = document.createElement("div");
		document.body.insertBefore
	}
	domRender.render = function(content) {
		_me
	}
})