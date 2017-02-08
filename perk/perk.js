var ULTRON = ULTRON || {};

ULTRON.PERK = ULTRON.PERK || new (function(_) {

	_.disablePopup = function() {
		try {
			console.log("Disabled popup!");
			window.alert = function() {};
			window.open = function() {};
		}
		catch (exception) {
		}
	};
	
	_.autoWatchTV = function() {
		try {
			if (location && location.host && location.host === "perk.tv") {
				console.log("Auto TV!");
				setInterval(function() {
					try {
						if (location.pathname && location.pathname === "/home") {
							var $playBtn = $(".play-btn");
							if ($playBtn.length > 0) {
								var rndIndex = Math.round((Math.random() * $playBtn.length));
								$playBtn[rndIndex].click();
							}
						}
					}
					catch (exception) {
					}
				}, 10000);
			}
		}
		catch (exception) {
		}
	};

	this.init = function() {
		_.disablePopup();
		_.autoWatchTV();
	};
	
})({});

ULTRON.PERK.init();
