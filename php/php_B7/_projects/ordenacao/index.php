<?php

try {
    $PDO = new PDO("mysql:dbname=db_b7;host=localhost", "root", "");
} catch (PDOException $exc) {
    echo "ERRO: " . $exc->getMessage();
    exit;
}

if( isset($_GET['order']) && !empty($_GET['order']) ){
    $order = addslashes($_GET['order']);
    switch ($order) {
        case 'age':
            $order = 'cd_age';
            break;        
        default:
            $order = 'nm_user';
            break;
    }
    $sql = $PDO->query("SELECT * FROM tb_user ORDER BY " . $order);
}else {
    $order = "";
    $sql = $PDO->query("SELECT * FROM tb_user");
}

if($sql->rowCount() > 0) {
    $data = $sql->fetchAll(PDO::FETCH_ASSOC);
}

?>

<form action="" method="GET">
    <select name="order" id="order" onchange="this.form.submit()">
        <option></option>
        <option value="name" <?php echo ($order == "nm_user") ? "selected='selected'" : "" ?> >Pelo Nome</option>
        <option value="age" <?php echo ($order == "cd_age") ? "selected='selected'" : "" ?> >Pela idade</option>
    </select>
</form>

<table border="1" width="400">
    <tr>
        <th>Nome</th>
        <th>Idade</th>
    </tr>

    <?php
        if($data) {
            foreach ($data as $item) {
            ?>
                <tr>
                    <td><?php echo $item['cd_user']; ?></td>
                    <td><?php echo $item['nm_user']; ?></td>
                    <td><?php echo $item['cd_age']; ?></td>
                </tr>
            <?php
            }
        }
    ?>

</table>


