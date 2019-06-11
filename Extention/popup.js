//Alert if solution is found
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.event_solfound !== "") {
      document.getElementsByClassName("SolsFound")[0].classList.add('noHide');
      sendResponse({farewell: "event_solfound_recived"});
    }
  });
