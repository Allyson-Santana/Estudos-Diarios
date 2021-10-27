<?php

/**
 * OPÇÔES DE INJECTION
 * 
 * '' or 1=1
 * '; DROP TABLE tb_user;
 */ 

$name = $_POST['name']; 
$sql = "SELECT * FROM tb_user WHERE cd_user = '$name' ";


/**
 * COMO RESOLVER 
 */ 

$name = addslashes( $_POST['name'] ); // Umas das formas: 
// Ele vai substituir  qualquer ' (aspas) por uma barra
$sql = "SELECT * FROM tb_user WHERE cd_user = '$name' ";

/**
 * Usando FILTERS para validação tbm
 */

