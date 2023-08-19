var yeehaw = ['enabled', 'enabledt', 'enabledh', 'closepages', 'askfirst', 'anywidget']
var yeecaw = [true,true,true,true,false,false]
chrome.runtime.onInstalled.addListener(function(c){
  yeehaw.forEach(function (v,i) {
    chrome.storage.sync.get([v], function(res){
      console.log(v, i)
      if(res[v] == null){
        console.log("resv")
        chrome.storage.sync.set({[res[v]]: yeecaw[i]},function(){return;});
        chrome.storage.sync.get([v], function(res2){
          console.log(res2[v]);
        });
      }
    });
  });
})

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
  chrome.storage.sync.get(['anywidget'], function(resx){
    if(e.url.startsWith('https://store.steampowered.com') && (!(e.url.startsWith('https://store.steampowered.com/widget/')) || resx.anywidget)){
      chrome.storage.sync.get(['enabledt'], function(res){
        if(res.enabledt){
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
  });
  if(e.url.startsWith('https://help.steampowered.com')){
    chrome.storage.sync.get(['enabledh'], function(res){
      if(res.enabledh){
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
}
