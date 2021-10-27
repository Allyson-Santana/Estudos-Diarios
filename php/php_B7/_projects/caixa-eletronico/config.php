<?php

try {
    $PDO = new PDO("mysql:dbname=db_b7;host=localhost", "root", "");
} catch (PDOException $ex) {
    echo "ERROR: " . $ex->getMessage();
}


?>