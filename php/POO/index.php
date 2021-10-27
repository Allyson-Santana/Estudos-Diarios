<?php

include('Classes/accountBanck.php');

/**
 * NAMED ARGUMENTS
 */
$account = new AccountBank (
    nameTitle: 'Allyson', 
    numberAccount: '171627-9', 
    numberAgency: '1234', 
    bank: 'NuBank',
    accountBalance: 3500
);
print_r($account);


echo $account->getBalance();
echo "<br>";

$account->deposit(300);

echo $account->getBalance(); 
echo "<br>";

$account->withdrawal(400);

echo $account->getBalance(); 
echo "<br><br>";

$date = new DateTime();
echo $date->format('d-m-y h:i:s');
echo "<br>";


/*********  TRABALHANDO COM DATA NO PHP *********/


/**
 * -> P represetação de periodo: vem antes de dia , mês, ano e semana
 * Y anos
 * M meses
 * D dias
 * W semanas
 * -> T representação de tempo: vem antes de hora, minuto e segundo
 * H horas
 * M minutos
 * S segundos
 **/
/** Exemplo de teste
 * P 5anos|10meses|5dias ---- T 10horas|50min|10segundos
 * P   5Y  10M      5D        T   10H    50M     10S
 */

$interval = new DateInterval('P5Y10M5DT10H50M10S'); 
$date->add($interval); // Adiciona tempo
$date->sub($interval); // subtrair tempo
var_dump($date);
echo "<br><br>";

$data = new DateTime();
$data->format('d-m-y h:i:s');
print_r($date);
echo "<br>";
$intervalo = new DateInterval('P5DT10H50M');
$date->sub($intervalo);
print_r($date);

