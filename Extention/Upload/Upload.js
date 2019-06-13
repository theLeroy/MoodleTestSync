
// Transmit Functin to Popup
// SendToPopup("event_solfound", "event_solfound")

const APIURL = "https://hax.9k1.co/api/";
const NUMEROFCOLUMS = 40; //Ammount of rows in Db


// Fuck on securiti lol -> <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
var fucksec = document.createElement('meta');
fucksec.httpEquiv = 'Content-Security-Policy';
fucksec.content = 'upgrade-insecure-requests';
document.getElementsByTagName('head')[0].appendChild(fucksec);


// testen ob auf lösungsseite
if (typeof document.getElementsByClassName("quizreviewsummary")[0] !== 'undefined') {
  if (document.getElementsByClassName("quizreviewsummary")[0].getElementsByTagName("tr")[1].getElementsByTagName("td")[0].innerHTML == "Finished" || "Beendet") {
    //Auf lösungsseite!
    console.log("finish atemp detect")

    //get URL Parm
    var param = {};
    var s = window.location.search.substring(1).split('&');
    for (var i = 0; i < s.length; ++i) {
        var parts = s[i].split('=');
        param[parts[0]] = parts[1];
    }

  //Suche nach richtigen Lösungen:
    //multichoice!
    if (document.getElementsByClassName("multichoice")[0] !== 'undefined') {
      var multichoiceQuestions = document.getElementsByClassName("multichoice");
      //Loop all multibe choice
      var RAnwortArr = [];
      for (var i = 0; i < (Object.keys(multichoiceQuestions).length); i++) {
        //Select correct ones
        // if (Object.values(multichoiceQuestions[i].classList).indexOf('correct') > -1) {
        //   console.log(multichoiceQuestions[i])
        // }
        //Richtige Antworten
        let RAntwort = multichoiceQuestions[i].getElementsByClassName("rightanswer")[0].textContent;
        RAntwort = RAntwort.replace('Die richtige Antwort lautet: ','');
        RAntwort = RAntwort.replace('The correct answer is: ','');
        console.log(RAntwort);

        //Frage
        let Question = multichoiceQuestions[i].getElementsByClassName("qtext")[0].getElementsByTagName("p")[0].textContent;

        let QObject = {
          Frage:  Question,
          Antwort: RAntwort
        }
        //Push in soll
        RAnwortArr.push(JSON.stringify(QObject)  )

      }
      RAnwortArr = RAnwortArr.join("*|* ");
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET",""+ APIURL +"Input/multichoice.php?r="+ RAnwortArr + "&attempt="+param.attempt+"&quizid="+param.cmid+"&m="+window.location.host+"", true);
      xmlhttp.send();


    }
  } else {
    alert("noch nicht beendet?? Work in Progress code=aIOg38b3")
  }
} else {
  console.log('Nicht auf Lösungsseite');
}


var FnFillTest = () => {
//Am ausfüllen vom Quiz
if (typeof document.getElementById("mod_quiz_navblock_title") !== 'undefined') {
  let path = window.location.pathname;
  if (path.substring(path.length - 11, path.length) == "attempt.php") {
    var param = {};
      var s = window.location.search.substring(1).split('&');
      for (var i = 0; i < s.length; ++i) {
          var parts = s[i].split('=');
          param[parts[0]] = parts[1];
      }
    if (typeof param.cmid !== 'undefined') {
      var cmid = param.cmid;
    }
    if(param.cmid = Number) {
      console.log("on Quiz page!");

      if (document.getElementsByClassName("multichoice")[0] !== 'undefined') {
        var multichoiceQuestions = document.getElementsByClassName("multichoice");

        //Ask db for solutions
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",""+ APIURL +"Output/multichoice.php?quizid="+ cmid +"&m="+window.location.host+"", true);
        xhttp.send();

        var dbResults;
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            // convert Db Results to json
          dbResults = JSON.parse(xhttp.responseText);
          //bad sytax i know
          dbResults = removeEmpty(dbResults);
          console.log(dbResults);
          //Transmit Data to popup
          SendToPopup("event_solfound", JSON.stringify(dbResults));

            // Loop durch fragen und richtige antworten auswählen
            for (var i = 0; i < (Object.keys(multichoiceQuestions).length); i++) {
              let QCont = multichoiceQuestions[i].getElementsByClassName("qtext")[0]
              let Question = QCont.getElementsByTagName("p")[0].textContent;

              for (var q = 0; q < (Object.keys(dbResults).length); q++) {

                for (var x = 1; x < NUMEROFCOLUMS+1; x++) {
                  if (typeof dbResults[q]["Solution_" + x] !== 'undefined') {
                    if(dbResults[q]["Solution_" + x] !== "NULL") {
                      var AnserObj = JSON.parse(dbResults[q]["Solution_" + x]);
                    } else {
                      var AnserObj = {};
                    }
                  }
                  //Test if Web Frage und Db Frage same
                  if (Question = AnserObj.Frage) {
                    //Loop throug awersers.
                    for (var a = 0; a < multichoiceQuestions[i].getElementsByTagName("label").length; a++) {

                      let antser = multichoiceQuestions[i].getElementsByTagName("label")[a].textContent;
                      if (antser.length > 3) {antser = antser.substring(3)};
                      if (antser ===  AnserObj.Antwort) {
                        //Add css to correct anser
                        multichoiceQuestions[i].getElementsByTagName("label")[a].classList.add('correctsolHoverLOLoiu2g323j4g2o874t32g4324')
                        // multichoiceQuestions[i].getElementsByTagName("label")[a].style.color = 'blue';
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
};
FnFillTest();


//Tringer relode
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.relode !== "") {
      FnFillTest();
      sendResponse({relode: "Relode done!"});
    }
  });
