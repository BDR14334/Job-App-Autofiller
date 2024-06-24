chrome.runtime.onInstalled.addListener(async()=>{
    let url = chrome.runtime.getURL('welcome/welcome.html')
    let tab = await chrome.tabs.create({url})
    console.log(`Created tab ${tab.id}`)
})