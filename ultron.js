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
		var $scripts = $("script[src*='ultron.js']");
		if ($scripts.length > 0) {
			_.CurrentPath = $scripts[0].src.split("/").slice(0, -1).join("/") + "/";
		}
		return _.CurrentPath;
	}
	
	this.init = function() {
		try {
			if (!$) {
				return _.delayCall(ULTRON.init);
			}
			
			if (_.getCurrentPath()) {
				if (location) {
					if (location.host && location.host.indexOf("inboxdollars.com") >= 0) {
						_.injectScript(_.CurrentPath + "inboxdollars/inboxdollars.js");
					}
				}
			}
		}
		catch (error) {
		}	
	};

})({});

ULTRON.init();
