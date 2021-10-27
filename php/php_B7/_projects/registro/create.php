<?php
require "./config.php";
session_start();

if (empty($_GET['code'])) {
    header("location: login.php");
    exit;
}
$code = addslashes($_GET['code']);
$sql = $PDO->query("SELECT * FROM tb_user WHERE ds_code = '$code' AND qtd_code <= 5");

if ($sql->rowCount() == 0) {
    header("location: login.php");
    exit;
}

if ( isset($_POST['email']) && isset($_POST['password']) &&
    !empty($_POST['email']) && !empty($_POST['password']) ) 
{
    $email = filter_var(addslashes($_POST['email']), FILTER_VALIDATE_EMAIL);
    $password = md5(addslashes($_POST['password']));
    $newCode = substr(str_shuffle("abcdefghijklmnopqrstuvwxz" . rand(0, 100)) , 0, 15);
    $newCode = md5($newCode);

    $sql = $PDO->prepare("UPDATE tb_user set qtd_code = qtd_code + 1 WHERE ds_code = :code ");
    $sql->bindValue(":code", $code);
    $sql->execute();

    $sql = $PDO->prepare("INSERT INTO tb_user (nm_email, nm_password, ds_code, qtd_code) VALUES (:email, :pass, :code, :qtd)");
    $sql->bindValue(":email", $email);
    $sql->bindValue(":pass", $password);
    $sql->bindValue(":code", $code);
    $sql->bindValue(":qtd", 0);
    $sql->execute();

    $_SESSION['id'] = $PDO->lastInsertId();
    $_SESSION['email'] = $email;
    $_SESSION['code'] = $newCode;
    header("location: index.php");
}
?>

<form action="" method="post">
    <h2>Create</h2>
    <p>
        <label for="email">E-mail: </label><input type="email" name="email" placeholder="email">
    </p>
    <p>
        <label for="password">Password: </label><input type="password" name="password" placeholder="Senha">
    </p>
    <p>
        <input type="submit" value="Enviar">
    </p>
</form>

<button><a style="text-decoration-line: none; color:black;" href="login.php">Fazer login</a></button>