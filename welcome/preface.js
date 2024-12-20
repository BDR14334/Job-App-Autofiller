// extension icon click
chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ tabId: tab.id });
  chrome.sidePanel.setOptions({
    tabId: tab.id,
    path: 'index.html',
    enabled: true
  });
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'openSidePanel',
    title: 'Open side panel',
    contexts: ['all']
  });
  chrome.tabs.create({ url: 'index.html' });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'openSidePanel') {
    chrome.sidePanel.open({ windowId: tab.windowId });
  }
});



