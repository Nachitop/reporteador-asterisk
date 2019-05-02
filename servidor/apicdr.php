<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include_once 'cdr.php';
include_once 'db.php';

class ApiCdr{

   
    function getAll($databse,$reporte, $desde,$hasta,$duration1,$duration2,$src,$dst,$userfield){
        $db= new DB($databse);
        $connection=$db->getConnection();
        $cdr= new Cdr($connection);
        $res=$cdr->obtenerCDRs($reporte,$desde,$hasta,$duration1,$duration2,$src,$dst,$userfield);
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
                     "dcontext"=>$dcontext,
                     "channel"=>$channel,
                     "dstchannel"=>$dstchannel,
                    "lastapp"=> $lastapp,
                     "lastdata"=>$lastdata,
                     "duration"=>$duration,
                     "billsec"=>$billsec,
                     "disposition"=>$disposition,
                     "amaflags"=>$amaflags,
                     "accountcode"=>$accountcode,
                     "uniqueid"=>$uniqueid,
                     "userfield"=>$userfield
            
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



    function getCommon($databse,$common){
        $db= new DB($databse);
        $connection=$db->getConnection();
        $cdr= new Cdr($connection);
        $res=$cdr->obtenerCommon($common);
        if($res->rowCount()>0){
            $common_arr= array();
            $common_arr['body']=array();
            while($row=$res->fetch(PDO::FETCH_ASSOC)){
              array_push($common_arr['body'],$row);  
            }
            http_response_code(200);
            echo json_encode($common_arr);
        }else{
            http_response_code(400);
            echo json_encode(
                array("message"=>"No se encontraron commons")
            );
        }
    }

    function getUserFieldArray($database){
        $db= new DB($database);
        $connection=$db->getConnection();
        $cdr=new Cdr($connection);
        $res=$cdr->obtenerUserFieldArray();
        if($res->rowCount()>0){
            $user_array=array();
            $user_array['body']=array();
            while($row=$res->fetch(PDO::FETCH_ASSOC)){
                array_push($user_array['body'],$row);
            }
            http_response_code(200);
            echo json_encode($user_array);
        }else{
            http_response_code(400);
            echo json_encode(array("message"=>"No se encontraron users"));
        }
    }

    // function getCalldate($database,$desde,$hasta){
    //     $db= new DB($database);
    //     $connection= $db->getConnection();
    //     $cdr=new Cdr($connection);
    //     $res=$cdr->obtenerCalldate();
    //     if($res->rowCount()>0){
    //         $calldate_array=array();
    //         $calldate_array['body']=array();
    //         while($row=$res->fetch(PDO::FETCH_ASSOC)){
    //             array_push($calldate_array['body'],$row);
    //         }
    //         http_response_code(200);
    //         echo json_encode($user_array);
    //     }else{
    //         http_response_code(400);
    //         echo json_encode(array("message"=>"No se encontraron users"));
    //     }
    // }
}






?>

