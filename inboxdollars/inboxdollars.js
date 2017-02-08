var fnDisablePopup = function() {
  try {
    console.log("Disabled popup!");
    window.alert = function() {};
    window.open = function() {};
  }
  catch (exception) {
  }
};

var fnAutoTV = function() {
  try {
    if (location && location.host && location.host === "www.inboxdollars.com" && location.pathname && location.pathname === "/tv") {
      console.log("Auto TV!");
      setInterval(function() {
        try {
          var $tvContinueBtn = $("#tvStillTherePopupContinue");
          if ($tvContinueBtn.length > 0) {
            $tvContinueBtn.click();
          }
          var player = window.jwplayer ? window.jwplayer("ourVideoPlayer") : null;
          if (player) {
            var state = player.getState();
            if (state && state !== "playing") {
              player.play();
            }
          }
        }
        catch (exception) {
        }
      }, 10000);
      setTimeout(function() {
        try {
          location.reload();
        }
        catch (exception) {
        } 
      }, 600000);
    }
  }
  catch (exception) {
  }
};

var fnAutoSpin = function() {
  try {
    if (location && location.host && location.host === "www.inboxdollars.com" && location.pathname && location.pathname === "/pages/survey_tm") {
      console.log("Auto spin!");
      setInterval(function() {
        try {
          $("#spinbutt")[0].click();
        }
        catch (exception) {
        }
      }, 1000);
    }
  }
  catch (exception) {
  }
};

var fnAutoSendSweeps = function() {
  try {
    if (location && location.host && location.host === "play.inboxdollars.com" && location.pathname && location.pathname === "/") {
      console.log("Auto spend sweeps!");
      var spends = [
        {"cash":"$100",     "value":50,  "spend":50000},
        {"cash":"$50",      "value":30,  "spend":0},
        {"giftcard":"$50",  "value":25,  "spend":0},
        {"cash":"$25",      "value":20,  "spend":0},
        {"giftcard":"$25",  "value":15,  "spend":0},
        {"cash":"$5",       "value":10,  "spend":0},
        {"giftcard":"$10",  "value":10,  "spend":0},
        {"cash":"$2",       "value":9,   "spend":0},
        {"cash":"$1.5",     "value":8,   "spend":0},
        {"cash":"$1",       "value":5,   "spend":0}
      ];
      var $values = $(".points_value");
      for (var i=0; i<spends.length; i++) {
        for (var j=0; j<$values.length; j++) {
          if (spends[i].value.toString() === $values[j].innerText) {
            spends[i].id = $($values[j].parentElement.parentElement.parentElement).attr("data-id")
            break;
          }
        }
      }
      setInterval(function() {
        try {
          // $5 entries
          for (var i=0; i<spends.length; i++) {
            if (spends[i].spend > 0) {
              $("*[class*='buy-confirm'][data-item-id='" + spends[i].id + "']").click();
              spends[i].spend-=spends[i].value;
            }
          }
        }
        catch (exception) {
        }
      }, 100);
    }
  }
  catch (exception) {
  }
};

var fnAutoSearch = function() {
  try {
    if (location && location.host && location.host === "www.inboxdollars.com" && location.pathname && (location.pathname === "/search/infospace" || location.pathname === "/search")) {
      console.log("Auto search!");
      setTimeout(function() {
        try {
          var paragraph = ""
          if (paragraph) {
            var words = paragraph.split(" ");
            if (words) {
              var index = Math.round((Math.random() * words.length)); 
              var word = words[index];
              if (word) {
                $("#SearchKeywords").val(word);
                $("#submitButt").click();
                $("#SearchKeywords2").val(word);
                $("#submit").click();
              }
            }
          }
        }
        catch (exception) {
        }
      }, 5000);
    }
  }
  catch (exception) {
  }
};

fnDisablePopup();
fnAutoTV();
fnAutoSpin();
fnAutoSendSweeps();
fnAutoSearch();

