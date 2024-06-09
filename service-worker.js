chrome.action.onClicked.addListner(tab => {  
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: ()=> {
            alert('Hello from my extension');
        }
    });

});