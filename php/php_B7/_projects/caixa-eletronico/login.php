<?php
session_start();
require "./config.php";

if (isset($_SESSION['bank']) && !empty($_SESSION['bank'])) {
    header("location: index.php");
    exit;
}
if (isset($_POST['agency']) && isset($_POST['account']) && isset($_POST['password'])
&& !empty($_POST['agency']) && !empty($_POST['account']) && !empty($_POST['password'])) 
{
    $agency = addslashes($_POST['agency']);
    $account = addslashes($_POST['account']);
    $password = addslashes($_POST['password']);

    $sql = $PDO->prepare("SELECT * FROM contas WHERE agencia = :agencia AND 
                        conta = :conta AND senha = :senha");
    $sql->bindValue(":agencia", $agency);
    $sql->bindValue(":conta", $account);
    $sql->bindValue(":senha", md5($password));
    $sql->execute();

    if($sql->rowCount() > 0) {
        $sql = $sql->fetch();
        $_SESSION['bank'] = $sql['id'];
        header("location: index.php");
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form action="" method="POST">
        <p>Agência: <input type="text" name="agency" ></p>
        <p>Conta:   <input type="text" name="account" ></p>
        <p>Senha:   <input type="password" name="password" ></p>            
        <p><input type="submit" value="Entrar"></p>
    </form>    
</body>
</html>