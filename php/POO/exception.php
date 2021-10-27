<?php

/**
 *  throw new Exception('Essa é minha exceção');
 *  echo "\n... executando ...\n"; 
 **/

 function valitedUser(array $user) : string
 {  
    if( empty($user['id']) || empty($user['name']) || empty($user['age']) ) {
        throw new Exception('Campos Obrigátorios não foram preenchidos');
    }
    return true;
 }

 $user = [
     'id' => 1,
     'name' => 'ss',
     'age' => 20
 ];
 
 $status = false;

 
try {
    // Se for gerado alguma exceção aqui dentro do try 
    // ele vai direto para o CATCH Exception
    $status = valitedUser($user);

} catch(Exception $ex) {
    // Sempre bom pernalizar a messagem para o Usuario entender o ocorreu
    echo $ex->getMessage();
    die();
} finally {
    echo "Status de Operação: " . (int)$status;  // CAST
}

echo "\n... executando ...\n";

echo "<br><br>";


/* ******** TESTE DE CONHECIMENTO ********* */
declare(ticks=1) {

    function division(float $n1, float $n2) : float 
    {
        if($n1 == 0 || $n2 == 0) {
            throw new Exception("Os numero não podem contém o valor 0");
        }
        return true;
    }

    try {

        $division = division(12,0);

    } catch(Exception $ex) {

        echo $ex->getMessage();
        die();

    } finally {

        echo "A divisão é igual a: " . $division;

    }
    
}
