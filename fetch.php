<?php 
include("config.php");
$blog=array();
$result = $mysqli->query("SELECT * FROM news");
$i=0;
while($row = $result->fetch_assoc())
{
	$blog[$i]['title'] =$row['title'];
	$blog[$i]['description'] =$row['desc'];
	$i++;
}
echo json_encode($blog);
?>
