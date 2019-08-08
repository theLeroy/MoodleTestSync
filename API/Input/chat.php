<?php
require('../functions.php');

$conn = mysqli_connect($host, $user, $password, $user);


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$attempt = mysqli_real_escape_string($conn, $_GET["attempt"]);
$quizid = mysqli_real_escape_string($conn, $_GET["quizid"]);
$moodleumgebung = mysqli_real_escape_string($conn, $_GET["m"]);
$Frage = mysqli_real_escape_string($conn, $_GET["f"]);
$Nachricht = mysqli_real_escape_string($conn, $_GET["n"]);




//Lol Bigest slq ever
// $sql = "
// SET @pre = Solution_,
//     @i = 0;
// WHILE (SELECT CONCAT(@pre, @i) FROM multichoice WHERE attempt = $attempt and moodleumgebung = $moodleumgebung and quizid = $quizid) != NULL) DO
//  SET @i = @i+1;
// END WHILE;
//
// SET @sn = CONCAT(@pre, @i);
//
// INSERT INTO
//   multichoice (attempt, quizid, moodleumgebung, @sn)
// VALUES
//  ($attempt, $quizid, $moodleumgebung, $resultsObject)
// WHERE
//   attempt = $attempt
//     and
//   moodleumgebung = $moodleumgebung
//     and
//   quizid = $quizid
//
// ";

$sql = "
INSERT INTO
  Chat (
    attempt,
    quizid,
    Umgebung,
    Nachricht,
    Frage
       )
VALUES
 (
  '$attempt',
  '$quizid',
  '$moodleumgebung',
  '$Nachricht',
  '$Frage',
      )
";



if (mysqli_query($conn, $sql)) {

} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

 ?>
