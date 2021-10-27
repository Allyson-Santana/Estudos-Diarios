<?php

require('../config.php');

$method = strtolower($_SERVER['REQUEST_METHOD']);

if ($method === 'post') {
    
    $name = filter_input(INPUT_POST, 'name');
    $nasc = filter_input(INPUT_POST, 'age');

    if ($name && $nasc) {

        $sql = $pdo->prepare("INSERT INTO tb_users (nm_user, dt_nasc) VALUES (:userName, :nasc)");   
        $sql->bindValue(':userName', $name);
        $sql->bindValue(':nasc', $nasc);
        $sql->execute();

        $id = $pdo->lastInsertId();

        $response['result'] = [
            'id' => $id,
            'name' => $name,
            'nasc' => $nasc
        ];

    } else {
        $response['error'] = "Campos não enviados";
    }
    
} else {
    $response['error'] = "Method de requisição não aceito";
}


require('../configResponse.php');