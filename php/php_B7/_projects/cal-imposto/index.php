<?php
    if ( !empty($_GET['product']) && !empty($_GET['tax']) ) {
        $product = $_GET['product'];
        $tax = $_GET['tax'];
        $x = $product * $tax / 100;
        $cal = $product - $x;
    }
?>

<style>
    form *, p {
        padding: 10;
        font-size: 20;
    }
    
</style>


<h1>Calculadora de de Imposto</h1>

<form action="" method="get">
    <p>
        <label for="valor">Valor do produto: </label><br><br>
        <input type="number" name="product" pattern="[0-9.,]{1,}" placeholder="Valor do produto: ">
    </p>
    <p>
        <label for="valor">Valor do imposto: (em %) </label><br><br>
        <input type="number" name="tax" pattern="[0-9.,]{1,}" placeholder="Valor do imposto: ">
    </p>
    <p><input type="submit" value="Calcular"></p>

</form>

<?php if ( isset($cal) ): ?>
    <p> Valor do produto: R$ <?php echo $product; ?> </p>
    <p> Taxa de imposto: <?php echo $tax . "%"; ?> </p>
    <hr>
    <p> Imposto: R$ <?php echo $x;   ?> </p>
    <p> Produto: R$ <?php echo $cal; ?> </p>
<?php endif; ?>