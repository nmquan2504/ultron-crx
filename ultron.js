var ULTRON = ULTRON || new (function(_) {
	
	_.CurrentPath = "";

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
	
	_.delayCall = function(func, time) {
		var t = setInterval(function(){
			func();
			clearInterval(t);
		}, time);
		return 0;
	}
	
	_.getCurrentPath = function() {
		if (!_.CurrentPath) {
			var scripts = document.getElementsByTagName("script");
			for (var i = 0; i < scripts.length; i++) {
				if (scripts[i].src && scripts[i].src.indexOf("ultron.js") > 0) {
					_.CurrentPath = scripts[i].src.split("/").slice(0, -1).join("/") + "/";
					break;
				}
			}
		}
		return _.CurrentPath;
	}
	
	this.init = function() {
		try {
			_.getCurrentPath();
			if (!window.$) {
				_.injectScript(_.CurrentPath + "jquery/jquery-3.1.1.min.js");
			}
			if (window.location) {
				if (window.location.host && window.location.host.indexOf("inboxdollars.com") >= 0) {
					_.injectScript(_.CurrentPath + "inboxdollars/inboxdollars.js");
				}
			}
		}
		catch (error) {
		}	
	};

})({});

ULTRON.init();
