<?php

require('Classes/product.php');

$products = new Produto();


switch ($_GET['operation']) {

    case 'list':
        echo "<h3>Lista de produtos: </h3>";
        foreach ($products->list() as $key => $product) {
            echo 'id: ' . $product['cd_product'] . "<br> Nome: " . $product['nm_product'] . "<hr>";
        }           
        break;

    case 'insert':
        $status = $products->insert('Novo produto');
        if(!$status) {
            echo "Não foi posivel inserir esse produto!";
            return false;
        }
        echo "Registro inserido com sucesso";
        break;

    case 'update':
        $status = $products->update('Cama', 4);
        if(!$status) {
            echo "Não foi posivel inserir esse produto!";
            return false;
        }
        echo "Registro atualizado com sucesso";
        break;

    case 'delete':
        $status = $products->destroy(5);
        if(!$status) {
            echo "Não foi posivel excluir esse produto!";
            return false;
        }
        echo "Produto deletado com sucesso";
        break;
    
    default:
        # code...
        break;
}
