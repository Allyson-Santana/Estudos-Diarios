<?php

require('../config.php');

$method = strtolower($_SERVER['REQUEST_METHOD']);

if ($method === 'get') {
    
    $id = filter_input(INPUT_GET, 'id');
    
    if ($id) {
        
        $sql = $pdo->prepare("SELECT * FROM tb_users WHERE id = :id");
        $sql->bindValue(':id', $id);
        $sql->execute();

        if ($sql->rowCount() > 0) {
            
            $data = $sql->fetchAll(PDO::FETCH_ASSOC);

            $response['result'] = [
                'id' => $data['cd_user'],
                'name' => $data['nm_user'],
                'nasc' => $data['dt_nasc']
            ];

        } else {
            $response['error'] = "ID inexistente";
        }

    } else {
        $response['error'] = "ID não enviado";
    }

} else {
    $response['error'] = "Method de requisição não aceito";
}


require('../configResponse.php');