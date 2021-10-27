<?php
session_start();

$num1 = rand(0, 10);
$num2 = rand(1, 10);
$op = array_rand(['+', '-', '*', '/']);

switch ($op) {
    case '1':
        $result = $num1 - $num2;
        $cal = $num1 . " - "  . $num2 . " = ";
        break;
    case '2':
        $result = $num1 * $num2;
        $cal = $num1 . " * "  . $num2 . " = ";
        break;
    case '3':
        $result = $num1 / $num2;
        $cal = $num1 . " / "  . $num2 . " = ";
        break;    
    default:
        $result = $num1 + $num2;
        $cal = $num1 . " + "  . $num2 . " = ";
        break;
}

$_SESSION['result'] = $result;

?>

<style>
    form * {
        padding: 10;
        font-size: 20;
        text-align: center;
    }
</style>

<form action="./verificador.php" method="get">
    <p>
        <span> <?php echo $cal ?> </span>
        <input type="number" pattern="[0-9.,]{1,}" name="result" placeholder="Numero: " required>
        <input type="submit" value="Verificar">
    </p>
</form>