<?php

class DB{
    private $host="localhost";
    private $username="root";
    private $password="root";
    private $database;

    public $connection;

    public function __construct($database){
        $this->database=$database;
    }

    //get the database connection
    public function getConnection(){
    $this->connection=null;
        try {
            $this->connection = new PDO("mysql:host=" .$this->host.";dbname=".$this->database,$this->username,$this->password);
            $this->connection->exec("set names utf8");
        } catch (PDOException $exception) {
           echo "Connection error: ".$exception->getMessage();
        }
        return $this->connection;
    }
   
}


?>