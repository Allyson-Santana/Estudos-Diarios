<?php

/**
 * MD5 é irreversível
 */
$name = "Allyson";
$nameProtect = md5($name);

echo $name . "\n";
echo $nameProtect . "\n";

/**
 * BASE64 é reversível
 */
$name = "Allyson";
echo $name . "\n\n";

$nameProtect = base64_encode($name);
echo "Criptocrafando: " . $nameProtect . "\n\n";

$nameNotProtect = base64_decode($nameProtect);
echo "Descriptocrafando: " . $nameNotProtect . "\n\n";
