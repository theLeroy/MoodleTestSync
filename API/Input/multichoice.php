<?php
require('../functions.php');

$conn = mysqli_connect($host, $user, $password, $user);


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$attempt = mysqli_real_escape_string($conn, $_GET["attempt"]);
$quizid = mysqli_real_escape_string($conn, $_GET["quizid"]);
$moodleumgebung = mysqli_real_escape_string($conn, $_GET["m"]);
$resultsObject = mysqli_real_escape_string($conn, $_GET["r"]);


$resultsObject = explode('*|* ', $resultsObject);
array_push($resultsObject, "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "NULL");

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
  multichoice (
    attempt,
    quizid,
    moodleumgebung,
    Solution_1,
    Solution_2,
    Solution_3,
    Solution_4,
    Solution_5,
    Solution_6,
    Solution_7,
    Solution_8,
    Solution_9,
    Solution_10,
    Solution_11,
    Solution_12,
    Solution_13,
    Solution_14,
    Solution_15,
    Solution_16,
    Solution_17,
    Solution_18,
    Solution_19,
    Solution_20,
    Solution_21,
    Solution_22,
    Solution_23,
    Solution_24,
    Solution_25,
    Solution_26,
    Solution_27,
    Solution_28,
    Solution_29,
    Solution_30,
    Solution_31,
    Solution_32,
    Solution_33,
    Solution_34,
    Solution_35,
    Solution_36,
    Solution_37,
    Solution_38,
    Solution_39,
    Solution_40
       )
VALUES
 (
  '$attempt',
  '$quizid',
  '$moodleumgebung',
  '$resultsObject[0]',
  '$resultsObject[1]',
  '$resultsObject[2]',
  '$resultsObject[3]',
  '$resultsObject[4]',
  '$resultsObject[5]',
  '$resultsObject[6]',
  '$resultsObject[7]',
  '$resultsObject[8]',
  '$resultsObject[9]',
  '$resultsObject[10]',
  '$resultsObject[11]',
  '$resultsObject[12]',
  '$resultsObject[13]',
  '$resultsObject[14]',
  '$resultsObject[15]',
  '$resultsObject[16]',
  '$resultsObject[17]',
  '$resultsObject[18]',
  '$resultsObject[19]',
  '$resultsObject[20]',
  '$resultsObject[21]',
  '$resultsObject[22]',
  '$resultsObject[23]',
  '$resultsObject[24]',
  '$resultsObject[25]',
  '$resultsObject[26]',
  '$resultsObject[27]',
  '$resultsObject[28]',
  '$resultsObject[29]',
  '$resultsObject[30]',
  '$resultsObject[31]',
  '$resultsObject[32]',
  '$resultsObject[33]',
  '$resultsObject[34]',
  '$resultsObject[35]',
  '$resultsObject[36]',
  '$resultsObject[37]',
  '$resultsObject[38]',
  '$resultsObject[39]'
      )
";

print_r($resultsObject);

if (mysqli_query($conn, $sql)) {

} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

 ?>
