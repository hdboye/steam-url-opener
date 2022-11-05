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
    })

    chrome.storage.sync.get(['enabledt'],function(res){
        document.getElementById('enabled2').checked = res.enabledt;
    });
    document.getElementById('enabled2').addEventListener('change', (event) => {
        chrome.storage.sync.set({enabledt: event.currentTarget.checked},function(){return;});
    })
};