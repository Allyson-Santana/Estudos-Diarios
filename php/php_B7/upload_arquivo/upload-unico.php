<?php

$file = $_FILES['arquivo'];

if(isset($file['tmp_name']) && !empty($file['tmp_name'])) {

    /**
    * move o arquivo para a pasta selecionada 
    * 1° param é qual arquivo deseja move
    * 2° param é o caminho + o nome do arquivo
    */
    $newNameArquivo = md5( time() . rand(0, 99) . '.jpg' ); // phg | jpg | etec... 
    move_uploaded_file( $file['tmp_name'], 'arquivos-uploads/'. $newNameArquivo );

}

print_r($file);

?>

<form method="POST" enctype="multipart/form-data">
    <input type="file" name='arquivo'>
            <br><br>
    <input type="submit" value="Enviar">
</form>