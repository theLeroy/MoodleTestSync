<?php
include('.env.php');
if(!function_exists('env')) {
    function env($key, $default = null)
    {
        $value = getenv($key);
        if ($value === false) {
            return $default;
        }
        return $value;
    }
}


function conDb() {


//DbConnect
  $url = env("DB_HOST");
  $user = env("DB_USERNAME");
  $password = env("DB_PASSWORD");
  $db = env("DB_NAME");
  $host = env("DB_HOST");
  $port = env("DB_PORT");
  $link = mysqli_init();
  // $conn = mysqli_connect(
  //    // $link,
  //    $host,
  //    $user,
  //    $password,
  //    $db,
  //    $port
  // );

  $conn = mysqli_connect($host, $user, $password, $user);

  if (!$conn) {
      echo "Fehler: konnte nicht mit MySQL verbinden." . PHP_EOL;
      echo "Debug-Fehlernummer: " . mysqli_connect_errno() . PHP_EOL;
      echo "Debug-Fehlermeldung: " . mysqli_connect_error() . PHP_EOL;
      exit;
  }

}

 ?>
