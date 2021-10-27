<?php

require('src/valitedSession.php');

function name(string $name) : bool
{
    if(!isset($name) || empty($name) || strlen($name) <= 3 || strlen($name) > 30) {
        setMessageError("Verifique se o nome contém entre 3 e 30 caracteres!");
        return false;
    } 
    setMessageSuccess('Nome está ok');
    return true;
}
function email(string $email) : bool
{   
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        setMessageError("Endereço de E-mail inválido");
        return false;
    } 
    setMessageSuccess('E-mail está ok');
    return true;
}
function age(string $age) : bool
{
    if(!is_numeric($age)) {
        setMessageError("Idade não é valída");
        return false;
    }
    setMessageSuccess('Idade está ok');
    return true;
}

