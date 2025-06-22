
function shouldTriggerPopup(url) {
  // This will ensure that pop-ups do not trigger when the user is in a Google Meet session
  return url && !url.includes("meet.google.com") && !url.startsWith("chrome://") && !url.startsWith("chrome-extension://");
}

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (shouldTriggerPopup(tab.url)) {
      chrome.scripting.executeScript({
        target: { tabId: activeInfo.tabId },
        files: ["inject.js"]
      });
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && shouldTriggerPopup(changeInfo.url)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["inject.js"]
    });
  }
});
