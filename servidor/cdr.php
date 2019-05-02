<?php 


   
    class Cdr{
        private $connection;
        //table_name
        private $table_name="cdr";

        //table columns
        // public $calldate;
        // public $clid;
        // public $src;
        // public $dst;
        // public $dcontext;
        // public $channel;
        // public $dstchannel;
        // public $lastapp;
        // public $lastdata;
        // public $duration;
        // public $billsec;
        // public $disposition;
        // public $amaflgs;
        // public $accountcode;
        // public $uniqueid;
        // public $userfield;


        public function __construct($connection){
            $this->connection=$connection;
        }

        public function obtenerCDRs($reporte,$desde,$hasta,$duration1,$duration2,$src,$dst,$userfield){
            if($reporte==="all"){
                $query="select * from " .$this->table_name;
            }else if($reporte==="calldate"){
                $query="select * from ".$this->table_name . " where date(calldate) between date('".$desde ."') and date('".$hasta."')";
            }else if($reporte==="src"){
                $query="select * from ".$this->table_name . " where src='".$src."'";
            }else if($reporte==="dst"){
                $query="select * from ".$this->table_name . " where dst='".$dst."'";
            }else if($reporte==="userfield"){
                $query="select * from ".$this->table_name . " where userfield='".$userfield."'";
            }else if($reporte==="duration"){
                $query="select * from ".$this->table_name . " where duration between ".$duration1." and ".$duration2 ;
            }
            
            $stmt= $this->connection->prepare($query);
            $stmt->execute();
            return $stmt;
        }


        public function obtenerCommon($common){
            $query="select distinct ". $common ." "."from ".$this->table_name;
            $stmt=$this->connection->prepare($query);
            $stmt->execute();
            return $stmt;
        }


        public function obtenerUserFieldArray(){
            $query="select distinct userfield from " .$this->table_name;
            $stmt=$this->connection->prepare($query);
            $stmt->execute();
            return $stmt;
        }


        // public function obtenerCalldate($desde,$hasta){
        //     $query="select * from ".$this->table_name . " where calldate between ".$desde ." and ".$hasta;
        //     $stmt=$this->connetion->prepare($query);
        //     $stmt->execute();
        //     return $stmt;
        // }
    }
?>