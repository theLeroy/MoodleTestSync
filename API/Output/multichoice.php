<?php
require('../functions.php');

$conn = mysqli_connect($host, $user, $password, $user);


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$quizid = mysqli_real_escape_string($conn, $_GET["quizid"]);
$moodleumgebung = mysqli_real_escape_string($conn, $_GET["m"]);

$sql = "
SELECT * FROM multichoice WHERE quizid = '$quizid' AND moodleumgebung = '$moodleumgebung';
";
$result = mysqli_query($conn, $sql);

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows)


 ?>
