<?php 

session_start();


function setMessageError(string $error) : void
{
    $_SESSION['error'] = $error;
}

function getMessageError() : ?string // NULLSAFE
{
    if(isset($_SESSION['error'])) {
        return $_SESSION['error'];
    }
    return null;
}

function removerSessionError() : void 
{
    if(isset($_SESSION['error'])) {
        unset($_SESSION['error']);
    }
}

function setMessageSuccess(string $success) : void
{
    $_SESSION['success'] = $success;
}

function getMessageSuccess() : ?string 
{
    if(isset($_SESSION['success'])) {
        return $_SESSION['success'];
    }
    return null;
}

function removerSessionSuccess() : void 
{
    if(isset($_SESSION['success'])) {
        unset($_SESSION['success']);
    }
}
