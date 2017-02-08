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
    if (location && location.host && location.host === "www.inboxdollars.com" && location.pathname && location.pathname.indexOf("/tv") >= 0) {
      console.log("Auto TV!");
      if (location.pathname === "/tv") {
        var $channels = $("#channelList a");
        if ($channels && $channels.length > 0) {
          var rndChannelIndex = Math.round((Math.random() * ($channels.length + 1)));
          if (0 <= rndChannelIndex && rndChannelIndex < $channels.length) {
            $channels[rndChannelIndex].click();
            return;
          }
        }
      }
      var time = 0;
      var player = null;
      setInterval(function() {
        try {
          time+= 10000;
          if (time >= 300000) {
            $("#tv_li_link_div").click();
            return;
          }
          var $overlayNotAvailable = $("#overlayNotAvailable:visible");
          if ($overlayNotAvailable.length > 0) {
            return;
          }
          var $tvContinueBtn = $("#tvStillTherePopupContinue");
          if ($tvContinueBtn.length > 0) {
            $tvContinueBtn.click();
            return;
          }
          if (time === 10000 || (time % 60000 === 0 && Math.round((Math.random())) === 0)) {
            if (!player) {
              player = window.jwplayer ? window.jwplayer("ourVideoPlayer") : null;
            }
            if (player) {
              var state = player.getState();
              if (state && state !== "playing") {
                player.play();
              }
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

/*
var fnAutoSpendSweeps = function() {
  try {
    if (location && location.host && location.host === "www.inboxdollars.com" && location.pathname && location.pathname === "/rewardsCenter") {
      console.log("Auto spend sweeps!");
      var spends = [
        {"cash":"$100",     "value":50,  "spend":50000},
        {"cash":"$50",      "value":30,  "spend":0},
        {"giftcard":"$50",  "value":25,  "spend":0},
        {"cash":"$25",      "value":20,  "spend":0},
        {"giftcard":"$25",  "value":15,  "spend":0},
        {"cash":"$5",       "value":10,  "spend":1000},
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
    }
  }
  catch (exception) {
  }
};
*/

var fnAdjustEntries = function() {
  try {
    if (location && location.host && location.host === "www.inboxdollars.com" && location.pathname && location.pathname === "/rewardsCenter") {
      console.log("Adjust entries!");
      var $entries = $(".prizeQtySelect");
      $entries.html("");
      var values = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000];  
      for (var i=0; i<=values.length; i++) {
        var $value = $("<option value='" + values[i].toString() +"'>" + values[i].toString() + "</option>"); 
        $entries.append($value); 
      }
    }
  }
  catch (exception) {
  }
};

var fnAutoSearch = function() {
  try {
    if (location && location.host && location.host === "www.inboxdollars.com" && location.pathname && location.pathname.indexOf("/search") >= 0) {
      console.log("Auto search!");
      var paragraph = "";
      var time = 0;
      setInterval(function() {
        try {
          time+= 10000;
          var $captchar = $("#captcha_contact:visible");
          if ($captchar.length > 0) {
            if (time >= 300000) {
              location.reload();
            }
            return;
          }
          var path = "";
          var $scripts = $("script[src*='inboxdollars.js']");
          if ($scripts.length > 0) {
            path = $scripts[0].src.split("/").slice(0, -1).join("/") + "/";
          }
          $.ajax({ 	
            url: path + "paragraph.txt", 	
            dataType: "text", 	
            async: false, 	
            success: function(text) { 
              paragraph = text;
            }, 	
            error: function() {
              paragraph = "";
            } 
          });
          if (paragraph) {
            var words = paragraph.split(" ");
            if (words) {
              var searchText = "";
              var searchTextLength = Math.round((Math.random() * 10));
              if (searchTextLength <= 1) {
                searchTextLength = 2;
              }
              for (var i=0; i<searchTextLength; i++) {
                var index = Math.round((Math.random() * words.length)); 
                var word = words[index];
                if (word) {
                  searchText += word + " ";
                }
              }
              if (searchText) {
                $("#SearchKeywords").val(searchText);
                $("#submitButt").click();
                $("#SearchKeywords2").val(searchText);
                $("#submit").click();
              }
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

fnDisablePopup();
fnAutoTV();
fnAutoSpin();
fnAdjustEntries();
fnAutoSearch();

