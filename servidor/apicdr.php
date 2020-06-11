<?php
header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Methods: PUT, GET, POST");
//header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");
include_once 'cdr.php';
include_once 'db.php';

class ApiCdr{

    function getAll($databse,$desde,$hasta,$origen,$destino){
        $db= new DB($databse);
        $connection=$db->getConnection();
        $cdr= new Cdr($connection);
        $res=$cdr->obtenerCDRs($desde,$hasta,$origen,$destino);
        if($res->rowCount()>0){
            $cdrs_arr=array();
            $cdrs_arr["body"]=array();
            $cdrs_arr["count"]=$res->rowCount();
            while($row=$res->fetch(PDO::FETCH_ASSOC)){
                extract($row);
                $cdr_item=array(
                "calldate"=>$calldate,
                     "clid"=>$clid,
                     "src"=>$src,
                     "dst"=>$dst,
                     "duration"=>$duration,
                     "disposition"=>$disposition,
                );
                array_push($cdrs_arr["body"],$cdr_item);
            }
            http_response_code(200);
            echo json_encode($cdrs_arr);
        }else{
            http_response_code(400);
            echo json_encode(
                array("message"=>"No se encontraron registros")
            );
        }
    }

}






?>

