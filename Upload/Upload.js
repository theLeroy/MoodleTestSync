
var body = document.getElementsByTagName("BODY")[0];
body.style.backgroundColor = "red";
//
// var elm = document.getElementsByName("q")
// alert(document.getElementsByName("q").value)
//
//

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
        if (Object.values(multichoiceQuestions[i].classList).indexOf('correct') > -1) {
          console.log(multichoiceQuestions[i])
        }
      }


    }




  } else {
    alert("noch nicht beendet?? Work in Progress code=aIOg38b3")
  }
} else {
  console.log('Nicht auf Lösungsseite');
}
