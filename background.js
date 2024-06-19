chrome.runtime.onInstalled.addListener((details) => {
  chrome.tabs.query({url:['https://wordstat.yandex.ru/*']}, e =>
    e.forEach(e => chrome.scripting.executeScript({target:{tabId:e.id}, files:['insert.js']}))
  )
})