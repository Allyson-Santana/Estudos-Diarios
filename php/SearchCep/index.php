<?php

require_once "vendor/autoload.php";

use Allyson\SearchCep\Search;

$search = new Search();
$response = $search->getAddressFromZipcode('11335000');

print_r($response);

