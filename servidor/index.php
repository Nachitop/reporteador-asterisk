<?php

include_once 'apicdr.php';

$db=$_GET['db'];
$common=$_GET['common'];
$userfieldarray=$_GET['userfieldarray'];
$reporte=$_GET['reporte'];

$api= new ApiCdr();


if($common){
    $api->getCommon($db,$common);
}else if($userfieldarray==true){
    $api->getUserFieldArray($db);
}else{
    $desde=$_GET['desde'];
    $hasta=$_GET['hasta'];
    $duration1=$_GET['duration1'];
    $duration2=$_GET['duration2'];
    $src=$_GET['src'];
    $dst=$_GET['dst'];
    $userfield=$_GET['userfield'];
    $api->getAll($db,$reporte,$desde,$hasta,$duration1,$duration2,$src,$dst,$userfield);
}


// else if($reporte==="all"){
//     $api->getAll($db);
// }else if($reporte==="calldate"){
//     $desde=$_GET['desde'];
//     $hasta=$_GET['hasta']
//     $api->getCalldate($db,$desde,$hasta);
// }

?>