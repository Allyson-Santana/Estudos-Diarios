<?php
session_start();

if (!empty($_SESSION['email'])) {
    
    session_destroy();

    header("location: login.php");
    exit;
}