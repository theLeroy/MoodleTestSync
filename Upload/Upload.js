
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
  }

} else {
  console.log('Nicht auf Lösungsseite');
}
