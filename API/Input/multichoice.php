<?php
require('../functions.php');

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$attempt = mysql_real_escape_string($_GET["attempt"]);
$quizid = mysql_real_escape_string($_GET["quizid"]);
$moodleumgebung = mysql_real_escape_string($_GET["m"]);
$resultsObject = mysql_real_escape_string($_GET["r"]);




//Lol Bigest slq ever
$sql = "
SET @pre = Solution_;
SET @i = 0;
WHILE (SELECT CONCAT(@pre, @i) FROM multichoice WHERE attempt = $attempt and moodleumgebung = $moodleumgebung and quizid = $quizid != NULL) DO
 SET @i = @i+1;
END WHILE;

SET @sn = CONCAT(@pre, @i);

INSERT INTO
  multichoice (attempt, quizid, moodleumgebung, @sn)
VALUES
 ($attempt, $quizid, $moodleumgebung, $resultsObject)
WHERE
  attempt = $attempt
    and
  moodleumgebung = $moodleumgebung
    and
  quizid = $quizid

";

if (mysqli_query($conn, $sql)) {

} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

 ?>
