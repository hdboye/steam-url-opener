chrome.webNavigation.onCommitted.addListener(function(e) {
  chrome.storage.sync.get(['enabled'], function(res){
    if(res.enabled){
      chrome.tabs.update({url:"steam://openurl/"+e.url});
    }
  });
}, {url: [{hostSuffix: ['steamcommunity.com','store.steampowered.com']}]});