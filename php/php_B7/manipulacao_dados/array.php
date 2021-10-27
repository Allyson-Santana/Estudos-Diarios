<?php
$arr = array(
    "name" => "Allyson",
    "idade" => "18",
    "mae" => "Carla",
    "Pai" => "adilson",
    "animal domestico" => "gata"
);

/**
 * Mostrar somente as chaves do array
 */
$arr2 = array_keys($arr);
print_r($arr2);

/*
* Mostrar somente os valores do array
*/
$arr2 = array_values($arr);
print_r($arr2);

/**
 * Remover um elemento terteminado 
 */
$arr2 = array_pop($arr);
print_r($arr2);
echo "\n";
$arr2 = array_shift($arr);
print_r($arr2);
echo "\n";

/**
 * Ordenar o array em ordem alfabetica
 */
$arr = ["Marcelo", "Allyson", "Leonardo", "Rafael", "Yzaque"];

asort($arr);// Ordem normal
print_r($arr);
arsort($arr); // Ordem reversa
print_r($arr);
echo "\n";

/**
 * Conta quanto elementos tem um array
 */
echo "Array tem: " . count($arr);
echo "\n";

/**
 * Pergunta se tem um certo valor dentro de um array
 */
if(in_array("Maria", $arr)) {
    echo "OPA... achamos esse valor";
} else {
    echo "Não foi encontrado esse valor";
}