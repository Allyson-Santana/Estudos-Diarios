<style>
* {
    margin-left: 30;
    margin-right: 30;
}
</style>

<?php
try {
    $PDO = new PDO("mysql:dbname=db_b7;host=localhost", "root", "");
} catch (PDOException $ex) {
    echo "Error: " . $ex->getMessage();
    exit;
}

date_default_timezone_set('America/Sao_Paulo');

if(isset($_POST['name']) && !empty($_POST['name']) && 
   isset($_POST['message']) && !empty($_POST['message'])) 
{
    $name = $_POST['name'];
    $message = $_POST['message'];
    $sql = $PDO->prepare("INSERT INTO tb_message (nm_message, ds_message, dt_message) VALUES (:nm, :ds, :dt)");
    $sql->bindValue(":nm", $name);
    $sql->bindValue(":ds", $message); 
    $sql->bindValue(":dt", date('Y-m-d h:i:s') );
    $sql->execute();
}

$sql = $PDO->query("SELECT * FROM tb_message ORDER BY dt_message DESC");
$message = "";
if($sql->rowCount() > 0) {
    $message = $sql->fetchAll(PDO::FETCH_ASSOC);
}

?>

<fieldset>
    <form action="" method="POST">
        <label for="name">Nome</label><br>
        <input type="text" name="name" placeholder="DIgite seu nome" style="margin-bottom: 5;">
        <br>
        <label for="message">Mensagem</label><br>
        <textarea type="text" name="message" placeholder="Digite sua mensagem" style="margin-bottom: 5;"> </textarea>
        <br>
        <input type="submit" value="Enviar">
    </form>
</fieldset>

<br><br>

<?php 
    if($message){
        foreach ($message as $item) {
        ?>
            <p> 
            <strong> <?php echo $item['nm_message']; ?> </strong> 
            <?php echo $item['ds_message']; ?> </p>
            <hr>
        <?php
        }
    } else {
        echo "<p>Nâo há mensagem.</p>";
    }
?>
  

