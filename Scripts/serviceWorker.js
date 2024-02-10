chrome.runtime.onInstalled.addListener(({reason}) => {
  if (reason === 'install') {
    chrome.tabs.create({
      url: "installationCompleted.html"
    });
  }
});
// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.setBadgeText({
//     text: "ON",
//   });
// });
