//Alert if solution is found
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    // console.log(request.event_solfound);
    if (request.event_solfound !== "") {
      document.getElementsByClassName("SolsFound")[0].classList.add('noHide');
      document.getElementsByClassName("noSols")[0].classList.add('Hide');
      sendResponse({farewell: "event_solfound_recived"});

      var data = JSON.parse(request.event_solfound);
      console.log(data)


    }
  });
