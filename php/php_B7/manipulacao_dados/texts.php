<?php

/**
 * Divide | String para array
 */
$name = "Allyson Luiz Cardoso Santana";
$text = explode(" ", $name);
print_r($text) . "\n";

/**
 * junta | Arra para string
 */
$name = ["Allyson", "Luiz", "Cardoso", "Santana"];
$text = implode(" - ", $name);
print_r($text);
echo "\n";

/**
 * Mostrar quantas casas decimais e formata padrão
 */
$number = 12.2343434;
echo number_format($number, 2) . "\n";
$number = 12232.324432;
echo number_format($number, 2, ",", ".") . "\n";


/**
 * Troca um caracter/numero por outro
 */
$text = "O rato roeu a roupa";
$newText = str_replace("roeu", "comeu", $text);
echo $newText . "\n";

/**
 * Para minuscula
 */
echo strtolower("TUDO PARA MINUSCULO") . "\n";

/**
 * Para maiusculo
 */
echo strtoupper("tudo para maiusculo") . "\n";

/**
 * Corta a palavra | pegar uma parte da string
 */
$text = "Bhasaker";
$text_substr = substr($text, 0, 3);
echo $text_substr . "\n";

/**
 * Deixa a primeiro letra da string em MAIUSCULA
 */
$name = "allyson luiz cardoso santana";
echo ucfirst($name) . "\n";

/**
 * Deixa a primeiro letra de cada palavra da string em MAIUSCULA
 */
$name = "allyson luiz cardoso santana";
echo ucwords($name) . "\n";


// entre outras........