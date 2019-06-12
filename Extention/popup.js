const NUMEROFCOLUMS = 19;


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

      var AnserObj;
      for (var q = 0; q < (Object.keys(data).length); q++) {
        for (var x = 1; x < NUMEROFCOLUMS+1; x++) {
          if (typeof data[q]["Solution_" + x] !== 'undefined') {
            if(data[q]["Solution_" + x] !== "NULL") {
              AnserObj = JSON.parse(data[q]["Solution_" + x]);
              data[q]["Solution_" + x] = AnserObj;

            } else {
              AnserObj = null;
            }
          } else {
            AnserObj = null;
          }
            if (AnserObj !== null) {
              addRow("AntwortenTable", ["100%", AnserObj.Antwort, AnserObj.Frage]);
            }
        }
      }
    }
  });

//Enable relode btn
window.onload = function() {
  document.getElementById("researchbtn").onclick = function fun() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {relode: "relode"}, function(response) {
        console.log("relode request send");
        console.log(response.relode);
      });
    });
  }
}
//Enable Send Rl Reques at Opening. I know its very shitty :(
window.onload = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {relode: "relode"}, function(response) {
      console.log("relode request send");
      console.log(response.relode);
    });
  });
}
