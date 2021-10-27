<?php
/**
 * date
 */
$date = date('d-m-Y');
echo $date . "\n";

/**
 * time
 */
$time = time();
echo $time . "\n";

/**
 * mktime
 */
$mktime = date("d-m-Y", mktime(0, 0, 0, 12, 32, 1997));
echo $mktime . "\n";

/**
 * strtotime
 */
$strToTime = date('d/m/Y', strtotime('+10 days'));
echo $strToTime . "\n";


// entre outras........