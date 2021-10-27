<?php

session_start();
require "./config.php";

if (isset($_POST['type'])  && isset($_POST['value']) && !empty($_POST['value'])) 
    {
        $type = addslashes($_POST['type']);
        $value = str_replace(',','.', $_POST['value']);
        $value = floatval($value);

        $sql = $PDO->prepare("INSERT INTO historico (id_conta, tipo, valor, data_operacao)
                              VALUES (:id_conta, :tipo, :valor, NOW() )");
        $sql->bindValue(":id_conta", $_SESSION['bank']);
        $sql->bindValue(":tipo", $type);
        $sql->bindValue(":valor", $value);
        $sql->execute();   
        
        if ($type == "0") {
            // Depósito
            $sql = $PDO->prepare("UPDATE contas SET saldo = saldo + :valor WHERE id = :id");
            $sql->bindValue(":valor", $value);
            $sql->bindValue(":id", $_SESSION['bank']);
            $sql->execute();
        } else {
            //retirada
            $sql = $PDO->prepare("UPDATE contas SET saldo = saldo - :valor WHERE id = :id");
            $sql->bindValue(":valor", $value);
            $sql->bindValue(":id", $_SESSION['bank']);
            $sql->execute();
        }

        header("location: index.php");
        exit;
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adicionar</title>
</head>
<body>

    <form action="" method="post">
        <p>
            <label for="typeTrasaction">Tipo de transação:</label>
            <select name="type" id="type">
                <option value='0' selected="selected">Depósito</option>
                <option value='1' >Retirada</option>
            </select>
            <label for="Valor">Valor: </label>
            <input type="text" name="value" pattern="[0-9.,]{1,}">
            
            <input type="submit" value="Comfirmar">
        </p>
    </form>
    
</body>
</html>