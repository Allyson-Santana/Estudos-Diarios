<style>
    * {
        padding: 10;
        font-size: 40;
        text-align: center;
    }
</style>

<?php
        if( isset($_GET['number1']) && isset($_GET['number2']) &&
        !empty($_GET['number1']) && !empty($_GET['number2']) &&
        is_numeric($_GET['number1']) && is_numeric($_GET['number2'])) 
        {
            $n1 = floatval($_GET['number1']);
            $n2 = floatval($_GET['number2']);
            
            switch ($_GET['operation']) {
                case '1': // SUB                    
                    $result = $n1 - $n2;
                    echo $n1 . " - " . $n2 . " = " . $result;
                    break;
                case '2': // MULT                    
                    $result = $n1 * $n2;
                    echo $n1 . " * " . $n2 . " = " . $result;
                    break;
                case '3': // DIV                    
                    $result = $n1 / $n2;
                    echo $n1 . " / " . $n2 . " = " . $result;
                    break;                
                default: //SUM
                    $result = $n1 + $n2;
                    echo $n1 . " + " . $n2 . " = " . $result;
                    break;
            }
        } else {
            header("location: index.php");
        }
?>


<br>

<a href="./index.php">VOLTAR</a>