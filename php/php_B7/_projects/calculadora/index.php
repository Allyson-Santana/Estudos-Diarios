<style>
    form * {
        padding: 10;
        font-size: 20;
        text-align: center;
    }
</style>

<form action="./result.php" method="get">
    <p>
        <input type="text" pattern="[0-9.,]{1,}" name="number1" placeholder="Numero: " required> 
        <select name="operation" id="operation">
            <option value="0" selected="selected" > + </option>
            <option value="1"> - </option>
            <option value="2"> * </option>
            <option value="3"> / </option>
        </select>
        <input type="text" pattern="[0-9.,]{1,}" name="number2" placeholder="Numero: " required>
        <input type="submit" value="Calcular">
    </p>
</form>