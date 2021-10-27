<?php

require('../config.php');

$method = strtolower($_SERVER['REQUEST_METHOD']);

if ($method === 'put') {
    
    parse_str(file_get_contents('php://input'), $input);

    $id   = filter_var($input['id']   ?? null);
    $name = filter_var($input['name'] ?? null);
    $nasc = filter_var($input['nasc'] ?? null);

    if ($id && $name && $nasc) {
        
        $sql = $pdo->prepare("SELECT * FROM tb_users WHERE cd_user = :id");
        $sql->bindValue(':id', $id);
        $sql->execute();

        if ($sql->rowCount() > 0) {
            
            $sql = $pdo->prepare("UPDATE tb_users SET nm_user = :nameUser, dt_nasc = :nasc WHERE cd_user = $id");
            $sql->bindValue(':nameUser', $name);
            $sql->bindValue(':nasc', $nasc);
            $sql->execute();

            $response['result'] = [
                'id' => $id,
                'name' => $name,
                'nasc' => $nasc
            ];            

        } else {
            $response['error'] = 'Dados inexistente';
        }

    } else {
        $response['error'] = 'Dados não enviados';
    }

} else {
    $response['error'] = "Method de requisição não aceito";
}


require('../configResponse.php');