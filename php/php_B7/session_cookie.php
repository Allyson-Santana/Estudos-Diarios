<?php
/**
 * SESSION
 */
session_start(); // inicia um Session

// Armazenar 
$_SESSION['myName'] = "allyson Santana";

// Resgata
echo $_SESSION['myName'];

// destroy uma session
session_unset($_SESSION['myName']);

die; // fechar a session

/**********************************************************************/

/**
 * COOKIE
 */

 /**
  * 1° param é o nome do cookie
  * 2° Valor que quero pegar
  * 3° param é o tempo de duração dele
  */
setcookie("teste", "Fulano de tal", time() + 3600 );
echo "Cookie setado com sucesso!";

// Resgata 
$myCookie = $_COOKIE['teste'];
echo "Meu cookie é de: '$myCookie'";
