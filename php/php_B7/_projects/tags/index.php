<?php

try {
    $PDO = NEW PDO("mysql:dbname=db_b7;host=localhost", "root", "");
} catch (PDOException $ex) {
    echo "ERROR: " . $ex->getMessage();
}

$sql = $PDO->query("SELECT caracteristicas FROM usuarios");
if($sql->rowCount() > 0) {
    $list = $sql->fetchAll(PDO::FETCH_ASSOC);
    $carac = array();
    foreach ($list as $item) {
        $words = explode(",", $item['caracteristicas']);
        foreach ($words as $word) {
            $word = trim($word);
            if(isset($carac[$word])) {
                $carac[$word]++;
            } else {
                $carac[$word] = 1;
            }
        }
    }
    echo "<pre>";
    print_r($carac);
    echo "</pre>";
}