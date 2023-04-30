<?php

$username="root";
$password='';
$server='localhost:3307';
$db='practice';

$connection = mysqli_connect($server, $username, $password, $db);

if($connection){
    echo "Connection succsessful.";
}
else{
    echo "Not connected.";
}

?>