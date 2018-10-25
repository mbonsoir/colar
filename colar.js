;(function(){
  
  'use strict';
  function Colar(){

  }

  Colar.prototype.checkType = function(object,type) {
    let types = Object.prototype.toString.call(object).toLowerCase()
    let t = type.toLowerCase()
    return types.includes(t)
  }

	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return new Colar;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = new Colar;
		module.exports.Colar = new Colar;
	} else {
		window.Colar = new Colar;
  }
}());