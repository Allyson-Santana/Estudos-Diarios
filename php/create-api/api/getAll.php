<?php

require('../config.php');

$method = strtolower($_SERVER['REQUEST_METHOD']);

if ($method === 'get') {
    
    $sql = $pdo->query("SELECT * FROM tb_users");

    if ($sql->rowCount() > 0) {
        $data = $sql->fetchAll(PDO::FETCH_ASSOC);

        foreach ($data as $item) {
            $response['result'][] = [
                'id' => $item['cd_user'],
                'name' => $item['nm_user'],
                'nasc' => $item['dt_nasc']
            ];
        }
    }

} else {
    $response['error'] = "Method de requisição não aceito";
}


require('../configResponse.php');