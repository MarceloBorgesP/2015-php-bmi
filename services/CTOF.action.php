<?php
require 'CTOFService.class.php';
$celsius = $_GET['celsius'];
$fahrenheit = 0.0;
if(is_numeric($celsius)) {
    $fahrenheit = CTOFService::convert($celsius);
}

echo $fahrenheit;
?>