chrome.webNavigation.onCommitted.addListener(function(e){redirect(e)}, {url: [{hostSuffix: 'steamcommunity.com'}]});
chrome.webNavigation.onCommitted.addListener(function(e){redirect(e)}, {url: [{hostSuffix: 'store.steampowered.com'}]});

function redirect(e){
  if(e.url.startsWith('https://steamcommunity.com')){
    chrome.storage.sync.get(['enabled'], function(res){
      if(res.enabled){
        chrome.tabs.update({url:"steam://openurl/"+e.url});
      }
    });
  }
  if(e.url.startsWith('https://store.steampowered.com')){
    chrome.storage.sync.get(['enabledt'], function(res){
      if(res.enabledt){
        chrome.tabs.update({url:"steam://openurl/"+e.url});
      }
    });
  }  
}
