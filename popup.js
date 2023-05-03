window.onload = init;
chrome.windows.getLastFocused(
    {populate: false}, 
    function(currentWindow) {
        chrome.windows.update(currentWindow.id, { width: 500 });
    }
);
function init(){
    chrome.storage.sync.get(['enabled'],function(res){
        document.getElementById('enabled').checked = res.enabled;
    });
    document.getElementById('enabled').addEventListener('change', (event) => {
        console.log("yes");
        chrome.storage.sync.set({enabled: event.currentTarget.checked},function(){return;});
    });

    chrome.storage.sync.get(['enabledt'],function(res){
        document.getElementById('enabled2').checked = res.enabledt;
    });
    document.getElementById('enabled2').addEventListener('change', (event) => {
        chrome.storage.sync.set({enabledt: event.currentTarget.checked},function(){return;});
    });

    chrome.storage.sync.get(['enabledh'],function(res){
        document.getElementById('enabled3').checked = res.enabledh;
    });
    document.getElementById('enabled3').addEventListener('change', (event) => {
        chrome.storage.sync.set({enabledh: event.currentTarget.checked},function(){return;});
    });

    chrome.storage.sync.get(['closepages'],function(res){
        document.getElementById('closepage').checked = res.closepages;
    });
    document.getElementById('closepage').addEventListener('change', (event) => {
        chrome.storage.sync.set({closepages: event.currentTarget.checked},function(){return;});
    })
    chrome.storage.sync.get(['askfirst'],function(res){
        document.getElementById('askfirst').checked = res.askfirst;
    });
    document.getElementById('askfirst').addEventListener('change', (event) => {
        chrome.storage.sync.set({askfirst: event.currentTarget.checked},function(){return;});
    })
};