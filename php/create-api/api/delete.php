<?php

require('../config.php');

$method = strtolower($_SERVER['REQUEST_METHOD']);

if ($method === 'delete') {
    
    parse_str(file_get_contents('php://input'), $input);

    $id = filter_var($input['id'] ?? null);

    if ($id) {
        
        $sql = $pdo->prepare("SELECT * FROM tb_users WHERE id = :id");
        $sql->bindValue(':id', $id);
        $sql->execute();

        if ($sql->rowCount() > 0) {
            
            $sql = $pdo->prepare("DELETE FROM tb_users WHERE id = :id");
            $sql->bindValue(':id', $id);
            $sql->execute();       

        } else {
            $response['error'] = 'ID inexistente';
        }

    } else {
        $response['error'] = 'ID não enviado';
    }

} else {
    $response['error'] = "Method de requisição não aceito";
}


require('../configResponse.php');