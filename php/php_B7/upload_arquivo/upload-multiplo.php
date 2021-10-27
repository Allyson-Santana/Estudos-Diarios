<?php

    if( isset($_FILES['arquivos']) ) {
        if( count($_FILES['arquivos']['tmp_name']) > 0 ) {
            
            for( $i = 0; count($_FILES['arquivos']['tmp_name']); $i++ ) {

                $nameArquivo = md5( $_FILES['arquivos']['name'][$i] . time() . rand(0,99) . '.jpg' );
                move_uploaded_file( $_FILES['arquivos']['tmp_name'][$i], 'arquivos-uploads/' . $nameArquivo );

            }

        }
    }

    
?>


<form action="upload.php" method="POST" enctype="multipart/form-data">
    <input type="file" name='arquivos[]' multiple>
            <br><br>
    <input type="submit" value="Enviar">
</form>


<pre>
    <!-- Exiber de modo formatado -->
    <?php print_r($file); ?>
</pre>
