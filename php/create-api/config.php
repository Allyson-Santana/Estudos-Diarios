<?php

$db_host = 'localhost';
$db_name = 'db_api_users';
$db_user = 'root';
$db_pass = '';

try {
    
    $pdo = new PDO("mysql:dbname=$db_name;host=$db_host", $db_user, $db_pass);
    // Obrigar ele exibir qualuqer error interno que der
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 

} catch(PDOException $exc) {
    echo "OPS...." . $exc->getMessage();
}

$response = [
    'error' => '',
    'result' => []
];

