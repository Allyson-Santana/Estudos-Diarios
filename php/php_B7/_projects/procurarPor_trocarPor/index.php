<?php
if ( isset($_GET['str']) && isset($_GET['search']) && isset($_GET['change']) ) {
    $str =  $_GET['str'] ;
    $search =  $_GET['search'];
    $change =  $_GET['change'];

    $newString = str_replace($search, $change, $str);
    $strInverse = strrev($new);
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
    <input type="text" name="str" placeholder="Sua frase:">
    <input type="text" name="search" placeholder="Procurar por:">
    <input type="text" name="change" placeholder="Troca por:">
    <input type="submit" value="Enviar">
</form>

<?php

if ( isset($newString) ) {
    echo "Frase: " . $str;
    echo "<br>";
    echo "Nova Frase: " . $newString;
    echo "<br>";
    echo "Frase inversar: " . $strInverse;
}