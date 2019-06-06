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


        var xhttp = new XMLHttpRequest();
        xhttp.open("GET",""+ APIURL +"Output/multichoice.php?quizid="+ cmid +"&m="+window.location.host+"", true);
        xhttp.send();

        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
          }
        }





        for (var i = 0; i < (Object.keys(multichoiceQuestions).length); i++) {
        }
      }


    }
  }
}
