<?php
  $variables = [
      'DB_HOST' => 'h',
      'DB_USERNAME' => 'u',
      'DB_PASSWORD' => 'p',
      'DB_NAME' => 'demoDB',
      'DB_PORT' => '21',
      'PHP_ENV' => 'debug'
  ];
  foreach ($variables as $key => $value) {
      putenv("$key=$value");
  }
?>
