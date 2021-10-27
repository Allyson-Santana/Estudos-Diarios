<?php
// Makes a stronger typing 
// Required is at the beginning of the script
declare(strict_types=1);


session_start();

// set SESSION
$_SESSION['name_message'];

// detroy SESSION
unset($_SESSION['messgae']);

// redirect to a page
header('location: index.php');

// you can use this:
declare(ticks=1) {
    // entire script here
}

// or you can use this:
declare(ticks=1);
// entire script here

// sintaxe mordant function 
function func(string $func) : bool 
{
    // code...
    return true; // or false
}

// sintaxe mordant function | allows you to return type null
function getMessageError() : ?string // this ?
{
    return null;
}



//Just in Time




