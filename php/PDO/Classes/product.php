<?php

declare(strict_types=1);

class Produto 
{
    private PDO $conn;

    public function __construct()
    {
        try {
            $this->conn = new PDO('mysql:host=localhost;dbname=exemplo', 'root', '');
        } catch(Exception $ex) {
            echo $ex->getMessage();
            die();
        }       
    }
    public function list() : array
    {
        $sql = "SELECT * FROM product";
        $products = [];

        foreach ( $this->conn->query($sql) as $key => $product) {
            array_push($products, $product);
        }    
        return $products;
    }

    public function insert(string $name) : int
    {
        $sql = "INSERT INTO product (nm_product) VALUES (?)";
        $prepare = $this->conn->prepare($sql);

        $prepare->bindParam(1, $name);
        $prepare->execute();
        return $prepare->rowCount();
    }

    public function update(string $name, int $id) : int
    {
        $sql = "UPDATE product set nm_product = ? WHERE cd_product = ? ";
        $prepare = $this->conn->prepare($sql);

        $prepare->bindParam(1, $name);
        $prepare->bindParam(2, $id);
        $prepare->execute();

        return $prepare->rowCount();
    }

       public function destroy(int $id) : int
    {
        $sql = "DELETE FROM product WHERE cd_product = ? ";
        $prepare = $this->conn->prepare($sql);
        
        $prepare->bindParam(1, $id);        
        $prepare->execute();

        return $prepare->rowCount();
    }

}