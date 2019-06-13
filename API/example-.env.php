<?php
  $variables = [
      'DB_HOST' => '127.0.0.1',
      'DB_USERNAME' => 'fill',
      'DB_PASSWORD' => 'fill',
      'DB_NAME' => 'fill',
      'DB_PORT' => '21',
      'PHP_ENV' => 'debug'
  ];
  foreach ($variables as $key => $value) {
      putenv("$key=$value");
  }
?>
