chrome.browserAction.onClicked.addListener((tab)=> {    
    let message = new Boolean(true);
    
    chrome.tabs.sendMessage(tab.id, message);
});