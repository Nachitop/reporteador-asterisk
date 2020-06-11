<?php

include_once 'apicdr.php';

$db=$_GET['db'];
$desde=$_GET['desde'];
$hasta=$_GET['hasta'];
$origen=$_GET['origen'];
$destino=$_GET['destino'];

$api= new ApiCdr();
$api->getAll($db,$desde,$hasta,$origen,$destino);
?>