<?php
session_start();
    
if (empty($_SESSION['email'])) {
    header("location: login.php");
    session_destroy();
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
</head>
<body>
    <p>
        <?php echo $_SESSION['email'];  ?>
    </p>
    <p> <a href="logout.php">Logout</a> </p>
</body>
</html>

<p> Link:  http://localhost/github/Estudos-Diarios/php/php_B7/_projects/registro/create.php?code=<?php echo $_SESSION['code']; ?> </p>