<?php

require('src/valited.php');

$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];

age($age);
email($email);
name($name);


header('location: index.php');




