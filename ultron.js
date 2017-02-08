var ULTRON = ULTRON || new (function(_) {

	_.injectScript = function(url) {
		try {
			var q = url;
			var m = document;
			var n = m.createElement("script");
			n.src = q;
			m.getElementsByTagName("head")[0].appendChild(n);
		}
		catch (error) {
		}
	};
	
	this.init = function() {
	};

})({});