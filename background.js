chrome.webNavigation.onCommitted.addListener(function(e){redirect(e)}, {url: [{hostSuffix: 'steamcommunity.com'}]});
chrome.webNavigation.onCommitted.addListener(function(e){redirect(e)}, {url: [{hostSuffix: 'store.steampowered.com'}]});

function redirect(e){
  chrome.storage.sync.get(['enabled'], function(res){
    if(res.enabled){
      chrome.tabs.update({url:"steam://openurl/"+e.url});
    }
  });
}
