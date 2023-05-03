chrome.webNavigation.onCommitted.addListener(function(e){redirect(e)}, {url: [{hostSuffix: 'steamcommunity.com'}]});
chrome.webNavigation.onCommitted.addListener(function(e){redirect(e)}, {url: [{hostSuffix: 'store.steampowered.com'}]});
chrome.webNavigation.onCommitted.addListener(function(e){redirect(e)}, {url: [{hostSuffix: 'help.steampowered.com'}]});

function doDat(e){
  setTimeout(()=>{
    chrome.storage.sync.get(['closepages'], function(res){
      if(res.closepages){
        chrome.tabs.remove(e.tabId);
      };
    });
  }, 1000)
}
function redirect(e){
  if(e.url.startsWith('https://steamcommunity.com')){
    chrome.storage.sync.get(['enabled'], function(res){
      if(res.enabled){
        chrome.storage.sync.get(['askfirst'], function(res2){
          if(!res2.askfirst){
            chrome.tabs.update({url:"steam://openurl/"+e.url}).then(()=>{
              doDat(e);
            });
          }else{
            chrome.tabs.create({url:"steam://openurl/"+e.url}).then(()=>{
              doDat(e);
            });
          }
        });
      }
    });
  }
  if(e.url.startsWith('https://store.steampowered.com') && !(e.url.startsWith('https://store.steampowered.com/widget/'))){
    chrome.storage.sync.get(['enabledt'], function(res){
      if(res.enabledt){
        chrome.tabs.update({url:"steam://openurl/"+e.url}).then(()=>{
          setTimeout(()=>{
            chrome.storage.sync.get(['closepages'], function(res2){
              if(res2.closepages){
                chrome.tabs.remove(e.tabId);
              };
            });
          }, 1000)
        });
      }
    });
  }  
  if(e.url.startsWith('https://help.steampowered.com')){
    chrome.storage.sync.get(['enabledh'], function(res){
      if(res.enabledh){
        chrome.tabs.update({url:"steam://openurl/"+e.url}).then(()=>{
          setTimeout(()=>{
            chrome.storage.sync.get(['closepages'], function(res2){
              if(res2.closepages){
                chrome.tabs.remove(e.tabId);
              };
            });
          }, 1000)
        });
      }
    });
  }  
}
