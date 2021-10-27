<?php
require "./config.php";
session_start();

if (!empty($_SESSION['email'])) {
    header("location: index.php");
    exit;
}
$error = "";

if ( isset($_POST['email']) && isset($_POST['password']) &&
    !empty($_POST['email']) && !empty($_POST['password']) )
    {
        $email = filter_var(addslashes($_POST['email']), FILTER_VALIDATE_EMAIL);
        $password = addslashes($_POST['password']);

        $sql = $PDO->query("SELECT * FROM tb_user WHERE nm_email = '$email'
        AND nm_password = '$password'");
        if ($sql->rowCount() > 0) {
            $data = $sql->fetch();
            $_SESSION['id'] = $data['cd_user'];
            $_SESSION['email'] = $data['nm_email'];
            $_SESSION['code'] = $data['ds_code'];
            header("location: index.php");
            exit;
        } else {
            $error = "OPSSS.. Informações Não encontradas";
        }
    }else {
        $error = "Preencha todos os campos por favor";
    }

?>

<form action="" method="post">
    <h2>Login</h2>
    <p>
        <label for="email">E-mail: </label><input type="email" name="email" placeholder="email">
    </p>
    <p>
        <label for="password">Password: </label><input type="password" name="password" placeholder="Senha">
    </p>
    <p>
        <input type="submit" value="Entrar">
    </p>
</form>
<button><a style="text-decoration-line: none; color:black;" href="create.php">Cria uma conta</a></button>

<?php 
    if (!empty($error)) {
    ?>
        <p> <?php echo $error?> </p>        
    <?php
    }
?>