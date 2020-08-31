<?php
require_once('car.php');
require_once('uberX.php');
require_once('account.php');
require_once('uberPool.php');

$uberX = new UberX('BNM789', new Account('Andres Herrera', 'AND456'), 'Chevrolet', 'Spark');
$uberX->printDataCar();

$uberPool = new UberPool('GHJ678', new Account('Andrea Herrera', 'ANO234'), 'Dodge', 'Attitutde');
$uberPool->printDataCar();

?>