<style>
    * {
        font-size: 30;
        padding: 5;
    }
</style>
<table border="1">
    <?php for ( $l = 1; $l < 10; $l++ ): ?>
        <tr> 
            <?php for ( $c = 1; $c < 10; $c++ ): ?>
                <td> <?php echo $l * $c ?> </td>                
            <?php endfor; ?>
        </tr>
    <?php endfor; ?>
</table>