const APIURL = "https://hax.9k1.co/api/";

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

  //Suche nach richtigen Lösungen:
    //multichoice!
    if (document.getElementsByClassName("multichoice")[0] !== 'undefined') {
      var multichoiceQuestions = document.getElementsByClassName("multichoice");
      //Loop all multibe choice
      for (var i = 0; i < (Object.keys(multichoiceQuestions).length)-1; i++) {
        //Select correct ones
        // if (Object.values(multichoiceQuestions[i].classList).indexOf('correct') > -1) {
        //   console.log(multichoiceQuestions[i])
        // }
        //Richtige Antworten
        let RAntwort = multichoiceQuestions[i].getElementsByClassName("rightanswer")[0].innerHTML;
        RAntwort = RAntwort.replace('Die richtige Antwort lautet: ','');
        RAntwort = RAntwort.replace('The correct answer is: ','');
        console.log(RAntwort);


        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET",""+ APIURL +"Input/multichoice.php?r="+ RAntwort + "&attempt=123&quizid=13&m=slhd33", true);
        xmlhttp.send();

      }


    }




  } else {
    alert("noch nicht beendet?? Work in Progress code=aIOg38b3")
  }
} else {
  console.log('Nicht auf Lösungsseite');
}
