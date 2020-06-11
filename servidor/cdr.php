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

        public function obtenerCDRs($desde,$hasta,$origen,$destino){
            $query="select calldate,clid,src,dst,duration,disposition from " .$this->table_name ." where date(calldate) between  date('".$desde ."') and date('".$hasta ."')";
            $query2="";
            if(!empty($origen) && !empty($destino)){
                $query2=" and  src='".$origen ."' and dst='".$destino."'";
            } elseif(!empty($origen)){
                $query2=" and src='".$origen."'";
            } else{
                $query2=" and dst='".$destino ."'";
            }

            $query=$query . $query2;
            
            $stmt= $this->connection->prepare($query);
            $stmt->execute();
            return $stmt;
        }
    }
?>