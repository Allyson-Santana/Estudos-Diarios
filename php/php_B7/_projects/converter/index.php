<?php

/*
    boolval() - Obtém o valor booleano de uma variável
    floatval() - Obtém o valor em ponto flutuante da variável
    intval() - Retorna o valor inteiro da variável
    settype() - Atribui um tipo para a variável
    sprintf() - Retorna a string formatada
    number_format() - Formata um número com os milhares agrupados
*/

if (!empty($_GET['string'])) {
    $string = $_GET['string'];
    $str = explode(",", $string);
    $item = [];
    foreach ($str as $value) {
        switch (trim($value)) {
            case 'um':
                array_push($item,"1");
                break;
            case 'dois':
                array_push($item,"2");
                break;
            case 'três':
                array_push($item,"3");
                break;
            case 'quatro':
                array_push($item,"4");
                break;
            case 'cinco':
                array_push($item,"5");
                break;
            case 'seis':
                array_push($item,"6");
                break;
            case 'sete':
                array_push($item,"7");
                break;
            case 'oito':
                array_push($item,"8");
                break;
            case 'nove':
                array_push($item,"9");
                break;
            default:
                array_push($item,"0");
                break;
        }
    }

    $str = implode(",",$item);
}

?>

<style>
    form * {
        padding: 10;
        font-size: 20;
        text-align: center;
    }
</style>

<form action="" method="get">
    <input type="text" name="string" placeholder="Numero: " required>
    <input type="submit" value="Enviar">
</form>

<hr>

<?php 
if ( isset($str) ) {
    echo "<p>" . $string . "</php>";
    echo "<p>" . $str . "</php>";
}
?>
