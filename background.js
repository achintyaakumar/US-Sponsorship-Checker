// Background script doesn't need content script injection logic

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "addHiringPills") {
      // Call the addHiringPills function here
      addHiringPills();
    }
  });
  
  