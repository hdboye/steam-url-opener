window.onload = init;
chrome.windows.getLastFocused(
    {populate: false}, 
    function(currentWindow) {
        chrome.windows.update(currentWindow.id, { width: 500 });
    }
);
function init(){
    document.getElementById('enabled').checked
    chrome.storage.sync.get(['enabled'],function(res){
        document.getElementById('enabled').checked = res.enabled;
    });
    document.getElementById('enabled').addEventListener('change', (event) => {
        console.log("yes");
        chrome.storage.sync.set({enabled: event.currentTarget.checked},function(){return;});
    })
};