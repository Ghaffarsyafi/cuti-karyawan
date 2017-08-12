<?php 

	// header('content-type: application/json; charset=utf-8');
	header("access-control-allow-origin: *");
	header("content-type: text/json");
	// header('Access-Control-Allow-Origin: http://localhost:4200', true);

	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
	// header('Access-Control-Allow-Credentials: true');
	
	$openServer = mysqli_connect("localhost", "root", "", "angular");  
?>