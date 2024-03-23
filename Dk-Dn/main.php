<?php
$connect = mysql_connect(
    "localhost","root"," ");
if(!$connnect){
    die('could not connect MySQl: ' mysql_errol());
}else{
    echo "Connected to MySQL";

}
mysql_close($connect);
?>
