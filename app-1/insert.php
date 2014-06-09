<?php 
include("config.php");
$title=$_POST['title'];
$desc=$_POST['description'];
$date=@date("Y-m-d h:i:s");
$result = $mysqli->query("insert into news(`title`,`desc`,`created`) values('$title','$desc','$date')"); 
?>
