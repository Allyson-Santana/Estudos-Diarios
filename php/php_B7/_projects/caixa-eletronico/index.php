<?php
session_start();
require "./config.php";

if (isset($_SESSION['bank']) && !empty($_SESSION['bank'])) {
    $id = $_SESSION['bank'];
    $sql = $PDO->prepare("SELECT * FROM contas WHERE id = :id");
    $sql->bindValue(":id", $id);
    $sql->execute();
    if ($sql->rowCount() > 0) {
       $data =  $sql->fetch();        
    } else {
        header("location: login.php");
        exit;
    }
} else {
    header("location: login.php");
    exit;
}

$sql = $PDO->prepare("SELECT * FROM historico WHERE id_conta = :id_conta");
$sql->bindValue(":id_conta", $id);
$sql->execute();
if ($sql->rowCount() > 0) {
    $bankStratum = $sql->fetchAll();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Caixa Eletrônico</title>
</head>
<body>
    <p>Titular: <?php echo $data['titular']; ?> </p>
    <p>Agência: <?php echo $data['agencia']; ?> </p>
    <p>Conta: <?php echo $data['conta']; ?> </p>
    <p>Saldo: <?php echo $data['saldo']; ?></p>
    <a href="logout.php">Sair</a>
    <hr>

    <p style="margin-top: 4; margin-bottom: 4;"><a href="./add-transaction.php">Adicionar novo</a></p>

    <h2>Movimentação/Extrato</h2>
    <table border="1" width='400'>
        <tr>
            <th>Data</th>
            <th>Vaores</th>
        </tr>
        <?php
            foreach ($bankStratum as $item) {
            ?>
                <tr>
                    <td><?php echo date('d-m-Y h:i', strtotime($item['data_operacao'])); ?></td>
                    <td>
                        <?php if ($item['tipo'] == '0'): ?>
                            <span style="color: green;"> R$: <?php echo $item['valor']; ?> </span>
                            <?php else: ?>
                            <span style="color:red;"> R$: -<?php echo $item['valor']; ?> </span>
                        <?php endif; ?>
                    </td>
                </tr>
            <?php
            }
        ?>
    </table>
</body>
</html>