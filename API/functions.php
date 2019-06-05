<?php
nested_including('.env.php');
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



//DbConnect
  $url = env("DB_HOST");
  $user = env("DB_USERNAME");
  $password = env("DB_PASSWORD");
  $db = env("DB_NAME");
  $host = env("DB_HOST");
  $port = env("DB_PORT");
  $link = mysqli_init();
  $conn = mysqli_real_connect(
     $link,
     $host,
     $user,
     $password,
     $db,
     $port
  );



 ?>
