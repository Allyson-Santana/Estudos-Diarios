<?php
session_start();

if ($_SESSION['bank']) {
    session_destroy();
    header("location: login.php");
    exit;
}