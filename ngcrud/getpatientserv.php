<?php
	header('Access-Control-Allow-Origin: *'); 
	header("Content-type: text/json");

	$username =$_GET['username'];
	$password =$_GET['password'];

	include("db.php");

	$arr = array(
	           "returnCode" => '222'
	             );
	// $getAnswer =mysqli_query($connect,"SELECT * FROM patient WHERE pid ='$pid' ");
	$getAnswer =mysqli_query($connect, "SELECT * FROM tbllogin WHERE username ='$username' " . " AND password='$password'" );

	while($answerArray=mysqli_fetch_array($getAnswer)){
	  $arr = array(
	             "returnCode" => '111',
	             "password" => $answerArray['password'],
	             "username" => $answerArray['username']
	               );
	}
	echo json_encode($arr);

 ?>
