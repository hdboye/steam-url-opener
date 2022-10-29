chrome.webNavigation.onCommitted.addListener(function(e) {
  chrome.tabs.update({url:"steam://openurl/"+e.url});
}, {url: [{hostSuffix: 'steamcommunity.com'}]});