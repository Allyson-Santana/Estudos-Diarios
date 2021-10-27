<style>
    * {
        padding: 10;
        font-size: 50;
        text-align: center;
    }
</style>

<?php
session_start();

if(!empty($_GET['result'])) {
    if($_GET['result'] == $_SESSION['result']) {
        echo "<p>HUMANO!!!!</p>";
    } else {
        echo "<p>FAKE!!!!</p>";
    }
} else {
    header("location: index.php");
}

?>

<br>
<a href="./index.php">VOLTAR</a>



