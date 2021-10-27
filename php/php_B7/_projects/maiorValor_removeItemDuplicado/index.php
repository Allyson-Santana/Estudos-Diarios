<?php

$items = [1,3,46,8,7,6,76,9,45,3,45,7,4,3,1,7,9];

if( !empty($_GET['order']) ) {
    if ( $_GET['order'] == '1' ) {
        //code...
        asort($items);
    } else {
        //code...
        arsort($items);
    }
}

$max = max($items);
$min = min($items);


echo "Maior numero: ";
echo $max;

echo "<br><br>";

echo "Menor numero: ";
echo $min;

echo "<br><br>";

echo "Array sem numeros duplicados: ";
$notDuplicate = array_unique($items);

?>
<form action="" style="margin-top:5px;" method="get">
    <label title="order">Ordem inversa</label>
    <input type="checkbox" <?php (!empty($_GET['order'])&& $_GET['order'] == 1) ? "checked" : "" ?> value="1" onchange="this.form.submit()" name="order" id="order">
    <label title="order">Ordem inversa</label>
    <input type="checkbox" <?php (!empty($_GET['order'])&& $_GET['order'] == 2) ? "checked" : "" ?> value="2" onchange="this.form.submit()" name="order" id="order">
</form>
<?php

echo "<pre>";
print_r($items);

echo "<br><br>";

?>
